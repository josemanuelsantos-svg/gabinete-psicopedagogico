import { ReferralCase, GeneratedMedicalReport, MedicalReferralObservations } from '../types';

export function generateMedicalReportDraft(
  referralCase: ReferralCase, 
  counselorName: string,
  counselorEmail: string = 'orientacion@sanbuenaventura.es'
): GeneratedMedicalReport {
  const q = referralCase.questionnaire || ({} as any);
  const obs = referralCase.medicalObservations;
  const isInfantil = referralCase.stage === 'INFANTIL';
  const student = referralCase.studentName || 'el/la alumno/a';
  const grade = referralCase.grade || 'Educación Primaria';
  const teacher = referralCase.teacherName || 'Tutor/a del Centro';
  const todayFormatted = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });

  // 1. Destinatario
  let targetTitle = 'Servicio de Neuropediatría / Pediatría Especializada';
  if (obs?.specialistTarget === 'PEDIATRA') {
    targetTitle = 'Servicio de Pediatría de Atención Primaria';
  } else if (obs?.specialistTarget === 'SALUD_MENTAL_USMIJ') {
    targetTitle = 'Unidad de Salud Mental Infantil y Juvenil (USMIJ)';
  } else if (obs?.specialistTarget === 'OTRO_ESPECIALISTA' && obs?.customSpecialistName) {
    targetTitle = obs.customSpecialistName;
  }

  // 2. Identificación formal
  const studentIdentification = `INFORME ESCOLAR DE DERIVACIÓN Y COORDINACIÓN SANITARIA
Destinatario: ${targetTitle}
Centro Emisor: Colegio San Buenaventura (Madrid) • Código de Centro: 28009033
Departamento de Orientación Psicopedagógica y Claustro Docente
Alumno/a: ${student}
Curso y Etapa: ${grade} (${isInfantil ? 'Educación Infantil' : 'Educación Primaria'})
Tutor/a responsable de la observación: ${teacher}
Orientador/a Psicopedagógico/a: ${counselorName}
Fecha de emisión: ${todayFormatted}`;

  // 3. Motivo clínico de derivación
  const consultationReasonRaw = obs?.consultationReason || q.mainReason || 'Coordinación con especialista médico para valoración diagnóstica integral';
  const clinicalReasonNarrative = `A petición de la familia y en estrecha colaboración con la tutoría y el Departamento de Orientación del Colegio San Buenaventura, se remite el presente informe de observación escolar para facilitar la valoración clínica especializada de ${student}.

Motivo principal comunicado por el centro: "${consultationReasonRaw}".

El equipo docente ha constatado en el entorno estructurado del aula manifestaciones comportamentales y de aprendizaje que sugieren la conveniencia de una exploración médica y neurocognitiva (Neuropediatría / Pediatría / Salud Mental). Nuestro propósito es aportar datos objetivos, sistemáticos y longitudinales recabados en la interacción diaria escolar, a fin de establecer un diagnóstico preciso y coordinar las medidas terapéuticas y de apoyo educativo pertinentes.`;

  // 4. Rendimiento curricular y cognición
  const academicRaw = obs?.academicPerformance || (q.affectedSubjects && q.affectedSubjects.length > 0 ? `Dificultades focalizadas en: ${q.affectedSubjects.join(', ')}` : '');
  const academicAndCognitiveNarrative = `En lo concerniente al aprendizaje y competencia curricular, ${student} se encuentra actualmente escolarizado/a en ${grade}. 

${academicRaw ? `Observación específica docente: "${academicRaw}".` : ''}
${q.readingDescriptor ? `En lectura y procesamiento textual: ${q.readingDescriptor}.` : ''}
${q.mathDescriptor ? `En razonamiento lógico-matemático: ${q.mathDescriptor}.` : ''}

A nivel general de aula, se aprecia una discrepancia entre la capacidad intelectual aparente del alumno/a y su rendimiento efectivo en las tareas cotidianas. Muestra un ritmo de asimilación irregular, necesitando con frecuencia un desglosamiento pormenorizado de los contenidos y supervisión individualizada para afianzar conceptos abstractos y automatizar aprendizajes instrumentales.`;

  // 5. Perfil atencional y funciones ejecutivas
  const attentionRaw = obs?.attentionAndFocus || '';
  const taskPaceRaw = obs?.taskCompletionAndPace || '';
  const attentionAndExecutiveNarrative = `En relación con la atención sostenida, focalizada y las funciones ejecutivas, se detectan dificultades notorias en el contexto del aula:

${attentionRaw ? `• Nivel atencional y concentración: "${attentionRaw}".` : ''}
${taskPaceRaw ? `• Ritmo de ejecución y finalización de tareas: "${taskPaceRaw}".` : ''}
${q.attentionDescriptor ? `• Indicador de aula registrado: ${q.attentionDescriptor}.` : ''}
${q.taskPaceDescriptor ? `• Indicador de ritmo de trabajo: ${q.taskPaceDescriptor}.` : ''}

El alumno/a presenta una marcada fatigabilidad cognitiva a medida que avanza la jornada lectiva. Se dispersa con facilidad ante estímulos ambientales irrelevantes y experimenta serias dificultades para iniciar las tareas de forma autónoma, sostener el esfuerzo mental continuo y finalizar las actividades en el tiempo asignado al grupo clase. Es frecuente el olvido de materiales y la necesidad constante de reorientación externa verbal por parte del profesorado.`;

  // 6. Actividad motora, inquietud e impulsividad
  const motorRaw = obs?.motorRestlessness || '';
  const impulsivityRaw = obs?.impulsivityControl || '';
  const motorAndRestlessnessNarrative = `En el ámbito de la autorregulación motora y el control inhibitorio:

${motorRaw ? `• Inquietud psicomotriz observada: "${motorRaw}".` : ''}
${impulsivityRaw ? `• Control de impulsos e inhibición: "${impulsivityRaw}".` : ''}
${q.impulsivityDescriptor ? `• Indicador docente: ${q.impulsivityDescriptor}.` : ''}

En el aula se manifiesta inquietud persistente, con cambios posturales continuos en la silla, manipulación desorganizada de objetos y tendencia a levantarse del asiento en situaciones no regladas. A nivel conductual, se registra una marcada impulsividad cognitiva y verbal: suele precipitar sus respuestas antes de escuchar la formulación completa de la pregunta, muestra dificultad para aguardar su turno de palabra e interrumpe con frecuencia la dinámica grupal sin calibrar las consecuencias inmediatas de su conducta.`;

  // 7. Lenguaje, comunicación y psicomotricidad
  const langRaw = obs?.languageAndCommunication || '';
  const fineMotorRaw = obs?.fineMotorAndWriting || '';
  const grossMotorRaw = obs?.grossMotorCoordination || '';
  const languageAndCommunicationNarrative = `En el área de la comunicación, expresión verbal y desarrollo grafomotor:

${langRaw ? `• Comunicación y comprensión lingüística: "${langRaw}".` : ''}
${fineMotorRaw ? `• Coordinación visomotora y grafomotricidad: "${fineMotorRaw}".` : ''}
${grossMotorRaw ? `• Motricidad gruesa y equilibrio: "${grossMotorRaw}".` : ''}
${q.infantilOralLanguageDesc ? `• Lenguaje en Educación Infantil: ${q.infantilOralLanguageDesc}.` : ''}
${q.infantilPsychomotorFineDesc ? `• Motricidad en Infantil: ${q.infantilPsychomotorFineDesc}.` : ''}

A nivel expresivo, aunque mantiene una intención comunicativa activa, se constata dificultad para estructurar relatos de forma ordenada y comprender órdenes secuenciadas de más de dos consignas. En la dimensión grafomotora, el trazo gráfico refleja tensión o debilidad en el agarre del útil de escritura, presión inadecuada y fatiga temprana al afrontar producciones escritas extensas.`;

  // 8. Dimensión socioemocional y relaciones con iguales
  const emotionalRaw = obs?.emotionalRegulation || '';
  const peerRaw = obs?.peerRelationships || '';
  const socioEmotionalNarrative = `En cuanto al desarrollo socioemocional y la convivencia con sus iguales:

${emotionalRaw ? `• Regulación emocional y tolerancia a la frustración: "${emotionalRaw}".` : ''}
${peerRaw ? `• Relaciones sociales y dinámicas en el patio: "${peerRaw}".` : ''}
${q.emotionalDescriptor ? `• Indicador socioemocional registrado: ${q.emotionalDescriptor}.` : ''}

Se evidencia una baja tolerancia a la frustración ante las correcciones docentes o cuando no logra el resultado esperado de forma inmediata, reaccionando ocasionalmente con bloqueos, retraimiento o conductas de oposición reactiva. En los momentos no estructurados (recreos, patios, filas), muestra interés por relacionarse pero le cuesta respetar las normas sociales de juego reglado y calibrar la intensidad de sus intervenciones, lo que puede originar roces esporádicos con compañeros.`;

  // 9. Medidas pedagógicas ordinarias ensayadas y respuesta
  const measuresRaw = obs?.measuresAppliedAndResults || q.measuresObservations || '';
  const appliedList = q.appliedMeasuresList && q.appliedMeasuresList.length > 0 ? q.appliedMeasuresList.join(', ') : 'Adaptaciones metodológicas organizativas de aula';
  const measuresAndEvolutionNarrative = `El centro escolar ha implementado las siguientes medidas de atención ordinaria a la diversidad durante un periodo continuado (${q.measuresDuration || 'más de dos meses'}):

1. Medidas adoptadas: ${appliedList}.
2. Ubicación estratégica en el aula (primeras filas, alejado de distractores y cerca del docente tutor).
3. Fragmentación y secuenciación de tareas complejas en pasos individuales comprobables.
4. Concesión de tiempo adicional en pruebas escritas y supervisión personal de la agenda escolar.
5. Empleo de refuerzo contingente inmediato y claves visuales para focalizar la atención.

Evolución y respuesta pedagógica: "${measuresRaw || 'Las adaptaciones de aula han supuesto un alivio parcial, pero las dificultades atencionales, ejecutivas y de autorregulación persisten de forma significativa, condicionando su progreso escolar y su bienestar socioafectivo.'}"`;

  // 10. Conclusiones y recomendaciones para el especialista médico
  const counselorSynthesisAndRecommendations = `VALORACIÓN SINTÉTICA Y SOLICITUD A ${targetTitle.toUpperCase()}:

A la luz de los datos observados de manera continuada en el contexto escolar, se constata un perfil compatible con dificultades nucleares en las áreas de atención sostenida, autorregulación inhibitoria y funciones ejecutivas, con repercusión directa en su rendimiento académico e integración socioeducativa.

Desde este Departamento de Orientación y el Claustro de Profesores del Colegio San Buenaventura, solicitamos respetuosamente:
1. Una valoración clínica neurológica / pediátrica completa que descarte o confirme hipótesis diagnósticas de base neurobiológica (sospecha de TDAH / Dificultades Específicas / Trastornos del Neurodesarrollo).
2. La determinación de pautas terapéuticas o farmacológicas si el facultativo lo estima pertinente.
3. El retorno de recomendaciones y orientaciones médicas que nos permitan coordinar y ajustar el Plan de Apoyo Educativo del alumno/a en el centro.

Quedamos a su entera disposición para cualquier aclaración o intercambio técnico colegiado.`;

  return {
    id: `MED-REP-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    generatedByCounselorName: counselorName,
    counselorEmail: counselorEmail,
    targetSpecialistTitle: targetTitle,
    studentIdentification,
    clinicalReasonNarrative,
    academicAndCognitiveNarrative,
    attentionAndExecutiveNarrative,
    motorAndRestlessnessNarrative,
    languageAndCommunicationNarrative,
    socioEmotionalNarrative,
    measuresAndEvolutionNarrative,
    counselorSynthesisAndRecommendations,
    isFinalized: false,
    signatureDate: todayFormatted
  };
}
