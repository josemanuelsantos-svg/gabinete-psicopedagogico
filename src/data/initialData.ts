import { ReferralCase, StudentNEAE } from '../types';

export const INITIAL_CASES: ReferralCase[] = [];

// Listado Oficial de Alumnos de Apoyo importado del documento escolar del Colegio San Buenaventura
export const INITIAL_STUDENTS_NEAE: StudentNEAE[] = [
  {
    id: 'NEAE-01',
    stage: 'PRIMARIA',
    name: 'Daryel Augusto',
    grade: '1º Educación Primaria A',
    category: 'ACNEAE - Apoyo Específico (PT/AL)',
    tutor: 'Tutor/a de 1ºA',
    ptTeacher: 'Mª Ángeles Gómez (PT)',
    alTeacher: 'Sara Domínguez (AL)',
    curricularAdaptation: 'No Significativa (ACNS)',
    lastReviewDate: '2026-09-29',
    status: 'Activo',
    guidelines: {
      generalGoal: 'Atención e intervención específica individualizada con especialista en áreas instrumentales.',
      methodologicalAdaptations: [
        'Fraccionamiento de tareas en pasos sencillos con apoyo visual.',
        'Supervisión y confirmación del trabajo realizado.',
        'Uso de apoyos manipulativos y visuales en la mesa de trabajo.',
        'Coordinación estrecha y semanal con el especialista de apoyo.'
      ],
      environmentalAdaptations: [
        'Ubicación en primera fila cerca del profesor o pizarra.',
        'Mesa de trabajo libre de distractores innecesarios.'
      ],
      evaluationAdaptations: [
        'Ampliación del tiempo en actividades escritas y controles (+25%).',
        'Lectura oral previa de enunciados complejos.'
      ],
      emotionalTips: [
        'Refuerzo positivo contingente ante cada avance y esfuerzo.',
        'Validación y acompañamiento ante momentos de frustración.'
      ],
      ptHoursPerWeek: 3,
      alHoursPerWeek: 1
    }
  },
  {
    id: 'NEAE-02',
    stage: 'PRIMARIA',
    name: 'Daniel Sánchez Rubio',
    grade: '1º Educación Primaria A',
    category: 'Altas Capacidades Intelectuales (AACC)',
    tutor: 'Tutor/a de 1ºA',
    curricularAdaptation: 'Enriquecimiento',
    lastReviewDate: '2026-09-29',
    status: 'Activo',
    guidelines: {
      generalGoal: 'Programa de enriquecimiento curricular, ampliación vertical/horizontal y fomento del pensamiento creativo y crítico.',
      methodologicalAdaptations: [
        'Propuesta de tareas de ampliación e investigación cuando finalice el trabajo básico.',
        'Proyectos de aprendizaje por descubrimiento y retos de lógica-matemática.',
        'Evitar la repetición mecánica de ejercicios ya dominados.',
        'Flexibilidad en la elección de formatos de entrega de trabajos.'
      ],
      environmentalAdaptations: [
        'Acceso a rincón de retos, lecturas avanzadas y recursos de investigación en el aula.'
      ],
      evaluationAdaptations: [
        'Evaluación basada en proyectos de profundización y rúbricas de creatividad.',
        'Preguntas de razonamiento conceptual y pensamiento divergente en controles.'
      ],
      emotionalTips: [
        'Acompañamiento en la gestión del perfeccionismo y la tolerancia a la frustración.',
        'Fomentar la cooperación y el liderazgo positivo entre iguales.'
      ],
      ptHoursPerWeek: 0,
      alHoursPerWeek: 0
    }
  },
  {
    id: 'NEAE-03',
    stage: 'PRIMARIA',
    name: 'Sara Valentina Cuña',
    grade: '1º Educación Primaria A',
    category: 'ACNEAE - Apoyo Ordinario de Profesor',
    tutor: 'Tutor/a de 1ºA',
    curricularAdaptation: 'Pautas Ordinarias',
    lastReviewDate: '2026-09-29',
    status: 'Activo',
    guidelines: {
      generalGoal: 'Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y la lectoescritura inicial.',
      methodologicalAdaptations: [
        'Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.',
        'Modelado paso a paso en la realización de fichas y cuadernos.',
        'Apoyos gráficos para la asimilación de conceptos clave.'
      ],
      environmentalAdaptations: [
        'Ubicación en zona preferente con buena visibilidad y fácil acceso para el docente.'
      ],
      evaluationAdaptations: [
        'Supervisión continua durante las pruebas de clase y adaptación del ritmo.',
        'Flexibilidad temporal en tareas escritas.'
      ],
      emotionalTips: [
        'Ambiente de aula seguro que incentive la participación espontánea sin miedo al error.'
      ],
      ptHoursPerWeek: 1,
      alHoursPerWeek: 0
    }
  },
  {
    id: 'NEAE-04',
    stage: 'PRIMARIA',
    name: 'Sebastián Hristov Kirov',
    grade: '1º Educación Primaria C',
    category: 'ACNEAE - Apoyo Ordinario (Tutor y Profesor)',
    tutor: 'Tutor/a de 1ºC',
    curricularAdaptation: 'Pautas Ordinarias',
    lastReviewDate: '2026-09-29',
    status: 'Activo',
    guidelines: {
      generalGoal: 'Refuerzo coordinado entre tutor y profesor de apoyo para consolidar habilidades básicas y autonomía de trabajo.',
      methodologicalAdaptations: [
        'Supervisión compartida entre tutor y profesor de apoyo.',
        'Instrucciones cortas y estructuradas con apoyos visuales.',
        'Refuerzo sistemático del vocabulario y comprensión de consignas.'
      ],
      environmentalAdaptations: [
        'Ubicación estratégica facilitando el acompañamiento del docente de apoyo.'
      ],
      evaluationAdaptations: [
        'Lectura guiada de enunciados de actividades y controles.',
        'Ampliación del tiempo de ejecución.'
      ],
      emotionalTips: [
        'Valoración explícita de los logros diarios para potenciar la autoestima escolar.'
      ],
      ptHoursPerWeek: 2,
      alHoursPerWeek: 0
    }
  },
  {
    id: 'NEAE-05',
    stage: 'PRIMARIA',
    name: 'Amaya Simbaña',
    grade: '1º Educación Primaria C',
    category: 'ACNEAE - Apoyo Ordinario (Tutor y Profesor)',
    tutor: 'Tutor/a de 1ºC',
    curricularAdaptation: 'Pautas Ordinarias',
    lastReviewDate: '2026-09-29',
    status: 'Activo',
    guidelines: {
      generalGoal: 'Acompañamiento pedagógico ordinario para afianzar el proceso de aprendizaje en áreas instrumentales.',
      methodologicalAdaptations: [
        'Guía continua durante las actividades de aula por parte del tutor y profesor de refuerzo.',
        'Fraccionamiento de consignas extensas en pasos individuales.',
        'Material manipulativo en matemáticas y apoyos fonológicos en lengua.'
      ],
      environmentalAdaptations: [
        'Ubicación en primera fila cerca de la pizarra y mesa docente.'
      ],
      evaluationAdaptations: [
        'Revisión individualizada de tareas para asegurar la comprensión.',
        'Tiempo flexible en controles.'
      ],
      emotionalTips: [
        'Reforzamiento positivo del esfuerzo personal y la perseverancia.'
      ],
      ptHoursPerWeek: 2,
      alHoursPerWeek: 0
    }
  },
  {
    id: 'NEAE-06',
    stage: 'PRIMARIA',
    name: 'Gabrieli Gachechiladze',
    grade: '1º Educación Primaria C',
    category: 'ACNEAE - Apoyo Ordinario de Tutoría',
    tutor: 'Tutor/a de 1ºC',
    curricularAdaptation: 'Pautas Ordinarias',
    lastReviewDate: '2026-09-29',
    status: 'Activo',
    guidelines: {
      generalGoal: 'Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.',
      methodologicalAdaptations: [
        'Supervisión frecuente de la comprensión de explicaciones y tareas.',
        'Anticipación de consignas y modelado de ejemplos prácticos.',
        'Uso de esquemas y apoyos visuales en el encerado.'
      ],
      environmentalAdaptations: [
        'Ubicación cercana al tutor con un compañero/a guía al lado.'
      ],
      evaluationAdaptations: [
        'Comprobación oral de la comprensión de preguntas en pruebas escritas.'
      ],
      emotionalTips: [
        'Clima afectivo cálido que favorezca la confianza y la motivación.'
      ],
      ptHoursPerWeek: 1,
      alHoursPerWeek: 0
    }
  },
  {
    id: 'NEAE-07',
    stage: 'PRIMARIA',
    name: 'Alejandro José',
    grade: '1º Educación Primaria C',
    category: 'ACNEAE - Apoyo Ordinario de Tutoría',
    tutor: 'Tutor/a de 1ºC',
    curricularAdaptation: 'Pautas Ordinarias',
    lastReviewDate: '2026-09-29',
    status: 'Activo',
    guidelines: {
      generalGoal: 'Refuerzo ordinario por el tutor para optimizar el ritmo de trabajo y la concentración en el aula.',
      methodologicalAdaptations: [
        'Pautas directas para la organización de materiales escolares.',
        'Recordatorios periódicos para mantener la atención en la tarea.',
        'Fraccionar fichas largas en partes más breves.'
      ],
      environmentalAdaptations: [
        'Espacio de trabajo ordenado y libre de distracciones.'
      ],
      evaluationAdaptations: [
        'Dar margen de tiempo adicional para completar actividades.'
      ],
      emotionalTips: [
        'Reconocimiento de la constancia y motivación hacia el trabajo bien hecho.'
      ],
      ptHoursPerWeek: 1,
      alHoursPerWeek: 0
    }
  },
  {
    id: 'NEAE-08',
    stage: 'PRIMARIA',
    name: 'Carolina Carriel',
    grade: '1º Educación Primaria C',
    category: 'ACNEAE - Apoyo Ordinario de Tutoría',
    tutor: 'Tutor/a de 1ºC',
    curricularAdaptation: 'Pautas Ordinarias',
    lastReviewDate: '2026-09-29',
    status: 'Activo',
    guidelines: {
      generalGoal: 'Apoyo ordinario en tutoría para afianzar el aprendizaje, la expresión y la autonomía de aula.',
      methodologicalAdaptations: [
        'Estimulación constante de la participación y expresión oral.',
        'Acompañamiento individualizado al inicio de cada actividad.',
        'Apoyos visuales y secuenciación clara en la pizarra.'
      ],
      environmentalAdaptations: [
        'Ubicación preferente en el aula junto a compañeros colaboradores.'
      ],
      evaluationAdaptations: [
        'Valoración del proceso y progreso continuo con tiempo adaptado.'
      ],
      emotionalTips: [
        'Refuerzo verbal positivo para consolidar su seguridad personal.'
      ],
      ptHoursPerWeek: 1,
      alHoursPerWeek: 0
    }
  }
];
