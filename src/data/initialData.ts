import { ReferralCase, StudentNEAE } from '../types';

export const INITIAL_CASES: ReferralCase[] = [
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    stage: 'PRIMARIA',
    studentName: 'Mateo Fernández Ruiz',
    grade: '3º Educación Primaria A',
    teacherName: 'Elena Pastor (Tutora)',
    createdByEmail: 'elena.pastor@sanbuenaventura.es',
    dateSubmitted: '2026-08-04',
    status: 'PENDIENTE_REVISION',
    priority: 'ALTA',
    categoryTag: 'Dificultad de Atención en Aula',
    assignedTests: ['WISC-V', 'EDAH'],
    counselorNotes: 'Expediente recepcionado. Se prioriza entrevista inicial con tutora y observación estructurada en clase.',
    privacyConsent: {
      policyVersion: 'v2.4-2026',
      acceptedAt: '2026-08-04T09:30:00Z',
      userEmail: 'elena.pastor@sanbuenaventura.es',
      userName: 'Elena Pastor',
      userRole: 'DOCENTE'
    },
    questionnaire: {
      stage: 'PRIMARIA',
      studentName: 'Mateo Fernández Ruiz',
      studentAge: 8,
      grade: '3º Educación Primaria A',
      teacherName: 'Elena Pastor',
      teacherEmail: 'elena.pastor@sanbuenaventura.es',
      referralDate: '2026-08-04',
      mainReason: 'Gran dificultad para mantener la atención en tareas escritas, olvida frecuentemente el material y no finaliza las fichas a tiempo a pesar de comprender las explicaciones orales.',
      affectedSubjects: ['Matemáticas', 'Lengua y Literatura'],
      attentionFocus: 1,
      readingComprehension: 4,
      mathReasoning: 4,
      taskPaceAndCompletion: 2,
      impulsivityAndAutonomy: 3,
      emotionalAndPeerRel: 4,
      measuresDuration: 'MAS_2_MESES',
      appliedMeasuresList: [
        'Ubicación en primera fila cerca del profesor o pizarra',
        'Reducir cantidad de ejercicios o fraccionar tareas largas',
        'Supervisión y confirmación del copiado de deberes en la agenda',
        'Darle más tiempo en exámenes y controles (+25%)'
      ],
      measuresResult: 'INSUFICIENTE',
      measuresObservations: 'Se han realizado adaptaciones metodológicas durante más de 2 meses sin resolución completa del problema.',
      familyContactDone: true,
      familyMeetingDone: true,
      familyAgreement: 'TOTAL_ACUERDO',
      externalAssessmentDone: true,
      externalAssessmentDetails: 'Aportan informe preliminar neuropediátrico de desatención ejecutiva.',
      familyAttitude: 'Muy colaboradores y comprometidos.',
      additionalObservations: 'Niño muy afectuoso, curioso y creativo. Le apasiona la robótica y el dibujo.',
      privacyConsent: {
        policyVersion: 'v2.4-2026',
        acceptedAt: '2026-08-04T09:30:00Z',
        userEmail: 'elena.pastor@sanbuenaventura.es',
        userName: 'Elena Pastor',
        userRole: 'DOCENTE'
      }
    }
  },
  {
    id: 'e28bb329-8739-4475-a81d-847fa2c03cb1',
    stage: 'INFANTIL',
    studentName: 'Lucía Morales Ramos',
    grade: '2º Infantil (4 años B)',
    teacherName: 'Carmen Ortiz (Tutora)',
    createdByEmail: 'carmen.ortiz@sanbuenaventura.es',
    dateSubmitted: '2026-08-08',
    status: 'EN_EVALUACION',
    priority: 'MEDIA',
    categoryTag: 'Desarrollo del Lenguaje y Comunicación',
    assignedTests: ['PLON-R', 'MSCA'],
    counselorNotes: 'Iniciada valoración de lenguaje con especialista de AL.',
    privacyConsent: {
      policyVersion: 'v2.4-2026',
      acceptedAt: '2026-08-08T11:15:00Z',
      userEmail: 'carmen.ortiz@sanbuenaventura.es',
      userName: 'Carmen Ortiz',
      userRole: 'DOCENTE'
    },
    questionnaire: {
      stage: 'INFANTIL',
      studentName: 'Lucía Morales Ramos',
      studentAge: 4,
      grade: '2º Infantil (4 años B)',
      teacherName: 'Carmen Ortiz',
      teacherEmail: 'carmen.ortiz@sanbuenaventura.es',
      referralDate: '2026-08-08',
      mainReason: 'Habla poco inteligible en el aula, oraciones simples de dos elementos y dificultades para relatar vivencias en asamblea.',
      affectedSubjects: ['Lenguaje Oral / Comunicación'],
      infantilOralLanguage: 2,
      infantilAttentionAssembly: 3,
      infantilPsychomotorFine: 3,
      infantilLogicConcepts: 4,
      infantilPersonalAutonomy: 3,
      infantilSocialPlay: 3,
      measuresDuration: '1_A_2_MESES',
      appliedMeasuresList: [
        'Apoyo visual con pictogramas de secuencias y rutinas de aula',
        'Ubicación cerca de la tutora en la asamblea con delimitación visual'
      ],
      measuresResult: 'MEJORIA_LEVE_PERSISTE_DIFICULTAD',
      measuresObservations: 'Comprende perfectamente las órdenes cotidianas y muestra buena sociabilidad.',
      familyContactDone: true,
      familyMeetingDone: true,
      familyAgreement: 'TOTAL_ACUERDO',
      externalAssessmentDone: false,
      privacyConsent: {
        policyVersion: 'v2.4-2026',
        acceptedAt: '2026-08-08T11:15:00Z',
        userEmail: 'carmen.ortiz@sanbuenaventura.es',
        userName: 'Carmen Ortiz',
        userRole: 'DOCENTE'
      }
    }
  },
  {
    id: 'c94f0e71-3329-4e01-9251-69830571fdb9',
    stage: 'PRIMARIA',
    studentName: 'Darío Sánchez Vega',
    grade: '4º Educación Primaria B',
    teacherName: 'Javier Luque',
    createdByEmail: 'javier.luque@sanbuenaventura.es',
    dateSubmitted: '2026-08-11',
    status: 'DICTAMINADO_CON_PAUTAS',
    priority: 'MEDIA',
    categoryTag: 'Dificultades en Procesos Lectores',
    assignedTests: ['PROLEC-R', 'WISC-V'],
    decisionDate: '2026-08-18',
    counselorNotes: 'Dictaminado con Adaptación Curricular No Significativa (ACNS) y apoyo metodológico ordinario en lectura y pruebas escritas.',
    privacyConsent: {
      policyVersion: 'v2.4-2026',
      acceptedAt: '2026-08-11T08:45:00Z',
      userEmail: 'javier.luque@sanbuenaventura.es',
      userName: 'Javier Luque',
      userRole: 'DOCENTE'
    },
    actionPlan: {
      generalGoal: 'Mejora de la fluidez y comprensión lectora en áreas instrumentales.',
      methodologicalAdaptations: [
        'Lectura oral previa de enunciados de problemas y preguntas de examen.',
        'Facilitar esquemas conceptuales y glosarios con apoyo gráfico.',
        'Permitir respuestas orales en controles de ciencias.'
      ],
      environmentalAdaptations: ['Ubicación en primera fila cerca de la pizarra y del docente.'],
      evaluationAdaptations: ['Dar 25% más de tiempo en exámenes escritos.'],
      emotionalTips: ['Evitar lectura obligada en voz alta delante de la clase sin preparación previa.']
    },
    questionnaire: {
      stage: 'PRIMARIA',
      studentName: 'Darío Sánchez Vega',
      studentAge: 9,
      grade: '4º Educación Primaria B',
      teacherName: 'Javier Luque',
      teacherEmail: 'javier.luque@sanbuenaventura.es',
      referralDate: '2026-08-11',
      mainReason: 'Lectura silábica vacilante, errores en palabras compuestas y fatiga notable en controles largos.',
      affectedSubjects: ['Lengua y Literatura', 'Ciencias / STEM'],
      attentionFocus: 3,
      readingComprehension: 1,
      mathReasoning: 4,
      taskPaceAndCompletion: 2,
      impulsivityAndAutonomy: 4,
      emotionalAndPeerRel: 3,
      measuresDuration: 'MAS_2_MESES',
      appliedMeasuresList: [
        'Darle más tiempo en exámenes y controles (+25%)',
        'Uso de apoyos visuales, esquemas o recordatorios en la mesa'
      ],
      measuresResult: 'INSUFICIENTE',
      measuresObservations: 'Excelente nivel de razonamiento matemático; su dificultad se circunscribe a la decodificación lectora.',
      familyContactDone: true,
      familyMeetingDone: true,
      familyAgreement: 'TOTAL_ACUERDO',
      externalAssessmentDone: false,
      privacyConsent: {
        policyVersion: 'v2.4-2026',
        acceptedAt: '2026-08-11T08:45:00Z',
        userEmail: 'javier.luque@sanbuenaventura.es',
        userName: 'Javier Luque',
        userRole: 'DOCENTE'
      }
    }
  }
];

export const INITIAL_STUDENTS_NEAE: StudentNEAE[] = [
  {
    id: 'NEAE-101',
    stage: 'PRIMARIA',
    name: 'Mateo Fernández Ruiz',
    grade: '3º Educación Primaria A',
    category: 'ACNEAE - Dificultad Atencional (TDAH)',
    tutor: 'Elena Pastor',
    ptTeacher: 'Mª Ángeles Gómez (PT)',
    alTeacher: 'Sara Domínguez (AL)',
    curricularAdaptation: 'No Significativa (ACNS)',
    lastReviewDate: '2026-08-18',
    status: 'Activo',
    guidelines: {
      generalGoal: 'Mejora del tiempo de concentración sostenida, ritmo de copiado y autorregulación en tareas de aula.',
      methodologicalAdaptations: [
        'Fraccionamiento de instrucciones complejas en pasos secuenciales numerados.',
        'Supervisión y confirmación directa del marcado de deberes en la agenda física antes de salir.',
        'Facilitar esquemas visuales y organizadores gráficos en su mesa.',
        'Reducción de ejercicios mecánicos repetitivos priorizando la calidad del aprendizaje.'
      ],
      environmentalAdaptations: [
        'Ubicación en primera fila en el eje central, cerca de la mesa del docente y lejos de puertas o ventanas.',
        'Mesa despejada únicamente con el material necesario para la actividad en curso.'
      ],
      evaluationAdaptations: [
        'Ampliación del 25% de tiempo en pruebas escritas y exámenes.',
        'Posibilidad de realizar exámenes en dos sesiones o con una breve pausa de 5 minutos.',
        'Revisión individualizada por el docente para verificar que no deja preguntas en blanco por descuido.'
      ],
      emotionalTips: [
        'Reforzar y valorar el esfuerzo y la persistencia de forma privada.',
        'Utilizar señales visuales discretas acordadas para reconducir la atención sin exponerle ante el grupo.'
      ],
      ptHoursPerWeek: 3,
      alHoursPerWeek: 1
    }
  },
  {
    id: 'NEAE-102',
    stage: 'PRIMARIA',
    name: 'Darío Sánchez Vega',
    grade: '4º Educación Primaria B',
    category: 'ACNEAE - Dificultad de Lectoescritura (Dislexia)',
    tutor: 'Javier Luque',
    ptTeacher: 'Mª Ángeles Gómez (PT)',
    curricularAdaptation: 'No Significativa (ACNS)',
    lastReviewDate: '2026-08-19',
    status: 'Activo',
    guidelines: {
      generalGoal: 'Afianzamiento de la ruta fonológica, fluidez en la lectura comprensiva y acceso a textos de ciencias.',
      methodologicalAdaptations: [
        'Lectura oral previa de los enunciados de examen por parte del docente.',
        'Evitar la lectura en voz alta improvisada delante de sus compañeros.',
        'Permitir el uso de letra de imprenta clara y tamaño de fuente ampliado (mínimo 14pt, espaciado 1.5).'
      ],
      environmentalAdaptations: [
        'Asignación de un compañero/a tutor de apoyo para tareas colaborativas.'
      ],
      evaluationAdaptations: [
        'No penalizar los errores ortográficos disléxicos en asignaturas no lingüísticas (Ciencias, Matemáticas).',
        'Ampliación de tiempo (+25%) o evaluación oral complementaria.'
      ],
      emotionalTips: [
        'Validar su frustración y fomentar actividades donde demuestre su alta capacidad de razonamiento lógico.'
      ],
      ptHoursPerWeek: 2,
      alHoursPerWeek: 0
    }
  }
];
