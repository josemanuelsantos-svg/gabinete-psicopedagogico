import { ReferralCase, StudentNEAE } from '../types';

const FIREBASE_BASE_URL = 'https://avengers-6a-cbbcc-default-rtdb.europe-west1.firebasedatabase.app/edubuenaventura';

export const FirebaseService = {
  // 1. Obtener todos los expedientes normalizados
  async getCases(): Promise<ReferralCase[]> {
    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/cases.json`);
      if (!response.ok) throw new Error('Error al conectar con Firebase');
      const data = await response.json();
      if (!data) return [];
      
      const rawList: any[] = typeof data === 'object' ? Object.values(data) : (Array.isArray(data) ? data : []);

      // Normalizar estructura para asegurar compatibilidad total
      return rawList.map((item: any, idx: number) => {
        const testsList = Array.isArray(item.triage?.tests)
          ? item.triage.tests.map((t: any) => typeof t === 'string' ? { code: t, name: t, area: 'General', recommended: true } : t)
          : (Array.isArray(item.triage?.recommendedTests) ? item.triage.recommendedTests : [
              { code: 'WISC-V', name: 'Escala Wechsler', area: 'Cognitiva', recommended: true },
              { code: 'EDAH', name: 'Escala EDAH', area: 'Atención', recommended: true }
            ]);

        return {
          id: item.id || `DER-2026-00${idx + 1}`,
          stage: item.stage || (item.grade?.includes('Infantil') || item.grade?.includes('años') ? 'INFANTIL' : 'PRIMARIA'),
          studentName: item.studentName || 'Alumno',
          grade: item.grade || '1º Primaria',
          teacherName: item.teacherName || 'Tutor',
          dateSubmitted: item.dateSubmitted || new Date().toISOString().split('T')[0],
          status: item.status || 'PENDIENTE_REVISION',
          priority: item.priority || 'MEDIA',
          categoryTag: item.categoryTag || item.triage?.riskProfileTitle || 'En Evaluación',
          assignedTests: item.assignedTests || testsList.map((t: any) => t.code),
          counselorNotes: item.counselorNotes || '',
          decisionDate: item.decisionDate,
          questionnaire: {
            studentName: item.studentName || 'Alumno',
            studentAge: item.questionnaire?.studentAge || 6,
            grade: item.grade || '1º Primaria',
            teacherName: item.teacherName || 'Tutor',
            subjectOrTutor: item.questionnaire?.subjectOrTutor || 'Tutor',
            referralDate: item.dateSubmitted || new Date().toISOString().split('T')[0],
            mainReason: item.reason || item.questionnaire?.mainReason || 'Dificultades observadas en el aula',
            affectedSubjects: item.affectedSubjects || item.questionnaire?.affectedSubjects || [],
            appliedMeasuresList: item.appliedMeasuresList || item.questionnaire?.appliedMeasuresList || [],
            measuresDuration: item.measuresDuration || item.questionnaire?.measuresDuration || '1-2 meses',
            measuresObservations: item.measuresObservations || item.questionnaire?.measuresObservations || item.previousMeasuresObservations || '',
            attachedEvidenceName: item.evidenceName || item.questionnaire?.attachedEvidenceName,
            studentPerception: item.studentPerception || item.questionnaire?.studentPerception || {
              perceivedDifficulty: 'MODERADA',
              schoolMotivation: 'MEDIA'
            },
            familyMeetingDone: item.familyMeeting ? (item.familyMeeting.includes('Sí') || item.familyMeeting === true) : true,
            familyAgreement: item.familyAgreement || 'De acuerdo',
            externalAssessmentDone: item.externalAssessment ? (!item.externalAssessment.includes('No')) : false,
            externalAssessmentDetails: item.externalAssessment || '',
            attentionFocus: item.scores?.atencion || item.scores?.asamblea || 3,
            readingComprehension: item.scores?.lectura || item.scores?.lenguaje || 3,
            mathReasoning: item.scores?.mates || item.scores?.logica || 3,
            taskCompletion: item.scores?.ritmo || item.scores?.motricidad || 3,
            impulsivityControl: item.scores?.conducta || item.scores?.autonomia || 3,
            frustrationTolerance: item.scores?.emocional || item.scores?.social || 3
          },
          triage: {
            evaluationRecommended: true,
            confidenceScore: item.triage?.confidence || item.triage?.confidenceScore || 92,
            primaryHypothesis: item.categoryTag || item.triage?.riskProfileTitle || 'EVALUACION_INICIAL',
            riskProfileTitle: item.triage?.riskProfileTitle || item.categoryTag || 'Perfil en Evaluación',
            suggestedPriority: item.priority || 'MEDIA',
            explanation: item.triage?.explanation || 'Indicadores registrados desde las áreas de observación clínica.',
            immediateClassroomTips: item.triage?.immediateClassroomTips || [
              'Ubicación en primera fila cerca del profesor.',
              'Apoyos visuales estructurados y pautas paso a paso.'
            ],
            recommendedTests: testsList
          }
        } as ReferralCase;
      });
    } catch (error) {
      console.warn('Firebase offline o error de red, usando fallback local:', error);
      return [];
    }
  },

  // 2. Guardar o actualizar un expediente
  async saveCase(referralCase: ReferralCase): Promise<boolean> {
    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/cases/${referralCase.id}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(referralCase)
      });
      return response.ok;
    } catch (error) {
      console.error('Error al guardar caso en Firebase:', error);
      return false;
    }
  },

  // 3. Obtener alumnos NEAE normalizados
  async getNeaeStudents(): Promise<StudentNEAE[]> {
    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/neae.json`);
      if (!response.ok) throw new Error('Error al conectar con Firebase NEAE');
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
          lastReviewDate: item.lastReviewDate || '2026-08-18',
          ptTeacher: item.ptTeacher || 'Mª Ángeles Gómez (PT)',
          alTeacher: item.alTeacher || 'Sara Domínguez (AL)',
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
            ptHoursPerWeek: item.guidelines?.ptHoursPerWeek || 2,
            alHoursPerWeek: item.guidelines?.alHoursPerWeek || 2
          }
        } as StudentNEAE;
      });
    } catch (error) {
      console.warn('Firebase offline para NEAE:', error);
      return [];
    }
  },

  // 4. Guardar alumno NEAE
  async saveNeaeStudent(student: StudentNEAE): Promise<boolean> {
    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/neae/${student.id}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
      });
      return response.ok;
    } catch (error) {
      console.error('Error al guardar NEAE en Firebase:', error);
      return false;
    }
  }
};
