import { ReferralCase, StudentNEAE } from '../types';

export const INITIAL_CASES: ReferralCase[] = [];

// Censo Oficial Completo de Alumnos de Apoyo y Diversidad (1º a 6º Primaria)
// Especialistas de PT oficiales del centro: Daniel Asenjo y Diego López (sin AL)
export const INITIAL_STUDENTS_NEAE: StudentNEAE[] = [
  {
    "id": "NEAE-01",
    "stage": "PRIMARIA",
    "name": "Daryel Augusto",
    "grade": "1º Educación Primaria A",
    "category": "ACNEAE - Apoyo Específico PT",
    "specificNeed": "TDAH (Déficit de Atención con Hiperactividad)",
    "tutor": "Tutor/a de 1º Educación Primaria A",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-02",
    "stage": "PRIMARIA",
    "name": "Daniel Sánchez Rubio",
    "grade": "1º Educación Primaria A",
    "category": "Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 1º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Profundización curricular, desarrollo de proyectos de investigación y enriquecimiento cognitivo (PIEC).",
      "methodologicalAdaptations": [
        "Actividades multinivel con desafíos opcionales de mayor profundidad conceptual.",
        "Evitar la repetición innecesaria de contenidos ya dominados; compactación curricular.",
        "Fomentar proyectos de investigación autónomos vinculados a sus centros de interés.",
        "Promover el pensamiento lateral, creativo y la resolución de problemas abiertos.",
        "Acompañamiento socioemocional para gestionar el perfeccionismo y la tolerancia al error."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Evaluación por proyectos, rúbricas abiertas y producciones creativas complejas.",
        "Valorar el pensamiento crítico, rigor metodológico y originalidad en las respuestas."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-03",
    "stage": "PRIMARIA",
    "name": "Sara Valentina Cuña",
    "grade": "1º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "Dislexia / Dificultades en Lectoescritura (DEA)",
    "tutor": "Tutor/a de 1º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Consolidación de la ruta fonológica y visual, automatización lectoescritora y compensación de fatiga lectora.",
      "methodologicalAdaptations": [
        "No forzar la lectura en voz alta delante del grupo clase sin preparación previa.",
        "Uso de textos con tipografía legible (OpenDyslexic / Arial 12-14pt), interlineado 1.5 y textos no justificados.",
        "Minimizar la copia innecesaria de la pizarra al cuaderno; facilitar fotocopias o esquemas.",
        "Permitir el uso de marcadores fluorescentes y guías de lectura durante la lectura individual.",
        "Supervisión individualizada del copiado de tareas y fechas de entrega en la agenda."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "No penalizar faltas de ortografía natural o arbitraria en contenidos no lingüísticos (Ciencias, Mates, etc.).",
        "Permitir que el profesorado lea los enunciados de las preguntas en voz alta antes del examen.",
        "Tiempo extra (25-30%) para la lectura y redacción en exámenes escritos, o alternativa oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-04",
    "stage": "PRIMARIA",
    "name": "Matías Chara Fuquene",
    "grade": "1º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "TDAH (Déficit de Atención e Impulsividad)",
    "tutor": "Tutor/a de 1º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-05",
    "stage": "PRIMARIA",
    "name": "Sophia Ferreira Dos Santos",
    "grade": "1º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 1º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-06",
    "stage": "PRIMARIA",
    "name": "Natalia Montserrat Funes Peña",
    "grade": "1º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 1º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-07",
    "stage": "PRIMARIA",
    "name": "Sebastián Hristov Kirov",
    "grade": "1º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "TDAH (Déficit de Atención e Impulsividad)",
    "tutor": "Tutor/a de 1º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-08",
    "stage": "PRIMARIA",
    "name": "Amaya Simbaña",
    "grade": "1º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Dislexia / Dificultades en Lectoescritura (DEA)",
    "tutor": "Tutor/a de 1º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Consolidación de la ruta fonológica y visual, automatización lectoescritora y compensación de fatiga lectora.",
      "methodologicalAdaptations": [
        "No forzar la lectura en voz alta delante del grupo clase sin preparación previa.",
        "Uso de textos con tipografía legible (OpenDyslexic / Arial 12-14pt), interlineado 1.5 y textos no justificados.",
        "Minimizar la copia innecesaria de la pizarra al cuaderno; facilitar fotocopias o esquemas.",
        "Permitir el uso de marcadores fluorescentes y guías de lectura durante la lectura individual.",
        "Supervisión individualizada del copiado de tareas y fechas de entrega en la agenda."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "No penalizar faltas de ortografía natural o arbitraria en contenidos no lingüísticos (Ciencias, Mates, etc.).",
        "Permitir que el profesorado lea los enunciados de las preguntas en voz alta antes del examen.",
        "Tiempo extra (25-30%) para la lectura y redacción en exámenes escritos, o alternativa oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-09",
    "stage": "PRIMARIA",
    "name": "Gabrieli Gachechiladze",
    "grade": "1º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 1º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-10",
    "stage": "PRIMARIA",
    "name": "Alejandro José",
    "grade": "1º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 1º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-11",
    "stage": "PRIMARIA",
    "name": "Carolina Carriel",
    "grade": "1º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 1º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-12",
    "stage": "PRIMARIA",
    "name": "Antoine Molinares Collantes",
    "grade": "2º Educación Primaria A",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "Trastorno Específico del Lenguaje (TEL/TDL)",
    "tutor": "Tutor/a de 2º Educación Primaria A",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-13",
    "stage": "PRIMARIA",
    "name": "Teresa Antonella Reyes Paredes",
    "grade": "2º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 2º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-14",
    "stage": "PRIMARIA",
    "name": "Caetana Chiara Herrera Navara",
    "grade": "2º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Dislexia / Dificultades en Lectoescritura (DEA)",
    "tutor": "Tutor/a de 2º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Consolidación de la ruta fonológica y visual, automatización lectoescritora y compensación de fatiga lectora.",
      "methodologicalAdaptations": [
        "No forzar la lectura en voz alta delante del grupo clase sin preparación previa.",
        "Uso de textos con tipografía legible (OpenDyslexic / Arial 12-14pt), interlineado 1.5 y textos no justificados.",
        "Minimizar la copia innecesaria de la pizarra al cuaderno; facilitar fotocopias o esquemas.",
        "Permitir el uso de marcadores fluorescentes y guías de lectura durante la lectura individual.",
        "Supervisión individualizada del copiado de tareas y fechas de entrega en la agenda."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "No penalizar faltas de ortografía natural o arbitraria en contenidos no lingüísticos (Ciencias, Mates, etc.).",
        "Permitir que el profesorado lea los enunciados de las preguntas en voz alta antes del examen.",
        "Tiempo extra (25-30%) para la lectura y redacción en exámenes escritos, o alternativa oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-15",
    "stage": "PRIMARIA",
    "name": "Mathias Andrei Ancuta",
    "grade": "2º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "TDAH (Déficit de Atención e Impulsividad)",
    "tutor": "Tutor/a de 2º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-16",
    "stage": "PRIMARIA",
    "name": "Marcos Sánchez de Agustín",
    "grade": "2º Educación Primaria A",
    "category": "Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 2º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Profundización curricular, desarrollo de proyectos de investigación y enriquecimiento cognitivo (PIEC).",
      "methodologicalAdaptations": [
        "Actividades multinivel con desafíos opcionales de mayor profundidad conceptual.",
        "Evitar la repetición innecesaria de contenidos ya dominados; compactación curricular.",
        "Fomentar proyectos de investigación autónomos vinculados a sus centros de interés.",
        "Promover el pensamiento lateral, creativo y la resolución de problemas abiertos.",
        "Acompañamiento socioemocional para gestionar el perfeccionismo y la tolerancia al error."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Evaluación por proyectos, rúbricas abiertas y producciones creativas complejas.",
        "Valorar el pensamiento crítico, rigor metodológico y originalidad en las respuestas."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-17",
    "stage": "PRIMARIA",
    "name": "Antonella Reyes",
    "grade": "2º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 2º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-18",
    "stage": "PRIMARIA",
    "name": "Scarlet Gómez Gregor",
    "grade": "2º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 2º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-19",
    "stage": "PRIMARIA",
    "name": "Diego A. Andrade López",
    "grade": "2º Educación Primaria B",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "Trastorno Específico del Lenguaje (TEL/TDL)",
    "tutor": "Tutor/a de 2º Educación Primaria B",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-20",
    "stage": "PRIMARIA",
    "name": "Jose Alejandro Foronda Laberiano",
    "grade": "2º Educación Primaria B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dificultades por Inatención (TDA Inatento)",
    "tutor": "Tutor/a de 2º Educación Primaria B",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-21",
    "stage": "PRIMARIA",
    "name": "Lenin Samuel Vinicio García",
    "grade": "2º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula",
    "tutor": "Tutor/a de 2º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-22",
    "stage": "PRIMARIA",
    "name": "Santiago Navas Rodríguez",
    "grade": "2º Educación Primaria B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Trastorno Específico del Lenguaje (TEL/TDL)",
    "tutor": "Tutor/a de 2º Educación Primaria B",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-23",
    "stage": "PRIMARIA",
    "name": "Juliette Cardoza Flores",
    "grade": "2º Educación Primaria C",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "Trastorno Específico del Lenguaje (TEL/TDL)",
    "tutor": "Tutor/a de 2º Educación Primaria C",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "Significativa (ACS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-24",
    "stage": "PRIMARIA",
    "name": "Oliver Luna López",
    "grade": "2º Educación Primaria C",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "Trastorno Específico del Lenguaje (TEL/TDL)",
    "tutor": "Tutor/a de 2º Educación Primaria C",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "Significativa (ACS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-25",
    "stage": "PRIMARIA",
    "name": "Carlos Recio Terrero",
    "grade": "2º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Dislexia / Dificultades en Lectoescritura (DEA)",
    "tutor": "Tutor/a de 2º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Consolidación de la ruta fonológica y visual, automatización lectoescritora y compensación de fatiga lectora.",
      "methodologicalAdaptations": [
        "No forzar la lectura en voz alta delante del grupo clase sin preparación previa.",
        "Uso de textos con tipografía legible (OpenDyslexic / Arial 12-14pt), interlineado 1.5 y textos no justificados.",
        "Minimizar la copia innecesaria de la pizarra al cuaderno; facilitar fotocopias o esquemas.",
        "Permitir el uso de marcadores fluorescentes y guías de lectura durante la lectura individual.",
        "Supervisión individualizada del copiado de tareas y fechas de entrega en la agenda."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "No penalizar faltas de ortografía natural o arbitraria en contenidos no lingüísticos (Ciencias, Mates, etc.).",
        "Permitir que el profesorado lea los enunciados de las preguntas en voz alta antes del examen.",
        "Tiempo extra (25-30%) para la lectura y redacción en exámenes escritos, o alternativa oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-26",
    "stage": "PRIMARIA",
    "name": "Nelliyah de la Cruz Tolomia",
    "grade": "2º Educación Primaria C",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Retraso del Lenguaje y Comunicación",
    "tutor": "Tutor/a de 2º Educación Primaria C",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-27",
    "stage": "PRIMARIA",
    "name": "Lorena Domínguez",
    "grade": "3º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Dislexia / Dificultades en Lectoescritura (DEA)",
    "tutor": "Tutor/a de 3º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Consolidación de la ruta fonológica y visual, automatización lectoescritora y compensación de fatiga lectora.",
      "methodologicalAdaptations": [
        "No forzar la lectura en voz alta delante del grupo clase sin preparación previa.",
        "Uso de textos con tipografía legible (OpenDyslexic / Arial 12-14pt), interlineado 1.5 y textos no justificados.",
        "Minimizar la copia innecesaria de la pizarra al cuaderno; facilitar fotocopias o esquemas.",
        "Permitir el uso de marcadores fluorescentes y guías de lectura durante la lectura individual.",
        "Supervisión individualizada del copiado de tareas y fechas de entrega en la agenda."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "No penalizar faltas de ortografía natural o arbitraria en contenidos no lingüísticos (Ciencias, Mates, etc.).",
        "Permitir que el profesorado lea los enunciados de las preguntas en voz alta antes del examen.",
        "Tiempo extra (25-30%) para la lectura y redacción en exámenes escritos, o alternativa oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-28",
    "stage": "PRIMARIA",
    "name": "María Mbengue López",
    "grade": "3º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Dislexia / Dificultades en Lectoescritura (DEA)",
    "tutor": "Tutor/a de 3º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Consolidación de la ruta fonológica y visual, automatización lectoescritora y compensación de fatiga lectora.",
      "methodologicalAdaptations": [
        "No forzar la lectura en voz alta delante del grupo clase sin preparación previa.",
        "Uso de textos con tipografía legible (OpenDyslexic / Arial 12-14pt), interlineado 1.5 y textos no justificados.",
        "Minimizar la copia innecesaria de la pizarra al cuaderno; facilitar fotocopias o esquemas.",
        "Permitir el uso de marcadores fluorescentes y guías de lectura durante la lectura individual.",
        "Supervisión individualizada del copiado de tareas y fechas de entrega en la agenda."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "No penalizar faltas de ortografía natural o arbitraria en contenidos no lingüísticos (Ciencias, Mates, etc.).",
        "Permitir que el profesorado lea los enunciados de las preguntas en voz alta antes del examen.",
        "Tiempo extra (25-30%) para la lectura y redacción en exámenes escritos, o alternativa oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-29",
    "stage": "PRIMARIA",
    "name": "Valentina Ferreira de Araujo",
    "grade": "3º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)",
    "tutor": "Tutor/a de 3º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-30",
    "stage": "PRIMARIA",
    "name": "Lennon Emir Aquino Mayorga",
    "grade": "3º Educación Primaria A",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH (Trastorno por Déficit de Atención e Hiperactividad)",
    "tutor": "Tutor/a de 3º Educación Primaria A",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-31",
    "stage": "PRIMARIA",
    "name": "Bickey Torres Huamán",
    "grade": "3º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "Dislexia / Dificultades en Lectoescritura (DEA)",
    "tutor": "Tutor/a de 3º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Consolidación de la ruta fonológica y visual, automatización lectoescritora y compensación de fatiga lectora.",
      "methodologicalAdaptations": [
        "No forzar la lectura en voz alta delante del grupo clase sin preparación previa.",
        "Uso de textos con tipografía legible (OpenDyslexic / Arial 12-14pt), interlineado 1.5 y textos no justificados.",
        "Minimizar la copia innecesaria de la pizarra al cuaderno; facilitar fotocopias o esquemas.",
        "Permitir el uso de marcadores fluorescentes y guías de lectura durante la lectura individual.",
        "Supervisión individualizada del copiado de tareas y fechas de entrega en la agenda."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "No penalizar faltas de ortografía natural o arbitraria en contenidos no lingüísticos (Ciencias, Mates, etc.).",
        "Permitir que el profesorado lea los enunciados de las preguntas en voz alta antes del examen.",
        "Tiempo extra (25-30%) para la lectura y redacción en exámenes escritos, o alternativa oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-32",
    "stage": "PRIMARIA",
    "name": "Edurne Antonella Chamorro",
    "grade": "3º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula",
    "tutor": "Tutor/a de 3º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-33",
    "stage": "PRIMARIA",
    "name": "Meghan Panche",
    "grade": "3º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula",
    "tutor": "Tutor/a de 3º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-34",
    "stage": "PRIMARIA",
    "name": "Lucía Zapata Pérez",
    "grade": "3º Educación Primaria B",
    "category": "Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 3º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Profundización curricular, desarrollo de proyectos de investigación y enriquecimiento cognitivo (PIEC).",
      "methodologicalAdaptations": [
        "Actividades multinivel con desafíos opcionales de mayor profundidad conceptual.",
        "Evitar la repetición innecesaria de contenidos ya dominados; compactación curricular.",
        "Fomentar proyectos de investigación autónomos vinculados a sus centros de interés.",
        "Promover el pensamiento lateral, creativo y la resolución de problemas abiertos.",
        "Acompañamiento socioemocional para gestionar el perfeccionismo y la tolerancia al error."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Evaluación por proyectos, rúbricas abiertas y producciones creativas complejas.",
        "Valorar el pensamiento crítico, rigor metodológico y originalidad en las respuestas."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-35",
    "stage": "PRIMARIA",
    "name": "Alexander Hritov Kirov",
    "grade": "3º Educación Primaria C",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "Trastorno Específico del Lenguaje (TEL/TDL)",
    "tutor": "Tutor/a de 3º Educación Primaria C",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "Significativa (ACS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-36",
    "stage": "PRIMARIA",
    "name": "Rodrigo Quiroz Muriel",
    "grade": "3º Educación Primaria C",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "Discapacidad Auditiva (Hipoacusia)",
    "tutor": "Tutor/a de 3º Educación Primaria C",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Garantizar el acceso íntegro a la información sonora del aula, lectura labiofacial y optimización acústica.",
      "methodologicalAdaptations": [
        "Ubicación en primera fila, con visión directa y frontal de los labios del docente.",
        "No hablar de espaldas a la clase mientras se escribe en la pizarra ni con objetos delante de la boca.",
        "Asegurar una iluminación adecuada sobre el rostro del docente para facilitar la lectura labiofacial.",
        "Uso de material subtitulado en proyecciones y vídeos; proporcionar resúmenes por escrito.",
        "Cuidado del ruido ambiente en el aula y comprobación periódica de la operatividad de audífonos."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Enunciados escritos con total claridad; apoyo del docente para clarificar vocabulario acústico complejo.",
        "Exención de pruebas auditivas directas sin adaptación y tiempo adicional para comprensión lectora."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-37",
    "stage": "PRIMARIA",
    "name": "Dhasa Bonilla Vera",
    "grade": "3º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 3º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-38",
    "stage": "PRIMARIA",
    "name": "Ambar El  Khamlichi Rodríguez",
    "grade": "3º Educación Primaria C",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dificultades por Inatención (TDA Inatento)",
    "tutor": "Tutor/a de 3º Educación Primaria C",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-39",
    "stage": "PRIMARIA",
    "name": "Aarón Miranda",
    "grade": "3º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "TDAH (Déficit de Atención e Impulsividad)",
    "tutor": "Tutor/a de 3º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-40",
    "stage": "PRIMARIA",
    "name": "Adrian Mateo Chuqimango Urbina",
    "grade": "4º Educación Primaria A",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "Trastorno Específico del Lenguaje (TEL/TDL)",
    "tutor": "Tutor/a de 4º Educación Primaria A",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-41",
    "stage": "PRIMARIA",
    "name": "Joshua Abarca Esparza",
    "grade": "4º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Dislexia / Dificultades en Lectoescritura (DEA)",
    "tutor": "Tutor/a de 4º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Consolidación de la ruta fonológica y visual, automatización lectoescritora y compensación de fatiga lectora.",
      "methodologicalAdaptations": [
        "No forzar la lectura en voz alta delante del grupo clase sin preparación previa.",
        "Uso de textos con tipografía legible (OpenDyslexic / Arial 12-14pt), interlineado 1.5 y textos no justificados.",
        "Minimizar la copia innecesaria de la pizarra al cuaderno; facilitar fotocopias o esquemas.",
        "Permitir el uso de marcadores fluorescentes y guías de lectura durante la lectura individual.",
        "Supervisión individualizada del copiado de tareas y fechas de entrega en la agenda."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "No penalizar faltas de ortografía natural o arbitraria en contenidos no lingüísticos (Ciencias, Mates, etc.).",
        "Permitir que el profesorado lea los enunciados de las preguntas en voz alta antes del examen.",
        "Tiempo extra (25-30%) para la lectura y redacción en exámenes escritos, o alternativa oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-42",
    "stage": "PRIMARIA",
    "name": "Dylan Villalba Giménez",
    "grade": "4º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "TDAH (Déficit de Atención e Impulsividad)",
    "tutor": "Tutor/a de 4º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-43",
    "stage": "PRIMARIA",
    "name": "Felicidad Mangasi",
    "grade": "4º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula",
    "tutor": "Tutor/a de 4º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-44",
    "stage": "PRIMARIA",
    "name": "David de Oliveia",
    "grade": "4º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula",
    "tutor": "Tutor/a de 4º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-45",
    "stage": "PRIMARIA",
    "name": "Zan Li",
    "grade": "4º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula",
    "tutor": "Tutor/a de 4º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-46",
    "stage": "PRIMARIA",
    "name": "Mateo Briceño Cruz",
    "grade": "4º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula",
    "tutor": "Tutor/a de 4º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-47",
    "stage": "PRIMARIA",
    "name": "Lucia Rojas",
    "grade": "4º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 4º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-48",
    "stage": "PRIMARIA",
    "name": "Piero Emir Alhuay Buitrón",
    "grade": "4º Educación Primaria B",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 4º Educación Primaria B",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Profundización curricular, desarrollo de proyectos de investigación y enriquecimiento cognitivo (PIEC).",
      "methodologicalAdaptations": [
        "Actividades multinivel con desafíos opcionales de mayor profundidad conceptual.",
        "Evitar la repetición innecesaria de contenidos ya dominados; compactación curricular.",
        "Fomentar proyectos de investigación autónomos vinculados a sus centros de interés.",
        "Promover el pensamiento lateral, creativo y la resolución de problemas abiertos.",
        "Acompañamiento socioemocional para gestionar el perfeccionismo y la tolerancia al error."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Evaluación por proyectos, rúbricas abiertas y producciones creativas complejas.",
        "Valorar el pensamiento crítico, rigor metodológico y originalidad en las respuestas."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-49",
    "stage": "PRIMARIA",
    "name": "Pablo Sánchez",
    "grade": "4º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "TDAH (Déficit de Atención e Impulsividad)",
    "tutor": "Tutor/a de 4º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-50",
    "stage": "PRIMARIA",
    "name": "Mia Ramírez Vivancos",
    "grade": "4º Educación Primaria C",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dificultades Específicas de Aprendizaje (DEA)",
    "tutor": "Tutor/a de 4º Educación Primaria C",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-51",
    "stage": "PRIMARIA",
    "name": "María Arribas del Castillo",
    "grade": "4º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Dislexia / Dificultades en Lectoescritura (DEA)",
    "tutor": "Tutor/a de 4º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Consolidación de la ruta fonológica y visual, automatización lectoescritora y compensación de fatiga lectora.",
      "methodologicalAdaptations": [
        "No forzar la lectura en voz alta delante del grupo clase sin preparación previa.",
        "Uso de textos con tipografía legible (OpenDyslexic / Arial 12-14pt), interlineado 1.5 y textos no justificados.",
        "Minimizar la copia innecesaria de la pizarra al cuaderno; facilitar fotocopias o esquemas.",
        "Permitir el uso de marcadores fluorescentes y guías de lectura durante la lectura individual.",
        "Supervisión individualizada del copiado de tareas y fechas de entrega en la agenda."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "No penalizar faltas de ortografía natural o arbitraria en contenidos no lingüísticos (Ciencias, Mates, etc.).",
        "Permitir que el profesorado lea los enunciados de las preguntas en voz alta antes del examen.",
        "Tiempo extra (25-30%) para la lectura y redacción en exámenes escritos, o alternativa oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-52",
    "stage": "PRIMARIA",
    "name": "Ana Ortiz",
    "grade": "4º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)",
    "tutor": "Tutor/a de 4º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-53",
    "stage": "PRIMARIA",
    "name": "Candela Rubio Garcia",
    "grade": "4º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)",
    "tutor": "Tutor/a de 4º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-54",
    "stage": "PRIMARIA",
    "name": "Victor Wanarski",
    "grade": "4º Educación Primaria C",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH (Trastorno por Déficit de Atención e Hiperactividad)",
    "tutor": "Tutor/a de 4º Educación Primaria C",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-55",
    "stage": "PRIMARIA",
    "name": "Leo Ramajo García",
    "grade": "4º Educación Primaria C",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 4º Educación Primaria C",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Profundización curricular, desarrollo de proyectos de investigación y enriquecimiento cognitivo (PIEC).",
      "methodologicalAdaptations": [
        "Actividades multinivel con desafíos opcionales de mayor profundidad conceptual.",
        "Evitar la repetición innecesaria de contenidos ya dominados; compactación curricular.",
        "Fomentar proyectos de investigación autónomos vinculados a sus centros de interés.",
        "Promover el pensamiento lateral, creativo y la resolución de problemas abiertos.",
        "Acompañamiento socioemocional para gestionar el perfeccionismo y la tolerancia al error."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Evaluación por proyectos, rúbricas abiertas y producciones creativas complejas.",
        "Valorar el pensamiento crítico, rigor metodológico y originalidad en las respuestas."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-56",
    "stage": "PRIMARIA",
    "name": "Jhonatan Aaron Chino Camacho",
    "grade": "5º Educación Primaria A",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "Trastorno Específico del Lenguaje (TEL/TDL)",
    "tutor": "Tutor/a de 5º Educación Primaria A",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-57",
    "stage": "PRIMARIA",
    "name": "Pablo Martínez Cobos",
    "grade": "5º Educación Primaria A",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dislexia y Dificultades Atencionales (TDA)",
    "tutor": "Tutor/a de 5º Educación Primaria A",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Consolidación de la ruta fonológica y visual, automatización lectoescritora y compensación de fatiga lectora.",
      "methodologicalAdaptations": [
        "No forzar la lectura en voz alta delante del grupo clase sin preparación previa.",
        "Uso de textos con tipografía legible (OpenDyslexic / Arial 12-14pt), interlineado 1.5 y textos no justificados.",
        "Minimizar la copia innecesaria de la pizarra al cuaderno; facilitar fotocopias o esquemas.",
        "Permitir el uso de marcadores fluorescentes y guías de lectura durante la lectura individual.",
        "Supervisión individualizada del copiado de tareas y fechas de entrega en la agenda."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "No penalizar faltas de ortografía natural o arbitraria en contenidos no lingüísticos (Ciencias, Mates, etc.).",
        "Permitir que el profesorado lea los enunciados de las preguntas en voz alta antes del examen.",
        "Tiempo extra (25-30%) para la lectura y redacción en exámenes escritos, o alternativa oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-58",
    "stage": "PRIMARIA",
    "name": "Abril García",
    "grade": "5º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 5º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-59",
    "stage": "PRIMARIA",
    "name": "María Alonso Garrote",
    "grade": "5º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula",
    "tutor": "Tutor/a de 5º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-60",
    "stage": "PRIMARIA",
    "name": "Gisela Silva",
    "grade": "5º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula",
    "tutor": "Tutor/a de 5º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-61",
    "stage": "PRIMARIA",
    "name": "Paula Margarita Vinicio",
    "grade": "5º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 5º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-62",
    "stage": "PRIMARIA",
    "name": "Manuel Aranda",
    "grade": "5º Educación Primaria B",
    "category": "ACNEAE - Apoyo Específico PT",
    "specificNeed": "Dificultades en Razonamiento Matemático (Discalculia)",
    "tutor": "Tutor/a de 5º Educación Primaria B",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-63",
    "stage": "PRIMARIA",
    "name": "David Velasco Correa",
    "grade": "5º Educación Primaria B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dificultades por Inatención (TDA Inatento)",
    "tutor": "Tutor/a de 5º Educación Primaria B",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-64",
    "stage": "PRIMARIA",
    "name": "Lioenl Roberth Michel Ovando",
    "grade": "5º Educación Primaria B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH y Trastorno del Lenguaje (TEL)",
    "tutor": "Tutor/a de 5º Educación Primaria B",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-65",
    "stage": "PRIMARIA",
    "name": "Andrea García Fernández",
    "grade": "5º Educación Primaria B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH (Trastorno por Déficit de Atención e Hiperactividad)",
    "tutor": "Tutor/a de 5º Educación Primaria B",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-66",
    "stage": "PRIMARIA",
    "name": "Jichen Li",
    "grade": "5º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula",
    "tutor": "Tutor/a de 5º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-67",
    "stage": "PRIMARIA",
    "name": "Olivia de las Muelas",
    "grade": "5º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 5º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-68",
    "stage": "PRIMARIA",
    "name": "Rocío López Castillo",
    "grade": "5º Educación Primaria C",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dislexia / DEA (Lectoescritura)",
    "tutor": "Tutor/a de 5º Educación Primaria C",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Consolidación de la ruta fonológica y visual, automatización lectoescritora y compensación de fatiga lectora.",
      "methodologicalAdaptations": [
        "No forzar la lectura en voz alta delante del grupo clase sin preparación previa.",
        "Uso de textos con tipografía legible (OpenDyslexic / Arial 12-14pt), interlineado 1.5 y textos no justificados.",
        "Minimizar la copia innecesaria de la pizarra al cuaderno; facilitar fotocopias o esquemas.",
        "Permitir el uso de marcadores fluorescentes y guías de lectura durante la lectura individual.",
        "Supervisión individualizada del copiado de tareas y fechas de entrega en la agenda."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "No penalizar faltas de ortografía natural o arbitraria en contenidos no lingüísticos (Ciencias, Mates, etc.).",
        "Permitir que el profesorado lea los enunciados de las preguntas en voz alta antes del examen.",
        "Tiempo extra (25-30%) para la lectura y redacción en exámenes escritos, o alternativa oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-69",
    "stage": "PRIMARIA",
    "name": "Camila Suarez",
    "grade": "5º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Dislexia / Dificultades en Lectoescritura (DEA)",
    "tutor": "Tutor/a de 5º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Consolidación de la ruta fonológica y visual, automatización lectoescritora y compensación de fatiga lectora.",
      "methodologicalAdaptations": [
        "No forzar la lectura en voz alta delante del grupo clase sin preparación previa.",
        "Uso de textos con tipografía legible (OpenDyslexic / Arial 12-14pt), interlineado 1.5 y textos no justificados.",
        "Minimizar la copia innecesaria de la pizarra al cuaderno; facilitar fotocopias o esquemas.",
        "Permitir el uso de marcadores fluorescentes y guías de lectura durante la lectura individual.",
        "Supervisión individualizada del copiado de tareas y fechas de entrega en la agenda."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "No penalizar faltas de ortografía natural o arbitraria en contenidos no lingüísticos (Ciencias, Mates, etc.).",
        "Permitir que el profesorado lea los enunciados de las preguntas en voz alta antes del examen.",
        "Tiempo extra (25-30%) para la lectura y redacción en exámenes escritos, o alternativa oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-70",
    "stage": "PRIMARIA",
    "name": "Alejandra Tello",
    "grade": "5º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)",
    "tutor": "Tutor/a de 5º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-71",
    "stage": "PRIMARIA",
    "name": "Paula Zapata Pérez",
    "grade": "5º Educación Primaria C",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 5º Educación Primaria C",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Profundización curricular, desarrollo de proyectos de investigación y enriquecimiento cognitivo (PIEC).",
      "methodologicalAdaptations": [
        "Actividades multinivel con desafíos opcionales de mayor profundidad conceptual.",
        "Evitar la repetición innecesaria de contenidos ya dominados; compactación curricular.",
        "Fomentar proyectos de investigación autónomos vinculados a sus centros de interés.",
        "Promover el pensamiento lateral, creativo y la resolución de problemas abiertos.",
        "Acompañamiento socioemocional para gestionar el perfeccionismo y la tolerancia al error."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Evaluación por proyectos, rúbricas abiertas y producciones creativas complejas.",
        "Valorar el pensamiento crítico, rigor metodológico y originalidad en las respuestas."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-72",
    "stage": "PRIMARIA",
    "name": "Alma Mía",
    "grade": "5º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)",
    "tutor": "Tutor/a de 5º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-73",
    "stage": "PRIMARIA",
    "name": "Darío Verdasco Venegas",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TEA (Autismo) y TDAH (Atención e Hiperactividad)",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-74",
    "stage": "PRIMARIA",
    "name": "Ysabella Ariana Cardoza Flores",
    "grade": "6º Educación Primaria A",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "TEA (Trastorno del Espectro Autista)",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "Significativa (ACS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Estructuración del entorno, anticipación de rutinas y apoyo en comunicación social y flexibilidad cognitiva.",
      "methodologicalAdaptations": [
        "Anticipación clara y visual de la jornada escolar y de cualquier cambio imprevisto de rutina.",
        "Lenguaje directo, conciso y literal, evitando dobles sentidos, metáforas confusas o ironías.",
        "Rincón o espacio de descompresión sensorial para momentos de sobrecarga o autorregulación.",
        "Facilitación explícita de dinámicas de juego cooperativo y trabajo en pequeños grupos guiados.",
        "Uso sistemático de apoyos visuales y pictogramas para secuenciar actividades complejas."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Preguntas con enunciados breves, unívocos y libres de ambigüedad.",
        "Posibilidad de responder en formato oral o con apoyo digital si hay fatiga grafomotora.",
        "Realización de pruebas en un entorno tranquilo y libre de sobrecarga acústica."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-75",
    "stage": "PRIMARIA",
    "name": "Valle Castrejón Rex",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH (Trastorno por Déficit de Atención e Hiperactividad)",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-76",
    "stage": "PRIMARIA",
    "name": "Arturo Arribas Casado",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH, Dislexia y Disortografía",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-77",
    "stage": "PRIMARIA",
    "name": "Pedro Prior Gómez de Ramón",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Profundización curricular, desarrollo de proyectos de investigación y enriquecimiento cognitivo (PIEC).",
      "methodologicalAdaptations": [
        "Actividades multinivel con desafíos opcionales de mayor profundidad conceptual.",
        "Evitar la repetición innecesaria de contenidos ya dominados; compactación curricular.",
        "Fomentar proyectos de investigación autónomos vinculados a sus centros de interés.",
        "Promover el pensamiento lateral, creativo y la resolución de problemas abiertos.",
        "Acompañamiento socioemocional para gestionar el perfeccionismo y la tolerancia al error."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Evaluación por proyectos, rúbricas abiertas y producciones creativas complejas.",
        "Valorar el pensamiento crítico, rigor metodológico y originalidad en las respuestas."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-78",
    "stage": "PRIMARIA",
    "name": "Liah Vanegas",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Dislexia / Dificultades en Lectoescritura (DEA)",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Consolidación de la ruta fonológica y visual, automatización lectoescritora y compensación de fatiga lectora.",
      "methodologicalAdaptations": [
        "No forzar la lectura en voz alta delante del grupo clase sin preparación previa.",
        "Uso de textos con tipografía legible (OpenDyslexic / Arial 12-14pt), interlineado 1.5 y textos no justificados.",
        "Minimizar la copia innecesaria de la pizarra al cuaderno; facilitar fotocopias o esquemas.",
        "Permitir el uso de marcadores fluorescentes y guías de lectura durante la lectura individual.",
        "Supervisión individualizada del copiado de tareas y fechas de entrega en la agenda."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "No penalizar faltas de ortografía natural o arbitraria en contenidos no lingüísticos (Ciencias, Mates, etc.).",
        "Permitir que el profesorado lea los enunciados de las preguntas en voz alta antes del examen.",
        "Tiempo extra (25-30%) para la lectura y redacción en exámenes escritos, o alternativa oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-79",
    "stage": "PRIMARIA",
    "name": "Enma Bullido",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-80",
    "stage": "PRIMARIA",
    "name": "Antonio Ortiz",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-81",
    "stage": "PRIMARIA",
    "name": "Leo Mendieta",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "TDAH (Déficit de Atención e Impulsividad)",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-82",
    "stage": "PRIMARIA",
    "name": "Salvador Gómez Berzosa",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH y Dificultades de Aprendizaje",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-83",
    "stage": "PRIMARIA",
    "name": "Carlos Renato Paz Castillo",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH y Dificultades de Aprendizaje",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-84",
    "stage": "PRIMARIA",
    "name": "Marcelo Trinidad Santalla",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH (Trastorno por Déficit de Atención e Hiperactividad)",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-85",
    "stage": "PRIMARIA",
    "name": "Daniel Moreno González",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH (Trastorno por Déficit de Atención e Hiperactividad)",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-86",
    "stage": "PRIMARIA",
    "name": "Luis Pérez de la Torre",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Trastorno del Lenguaje (TEL) y Dificultades Atencionales",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-87",
    "stage": "PRIMARIA",
    "name": "Ana Calzadilla Páramo",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dificultades Específicas de Aprendizaje (DEA)",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-88",
    "stage": "PRIMARIA",
    "name": "Alma Villa Estevez",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Profundización curricular, desarrollo de proyectos de investigación y enriquecimiento cognitivo (PIEC).",
      "methodologicalAdaptations": [
        "Actividades multinivel con desafíos opcionales de mayor profundidad conceptual.",
        "Evitar la repetición innecesaria de contenidos ya dominados; compactación curricular.",
        "Fomentar proyectos de investigación autónomos vinculados a sus centros de interés.",
        "Promover el pensamiento lateral, creativo y la resolución de problemas abiertos.",
        "Acompañamiento socioemocional para gestionar el perfeccionismo y la tolerancia al error."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Evaluación por proyectos, rúbricas abiertas y producciones creativas complejas.",
        "Valorar el pensamiento crítico, rigor metodológico y originalidad en las respuestas."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-89",
    "stage": "PRIMARIA",
    "name": "Larysa Araujo",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-90",
    "stage": "PRIMARIA",
    "name": "Álvaro Lionel Astupiña Chavesta",
    "grade": "6º Educación Primaria C",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "Trastorno del Lenguaje (TEL) y Dificultades Atencionales",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-91",
    "stage": "PRIMARIA",
    "name": "Mª Laura Gonzáles Chavarria",
    "grade": "6º Educación Primaria C",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "Trastorno Específico del Lenguaje (TEL/TDL)",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-92",
    "stage": "PRIMARIA",
    "name": "María Cantero Pérez",
    "grade": "6º Educación Primaria C",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "TDAH y Trastorno del Lenguaje (TEL)",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-93",
    "stage": "PRIMARIA",
    "name": "Cristhian Histrov Kirov",
    "grade": "6º Educación Primaria C",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "Trastorno Específico del Lenguaje (TEL/TDL)",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-94",
    "stage": "PRIMARIA",
    "name": "Daniel Simbaña Álvaro",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dificultades Específicas de Aprendizaje (DEA)",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-95",
    "stage": "PRIMARIA",
    "name": "Dariusz Oberlander Testillano",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH, Dislexia y Dislalia",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-96",
    "stage": "PRIMARIA",
    "name": "Aramis Cano",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-97",
    "stage": "PRIMARIA",
    "name": "Miranda Rodríguez",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-98",
    "stage": "PRIMARIA",
    "name": "Anthony Calderón",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "TDAH (Déficit de Atención e Impulsividad)",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-99",
    "stage": "PRIMARIA",
    "name": "Yun Zhu",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-100",
    "stage": "PRIMARIA",
    "name": "Jeff Celso Vargas Villaroel",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dificultades Atencionales (TDA) y Emocionales",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-101",
    "stage": "PRIMARIA",
    "name": "Sara Etma",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-102",
    "stage": "PRIMARIA",
    "name": "Alex Rodríguez Martín",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-103",
    "stage": "PRIMARIA",
    "name": "Santiago Vidal Ruiz",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "specificNeed": "Seguimiento y Refuerzo en Tutoría",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-104",
    "stage": "PRIMARIA",
    "name": "Adriel Salgado Santamaría",
    "grade": "2º Educación Primaria C",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Trastorno Específico del Lenguaje (TEL/TDL)",
    "tutor": "Tutor/a de 2º Educación Primaria C",
    "ptTeacher": null,
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-105",
    "stage": "PRIMARIA",
    "name": "Emilio Nicolás Robles",
    "grade": "4º Educación Primaria A",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "Trastorno Específico del Lenguaje (TEL/TDL)",
    "tutor": "Tutor/a de 4º Educación Primaria A",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-106",
    "stage": "PRIMARIA",
    "name": "Joao Freitas de Oliveira",
    "grade": "5º Educación Primaria B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH (Trastorno por Déficit de Atención e Hiperactividad)",
    "tutor": "Tutor/a de 5º Educación Primaria B",
    "ptTeacher": null,
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-107",
    "stage": "SECUNDARIA",
    "name": "Miguel Martínez Cobos",
    "grade": "1º ESO A",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "TEA, TEL, TDAH y Dificultades de Aprendizaje",
    "tutor": "Tutor/a de 1º ESO A",
    "ptTeacher": null,
    "curricularAdaptation": "Significativa (ACS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-108",
    "stage": "SECUNDARIA",
    "name": "Candela Castrejón Quintana",
    "grade": "1º ESO A",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dificultades Específicas de Aprendizaje (DEA)",
    "tutor": "Tutor/a de 1º ESO A",
    "ptTeacher": null,
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-109",
    "stage": "SECUNDARIA",
    "name": "Valentina Kate Sánchez",
    "grade": "1º ESO A",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dificultades Articuladoras (Dislalia)",
    "tutor": "Tutor/a de 1º ESO A",
    "ptTeacher": null,
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-110",
    "stage": "SECUNDARIA",
    "name": "Paulo Pereira Caballero",
    "grade": "1º ESO A",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dificultades Específicas de Aprendizaje (DEA)",
    "tutor": "Tutor/a de 1º ESO A",
    "ptTeacher": null,
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-111",
    "stage": "SECUNDARIA",
    "name": "Mayra Angélica Calapiña Ramírez",
    "grade": "1º ESO A",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Condición Personal de Salud",
    "tutor": "Tutor/a de 1º ESO A",
    "ptTeacher": null,
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-112",
    "stage": "SECUNDARIA",
    "name": "Aldara Lázaro Gutiérrez",
    "grade": "1º ESO B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH y Dificultades de Aprendizaje",
    "tutor": "Tutor/a de 1º ESO B",
    "ptTeacher": null,
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-113",
    "stage": "SECUNDARIA",
    "name": "Daniel Rubio Jiménez",
    "grade": "1º ESO B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TEA, TEL, TDAH y Dificultades de Aprendizaje",
    "tutor": "Tutor/a de 1º ESO B",
    "ptTeacher": null,
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-114",
    "stage": "SECUNDARIA",
    "name": "Alexa Dayanara",
    "grade": "1º ESO B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Trastorno Específico del Lenguaje (TEL/TDL)",
    "tutor": "Tutor/a de 1º ESO B",
    "ptTeacher": null,
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Desarrollo de la competencia lingüística funcional, ampliación de léxico y comprensión morfosintáctica.",
      "methodologicalAdaptations": [
        "Hablar a velocidad moderada, con articulación clara y contacto visual directo.",
        "Acompañar las explicaciones orales siempre con imágenes, diagramas y apoyos visuales concretos.",
        "Dar tiempo de respuesta suficiente (no interrumpir ni terminar sus frases de forma precipitada).",
        "Reformulación positiva y modelado lingüístico correcto sin penalización ni reproche en público.",
        "Verificar la comprensión de consignas complejas pidiéndole que explique con sus palabras la tarea."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del formato de enunciados: vocabulario accesible, tipografía clara e ilustraciones de apoyo.",
        "Priorizar la evaluación del contenido de la respuesta por encima de incorrecciones morfosintácticas.",
        "Facilitar opciones de respuesta tipo test, emparejamiento o evaluación oral."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-115",
    "stage": "SECUNDARIA",
    "name": "Enrique Parra Jiménez",
    "grade": "1º ESO B",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dificultades por Inatención (TDA Inatento)",
    "tutor": "Tutor/a de 1º ESO B",
    "ptTeacher": null,
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-116",
    "stage": "SECUNDARIA",
    "name": "Dérek de Léon Sepúlveda",
    "grade": "1º ESO C",
    "category": "ACNEE (Necesidades Educativas Especiales)",
    "specificNeed": "Trastorno de Conducta y TDAH",
    "tutor": "Tutor/a de 1º ESO C",
    "ptTeacher": null,
    "curricularAdaptation": "Significativa (ACS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-117",
    "stage": "SECUNDARIA",
    "name": "Javier Villa Esteves",
    "grade": "1º ESO C",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 1º ESO C",
    "ptTeacher": null,
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Profundización curricular, desarrollo de proyectos de investigación y enriquecimiento cognitivo (PIEC).",
      "methodologicalAdaptations": [
        "Actividades multinivel con desafíos opcionales de mayor profundidad conceptual.",
        "Evitar la repetición innecesaria de contenidos ya dominados; compactación curricular.",
        "Fomentar proyectos de investigación autónomos vinculados a sus centros de interés.",
        "Promover el pensamiento lateral, creativo y la resolución de problemas abiertos.",
        "Acompañamiento socioemocional para gestionar el perfeccionismo y la tolerancia al error."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Evaluación por proyectos, rúbricas abiertas y producciones creativas complejas.",
        "Valorar el pensamiento crítico, rigor metodológico y originalidad en las respuestas."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-118",
    "stage": "SECUNDARIA",
    "name": "Guillermo Guerrero Rodríguez",
    "grade": "1º ESO C",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "TDAH (Trastorno por Déficit de Atención e Hiperactividad)",
    "tutor": "Tutor/a de 1º ESO C",
    "ptTeacher": null,
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Mejora de las funciones ejecutivas, autorregulación atencional y estructura operativa en las tareas escolares.",
      "methodologicalAdaptations": [
        "Ubicación preferente en el aula: primera fila, alejado de distractores visuales y ruidos.",
        "Fraccionamiento de instrucciones largas en pasos secuenciales con comprobación de comprensión.",
        "Uso de apoyos visuales: organizadores gráficos, listas de cotejo ('checklist') y temporizador visual.",
        "Refuerzo positivo contingente y frecuente ante el inicio y mantenimiento de la tarea.",
        "Supervisión discreta de la agenda escolar y los materiales de trabajo al terminar la sesión."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Fraccionamiento de exámenes en dos partes o reducción del número de ítems por página.",
        "Permitir lectura en voz baja o uso de marcapáginas/regla durante la lectura de enunciados.",
        "Tiempo adicional (+25% a +50%) y supervisión para verificar que no deje preguntas en blanco."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  },
  {
    "id": "NEAE-119",
    "stage": "SECUNDARIA",
    "name": "Alexander Florín Bolache",
    "grade": "1º ESO C",
    "category": "ACNEAE (Necesidades Específicas de Apoyo Educativo)",
    "specificNeed": "Dificultades Específicas de Aprendizaje (DEA)",
    "tutor": "Tutor/a de 1º ESO C",
    "ptTeacher": null,
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado en áreas instrumentales (Lengua y Matemáticas) y consolidación de hábitos de trabajo.",
      "methodologicalAdaptations": [
        "Explicación guiada en pequeños grupos de refuerzo dentro o fuera del aula.",
        "Supervisión constante del inicio y seguimiento de las actividades de clase.",
        "Uso de material manipulativo y cálculo asistido con apoyos concretos.",
        "Coordinación estrecha y sistemática entre tutoría y profesorado de apoyo.",
        "Refuerzo de la autoestima escolar y motivación hacia el aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en el aula ordinaria favoreciendo la concentración y el acceso al docente.",
        "Control de estímulos distractores y ambiente de trabajo estructurado y predecible.",
        "Disponibilidad de material de apoyo en mesa accesible y organizado."
      ],
      "evaluationAdaptations": [
        "Adaptación del nivel de dificultad en ítems no esenciales y supervisión durante las pruebas.",
        "Valoración continua del progreso individual y esfuerzo demostrado."
      ],
      "emotionalTips": [
        "Refuerzo explícito de los logros y del esfuerzo continuado.",
        "Fomentar la participación activa en el grupo clase sin exposición a situaciones de fracaso público.",
        "Mantener una comunicación cálida, empática y de altas expectativas adaptadas."
      ]
    },
    "quarterlyReviews": []
  }
];
