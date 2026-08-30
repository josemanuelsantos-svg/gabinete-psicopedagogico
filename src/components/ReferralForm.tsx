import React, { useState, useRef } from 'react';
import { EducationalStage, ReferralCase, ReferralQuestionnaire } from '../types';
import { validateAttachment } from '../utils/fileSecurity';
import { generateSecureCaseId, CURRENT_PRIVACY_POLICY_VERSION } from '../utils/privacyAudit';
import { CurrentUserSession } from '../services/firebaseService';
import { 
  FileText, Send, Paperclip, CheckCircle2, Clock, User, HeartHandshake, 
  Baby, School, AlertTriangle, ShieldCheck, Check, Eye, ArrowLeft 
} from 'lucide-react';

interface ReferralFormProps {
  currentUser: CurrentUserSession;
  onSubmitCase: (newCase: ReferralCase) => Promise<void>;
  onCancel: () => void;
}

export const ReferralForm: React.FC<ReferralFormProps> = ({ currentUser, onSubmitCase }) => {
  // 1. Etapa y Datos Generales (Inician estrictamente vacíos o sin selección)
  const [stage, setStage] = useState<EducationalStage | ''>('');
  const [studentName, setStudentName] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [mainReason, setMainReason] = useState<string>('');
  const [affectedSubjects, setAffectedSubjects] = useState<string[]>([]);
  
  // Archivo adjunto
  const [attachedEvidenceName, setAttachedEvidenceName] = useState<string>('');
  const [fileError, setFileError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 2.A Indicadores Primaria (Inician estrictamente en null = "Sin valorar")
  const [attentionFocus, setAttentionFocus] = useState<number | null>(null);
  const [readingComprehension, setReadingComprehension] = useState<number | null>(null);
  const [mathReasoning, setMathReasoning] = useState<number | null>(null);
  const [taskPaceAndCompletion, setTaskPaceAndCompletion] = useState<number | null>(null);
  const [impulsivityAndAutonomy, setImpulsivityAndAutonomy] = useState<number | null>(null);
  const [emotionalAndPeerRel, setEmotionalAndPeerRel] = useState<number | null>(null);

  // 2.B Indicadores Infantil (Inician estrictamente en null = "Sin valorar")
  const [infantilOralLanguage, setInfantilOralLanguage] = useState<number | null>(null);
  const [infantilAttentionAssembly, setInfantilAttentionAssembly] = useState<number | null>(null);
  const [infantilPsychomotorFine, setInfantilPsychomotorFine] = useState<number | null>(null);
  const [infantilLogicConcepts, setInfantilLogicConcepts] = useState<number | null>(null);
  const [infantilPersonalAutonomy, setInfantilPersonalAutonomy] = useState<number | null>(null);
  const [infantilSocialPlay, setInfantilSocialPlay] = useState<number | null>(null);

  // 3. Ayudas Previas Probadas en Clase (Inician vacíos / desmarcados)
  const [measuresDuration, setMeasuresDuration] = useState<'MENOS_1_MES' | '1_A_2_MESES' | 'MAS_2_MESES' | ''>('');
  const [appliedMeasuresList, setAppliedMeasuresList] = useState<string[]>([]);
  const [measuresResult, setMeasuresResult] = useState<'INSUFICIENTE' | 'MEJORIA_LEVE_PERSISTE_DIFICULTAD' | 'BLOQUEO_PERSISTENTE' | ''>('');
  const [measuresObservations, setMeasuresObservations] = useState<string>('');

  // 4. Voz y Autopercepción del Alumno/a
  const [perceivedDifficulty, setPerceivedDifficulty] = useState<'NINGUNA' | 'LEVE' | 'MODERADA' | 'ALTA' | ''>('');
  const [favoriteSubjects, setFavoriteSubjects] = useState<string>('');
  const [hardestSubjects, setHardestSubjects] = useState<string>('');
  const [schoolMotivation, setSchoolMotivation] = useState<'ALTA' | 'MEDIA' | 'BAJA' | ''>('');

  // 5. Contexto Familiar
  const [familyMeetingDone, setFamilyMeetingDone] = useState<boolean | null>(null);
  const [familyAgreement, setFamilyAgreement] = useState<'TOTAL_ACUERDO' | 'CONFORMIDAD_PARCIAL' | 'RESISTENCIA_FAMILIAR' | 'PENDIENTE_REUNION' | ''>('');
  const [externalAssessmentDone, setExternalAssessmentDone] = useState<boolean>(false);
  const [externalAssessmentDetails, setExternalAssessmentDetails] = useState<string>('');

  // 6. Aceptación de Privacidad RGPD/LOPD-GDD (Inicia estrictamente desmarcado)
  const [privacyAccepted, setPrivacyAccepted] = useState<boolean>(false);

  // Estado de Pantalla de Revisión Previa y Validaciones
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  // Descriptores Primaria
  const primariaDescriptors: Record<string, Record<number, string>> = {
    attention: {
      1: '🔴 Dificultad Grave: Se distrae constantemente (>75% del tiempo), pierde el hilo y no copia del encerado.',
      2: '🟠 Dificultad Frecuente: Inatención notable en tareas individuales (>50% del tiempo). Requiere avisos constantes.',
      3: '🟡 Nivel Medio: Atención intermitente; rinde en explicaciones cortas pero se dispersa en tareas largas.',
      4: '🟢 Buen Nivel: Buena atención sostenida en la gran mayoría de sesiones de clase.',
      5: '🔵 Excelente: Concentración profunda, perseverante y autónoma durante toda la jornada.'
    },
    reading: {
      1: '🔴 Dificultad Grave: Lectura silábica muy lenta, omisiones constantes de letras y nula comprensión del texto.',
      2: '🟠 Dificultad Frecuente: Lectura vacilante con bloqueos en palabras compuestas; gran fatiga y errores.',
      3: '🟡 Nivel Medio: Fluidez lectora aceptable, pero comete errores en palabras complejas o textos extensos.',
      4: '🟢 Buen Nivel: Buena velocidad y comprensión de lecturas adecuadas a su curso escolar.',
      5: '🔵 Excelente: Lectura rápida, expresiva y comprensión crítica muy superior a su edad.'
    },
    math: {
      1: '🔴 Dificultad Grave: Bloqueo total ante operaciones básicas y problemas; no comprende los enunciados numéricos.',
      2: '🟠 Dificultad Frecuente: Le cuesta mucho el cálculo mental y el planteamiento de problemas de más de un paso.',
      3: '🟡 Nivel Medio: Realiza operaciones mecánicas bien, pero necesita guía para razonar problemas nuevos.',
      4: '🟢 Buen Nivel: Resuelve problemas con soltura y comprende conceptos lógico-matemáticos.',
      5: '🔵 Excelente: Gran rapidez de cálculo, abstracción y razonamiento lógico sobresaliente.'
    },
    taskPace: {
      1: '🔴 Dificultad Grave: Ritmo extremadamente lento; deja más del 50% de las tareas/exámenes sin terminar.',
      2: '🟠 Dificultad Frecuente: Se queda rezagado/a habitualmente al copiar de la pizarra o finalizar fichas.',
      3: '🟡 Nivel Medio: Termina las tareas justo a tiempo si el docente le va recordando el tiempo.',
      4: '🟢 Buen Nivel: Ritmo ágil y organizado; finaliza las actividades con normalidad.',
      5: '🔵 Excelente: Termina con gran rapidez y pulcritud mucho antes que el resto de la clase.'
    },
    impulsivity: {
      1: '🔴 Dificultad Grave: Muy impulsivo/a; interrumpe continuamente, se levanta sin permiso o responde sin pensar.',
      2: '🟠 Dificultad Frecuente: Inquietud motora notable; le cuesta esperar su turno y mantener el orden.',
      3: '🟡 Nivel Medio: Inquietud leve; responde bien cuando se le reconduce con amabilidad.',
      4: '🟢 Buen Nivel: Buen autocontrol, respeta los turnos de palabra y las normas de convivencia.',
      5: '🔵 Excelente: Autorregulación óptima, muy reflexivo/a, centrado/a y paciente.'
    },
    emotional: {
      1: '🔴 Dificultad Grave: Baja tolerancia a la frustración; llora, se bloquea o tiene conflictos frecuentes con compañeros.',
      2: '🟠 Dificultad Frecuente: Muestra inseguridad, ansiedad ante los exámenes o tendencia al aislamiento en el patio.',
      3: '🟡 Nivel Medio: Adaptación social normal; en momentos de frustración le cuesta gestionar la emoción.',
      4: '🟢 Buen Nivel: Buena relación con el grupo de clase, sociable y tolerante.',
      5: '🔵 Excelente: Gran empatía, liderazgo positivo y excelentes habilidades sociales.'
    }
  };

  // Descriptores Infantil
  const infantilDescriptors: Record<string, Record<number, string>> = {
    oralLang: {
      1: '🔴 Dificultad Grave: Habla ininteligible, vocabulario muy escaso, frases de 1-2 palabras o no comprende órdenes sencillas.',
      2: '🟠 Dificultad Frecuente: Dificultades de articulación (dislalias múltiples), oraciones incompletas y dificultad de relato.',
      3: '🟡 Nivel Medio: Se comunica con normalidad; comete errores en palabras complejas o fonemas tardíos (r, tr).',
      4: '🟢 Buen Nivel: Buena fluidez expresiva, estructura oraciones con corrección y comprende cuentos de aula.',
      5: '🔵 Excelente: Riqueza léxica sobresaliente, gran capacidad narrativa y perfecta articulación.'
    },
    assembly: {
      1: '🔴 Dificultad Grave: Incapaz de permanecer en la asamblea (>5 min); se levanta constantemente, interrumpe o corre por el aula.',
      2: '🟠 Dificultad Frecuente: Inquietud motriz constante; necesita recordatorios continuos para mantenerse en su sitio.',
      3: '🟡 Nivel Medio: Participa en la asamblea aunque en actividades largas de más de 15 minutos se desconecta.',
      4: '🟢 Buen Nivel: Atiende a las canciones, rutinas y explicaciones de la tutora con buena actitud.',
      5: '🔵 Excelente: Gran atención sostenida, escucha activa a sus compañeros y respeta el turno de palabra.'
    },
    fineMotor: {
      1: '🔴 Dificultad Grave: No realiza la pinza digital (agarre palmar), no recorta con tijeras, torpeza motriz al correr/saltar.',
      2: '🟠 Dificultad Frecuente: Trazos muy débiles o con excesiva presión; le cuestan los encajables, ensartables y modelado.',
      3: '🟡 Nivel Medio: Motricidad adecuada a su edad; realiza trazos básicos y maneja útiles con guía habitual.',
      4: '🟢 Buen Nivel: Buen control visomotor, colorea respetando límites y maneja tijeras con soltura.',
      5: '🔵 Excelente: Precisión grafomotriz excepcional, dibujo muy detallado y excelente coordinación física.'
    },
    logic: {
      1: '🔴 Dificultad Grave: No identifica colores básicos, tamaños (grande/pequeño) ni nociones espaciales (arriba/abajo/dentro).',
      2: '🟠 Dificultad Frecuente: Le cuesta la seriación de 2 elementos, el conteo elemental (1 al 5) o la asociación número-cantidad.',
      3: '🟡 Nivel Medio: Asimila conceptos básicos con el ritmo habitual del grupo; necesita apoyos manipulativos.',
      4: '🟢 Buen Nivel: Identifica figuras geométricas, clasifica por varios criterios y cuenta con precisión.',
      5: '🔵 Excelente: Deducción lógica precoz, conteo avanzado y gran curiosidad por patrones y números.'
    },
    autonomy: {
      1: '🔴 Dificultad Grave: No controla esfínteres, dependiente total para el aseo, ponerse el abrigo o recoger materiales.',
      2: '🟠 Dificultad Frecuente: Necesita ayuda constante para comer en el recreo, abrocharse o cuidar sus pertenencias.',
      3: '🟡 Nivel Medio: Realiza hábitos básicos con supervisión y recordatorios rutinarios de la tutora.',
      4: '🟢 Buen Nivel: Muy autónomo/a en el baño, desayuno escolar y colocación de su mochila/abrigo.',
      5: '🔵 Excelente: Totalmente autónomo/a e incluso ayuda de forma espontánea a sus compañeros.'
    },
    socialPlay: {
      1: '🔴 Dificultad Grave: Aislamiento severo, no responde al nombre, rabietas intensas o ausencia de juego simbólico.',
      2: '🟠 Dificultad Frecuente: Juego en paralelo; le cuesta compartir juguetes o muestra baja tolerancia a la frustración.',
      3: '🟡 Nivel Medio: Se relaciona bien con el grupo; en situaciones de conflicto precisa la mediación de la tutora.',
      4: '🟢 Buen Nivel: Sociable, disfruta del juego cooperativo y muestra empatía hacia sus iguales.',
      5: '🔵 Excelente: Habilidades sociales sobresalientes, muy empático/a, comparte y lidera juegos integradores.'
    }
  };

  const subjectsListPrimaria = [
    'Matemáticas',
    'Lengua y Literatura',
    'Ciencias / STEM',
    'Idiomas / Inglés',
    'En todas las asignaturas'
  ];

  const subjectsListInfantil = [
    'Lenguaje Oral / Comunicación',
    'Atención en Asamblea',
    'Grafomotricidad / Trazos',
    'Lógica-Matemática / Conceptos',
    'Autonomía / Hábitos',
    'Socialización en el Recreo'
  ];

  const availableMeasuresPrimaria = [
    'Ubicación en primera fila cerca del profesor o pizarra',
    'Darle más tiempo en exámenes y controles (+25%)',
    'Reducir cantidad de ejercicios o fraccionar tareas largas',
    'Asignar compañero/a tutor de apoyo al lado',
    'Uso de apoyos visuales, esquemas o recordatorios en la mesa',
    'Supervisión y confirmación del copiado de deberes en la agenda'
  ];

  const availableMeasuresInfantil = [
    'Ubicación cerca de la tutora en la asamblea con delimitación visual',
    'Apoyo visual con pictogramas de secuencias y rutinas de aula',
    'Anticipación individual de cambios de actividad 2 minutos antes',
    'Adaptación de útiles: ceras triangulares y tijeras adaptadas',
    'Rincón de la calma para autorregulación emocional',
    'Asignación de responsabilidades cooperativas con un igual guía'
  ];

  const handleStageSelect = (newStage: EducationalStage) => {
    setStage(newStage);
    setGrade('');
    setAffectedSubjects([]);
    setAppliedMeasuresList([]);
  };

  const handleToggleSubject = (sub: string) => {
    setAffectedSubjects(prev =>
      prev.includes(sub) ? prev.filter(s => s !== sub) : [...prev, sub]
    );
  };

  const handleToggleMeasure = (mea: string) => {
    setAppliedMeasuresList(prev =>
      prev.includes(mea) ? prev.filter(m => m !== mea) : [...prev, mea]
    );
  };

  // Manejo seguro de archivos adjuntos con validación binaria
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    const files = e.target.files;
    if (!files || files.length === 0) {
      setAttachedEvidenceName('');
      return;
    }

    const file = files[0];
    const validation = await validateAttachment(file);

    if (!validation.valid) {
      setFileError(validation.error || 'Archivo no válido.');
      setAttachedEvidenceName('');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setAttachedEvidenceName(validation.sanitizedName || file.name);
  };

  // Validación completa del formulario
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!stage) {
      errors.stage = 'Debes seleccionar la etapa educativa (Infantil o Primaria).';
    }

    if (!studentName || studentName.trim().length < 2) {
      errors.studentName = 'El nombre y apellidos del alumno/a son obligatorios (mínimo 2 caracteres).';
    }

    if (!grade) {
      errors.grade = 'Debes seleccionar el curso y grupo/línea.';
    }

    if (affectedSubjects.length === 0) {
      errors.affectedSubjects = 'Selecciona al menos un área o momento donde se manifiesta la dificultad.';
    }

    if (!mainReason || mainReason.trim().length < 10) {
      errors.mainReason = 'El motivo principal de consulta en el aula es obligatorio (mínimo 10 caracteres explicativos).';
    }

    // Validación de indicadores de observación (deben estar todos valorados)
    if (stage === 'PRIMARIA') {
      if (attentionFocus === null) errors.attentionFocus = 'Debes valorar el nivel de Atención.';
      if (readingComprehension === null) errors.readingComprehension = 'Debes valorar el nivel de Comprensión Lectora.';
      if (mathReasoning === null) errors.mathReasoning = 'Debes valorar el nivel de Razonamiento Matemático.';
      if (taskPaceAndCompletion === null) errors.taskPaceAndCompletion = 'Debes valorar el Ritmo de Trabajo.';
      if (impulsivityAndAutonomy === null) errors.impulsivityAndAutonomy = 'Debes valorar el Control de Impulsividad.';
      if (emotionalAndPeerRel === null) errors.emotionalAndPeerRel = 'Debes valorar la Gestión Emocional.';
    } else if (stage === 'INFANTIL') {
      if (infantilOralLanguage === null) errors.infantilOralLanguage = 'Debes valorar el Lenguaje Oral.';
      if (infantilAttentionAssembly === null) errors.infantilAttentionAssembly = 'Debes valorar la Atención en Asamblea.';
      if (infantilPsychomotorFine === null) errors.infantilPsychomotorFine = 'Debes valorar la Psicomotricidad Fina.';
      if (infantilLogicConcepts === null) errors.infantilLogicConcepts = 'Debes valorar los Conceptos Básicos.';
      if (infantilPersonalAutonomy === null) errors.infantilPersonalAutonomy = 'Debes valorar la Autonomía Personal.';
      if (infantilSocialPlay === null) errors.infantilSocialPlay = 'Debes valorar la Socialización y Juego.';
    }

    if (!measuresDuration) {
      errors.measuresDuration = 'Indica cuánto tiempo llevas aplicando ayudas en el aula.';
    }

    if (appliedMeasuresList.length === 0) {
      errors.appliedMeasuresList = 'Selecciona al menos una medida o adaptación previa que hayas probado.';
    }

    if (!measuresResult) {
      errors.measuresResult = 'Indica el resultado obtenido con las ayudas previas.';
    }

    if (familyMeetingDone === null) {
      errors.familyMeetingDone = 'Indica si se ha realizado la entrevista previa con la familia.';
    }

    if (!familyAgreement) {
      errors.familyAgreement = 'Indica el grado de acuerdo o conformidad de la familia.';
    }

    if (!privacyAccepted) {
      errors.privacyAccepted = 'Es obligatorio aceptar la cláusula de tratamiento de datos sensibles RGPD / LOPD-GDD.';
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      // Focus en el resumen de errores
      setTimeout(() => {
        if (errorSummaryRef.current) {
          errorSummaryRef.current.focus();
          errorSummaryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 50);
      return false;
    }

    return true;
  };

  // Abrir pantalla de revisión previa
  const handleOpenReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowReviewModal(true);
    }
  };

  // Envío definitivo tras confirmación en pantalla de revisión
  const handleConfirmSubmit = async () => {
    setIsSubmitting(true);

    const secureId = generateSecureCaseId();

    const questionnaire: ReferralQuestionnaire = {
      stage: stage || 'PRIMARIA',
      studentName: studentName.trim(),
      grade: grade,
      teacherName: currentUser.name,
      teacherEmail: currentUser.email,
      referralDate: new Date().toISOString().split('T')[0],
      mainReason: mainReason.trim(),
      affectedSubjects: affectedSubjects,
      attachedEvidenceName: attachedEvidenceName || undefined,

      // Primaria
      attentionFocus: attentionFocus,
      attentionDescriptor: attentionFocus ? primariaDescriptors.attention[attentionFocus] : undefined,
      readingComprehension: readingComprehension,
      readingDescriptor: readingComprehension ? primariaDescriptors.reading[readingComprehension] : undefined,
      mathReasoning: mathReasoning,
      mathDescriptor: mathReasoning ? primariaDescriptors.math[mathReasoning] : undefined,
      taskPaceAndCompletion: taskPaceAndCompletion,
      taskPaceDescriptor: taskPaceAndCompletion ? primariaDescriptors.taskPace[taskPaceAndCompletion] : undefined,
      impulsivityAndAutonomy: impulsivityAndAutonomy,
      impulsivityDescriptor: impulsivityAndAutonomy ? primariaDescriptors.impulsivity[impulsivityAndAutonomy] : undefined,
      emotionalAndPeerRel: emotionalAndPeerRel,
      emotionalDescriptor: emotionalAndPeerRel ? primariaDescriptors.emotional[emotionalAndPeerRel] : undefined,

      // Infantil
      infantilOralLanguage: infantilOralLanguage,
      infantilOralLanguageDesc: infantilOralLanguage ? infantilDescriptors.oralLang[infantilOralLanguage] : undefined,
      infantilAttentionAssembly: infantilAttentionAssembly,
      infantilAttentionAssemblyDesc: infantilAttentionAssembly ? infantilDescriptors.assembly[infantilAttentionAssembly] : undefined,
      infantilPsychomotorFine: infantilPsychomotorFine,
      infantilPsychomotorFineDesc: infantilPsychomotorFine ? infantilDescriptors.fineMotor[infantilPsychomotorFine] : undefined,
      infantilLogicConcepts: infantilLogicConcepts,
      infantilLogicConceptsDesc: infantilLogicConcepts ? infantilDescriptors.logic[infantilLogicConcepts] : undefined,
      infantilPersonalAutonomy: infantilPersonalAutonomy,
      infantilPersonalAutonomyDesc: infantilPersonalAutonomy ? infantilDescriptors.autonomy[infantilPersonalAutonomy] : undefined,
      infantilSocialPlay: infantilSocialPlay,
      infantilSocialPlayDesc: infantilSocialPlay ? infantilDescriptors.socialPlay[infantilSocialPlay] : undefined,

      // Medidas previas
      measuresDuration: measuresDuration || '1_A_2_MESES',
      appliedMeasuresList: appliedMeasuresList,
      measuresResult: measuresResult || 'INSUFICIENTE',
      measuresObservations: measuresObservations.trim(),

      // Voz del alumno
      studentPerception: {
        perceivedDifficulty: perceivedDifficulty || 'MODERADA',
        favoriteSubjects: favoriteSubjects.trim(),
        hardestSubjects: hardestSubjects.trim(),
        schoolMotivation: schoolMotivation || 'MEDIA'
      },

      // Contexto familiar
      familyContactDone: Boolean(familyMeetingDone),
      familyMeetingDone: Boolean(familyMeetingDone),
      familyAgreement: familyAgreement || 'TOTAL_ACUERDO',
      externalAssessmentDone: externalAssessmentDone,
      externalAssessmentDetails: externalAssessmentDetails.trim(),

      // Consentimiento de Privacidad Auditado
      privacyConsent: {
        policyVersion: CURRENT_PRIVACY_POLICY_VERSION,
        acceptedAt: new Date().toISOString(),
        userEmail: currentUser.email,
        userName: currentUser.name,
        userRole: currentUser.role
      }
    };

    // Objeto de expediente final (SIN predicción ni diagnóstico algorítmico)
    const newCase: ReferralCase = {
      id: secureId,
      stage: stage as EducationalStage,
      studentName: studentName.trim(),
      grade: grade,
      teacherName: currentUser.name,
      createdByEmail: currentUser.email,
      dateSubmitted: new Date().toISOString().split('T')[0],
      status: 'PENDIENTE_REVISION',
      priority: 'MEDIA',
      categoryTag: 'Pendiente de Valoración por Orientación',
      questionnaire: questionnaire,
      privacyConsent: questionnaire.privacyConsent
    };

    try {
      await onSubmitCase(newCase);
      setShowReviewModal(false);
    } catch (err) {
      console.error('Error al guardar caso:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Comprobar si el formulario cumple los requisitos mínimos para habilitar el botón
  const isFormComplete = Boolean(
    stage &&
    studentName.trim().length >= 2 &&
    grade &&
    affectedSubjects.length > 0 &&
    mainReason.trim().length >= 10 &&
    measuresDuration &&
    appliedMeasuresList.length > 0 &&
    measuresResult &&
    familyMeetingDone !== null &&
    familyAgreement &&
    privacyAccepted &&
    (stage === 'PRIMARIA'
      ? attentionFocus !== null && readingComprehension !== null && mathReasoning !== null && taskPaceAndCompletion !== null && impulsivityAndAutonomy !== null && emotionalAndPeerRel !== null
      : infantilOralLanguage !== null && infantilAttentionAssembly !== null && infantilPsychomotorFine !== null && infantilLogicConcepts !== null && infantilPersonalAutonomy !== null && infantilSocialPlay !== null
    )
  );

  return (
    <div className="card" style={{ maxWidth: '880px', margin: '0 auto', padding: '1.75rem' }}>
      {/* Header Institucional */}
      <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.2rem 0.65rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
            Colegio San Buenaventura • Equipo de Orientación
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Docente solicitante: <strong>{currentUser.name}</strong> ({currentUser.email})
          </span>
        </div>
        <h2 style={{ color: 'var(--primary-900)', margin: '0.4rem 0 0.2rem 0', fontSize: '1.4rem' }}>
          Formulario de Solicitud de Valoración Psicopedagógica
        </h2>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          Canal oficial y confidencial regulado por la normativa de Atención a la Diversidad y el RGPD. Todos los datos inician vacíos.
        </p>
      </div>

      {/* Resumen Accesible de Errores (si existen) */}
      {Object.keys(validationErrors).length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="error-summary-heading"
          style={{
            background: '#fef2f2',
            border: '2px solid #ef4444',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.25rem',
            marginBottom: '1.5rem',
            outline: 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <AlertTriangle size={20} color="#b91c1c" />
            <h4 id="error-summary-heading" style={{ color: '#991b1b', fontSize: '0.95rem', fontWeight: 700 }}>
              Por favor, corrige los siguientes {Object.keys(validationErrors).length} errores antes de continuar:
            </h4>
          </div>
          <ul style={{ paddingLeft: '1.25rem', color: '#b91c1c', fontSize: '0.84rem' }}>
            {Object.entries(validationErrors).map(([key, msg]) => (
              <li key={key} style={{ marginBottom: '0.25rem' }}>
                <a 
                  href={`#field-${key}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`field-${key}`)?.focus();
                    document.getElementById(`field-${key}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  style={{ color: '#b91c1c', textDecoration: 'underline', fontWeight: 600 }}
                >
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleOpenReview} noValidate>
        {/* BLOQUE 1: ETAPA Y DATOS GENERALES */}
        <fieldset style={{ border: 'none', padding: 0, margin: 0, marginBottom: '1.5rem' }}>
          <legend style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-800)', marginBottom: '0.6rem' }}>
            1. Etapa Educativa y Datos del Alumno/a
          </legend>

          {/* Selector de Etapa */}
          <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: '12px', border: validationErrors.stage ? '2px solid #ef4444' : '1px solid var(--border-light)', marginBottom: '1rem' }}>
            <label className="form-label" style={{ marginBottom: '0.45rem' }}>
              🎓 Selecciona la Etapa Educativa *
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              <button
                type="button"
                id="field-stage"
                onClick={() => handleStageSelect('INFANTIL')}
                aria-pressed={stage === 'INFANTIL'}
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: stage === 'INFANTIL' ? '2px solid var(--primary-600)' : '1px solid var(--border-light)',
                  background: stage === 'INFANTIL' ? 'var(--primary-50)' : '#ffffff',
                  color: stage === 'INFANTIL' ? 'var(--primary-800)' : 'var(--text-muted)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem'
                }}
              >
                <Baby size={18} /> 2º Ciclo Infantil (3 a 5 años)
              </button>
              <button
                type="button"
                onClick={() => handleStageSelect('PRIMARIA')}
                aria-pressed={stage === 'PRIMARIA'}
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: stage === 'PRIMARIA' ? '2px solid var(--primary-600)' : '1px solid var(--border-light)',
                  background: stage === 'PRIMARIA' ? 'var(--primary-50)' : '#ffffff',
                  color: stage === 'PRIMARIA' ? 'var(--primary-800)' : 'var(--text-muted)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem'
                }}
              >
                <School size={18} /> Educación Primaria (1º a 6º)
              </button>
            </div>
            {validationErrors.stage && (
              <p style={{ color: '#b91c1c', fontSize: '0.75rem', marginTop: '0.35rem', fontWeight: 600 }} role="alert">
                {validationErrors.stage}
              </p>
            )}
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label htmlFor="field-studentName" className="form-label">
                Nombre y Apellidos del Alumno/a *
              </label>
              <input
                type="text"
                id="field-studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="input-text"
                placeholder="Ejemplo: Mateo Fernández Ruiz"
                aria-required="true"
                aria-invalid={Boolean(validationErrors.studentName)}
                aria-describedby={validationErrors.studentName ? 'err-studentName' : 'hint-studentName'}
              />
              <span id="hint-studentName" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Escribe el nombre completo tal como figura en secretaría.
              </span>
              {validationErrors.studentName && (
                <p id="err-studentName" style={{ color: '#b91c1c', fontSize: '0.75rem', marginTop: '0.2rem', fontWeight: 600 }} role="alert">
                  {validationErrors.studentName}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="field-grade" className="form-label">
                Curso y Grupo / Línea *
              </label>
              <select
                id="field-grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="select-input"
                aria-required="true"
                aria-invalid={Boolean(validationErrors.grade)}
                aria-describedby={validationErrors.grade ? 'err-grade' : undefined}
                disabled={!stage}
              >
                <option value="">-- Selecciona curso y grupo --</option>
                {stage === 'INFANTIL' ? (
                  <>
                    <optgroup label="1º Infantil (3 años)">
                      <option value="1º Infantil (3 años A)">1º Infantil (3 años A)</option>
                      <option value="1º Infantil (3 años B)">1º Infantil (3 años B)</option>
                      <option value="1º Infantil (3 años C)">1º Infantil (3 años C)</option>
                    </optgroup>
                    <optgroup label="2º Infantil (4 años)">
                      <option value="2º Infantil (4 años A)">2º Infantil (4 años A)</option>
                      <option value="2º Infantil (4 años B)">2º Infantil (4 años B)</option>
                      <option value="2º Infantil (4 años C)">2º Infantil (4 años C)</option>
                    </optgroup>
                    <optgroup label="3º Infantil (5 años)">
                      <option value="3º Infantil (5 años A)">3º Infantil (5 años A)</option>
                      <option value="3º Infantil (5 años B)">3º Infantil (5 años B)</option>
                      <option value="3º Infantil (5 años C)">3º Infantil (5 años C)</option>
                    </optgroup>
                  </>
                ) : (
                  <>
                    <optgroup label="1º Primaria">
                      <option value="1º Educación Primaria A">1º Educación Primaria A</option>
                      <option value="1º Educación Primaria B">1º Educación Primaria B</option>
                      <option value="1º Educación Primaria C">1º Educación Primaria C</option>
                    </optgroup>
                    <optgroup label="2º Primaria">
                      <option value="2º Educación Primaria A">2º Educación Primaria A</option>
                      <option value="2º Educación Primaria B">2º Educación Primaria B</option>
                      <option value="2º Educación Primaria C">2º Educación Primaria C</option>
                    </optgroup>
                    <optgroup label="3º Primaria">
                      <option value="3º Educación Primaria A">3º Educación Primaria A</option>
                      <option value="3º Educación Primaria B">3º Educación Primaria B</option>
                      <option value="3º Educación Primaria C">3º Educación Primaria C</option>
                    </optgroup>
                    <optgroup label="4º Primaria">
                      <option value="4º Educación Primaria A">4º Educación Primaria A</option>
                      <option value="4º Educación Primaria B">4º Educación Primaria B</option>
                      <option value="4º Educación Primaria C">4º Educación Primaria C</option>
                    </optgroup>
                    <optgroup label="5º Primaria">
                      <option value="5º Educación Primaria A">5º Educación Primaria A</option>
                      <option value="5º Educación Primaria B">5º Educación Primaria B</option>
                      <option value="5º Educación Primaria C">5º Educación Primaria C</option>
                    </optgroup>
                    <optgroup label="6º Primaria">
                      <option value="6º Educación Primaria A">6º Educación Primaria A</option>
                      <option value="6º Educación Primaria B">6º Educación Primaria B</option>
                      <option value="6º Educación Primaria C">6º Educación Primaria C</option>
                    </optgroup>
                  </>
                )}
              </select>
              {validationErrors.grade && (
                <p id="err-grade" style={{ color: '#b91c1c', fontSize: '0.75rem', marginTop: '0.2rem', fontWeight: 600 }} role="alert">
                  {validationErrors.grade}
                </p>
              )}
            </div>
          </div>

          {/* Áreas Afectadas (Checkboxes que inician desmarcados) */}
          <div className="form-group">
            <label id="label-affectedSubjects" className="form-label">
              Áreas o momentos de la jornada donde se manifiesta la dificultad *
            </label>
            <div 
              id="field-affectedSubjects" 
              tabIndex={-1}
              role="group" 
              aria-labelledby="label-affectedSubjects"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.35rem' }}
            >
              {stage ? (
                (stage === 'INFANTIL' ? subjectsListInfantil : subjectsListPrimaria).map(sub => {
                  const isChecked = affectedSubjects.includes(sub);
                  return (
                    <label
                      key={sub}
                      style={{
                        background: isChecked ? 'var(--primary-100)' : 'var(--bg-subtle)',
                        color: isChecked ? 'var(--primary-900)' : 'var(--text-main)',
                        border: `1px solid ${isChecked ? 'var(--primary-600)' : 'var(--border-light)'}`,
                        padding: '0.35rem 0.75rem',
                        borderRadius: '16px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleToggleSubject(sub)}
                        style={{ width: '16px', height: '16px' }}
                      />
                      {sub}
                    </label>
                  );
                })
              ) : (
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  Selecciona primero la etapa educativa arriba para ver las asignaturas/momentos correspondientes.
                </span>
              )}
            </div>
            {validationErrors.affectedSubjects && (
              <p style={{ color: '#b91c1c', fontSize: '0.75rem', marginTop: '0.3rem', fontWeight: 600 }} role="alert">
                {validationErrors.affectedSubjects}
              </p>
            )}
          </div>

          {/* Motivo Principal */}
          <div className="form-group">
            <label htmlFor="field-mainReason" className="form-label">
              Motivo Principal de Consulta en el Aula *
            </label>
            <textarea
              id="field-mainReason"
              rows={3}
              className="textarea-input"
              value={mainReason}
              onChange={(e) => setMainReason(e.target.value)}
              placeholder="Describe detalladamente las conductas observadas, situaciones concretas de dificultad y momentos en los que se acentúa..."
              aria-required="true"
              aria-invalid={Boolean(validationErrors.mainReason)}
              aria-describedby={validationErrors.mainReason ? 'err-mainReason' : 'hint-mainReason'}
            />
            <span id="hint-mainReason" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              Ejemplo orientativo: Desatención recurrente en tareas de copia, bloqueos al resolver problemas o dificultades en la articulación oral.
            </span>
            {validationErrors.mainReason && (
              <p id="err-mainReason" style={{ color: '#b91c1c', fontSize: '0.75rem', marginTop: '0.2rem', fontWeight: 600 }} role="alert">
                {validationErrors.mainReason}
              </p>
            )}
          </div>

          {/* Adjunto Seguro */}
          <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <label htmlFor="field-fileInput" className="form-label" style={{ fontSize: '0.82rem', marginBottom: '0.2rem' }}>
              📎 Adjuntar Muestra de Trabajo / Evidencia Anonimizada (Opcional)
            </label>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.45rem' }}>
              Formatos admitidos: PDF, JPG, PNG (máx. 5 MB). Se valida firma binaria anti-spoofing. Asegúrate de que no aparezcan teléfonos ni direcciones familiares.
            </p>
            <input
              ref={fileInputRef}
              type="file"
              id="field-fileInput"
              accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
              onChange={handleFileChange}
              style={{ fontSize: '0.8rem' }}
            />
            {attachedEvidenceName && (
              <p style={{ fontSize: '0.78rem', color: 'var(--primary-700)', marginTop: '0.3rem', fontWeight: 600 }}>
                ✓ Evidencia validada: {attachedEvidenceName}
              </p>
            )}
            {fileError && (
              <p style={{ color: '#b91c1c', fontSize: '0.75rem', marginTop: '0.3rem', fontWeight: 600 }} role="alert">
                ⚠ {fileError}
              </p>
            )}
          </div>
        </fieldset>

        {/* BLOQUE 2: INDICADORES DE AULA (INICIAN ESTRICTAMENTE EN NULL / "SIN VALORAR") */}
        <fieldset style={{ border: 'none', padding: 0, margin: 0, marginBottom: '1.5rem' }}>
          <legend style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-800)', marginBottom: '0.3rem' }}>
            2. Indicadores Clínicos de Aula (Las 6 Áreas de Observación)
          </legend>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
            Todos los deslizadores inician en <strong>"Sin valorar"</strong>. Pulsa sobre el valor correspondiente según tu observación en clase.
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', background: '#ffffff', padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '0.72rem', fontWeight: 600, marginBottom: '1rem', flexWrap: 'wrap', gap: '0.3rem' }}>
            <span style={{ color: '#991b1b' }}>1 = 🔴 Dificultad Grave</span>
            <span style={{ color: '#9a3412' }}>2 = 🟠 Dificultad Frecuente</span>
            <span style={{ color: '#854d0e' }}>3 = 🟡 Nivel Medio</span>
            <span style={{ color: '#3730a3' }}>4 = 🟢 Buen Nivel</span>
            <span style={{ color: '#166534' }}>5 = 🔵 Excelente</span>
          </div>

          {stage === 'PRIMARIA' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Área 1: Atención */}
              <div className="rating-group" id="field-attentionFocus">
                <div className="rating-header">
                  <span>1. Atención y Concentración en el Aula *</span>
                  <span className={`rating-badge ${attentionFocus ? `val-${attentionFocus}` : ''}`}>
                    {attentionFocus ? `${attentionFocus} / 5` : '⚠️ Sin valorar'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={attentionFocus || 1}
                    onChange={(e) => setAttentionFocus(Number(e.target.value))}
                    style={{ flex: 1 }}
                  />
                  {!attentionFocus && (
                    <button
                      type="button"
                      onClick={() => setAttentionFocus(3)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem', minHeight: '28px' }}
                    >
                      Puntuar
                    </button>
                  )}
                </div>
                {attentionFocus ? (
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', marginTop: '0.3rem', fontStyle: 'italic' }}>
                    {primariaDescriptors.attention[attentionFocus]}
                  </div>
                ) : (
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '0.2rem' }}>
                    Mueve la barra para registrar tu valoración del nivel atencional.
                  </p>
                )}
                {validationErrors.attentionFocus && (
                  <p style={{ color: '#b91c1c', fontSize: '0.73rem', fontWeight: 600, marginTop: '0.2rem' }}>{validationErrors.attentionFocus}</p>
                )}
              </div>

              {/* Área 2: Lectura */}
              <div className="rating-group" id="field-readingComprehension">
                <div className="rating-header">
                  <span>2. Fluidez y Comprensión Lectora *</span>
                  <span className={`rating-badge ${readingComprehension ? `val-${readingComprehension}` : ''}`}>
                    {readingComprehension ? `${readingComprehension} / 5` : '⚠️ Sin valorar'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={readingComprehension || 1}
                    onChange={(e) => setReadingComprehension(Number(e.target.value))}
                    style={{ flex: 1 }}
                  />
                  {!readingComprehension && (
                    <button
                      type="button"
                      onClick={() => setReadingComprehension(3)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem', minHeight: '28px' }}
                    >
                      Puntuar
                    </button>
                  )}
                </div>
                {readingComprehension && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', marginTop: '0.3rem', fontStyle: 'italic' }}>
                    {primariaDescriptors.reading[readingComprehension]}
                  </div>
                )}
                {validationErrors.readingComprehension && (
                  <p style={{ color: '#b91c1c', fontSize: '0.73rem', fontWeight: 600, marginTop: '0.2rem' }}>{validationErrors.readingComprehension}</p>
                )}
              </div>

              {/* Área 3: Matemáticas */}
              <div className="rating-group" id="field-mathReasoning">
                <div className="rating-header">
                  <span>3. Razonamiento Matemático y Problemas *</span>
                  <span className={`rating-badge ${mathReasoning ? `val-${mathReasoning}` : ''}`}>
                    {mathReasoning ? `${mathReasoning} / 5` : '⚠️ Sin valorar'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={mathReasoning || 1}
                    onChange={(e) => setMathReasoning(Number(e.target.value))}
                    style={{ flex: 1 }}
                  />
                  {!mathReasoning && (
                    <button
                      type="button"
                      onClick={() => setMathReasoning(3)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem', minHeight: '28px' }}
                    >
                      Puntuar
                    </button>
                  )}
                </div>
                {mathReasoning && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', marginTop: '0.3rem', fontStyle: 'italic' }}>
                    {primariaDescriptors.math[mathReasoning]}
                  </div>
                )}
                {validationErrors.mathReasoning && (
                  <p style={{ color: '#b91c1c', fontSize: '0.73rem', fontWeight: 600, marginTop: '0.2rem' }}>{validationErrors.mathReasoning}</p>
                )}
              </div>

              {/* Área 4: Ritmo */}
              <div className="rating-group" id="field-taskPaceAndCompletion">
                <div className="rating-header">
                  <span>4. Ritmo de Trabajo y Finalización de Tareas *</span>
                  <span className={`rating-badge ${taskPaceAndCompletion ? `val-${taskPaceAndCompletion}` : ''}`}>
                    {taskPaceAndCompletion ? `${taskPaceAndCompletion} / 5` : '⚠️ Sin valorar'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={taskPaceAndCompletion || 1}
                    onChange={(e) => setTaskPaceAndCompletion(Number(e.target.value))}
                    style={{ flex: 1 }}
                  />
                  {!taskPaceAndCompletion && (
                    <button
                      type="button"
                      onClick={() => setTaskPaceAndCompletion(3)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem', minHeight: '28px' }}
                    >
                      Puntuar
                    </button>
                  )}
                </div>
                {taskPaceAndCompletion && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', marginTop: '0.3rem', fontStyle: 'italic' }}>
                    {primariaDescriptors.taskPace[taskPaceAndCompletion]}
                  </div>
                )}
                {validationErrors.taskPaceAndCompletion && (
                  <p style={{ color: '#b91c1c', fontSize: '0.73rem', fontWeight: 600, marginTop: '0.2rem' }}>{validationErrors.taskPaceAndCompletion}</p>
                )}
              </div>

              {/* Área 5: Impulsividad */}
              <div className="rating-group" id="field-impulsivityAndAutonomy">
                <div className="rating-header">
                  <span>5. Control de Impulsividad y Autonomía *</span>
                  <span className={`rating-badge ${impulsivityAndAutonomy ? `val-${impulsivityAndAutonomy}` : ''}`}>
                    {impulsivityAndAutonomy ? `${impulsivityAndAutonomy} / 5` : '⚠️ Sin valorar'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={impulsivityAndAutonomy || 1}
                    onChange={(e) => setImpulsivityAndAutonomy(Number(e.target.value))}
                    style={{ flex: 1 }}
                  />
                  {!impulsivityAndAutonomy && (
                    <button
                      type="button"
                      onClick={() => setImpulsivityAndAutonomy(3)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem', minHeight: '28px' }}
                    >
                      Puntuar
                    </button>
                  )}
                </div>
                {impulsivityAndAutonomy && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', marginTop: '0.3rem', fontStyle: 'italic' }}>
                    {primariaDescriptors.impulsivity[impulsivityAndAutonomy]}
                  </div>
                )}
                {validationErrors.impulsivityAndAutonomy && (
                  <p style={{ color: '#b91c1c', fontSize: '0.73rem', fontWeight: 600, marginTop: '0.2rem' }}>{validationErrors.impulsivityAndAutonomy}</p>
                )}
              </div>

              {/* Área 6: Emocional */}
              <div className="rating-group" id="field-emotionalAndPeerRel">
                <div className="rating-header">
                  <span>6. Gestión Emocional y Relación con Iguales *</span>
                  <span className={`rating-badge ${emotionalAndPeerRel ? `val-${emotionalAndPeerRel}` : ''}`}>
                    {emotionalAndPeerRel ? `${emotionalAndPeerRel} / 5` : '⚠️ Sin valorar'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={emotionalAndPeerRel || 1}
                    onChange={(e) => setEmotionalAndPeerRel(Number(e.target.value))}
                    style={{ flex: 1 }}
                  />
                  {!emotionalAndPeerRel && (
                    <button
                      type="button"
                      onClick={() => setEmotionalAndPeerRel(3)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem', minHeight: '28px' }}
                    >
                      Puntuar
                    </button>
                  )}
                </div>
                {emotionalAndPeerRel && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', marginTop: '0.3rem', fontStyle: 'italic' }}>
                    {primariaDescriptors.emotional[emotionalAndPeerRel]}
                  </div>
                )}
                {validationErrors.emotionalAndPeerRel && (
                  <p style={{ color: '#b91c1c', fontSize: '0.73rem', fontWeight: 600, marginTop: '0.2rem' }}>{validationErrors.emotionalAndPeerRel}</p>
                )}
              </div>
            </div>
          )}

          {stage === 'INFANTIL' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Infantil Área 1: Lenguaje Oral */}
              <div className="rating-group" id="field-infantilOralLanguage">
                <div className="rating-header">
                  <span>1. Lenguaje y Comunicación Oral *</span>
                  <span className={`rating-badge ${infantilOralLanguage ? `val-${infantilOralLanguage}` : ''}`}>
                    {infantilOralLanguage ? `${infantilOralLanguage} / 5` : '⚠️ Sin valorar'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={infantilOralLanguage || 1}
                    onChange={(e) => setInfantilOralLanguage(Number(e.target.value))}
                    style={{ flex: 1 }}
                  />
                  {!infantilOralLanguage && (
                    <button
                      type="button"
                      onClick={() => setInfantilOralLanguage(3)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem', minHeight: '28px' }}
                    >
                      Puntuar
                    </button>
                  )}
                </div>
                {infantilOralLanguage && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', marginTop: '0.3rem', fontStyle: 'italic' }}>
                    {infantilDescriptors.oralLang[infantilOralLanguage]}
                  </div>
                )}
                {validationErrors.infantilOralLanguage && (
                  <p style={{ color: '#b91c1c', fontSize: '0.73rem', fontWeight: 600, marginTop: '0.2rem' }}>{validationErrors.infantilOralLanguage}</p>
                )}
              </div>

              {/* Infantil Área 2: Asamblea */}
              <div className="rating-group" id="field-infantilAttentionAssembly">
                <div className="rating-header">
                  <span>2. Atención en Asamblea e Inquietud Motriz *</span>
                  <span className={`rating-badge ${infantilAttentionAssembly ? `val-${infantilAttentionAssembly}` : ''}`}>
                    {infantilAttentionAssembly ? `${infantilAttentionAssembly} / 5` : '⚠️ Sin valorar'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={infantilAttentionAssembly || 1}
                    onChange={(e) => setInfantilAttentionAssembly(Number(e.target.value))}
                    style={{ flex: 1 }}
                  />
                  {!infantilAttentionAssembly && (
                    <button
                      type="button"
                      onClick={() => setInfantilAttentionAssembly(3)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem', minHeight: '28px' }}
                    >
                      Puntuar
                    </button>
                  )}
                </div>
                {infantilAttentionAssembly && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', marginTop: '0.3rem', fontStyle: 'italic' }}>
                    {infantilDescriptors.assembly[infantilAttentionAssembly]}
                  </div>
                )}
                {validationErrors.infantilAttentionAssembly && (
                  <p style={{ color: '#b91c1c', fontSize: '0.73rem', fontWeight: 600, marginTop: '0.2rem' }}>{validationErrors.infantilAttentionAssembly}</p>
                )}
              </div>

              {/* Infantil Área 3: Motricidad Fina */}
              <div className="rating-group" id="field-infantilPsychomotorFine">
                <div className="rating-header">
                  <span>3. Psicomotricidad Fina y Pinza Digital *</span>
                  <span className={`rating-badge ${infantilPsychomotorFine ? `val-${infantilPsychomotorFine}` : ''}`}>
                    {infantilPsychomotorFine ? `${infantilPsychomotorFine} / 5` : '⚠️ Sin valorar'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={infantilPsychomotorFine || 1}
                    onChange={(e) => setInfantilPsychomotorFine(Number(e.target.value))}
                    style={{ flex: 1 }}
                  />
                  {!infantilPsychomotorFine && (
                    <button
                      type="button"
                      onClick={() => setInfantilPsychomotorFine(3)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem', minHeight: '28px' }}
                    >
                      Puntuar
                    </button>
                  )}
                </div>
                {infantilPsychomotorFine && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', marginTop: '0.3rem', fontStyle: 'italic' }}>
                    {infantilDescriptors.fineMotor[infantilPsychomotorFine]}
                  </div>
                )}
                {validationErrors.infantilPsychomotorFine && (
                  <p style={{ color: '#b91c1c', fontSize: '0.73rem', fontWeight: 600, marginTop: '0.2rem' }}>{validationErrors.infantilPsychomotorFine}</p>
                )}
              </div>

              {/* Infantil Área 4: Lógica */}
              <div className="rating-group" id="field-infantilLogicConcepts">
                <div className="rating-header">
                  <span>4. Pensamiento Lógico y Conceptos Básicos *</span>
                  <span className={`rating-badge ${infantilLogicConcepts ? `val-${infantilLogicConcepts}` : ''}`}>
                    {infantilLogicConcepts ? `${infantilLogicConcepts} / 5` : '⚠️ Sin valorar'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={infantilLogicConcepts || 1}
                    onChange={(e) => setInfantilLogicConcepts(Number(e.target.value))}
                    style={{ flex: 1 }}
                  />
                  {!infantilLogicConcepts && (
                    <button
                      type="button"
                      onClick={() => setInfantilLogicConcepts(3)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem', minHeight: '28px' }}
                    >
                      Puntuar
                    </button>
                  )}
                </div>
                {infantilLogicConcepts && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', marginTop: '0.3rem', fontStyle: 'italic' }}>
                    {infantilDescriptors.logic[infantilLogicConcepts]}
                  </div>
                )}
                {validationErrors.infantilLogicConcepts && (
                  <p style={{ color: '#b91c1c', fontSize: '0.73rem', fontWeight: 600, marginTop: '0.2rem' }}>{validationErrors.infantilLogicConcepts}</p>
                )}
              </div>

              {/* Infantil Área 5: Autonomía */}
              <div className="rating-group" id="field-infantilPersonalAutonomy">
                <div className="rating-header">
                  <span>5. Autonomía Personal y Hábitos de Aula *</span>
                  <span className={`rating-badge ${infantilPersonalAutonomy ? `val-${infantilPersonalAutonomy}` : ''}`}>
                    {infantilPersonalAutonomy ? `${infantilPersonalAutonomy} / 5` : '⚠️ Sin valorar'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={infantilPersonalAutonomy || 1}
                    onChange={(e) => setInfantilPersonalAutonomy(Number(e.target.value))}
                    style={{ flex: 1 }}
                  />
                  {!infantilPersonalAutonomy && (
                    <button
                      type="button"
                      onClick={() => setInfantilPersonalAutonomy(3)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem', minHeight: '28px' }}
                    >
                      Puntuar
                    </button>
                  )}
                </div>
                {infantilPersonalAutonomy && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', marginTop: '0.3rem', fontStyle: 'italic' }}>
                    {infantilDescriptors.autonomy[infantilPersonalAutonomy]}
                  </div>
                )}
                {validationErrors.infantilPersonalAutonomy && (
                  <p style={{ color: '#b91c1c', fontSize: '0.73rem', fontWeight: 600, marginTop: '0.2rem' }}>{validationErrors.infantilPersonalAutonomy}</p>
                )}
              </div>

              {/* Infantil Área 6: Juego */}
              <div className="rating-group" id="field-infantilSocialPlay">
                <div className="rating-header">
                  <span>6. Socialización y Juego Simbólico *</span>
                  <span className={`rating-badge ${infantilSocialPlay ? `val-${infantilSocialPlay}` : ''}`}>
                    {infantilSocialPlay ? `${infantilSocialPlay} / 5` : '⚠️ Sin valorar'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={infantilSocialPlay || 1}
                    onChange={(e) => setInfantilSocialPlay(Number(e.target.value))}
                    style={{ flex: 1 }}
                  />
                  {!infantilSocialPlay && (
                    <button
                      type="button"
                      onClick={() => setInfantilSocialPlay(3)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem', minHeight: '28px' }}
                    >
                      Puntuar
                    </button>
                  )}
                </div>
                {infantilSocialPlay && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', marginTop: '0.3rem', fontStyle: 'italic' }}>
                    {infantilDescriptors.socialPlay[infantilSocialPlay]}
                  </div>
                )}
                {validationErrors.infantilSocialPlay && (
                  <p style={{ color: '#b91c1c', fontSize: '0.73rem', fontWeight: 600, marginTop: '0.2rem' }}>{validationErrors.infantilSocialPlay}</p>
                )}
              </div>
            </div>
          )}

          {!stage && (
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Selecciona primero la etapa arriba para cargar las áreas clínicas correspondientes.
            </p>
          )}
        </fieldset>

        {/* BLOQUE 3: MEDIDAS PREVIAS (INICIAN ESTRICTAMENTE EN BLANCO) */}
        <fieldset style={{ border: 'none', padding: 0, margin: 0, marginBottom: '1.5rem' }}>
          <legend style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-800)', marginBottom: '0.6rem' }}>
            3. Ayudas y Adaptaciones Previas Probadas en Clase
          </legend>

          <div className="form-group">
            <label htmlFor="field-measuresDuration" className="form-label">
              1. ¿Cuánto tiempo llevas aplicando ayudas en el aula? *
            </label>
            <select
              id="field-measuresDuration"
              value={measuresDuration}
              onChange={(e) => setMeasuresDuration(e.target.value as any)}
              className="select-input"
              aria-required="true"
              aria-invalid={Boolean(validationErrors.measuresDuration)}
            >
              <option value="">-- Selecciona el periodo de tiempo --</option>
              <option value="MENOS_1_MES">Menos de 1 mes (Observación preliminar)</option>
              <option value="1_A_2_MESES">Entre 1 y 2 meses (Tiempo recomendado)</option>
              <option value="MAS_2_MESES">Más de 2 meses (Dificultades persistentes)</option>
            </select>
            {validationErrors.measuresDuration && (
              <p style={{ color: '#b91c1c', fontSize: '0.75rem', marginTop: '0.2rem', fontWeight: 600 }} role="alert">
                {validationErrors.measuresDuration}
              </p>
            )}
          </div>

          <div className="form-group">
            <label id="label-appliedMeasures" className="form-label">
              2. ¿Qué adaptaciones o medidas concretas has probado? (Marca las aplicadas) *
            </label>
            <div
              id="field-appliedMeasuresList"
              tabIndex={-1}
              role="group"
              aria-labelledby="label-appliedMeasures"
              style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.35rem' }}
            >
              {(stage === 'INFANTIL' ? availableMeasuresInfantil : availableMeasuresPrimaria).map(mea => {
                const isChecked = appliedMeasuresList.includes(mea);
                return (
                  <label
                    key={mea}
                    style={{
                      background: isChecked ? 'var(--primary-50)' : '#ffffff',
                      border: `1px solid ${isChecked ? 'var(--primary-600)' : 'var(--border-light)'}`,
                      padding: '0.45rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggleMeasure(mea)}
                      style={{ width: '16px', height: '16px' }}
                    />
                    {mea}
                  </label>
                );
              })}
            </div>
            {validationErrors.appliedMeasuresList && (
              <p style={{ color: '#b91c1c', fontSize: '0.75rem', marginTop: '0.3rem', fontWeight: 600 }} role="alert">
                {validationErrors.appliedMeasuresList}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="field-measuresResult" className="form-label">
              3. ¿Qué resultado han dado esas ayudas en el aula? *
            </label>
            <select
              id="field-measuresResult"
              value={measuresResult}
              onChange={(e) => setMeasuresResult(e.target.value as any)}
              className="select-input"
              aria-required="true"
              aria-invalid={Boolean(validationErrors.measuresResult)}
            >
              <option value="">-- Selecciona el resultado observado --</option>
              <option value="MEJORIA_LEVE_PERSISTE_DIFICULTAD">Ha mejorado algo pero persiste una dificultad importante</option>
              <option value="INSUFICIENTE">No han sido suficientes; sigue sin avanzar al ritmo de clase</option>
              <option value="BLOQUEO_PERSISTENTE">Persiste el bloqueo y la desregulación emocional</option>
            </select>
            {validationErrors.measuresResult && (
              <p style={{ color: '#b91c1c', fontSize: '0.75rem', marginTop: '0.2rem', fontWeight: 600 }} role="alert">
                {validationErrors.measuresResult}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="field-measuresObservations" className="form-label">
              Observaciones adicionales sobre cómo ha respondido el alumno/a
            </label>
            <input
              type="text"
              id="field-measuresObservations"
              value={measuresObservations}
              onChange={(e) => setMeasuresObservations(e.target.value)}
              className="input-text"
              placeholder="Ejemplo: Responde favorablemente en grupos reducidos, pero decae en tareas autónomas largas."
            />
          </div>
        </fieldset>

        {/* BLOQUE 4: VOZ DEL ALUMNO (INICIA VACÍO) */}
        <fieldset style={{ border: 'none', padding: 0, margin: 0, marginBottom: '1.5rem' }}>
          <legend style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-800)', marginBottom: '0.6rem' }}>
            4. Voz y Percepción del Alumno/a (Recogido en Tutoría)
          </legend>
          <div className="grid-2">
            <div className="form-group">
              <label htmlFor="field-perceivedDifficulty" className="form-label">
                Dificultad manifestada por el alumno/a
              </label>
              <select
                id="field-perceivedDifficulty"
                value={perceivedDifficulty}
                onChange={(e) => setPerceivedDifficulty(e.target.value as any)}
                className="select-input"
              >
                <option value="">-- Selecciona percepción --</option>
                <option value="NINGUNA">No percibe dificultad ("A mí todo me resulta fácil")</option>
                <option value="LEVE">Percibe dificultad leve ("A veces me cuesta un poco")</option>
                <option value="MODERADA">Percibe dificultad moderada ("Me cuesta bastante seguir la clase")</option>
                <option value="ALTA">Percibe gran frustración ("Me siento muy agobiado/a")</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="field-schoolMotivation" className="form-label">
                Motivación hacia la escuela
              </label>
              <select
                id="field-schoolMotivation"
                value={schoolMotivation}
                onChange={(e) => setSchoolMotivation(e.target.value as any)}
                className="select-input"
              >
                <option value="">-- Selecciona motivación --</option>
                <option value="ALTA">Alta (Acude contento/a y participativo/a)</option>
                <option value="MEDIA">Media (Acude con normalidad)</option>
                <option value="BAJA">Baja (Muestra rechazo, desgana o somatizaciones)</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* BLOQUE 5: CONTEXTO FAMILIAR */}
        <fieldset style={{ border: 'none', padding: 0, margin: 0, marginBottom: '1.5rem' }}>
          <legend style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-800)', marginBottom: '0.6rem' }}>
            5. Contexto Familiar e Informes Externos
          </legend>

          <div className="grid-2">
            <div className="form-group">
              <label htmlFor="field-familyMeetingDone" className="form-label">
                ¿Entrevista realizada con la familia? *
              </label>
              <select
                id="field-familyMeetingDone"
                value={familyMeetingDone === null ? '' : (familyMeetingDone ? 'SI' : 'NO')}
                onChange={(e) => setFamilyMeetingDone(e.target.value === '' ? null : e.target.value === 'SI')}
                className="select-input"
                aria-required="true"
                aria-invalid={familyMeetingDone === null && Boolean(validationErrors.familyMeetingDone)}
              >
                <option value="">-- Selecciona estado de la reunión --</option>
                <option value="SI">Sí, entrevista realizada</option>
                <option value="NO">No, pendiente de tutoría</option>
              </select>
              {validationErrors.familyMeetingDone && (
                <p style={{ color: '#b91c1c', fontSize: '0.75rem', marginTop: '0.2rem', fontWeight: 600 }} role="alert">
                  {validationErrors.familyMeetingDone}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="field-familyAgreement" className="form-label">
                Conformidad de la familia *
              </label>
              <select
                id="field-familyAgreement"
                value={familyAgreement}
                onChange={(e) => setFamilyAgreement(e.target.value as any)}
                className="select-input"
                aria-required="true"
                aria-invalid={Boolean(validationErrors.familyAgreement)}
              >
                <option value="">-- Selecciona conformidad --</option>
                <option value="TOTAL_ACUERDO">De acuerdo (Consentimiento familiar firmado)</option>
                <option value="CONFORMIDAD_PARCIAL">Conformidad con dudas</option>
                <option value="RESISTENCIA_FAMILIAR">Resistencia inicial</option>
                <option value="PENDIENTE_REUNION">Pendiente de tutoría</option>
              </select>
              {validationErrors.familyAgreement && (
                <p style={{ color: '#b91c1c', fontSize: '0.75rem', marginTop: '0.2rem', fontWeight: 600 }} role="alert">
                  {validationErrors.familyAgreement}
                </p>
              )}
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={externalAssessmentDone}
                onChange={(e) => setExternalAssessmentDone(e.target.checked)}
                style={{ width: '16px', height: '16px' }}
              />
              ¿Dispone de informes externos previos? (Atención Temprana CDIAT, Neuropediatra, Psicólogo, Logopeda)
            </label>
            {externalAssessmentDone && (
              <div style={{ marginTop: '0.5rem' }}>
                <input
                  type="text"
                  value={externalAssessmentDetails}
                  onChange={(e) => setExternalAssessmentDetails(e.target.value)}
                  className="input-text"
                  placeholder="Detalla qué centro o especialista emite el informe (sin datos médicos innecesarios)..."
                />
              </div>
            )}
          </div>
        </fieldset>

        {/* BLOQUE 6: ACEPTACIÓN DE PRIVACIDAD RGPD / LOPD-GDD OBLIGATORIA */}
        <div 
          id="field-privacyAccepted"
          tabIndex={-1}
          style={{
            background: '#f0fdf4',
            border: validationErrors.privacyAccepted ? '2px solid #ef4444' : '1px solid #86efac',
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
            <ShieldCheck size={24} color="#166534" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer', fontSize: '0.85rem', color: '#14532d', fontWeight: 600 }}>
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  aria-required="true"
                  style={{ width: '18px', height: '18px', marginTop: '2px' }}
                />
                <span>
                  He informado a la familia y confirmo que los datos recogidos responden estrictamente a la necesidad psicopedagógica y educativa del menor, conforme a la normativa RGPD UE 2016/679 y la LOPD-GDD 3/2018 (Cláusula de Privacidad {CURRENT_PRIVACY_POLICY_VERSION}).
                </span>
              </label>
              <p style={{ fontSize: '0.73rem', color: '#166534', marginTop: '0.35rem', marginLeft: '1.65rem' }}>
                🔒 La aceptación quedará registrada de forma inmutable con fecha, hora y usuario institucional (<strong>{currentUser.email}</strong>).
              </p>
              {validationErrors.privacyAccepted && (
                <p style={{ color: '#b91c1c', fontSize: '0.75rem', marginTop: '0.35rem', fontWeight: 700, marginLeft: '1.65rem' }} role="alert">
                  {validationErrors.privacyAccepted}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* BOTÓN DE ENVÍO / REVISIÓN: DESHABILITADO HASTA COMPLETAR REQUISITOS */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button
            type="submit"
            disabled={!isFormComplete}
            className="btn btn-primary"
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '0.9rem',
              opacity: isFormComplete ? 1 : 0.5,
              cursor: isFormComplete ? 'pointer' : 'not-allowed'
            }}
          >
            <Eye size={18} /> Revisar Expediente antes de Enviar
          </button>
        </div>
        {!isFormComplete && (
          <p style={{ textAlign: 'right', fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            ℹ️ El botón se habilitará cuando todos los campos obligatorios y la cláusula de privacidad estén cumplimentados.
          </p>
        )}
      </form>

      {/* PANTALLA DE REVISIÓN PREVIA CON CONFIRMACIÓN FINAL */}
      {showReviewModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="review-heading">
          <div className="modal-content" style={{ maxWidth: '750px', padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.15rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
                  Paso Final: Verificación de Datos
                </span>
                <h3 id="review-heading" style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                  Revisión Previa del Expediente de Derivación
                </h3>
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowReviewModal(false)}
                style={{ padding: '0.35rem', minHeight: '32px' }}
              >
                ✕
              </button>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.1rem', borderRadius: '12px', border: '1px solid var(--border-light)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div><strong>Alumno/a:</strong> {studentName}</div>
                <div><strong>Curso y Grupo:</strong> {grade} ({stage === 'INFANTIL' ? '2º Ciclo Infantil' : 'Primaria'})</div>
                <div><strong>Docente Solicitante:</strong> {currentUser.name}</div>
                <div><strong>Email institucional:</strong> {currentUser.email}</div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.6rem', marginBottom: '0.75rem' }}>
                <strong>Áreas afectadas:</strong> {affectedSubjects.join(', ')}
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.6rem', marginBottom: '0.75rem' }}>
                <strong>Motivo de consulta:</strong>
                <p style={{ fontStyle: 'italic', color: '#334155', marginTop: '0.2rem' }}>"{mainReason}"</p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.6rem', marginBottom: '0.75rem' }}>
                <strong>Medidas previas probadas ({measuresDuration}):</strong>
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.2rem' }}>
                  {appliedMeasuresList.map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                </ul>
              </div>

              {attachedEvidenceName && (
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.6rem', marginBottom: '0.75rem' }}>
                  <strong>Evidencia adjunta:</strong> {attachedEvidenceName}
                </div>
              )}

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.6rem' }}>
                <strong>Registro de Privacidad:</strong> Cláusula {CURRENT_PRIVACY_POLICY_VERSION} aceptada por {currentUser.email}.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowReviewModal(false)}
                disabled={isSubmitting}
                style={{ padding: '0.65rem 1.25rem' }}
              >
                <ArrowLeft size={16} /> Modificar Datos
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleConfirmSubmit}
                disabled={isSubmitting}
                style={{ padding: '0.65rem 1.5rem' }}
              >
                <CheckCircle2 size={18} /> {isSubmitting ? 'Guardando expediente...' : 'Confirmar y Enviar a Orientación'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
