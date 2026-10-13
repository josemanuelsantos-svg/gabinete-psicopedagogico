import { ReferralCase, StudentNEAE } from '../types';
import { generateSecureCaseId, logSecurityEvent, maskIdentifier } from '../utils/privacyAudit';

const FIREBASE_BASE_URL = 'https://avengers-6a-cbbcc-default-rtdb.europe-west1.firebasedatabase.app/edubuenaventura';
const FIRESTORE_API_KEY = "AIzaSyBlgbaGrSIjdaqXI0SVbZgdim5z8uNzBxs";
const FIRESTORE_PROJECT = "comedorcsb";
const FIRESTORE_COLLECTION = "gabinete_cases";

let cachedToken: string | null = null;
let tokenExpiry = 0;

async function getAuthToken(): Promise<string | null> {
  if (cachedToken && Date.now() < tokenExpiry) {
    return cachedToken;
  }
  try {
    const saved = localStorage.getItem('edubuenaventura_fb_token');
    const savedExp = Number(localStorage.getItem('edubuenaventura_fb_token_exp') || 0);
    if (saved && Date.now() < savedExp) {
      cachedToken = saved;
      tokenExpiry = savedExp;
      return cachedToken;
    }
  } catch (e) {}

  try {
    const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIRESTORE_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ returnSecureToken: true })
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.idToken) {
      cachedToken = data.idToken;
      const expiresInSec = Number(data.expiresIn || 3600);
      tokenExpiry = Date.now() + (expiresInSec - 120) * 1000;
      try {
        localStorage.setItem('edubuenaventura_fb_token', cachedToken!);
        localStorage.setItem('edubuenaventura_fb_token_exp', String(tokenExpiry));
      } catch (e) {}
      return cachedToken;
    }
  } catch (err) {
    console.warn('Error al obtener token Firestore:', err);
  }
  return null;
}

export interface CurrentUserSession {
  email: string;
  name: string;
  role: 'DOCENTE' | 'ORIENTADOR';
}

export const FirebaseService = {
  // 1. Obtener expedientes respetando el aislamiento por rol
  async getCases(session?: CurrentUserSession | null): Promise<ReferralCase[]> {
    if (!session) {
      logSecurityEvent({
        action: 'CONSULTA_DENEGADA',
        actorEmail: 'anonimo',
        actorRole: 'ANONIMO',
        success: false,
        notes: 'Intento de consulta sin sesión institucional activa'
      });
      return [];
    }

    // 1. Obtener casos guardados localmente
    let localCases: ReferralCase[] = [];
    try {
      const stored = localStorage.getItem('edubuenaventura_cases');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) localCases = parsed;
      }
    } catch (storageErr) {
      console.warn('Error al leer casos locales:', storageErr);
    }

    // 2. Obtener casos de la nube en Firestore
    let cloudCases: ReferralCase[] = [];
    try {
      const token = await getAuthToken();
      if (token) {
        const url = `https://firestore.googleapis.com/v1/projects/${FIRESTORE_PROJECT}/databases/(default)/documents/${FIRESTORE_COLLECTION}?pageSize=300`;
        const res = await fetch(url, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          const docs = data.documents || [];
          cloudCases = docs.map((d: any) => {
            try {
              if (d.fields?.caseJson?.stringValue) {
                return JSON.parse(d.fields.caseJson.stringValue) as ReferralCase;
              }
            } catch (pErr) {
              console.warn('Error al parsear expediente remoto:', pErr);
            }
            return null;
          }).filter(Boolean);
        }
      }
    } catch (fetchErr) {
      console.warn('Error al consultar Firestore en la nube:', fetchErr);
    }

    // Combinar casos locales y de la nube deduplicando por ID
    const caseMap = new Map<string, ReferralCase>();
    localCases.forEach(c => caseMap.set(c.id, c));
    cloudCases.forEach(c => caseMap.set(c.id, c));
    const normalizedList = Array.from(caseMap.values());

    // Actualizar almacenamiento local con los casos sincronizados de la nube
    try {
      localStorage.setItem('edubuenaventura_cases', JSON.stringify(normalizedList));
    } catch (e) {}

    // Aislamiento por rol: Docente solo ve sus propias derivaciones; Orientación ve todas
    if (session.role === 'DOCENTE') {
      const teacherCases = normalizedList.filter(c => 
        (c.createdByEmail && c.createdByEmail.toLowerCase() === session.email.toLowerCase()) ||
        (c.questionnaire?.teacherEmail && c.questionnaire.teacherEmail.toLowerCase() === session.email.toLowerCase()) ||
        (c.teacherName && c.teacherName.toLowerCase() === session.name.toLowerCase())
      );
      logSecurityEvent({
        action: 'CONSULTA_EXPEDIENTE',
        actorEmail: session.email,
        actorRole: session.role,
        success: true,
        notes: `Consulta de ${teacherCases.length} expedientes propios del docente`
      });
      return teacherCases;
    }

    logSecurityEvent({
      action: 'CONSULTA_EXPEDIENTE',
      actorEmail: session.email,
      actorRole: session.role,
      success: true,
      notes: `Acceso global de Orientación a ${normalizedList.length} expedientes`
    });
    return normalizedList;
  },

  // 2. Guardar o actualizar un expediente con validación de backend
  async saveCase(referralCase: ReferralCase, session?: CurrentUserSession | null): Promise<{ success: boolean; error?: string }> {
    if (!session) {
      return { success: false, error: 'Sesión no autorizada. Debes identificarte para enviar una derivación.' };
    }

    // Backend Integrity Validations
    if (!referralCase.studentName || referralCase.studentName.trim().length < 2) {
      return { success: false, error: 'El nombre del alumno/a es obligatorio y debe contener al menos 2 caracteres.' };
    }

    if (!referralCase.grade || referralCase.grade.trim() === '') {
      return { success: false, error: 'Debes seleccionar el curso y grupo del alumno/a.' };
    }

    if (!referralCase.questionnaire.mainReason || referralCase.questionnaire.mainReason.trim().length < 10) {
      return { success: false, error: 'El motivo principal de consulta debe ser descriptivo (mínimo 10 caracteres).' };
    }

    if (!referralCase.privacyConsent || !referralCase.privacyConsent.acceptedAt) {
      return { success: false, error: 'Falta la aceptación obligatoria de la cláusula de privacidad RGPD.' };
    }

    // Asegurar que el ID sea un UUIDv4 no predecible
    const finalCase: ReferralCase = {
      ...referralCase,
      id: referralCase.id && referralCase.id.length === 36 ? referralCase.id : generateSecureCaseId(),
      createdByEmail: session.email,
      dateSubmitted: new Date().toISOString().split('T')[0]
    };

    // 1. Guardar SIEMPRE en almacenamiento local para asegurar que la derivación no se pierda nunca
    try {
      const stored = localStorage.getItem('edubuenaventura_cases');
      let currentLocal: ReferralCase[] = stored ? JSON.parse(stored) : [];
      if (!Array.isArray(currentLocal)) currentLocal = [];
      const existingIdx = currentLocal.findIndex(c => c.id === finalCase.id);
      if (existingIdx >= 0) {
        currentLocal[existingIdx] = finalCase;
      } else {
        currentLocal = [finalCase, ...currentLocal];
      }
      localStorage.setItem('edubuenaventura_cases', JSON.stringify(currentLocal));
    } catch (storageErr) {
      console.warn('Advertencia al persistir en almacenamiento local:', storageErr);
    }

    // 2. Sincronizar en la nube con Firestore en tiempo real
    try {
      const token = await getAuthToken();
      if (token) {
        const url = `https://firestore.googleapis.com/v1/projects/${FIRESTORE_PROJECT}/databases/(default)/documents/${FIRESTORE_COLLECTION}/${finalCase.id}`;
        const docPayload = {
          fields: {
            id: { stringValue: finalCase.id },
            createdByEmail: { stringValue: finalCase.createdByEmail },
            teacherName: { stringValue: finalCase.teacherName || '' },
            studentName: { stringValue: finalCase.studentName || '' },
            grade: { stringValue: finalCase.grade || '' },
            status: { stringValue: finalCase.status || 'PENDIENTE_REVISION' },
            dateSubmitted: { stringValue: finalCase.dateSubmitted },
            caseJson: { stringValue: JSON.stringify(finalCase) }
          }
        };

        const response = await fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(docPayload)
        });

        if (response.ok) {
          logSecurityEvent({
            action: 'CREACION_EXPEDIENTE',
            actorEmail: session.email,
            actorRole: session.role,
            caseIdMasked: maskIdentifier(finalCase.id),
            success: true,
            notes: 'Expediente registrado en la nube Firestore con identificador no predecible y consentimiento RGPD'
          });
          return { success: true };
        }
      }
    } catch (networkError) {
      console.warn('Error al sincronizar con Firestore, caso asegurado localmente:', networkError);
    }

    logSecurityEvent({
      action: 'CREACION_EXPEDIENTE',
      actorEmail: session.email,
      actorRole: session.role,
      caseIdMasked: maskIdentifier(finalCase.id),
      success: true,
      notes: 'Expediente guardado en almacenamiento local (modo offline/resiliente)'
    });

    // El expediente SÍ se ha guardado de forma segura en el almacenamiento local del dispositivo
    return { success: true };
  },

  // 3. Obtener alumnos NEAE
  async getNeaeStudents(session?: CurrentUserSession | null): Promise<StudentNEAE[]> {
    if (!session) return [];

    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/neae.json`);
      if (!response.ok) throw new Error('Error de conexión');
      const data = await response.json();
      if (!data) return [];
      
      const rawList: any[] = typeof data === 'object' ? Object.values(data) : (Array.isArray(data) ? data : []);

      return rawList.map((item: any, idx: number) => {
        const tips = Array.isArray(item.tips) ? item.tips : [];
        const methodological = item.guidelines?.methodologicalAdaptations || (tips.length > 0 ? tips : [
          'Instrucciones paso a paso.',
          'Apoyo visual y anticipación.',
          'Fraccionamiento de tareas.'
        ]);

        return {
          id: item.id || `NEAE-${100 + idx}`,
          name: item.name || 'Alumno NEAE',
          grade: item.grade || '1º Primaria',
          category: item.category || 'ACNEAE - Apoyo Educativo',
          tutor: item.tutor || 'Tutor de Aula',
          curricularAdaptation: item.adaptation || item.curricularAdaptation || 'No Significativa (ACNS)',
          status: item.status || 'Activo',
          lastReviewDate: item.lastReviewDate || '2026-10-08',
          ptTeacher: item.ptTeacher || (item.category?.includes('Específico') ? 'Daniel Asenjo (PT)' : undefined),
          guidelines: {
            generalGoal: item.goal || item.guidelines?.generalGoal || 'Intervención educativa y metodológica adaptada en aula.',
            methodologicalAdaptations: methodological,
            environmentalAdaptations: item.guidelines?.environmentalAdaptations || [
              'Ubicación en primera fila cerca del profesor o pizarra.',
              'Espacio estructurado y libre de distracciones visuales.'
            ],
            evaluationAdaptations: item.guidelines?.evaluationAdaptations || [
              'Dar 25% más de tiempo en controles y exámenes.',
              'Lectura oral previa de enunciados complejos.'
            ],
            emotionalTips: item.guidelines?.emotionalTips || [
              'Reforzamiento positivo constante ante el esfuerzo.',
              'Validación de la frustración y clima seguro.'
            ],
            ptHoursPerWeek: item.guidelines?.ptHoursPerWeek || (item.category?.includes('Específico') ? 3 : 0)
          }
        } as StudentNEAE;
      });
    } catch (error) {
      return [];
    }
  },

  // 4. Guardar alumno NEAE (Exclusivo Orientación)
  async saveNeaeStudent(student: StudentNEAE, session?: CurrentUserSession | null): Promise<boolean> {
    if (!session || session.role !== 'ORIENTADOR') {
      logSecurityEvent({
        action: 'CONSULTA_DENEGADA',
        actorEmail: session?.email || 'anonimo',
        actorRole: session?.role || 'ANONIMO',
        success: false,
        notes: 'Intento no autorizado de editar censo NEAE'
      });
      return false;
    }

    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/neae/${student.id}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
      });

      if (response.ok) {
        logSecurityEvent({
          action: 'EDICION_CENSO_NEAE',
          actorEmail: session.email,
          actorRole: session.role,
          success: true,
          notes: `Guardado/actualizado alumno NEAE ${student.name} (${student.id})`
        });
      }

      return response.ok;
    } catch (error) {
      return false;
    }
  },

  // 5. Eliminar alumno NEAE del censo (Exclusivo Orientación)
  async deleteNeaeStudent(studentId: string, session?: CurrentUserSession | null): Promise<boolean> {
    if (!session || session.role !== 'ORIENTADOR') {
      logSecurityEvent({
        action: 'CONSULTA_DENEGADA',
        actorEmail: session?.email || 'anonimo',
        actorRole: session?.role || 'ANONIMO',
        success: false,
        notes: `Intento no autorizado de eliminar alumno NEAE ${studentId}`
      });
      return false;
    }

    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/neae/${studentId}.json`, {
        method: 'DELETE'
      });

      if (response.ok) {
        logSecurityEvent({
          action: 'BAJA_CENSO_NEAE',
          actorEmail: session.email,
          actorRole: session.role,
          success: true,
          notes: `Eliminado alumno NEAE ${studentId} por Orientación`
        });
      }

      return response.ok;
    } catch (error) {
      return false;
    }
  }
};
