import { PrivacyConsentRecord } from '../utils/privacyAudit';

export type EducationalStage = 'INFANTIL' | 'PRIMARIA' | 'SECUNDARIA';

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
  specialistType: 'PT';
  specialistName: string;
  mode: 'Dentro del Aula' | 'Aula de Apoyo PT';
}

export type MedicalSpecialistTarget = 
  | 'NEUROPEDIATRA' 
  | 'PEDIATRA' 
  | 'SALUD_MENTAL_USMIJ' 
  | 'OTRO_ESPECIALISTA';

export interface InfantilMeasureRow {
  measure: string;
  period: string;
  result: string;
}

export interface MedicalReferralObservations {
  specialistTarget: MedicalSpecialistTarget;
  customSpecialistName?: string;
  stageFormat?: 'INFANTIL' | 'PRIMARIA';
  birthDate?: string;
  studentAgeText?: string;
  consultationReason: string;

  // === FORMATO EDUCACIÓN INFANTIL (Apartados 01-07) ===
  infantilDifficultyExamples?: string;
  infantilSinceWhen?: string;
  infantilSituations?: string;
  infantilFrequencyIntensity?: string;
  infantilContextsText?: string;
  infantilContexts?: string[]; // ['Aula', 'Patio', 'Comedor', 'Otros']
  infantilContextsOther?: string;
  infantilRecentChanges?: string;
  // 03. Áreas de desarrollo
  infantilLanguage?: string;
  infantilMotor?: string;
  infantilCognitive?: string;
  infantilAutonomy?: string;
  infantilSocioEmotional?: string;
  // 04. Juego, intereses y estilo de aprendizaje
  infantilPlay?: string;
  infantilCreativity?: string;
  infantilLearningStyle?: string;
  infantilSensoryRepetitive?: 'SI' | 'NO' | 'NO_CONSTA' | '';
  infantilSensoryDetails?: string;
  // 05. Competencia curricular y participación
  infantilCurricularProgress?: string;
  infantilAttendanceParticipation?: string;
  // 06. Medidas y apoyos aplicados
  infantilMeasuresTable?: InfantilMeasureRow[];
  infantilExternalSupports?: string;
  // 07. Síntesis del tutor/a
  infantilStrengths?: string;
  infantilAdditionalInfo?: string;

  // === FORMATO EDUCACIÓN PRIMARIA (Apartados 01-03, 11 ámbitos) ===
  // 02. Contexto escolar y apoyos
  primariaGroupSupport?: string;
  primariaPtSupport?: string;
  primariaEvalMeasures?: string;
  // 03. Desarrollo y funcionamiento en el aula (11 ámbitos)
  primariaWorkPace?: string;            // 01 · Ritmo de trabajo
  primariaEffortCapacity?: string;      // 02 · Capacidad de esfuerzo
  primariaOralComprehension?: string;   // 03 · Comprensión oral
  primariaOralCommunication?: string;   // 04 · Comunicación oral
  primariaAttention?: string;           // 05 · Atención
  primariaLogicalReasoning?: string;    // 06 · Razonamiento lógico
  primariaMemory?: string;              // 07 · Memoria
  primariaFrustrationTolerance?: string;// 08 · Tolerancia a la frustración
  primariaSpatialOrientation?: string;  // 09 · Orientación espacial
  primariaClassSocialization?: string;  // 10 · Socialización en clase
  primariaAutonomy?: string;            // 11 · Autonomía

  // Campos clásicos (mantenidos para retrocompatibilidad con casos previos)
  attentionAndFocus: string;
  taskCompletionAndPace: string;
  motorRestlessness: string;
  impulsivityControl: string;
  languageAndCommunication: string;
  fineMotorAndWriting: string;
  grossMotorCoordination: string;
  emotionalRegulation: string;
  peerRelationships: string;
  academicPerformance: string;
  measuresAppliedAndResults: string;

  // Metadatos de cumplimentación
  filledByTeacherName: string;
  filledByTeacherEmail: string;
  filledDate: string;
}

export interface InfantilDevelopedReport {
  // 02 · Motivo de la derivación
  difficultyExamples: string;
  sinceWhen: string;
  situations: string;
  frequencyIntensity: string;
  contextsText: string;
  contextsSelected: string[];
  contextsOther: string;
  recentChanges: string;
  // 03 · Áreas de desarrollo
  language: string;
  motor: string;
  cognitive: string;
  autonomy: string;
  socioEmotional: string;
  // 04 · Juego, intereses y estilo de aprendizaje
  play: string;
  creativity: string;
  learningStyle: string;
  sensoryRepetitive: 'SI' | 'NO' | 'NO_CONSTA' | '';
  sensoryDetails: string;
  // 05 · Competencia curricular y participación
  curricularProgress: string;
  attendanceParticipation: string;
  // 06 · Medidas y apoyos aplicados
  measuresTable: InfantilMeasureRow[];
  externalSupports: string;
  // 07 · Síntesis del tutor/a
  strengths: string;
  additionalInfo: string;
}

export interface PrimariaDevelopedReport {
  // 02 · Contexto escolar y apoyos
  groupSupport: string;
  ptSupport: string;
  evalMeasures: string;
  // 03 · Desarrollo y funcionamiento en el aula (11 ámbitos)
  workPace: string;             // 01 · Ritmo de trabajo
  effortCapacity: string;       // 02 · Capacidad de esfuerzo
  oralComprehension: string;    // 03 · Comprensión oral
  oralCommunication: string;    // 04 · Comunicación oral
  attention: string;            // 05 · Atención
  logicalReasoning: string;     // 06 · Razonamiento lógico
  memory: string;               // 07 · Memoria
  frustrationTolerance: string; // 08 · Tolerancia a la frustración
  spatialOrientation: string;   // 09 · Orientación espacial
  classSocialization: string;   // 10 · Socialización en clase
  autonomy: string;             // 11 · Autonomía
  // 04 · Cierre y coordinación
  closingNote: string;
}

export interface GeneratedMedicalReport {
  id: string;
  createdAt: string;
  updatedAt: string;
  generatedByCounselorName: string;
  counselorEmail: string;
  targetSpecialistTitle: string;
  reportFormat?: 'INFANTIL' | 'PRIMARIA';
  birthDate?: string;
  studentAgeText?: string;
  tutorName?: string;

  // Datos estructurados desarrollados según el formato oficial del centro
  infantilData?: InfantilDevelopedReport;
  primariaData?: PrimariaDevelopedReport;

  // Secciones clásicas (retrocompatibilidad)
  studentIdentification: string;
  clinicalReasonNarrative: string;
  academicAndCognitiveNarrative: string;
  attentionAndExecutiveNarrative: string;
  motorAndRestlessnessNarrative: string;
  languageAndCommunicationNarrative: string;
  socioEmotionalNarrative: string;
  measuresAndEvolutionNarrative: string;
  counselorSynthesisAndRecommendations: string;

  isFinalized: boolean;
  signatureDate?: string;
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
  attachedEvidenceDataUrl?: string;
  attachedEvidenceMimeType?: string;
  isHighCapacityEvaluation?: boolean;

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
  dictamenCategory?: string;
  dictamenSpecificNeed?: string;
  dictamenAdaptation?: 'No Significativa (ACNS)' | 'Significativa (ACS)' | 'Enriquecimiento' | 'Pautas Ordinarias';
  dictamenPtTeacher?: string;
  privacyConsent?: PrivacyConsentRecord;
  medicalObservations?: MedicalReferralObservations;
  medicalReport?: GeneratedMedicalReport;

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
  specificNeed?: string; // Necesidad específica / Diagnóstico: TDAH, Dislexia (DEA), Altas Capacidades (AACC), etc.
  tutor: string;
  ptTeacher?: string | null; // Maestro/a especialista PT (Daniel Asenjo / María)
  ptHours?: number;
  alTeacher?: string | null; // Maestro/a especialista AL (Audición y Lenguaje)
  alHours?: number;
  curricularAdaptation: 'No Significativa (ACNS)' | 'Significativa (ACS)' | 'Enriquecimiento' | 'Pautas Ordinarias';
  guidelines: ActionPlanGuidelines;
  supportSlots?: SpecialistSupportSlot[];
  quarterlyReviews?: QuarterlyReview[];
  lastReviewDate: string;
  status: 'Activo' | 'En Seguimiento' | 'Alta';
}
