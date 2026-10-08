import { ReferralCase, StudentNEAE } from '../types';

export const INITIAL_CASES: ReferralCase[] = [];

// Censo Oficial Completo de Alumnos de Apoyo (1º a 6º de Educación Primaria)
// Importado del documento oficial de Atención a la Diversidad del Colegio San Buenaventura
export const INITIAL_STUDENTS_NEAE: StudentNEAE[] = [
  {
    "id": "NEAE-01",
    "stage": "PRIMARIA",
    "name": "Daryel Augusto",
    "grade": "1º Educación Primaria A",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 1ºA",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-02",
    "stage": "PRIMARIA",
    "name": "Daniel Sánchez Rubio",
    "grade": "1º Educación Primaria A",
    "category": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 1ºA",
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Programa de enriquecimiento curricular, ampliación vertical/horizontal y fomento del pensamiento creativo.",
      "methodologicalAdaptations": [
        "Propuesta de tareas de ampliación e investigación cuando finalice el trabajo básico.",
        "Proyectos de aprendizaje por descubrimiento y retos de razonamiento.",
        "Evitar la repetición mecánica de ejercicios ya dominados.",
        "Flexibilidad en la elección de formatos de entrega de trabajos."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Evaluación basada en rúbricas de enriquecimiento y proyectos creativos.",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 0,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Altas Capacidades Intelectuales (AACC)"
  },
  {
    "id": "NEAE-03",
    "stage": "PRIMARIA",
    "name": "Sara Valentina Cuña",
    "grade": "1º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 1ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-04",
    "stage": "PRIMARIA",
    "name": "Matías Chara Fuquene",
    "grade": "1º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 1ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-05",
    "stage": "PRIMARIA",
    "name": "Sophia Ferreira Dos Santos",
    "grade": "1º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 1ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-06",
    "stage": "PRIMARIA",
    "name": "Natalia Montserrat Funes Peña",
    "grade": "1º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 1ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-07",
    "stage": "PRIMARIA",
    "name": "Sebastián Hristov Kirov",
    "grade": "1º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 1ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-08",
    "stage": "PRIMARIA",
    "name": "Amaya Simbaña",
    "grade": "1º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 1ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-09",
    "stage": "PRIMARIA",
    "name": "Gabrieli Gachechiladze",
    "grade": "1º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 1ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-10",
    "stage": "PRIMARIA",
    "name": "Alejandro José",
    "grade": "1º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 1ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-11",
    "stage": "PRIMARIA",
    "name": "Carolina Carriel",
    "grade": "1º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 1ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-12",
    "stage": "PRIMARIA",
    "name": "Antoine Molinares Collantes",
    "grade": "2º Educación Primaria A",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 2ºA",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-13",
    "stage": "PRIMARIA",
    "name": "Teresa Antonella Reyes Paredes",
    "grade": "2º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 2ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-14",
    "stage": "PRIMARIA",
    "name": "Caetana Chiara Herrera Navara",
    "grade": "2º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 2ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-15",
    "stage": "PRIMARIA",
    "name": "Mathias Andrei Ancuta",
    "grade": "2º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 2ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-16",
    "stage": "PRIMARIA",
    "name": "Marcos Sánchez de Agustín",
    "grade": "2º Educación Primaria A",
    "category": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 2ºA",
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Programa de enriquecimiento curricular, ampliación vertical/horizontal y fomento del pensamiento creativo.",
      "methodologicalAdaptations": [
        "Propuesta de tareas de ampliación e investigación cuando finalice el trabajo básico.",
        "Proyectos de aprendizaje por descubrimiento y retos de razonamiento.",
        "Evitar la repetición mecánica de ejercicios ya dominados.",
        "Flexibilidad en la elección de formatos de entrega de trabajos."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Evaluación basada en rúbricas de enriquecimiento y proyectos creativos.",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 0,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Altas Capacidades Intelectuales (AACC)"
  },
  {
    "id": "NEAE-17",
    "stage": "PRIMARIA",
    "name": "Antonella Reyes",
    "grade": "2º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 2ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-18",
    "stage": "PRIMARIA",
    "name": "Scarlet Gómez Gregor",
    "grade": "2º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 2ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-19",
    "stage": "PRIMARIA",
    "name": "Diego Andrade",
    "grade": "2º Educación Primaria B",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 2ºB",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-20",
    "stage": "PRIMARIA",
    "name": "Jose Alejandro Foronda Laberiano",
    "grade": "2º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 2ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-21",
    "stage": "PRIMARIA",
    "name": "Lenin Samuel Vinicio García",
    "grade": "2º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 2ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-22",
    "stage": "PRIMARIA",
    "name": "Santiago Navas Rodríguez",
    "grade": "2º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 2ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-23",
    "stage": "PRIMARIA",
    "name": "Juliette Cardoza",
    "grade": "2º Educación Primaria C",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 2ºC",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-24",
    "stage": "PRIMARIA",
    "name": "Oliver Luna",
    "grade": "2º Educación Primaria C",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 2ºC",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-25",
    "stage": "PRIMARIA",
    "name": "Carlos Recio Terrero",
    "grade": "2º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 2ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-26",
    "stage": "PRIMARIA",
    "name": "Nellyah De la Cruz Tolomia",
    "grade": "2º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 2ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-27",
    "stage": "PRIMARIA",
    "name": "Lorena Domínguez",
    "grade": "3º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 3ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-28",
    "stage": "PRIMARIA",
    "name": "María Mbengue López",
    "grade": "3º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 3ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-29",
    "stage": "PRIMARIA",
    "name": "Valentina Ferreira de Araujo",
    "grade": "3º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 3ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-30",
    "stage": "PRIMARIA",
    "name": "Lennon Emir",
    "grade": "3º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 3ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-31",
    "stage": "PRIMARIA",
    "name": "Bickey Torres Huamán",
    "grade": "3º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 3ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-32",
    "stage": "PRIMARIA",
    "name": "Edurne Antonella Chamorro",
    "grade": "3º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 3ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-33",
    "stage": "PRIMARIA",
    "name": "Meghan Panche",
    "grade": "3º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 3ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-34",
    "stage": "PRIMARIA",
    "name": "Lucía Zapata Pérez",
    "grade": "3º Educación Primaria B",
    "category": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 3ºB",
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Programa de enriquecimiento curricular, ampliación vertical/horizontal y fomento del pensamiento creativo.",
      "methodologicalAdaptations": [
        "Propuesta de tareas de ampliación e investigación cuando finalice el trabajo básico.",
        "Proyectos de aprendizaje por descubrimiento y retos de razonamiento.",
        "Evitar la repetición mecánica de ejercicios ya dominados.",
        "Flexibilidad en la elección de formatos de entrega de trabajos."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Evaluación basada en rúbricas de enriquecimiento y proyectos creativos.",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 0,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Altas Capacidades Intelectuales (AACC)"
  },
  {
    "id": "NEAE-35",
    "stage": "PRIMARIA",
    "name": "Alexander Hristov",
    "grade": "3º Educación Primaria C",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 3ºC",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-36",
    "stage": "PRIMARIA",
    "name": "Rodrigo Quiroz",
    "grade": "3º Educación Primaria C",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 3ºC",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-37",
    "stage": "PRIMARIA",
    "name": "Dhasa Bonilla Vera",
    "grade": "3º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 3ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-38",
    "stage": "PRIMARIA",
    "name": "Ambar El  Khamlichi Rodríguez",
    "grade": "3º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 3ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-39",
    "stage": "PRIMARIA",
    "name": "Aarón Miranda",
    "grade": "3º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 3ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-40",
    "stage": "PRIMARIA",
    "name": "Adrian Chuquimango",
    "grade": "4º Educación Primaria A",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 4ºA",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-41",
    "stage": "PRIMARIA",
    "name": "Joshua Abarca Esparza",
    "grade": "4º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 4ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-42",
    "stage": "PRIMARIA",
    "name": "Dylan Villalba Giménez",
    "grade": "4º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 4ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-43",
    "stage": "PRIMARIA",
    "name": "Felicidad Mangasi",
    "grade": "4º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 4ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-44",
    "stage": "PRIMARIA",
    "name": "David de Oliveia",
    "grade": "4º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 4ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-45",
    "stage": "PRIMARIA",
    "name": "Zan Li",
    "grade": "4º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 4ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-46",
    "stage": "PRIMARIA",
    "name": "Mateo Briceño Cruz",
    "grade": "4º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 4ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-47",
    "stage": "PRIMARIA",
    "name": "Lucia Rojas",
    "grade": "4º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 4ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-48",
    "stage": "PRIMARIA",
    "name": "Piero Emir Alhuay",
    "grade": "4º Educación Primaria B",
    "category": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 4ºB",
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Programa de enriquecimiento curricular, ampliación vertical/horizontal y fomento del pensamiento creativo.",
      "methodologicalAdaptations": [
        "Propuesta de tareas de ampliación e investigación cuando finalice el trabajo básico.",
        "Proyectos de aprendizaje por descubrimiento y retos de razonamiento.",
        "Evitar la repetición mecánica de ejercicios ya dominados.",
        "Flexibilidad en la elección de formatos de entrega de trabajos."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Evaluación basada en rúbricas de enriquecimiento y proyectos creativos.",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 0,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Altas Capacidades Intelectuales (AACC)"
  },
  {
    "id": "NEAE-49",
    "stage": "PRIMARIA",
    "name": "Pablo Sánchez",
    "grade": "4º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 4ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-50",
    "stage": "PRIMARIA",
    "name": "Mia Ramírez Vivancos",
    "grade": "4º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 4ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-51",
    "stage": "PRIMARIA",
    "name": "María Arribas del Castillo",
    "grade": "4º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 4ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-52",
    "stage": "PRIMARIA",
    "name": "Ana Ortiz",
    "grade": "4º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 4ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-53",
    "stage": "PRIMARIA",
    "name": "Candela Rubio Garcia",
    "grade": "4º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 4ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-54",
    "stage": "PRIMARIA",
    "name": "Victor Wanarski",
    "grade": "4º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 4ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-55",
    "stage": "PRIMARIA",
    "name": "Leo Ramajo",
    "grade": "4º Educación Primaria C",
    "category": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 4ºC",
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Programa de enriquecimiento curricular, ampliación vertical/horizontal y fomento del pensamiento creativo.",
      "methodologicalAdaptations": [
        "Propuesta de tareas de ampliación e investigación cuando finalice el trabajo básico.",
        "Proyectos de aprendizaje por descubrimiento y retos de razonamiento.",
        "Evitar la repetición mecánica de ejercicios ya dominados.",
        "Flexibilidad en la elección de formatos de entrega de trabajos."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Evaluación basada en rúbricas de enriquecimiento y proyectos creativos.",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 0,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Altas Capacidades Intelectuales (AACC)"
  },
  {
    "id": "NEAE-56",
    "stage": "PRIMARIA",
    "name": "Jhonathan Aaron Chino",
    "grade": "5º Educación Primaria A",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 5ºA",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-57",
    "stage": "PRIMARIA",
    "name": "Pablo Martinez",
    "grade": "5º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 5ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-58",
    "stage": "PRIMARIA",
    "name": "Abril García",
    "grade": "5º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 5ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-59",
    "stage": "PRIMARIA",
    "name": "María Alonso Garrote",
    "grade": "5º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 5ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-60",
    "stage": "PRIMARIA",
    "name": "Gisela Silva",
    "grade": "5º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 5ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-61",
    "stage": "PRIMARIA",
    "name": "Paula Margarita Vinicio",
    "grade": "5º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 5ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-62",
    "stage": "PRIMARIA",
    "name": "Manuel Aranda",
    "grade": "5º Educación Primaria B",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 5ºB",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-63",
    "stage": "PRIMARIA",
    "name": "David Velasco",
    "grade": "5º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 5ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-64",
    "stage": "PRIMARIA",
    "name": "Lionel Robert Michel",
    "grade": "5º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 5ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-65",
    "stage": "PRIMARIA",
    "name": "Andrea García Fernández",
    "grade": "5º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 5ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-66",
    "stage": "PRIMARIA",
    "name": "Jichen Li",
    "grade": "5º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Profesor",
    "tutor": "Tutor/a de 5ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico ordinario en el aula para afianzar el ritmo de aprendizaje y contenidos curriculares.",
      "methodologicalAdaptations": [
        "Atención individualizada por el profesor de apoyo/área durante el trabajo autónomo.",
        "Modelado paso a paso en la realización de tareas.",
        "Apoyos gráficos para la asimilación de conceptos clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Pedagógico Ordinario en Aula"
  },
  {
    "id": "NEAE-67",
    "stage": "PRIMARIA",
    "name": "Olivia de las Muelas",
    "grade": "5º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 5ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-68",
    "stage": "PRIMARIA",
    "name": "Rocío López",
    "grade": "5º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 5ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-69",
    "stage": "PRIMARIA",
    "name": "Camila Suarez",
    "grade": "5º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 5ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-70",
    "stage": "PRIMARIA",
    "name": "Alejandra Tello",
    "grade": "5º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 5ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-71",
    "stage": "PRIMARIA",
    "name": "Paula Zapata Pérez",
    "grade": "5º Educación Primaria C",
    "category": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 5ºC",
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Programa de enriquecimiento curricular, ampliación vertical/horizontal y fomento del pensamiento creativo.",
      "methodologicalAdaptations": [
        "Propuesta de tareas de ampliación e investigación cuando finalice el trabajo básico.",
        "Proyectos de aprendizaje por descubrimiento y retos de razonamiento.",
        "Evitar la repetición mecánica de ejercicios ya dominados.",
        "Flexibilidad en la elección de formatos de entrega de trabajos."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Evaluación basada en rúbricas de enriquecimiento y proyectos creativos.",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 0,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Altas Capacidades Intelectuales (AACC)"
  },
  {
    "id": "NEAE-72",
    "stage": "PRIMARIA",
    "name": "Alma Mía",
    "grade": "5º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 5ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-73",
    "stage": "PRIMARIA",
    "name": "Darío Gómez Verdasco",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 6ºA",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-74",
    "stage": "PRIMARIA",
    "name": "Ysabella Cardoza",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 6ºA",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-75",
    "stage": "PRIMARIA",
    "name": "Valle Castrejón",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 6ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-76",
    "stage": "PRIMARIA",
    "name": "Arturo Arribas Casado",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 6ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-77",
    "stage": "PRIMARIA",
    "name": "Pedro Prior Gómez de Ramón",
    "grade": "6º Educación Primaria A",
    "category": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 6ºA",
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Programa de enriquecimiento curricular, ampliación vertical/horizontal y fomento del pensamiento creativo.",
      "methodologicalAdaptations": [
        "Propuesta de tareas de ampliación e investigación cuando finalice el trabajo básico.",
        "Proyectos de aprendizaje por descubrimiento y retos de razonamiento.",
        "Evitar la repetición mecánica de ejercicios ya dominados.",
        "Flexibilidad en la elección de formatos de entrega de trabajos."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Evaluación basada en rúbricas de enriquecimiento y proyectos creativos.",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 0,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Altas Capacidades Intelectuales (AACC)"
  },
  {
    "id": "NEAE-78",
    "stage": "PRIMARIA",
    "name": "Liah Vanegas",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-79",
    "stage": "PRIMARIA",
    "name": "Enma Bullido",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-80",
    "stage": "PRIMARIA",
    "name": "Antonio Ortiz",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 6ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-81",
    "stage": "PRIMARIA",
    "name": "Leo Mendieta",
    "grade": "6º Educación Primaria A",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºA",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-82",
    "stage": "PRIMARIA",
    "name": "Salvador Gómez",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-83",
    "stage": "PRIMARIA",
    "name": "Carlos Renato Paz",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-84",
    "stage": "PRIMARIA",
    "name": "Marcelo Trinidad",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-85",
    "stage": "PRIMARIA",
    "name": "Daniel Moreno",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-86",
    "stage": "PRIMARIA",
    "name": "Luis Pérez de la Torre",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 6ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-87",
    "stage": "PRIMARIA",
    "name": "Ana Calzadilla Páramo",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-88",
    "stage": "PRIMARIA",
    "name": "Alma Villa Estevez",
    "grade": "6º Educación Primaria B",
    "category": "Altas Capacidades Intelectuales (AACC)",
    "tutor": "Tutor/a de 6ºB",
    "curricularAdaptation": "Enriquecimiento",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Programa de enriquecimiento curricular, ampliación vertical/horizontal y fomento del pensamiento creativo.",
      "methodologicalAdaptations": [
        "Propuesta de tareas de ampliación e investigación cuando finalice el trabajo básico.",
        "Proyectos de aprendizaje por descubrimiento y retos de razonamiento.",
        "Evitar la repetición mecánica de ejercicios ya dominados.",
        "Flexibilidad en la elección de formatos de entrega de trabajos."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Evaluación basada en rúbricas de enriquecimiento y proyectos creativos.",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 0,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Altas Capacidades Intelectuales (AACC)"
  },
  {
    "id": "NEAE-89",
    "stage": "PRIMARIA",
    "name": "Larysa Araujo",
    "grade": "6º Educación Primaria B",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºB",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-90",
    "stage": "PRIMARIA",
    "name": "Alvaro Lionel Astupuña",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-91",
    "stage": "PRIMARIA",
    "name": "Mª Laura Gonzales",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-92",
    "stage": "PRIMARIA",
    "name": "María Cantero",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-93",
    "stage": "PRIMARIA",
    "name": "Cristhian Hristov",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Específico (PT/AL)",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Atención e intervención específica individualizada con especialista en áreas instrumentales.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos sencillos con apoyo visual.",
        "Supervisión y confirmación del trabajo realizado.",
        "Uso de apoyos manipulativos y visuales en la mesa de trabajo.",
        "Coordinación estrecha y sistemática con el especialista de apoyo."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 1
    },
    "ptTeacher": "Mª Ángeles Gómez (PT)",
    "alTeacher": "Sara Domínguez (AL)",
    "specificNeed": "Dificultades Específicas de Aprendizaje / Apoyo Instrumental (PT/AL)"
  },
  {
    "id": "NEAE-94",
    "stage": "PRIMARIA",
    "name": "Daniel Simbaña",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-95",
    "stage": "PRIMARIA",
    "name": "Darius Oberlander",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-96",
    "stage": "PRIMARIA",
    "name": "Aramis Cano",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-97",
    "stage": "PRIMARIA",
    "name": "Miranda Rodríguez",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-98",
    "stage": "PRIMARIA",
    "name": "Anthony Calderón",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-99",
    "stage": "PRIMARIA",
    "name": "Yun Zhu",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-100",
    "stage": "PRIMARIA",
    "name": "Jeff Vargas",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-101",
    "stage": "PRIMARIA",
    "name": "Sara Etma",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario (Tutor y Profesor)",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Refuerzo pedagógico coordinado entre tutor y profesor de apoyo para consolidar áreas instrumentales.",
      "methodologicalAdaptations": [
        "Supervisión compartida entre tutor y profesor de refuerzo.",
        "Instrucciones cortas y estructuradas con apoyos visuales.",
        "Refuerzo sistemático del vocabulario y comprensión de consignas.",
        "Acompañamiento individualizado al inicio de cada actividad."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Refuerzo Curricular Coordinado (Tutor y Profesor de Apoyo)"
  },
  {
    "id": "NEAE-102",
    "stage": "PRIMARIA",
    "name": "Alex Rodríguez Martín",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  },
  {
    "id": "NEAE-103",
    "stage": "PRIMARIA",
    "name": "Santiago Vidal Ruiz",
    "grade": "6º Educación Primaria C",
    "category": "ACNEAE - Apoyo Ordinario de Tutoría",
    "tutor": "Tutor/a de 6ºC",
    "curricularAdaptation": "Pautas Ordinarias",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Seguimiento y refuerzo ordinario por parte del tutor en dinámicas de aula y tareas individuales.",
      "methodologicalAdaptations": [
        "Supervisión frecuente de la comprensión de explicaciones y tareas.",
        "Anticipación de consignas y modelado de ejemplos prácticos.",
        "Pautas directas para la organización de materiales escolares y agenda.",
        "Fraccionar tareas extensas en partes breves."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona preferente del aula (primeras filas o cerca de la pizarra).",
        "Mesa de trabajo despejada y libre de distracciones visuales."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en actividades escritas y controles (+25%).",
        "Lectura oral previa de enunciados de problemas y preguntas complejas."
      ],
      "emotionalTips": [
        "Reforzamiento positivo constante ante el esfuerzo personal y la perseverancia.",
        "Validación emocional y fomento de un clima seguro de participación."
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 0
    },
    "specificNeed": "Seguimiento y Refuerzo en Tutoría"
  }
];
