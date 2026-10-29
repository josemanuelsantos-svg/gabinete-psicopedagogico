import { ReferralCase, GeneratedMedicalReport } from '../types';

export function generateMedicalReportDraft(
  referralCase: ReferralCase, 
  counselorName: string = 'Mª Belén Hernando Martín',
  counselorEmail: string = 'orientacionep@sanbuenaventura.org'
): GeneratedMedicalReport {
  const q = referralCase.questionnaire || ({} as any);
  const obs = referralCase.medicalObservations;
  const isInfantil = referralCase.stage === 'INFANTIL';
  const student = referralCase.studentName || 'el/la alumno/a';
  const grade = referralCase.grade || 'Educación Primaria';
  const teacher = referralCase.teacherName || 'Tutor/a del Centro';
  const effectiveCounselorName = counselorName && counselorName !== 'Equipo de Orientación' 
    ? counselorName 
    : 'Mª Belén Hernando Martín';
  const effectiveCounselorEmail = counselorEmail && counselorEmail !== 'orientacion@sanbuenaventura.es'
    ? counselorEmail
    : 'orientacionep@sanbuenaventura.org';
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
  const studentIdentification = [
    `INFORME ESCOLAR DE DERIVACIÓN Y COORDINACIÓN SANITARIA`,
    `Destinatario: ${targetTitle}`,
    `Centro Emisor: Colegio San Buenaventura (Madrid) • Código de Centro: 28009033`,
    `Departamento de Orientación Psicopedagógica y Claustro Docente`,
    `Alumno/a: ${student}`,
    `Curso y Etapa: ${grade} (${isInfantil ? 'Educación Infantil' : 'Educación Primaria'})`,
    `Tutor/a responsable de la observación: ${teacher}`,
    `Orientador/a Psicopedagógico/a: ${effectiveCounselorName}`,
    `Fecha de emisión: ${todayFormatted}`
  ].join('\n');

  // 3. Motivo clínico de derivación
  const consultationReasonRaw = obs?.consultationReason || q.mainReason || 'Coordinación con especialista médico para valoración diagnóstica integral';
  const clinicalReasonNarrative = [
    `A petición de la familia y en estrecha colaboración con la tutoría y el Departamento de Orientación del Colegio San Buenaventura, se remite el presente informe de observación escolar para facilitar la valoración clínica especializada de ${student}.`,
    `Motivo principal comunicado por el centro: "${consultationReasonRaw}".`,
    `El equipo docente ha constatado en el entorno estructurado del aula manifestaciones comportamentales y de aprendizaje que sugieren la conveniencia de una exploración médica y neurocognitiva (Neuropediatría / Pediatría / Salud Mental). Nuestro propósito es aportar datos objetivos, sistemáticos y longitudinales recabados en la interacción diaria escolar, a fin de establecer un diagnóstico preciso y coordinar las medidas terapéuticas y de apoyo educativo pertinentes.`
  ].join('\n\n');

  // 4. Rendimiento curricular y cognición
  const academicRaw = obs?.academicPerformance || (q.affectedSubjects && q.affectedSubjects.length > 0 ? `Dificultades focalizadas en: ${q.affectedSubjects.join(', ')}` : '');
  const academicBullets = [
    academicRaw ? `• Observación específica docente: "${academicRaw}".` : null,
    q.readingDescriptor ? `• Lectura y procesamiento textual: ${q.readingDescriptor}.` : null,
    q.mathDescriptor ? `• Razonamiento lógico-matemático: ${q.mathDescriptor}.` : null
  ].filter(Boolean).join('\n');

  const academicAndCognitiveNarrative = [
    `En lo concerniente al aprendizaje y competencia curricular, ${student} se encuentra actualmente escolarizado/a en ${grade}.`,
    academicBullets || null,
    `A nivel general de aula, se aprecia una discrepancia entre la capacidad intelectual aparente del alumno/a y su rendimiento efectivo en las tareas cotidianas. Muestra un ritmo de asimilación irregular, necesitando con frecuencia un desglosamiento pormenorizado de los contenidos y supervisión individualizada para afianzar conceptos abstractos y automatizar aprendizajes instrumentales.`
  ].filter(Boolean).join('\n\n');

  // 5. Perfil atencional y funciones ejecutivas
  const attentionRaw = obs?.attentionAndFocus || '';
  const taskPaceRaw = obs?.taskCompletionAndPace || '';
  const attentionBullets = [
    attentionRaw ? `• Nivel atencional y concentración: "${attentionRaw}".` : null,
    taskPaceRaw ? `• Ritmo de ejecución y finalización de tareas: "${taskPaceRaw}".` : null,
    q.attentionDescriptor ? `• Indicador de aula registrado: ${q.attentionDescriptor}.` : null,
    q.taskPaceDescriptor ? `• Indicador de ritmo de trabajo: ${q.taskPaceDescriptor}.` : null
  ].filter(Boolean).join('\n');

  const attentionAndExecutiveNarrative = [
    `En relación con la atención sostenida, focalizada y las funciones ejecutivas, se detectan dificultades notorias en el contexto del aula:`,
    attentionBullets || null,
    `El alumno/a presenta una marcada fatigabilidad cognitiva a medida que avanza la jornada lectiva. Se dispersa con facilidad ante estímulos ambientales irrelevantes y experimenta serias dificultades para iniciar las tareas de forma autónoma, sostener el esfuerzo mental continuo y finalizar las actividades en el tiempo asignado al grupo clase. Es frecuente el olvido de materiales y la necesidad constante de reorientación externa verbal por parte del profesorado.`
  ].filter(Boolean).join('\n\n');

  // 6. Actividad motora, inquietud e impulsividad
  const motorRaw = obs?.motorRestlessness || '';
  const impulsivityRaw = obs?.impulsivityControl || '';
  const motorBullets = [
    motorRaw ? `• Inquietud psicomotriz observada: "${motorRaw}".` : null,
    impulsivityRaw ? `• Control de impulsos e inhibición: "${impulsivityRaw}".` : null,
    q.impulsivityDescriptor ? `• Indicador docente: ${q.impulsivityDescriptor}.` : null
  ].filter(Boolean).join('\n');

  const motorAndRestlessnessNarrative = [
    `En el ámbito de la autorregulación motora y el control inhibitorio:`,
    motorBullets || null,
    `En el aula se manifiesta inquietud persistente, con cambios posturales continuos en la silla, manipulación desorganizada de objetos y tendencia a levantarse del asiento en situaciones no regladas. A nivel conductual, se registra una marcada impulsividad cognitiva y verbal: suele precipitar sus respuestas antes de escuchar la formulación completa de la pregunta, muestra dificultad para aguardar su turno de palabra e interrumpe con frecuencia la dinámica grupal sin calibrar las consecuencias inmediatas de su conducta.`
  ].filter(Boolean).join('\n\n');

  // 7. Lenguaje, comunicación y psicomotricidad
  const langRaw = obs?.languageAndCommunication || '';
  const fineMotorRaw = obs?.fineMotorAndWriting || '';
  const grossMotorRaw = obs?.grossMotorCoordination || '';
  const langBullets = [
    langRaw ? `• Comunicación y comprensión lingüística: "${langRaw}".` : null,
    fineMotorRaw ? `• Coordinación visomotora y grafomotricidad: "${fineMotorRaw}".` : null,
    grossMotorRaw ? `• Motricidad gruesa y equilibrio: "${grossMotorRaw}".` : null,
    q.infantilOralLanguageDesc ? `• Lenguaje en Educación Infantil: ${q.infantilOralLanguageDesc}.` : null,
    q.infantilPsychomotorFineDesc ? `• Motricidad en Infantil: ${q.infantilPsychomotorFineDesc}.` : null
  ].filter(Boolean).join('\n');

  const languageAndCommunicationNarrative = [
    `En el área de la comunicación, expresión verbal y desarrollo grafomotor:`,
    langBullets || null,
    `A nivel expresivo, aunque mantiene una intención comunicativa activa, se constata dificultad para estructurar relatos de forma ordenada y comprender órdenes secuenciadas de más de dos consignas. En la dimensión grafomotora, el trazo gráfico refleja tensión o debilidad en el agarre del útil de escritura, presión inadecuada y fatiga temprana al afrontar producciones escritas extensas.`
  ].filter(Boolean).join('\n\n');

  // 8. Dimensión socioemocional y relaciones con iguales
  const emotionalRaw = obs?.emotionalRegulation || '';
  const peerRaw = obs?.peerRelationships || '';
  const socioBullets = [
    emotionalRaw ? `• Regulación emocional y tolerancia a la frustración: "${emotionalRaw}".` : null,
    peerRaw ? `• Relaciones sociales y dinámicas en el patio: "${peerRaw}".` : null,
    q.emotionalDescriptor ? `• Indicador socioemocional registrado: ${q.emotionalDescriptor}.` : null
  ].filter(Boolean).join('\n');

  const socioEmotionalNarrative = [
    `En cuanto al desarrollo socioemocional y la convivencia con sus iguales:`,
    socioBullets || null,
    `Se evidencia una baja tolerancia a la frustración ante las correcciones docentes o cuando no logra el resultado esperado de forma inmediata, reaccionando ocasionalmente con bloqueos, retraimiento o conductas de oposición reactiva. En los momentos no estructurados (recreos, patios, filas), muestra interés por relacionarse pero le cuesta respetar las normas sociales de juego reglado y calibrar la intensidad de sus intervenciones, lo que puede originar roces esporádicos con compañeros.`
  ].filter(Boolean).join('\n\n');

  // 9. Medidas pedagógicas ordinarias ensayadas y respuesta
  const measuresRaw = obs?.measuresAppliedAndResults || q.measuresObservations || '';
  const appliedList = q.appliedMeasuresList && q.appliedMeasuresList.length > 0 ? q.appliedMeasuresList.join(', ') : 'Adaptaciones metodológicas organizativas de aula';
  const measuresAndEvolutionNarrative = [
    `El centro escolar ha implementado medidas de atención ordinaria a la diversidad durante un periodo continuado (${q.measuresDuration || 'más de dos meses'}):`,
    `1. Medidas adoptadas: ${appliedList}.\n2. Ubicación estratégica en el aula (primeras filas, alejado de distractores y cerca del docente tutor).\n3. Fragmentación y secuenciación de tareas complejas en pasos individuales comprobables.\n4. Concesión de tiempo adicional en pruebas escritas y supervisión personal de la agenda escolar.\n5. Empleo de refuerzo contingente inmediato y claves visuales para focalizar la atención.`,
    `Evolución y respuesta pedagógica: "${measuresRaw || 'Las adaptaciones de aula han supuesto un alivio parcial, pero las dificultades atencionales, ejecutivas y de autorregulación persisten de forma significativa, condicionando su progreso escolar y su bienestar socioafectivo.'}"`
  ].join('\n\n');

  // 10. Conclusiones y recomendaciones para el especialista médico
  const counselorSynthesisAndRecommendations = [
    `VALORACIÓN SINTÉTICA Y SOLICITUD A ${targetTitle.toUpperCase()}:`,
    `A la luz de los datos observados de manera continuada en el contexto escolar, se constata un perfil compatible con dificultades nucleares en las áreas de atención sostenida, autorregulación inhibitoria y funciones ejecutivas, con repercusión directa en su rendimiento académico e integración socioeducativa.`,
    `Desde este Departamento de Orientación y el Claustro de Profesores del Colegio San Buenaventura, solicitamos respetuosamente:\n1. Una valoración clínica neurológica / pediátrica completa que descarte o confirme hipótesis diagnósticas de base neurobiológica (sospecha de TDAH / Dificultades Específicas / Trastornos del Neurodesarrollo).\n2. La determinación de pautas terapéuticas o farmacológicas si el facultativo lo estima pertinente.\n3. El retorno de recomendaciones y orientaciones médicas que nos permitan coordinar y ajustar el Plan de Apoyo Educativo del alumno/a en el centro.`,
    `Quedamos a su entera disposición para cualquier aclaración o intercambio técnico colegiado.`
  ].join('\n\n');

  return {
    id: `MED-REP-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    generatedByCounselorName: effectiveCounselorName,
    counselorEmail: effectiveCounselorEmail,
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
