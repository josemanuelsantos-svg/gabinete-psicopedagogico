import { PrivacyConsentRecord } from '../utils/privacyAudit';

export type EducationalStage = 'INFANTIL' | 'PRIMARIA';

export type UserRole = 'DOCENTE' | 'ORIENTADOR';

export type CasePriority = 'BAJA' | 'MEDIA' | 'ALTA' | 'URGENTE';

export type CaseStatus = 
  | 'PENDIENTE_REVISION' 
  | 'EVALUACION_ACEPTADA' 
  | 'EN_EVALUACION' 
  | 'EVALUACION_RECHAZADA' 
  | 'OBSERVACION_AULA' 
  | 'DICTAMINADO_CON_PAUTAS';

export interface StudentSelfPerception {
  perceivedDifficulty: 'NINGUNA' | 'LEVE' | 'MODERADA' | 'ALTA' | '';
  favoriteSubjects: string;
  hardestSubjects: string;
  schoolMotivation: 'ALTA' | 'MEDIA' | 'BAJA' | '';
  studentComments?: string;
}

export interface EvaluationSession {
  id: string;
  date: string;
  time: string;
  testCode: string;
  testName: string;
  counselorName: string;
  location: string;
  status: 'PROGRAMADA' | 'REALIZADA' | 'CANCELADA';
  notes?: string;
}

export interface QuarterlyReview {
  id: string;
  date: string;
  quarter: '1º Trimestre' | '2º Trimestre' | '3º Trimestre';
  teacherName: string;
  effectivenessRating: 'ALTA' | 'MEDIA' | 'NULA_REQUIERE_REVISION';
  classroomProgressNotes: string;
  adaptationAdjustmentsNeeded: boolean;
}

export interface SpecialistSupportSlot {
  id: string;
  dayOfWeek: 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes';
  timeSlot: string;
  specialistType: 'PT' | 'AL';
  specialistName: string;
  mode: 'Dentro del Aula' | 'Aula de Apoyo PT/AL';
}

export interface SubjectGuidelines {
  subject: 'Matemáticas' | 'Lengua y Literatura' | 'Ciencias / STEM' | 'Idiomas / Inglés' | 'Generales' | 'Áreas de Infantil';
  tips: string[];
}

export interface ReferralQuestionnaire {
  // 1. Datos Generales
  stage: EducationalStage | '';
  studentName: string;
  studentAge?: number | null;
  grade: string;
  teacherName: string;
  teacherEmail: string;
  subjectOrTutor?: string;
  referralDate: string;
  mainReason: string;
  affectedSubjects: string[];
  attachedEvidenceName?: string;

  // 2. Indicadores de Observación de Aula (Inician en null / Sin valorar)
  // Primaria:
  attentionFocus?: number | null;
  attentionDescriptor?: string;
  readingComprehension?: number | null;
  readingDescriptor?: string;
  mathReasoning?: number | null;
  mathDescriptor?: string;
  taskPaceAndCompletion?: number | null;
  taskPaceDescriptor?: string;
  impulsivityAndAutonomy?: number | null;
  impulsivityDescriptor?: string;
  emotionalAndPeerRel?: number | null;
  emotionalDescriptor?: string;

  // Infantil:
  infantilOralLanguage?: number | null;
  infantilOralLanguageDesc?: string;
  infantilAttentionAssembly?: number | null;
  infantilAttentionAssemblyDesc?: string;
  infantilPsychomotorFine?: number | null;
  infantilPsychomotorFineDesc?: string;
  infantilLogicConcepts?: number | null;
  infantilLogicConceptsDesc?: string;
  infantilPersonalAutonomy?: number | null;
  infantilPersonalAutonomyDesc?: string;
  infantilSocialPlay?: number | null;
  infantilSocialPlayDesc?: string;

  // 3. Ayudas Previas Probadas en Clase
  measuresDuration: 'MENOS_1_MES' | '1_A_2_MESES' | 'MAS_2_MESES' | '';
  appliedMeasuresList: string[];
  measuresResult: 'INSUFICIENTE' | 'MEJORIA_LEVE_PERSISTE_DIFICULTAD' | 'BLOQUEO_PERSISTENTE' | '';
  measuresObservations: string;

  // 4. Voz y Autopercepción del Alumno/a
  studentPerception?: StudentSelfPerception;

  // 5. Contexto Familiar
  familyContactDone: boolean;
  familyMeetingDone: boolean;
  familyAgreement: 'TOTAL_ACUERDO' | 'CONFORMIDAD_PARCIAL' | 'RESISTENCIA_FAMILIAR' | 'PENDIENTE_REUNION' | '';
  externalAssessmentDone: boolean;
  externalAssessmentDetails?: string;
  familyAttitude?: string;
  additionalObservations?: string;

  // 6. Registro de Privacidad RGPD/LOPD-GDD
  privacyConsent: PrivacyConsentRecord;
}

export interface PsychometricTestSuggestion {
  code: string;
  name: string;
  area: string;
  description?: string;
  recommended?: boolean;
}

export interface CounselorManualAssessment {
  status: CaseStatus;
  priority: CasePriority;
  clinicalNotes: string;
  assignedTests: string[];
  decisionDate: string;
  counselorName: string;
  actionPlan?: ActionPlanGuidelines;
}

export interface ActionPlanGuidelines {
  generalGoal: string;
  methodologicalAdaptations: string[];
  environmentalAdaptations: string[];
  evaluationAdaptations: string[];
  emotionalTips: string[];
  subjectSpecificGuidelines?: SubjectGuidelines[];
  ptHoursPerWeek?: number;
  alHoursPerWeek?: number;
}

export interface ReferralCase {
  id: string; // Unpredictable UUIDv4
  stage: EducationalStage;
  studentName: string;
  grade: string;
  teacherName: string;
  createdByEmail: string;
  dateSubmitted: string;
  status: CaseStatus;
  priority: CasePriority;
  questionnaire: ReferralQuestionnaire;
  counselorNotes?: string;
  decisionDate?: string;
  assignedTests?: string[];
  evaluationSessions?: EvaluationSession[];
  quarterlyReviews?: QuarterlyReview[];
  actionPlan?: ActionPlanGuidelines;
  categoryTag?: string;
  privacyConsent?: PrivacyConsentRecord;

  // Optional backwards compatibility field for legacy views if needed
  triage?: {
    riskProfileTitle: string;
    explanation: string;
    recommendedTests: PsychometricTestSuggestion[];
    confidenceScore?: number;
    primaryHypothesis?: string;
    immediateClassroomTips?: string[];
  };
}

export interface StudentNEAE {
  id: string;
  stage?: EducationalStage;
  name: string;
  grade: string;
  photoUrl?: string;
  category: string;
  tutor: string;
  ptTeacher?: string;
  alTeacher?: string;
  curricularAdaptation: 'No Significativa (ACNS)' | 'Significativa (ACS)' | 'Enriquecimiento' | 'Pautas Ordinarias';
  guidelines: ActionPlanGuidelines;
  supportSlots?: SpecialistSupportSlot[];
  quarterlyReviews?: QuarterlyReview[];
  lastReviewDate: string;
  status: 'Activo' | 'En Seguimiento' | 'Alta';
}
