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

export type DiagnosticHypothesis = 
  | 'TDAH_INATENTO'
  | 'TDAH_HIPERACTIVO_IMPULSIVO'
  | 'DEA_LECTURA_DISLEXIA'
  | 'DEA_ESCRITURA_DISGRAFIA'
  | 'DEA_CALCULO_DISCALCULIA'
  | 'ALTAS_CAPACIDADES'
  | 'TEL_TRASTORNO_LENGUAJE'
  | 'RETRASO_MADURATIVO_INFANTIL'
  | 'TRASTORNO_DESARROLLO_PSICOMOTRIZ'
  | 'DIFICULTAD_COMUNICACION_INTERACCION'
  | 'DIFICULTAD_SOCIOEMOCIONAL'
  | 'RETRASO_MADURATIVO_GENERAL'
  | 'OTRO_SITUACIONAL';

export interface StudentSelfPerception {
  perceivedDifficulty: 'NINGUNA' | 'LEVE' | 'MODERADA' | 'ALTA';
  favoriteSubjects: string;
  hardestSubjects: string;
  schoolMotivation: 'ALTA' | 'MEDIA' | 'BAJA';
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
  stage: EducationalStage;
  studentName: string;
  studentAge: number;
  grade: string;
  teacherName: string;
  subjectOrTutor: string;
  referralDate: string;
  mainReason: string;
  affectedSubjects: string[];
  attachedEvidenceName?: string;

  // 2. Indicadores de Observación de Aula Específicos por Etapa (1 a 5)
  // Campos Primaria:
  attentionFocus?: number;
  attentionDescriptor?: string;
  readingComprehension?: number;
  readingDescriptor?: string;
  mathReasoning?: number;
  mathDescriptor?: string;
  taskPaceAndCompletion?: number;
  taskPaceDescriptor?: string;
  impulsivityAndAutonomy?: number;
  impulsivityDescriptor?: string;
  emotionalAndPeerRel?: number;
  emotionalDescriptor?: string;

  // Campos Infantil:
  infantilOralLanguage?: number;
  infantilOralLanguageDesc?: string;
  infantilAttentionAssembly?: number;
  infantilAttentionAssemblyDesc?: string;
  infantilPsychomotorFine?: number;
  infantilPsychomotorFineDesc?: string;
  infantilLogicConcepts?: number;
  infantilLogicConceptsDesc?: string;
  infantilPersonalAutonomy?: number;
  infantilPersonalAutonomyDesc?: string;
  infantilSocialPlay?: number;
  infantilSocialPlayDesc?: string;

  // 3. Ayudas Previas Probadas en Clase
  measuresDuration: 'MENOS_1_MES' | '1_A_2_MESES' | 'MAS_2_MESES';
  appliedMeasuresList: string[];
  measuresResult: 'INSUFICIENTE' | 'MEJORIA_LEVE_PERSISTE_DIFICULTAD' | 'BLOQUEO_PERSISTENTE';
  measuresObservations: string;

  // 4. Voz y Autopercepción del Alumno/a
  studentPerception?: StudentSelfPerception;

  // 5. Contexto Familiar
  familyContactDone: boolean;
  familyMeetingDone: boolean;
  familyAgreement: 'TOTAL_ACUERDO' | 'CONFORMIDAD_PARCIAL' | 'RESISTENCIA_FAMILIAR' | 'PENDIENTE_REUNION';
  externalAssessmentDone: boolean;
  externalAssessmentDetails?: string;
  familyAttitude: string;
  additionalObservations: string;
}

export interface PsychometricTestSuggestion {
  code: string;
  name: string;
  area: string;
  description: string;
  recommended: boolean;
}

export interface TriageResult {
  evaluationRecommended: boolean;
  confidenceScore: number;
  primaryHypothesis: DiagnosticHypothesis;
  riskProfileTitle: string;
  secondaryHypotheses: DiagnosticHypothesis[];
  recommendedTests: PsychometricTestSuggestion[];
  suggestedPriority: CasePriority;
  explanation: string;
  immediateClassroomTips: string[];
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
  id: string;
  stage: EducationalStage;
  studentName: string;
  grade: string;
  teacherName: string;
  dateSubmitted: string;
  status: CaseStatus;
  priority: CasePriority;
  questionnaire: ReferralQuestionnaire;
  triage: TriageResult;
  counselorNotes?: string;
  decisionDate?: string;
  assignedTests?: string[];
  evaluationSessions?: EvaluationSession[];
  quarterlyReviews?: QuarterlyReview[];
  actionPlan?: ActionPlanGuidelines;
  categoryTag?: string;
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
