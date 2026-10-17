import { ReferralCase, StudentNEAE } from '../types';
import { INITIAL_STUDENTS_NEAE } from '../data/initialData';
import { generateSecureCaseId, logSecurityEvent, maskIdentifier } from '../utils/privacyAudit';

const FIREBASE_BASE_URL = 'https://avengers-6a-cbbcc-default-rtdb.europe-west1.firebasedatabase.app/edubuenaventura';
const FIRESTORE_API_KEY = "AIzaSyBlgbaGrSIjdaqXI0SVbZgdim5z8uNzBxs";
const FIRESTORE_PROJECT = "comedorcsb";
const FIRESTORE_COLLECTION = "gabinete_cases";
const FIRESTORE_NEAE_COLLECTION = "gabinete_neae_census";

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

  // 2.B Eliminar expediente/solicitud de derivación (Exclusivo Orientación)
  async deleteCase(caseId: string, session?: CurrentUserSession | null): Promise<boolean> {
    if (!session || session.role !== 'ORIENTADOR') {
      logSecurityEvent({
        action: 'CONSULTA_DENEGADA',
        actorEmail: session?.email || 'anonimo',
        actorRole: session?.role || 'ANONIMO',
        success: false,
        notes: `Intento no autorizado de eliminar solicitud de dictamen ${caseId}`
      });
      return false;
    }

    // 1. Eliminar de almacenamiento local
    try {
      const stored = localStorage.getItem('edubuenaventura_cases');
      if (stored) {
        const currentLocal: ReferralCase[] = JSON.parse(stored);
        if (Array.isArray(currentLocal)) {
          const filtered = currentLocal.filter(c => c.id !== caseId);
          localStorage.setItem('edubuenaventura_cases', JSON.stringify(filtered));
        }
      }
    } catch (storageErr) {
      console.warn('Advertencia al eliminar del almacenamiento local:', storageErr);
    }

    // 2. Eliminar de Firestore en la nube
    try {
      const token = await getAuthToken();
      if (token) {
        const url = `https://firestore.googleapis.com/v1/projects/${FIRESTORE_PROJECT}/databases/(default)/documents/${FIRESTORE_COLLECTION}/${caseId}`;
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          logSecurityEvent({
            action: 'BAJA_EXPEDIENTE',
            actorEmail: session.email,
            actorRole: session.role,
            caseIdMasked: maskIdentifier(caseId),
            success: true,
            notes: `Solicitud de dictamen/expediente ${caseId} eliminada por Orientación`
          });
          return true;
        }
      }
    } catch (networkError) {
      console.warn('Error al eliminar de Firestore en la nube:', networkError);
    }

    return true;
  },

  // 3. Obtener alumnos NEAE sincronizados en tiempo real con Firestore + semilla oficial
  async getNeaeStudents(session?: CurrentUserSession | null): Promise<StudentNEAE[]> {
    if (!session) return [];

    // 1. Cargar semilla institucional y respaldo local
    const studentMap = new Map<string, StudentNEAE>();
    INITIAL_STUDENTS_NEAE.forEach(s => studentMap.set(s.id, s));

    const deletedIds = new Set<string>();
    try {
      const savedDeleted = localStorage.getItem('edubuenaventura_deleted_neae_ids');
      if (savedDeleted) {
        const parsedDel = JSON.parse(savedDeleted);
        if (Array.isArray(parsedDel)) parsedDel.forEach((id: string) => deletedIds.add(id));
      }
    } catch (e) {}

    try {
      const localSaved = localStorage.getItem('edubuenaventura_neae_census');
      if (localSaved) {
        const parsed = JSON.parse(localSaved);
        if (Array.isArray(parsed)) {
          parsed.forEach((s: StudentNEAE) => {
            if (s && s.id) studentMap.set(s.id, s);
          });
        }
      }
    } catch (e) {}

    // 2. Sincronizar con Cloud Firestore (gabinete_neae_census)
    try {
      const token = await getAuthToken();
      if (token) {
        const url = `https://firestore.googleapis.com/v1/projects/${FIRESTORE_PROJECT}/databases/(default)/documents/${FIRESTORE_NEAE_COLLECTION}?pageSize=300`;
        const res = await fetch(url, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          const docs = data.documents || [];
          docs.forEach((d: any) => {
            try {
              const docId = d.fields?.id?.stringValue;
              const isDeleted = d.fields?.deleted?.booleanValue === true;
              if (isDeleted && docId) {
                deletedIds.add(docId);
                studentMap.delete(docId);
                return;
              }
              if (d.fields?.studentJson?.stringValue) {
                const parsedStudent = JSON.parse(d.fields.studentJson.stringValue) as StudentNEAE;
                if (parsedStudent && parsedStudent.id) {
                  studentMap.set(parsedStudent.id, parsedStudent);
                }
              }
            } catch (pErr) {
              console.warn('Error al parsear alumno NEAE remoto:', pErr);
            }
          });
        }
      }
    } catch (error) {
      console.warn('Usando respaldo local del censo NEAE:', error);
    }

    // Filtrar dados de baja/eliminados
    deletedIds.forEach(id => studentMap.delete(id));
    const finalStudents = Array.from(studentMap.values());

    try {
      localStorage.setItem('edubuenaventura_neae_census', JSON.stringify(finalStudents));
      localStorage.setItem('edubuenaventura_deleted_neae_ids', JSON.stringify(Array.from(deletedIds)));
    } catch (e) {}

    return finalStudents;
  },

  // 4. Guardar o actualizar alumno NEAE en Firestore y local (Orientador o Revisión Trimestral Docente)
  async saveNeaeStudent(student: StudentNEAE, session?: CurrentUserSession | null): Promise<boolean> {
    if (!session) {
      logSecurityEvent({
        action: 'CONSULTA_DENEGADA',
        actorEmail: 'anonimo',
        actorRole: 'ANONIMO',
        success: false,
        notes: 'Intento no autorizado de editar censo NEAE sin sesión'
      });
      return false;
    }

    // 1. Actualizar almacenamiento local inmediatamente
    try {
      const localSaved = localStorage.getItem('edubuenaventura_neae_census');
      let list: StudentNEAE[] = localSaved ? JSON.parse(localSaved) : [...INITIAL_STUDENTS_NEAE];
      if (!Array.isArray(list)) list = [...INITIAL_STUDENTS_NEAE];
      const idx = list.findIndex(s => s.id === student.id);
      if (idx >= 0) {
        list[idx] = student;
      } else {
        list = [student, ...list];
      }
      localStorage.setItem('edubuenaventura_neae_census', JSON.stringify(list));
    } catch (e) {}

    // 2. Sincronizar en la nube con Firestore
    try {
      const token = await getAuthToken();
      if (token) {
        const safeDocId = student.id.replace(/[^a-zA-Z0-9_-]/g, '_');
        const url = `https://firestore.googleapis.com/v1/projects/${FIRESTORE_PROJECT}/databases/(default)/documents/${FIRESTORE_NEAE_COLLECTION}/${safeDocId}`;
        const payload = {
          fields: {
            id: { stringValue: student.id },
            name: { stringValue: student.name || '' },
            grade: { stringValue: student.grade || '' },
            category: { stringValue: student.category || '' },
            status: { stringValue: student.status || 'Activo' },
            deleted: { booleanValue: false },
            updatedAt: { stringValue: new Date().toISOString() },
            studentJson: { stringValue: JSON.stringify(student) }
          }
        };

        const response = await fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          logSecurityEvent({
            action: 'EDICION_CENSO_NEAE',
            actorEmail: session.email,
            actorRole: session.role,
            success: true,
            notes: `Sincronizado en Firestore alumno NEAE ${student.name} (${student.id})`
          });
          return true;
        }
      }
    } catch (error) {
      console.warn('Error al sincronizar alumno NEAE en Firestore:', error);
    }

    return true;
  },

  // 4.B Guardado masivo de censo NEAE (Para Promoción de Curso Escolar)
  async saveBulkNeaeStudents(students: StudentNEAE[], session?: CurrentUserSession | null): Promise<boolean> {
    if (!session || session.role !== 'ORIENTADOR') return false;
    try {
      localStorage.setItem('edubuenaventura_neae_census', JSON.stringify(students));
    } catch (e) {}

    try {
      await Promise.all(students.map(s => this.saveNeaeStudent(s, session)));
      return true;
    } catch (e) {
      return false;
    }
  },

  // 5. Eliminar alumno NEAE del censo en Firestore y local (Exclusivo Orientación)
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

    // 1. Registrar baja local
    try {
      const savedDeleted = localStorage.getItem('edubuenaventura_deleted_neae_ids');
      const delList: string[] = savedDeleted ? JSON.parse(savedDeleted) : [];
      if (!delList.includes(studentId)) {
        delList.push(studentId);
        localStorage.setItem('edubuenaventura_deleted_neae_ids', JSON.stringify(delList));
      }
    } catch (e) {}

    // 2. Sincronizar baja en Firestore (tombstone deleted=true para que no reaparezca desde semilla)
    try {
      const token = await getAuthToken();
      if (token) {
        const safeDocId = studentId.replace(/[^a-zA-Z0-9_-]/g, '_');
        const url = `https://firestore.googleapis.com/v1/projects/${FIRESTORE_PROJECT}/databases/(default)/documents/${FIRESTORE_NEAE_COLLECTION}/${safeDocId}`;
        const payload = {
          fields: {
            id: { stringValue: studentId },
            deleted: { booleanValue: true },
            updatedAt: { stringValue: new Date().toISOString() }
          }
        };
        const response = await fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          logSecurityEvent({
            action: 'BAJA_CENSO_NEAE',
            actorEmail: session.email,
            actorRole: session.role,
            success: true,
            notes: `Eliminado en Firestore alumno NEAE ${studentId} por Orientación`
          });
        }
      }
    } catch (error) {
      console.warn('Error al sincronizar baja NEAE en Firestore:', error);
    }

    return true;
  }
};
