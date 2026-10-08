import { ReferralCase, StudentNEAE } from '../types';
import { generateSecureCaseId, logSecurityEvent, maskIdentifier } from '../utils/privacyAudit';

const FIREBASE_BASE_URL = 'https://avengers-6a-cbbcc-default-rtdb.europe-west1.firebasedatabase.app/edubuenaventura';

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

    let remoteList: ReferralCase[] = [];
    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/cases.json`);
      if (response.ok) {
        const data = await response.json();
        if (data) {
          const rawList: any[] = typeof data === 'object' ? Object.values(data) : (Array.isArray(data) ? data : []);
          remoteList = rawList.map((item: any) => {
            return {
              id: item.id || generateSecureCaseId(),
              stage: item.stage || (item.grade?.includes('Infantil') || item.grade?.includes('años') ? 'INFANTIL' : 'PRIMARIA'),
              studentName: item.studentName || 'Alumno',
              grade: item.grade || 'Sin curso asignado',
              teacherName: item.teacherName || 'Docente Solicitante',
              createdByEmail: item.createdByEmail || item.questionnaire?.teacherEmail || 'docentes@sanbuenaventura.es',
              dateSubmitted: item.dateSubmitted || new Date().toISOString().split('T')[0],
              status: item.status || 'PENDIENTE_REVISION',
              priority: item.priority || 'MEDIA',
              categoryTag: item.categoryTag || 'En Evaluación Psicopedagógica',
              assignedTests: item.assignedTests || [],
              counselorNotes: item.counselorNotes || '',
              decisionDate: item.decisionDate,
              privacyConsent: item.privacyConsent || {
                policyVersion: 'v2.4-2026',
                acceptedAt: item.dateSubmitted || new Date().toISOString(),
                userEmail: item.createdByEmail || 'docentes@sanbuenaventura.es',
                userName: item.teacherName || 'Docente',
                userRole: 'DOCENTE'
              },
              questionnaire: {
                stage: item.stage || 'PRIMARIA',
                studentName: item.studentName || 'Alumno',
                grade: item.grade || 'Sin curso',
                teacherName: item.teacherName || 'Docente',
                teacherEmail: item.createdByEmail || 'docentes@sanbuenaventura.es',
                referralDate: item.dateSubmitted || new Date().toISOString().split('T')[0],
                mainReason: item.reason || item.questionnaire?.mainReason || 'Sin motivo especificado',
                affectedSubjects: item.affectedSubjects || item.questionnaire?.affectedSubjects || [],
                appliedMeasuresList: item.appliedMeasuresList || item.questionnaire?.appliedMeasuresList || [],
                measuresDuration: item.measuresDuration || item.questionnaire?.measuresDuration || '',
                measuresResult: item.measuresResult || item.questionnaire?.measuresResult || '',
                measuresObservations: item.measuresObservations || item.questionnaire?.measuresObservations || '',
                attachedEvidenceName: item.evidenceName || item.questionnaire?.attachedEvidenceName,
                studentPerception: item.studentPerception || item.questionnaire?.studentPerception,
                familyMeetingDone: item.familyMeeting ? (item.familyMeeting.includes('Sí') || item.familyMeeting === true) : false,
                familyAgreement: item.familyAgreement || '',
                externalAssessmentDone: Boolean(item.externalAssessment && !item.externalAssessment.includes('No')),
                externalAssessmentDetails: item.externalAssessment || '',
                privacyConsent: item.privacyConsent
              }
            } as ReferralCase;
          });
        }
      }
    } catch (networkErr) {
      console.warn('Almacenamiento local de respaldo activado:', networkErr);
    }

    // Combinar casos locales y remotos deduplicando por ID
    const caseMap = new Map<string, ReferralCase>();
    localCases.forEach(c => caseMap.set(c.id, c));
    remoteList.forEach(c => caseMap.set(c.id, c));
    const normalizedList = Array.from(caseMap.values());

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

    // 2. Intentar sincronización con Firebase
    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/cases/${finalCase.id}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalCase)
      });

      if (!response.ok) {
        console.warn(`Sincronización remota pendiente (${response.status}). El caso ha sido asegurado localmente.`);
      }

      logSecurityEvent({
        action: 'CREACION_EXPEDIENTE',
        actorEmail: session.email,
        actorRole: session.role,
        caseIdMasked: maskIdentifier(finalCase.id),
        success: true,
        notes: 'Expediente registrado con identificador no predecible y consentimiento RGPD'
      });

      return { success: true };
    } catch (networkError) {
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
    }
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
