import { ReferralCase, StudentNEAE } from '../types';

export const INITIAL_CASES: ReferralCase[] = [
  {
    id: 'DER-2026-001',
    studentName: 'Mateo Fernández Ruiz',
    grade: '3º Educación Primaria A',
    teacherName: 'Elena Pastor (Tutora)',
    dateSubmitted: '2026-08-04',
    status: 'PENDIENTE_REVISION',
    priority: 'ALTA',
    categoryTag: 'Sospecha TDAH Inatento',
    questionnaire: {
      studentName: 'Mateo Fernández Ruiz',
      studentAge: 8,
      grade: '3º Educación Primaria A',
      teacherName: 'Elena Pastor',
      subjectOrTutor: 'Tutora de 3º EP-A',
      referralDate: '2026-08-04',
      mainReason: 'Gran dificultad para mantener la atención en tareas escritas, olvida frecuentemente el material y no finaliza las fichas a tiempo a pesar de comprender las explicaciones orales.',
      attentionFocus: 1,
      taskCompletion: 2,
      readingComprehension: 4,
      writingFluency: 2,
      mathReasoning: 4,
      memoryAndRetention: 2,
      learningPace: 2,
      impulsivityControl: 3,
      motorRestlessness: 2,
      frustrationTolerance: 3,
      peerRelationships: 4,
      ruleFollowing: 4,
      emotionalStability: 3,
      oralExpression: 4,
      oralComprehension: 4,
      speechArticulation: 5,
      fineMotorSkills: 2,
      personalAutonomy: 2,
      measures: [
        { id: 'm1', name: 'Ubicación en primera fila cerca de la pizarra', applied: true, effectiveness: 'MEDIA', details: 'Reduce ligeras distracciones de compañeros pero se despista con su lápiz o papel.' },
        { id: 'm2', name: 'Fraccionamiento de tareas y exámenes', applied: true, effectiveness: 'ALTA', details: 'Mejora la entrega cuando se le dan bloques de 10 minutos.' },
        { id: 'm3', name: 'Agenda supervisada diaria', applied: true, effectiveness: 'NULA', details: 'Sigue olvidando cuadernos en clase.' },
        { id: 'm4', name: 'Adaptación de tiempo (+25%)', applied: true, effectiveness: 'MEDIA', details: 'Consigue terminar 2 preguntas más pero se agota visualmente.' }
      ],
      previousMeasuresObservations: 'Se han realizado adaptaciones metodológicas básicas durante 2 meses sin resolución completa del problema.',
      familyContactDone: true,
      familyMeetingDone: true,
      familyAgreement: 'TOTAL_ACUERDO',
      externalAssessmentDone: true,
      externalAssessmentDetails: 'Valoración Neuropediátrica previa realizada en clínica privada (Aportan informe preliminar de desatención ejecutiva).',
      familyAttitude: 'Muy colaboradores. Refieren que en casa el tiempo de deberes se prolonga hasta 3 horas por distracciones constantes.',
      additionalObservations: 'Niño muy afectuoso, curioso y creativo. Le apasiona la robótica y el dibujo.'
    },
    triage: {
      evaluationRecommended: true,
      confidenceScore: 91,
      primaryHypothesis: 'TDAH_INATENTO',
      secondaryHypotheses: ['DEA_ESCRITURA_DISGRAFIA', 'RETRASO_MADURATIVO_GENERAL'],
      suggestedPriority: 'ALTA',
      explanation: 'Indicadores significativos de desatención ejecutiva (puntuación atención 1/5) con preservación del razonamiento conceptual (4/5). Medidas de aula insuficientes.',
      immediateClassroomTips: [
        'Ubicación en primera fila, lejos de ventanas.',
        'Supervisión directa con apoyo visual al inicio de cada actividad.',
        'Permitir respuesta oral en evaluaciones complejas.'
      ],
      recommendedTests: [
        { code: 'WISC-V', name: 'WISC-V (Escala de Inteligencia de Wechsler)', area: 'Cognitiva', description: 'Valora CI global y Memoria de Trabajo.', recommended: true },
        { code: 'EDAH', name: 'EDAH (Escala TDAH)', area: 'Atención', description: 'Informes de profesores y familia.', recommended: true },
        { code: 'd2', name: 'Test de Atención d2', area: 'Atención Sostenida', description: 'Atención selectiva visual.', recommended: true }
      ]
    }
  },
  {
    id: 'DER-2026-002',
    studentName: 'Sofia Ramírez Blanco',
    grade: '4º Educación Primaria B',
    teacherName: 'Carlos Mendizábal (Lengua)',
    dateSubmitted: '2026-08-01',
    status: 'EN_EVALUACION',
    priority: 'ALTA',
    categoryTag: 'Sospecha Dislexia / DEA Lectura',
    questionnaire: {
      studentName: 'Sofia Ramírez Blanco',
      studentAge: 9,
      grade: '4º Educación Primaria B',
      teacherName: 'Carlos Mendizábal',
      subjectOrTutor: 'Profesor de Lengua y Matemáticas',
      referralDate: '2026-08-01',
      mainReason: 'Lectura muy silábica y lenta con omisiones y sustituciones de letras. Gran ansiedad cuando se le pide leer en voz alta.',
      attentionFocus: 3,
      taskCompletion: 3,
      readingComprehension: 1,
      writingFluency: 1,
      mathReasoning: 4,
      memoryAndRetention: 3,
      learningPace: 2,
      impulsivityControl: 4,
      motorRestlessness: 4,
      frustrationTolerance: 2,
      peerRelationships: 5,
      ruleFollowing: 5,
      emotionalStability: 2,
      oralExpression: 4,
      oralComprehension: 5,
      speechArticulation: 4,
      fineMotorSkills: 3,
      personalAutonomy: 4,
      measures: [
        { id: 'm1', name: 'Lectura compartida o grabada en audio', applied: true, effectiveness: 'ALTA', details: 'Comprende perfectamente el texto si se lo leen en voz alta.' },
        { id: 'm2', name: 'Evitar lectura pública no preparada', applied: true, effectiveness: 'ALTA', details: 'Ha disminuido notablemente la ansiedad previa a la clase.' },
        { id: 'm3', name: 'Uso de letra adaptada y tipografía clara', applied: true, effectiveness: 'MEDIA', details: 'Facilita el seguimiento pero persiste la lentitud.' }
      ],
      previousMeasuresObservations: 'Comprensión oral excelente contrastada con grave bloqueo fonológico en descodificación lectora.',
      familyContactDone: true,
      familyAttitude: 'Preocupados. Antecedente familiar de dislexia en rama paterna.',
      additionalObservations: 'Destaca en pensamiento espacial, dibujo y expresión oral.'
    },
    triage: {
      evaluationRecommended: true,
      confidenceScore: 94,
      primaryHypothesis: 'DEA_LECTURA_DISLEXIA',
      secondaryHypotheses: ['DEA_ESCRITURA_DISGRAFIA'],
      suggestedPriority: 'ALTA',
      explanation: 'Discrepancia acusada entre comprensión verbal oral (5/5) y descodificación lectoescrita (1/5). Perfil compatible con Dificultad Específica de Aprendizaje en Lectura.',
      immediateClassroomTips: [
        'Exámenes adaptados: enunciados leídos por el profesor o facilitados en audio.',
        'No penalizar faltas de ortografía natural en asignaturas de contenido.',
        'Facilitar esquemas con mapa conceptual pregrabado.'
      ],
      recommendedTests: [
        { code: 'PROLEC-R', name: 'PROLEC-R (Procesos Lectores)', area: 'Lectura', description: 'Evaluación de rutas fonológica y visual.', recommended: true },
        { code: 'WISC-V', name: 'WISC-V (Escala de Inteligencia de Wechsler)', area: 'Cognitiva', description: 'Capacidad intelectual y memoria auditiva.', recommended: true }
      ]
    },
    assignedTests: ['PROLEC-R', 'WISC-V'],
    counselorNotes: 'Evaluación citada para el jueves 14 a las 10:00h en el despacho de orientación. Notificada familia y tutor.'
  },
  {
    id: 'DER-2026-003',
    studentName: 'Lucas Morales Gómez',
    grade: '1º ESO C',
    teacherName: 'Marta Salgado (Matemáticas)',
    dateSubmitted: '2026-07-28',
    status: 'DICTAMINADO_CON_PAUTAS',
    priority: 'MEDIA',
    categoryTag: 'Altas Capacidades Intelectuales',
    questionnaire: {
      studentName: 'Lucas Morales Gómez',
      studentAge: 12,
      grade: '1º ESO C',
      teacherName: 'Marta Salgado',
      subjectOrTutor: 'Tutora y Prof. Matemáticas',
      referralDate: '2026-07-28',
      mainReason: 'Acaba las actividades en 5 minutos, muestra aburrimiento constante en clase y cuestiona de forma analítica el temario. Desconexión en explicaciones repetitivas.',
      attentionFocus: 2,
      taskCompletion: 5,
      readingComprehension: 5,
      writingFluency: 4,
      mathReasoning: 5,
      memoryAndRetention: 5,
      learningPace: 5,
      impulsivityControl: 3,
      motorRestlessness: 2,
      frustrationTolerance: 2,
      peerRelationships: 3,
      ruleFollowing: 3,
      emotionalStability: 3,
      oralExpression: 5,
      oralComprehension: 5,
      speechArticulation: 5,
      fineMotorSkills: 4,
      personalAutonomy: 5,
      measures: [
        { id: 'm1', name: 'Fichas de profundización y ampliación', applied: true, effectiveness: 'ALTA', details: 'Responde con entusiasmo a retos de lógica y programación.' },
        { id: 'm2', name: 'Rol de tutor entre iguales en laboratorio', applied: true, effectiveness: 'MEDIA', details: 'A veces muestra impaciencia con el ritmo de otros compañeros.' }
      ],
      previousMeasuresObservations: 'Requiere enriquecimiento curricular estructurado para evitar el desinterés académico.',
      familyContactDone: true,
      familyAttitude: 'Solicitan evaluación oficial de altas capacidades.',
      additionalObservations: 'Lee libros de divulgación científica en sus ratos libres.'
    },
    triage: {
      evaluationRecommended: true,
      confidenceScore: 89,
      primaryHypothesis: 'ALTAS_CAPACIDADES',
      secondaryHypotheses: ['TDAH_INATENTO'],
      suggestedPriority: 'MEDIA',
      explanation: 'Sobresaliente ritmo de aprendizaje y razonamiento lógico-matemático (5/5). Aburrimiento secundario a alta velocidad de procesamiento.',
      immediateClassroomTips: [
        'Plan de enriquecimiento en aula con proyectos de investigación.',
        'Compresión curricular de contenidos básicos ya dominados.',
        'Fomentar la mentoría científica y creatividad.'
      ],
      recommendedTests: [
        { code: 'BADYG', name: 'BADyG (Batería Aptitudes Diferenciales)', area: 'Inteligencia', description: 'Medición de inteligencias múltiples y lógica.', recommended: true },
        { code: 'WISC-V', name: 'WISC-V', area: 'Cognitiva', description: 'Confirmación de Perfil de Superdotación/Talento.', recommended: true }
      ]
    },
    decisionDate: '2026-08-02',
    counselorNotes: 'Evaluación finalizada. Confirmado perfil de Altas Capacidades Intelectuales con Talento Lógico-Matemático (Percentil >97 en BADyG). Emitido dictamen de Enriquecimiento Curricular.',
    actionPlan: {
      generalGoal: 'Fomentar la motivación intrínseca mediante enriquecimiento horizontal y vertical en áreas STEM.',
      methodologicalAdaptations: [
        'Compactación curricular: Eximir de repetición de ejercicios mecánicos tras demostrar dominio en prueba previa.',
        'Proyectos autónomos de investigación sobre física y tecnología aplicada.',
        'Acceso a lecturas de divulgación científica durante tiempos muertos en aula.'
      ],
      environmentalAdaptations: [
        'Ubicación en agrupamientos flexibles de trabajo cooperativo.'
      ],
      evaluationAdaptations: [
        'Introducción de preguntas de reto sintético y razonamiento complejo en exámenes trimestrales.'
      ],
      emotionalTips: [
        'Trabajar la empatía y tolerancia en trabajo en grupo.',
        'Reconocer el esfuerzo y la constancia sobre el resultado inmediato.'
      ]
    }
  }
];

export const INITIAL_STUDENTS_NEAE: StudentNEAE[] = [
  {
    id: 'NEAE-001',
    name: 'Lucas Morales Gómez',
    grade: '1º ESO C',
    category: 'ACNEAE - Altas Capacidades',
    tutor: 'Marta Salgado',
    curricularAdaptation: 'Enriquecimiento',
    status: 'Activo',
    lastReviewDate: '2026-08-02',
    guidelines: {
      generalGoal: 'Programa de enriquecimiento curricular horizontal en asignaturas del ámbito científico-tecnológico.',
      methodologicalAdaptations: [
        'Compactar temario ordinario mediante pruebas de nivel previo.',
        'Asignación de proyectos STEM individuales cuando finalice la tarea común.',
        'Participación en olimpíadas matemáticas del centro.'
      ],
      environmentalAdaptations: [
        'Trabajo en parejas flexibles con roles diferenciados.'
      ],
      evaluationAdaptations: [
        'Preguntas opcionales de desarrollo crítico en exámenes de física y matemáticas.'
      ],
      emotionalTips: [
        'Cuidar la integración con el grupo de clase evitando etiquetas de aislamiento.'
      ]
    }
  },
  {
    id: 'NEAE-002',
    name: 'Daniela Torres Vega',
    grade: '5º Educación Primaria A',
    category: 'ACNEAE - TDAH',
    tutor: 'Javier Navarro',
    ptTeacher: 'María Luz (PT)',
    curricularAdaptation: 'No Significativa (ACNS)',
    status: 'Activo',
    lastReviewDate: '2026-06-15',
    guidelines: {
      generalGoal: 'Mejorar la función ejecutiva, organización temporal y autorregulación conductual en el aula.',
      methodologicalAdaptations: [
        'Fraccionar exámenes largos en 2 partes de 25 minutos.',
        'Uso de reloj visual (Time Timer) en la mesa.',
        'Comprobación individualizada de la agenda antes de salir del centro.'
      ],
      environmentalAdaptations: [
        'Primera fila junto al profesor y compañero tutor de apoyo.'
      ],
      evaluationAdaptations: [
        'Tiempo adicional (+25%) en todas las evaluaciones escritas.',
        'Formato impreso con tipografía grande e instrucciones destacadas en negrita.'
      ],
      emotionalTips: [
        'Utilizar refuerzo positivo inmediato (3 elogios por cada llamada de atención).',
        'Pausa de descanso activo autorizada de 2 minutos tras terminar cada bloque.'
      ],
      ptHoursPerWeek: 2
    }
  },
  {
    id: 'NEAE-003',
    name: 'Hugo Alba Serrano',
    grade: '2º Educación Primaria B',
    category: 'ACNEAE - TEL',
    tutor: 'Sonia Gil',
    alTeacher: 'Carmen P. (AL)',
    ptTeacher: 'María Luz (PT)',
    curricularAdaptation: 'No Significativa (ACNS)',
    status: 'Activo',
    lastReviewDate: '2026-05-20',
    guidelines: {
      generalGoal: 'Estimular la estructuración sintáctica y comprensiva del lenguaje oral y escrito.',
      methodologicalAdaptations: [
        'Uso constante de pictogramas y apoyos visuales explicativos.',
        'Hablarle de frente, con tono claro y oraciones sencillas.',
        'Evitar corregir directamente las faltas de articulación; en su lugar, devolver la frase correctamente modelada.'
      ],
      environmentalAdaptations: [
        'Mesa próxima a la zona de asamblea y recursos audiovisuales.'
      ],
      evaluationAdaptations: [
        'Evaluación continua con apoyo de la especialista en Audición y Lenguaje (AL).',
        'Priorizar respuesta con apoyo de imágenes y formato oral.'
      ],
      emotionalTips: [
        'Validar siempre su intento comunicativo y darle tiempo de respuesta sin prisas.'
      ],
      alHoursPerWeek: 3,
      ptHoursPerWeek: 1
    }
  }
];
