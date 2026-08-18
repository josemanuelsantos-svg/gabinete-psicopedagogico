import { ReferralQuestionnaire, TriageResult, DiagnosticHypothesis, PsychometricTestSuggestion } from '../types';

export function calculateTriage(q: ReferralQuestionnaire): TriageResult {
  const isInfantil = q.stage === 'INFANTIL';

  if (isInfantil) {
    return calculateInfantilTriage(q);
  } else {
    return calculatePrimariaTriage(q);
  }
}

// -------------------------------------------------------------
// TRIAJE PARA 2º CICLO DE EDUCACIÓN INFANTIL (3 a 5 años)
// -------------------------------------------------------------
function calculateInfantilTriage(q: ReferralQuestionnaire): TriageResult {
  const lang = q.infantilOralLanguage ?? 3;
  const assembly = q.infantilAttentionAssembly ?? 3;
  const motor = q.infantilPsychomotorFine ?? 3;
  const logic = q.infantilLogicConcepts ?? 3;
  const autonomy = q.infantilPersonalAutonomy ?? 3;
  const social = q.infantilSocialPlay ?? 3;

  let primaryHypothesis: DiagnosticHypothesis = 'RETRASO_MADURATIVO_INFANTIL';
  let riskProfileTitle = 'Perfil de Maduración Global Temprana';
  let confidenceScore = 82;
  let suggestedPriority: TriageResult['suggestedPriority'] = 'MEDIA';
  let evaluationRecommended = true;
  let explanation = '';
  let immediateClassroomTips: string[] = [];

  // 1. Lenguaje Oral / Trastorno del Desarrollo del Lenguaje (TEL/TDL)
  if (lang <= 2) {
    primaryHypothesis = 'TEL_TRASTORNO_LENGUAJE';
    riskProfileTitle = 'Perfil de Riesgo en Comunicación y Lenguaje Oral (Sospecha TEL/TDL)';
    confidenceScore = 93;
    suggestedPriority = 'ALTA';
    explanation = `Indicadores significativos de dificultades expresivas y/o comprensivas (${lang}/5), habla poco inteligible o vocabulario muy reducido para su edad. Se recomienda valoración logopédica y de AL.`;
    immediateClassroomTips = [
      'Apoyar el lenguaje verbal siempre con gestos naturales, modelado correcto y apoyos visuales (pictogramas ARASAAC).',
      'Dar instrucciones directas de 1 solo paso y comprobar que ha comprendido.',
      'No forzarle a repetir palabras correctamente ante los demás; responder modelando la frase de forma natural y positiva.'
    ];
  }
  // 2. Atención en Asamblea, Regulación e Inquietud Temprana
  else if (assembly <= 2 && autonomy <= 2) {
    primaryHypothesis = 'TDAH_HIPERACTIVO_IMPULSIVO';
    riskProfileTitle = 'Perfil de Riesgo Atencional e Inquietud Motriz Temprana (Función Ejecutiva)';
    confidenceScore = 88;
    suggestedPriority = 'ALTA';
    explanation = `Dificultad acusada para permanecer sentado en la asamblea (${assembly}/5), cambios continuos de rincón y baja tolerancia a la espera con impulsividad motriz.`;
    immediateClassroomTips = [
      'Sentarle cerca de la tutora en la asamblea y delimitar su espacio físico con un cojín o cinta en el suelo.',
      'Anticipar visualmente el orden de las actividades del día mediante la tira horaria de pictogramas.',
      'Otorgarle pequeñas responsabilidades motrices en el aula (repartir material, encargado de borrar la pizarra).'
    ];
  }
  // 3. Comunicación Social, Interacción y Juego Simbólico
  else if (social <= 2) {
    primaryHypothesis = 'DIFICULTAD_COMUNICACION_INTERACCION';
    riskProfileTitle = 'Perfil de Dificultad en Interacción Social y Juego Simbólico';
    confidenceScore = 90;
    suggestedPriority = 'ALTA';
    explanation = `Juego solitario repetitivo, escasa interacción espontánea con iguales (${social}/5) o rigidez ante cambios imprevistos en la rutina del aula.`;
    immediateClassroomTips = [
      'Guiar y mediar la interacción en el juego por rincones emparejándole con un compañero facilitador.',
      'Anticipar siempre los cambios de actividad o salidas al patio 2 minutos antes con aviso visual.',
      'Ofrecer un rincón de calma en el aula para autorregulación emocional si se siente sobrecargado/a de estímulos.'
    ];
  }
  // 4. Psicomotricidad Fina y Coordinación
  else if (motor <= 2) {
    primaryHypothesis = 'TRASTORNO_DESARROLLO_PSICOMOTRIZ';
    riskProfileTitle = 'Perfil de Dificultad Psicomotriz y Coordinación Visomotora';
    confidenceScore = 85;
    suggestedPriority = 'MEDIA';
    explanation = `Dificultad relevante en agarre de útiles, pinza digital, trazos, tijeras o destrezas motrices básicas (${motor}/5).`;
    immediateClassroomTips = [
      'Adaptadores de agarre triangular para ceras y lápices gruesos.',
      'Actividades previas de plastilina, rasgado de papel, ensartables y pinzas para tonificación dactilar.',
      'Fichas con pauta ampliada y límites visuales claros.'
    ];
  }
  // 5. Retraso Madurativo General / Observación
  else {
    primaryHypothesis = 'RETRASO_MADURATIVO_INFANTIL';
    riskProfileTitle = 'Indicadores de Ritmo Madurativo de Educación Infantil';
    confidenceScore = 78;
    suggestedPriority = 'MEDIA';
    explanation = `Puntuaciones en rango moderado. Se aprecian desfases evolutivos leves que se aconseja monitorizar mediante pautas estimulativas en el aula.`;
    immediateClassroomTips = [
      'Refuerzo verbal continuo y celebración de pequeños logros.',
      'Seguimiento conjunto con la familia sobre hábitos de autonomía en casa.'
    ];
  }

  // Batería psicométrica especializada para Infantil (3-5 años)
  const recommendedTests: PsychometricTestSuggestion[] = [
    { code: 'WPPSI-IV', name: 'WPPSI-IV (Escala de Inteligencia Wechsler para Preescolar y Primaria)', area: 'Cognitiva Temprana (2:6 a 7:7 años)', description: 'Evalúa comprensión verbal, visoespacial, razonamiento fluido, memoria de trabajo y velocidad.', recommended: true },
    { code: 'PLON-R', name: 'PLON-R (Prueba de Lenguaje Oral Navarra Revisada)', area: 'Lenguaje Oral (3 a 6 años)', description: 'Screening estandarizado de Fonología, Morfología-Sintaxis, Contenido y Uso del lenguaje.', recommended: lang <= 2 },
    { code: 'CELF-Preschool-2', name: 'CELF Preschool-2 (Evaluación Clínica de Fundamentos del Lenguaje)', area: 'Lenguaje Completo', description: 'Diagnóstico profundo de lenguaje receptivo y expresivo en educación infantil.', recommended: lang <= 2 },
    { code: 'MSCA', name: 'MSCA (Escalas McCarthy de Aptitudes y Psicomotricidad)', area: 'Desarrollo Global', description: 'Mide capacidad verbal, perceptivo-manipulativa, cuantitativa, memoria y motricidad general.', recommended: motor <= 2 || logic <= 2 },
    { code: 'BASC-3-Infantil', name: 'BASC-3 Infantil (Sistema de Evaluación de la Conducta)', area: 'Conductual y Adaptativa', description: 'Cuestionario para tutora de infantil sobre adaptación escolar y autorregulación.', recommended: assembly <= 2 || social <= 2 }
  ];

  return {
    evaluationRecommended,
    confidenceScore,
    primaryHypothesis,
    riskProfileTitle,
    secondaryHypotheses: [],
    recommendedTests,
    suggestedPriority,
    explanation,
    immediateClassroomTips
  };
}

// -------------------------------------------------------------
// TRIAJE PARA EDUCACIÓN PRIMARIA (1º a 6º de Primaria)
// -------------------------------------------------------------
function calculatePrimariaTriage(q: ReferralQuestionnaire): TriageResult {
  const attention = q.attentionFocus ?? 3;
  const reading = q.readingComprehension ?? 3;
  const math = q.mathReasoning ?? 3;
  const taskPace = q.taskPaceAndCompletion ?? 3;
  const impulsivity = q.impulsivityAndAutonomy ?? 3;
  const emotional = q.emotionalAndPeerRel ?? 3;

  let primaryHypothesis: DiagnosticHypothesis = 'RETRASO_MADURATIVO_GENERAL';
  let riskProfileTitle = 'Perfil de Riesgo Moderado de Aula';
  let confidenceScore = 80;
  let suggestedPriority: TriageResult['suggestedPriority'] = 'MEDIA';
  let evaluationRecommended = true;
  let explanation = '';
  let immediateClassroomTips: string[] = [];

  // 1. Perfil Atencional / Función Ejecutiva
  if (attention <= 2 && impulsivity <= 2) {
    primaryHypothesis = 'TDAH_HIPERACTIVO_IMPULSIVO';
    riskProfileTitle = 'Perfil de Riesgo Atencional e Impulsividad (Sospecha Función Ejecutiva)';
    confidenceScore = 92;
    suggestedPriority = 'ALTA';
    explanation = `Indicadores claros de desatención ejecutiva (${attention}/5), impulsividad (${impulsivity}/5) y lentitud en la finalización de tareas (${taskPace}/5). Las ayudas ordinarias de aula probadas resultan insuficientes.`;
    immediateClassroomTips = [
      'Ubicación en primera fila de aula cerca de la mesa del docente y lejos de ventanas.',
      'Fraccionar tareas extensas y controles en 2 partes de 20 minutos.',
      'Uso de temporizador visual (Time Timer) en la mesa para autorregulación del tiempo.',
      'Supervisión y confirmación del marcado de deberes en la agenda antes de salir.'
    ];
  } else if (attention <= 2 || taskPace <= 2) {
    primaryHypothesis = 'TDAH_INATENTO';
    riskProfileTitle = 'Perfil de Riesgo Atencional Predominio Inatento';
    confidenceScore = 89;
    suggestedPriority = 'ALTA';
    explanation = `Presencia acusada de lentitud de procesamiento (${taskPace}/5) y dispersión atencional (${attention}/5) con conducta regulada. Se observa fatiga cognitiva en tareas largas.`;
    immediateClassroomTips = [
      'Dar instrucciones directas, breves y mirándole a los ojos (confirmando comprensión).',
      'Asignar un compañero/a tutor de apoyo al lado para orientarle en cambios de actividad.',
      'Otorgar 25% más de tiempo en controles y actividades escritas.'
    ];
  }
  // 2. Perfil Lectoescritor / Dislexia
  else if (reading <= 2) {
    primaryHypothesis = 'DEA_LECTURA_DISLEXIA';
    riskProfileTitle = 'Perfil de Riesgo en Procesos Lectoescritores (Sospecha DEA Lectura)';
    confidenceScore = 94;
    suggestedPriority = 'ALTA';
    explanation = `Discrepancia acusada entre razonamiento general y descodificación lectora (${reading}/5). Se constatan bloqueos, omisiones y fatiga lectora persistente.`;
    immediateClassroomTips = [
      'Evitar la lectura pública individual no preparada previamente para reducir la ansiedad.',
      'Permitir respuesta oral o preguntas leídas por el docente en controles de Ciencias e Historia.',
      'Adaptación tipográfica: Tipografía clara de tamaño 12-14pt con interlineado 1.5.'
    ];
  }
  // 3. Perfil de Altas Capacidades
  else if (math >= 5 && reading >= 4 && attention >= 4) {
    primaryHypothesis = 'ALTAS_CAPACIDADES';
    riskProfileTitle = 'Perfil de Alto Rendimiento y Posible Alta Capacidad Intelectual';
    confidenceScore = 88;
    suggestedPriority = 'MEDIA';
    explanation = `Ritmo de aprendizaje sobresaliente (${taskPace}/5), gran razonamiento lógico-matemático (${math}/5) y rápida asimilación conceptual. Demanda enriquecimiento curricular.`;
    immediateClassroomTips = [
      'Compactación curricular: Eximir de repetir ejercicios mecánicos tras demostrar dominio.',
      'Proporcionar proyectos de investigación autónoma de profundización en asignaturas STEM.',
      'Incluir preguntas opcionales de desarrollo crítico en evaluaciones.'
    ];
  }
  // 4. Perfil Socioemocional
  else if (emotional <= 2) {
    primaryHypothesis = 'DIFICULTAD_SOCIOEMOCIONAL';
    riskProfileTitle = 'Perfil de Riesgo y Vulnerabilidad Socioemocional en Aula';
    confidenceScore = 85;
    suggestedPriority = 'MEDIA';
    explanation = `Baja tolerancia a la frustración, bloqueo o aislamiento con iguales (${emotional}/5). Afecta al rendimiento escolar en situaciones de evaluación.`;
    immediateClassroomTips = [
      'Refuerzo positivo explícito y validación emocional ante situaciones de frustración.',
      'Fomentar dinámicas de aprendizaje cooperativo en grupos pequeños guiados.',
      'Espacio seguro en el aula para descompresión emocional cuando se sienta sobrepasado/a.'
    ];
  }
  // 5. Perfil Madurativo General
  else {
    primaryHypothesis = 'RETRASO_MADURATIVO_GENERAL';
    riskProfileTitle = 'Indicadores Moderados de Aula (Periodo de Observación Focada)';
    confidenceScore = 75;
    suggestedPriority = 'MEDIA';
    explanation = `Puntuaciones en rango medio-bajo. Se recomienda un periodo de observación activa de 3 a 4 semanas aplicando pautas metodológicas antes de formalizar la batería psicométrica.`;
    immediateClassroomTips = [
      'Refuerzo positivo frecuente tras la finalización completa de actividades.',
      'Supervisar la organización del material escolar e impulsar autonomía en el pupitre.'
    ];
  }

  // Batería psicométrica especializada para Primaria (6-12 años)
  const recommendedTests: PsychometricTestSuggestion[] = [
    { code: 'WISC-V', name: 'Escala de Inteligencia de Wechsler para Niños (WISC-V)', area: 'Cognitiva Global (6 a 16:11 años)', description: 'Evalúa CI verbal, visoespacial, razonamiento fluido, memoria de trabajo y velocidad de procesamiento.', recommended: true },
    { code: 'EDAH', name: 'EDAH (Escala de Evaluación del TDAH)', area: 'Función Ejecutiva', description: 'Cuestionario estandarizado para profesorado y familias sobre atención, hiperactividad e impulsividad.', recommended: attention <= 2 || impulsivity <= 2 },
    { code: 'PROLEC-R', name: 'PROLEC-R / PROESC (Baterías de Lectoescritura)', area: 'Lectoescritura', description: 'Evaluación de procesos de descodificación lectora, sintaxis, comprensión y ortografía.', recommended: reading <= 2 },
    { code: 'BADyG', name: 'BADyG (Batería de Aptitudes Diferenciales)', area: 'Altas Capacidades / Aptitudes', description: 'Prueba de aptitud verbal, numérica y razonamiento lógico espacial.', recommended: math >= 4 },
    { code: 'd2', name: 'Prueba de Atención Sostenida d2', area: 'Atención Visual', description: 'Mide la atención selectiva, velocidad de procesamiento y control de la impulsividad.', recommended: attention <= 2 },
    { code: 'SENA', name: 'Sistema de Evaluación de Niños y Adolescentes (SENA)', area: 'Socioemocional', description: 'Evalúa problemas emocionales, de conducta y adaptación escolar y familiar.', recommended: emotional <= 2 }
  ];

  return {
    evaluationRecommended,
    confidenceScore,
    primaryHypothesis,
    riskProfileTitle,
    secondaryHypotheses: [],
    recommendedTests,
    suggestedPriority,
    explanation,
    immediateClassroomTips
  };
}
