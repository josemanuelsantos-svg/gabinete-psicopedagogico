import {
  ReferralCase,
  GeneratedMedicalReport,
  InfantilDevelopedReport,
  PrimariaDevelopedReport,
  InfantilMeasureRow
} from '../types';

function ensureSentence(text: string): string {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (!cleaned) return '';
  const capitalized = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  return /[.!?…]$/.test(capitalized) ? capitalized : `${capitalized}.`;
}

/**
 * Desarrolla una nota breve del tutor en un párrafo pedagógico-observacional bien redactado
 * sin añadir diagnósticos clínicos. Si el tutor ya redactó un texto extenso (>= 170 caracteres),
 * respeta su redacción íntegra limpiando formato.
 */
function developObservation(
  rawInput: string | undefined,
  leadIn: string,
  fallbackIfEmpty: string,
  extraContext?: string
): string {
  const cleaned = (rawInput || '').trim();
  const extra = (extraContext || '').trim();

  if (!cleaned && !extra) {
    return fallbackIfEmpty;
  }

  if (cleaned.length >= 170) {
    const base = ensureSentence(cleaned);
    return extra && !cleaned.toLowerCase().includes(extra.toLowerCase().slice(0, 20))
      ? `${base} Asimismo, en la observación previa de aula se recogió: ${ensureSentence(extra)}`
      : base;
  }

  if (cleaned) {
    const lowerFirst = cleaned.charAt(0).toLowerCase() + cleaned.slice(1);
    const body = `${leadIn} ${ensureSentence(lowerFirst)}`;
    if (extra && !cleaned.toLowerCase().includes(extra.toLowerCase().slice(0, 20))) {
      return `${body} De forma complementaria, en el seguimiento ordinario del aula se señala que ${extra.charAt(0).toLowerCase() + ensureSentence(extra).slice(1)}`;
    }
    return body;
  }

  return `${leadIn} ${ensureSentence(extra.charAt(0).toLowerCase() + extra.slice(1))}`;
}

export function generateMedicalReportDraft(
  referralCase: ReferralCase,
  counselorName: string = 'Mª Belén Hernando Martín',
  counselorEmail: string = 'orientacionep@sanbuenaventura.org'
): GeneratedMedicalReport {
  const q = referralCase.questionnaire || ({} as any);
  const obs = referralCase.medicalObservations;
  const reportFormat: 'INFANTIL' | 'PRIMARIA' =
    obs?.stageFormat || (referralCase.stage === 'INFANTIL' ? 'INFANTIL' : 'PRIMARIA');
  const isInfantil = reportFormat === 'INFANTIL';

  const student = referralCase.studentName || 'el/la alumno/a';
  const grade = referralCase.grade || (isInfantil ? 'Educación Infantil' : 'Educación Primaria');
  const teacher = obs?.filledByTeacherName || referralCase.teacherName || 'Tutor/a del Centro';
  const effectiveCounselorName =
    counselorName && counselorName !== 'Equipo de Orientación'
      ? counselorName
      : 'Mª Belén Hernando Martín';
  const effectiveCounselorEmail =
    counselorEmail && counselorEmail !== 'orientacion@sanbuenaventura.es'
      ? counselorEmail
      : 'orientacionep@sanbuenaventura.org';

  const todayFormatted = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  // Destinatario
  let targetTitle = 'Servicio de Pediatría / Neuropediatría';
  if (obs?.specialistTarget === 'PEDIATRA') {
    targetTitle = 'Servicio de Pediatría de Atención Primaria';
  } else if (obs?.specialistTarget === 'NEUROPEDIATRA') {
    targetTitle = 'Servicio de Neuropediatría';
  } else if (obs?.specialistTarget === 'SALUD_MENTAL_USMIJ') {
    targetTitle = 'Unidad de Salud Mental Infantil y Juvenil (USMIJ)';
  } else if (obs?.specialistTarget === 'OTRO_ESPECIALISTA' && obs?.customSpecialistName) {
    targetTitle = obs.customSpecialistName;
  }

  const birthDate = obs?.birthDate || '';
  const studentAgeText =
    obs?.studentAgeText || (q.studentAge ? `${q.studentAge} años` : '');

  // =========================================================================
  // DESARROLLO ESPECÍFICO: EDUCACIÓN INFANTIL (Apartados 01-08)
  // =========================================================================
  const defaultMeasuresTable: InfantilMeasureRow[] =
    obs?.infantilMeasuresTable && obs.infantilMeasuresTable.some(r => r.measure.trim() || r.period.trim() || r.result.trim())
      ? obs.infantilMeasuresTable.filter(r => r.measure.trim() || r.period.trim() || r.result.trim())
      : [
          {
            measure:
              q.appliedMeasuresList && q.appliedMeasuresList.length > 0
                ? q.appliedMeasuresList.join(', ')
                : 'Acompañamiento individualizado, anticipación visual de rutinas y consignas breves en aula.',
            period: q.measuresDuration
              ? q.measuresDuration.replace(/_/g, ' ').toLowerCase()
              : 'Curso escolar actual',
            result:
              obs?.measuresAppliedAndResults ||
              q.measuresObservations ||
              'Respuesta positiva parcial con apoyo directo del adulto; persisten las dificultades cuando requiere mayor autonomía.'
          }
        ];

  const infantilData: InfantilDevelopedReport = {
    difficultyExamples: developObservation(
      obs?.infantilDifficultyExamples || obs?.consultationReason || q.mainReason,
      `En la observación sistemática realizada en el entorno de Educación Infantil con ${student} (${grade}), se recogen las siguientes conductas y situaciones concretas que motivan la coordinación médica:`,
      `A petición de la familia y desde el seguimiento diario en Educación Infantil, se traslada la observación escolar de ${student} para apoyar la valoración pediátrica.`
    ),
    sinceWhen: ensureSentence(
      obs?.infantilSinceWhen ||
        (q.measuresDuration === 'MAS_2_MESES'
          ? 'Desde hace más de dos meses, de manera continuada a lo largo del trimestre.'
          : 'Desde el inicio del periodo de observación en el curso escolar actual.')
    ),
    situations: ensureSentence(
      obs?.infantilSituations ||
        'Principalmente durante la asamblea, las transiciones entre rutinas, las actividades dirigidas de mesa y los momentos de juego en grupo.'
    ),
    frequencyIntensity: ensureSentence(
      obs?.infantilFrequencyIntensity ||
        'Con frecuencia diaria y repercusión apreciable en el seguimiento autónomo de las dinámicas habituales del aula.'
    ),
    contextsText: ensureSentence(
      obs?.infantilContextsText ||
        (obs?.infantilContexts && obs.infantilContexts.length > 0
          ? `Se observan de manera consistente en: ${obs.infantilContexts.join(', ')}.`
          : 'Principalmente en el contexto estructurado del aula y en momentos de interacción grupal.')
    ),
    contextsSelected:
      obs?.infantilContexts && obs.infantilContexts.length > 0 ? obs.infantilContexts : ['Aula'],
    contextsOther: obs?.infantilContextsOther || '',
    recentChanges: ensureSentence(
      obs?.infantilRecentChanges ||
        'No se han registrado cambios bruscos recientes respecto a su funcionamiento habitual en el centro.'
    ),

    // 03 · Áreas de desarrollo
    language: developObservation(
      obs?.infantilLanguage || obs?.languageAndCommunication,
      `En el área de lenguaje y comunicación, se observa en ${student} que`,
      `En la comunicación cotidiana del aula, ${student} mantiene intención comunicativa con adultos e iguales, requiriendo apoyo puntual para estructurar mensajes complejos y comprender consignas encadenadas.`,
      q.infantilOralLanguageDesc
    ),
    motor: developObservation(
      obs?.infantilMotor || [obs?.grossMotorCoordination, obs?.fineMotorAndWriting].filter(Boolean).join(' '),
      `En relación con el desarrollo motor (motricidad gruesa y fina), se aprecia que`,
      `A nivel motor, participa en los desplazamientos y juegos de patio propios de su edad, observándose en las tareas de grafomotricidad y manipulación fina necesidad de modelado y práctica guiada.`,
      q.infantilPsychomotorFineDesc
    ),
    cognitive: developObservation(
      obs?.infantilCognitive || obs?.attentionAndFocus,
      `Respecto a las habilidades cognitivas y de aprendizaje (atención, memoria, resolución de tareas y respuesta a nuevas propuestas), se observa que`,
      `En las propuestas cognitivas y de atención en asamblea o mesa, ${student} responde mejor cuando las consignas son breves, manipulativas y cuentan con supervisión cercana de la tutora.`,
      q.infantilLogicConceptsDesc || q.infantilAttentionAssemblyDesc
    ),
    autonomy: developObservation(
      obs?.infantilAutonomy,
      `En cuanto a la autonomía personal y el seguimiento de hábitos y rutinas diarias, se constata que`,
      `En las rutinas de higiene, alimentación, vestido y organización de pertenencias, avanza progresivamente con recordatorios verbales y referencias visuales del aula.`,
      q.infantilPersonalAutonomyDesc
    ),
    socioEmotional: developObservation(
      obs?.infantilSocioEmotional || [obs?.emotionalRegulation, obs?.peerRelationships].filter(Boolean).join(' '),
      `En el ámbito socioemocional, relación con iguales y regulación ante la frustración o los cambios, se aprecia que`,
      `En la convivencia diaria muestra vínculo afectivo con los adultos de referencia; en situaciones de frustración o cambios de rutina precisa acompañamiento tranquilo para regular su respuesta emocional.`,
      q.infantilSocialPlayDesc
    ),

    // 04 · Juego, intereses y estilo de aprendizaje
    play: developObservation(
      obs?.infantilPlay || obs?.peerRelationships,
      `Durante los tiempos de juego libre y dirigido en el aula y en el patio, se observa que`,
      `Muestra interés por los materiales del aula y participa en dinámicas de juego, beneficiándose de la mediación del adulto para sostener turnos e interacciones compartidas.`
    ),
    creativity: developObservation(
      obs?.infantilCreativity,
      `En cuanto a sus preferencias, intereses y formas de expresión creativa, destaca que`,
      `Se motiva especialmente ante propuestas manipulativas, visuales y lúdicas acordes a sus centros de interés.`
    ),
    learningStyle: developObservation(
      obs?.infantilLearningStyle || obs?.taskCompletionAndPace,
      `En su forma de aprender y abordar las tareas escolares, se ha comprobado que`,
      `Responde favorablemente al modelado directo, los apoyos visuales, la anticipación de la actividad y el refuerzo positivo inmediato, precisando supervisión para mantener el ritmo hasta finalizar.`
    ),
    sensoryRepetitive: obs?.infantilSensoryRepetitive || 'NO_CONSTA',
    sensoryDetails: obs?.infantilSensoryDetails
      ? developObservation(
          obs.infantilSensoryDetails,
          'Respecto a las respuestas sensoriales o conductas repetitivas observadas en el centro, se detalla que',
          ''
        )
      : '',

    // 05 · Competencia curricular y participación
    curricularProgress: developObservation(
      obs?.infantilCurricularProgress || obs?.academicPerformance,
      `En relación con el progreso respecto a los objetivos propios de ${grade}, se constata que`,
      `Evoluciona de manera progresiva en las áreas de Educación Infantil, necesitando mayor tiempo de consolidación y acompañamiento individualizado en las propuestas que exigen atención sostenida y lenguaje estructurado.`
    ),
    attendanceParticipation: developObservation(
      obs?.infantilAttendanceParticipation,
      `Respecto a la asistencia, adaptación y participación en las rutinas escolares, se señala que`,
      `Mantiene una asistencia regular y se muestra más disponible en actividades estructuradas de corta duración y en pequeño grupo.`
    ),

    // 06 · Medidas y apoyos
    measuresTable: defaultMeasuresTable,
    externalSupports: ensureSentence(
      obs?.infantilExternalSupports ||
        (q.externalAssessmentDone && q.externalAssessmentDetails
          ? q.externalAssessmentDetails
          : 'No constan apoyos externos comunicados por la familia hasta la fecha.')
    ),

    // 07 · Síntesis del tutor/a
    strengths: developObservation(
      obs?.infantilStrengths,
      `Entre las principales fortalezas y recursos personales de ${student} destacan`,
      `Responde con cercanía al vínculo afectivo con sus referentes escolares, muestra curiosidad en actividades manipulativas y mejora notablemente su desempeño en entornos tranquilos con apoyo individualizado.`
    ),
    additionalInfo: developObservation(
      obs?.infantilAdditionalInfo,
      `Como información adicional de interés para la consulta médica, se traslada que`,
      `El equipo docente y el Departamento de Orientación quedan a plena disposición del especialista médico para facilitar el seguimiento coordinado tras la valoración.`
    )
  };

  // =========================================================================
  // DESARROLLO ESPECÍFICO: EDUCACIÓN PRIMARIA (Apartados 01-04 · 11 Ámbitos)
  // =========================================================================
  const primariaData: PrimariaDevelopedReport = {
    // 02 · Contexto escolar y apoyos
    groupSupport: ensureSentence(
      obs?.primariaGroupSupport ||
        'No recibe actualmente apoyo en grupo reducido de Lengua y Matemáticas (seguimiento ordinario en aula).'
    ),
    ptSupport: ensureSentence(
      obs?.primariaPtSupport ||
        (referralCase.actionPlan?.ptHoursPerWeek
          ? `Sí, recibe ${referralCase.actionPlan.ptHoursPerWeek} sesiones semanales con especialista en Pedagogía Terapéutica.`
          : 'No recibe actualmente sesiones de Pedagogía Terapéutica.')
    ),
    evalMeasures: ensureSentence(
      obs?.primariaEvalMeasures ||
        (q.appliedMeasuresList && q.appliedMeasuresList.length > 0
          ? q.appliedMeasuresList.join(', ')
          : 'Ubicación preferente en el aula, supervisión de consignas y fraccionamiento de tareas.')
    ),

    // 03 · 11 Ámbitos de desarrollo y funcionamiento en el aula
    workPace: developObservation(
      obs?.primariaWorkPace || obs?.taskCompletionAndPace,
      `En el desarrollo de las actividades diarias del aula, ${student} presenta un ritmo de trabajo en el que`,
      `Muestra un ritmo de ejecución variable en las tareas de aula, precisando recordatorios y estructuración en pasos cortos para completar las actividades dentro del tiempo previsto.`,
      q.taskPaceDescriptor
    ),
    effortCapacity: developObservation(
      obs?.primariaEffortCapacity,
      `En relación con la capacidad de esfuerzo y la constancia ante las tareas escolares, se observa que`,
      `Presenta disposición inicial cuando comprende la propuesta, aunque le cuesta sostener el esfuerzo continuado ante actividades extensas o de mayor exigencia cognitiva.`
    ),
    oralComprehension: developObservation(
      obs?.primariaOralComprehension || obs?.languageAndCommunication,
      `Respecto a la comprensión oral de explicaciones e instrucciones en el aula, se aprecia que`,
      `Comprende indicaciones directas y sencillas, beneficiándose de la repetición pausada y de verificar la comprensión cuando se plantean varias consignas seguidas.`,
      q.readingDescriptor
    ),
    oralCommunication: developObservation(
      obs?.primariaOralCommunication || obs?.languageAndCommunication,
      `En el ámbito de la comunicación y expresión oral con profesorado y compañeros, se constata que`,
      `Mantiene intención comunicativa adecuada en la interacción cotidiana; en exposiciones o explicaciones estructuradas requiere apoyo para organizar secuencialmente sus ideas.`
    ),
    attention: developObservation(
      obs?.primariaAttention || obs?.attentionAndFocus,
      `En cuanto a la atención sostenida y focalizada durante las sesiones lectivas, se observa que`,
      `Presenta dispersión frecuente ante estímulos ambientales del aula y necesita llamadas de atención externas para mantenerse centrado/a en la tarea principal.`,
      q.attentionDescriptor
    ),
    logicalReasoning: developObservation(
      obs?.primariaLogicalReasoning || obs?.academicPerformance,
      `Respecto al razonamiento lógico y la resolución de problemas escolares, se evidencia que`,
      `Resuelve con mayor seguridad tareas mecánicas o guiadas, mostrando mayores dificultades en problemas que exigen planificación de varios pasos, abstracción o inferencia lógica.`,
      q.mathDescriptor
    ),
    memory: developObservation(
      obs?.primariaMemory,
      `En relación con la memoria de trabajo y la retención de aprendizajes trabajados en clase, se aprecia que`,
      `Necesita repaso frecuente y apoyos visuales para retener información secuenciada, consignas múltiples y contenidos recientemente trabajados.`
    ),
    frustrationTolerance: developObservation(
      obs?.primariaFrustrationTolerance || obs?.emotionalRegulation,
      `En lo referente a la tolerancia a la frustración ante el error, la corrección o la dificultad, se observa que`,
      `Ante el error o las tareas percibidas como difíciles muestra signos de inseguridad o bloqueo, respondiendo positivamente al refuerzo calmado y al acompañamiento del adulto.`,
      q.emotionalDescriptor
    ),
    spatialOrientation: developObservation(
      obs?.primariaSpatialOrientation || obs?.fineMotorAndWriting,
      `Respecto a la orientación espacial, la organización en el papel y el manejo del espacio en el aula, se señala que`,
      `En la presentación de cuadernos, distribución de escritos en la hoja y organización de materiales se beneficia de pautas visuales claras y supervisión periódica.`
    ),
    classSocialization: developObservation(
      obs?.primariaClassSocialization || obs?.peerRelationships,
      `En el plano de la socialización y convivencia con el grupo clase, se observa que`,
      `Muestra interés por relacionarse con sus compañeros en el aula y el recreo, beneficiándose ocasionalmente de mediación docente para regular turnos y normas en el juego compartido.`
    ),
    autonomy: developObservation(
      obs?.primariaAutonomy || obs?.impulsivityControl,
      `En cuanto a la autonomía personal y escolar (inicio de tareas, agenda, organización de materiales y seguimiento de rutinas), se constata que`,
      `Requiere supervisión externa frecuente para iniciar las actividades, gestionar su agenda escolar y organizar el material necesario en cada asignatura.`,
      q.impulsivityDescriptor
    ),

    // 04 · Cierre
    closingNote:
      'Quedamos a disposición del especialista que reciba este informe para coordinar tras la valoración médica del/de la alumno/a y para colaborar en aquello que se estime necesario.'
  };

  // Identificación y campos clásicos (retrocompatibilidad)
  const studentIdentification = [
    isInfantil
      ? 'RECOGIDA DE INFORMACIÓN DEL TUTOR/A · EDUCACIÓN INFANTIL'
      : 'INFORME DE DERIVACIÓN MÉDICA · EDUCACIÓN PRIMARIA',
    `Centro Emisor: Colegio San Buenaventura (Madrid)`,
    `Alumno/a: ${student}`,
    `Curso y Etapa: ${grade}`,
    `Tutor/a: ${teacher}`,
    `Orientadora: ${effectiveCounselorName}`,
    `Fecha: ${todayFormatted}`
  ].join('\n');

  return {
    id: `MED-REP-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    generatedByCounselorName: effectiveCounselorName,
    counselorEmail: effectiveCounselorEmail,
    targetSpecialistTitle: targetTitle,
    reportFormat,
    birthDate,
    studentAgeText,
    tutorName: teacher,
    infantilData,
    primariaData,
    // Campos clásicos de respaldo
    studentIdentification,
    clinicalReasonNarrative: isInfantil
      ? infantilData.difficultyExamples
      : obs?.consultationReason || q.mainReason || '',
    academicAndCognitiveNarrative: isInfantil
      ? infantilData.curricularProgress
      : primariaData.logicalReasoning,
    attentionAndExecutiveNarrative: isInfantil
      ? infantilData.cognitive
      : primariaData.attention,
    motorAndRestlessnessNarrative: isInfantil
      ? infantilData.motor
      : primariaData.spatialOrientation,
    languageAndCommunicationNarrative: isInfantil
      ? infantilData.language
      : `${primariaData.oralComprehension}\n\n${primariaData.oralCommunication}`,
    socioEmotionalNarrative: isInfantil
      ? infantilData.socioEmotional
      : `${primariaData.frustrationTolerance}\n\n${primariaData.classSocialization}`,
    measuresAndEvolutionNarrative: isInfantil
      ? infantilData.externalSupports
      : `${primariaData.groupSupport}\n${primariaData.ptSupport}\n${primariaData.evalMeasures}`,
    counselorSynthesisAndRecommendations: isInfantil
      ? infantilData.additionalInfo
      : primariaData.closingNote,
    isFinalized: false,
    signatureDate: todayFormatted
  };
}
