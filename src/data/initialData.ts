import { ReferralCase, StudentNEAE } from '../types';

export const INITIAL_CASES: ReferralCase[] = [];

// Censo Oficial Completo de Alumnos de Apoyo y Diversidad (1º a 6º Primaria)
// Especialistas de PT oficiales del centro: Daniel Asenjo y María (sin AL)
export const INITIAL_STUDENTS_NEAE: StudentNEAE[] = [
  {
    "id": "NEAE-INF-01",
    "stage": "INFANTIL",
    "name": "Carballo Guzman, Andre Nicolas",
    "grade": "Infantil 4 años A",
    "tutor": "Tutor/a de Infantil 4 años",
    "category": "ACNEE - Retraso General del Desarrollo",
    "specificNeed": "Retraso general del desarrollo",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "Significativa (ACS)",
    "ptHours": 3,
    "alHours": 0,
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en Segundo Ciclo de Educación Infantil (3-6 años: estimulación madurativa global, desarrollo del lenguaje y autonomía) orientada a estimular el desarrollo madurativo global en las áreas psicomotriz, lingüístico-comunicativa, cognitiva y de interacción social, afianzando la autonomía personal en las rutinas de aula.",
      "methodologicalAdaptations": [
        "Estructuración de la jornada mediante rutinas altamente predecibles apoyadas en agenda visual de aula con pictogramas ARASAAC (asamblea, rincones, patio, aseo).",
        "Modelado guiado paso a paso: descomponer las actividades grafomotoras y de psicomotricidad en secuencias cortas, ofreciendo ayuda física o gestual y retirándola paulatinamente.",
        "Estimulación del lenguaje oral funcional: uso de modelado enriquecido, canciones con gestos, lectura dialógica de cuentos con imágenes reales y preguntas de opción cerrada.",
        "Metodología lúdica y multisensorial: manipulación de texturas, encajables, plastilina, bandejas sensoriales y juego simbólico antes de cualquier tarea sobre papel.",
        "Concesión de tiempos de procesamiento y respuesta amplios (esperar 5-8 segundos antes de repetir una instrucción o intervenir).",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en la asamblea y mesa de trabajo en primera fila, directamente frente a la maestra/o y junto a compañeros de buen modelo comunicativo y prosocial.",
        "Rincones de juego identificados visualmente con etiquetas y fotos a su altura para favorecer la elección autónoma y el orden del material.",
        "Disposición de un rincón o espacio de descanso y calma para prevenir sobrecargas de fatiga madurativa o sensorial."
      ],
      "evaluationAdaptations": [
        "Evaluación continua, procesual y formativa a través de la observación directa en contextos cotidianos de juego libre y guiado.",
        "Flexibilidad temporal absoluta en la realización de fichas y tareas plásticas, permitiendo pausas motrices según su nivel de tolerancia.",
        "Alineación trimestral de objetivos curriculares y de desarrollo con las sesiones de Pedagogía Terapéutica (PT) y Audición y Lenguaje (AL)."
      ],
      "emotionalTips": [
        "Refuerzo afectuoso e inmediato ante cualquier logro de autonomía, intento comunicativo o esfuerzo en las rutinas diarias.",
        "Acompañamiento sereno y contención emocional en episodios de frustración por dificultad expresiva, validando su emoción y ofreciendo alternativas.",
        "Comunicación diaria fluida con la familia para unificar pautas de autonomía, control de esfínteres, sueño y estimulación verbal."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Áreas de Infantil",
          "tips": [
            "Comunicación y Representación del Lenguaje: estimulación bucofonatoria lúdica (soplo, praxias con espejo), cuentos rimados y uso de panel visual de rutinas.",
            "Crecimiento en Armonía y Autonomía: secuencias pictográficas para rutinas de aseo, vestido y merienda; juegos de pinza digital y psicomotricidad gruesa.",
            "Descubrimiento y Exploración del Entorno: aprendizaje mediante exploración de objetos reales, clasificación por cualidades perceptivas (color, tamaño, forma) y juego manipulativo."
          ]
        }
      ],
      "ptHoursPerWeek": 3,
      "alHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-INF-02",
    "stage": "INFANTIL",
    "name": "de la Purificación Muñoz, Jorge",
    "grade": "Infantil 4 años A",
    "tutor": "Tutor/a de Infantil 4 años",
    "category": "ACNEE - Retraso General del Desarrollo",
    "specificNeed": "Retraso general del desarrollo",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "ptHours": 2,
    "alHours": 0,
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en Segundo Ciclo de Educación Infantil (3-6 años: estimulación madurativa global, desarrollo del lenguaje y autonomía) orientada a estimular el desarrollo madurativo global en las áreas psicomotriz, lingüístico-comunicativa, cognitiva y de interacción social, afianzando la autonomía personal en las rutinas de aula.",
      "methodologicalAdaptations": [
        "Estructuración de la jornada mediante rutinas altamente predecibles apoyadas en agenda visual de aula con pictogramas ARASAAC (asamblea, rincones, patio, aseo).",
        "Modelado guiado paso a paso: descomponer las actividades grafomotoras y de psicomotricidad en secuencias cortas, ofreciendo ayuda física o gestual y retirándola paulatinamente.",
        "Estimulación del lenguaje oral funcional: uso de modelado enriquecido, canciones con gestos, lectura dialógica de cuentos con imágenes reales y preguntas de opción cerrada.",
        "Metodología lúdica y multisensorial: manipulación de texturas, encajables, plastilina, bandejas sensoriales y juego simbólico antes de cualquier tarea sobre papel.",
        "Concesión de tiempos de procesamiento y respuesta amplios (esperar 5-8 segundos antes de repetir una instrucción o intervenir).",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en la asamblea y mesa de trabajo en primera fila, directamente frente a la maestra/o y junto a compañeros de buen modelo comunicativo y prosocial.",
        "Rincones de juego identificados visualmente con etiquetas y fotos a su altura para favorecer la elección autónoma y el orden del material.",
        "Disposición de un rincón o espacio de descanso y calma para prevenir sobrecargas de fatiga madurativa o sensorial."
      ],
      "evaluationAdaptations": [
        "Evaluación continua, procesual y formativa a través de la observación directa en contextos cotidianos de juego libre y guiado.",
        "Flexibilidad temporal absoluta en la realización de fichas y tareas plásticas, permitiendo pausas motrices según su nivel de tolerancia.",
        "Alineación trimestral de objetivos curriculares y de desarrollo con las sesiones de Pedagogía Terapéutica (PT) y Audición y Lenguaje (AL)."
      ],
      "emotionalTips": [
        "Refuerzo afectuoso e inmediato ante cualquier logro de autonomía, intento comunicativo o esfuerzo en las rutinas diarias.",
        "Acompañamiento sereno y contención emocional en episodios de frustración por dificultad expresiva, validando su emoción y ofreciendo alternativas.",
        "Comunicación diaria fluida con la familia para unificar pautas de autonomía, control de esfínteres, sueño y estimulación verbal."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Áreas de Infantil",
          "tips": [
            "Comunicación y Representación del Lenguaje: estimulación bucofonatoria lúdica (soplo, praxias con espejo), cuentos rimados y uso de panel visual de rutinas.",
            "Crecimiento en Armonía y Autonomía: secuencias pictográficas para rutinas de aseo, vestido y merienda; juegos de pinza digital y psicomotricidad gruesa.",
            "Descubrimiento y Exploración del Entorno: aprendizaje mediante exploración de objetos reales, clasificación por cualidades perceptivas (color, tamaño, forma) y juego manipulativo."
          ]
        }
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-INF-03",
    "stage": "INFANTIL",
    "name": "de las Heras Alonso, Andres",
    "grade": "Infantil 4 años B",
    "tutor": "Tutor/a de Infantil 4 años",
    "category": "ACNEE - Retraso General del Desarrollo",
    "specificNeed": "Retraso general del desarrollo",
    "ptTeacher": "Daniel Asenjo (PT)",
    "alTeacher": "Especialista de Audición y Lenguaje (AL)",
    "curricularAdaptation": "Significativa (ACS)",
    "ptHours": 3,
    "alHours": 2,
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en Segundo Ciclo de Educación Infantil (3-6 años: estimulación madurativa global, desarrollo del lenguaje y autonomía) orientada a estimular el desarrollo madurativo global en las áreas psicomotriz, lingüístico-comunicativa, cognitiva y de interacción social, afianzando la autonomía personal en las rutinas de aula.",
      "methodologicalAdaptations": [
        "Estructuración de la jornada mediante rutinas altamente predecibles apoyadas en agenda visual de aula con pictogramas ARASAAC (asamblea, rincones, patio, aseo).",
        "Modelado guiado paso a paso: descomponer las actividades grafomotoras y de psicomotricidad en secuencias cortas, ofreciendo ayuda física o gestual y retirándola paulatinamente.",
        "Estimulación del lenguaje oral funcional: uso de modelado enriquecido, canciones con gestos, lectura dialógica de cuentos con imágenes reales y preguntas de opción cerrada.",
        "Metodología lúdica y multisensorial: manipulación de texturas, encajables, plastilina, bandejas sensoriales y juego simbólico antes de cualquier tarea sobre papel.",
        "Concesión de tiempos de procesamiento y respuesta amplios (esperar 5-8 segundos antes de repetir una instrucción o intervenir).",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en la asamblea y mesa de trabajo en primera fila, directamente frente a la maestra/o y junto a compañeros de buen modelo comunicativo y prosocial.",
        "Rincones de juego identificados visualmente con etiquetas y fotos a su altura para favorecer la elección autónoma y el orden del material.",
        "Disposición de un rincón o espacio de descanso y calma para prevenir sobrecargas de fatiga madurativa o sensorial."
      ],
      "evaluationAdaptations": [
        "Evaluación continua, procesual y formativa a través de la observación directa en contextos cotidianos de juego libre y guiado.",
        "Flexibilidad temporal absoluta en la realización de fichas y tareas plásticas, permitiendo pausas motrices según su nivel de tolerancia.",
        "Alineación trimestral de objetivos curriculares y de desarrollo con las sesiones de Pedagogía Terapéutica (PT) y Audición y Lenguaje (AL)."
      ],
      "emotionalTips": [
        "Refuerzo afectuoso e inmediato ante cualquier logro de autonomía, intento comunicativo o esfuerzo en las rutinas diarias.",
        "Acompañamiento sereno y contención emocional en episodios de frustración por dificultad expresiva, validando su emoción y ofreciendo alternativas.",
        "Comunicación diaria fluida con la familia para unificar pautas de autonomía, control de esfínteres, sueño y estimulación verbal."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Áreas de Infantil",
          "tips": [
            "Comunicación y Representación del Lenguaje: estimulación bucofonatoria lúdica (soplo, praxias con espejo), cuentos rimados y uso de panel visual de rutinas.",
            "Crecimiento en Armonía y Autonomía: secuencias pictográficas para rutinas de aseo, vestido y merienda; juegos de pinza digital y psicomotricidad gruesa.",
            "Descubrimiento y Exploración del Entorno: aprendizaje mediante exploración de objetos reales, clasificación por cualidades perceptivas (color, tamaño, forma) y juego manipulativo."
          ]
        }
      ],
      "ptHoursPerWeek": 3,
      "alHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-INF-04",
    "stage": "INFANTIL",
    "name": "Almansa Luquero, Valeria",
    "grade": "Infantil 5 años A",
    "tutor": "Tutor/a de Infantil 5 años",
    "category": "ACNEE - Retraso General del Desarrollo",
    "specificNeed": "Retraso general del desarrollo",
    "ptTeacher": "Daniel Asenjo (PT)",
    "alTeacher": "Especialista de Audición y Lenguaje (AL)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "ptHours": 3,
    "alHours": 2,
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en Segundo Ciclo de Educación Infantil (3-6 años: estimulación madurativa global, desarrollo del lenguaje y autonomía) orientada a estimular el desarrollo madurativo global en las áreas psicomotriz, lingüístico-comunicativa, cognitiva y de interacción social, afianzando la autonomía personal en las rutinas de aula.",
      "methodologicalAdaptations": [
        "Estructuración de la jornada mediante rutinas altamente predecibles apoyadas en agenda visual de aula con pictogramas ARASAAC (asamblea, rincones, patio, aseo).",
        "Modelado guiado paso a paso: descomponer las actividades grafomotoras y de psicomotricidad en secuencias cortas, ofreciendo ayuda física o gestual y retirándola paulatinamente.",
        "Estimulación del lenguaje oral funcional: uso de modelado enriquecido, canciones con gestos, lectura dialógica de cuentos con imágenes reales y preguntas de opción cerrada.",
        "Metodología lúdica y multisensorial: manipulación de texturas, encajables, plastilina, bandejas sensoriales y juego simbólico antes de cualquier tarea sobre papel.",
        "Concesión de tiempos de procesamiento y respuesta amplios (esperar 5-8 segundos antes de repetir una instrucción o intervenir).",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en la asamblea y mesa de trabajo en primera fila, directamente frente a la maestra/o y junto a compañeros de buen modelo comunicativo y prosocial.",
        "Rincones de juego identificados visualmente con etiquetas y fotos a su altura para favorecer la elección autónoma y el orden del material.",
        "Disposición de un rincón o espacio de descanso y calma para prevenir sobrecargas de fatiga madurativa o sensorial."
      ],
      "evaluationAdaptations": [
        "Evaluación continua, procesual y formativa a través de la observación directa en contextos cotidianos de juego libre y guiado.",
        "Flexibilidad temporal absoluta en la realización de fichas y tareas plásticas, permitiendo pausas motrices según su nivel de tolerancia.",
        "Alineación trimestral de objetivos curriculares y de desarrollo con las sesiones de Pedagogía Terapéutica (PT) y Audición y Lenguaje (AL)."
      ],
      "emotionalTips": [
        "Refuerzo afectuoso e inmediato ante cualquier logro de autonomía, intento comunicativo o esfuerzo en las rutinas diarias.",
        "Acompañamiento sereno y contención emocional en episodios de frustración por dificultad expresiva, validando su emoción y ofreciendo alternativas.",
        "Comunicación diaria fluida con la familia para unificar pautas de autonomía, control de esfínteres, sueño y estimulación verbal."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Áreas de Infantil",
          "tips": [
            "Comunicación y Representación del Lenguaje: estimulación bucofonatoria lúdica (soplo, praxias con espejo), cuentos rimados y uso de panel visual de rutinas.",
            "Crecimiento en Armonía y Autonomía: secuencias pictográficas para rutinas de aseo, vestido y merienda; juegos de pinza digital y psicomotricidad gruesa.",
            "Descubrimiento y Exploración del Entorno: aprendizaje mediante exploración de objetos reales, clasificación por cualidades perceptivas (color, tamaño, forma) y juego manipulativo."
          ]
        }
      ],
      "ptHoursPerWeek": 3,
      "alHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-INF-05",
    "stage": "INFANTIL",
    "name": "Colmenares Camacho, Maria Paula",
    "grade": "Infantil 5 años A",
    "tutor": "Tutor/a de Infantil 5 años",
    "category": "ACNEE - Retraso General del Desarrollo",
    "specificNeed": "Retraso general del desarrollo",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "ptHours": 2,
    "alHours": 0,
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en Segundo Ciclo de Educación Infantil (3-6 años: estimulación madurativa global, desarrollo del lenguaje y autonomía) orientada a estimular el desarrollo madurativo global en las áreas psicomotriz, lingüístico-comunicativa, cognitiva y de interacción social, afianzando la autonomía personal en las rutinas de aula.",
      "methodologicalAdaptations": [
        "Estructuración de la jornada mediante rutinas altamente predecibles apoyadas en agenda visual de aula con pictogramas ARASAAC (asamblea, rincones, patio, aseo).",
        "Modelado guiado paso a paso: descomponer las actividades grafomotoras y de psicomotricidad en secuencias cortas, ofreciendo ayuda física o gestual y retirándola paulatinamente.",
        "Estimulación del lenguaje oral funcional: uso de modelado enriquecido, canciones con gestos, lectura dialógica de cuentos con imágenes reales y preguntas de opción cerrada.",
        "Metodología lúdica y multisensorial: manipulación de texturas, encajables, plastilina, bandejas sensoriales y juego simbólico antes de cualquier tarea sobre papel.",
        "Concesión de tiempos de procesamiento y respuesta amplios (esperar 5-8 segundos antes de repetir una instrucción o intervenir).",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en la asamblea y mesa de trabajo en primera fila, directamente frente a la maestra/o y junto a compañeros de buen modelo comunicativo y prosocial.",
        "Rincones de juego identificados visualmente con etiquetas y fotos a su altura para favorecer la elección autónoma y el orden del material.",
        "Disposición de un rincón o espacio de descanso y calma para prevenir sobrecargas de fatiga madurativa o sensorial."
      ],
      "evaluationAdaptations": [
        "Evaluación continua, procesual y formativa a través de la observación directa en contextos cotidianos de juego libre y guiado.",
        "Flexibilidad temporal absoluta en la realización de fichas y tareas plásticas, permitiendo pausas motrices según su nivel de tolerancia.",
        "Alineación trimestral de objetivos curriculares y de desarrollo con las sesiones de Pedagogía Terapéutica (PT) y Audición y Lenguaje (AL)."
      ],
      "emotionalTips": [
        "Refuerzo afectuoso e inmediato ante cualquier logro de autonomía, intento comunicativo o esfuerzo en las rutinas diarias.",
        "Acompañamiento sereno y contención emocional en episodios de frustración por dificultad expresiva, validando su emoción y ofreciendo alternativas.",
        "Comunicación diaria fluida con la familia para unificar pautas de autonomía, control de esfínteres, sueño y estimulación verbal."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Áreas de Infantil",
          "tips": [
            "Comunicación y Representación del Lenguaje: estimulación bucofonatoria lúdica (soplo, praxias con espejo), cuentos rimados y uso de panel visual de rutinas.",
            "Crecimiento en Armonía y Autonomía: secuencias pictográficas para rutinas de aseo, vestido y merienda; juegos de pinza digital y psicomotricidad gruesa.",
            "Descubrimiento y Exploración del Entorno: aprendizaje mediante exploración de objetos reales, clasificación por cualidades perceptivas (color, tamaño, forma) y juego manipulativo."
          ]
        }
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-INF-06",
    "stage": "INFANTIL",
    "name": "Mendoza Molina, Maria Fernanda",
    "grade": "Infantil 5 años B",
    "tutor": "Tutor/a de Infantil 5 años",
    "category": "ACNEE - Retraso General del Desarrollo",
    "specificNeed": "Retraso general del desarrollo",
    "ptTeacher": "Daniel Asenjo (PT)",
    "alTeacher": "Especialista de Audición y Lenguaje (AL)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "ptHours": 3,
    "alHours": 2,
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en Segundo Ciclo de Educación Infantil (3-6 años: estimulación madurativa global, desarrollo del lenguaje y autonomía) orientada a estimular el desarrollo madurativo global en las áreas psicomotriz, lingüístico-comunicativa, cognitiva y de interacción social, afianzando la autonomía personal en las rutinas de aula.",
      "methodologicalAdaptations": [
        "Estructuración de la jornada mediante rutinas altamente predecibles apoyadas en agenda visual de aula con pictogramas ARASAAC (asamblea, rincones, patio, aseo).",
        "Modelado guiado paso a paso: descomponer las actividades grafomotoras y de psicomotricidad en secuencias cortas, ofreciendo ayuda física o gestual y retirándola paulatinamente.",
        "Estimulación del lenguaje oral funcional: uso de modelado enriquecido, canciones con gestos, lectura dialógica de cuentos con imágenes reales y preguntas de opción cerrada.",
        "Metodología lúdica y multisensorial: manipulación de texturas, encajables, plastilina, bandejas sensoriales y juego simbólico antes de cualquier tarea sobre papel.",
        "Concesión de tiempos de procesamiento y respuesta amplios (esperar 5-8 segundos antes de repetir una instrucción o intervenir).",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en la asamblea y mesa de trabajo en primera fila, directamente frente a la maestra/o y junto a compañeros de buen modelo comunicativo y prosocial.",
        "Rincones de juego identificados visualmente con etiquetas y fotos a su altura para favorecer la elección autónoma y el orden del material.",
        "Disposición de un rincón o espacio de descanso y calma para prevenir sobrecargas de fatiga madurativa o sensorial."
      ],
      "evaluationAdaptations": [
        "Evaluación continua, procesual y formativa a través de la observación directa en contextos cotidianos de juego libre y guiado.",
        "Flexibilidad temporal absoluta en la realización de fichas y tareas plásticas, permitiendo pausas motrices según su nivel de tolerancia.",
        "Alineación trimestral de objetivos curriculares y de desarrollo con las sesiones de Pedagogía Terapéutica (PT) y Audición y Lenguaje (AL)."
      ],
      "emotionalTips": [
        "Refuerzo afectuoso e inmediato ante cualquier logro de autonomía, intento comunicativo o esfuerzo en las rutinas diarias.",
        "Acompañamiento sereno y contención emocional en episodios de frustración por dificultad expresiva, validando su emoción y ofreciendo alternativas.",
        "Comunicación diaria fluida con la familia para unificar pautas de autonomía, control de esfínteres, sueño y estimulación verbal."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Áreas de Infantil",
          "tips": [
            "Comunicación y Representación del Lenguaje: estimulación bucofonatoria lúdica (soplo, praxias con espejo), cuentos rimados y uso de panel visual de rutinas.",
            "Crecimiento en Armonía y Autonomía: secuencias pictográficas para rutinas de aseo, vestido y merienda; juegos de pinza digital y psicomotricidad gruesa.",
            "Descubrimiento y Exploración del Entorno: aprendizaje mediante exploración de objetos reales, clasificación por cualidades perceptivas (color, tamaño, forma) y juego manipulativo."
          ]
        }
      ],
      "ptHoursPerWeek": 3,
      "alHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-INF-07",
    "stage": "INFANTIL",
    "name": "Mendoza Molina, Maria Flor",
    "grade": "Infantil 5 años B",
    "tutor": "Tutor/a de Infantil 5 años",
    "category": "ACNEE - Retraso General del Desarrollo",
    "specificNeed": "Retraso general del desarrollo",
    "ptTeacher": "Daniel Asenjo (PT)",
    "alTeacher": "Especialista de Audición y Lenguaje (AL)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "ptHours": 3,
    "alHours": 2,
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en Segundo Ciclo de Educación Infantil (3-6 años: estimulación madurativa global, desarrollo del lenguaje y autonomía) orientada a estimular el desarrollo madurativo global en las áreas psicomotriz, lingüístico-comunicativa, cognitiva y de interacción social, afianzando la autonomía personal en las rutinas de aula.",
      "methodologicalAdaptations": [
        "Estructuración de la jornada mediante rutinas altamente predecibles apoyadas en agenda visual de aula con pictogramas ARASAAC (asamblea, rincones, patio, aseo).",
        "Modelado guiado paso a paso: descomponer las actividades grafomotoras y de psicomotricidad en secuencias cortas, ofreciendo ayuda física o gestual y retirándola paulatinamente.",
        "Estimulación del lenguaje oral funcional: uso de modelado enriquecido, canciones con gestos, lectura dialógica de cuentos con imágenes reales y preguntas de opción cerrada.",
        "Metodología lúdica y multisensorial: manipulación de texturas, encajables, plastilina, bandejas sensoriales y juego simbólico antes de cualquier tarea sobre papel.",
        "Concesión de tiempos de procesamiento y respuesta amplios (esperar 5-8 segundos antes de repetir una instrucción o intervenir).",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en la asamblea y mesa de trabajo en primera fila, directamente frente a la maestra/o y junto a compañeros de buen modelo comunicativo y prosocial.",
        "Rincones de juego identificados visualmente con etiquetas y fotos a su altura para favorecer la elección autónoma y el orden del material.",
        "Disposición de un rincón o espacio de descanso y calma para prevenir sobrecargas de fatiga madurativa o sensorial."
      ],
      "evaluationAdaptations": [
        "Evaluación continua, procesual y formativa a través de la observación directa en contextos cotidianos de juego libre y guiado.",
        "Flexibilidad temporal absoluta en la realización de fichas y tareas plásticas, permitiendo pausas motrices según su nivel de tolerancia.",
        "Alineación trimestral de objetivos curriculares y de desarrollo con las sesiones de Pedagogía Terapéutica (PT) y Audición y Lenguaje (AL)."
      ],
      "emotionalTips": [
        "Refuerzo afectuoso e inmediato ante cualquier logro de autonomía, intento comunicativo o esfuerzo en las rutinas diarias.",
        "Acompañamiento sereno y contención emocional en episodios de frustración por dificultad expresiva, validando su emoción y ofreciendo alternativas.",
        "Comunicación diaria fluida con la familia para unificar pautas de autonomía, control de esfínteres, sueño y estimulación verbal."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Áreas de Infantil",
          "tips": [
            "Comunicación y Representación del Lenguaje: estimulación bucofonatoria lúdica (soplo, praxias con espejo), cuentos rimados y uso de panel visual de rutinas.",
            "Crecimiento en Armonía y Autonomía: secuencias pictográficas para rutinas de aseo, vestido y merienda; juegos de pinza digital y psicomotricidad gruesa.",
            "Descubrimiento y Exploración del Entorno: aprendizaje mediante exploración de objetos reales, clasificación por cualidades perceptivas (color, tamaño, forma) y juego manipulativo."
          ]
        }
      ],
      "ptHoursPerWeek": 3,
      "alHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-INF-08",
    "stage": "INFANTIL",
    "name": "Vaquero Pisa, Ainara",
    "grade": "Infantil 5 años B",
    "tutor": "Tutor/a de Infantil 5 años",
    "category": "ACNEE - Retraso General del Desarrollo",
    "specificNeed": "Retraso general del desarrollo",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "ptHours": 2,
    "alHours": 0,
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en Segundo Ciclo de Educación Infantil (3-6 años: estimulación madurativa global, desarrollo del lenguaje y autonomía) orientada a estimular el desarrollo madurativo global en las áreas psicomotriz, lingüístico-comunicativa, cognitiva y de interacción social, afianzando la autonomía personal en las rutinas de aula.",
      "methodologicalAdaptations": [
        "Estructuración de la jornada mediante rutinas altamente predecibles apoyadas en agenda visual de aula con pictogramas ARASAAC (asamblea, rincones, patio, aseo).",
        "Modelado guiado paso a paso: descomponer las actividades grafomotoras y de psicomotricidad en secuencias cortas, ofreciendo ayuda física o gestual y retirándola paulatinamente.",
        "Estimulación del lenguaje oral funcional: uso de modelado enriquecido, canciones con gestos, lectura dialógica de cuentos con imágenes reales y preguntas de opción cerrada.",
        "Metodología lúdica y multisensorial: manipulación de texturas, encajables, plastilina, bandejas sensoriales y juego simbólico antes de cualquier tarea sobre papel.",
        "Concesión de tiempos de procesamiento y respuesta amplios (esperar 5-8 segundos antes de repetir una instrucción o intervenir).",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en la asamblea y mesa de trabajo en primera fila, directamente frente a la maestra/o y junto a compañeros de buen modelo comunicativo y prosocial.",
        "Rincones de juego identificados visualmente con etiquetas y fotos a su altura para favorecer la elección autónoma y el orden del material.",
        "Disposición de un rincón o espacio de descanso y calma para prevenir sobrecargas de fatiga madurativa o sensorial."
      ],
      "evaluationAdaptations": [
        "Evaluación continua, procesual y formativa a través de la observación directa en contextos cotidianos de juego libre y guiado.",
        "Flexibilidad temporal absoluta en la realización de fichas y tareas plásticas, permitiendo pausas motrices según su nivel de tolerancia.",
        "Alineación trimestral de objetivos curriculares y de desarrollo con las sesiones de Pedagogía Terapéutica (PT) y Audición y Lenguaje (AL)."
      ],
      "emotionalTips": [
        "Refuerzo afectuoso e inmediato ante cualquier logro de autonomía, intento comunicativo o esfuerzo en las rutinas diarias.",
        "Acompañamiento sereno y contención emocional en episodios de frustración por dificultad expresiva, validando su emoción y ofreciendo alternativas.",
        "Comunicación diaria fluida con la familia para unificar pautas de autonomía, control de esfínteres, sueño y estimulación verbal."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Áreas de Infantil",
          "tips": [
            "Comunicación y Representación del Lenguaje: estimulación bucofonatoria lúdica (soplo, praxias con espejo), cuentos rimados y uso de panel visual de rutinas.",
            "Crecimiento en Armonía y Autonomía: secuencias pictográficas para rutinas de aseo, vestido y merienda; juegos de pinza digital y psicomotricidad gruesa.",
            "Descubrimiento y Exploración del Entorno: aprendizaje mediante exploración de objetos reales, clasificación por cualidades perceptivas (color, tamaño, forma) y juego manipulativo."
          ]
        }
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-OF-09",
    "stage": "PRIMARIA",
    "name": "Barreto Martínez, Antonella Alessandra",
    "grade": "1º Educación Primaria A",
    "tutor": "Tutor/a de 1º Educación Primaria A",
    "category": "ACNEE - Retraso General del Desarrollo",
    "specificNeed": "Retraso general del desarrollo (Retraso madurativo)",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "alTeacher": "Especialista de Audición y Lenguaje (AL)",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a consolidar las competencias instrumentales básicas (lectura comprensiva, cálculo elemental y noción temporal), reduciendo el desfase madurativo.",
      "methodologicalAdaptations": [
        "Fraccionar las actividades en pasos cortos y bien definidos, con verificación intermedia del trabajo antes de pasar al siguiente ejercicio.",
        "Uso sistemático de material manipulativo (bloques lógicos, regletas, dinero ficticio) para afianzar conceptos abstractos.",
        "Instrucciones breves, unívocas y apoyadas en ejemplos visuales ya resueltos como modelo.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana al profesor y junto a un compañero tutor colaborador que preste apoyo silencioso en la organización de la mesa."
      ],
      "evaluationAdaptations": [
        "Adaptación de tiempos (+25% a +35%) y ajuste del nivel de exigencia conforme a su informe psicopedagógico (ACS o ACNS).",
        "Priorizar preguntas directas y desglosadas frente a enunciados complejos de razonamiento múltiple."
      ],
      "emotionalTips": [
        "Reforzar el esfuerzo perseverante por encima del resultado numérico final, fomentando su motivación y sentido de autoeficacia."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la lectura con marcapáginas de guía y preguntas literales directas."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Uso de recta numérica, tabla pitagórica y plantilla pautada para encolumnar operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Esquemas visuales guiados con imágenes representativas de los conceptos clave."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Actividades lúdicas de repetición y asociación imagen-palabra."
          ]
        }
      ],
      "ptHoursPerWeek": 3,
      "alHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-02",
    "stage": "PRIMARIA",
    "name": "Sánchez Rubio, Daniel",
    "grade": "1º Educación Primaria A",
    "tutor": "Tutor/a de 1º Educación Primaria A",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas capacidades intelectuales",
    "ptTeacher": "",
    "curricularAdaptation": "Enriquecimiento",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular, y estimular el potencial intelectual y creativo mediante enriquecimiento curricular horizontal, retos de indagación y proyectos autónomos.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Compactación curricular ('Curriculum Compacting'): reducir ejercicios mecánicos y repetitivos cuando demuestre dominio y sustituirlos por retos de ampliación.",
        "Enriquecimiento horizontal e interdisciplinar (Taxonomía de Bloom: analizar, evaluar y crear) mediante proyectos de investigación autónoma.",
        "Disponer de una 'Carpeta de Enriquecimiento' con retos lógicos, lecturas avanzadas o experimentos a la que acudir al finalizar tareas comunes."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates.",
        "Acceso flexible a la biblioteca de aula, rincón STEM o recursos de investigación; agrupamientos flexibles por proyectos."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado.",
        "Evaluar proyectos de profundización mediante rúbricas que valoren la originalidad, rigor documental y pensamiento crítico.",
        "Cuidar el perfeccionismo disfuncional: valorar positivamente el riesgo intelectual y la asunción de errores en problemas difíciles."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase.",
        "Atender a la disincronía evolutiva (desfase entre alta capacidad cognitiva y madurez socioemocional o grafomotriz).",
        "Evitar exigir perfección constante o recriminarle fallos habituales por su condición de altas capacidades."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos).",
            "Proponer retos de creación literaria compleja, escritura periodística y lecturas de nivel superior."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas.",
            "Sustituir tandas de cuentas mecánicas por problemas de ingenio, acertijos lógicos y criptogramas numéricos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos.",
            "Fomentar proyectos aplicando el método científico y diseño de hipótesis experimentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response).",
            "Textos auténticos, lecturas graduadas avanzadas y debates sobre temas de actualidad."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-01",
    "stage": "PRIMARIA",
    "name": "Velasquez Lugo, Daryel Augusto",
    "grade": "1º Educación Primaria A",
    "tutor": "Tutor/a de 1º Educación Primaria A",
    "category": "ACNEE - Trastorno del Espectro Autista (TEA)",
    "specificNeed": "Trastorno del espectro autista (TEA)",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "Significativa (ACS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a garantizar la predictibilidad del entorno escolar, la estructuración visual TEACCH, la regulación sensorial y la comprensión socio-comunicativa.",
      "methodologicalAdaptations": [
        "Estructuración visual TEACCH del trabajo diario: presentar siempre en su mesa una tira o secuencia visual con las tareas de la sesión ('Primero -> Después -> Por último').",
        "Anticipación sistemática ante cambios imprevistos: avisar con apoyo visual cualquier modificación de horario, profesorado, excursión o actividad especial.",
        "Lenguaje oral directo, conciso y literal: evitar ironías, metáforas, dobles sentidos o preguntas retóricas que generen confusión pragmática.",
        "Integración funcional de sus intereses restringidos como puente motivacional para introducir contenidos curriculares nuevos.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona de baja sobrecarga acústica y visual, lejos de puertas de paso continuo, timbres o ventanas distractores.",
        "Habilitar una tarjeta visual pactada de regulación ('Rincón de Calma' / descanso sensorial de 3-5 minutos) ante sobrecarga acústica o motriz."
      ],
      "evaluationAdaptations": [
        "Evaluación adaptada según su Adaptación Curricular Significativa (ACS) o ACNS, priorizando ítems estructurados, opción múltiple o relacionar conceptos.",
        "Ampliación del tiempo de examen (+35% a +50%) o división de la prueba en dos bloques para evitar fatiga cognitiva."
      ],
      "emotionalTips": [
        "No interpretar la rigidez cognitiva, falta de contacto visual o literalidad como desobediencia o desafío de autoridad.",
        "Supervisión preventiva en tiempos no estructurados (recreo, pasillos, entradas y salidas) apoyándole en la interacción social con iguales."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Utilizar esquemas visuales y organizadores gráficos para la comprensión lectora; aclarar explícitamente giros idiomáticos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Estructurar la resolución de problemas en plantilla fija visual (Datos / Dibujo / Operación / Solución); usar apoyos manipulativos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Presentar los temas mediante esquemas visuales causa-efecto y mapas conceptuales claros."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Trabajar vocabulario funcional mediante flashcards visuales sin sobrecarga de producción oral pública forzada."
          ]
        }
      ],
      "ptHoursPerWeek": 4
    }
  },
  {
    "id": "NEAE-OF-12",
    "stage": "PRIMARIA",
    "name": "Villavicencio Casco, Thiago",
    "grade": "1º Educación Primaria B",
    "tutor": "Tutor/a de 1º Educación Primaria B",
    "category": "ACNEAE - Retraso Madurativo",
    "specificNeed": "Retraso madurativo",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "alTeacher": "Especialista de Audición y Lenguaje (AL)",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a consolidar las competencias instrumentales básicas (lectura comprensiva, cálculo elemental y noción temporal), reduciendo el desfase madurativo.",
      "methodologicalAdaptations": [
        "Fraccionar las actividades en pasos cortos y bien definidos, con verificación intermedia del trabajo antes de pasar al siguiente ejercicio.",
        "Uso sistemático de material manipulativo (bloques lógicos, regletas, dinero ficticio) para afianzar conceptos abstractos.",
        "Instrucciones breves, unívocas y apoyadas en ejemplos visuales ya resueltos como modelo.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana al profesor y junto a un compañero tutor colaborador que preste apoyo silencioso en la organización de la mesa."
      ],
      "evaluationAdaptations": [
        "Adaptación de tiempos (+25% a +35%) y ajuste del nivel de exigencia conforme a su informe psicopedagógico (ACS o ACNS).",
        "Priorizar preguntas directas y desglosadas frente a enunciados complejos de razonamiento múltiple."
      ],
      "emotionalTips": [
        "Reforzar el esfuerzo perseverante por encima del resultado numérico final, fomentando su motivación y sentido de autoeficacia."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la lectura con marcapáginas de guía y preguntas literales directas."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Uso de recta numérica, tabla pitagórica y plantilla pautada para encolumnar operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Esquemas visuales guiados con imágenes representativas de los conceptos clave."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Actividades lúdicas de repetición y asociación imagen-palabra."
          ]
        }
      ],
      "ptHoursPerWeek": 3,
      "alHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-19",
    "stage": "PRIMARIA",
    "name": "Andrade López, Diego Adrian",
    "grade": "2º Educación Primaria B",
    "tutor": "Tutor/a de 2º Educación Primaria B",
    "category": "ACNEE - Trastorno Específico del Lenguaje (TEL/TDL)",
    "specificNeed": "Trastornos específicos del lenguaje que afectan a la comprensión y expresión",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 3
    }
  },
  {
    "id": "NEAE-23",
    "stage": "PRIMARIA",
    "name": "Cardoza Flores, Juliette Adalind",
    "grade": "2º Educación Primaria C",
    "tutor": "Tutor/a de 2º Educación Primaria C",
    "category": "ACNEE - Retraso General del Desarrollo",
    "specificNeed": "Retraso general del desarrollo",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "alTeacher": "Especialista de Audición y Lenguaje (AL)",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a consolidar las competencias instrumentales básicas (lectura comprensiva, cálculo elemental y noción temporal), reduciendo el desfase madurativo.",
      "methodologicalAdaptations": [
        "Fraccionar las actividades en pasos cortos y bien definidos, con verificación intermedia del trabajo antes de pasar al siguiente ejercicio.",
        "Uso sistemático de material manipulativo (bloques lógicos, regletas, dinero ficticio) para afianzar conceptos abstractos.",
        "Instrucciones breves, unívocas y apoyadas en ejemplos visuales ya resueltos como modelo.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana al profesor y junto a un compañero tutor colaborador que preste apoyo silencioso en la organización de la mesa."
      ],
      "evaluationAdaptations": [
        "Adaptación de tiempos (+25% a +35%) y ajuste del nivel de exigencia conforme a su informe psicopedagógico (ACS o ACNS).",
        "Priorizar preguntas directas y desglosadas frente a enunciados complejos de razonamiento múltiple."
      ],
      "emotionalTips": [
        "Reforzar el esfuerzo perseverante por encima del resultado numérico final, fomentando su motivación y sentido de autoeficacia."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la lectura con marcapáginas de guía y preguntas literales directas."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Uso de recta numérica, tabla pitagórica y plantilla pautada para encolumnar operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Esquemas visuales guiados con imágenes representativas de los conceptos clave."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Actividades lúdicas de repetición y asociación imagen-palabra."
          ]
        }
      ],
      "ptHoursPerWeek": 3,
      "alHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-26",
    "stage": "PRIMARIA",
    "name": "de la Cruz Tolomia, Nelliyah Aleida",
    "grade": "2º Educación Primaria C",
    "tutor": "Tutor/a de 2º Educación Primaria C",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de aprendizaje (DEA / Lectoescritura)",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-20",
    "stage": "PRIMARIA",
    "name": "Foronda Laberiano, Jose Alejandro",
    "grade": "2º Educación Primaria B",
    "tutor": "Tutor/a de 2º Educación Primaria B",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de aprendizaje (DEA / Razonamiento)",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-24",
    "stage": "PRIMARIA",
    "name": "Luna López, Oliver",
    "grade": "2º Educación Primaria C",
    "tutor": "Tutor/a de 2º Educación Primaria C",
    "category": "ACNEE - Retraso General del Desarrollo",
    "specificNeed": "Retraso general del desarrollo",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "Significativa (ACS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a consolidar las competencias instrumentales básicas (lectura comprensiva, cálculo elemental y noción temporal), reduciendo el desfase madurativo.",
      "methodologicalAdaptations": [
        "Fraccionar las actividades en pasos cortos y bien definidos, con verificación intermedia del trabajo antes de pasar al siguiente ejercicio.",
        "Uso sistemático de material manipulativo (bloques lógicos, regletas, dinero ficticio) para afianzar conceptos abstractos.",
        "Instrucciones breves, unívocas y apoyadas en ejemplos visuales ya resueltos como modelo.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana al profesor y junto a un compañero tutor colaborador que preste apoyo silencioso en la organización de la mesa."
      ],
      "evaluationAdaptations": [
        "Adaptación de tiempos (+25% a +35%) y ajuste del nivel de exigencia conforme a su informe psicopedagógico (ACS o ACNS).",
        "Priorizar preguntas directas y desglosadas frente a enunciados complejos de razonamiento múltiple."
      ],
      "emotionalTips": [
        "Reforzar el esfuerzo perseverante por encima del resultado numérico final, fomentando su motivación y sentido de autoeficacia."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la lectura con marcapáginas de guía y preguntas literales directas."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Uso de recta numérica, tabla pitagórica y plantilla pautada para encolumnar operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Esquemas visuales guiados con imágenes representativas de los conceptos clave."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Actividades lúdicas de repetición y asociación imagen-palabra."
          ]
        }
      ],
      "ptHoursPerWeek": 3
    }
  },
  {
    "id": "NEAE-12",
    "stage": "PRIMARIA",
    "name": "Molinares Collantes, Antoine",
    "grade": "2º Educación Primaria A",
    "tutor": "Tutor/a de 2º Educación Primaria A",
    "category": "ACNEE - Trastorno Específico del Lenguaje (TEL/TDL)",
    "specificNeed": "Trastornos específicos del lenguaje que afectan a la comprensión y expresión; trastorno del desarrollo del lenguaje y la comunicación",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "Significativa (ACS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular, y consolidar las competencias instrumentales básicas (lectura comprensiva, cálculo elemental y noción temporal), reduciendo el desfase madurativo.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Fraccionar las actividades en pasos cortos y bien definidos, con verificación intermedia del trabajo antes de pasar al siguiente ejercicio.",
        "Uso sistemático de material manipulativo (bloques lógicos, regletas, dinero ficticio) para afianzar conceptos abstractos.",
        "Instrucciones breves, unívocas y apoyadas en ejemplos visuales ya resueltos como modelo.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates.",
        "Ubicación cercana al profesor y junto a un compañero tutor colaborador que preste apoyo silencioso en la organización de la mesa."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado.",
        "Adaptación de tiempos (+25% a +35%) y ajuste del nivel de exigencia conforme a su informe psicopedagógico (ACS o ACNS).",
        "Priorizar preguntas directas y desglosadas frente a enunciados complejos de razonamiento múltiple."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase.",
        "Reforzar el esfuerzo perseverante por encima del resultado numérico final, fomentando su motivación y sentido de autoeficacia."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos).",
            "Apoyar la lectura con marcapáginas de guía y preguntas literales directas."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas.",
            "Uso de recta numérica, tabla pitagórica y plantilla pautada para encolumnar operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos.",
            "Esquemas visuales guiados con imágenes representativas de los conceptos clave."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response).",
            "Actividades lúdicas de repetición y asociación imagen-palabra."
          ]
        }
      ],
      "ptHoursPerWeek": 3
    }
  },
  {
    "id": "NEAE-22",
    "stage": "PRIMARIA",
    "name": "Navas Rodríguez, Santiago",
    "grade": "2º Educación Primaria B",
    "tutor": "Tutor/a de 2º Educación Primaria B",
    "category": "ACNEAE - Dificultades de Lenguaje y Atención",
    "specificNeed": "Trastorno del desarrollo del lenguaje y la comunicación; Trastorno de atención",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular, y consolidar las competencias instrumentales básicas (lectura comprensiva, cálculo elemental y noción temporal), reduciendo el desfase madurativo, y entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Fraccionar las actividades en pasos cortos y bien definidos, con verificación intermedia del trabajo antes de pasar al siguiente ejercicio.",
        "Uso sistemático de material manipulativo (bloques lógicos, regletas, dinero ficticio) para afianzar conceptos abstractos.",
        "Instrucciones breves, unívocas y apoyadas en ejemplos visuales ya resueltos como modelo.",
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates.",
        "Ubicación cercana al profesor y junto a un compañero tutor colaborador que preste apoyo silencioso en la organización de la mesa.",
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado.",
        "Adaptación de tiempos (+25% a +35%) y ajuste del nivel de exigencia conforme a su informe psicopedagógico (ACS o ACNS).",
        "Priorizar preguntas directas y desglosadas frente a enunciados complejos de razonamiento múltiple.",
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase.",
        "Reforzar el esfuerzo perseverante por encima del resultado numérico final, fomentando su motivación y sentido de autoeficacia.",
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos).",
            "Apoyar la lectura con marcapáginas de guía y preguntas literales directas.",
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas.",
            "Uso de recta numérica, tabla pitagórica y plantilla pautada para encolumnar operaciones.",
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos.",
            "Esquemas visuales guiados con imágenes representativas de los conceptos clave.",
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response).",
            "Actividades lúdicas de repetición y asociación imagen-palabra.",
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-16",
    "stage": "PRIMARIA",
    "name": "Sanchez De Agustín, Marcos",
    "grade": "2º Educación Primaria A",
    "tutor": "Tutor/a de 2º Educación Primaria A",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas capacidades intelectuales",
    "ptTeacher": "",
    "curricularAdaptation": "Enriquecimiento",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular, y estimular el potencial intelectual y creativo mediante enriquecimiento curricular horizontal, retos de indagación y proyectos autónomos.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Compactación curricular ('Curriculum Compacting'): reducir ejercicios mecánicos y repetitivos cuando demuestre dominio y sustituirlos por retos de ampliación.",
        "Enriquecimiento horizontal e interdisciplinar (Taxonomía de Bloom: analizar, evaluar y crear) mediante proyectos de investigación autónoma.",
        "Disponer de una 'Carpeta de Enriquecimiento' con retos lógicos, lecturas avanzadas o experimentos a la que acudir al finalizar tareas comunes."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates.",
        "Acceso flexible a la biblioteca de aula, rincón STEM o recursos de investigación; agrupamientos flexibles por proyectos."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado.",
        "Evaluar proyectos de profundización mediante rúbricas que valoren la originalidad, rigor documental y pensamiento crítico.",
        "Cuidar el perfeccionismo disfuncional: valorar positivamente el riesgo intelectual y la asunción de errores en problemas difíciles."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase.",
        "Atender a la disincronía evolutiva (desfase entre alta capacidad cognitiva y madurez socioemocional o grafomotriz).",
        "Evitar exigir perfección constante o recriminarle fallos habituales por su condición de altas capacidades."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos).",
            "Proponer retos de creación literaria compleja, escritura periodística y lecturas de nivel superior."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas.",
            "Sustituir tandas de cuentas mecánicas por problemas de ingenio, acertijos lógicos y criptogramas numéricos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos.",
            "Fomentar proyectos aplicando el método científico y diseño de hipótesis experimentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response).",
            "Textos auténticos, lecturas graduadas avanzadas y debates sobre temas de actualidad."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-30",
    "stage": "PRIMARIA",
    "name": "Aquino Mayorga, Lennon Emir",
    "grade": "3º Educación Primaria A",
    "tutor": "Tutor/a de 3º Educación Primaria A",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención (TDAH)",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "alTeacher": "Especialista de Audición y Lenguaje (AL)",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 2,
      "alHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-38",
    "stage": "PRIMARIA",
    "name": "El Khamlichi Rodríguez, Ambar",
    "grade": "3º Educación Primaria C",
    "tutor": "Tutor/a de 3º Educación Primaria C",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención (TDAH)",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-07",
    "stage": "PRIMARIA",
    "name": "Hristov Kirov, Alexander",
    "grade": "3º Educación Primaria C",
    "tutor": "Tutor/a de 1º Educación Primaria C",
    "category": "ACNEE - Trastorno Específico del Lenguaje (TEL/TDL)",
    "specificNeed": "Trastornos específicos del lenguaje que afectan a la comprensión y expresión",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 3
    }
  },
  {
    "id": "NEAE-36",
    "stage": "PRIMARIA",
    "name": "Quiroz Muriel, Rodrigo",
    "grade": "3º Educación Primaria C",
    "tutor": "Tutor/a de 3º Educación Primaria C",
    "category": "ACNEE - Discapacidad Auditiva",
    "specificNeed": "Discapacidad auditiva (Hipoacusia)",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "alTeacher": "Especialista de Audición y Lenguaje (AL)",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a asegurar el pleno acceso perceptivo y cognitivo a la información oral, potenciando la lectura labiofacial y la adecuación acústica del aula.",
      "methodologicalAdaptations": [
        "Hablar siempre de frente al alumno, con iluminación adecuada y sin taparse la boca ni explicar mientras se escribe de espaldas en la pizarra.",
        "Asegurar el contacto visual antes de dar una instrucción general; repetir o sintetizar las aportaciones de compañeros situados detrás.",
        "Activar subtítulos en todos los vídeos o recursos audiovisuales empleados en clase.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en segunda fila central, con el oído de mejor resto auditivo orientado al docente y visión panorámica del aula.",
        "Cerrar puertas y ventanas en momentos de audición y colocar fieltros en patas de sillas para reducir la reverberación."
      ],
      "evaluationAdaptations": [
        "Adaptar pruebas auditivas (dictados o listening) mediante lectura labiofacial directa y clara por el profesor, o entrega de guion escrito.",
        "Entregar por escrito cualquier indicación o aclaración transmitida en voz alta durante el examen."
      ],
      "emotionalTips": [
        "Tener en cuenta la fatiga atencional derivada de la lectura labial sostenida durante toda la jornada escolar."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "En dictados, situarse a corta distancia y modular la velocidad articulatoria."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Escribir siempre en la pizarra el procedimiento y los cálculos explicados oralmente."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Facilitar resúmenes o esquemas visuales previos de cada tema."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Adaptar listenings mediante transcripción o lectura labial directa por el docente."
          ]
        }
      ],
      "ptHoursPerWeek": 3,
      "alHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-OF-25",
    "stage": "PRIMARIA",
    "name": "Román Matilla, Enrique",
    "grade": "3º Educación Primaria A",
    "tutor": "Tutor/a de 3º Educación Primaria A",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención; Trastorno de aprendizaje",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora, y garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad.",
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad.",
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz).",
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control.",
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación.",
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos.",
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos.",
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-34",
    "stage": "PRIMARIA",
    "name": "Zapata Pérez, Lucía",
    "grade": "3º Educación Primaria B",
    "tutor": "Tutor/a de 3º Educación Primaria B",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas capacidades intelectuales",
    "ptTeacher": "",
    "curricularAdaptation": "Enriquecimiento",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular, y estimular el potencial intelectual y creativo mediante enriquecimiento curricular horizontal, retos de indagación y proyectos autónomos.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Compactación curricular ('Curriculum Compacting'): reducir ejercicios mecánicos y repetitivos cuando demuestre dominio y sustituirlos por retos de ampliación.",
        "Enriquecimiento horizontal e interdisciplinar (Taxonomía de Bloom: analizar, evaluar y crear) mediante proyectos de investigación autónoma.",
        "Disponer de una 'Carpeta de Enriquecimiento' con retos lógicos, lecturas avanzadas o experimentos a la que acudir al finalizar tareas comunes."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates.",
        "Acceso flexible a la biblioteca de aula, rincón STEM o recursos de investigación; agrupamientos flexibles por proyectos."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado.",
        "Evaluar proyectos de profundización mediante rúbricas que valoren la originalidad, rigor documental y pensamiento crítico.",
        "Cuidar el perfeccionismo disfuncional: valorar positivamente el riesgo intelectual y la asunción de errores en problemas difíciles."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase.",
        "Atender a la disincronía evolutiva (desfase entre alta capacidad cognitiva y madurez socioemocional o grafomotriz).",
        "Evitar exigir perfección constante o recriminarle fallos habituales por su condición de altas capacidades."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos).",
            "Proponer retos de creación literaria compleja, escritura periodística y lecturas de nivel superior."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas.",
            "Sustituir tandas de cuentas mecánicas por problemas de ingenio, acertijos lógicos y criptogramas numéricos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos.",
            "Fomentar proyectos aplicando el método científico y diseño de hipótesis experimentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response).",
            "Textos auténticos, lecturas graduadas avanzadas y debates sobre temas de actualidad."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-48",
    "stage": "PRIMARIA",
    "name": "Alhuay Buitron, Piero Emir",
    "grade": "4º Educación Primaria B",
    "tutor": "Tutor/a de 4º Educación Primaria B",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas capacidades intelectuales",
    "ptTeacher": "",
    "curricularAdaptation": "Enriquecimiento",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular, y estimular el potencial intelectual y creativo mediante enriquecimiento curricular horizontal, retos de indagación y proyectos autónomos.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Compactación curricular ('Curriculum Compacting'): reducir ejercicios mecánicos y repetitivos cuando demuestre dominio y sustituirlos por retos de ampliación.",
        "Enriquecimiento horizontal e interdisciplinar (Taxonomía de Bloom: analizar, evaluar y crear) mediante proyectos de investigación autónoma.",
        "Disponer de una 'Carpeta de Enriquecimiento' con retos lógicos, lecturas avanzadas o experimentos a la que acudir al finalizar tareas comunes."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates.",
        "Acceso flexible a la biblioteca de aula, rincón STEM o recursos de investigación; agrupamientos flexibles por proyectos."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado.",
        "Evaluar proyectos de profundización mediante rúbricas que valoren la originalidad, rigor documental y pensamiento crítico.",
        "Cuidar el perfeccionismo disfuncional: valorar positivamente el riesgo intelectual y la asunción de errores en problemas difíciles."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase.",
        "Atender a la disincronía evolutiva (desfase entre alta capacidad cognitiva y madurez socioemocional o grafomotriz).",
        "Evitar exigir perfección constante o recriminarle fallos habituales por su condición de altas capacidades."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos).",
            "Proponer retos de creación literaria compleja, escritura periodística y lecturas de nivel superior."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas.",
            "Sustituir tandas de cuentas mecánicas por problemas de ingenio, acertijos lógicos y criptogramas numéricos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos.",
            "Fomentar proyectos aplicando el método científico y diseño de hipótesis experimentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response).",
            "Textos auténticos, lecturas graduadas avanzadas y debates sobre temas de actualidad."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-OF-28",
    "stage": "PRIMARIA",
    "name": "Chuquimango Urbina, Adrián Matheo",
    "grade": "4º Educación Primaria A",
    "tutor": "Tutor/a de 4º Educación Primaria A",
    "category": "ACNEE - Trastorno Específico del Lenguaje (TEL/TDL)",
    "specificNeed": "Trastornos específicos del lenguaje que afectan a la comprensión y expresión",
    "ptTeacher": "Daniel Asenjo (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 3
    }
  },
  {
    "id": "NEAE-OF-29",
    "stage": "PRIMARIA",
    "name": "Lafuente González, Gonzalo",
    "grade": "4º Educación Primaria B",
    "tutor": "Tutor/a de 4º Educación Primaria B",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención; Trastorno de aprendizaje",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora, y garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad.",
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad.",
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz).",
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control.",
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación.",
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos.",
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos.",
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-OF-30",
    "stage": "PRIMARIA",
    "name": "Li , Zan",
    "grade": "4º Educación Primaria A",
    "tutor": "Tutor/a de 4º Educación Primaria A",
    "category": "ACNEAE - Compensación Educativa",
    "specificNeed": "Compensación educativa",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a garantizar la equidad educativa, la inmersión lingüística y la nivelación de competencias curriculares básicas.",
      "methodologicalAdaptations": [
        "Apoyo lingüístico específico en vocabulario vehicular de la escuela mediante glosarios ilustrados bilingües/visuales.",
        "Enseñanza cooperativa en pequeños grupos con compañeros tutores de referencia lingüística."
      ],
      "environmentalAdaptations": [
        "Entorno inclusivo y acogedor, valorando la diversidad cultural en las dinámicas del aula."
      ],
      "evaluationAdaptations": [
        "Priorizar la evaluación de competencias básicas y progreso personal sobre estándares abstractos no asimilados."
      ],
      "emotionalTips": [
        "Fomentar el sentido de pertenencia y autoestima académica en el grupo-clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Refuerzo de lectoescritura funcional y vocabulario temático cotidiano."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Enunciados con lenguaje directo y apoyo gráfico en problemas cotidianos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Mapas conceptuales bilingües o ilustrados."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Aprovechamiento de competencias plurilingües previas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-55",
    "stage": "PRIMARIA",
    "name": "Ramajo García, Leo",
    "grade": "4º Educación Primaria C",
    "tutor": "Tutor/a de 4º Educación Primaria C",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas capacidades intelectuales",
    "ptTeacher": "",
    "curricularAdaptation": "Enriquecimiento",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular, y estimular el potencial intelectual y creativo mediante enriquecimiento curricular horizontal, retos de indagación y proyectos autónomos.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Compactación curricular ('Curriculum Compacting'): reducir ejercicios mecánicos y repetitivos cuando demuestre dominio y sustituirlos por retos de ampliación.",
        "Enriquecimiento horizontal e interdisciplinar (Taxonomía de Bloom: analizar, evaluar y crear) mediante proyectos de investigación autónoma.",
        "Disponer de una 'Carpeta de Enriquecimiento' con retos lógicos, lecturas avanzadas o experimentos a la que acudir al finalizar tareas comunes."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates.",
        "Acceso flexible a la biblioteca de aula, rincón STEM o recursos de investigación; agrupamientos flexibles por proyectos."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado.",
        "Evaluar proyectos de profundización mediante rúbricas que valoren la originalidad, rigor documental y pensamiento crítico.",
        "Cuidar el perfeccionismo disfuncional: valorar positivamente el riesgo intelectual y la asunción de errores en problemas difíciles."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase.",
        "Atender a la disincronía evolutiva (desfase entre alta capacidad cognitiva y madurez socioemocional o grafomotriz).",
        "Evitar exigir perfección constante o recriminarle fallos habituales por su condición de altas capacidades."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos).",
            "Proponer retos de creación literaria compleja, escritura periodística y lecturas de nivel superior."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas.",
            "Sustituir tandas de cuentas mecánicas por problemas de ingenio, acertijos lógicos y criptogramas numéricos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos.",
            "Fomentar proyectos aplicando el método científico y diseño de hipótesis experimentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response).",
            "Textos auténticos, lecturas graduadas avanzadas y debates sobre temas de actualidad."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-OF-32",
    "stage": "PRIMARIA",
    "name": "Wanarski , Víctor",
    "grade": "4º Educación Primaria C",
    "tutor": "Tutor/a de 4º Educación Primaria C",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención (TDA Inatento)",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-OF-33",
    "stage": "PRIMARIA",
    "name": "Cabrera Rico, Luis",
    "grade": "5º Educación Primaria A",
    "tutor": "Tutor/a de 5º Educación Primaria A",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención y dificultades de aprendizaje",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora, y garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad.",
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad.",
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz).",
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control.",
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación.",
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos.",
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos.",
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    }
  },
  {
    "id": "NEAE-56",
    "stage": "PRIMARIA",
    "name": "Chino Camacho, Jhonatan Aarón",
    "grade": "5º Educación Primaria A",
    "tutor": "Tutor/a de 5º Educación Primaria A",
    "category": "ACNEE - Trastorno Específico del Lenguaje (TEL/TDL)",
    "specificNeed": "Trastornos específicos del lenguaje que afectan a la comprensión y expresión",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 3
    }
  },
  {
    "id": "NEAE-OF-35",
    "stage": "PRIMARIA",
    "name": "Fabián León, Javier",
    "grade": "5º Educación Primaria A",
    "tutor": "Tutor/a de 5º Educación Primaria A",
    "category": "ACNEAE - Retraso Madurativo",
    "specificNeed": "Retraso madurativo",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar las competencias instrumentales básicas (lectura comprensiva, cálculo elemental y noción temporal), reduciendo el desfase madurativo.",
      "methodologicalAdaptations": [
        "Fraccionar las actividades en pasos cortos y bien definidos, con verificación intermedia del trabajo antes de pasar al siguiente ejercicio.",
        "Uso sistemático de material manipulativo (bloques lógicos, regletas, dinero ficticio) para afianzar conceptos abstractos.",
        "Instrucciones breves, unívocas y apoyadas en ejemplos visuales ya resueltos como modelo.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana al profesor y junto a un compañero tutor colaborador que preste apoyo silencioso en la organización de la mesa."
      ],
      "evaluationAdaptations": [
        "Adaptación de tiempos (+25% a +35%) y ajuste del nivel de exigencia conforme a su informe psicopedagógico (ACS o ACNS).",
        "Priorizar preguntas directas y desglosadas frente a enunciados complejos de razonamiento múltiple."
      ],
      "emotionalTips": [
        "Reforzar el esfuerzo perseverante por encima del resultado numérico final, fomentando su motivación y sentido de autoeficacia."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la lectura con marcapáginas de guía y preguntas literales directas."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Uso de recta numérica, tabla pitagórica y plantilla pautada para encolumnar operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Esquemas visuales guiados con imágenes representativas de los conceptos clave."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Actividades lúdicas de repetición y asociación imagen-palabra."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-65",
    "stage": "PRIMARIA",
    "name": "García Fernández, Andrea",
    "grade": "5º Educación Primaria B",
    "tutor": "Tutor/a de 5º Educación Primaria B",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención (TDAH)",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-68",
    "stage": "PRIMARIA",
    "name": "López Castillo, Rocío",
    "grade": "5º Educación Primaria C",
    "tutor": "Tutor/a de 5º Educación Primaria C",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Otras Dificultades Específicas de Aprendizaje; Trastorno de aprendizaje (Dislexia)",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-57",
    "stage": "PRIMARIA",
    "name": "Martínez Cobos, Pablo",
    "grade": "5º Educación Primaria A",
    "tutor": "Tutor/a de 5º Educación Primaria A",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de aprendizaje (DEA)",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-64",
    "stage": "PRIMARIA",
    "name": "Michel Ovando, Lionel Robert",
    "grade": "5º Educación Primaria B",
    "tutor": "Tutor/a de 5º Educación Primaria B",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno del desarrollo del lenguaje y la comunicación",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular, y consolidar las competencias instrumentales básicas (lectura comprensiva, cálculo elemental y noción temporal), reduciendo el desfase madurativo.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Fraccionar las actividades en pasos cortos y bien definidos, con verificación intermedia del trabajo antes de pasar al siguiente ejercicio.",
        "Uso sistemático de material manipulativo (bloques lógicos, regletas, dinero ficticio) para afianzar conceptos abstractos.",
        "Instrucciones breves, unívocas y apoyadas en ejemplos visuales ya resueltos como modelo.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates.",
        "Ubicación cercana al profesor y junto a un compañero tutor colaborador que preste apoyo silencioso en la organización de la mesa."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado.",
        "Adaptación de tiempos (+25% a +35%) y ajuste del nivel de exigencia conforme a su informe psicopedagógico (ACS o ACNS).",
        "Priorizar preguntas directas y desglosadas frente a enunciados complejos de razonamiento múltiple."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase.",
        "Reforzar el esfuerzo perseverante por encima del resultado numérico final, fomentando su motivación y sentido de autoeficacia."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos).",
            "Apoyar la lectura con marcapáginas de guía y preguntas literales directas."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas.",
            "Uso de recta numérica, tabla pitagórica y plantilla pautada para encolumnar operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos.",
            "Esquemas visuales guiados con imágenes representativas de los conceptos clave."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response).",
            "Actividades lúdicas de repetición y asociación imagen-palabra."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-OF-40",
    "stage": "PRIMARIA",
    "name": "Rocha Sandoval, Luca Aitor",
    "grade": "5º Educación Primaria B",
    "tutor": "Tutor/a de 5º Educación Primaria B",
    "category": "ACNEAE - Retraso Madurativo",
    "specificNeed": "Retraso madurativo",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar las competencias instrumentales básicas (lectura comprensiva, cálculo elemental y noción temporal), reduciendo el desfase madurativo.",
      "methodologicalAdaptations": [
        "Fraccionar las actividades en pasos cortos y bien definidos, con verificación intermedia del trabajo antes de pasar al siguiente ejercicio.",
        "Uso sistemático de material manipulativo (bloques lógicos, regletas, dinero ficticio) para afianzar conceptos abstractos.",
        "Instrucciones breves, unívocas y apoyadas en ejemplos visuales ya resueltos como modelo.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana al profesor y junto a un compañero tutor colaborador que preste apoyo silencioso en la organización de la mesa."
      ],
      "evaluationAdaptations": [
        "Adaptación de tiempos (+25% a +35%) y ajuste del nivel de exigencia conforme a su informe psicopedagógico (ACS o ACNS).",
        "Priorizar preguntas directas y desglosadas frente a enunciados complejos de razonamiento múltiple."
      ],
      "emotionalTips": [
        "Reforzar el esfuerzo perseverante por encima del resultado numérico final, fomentando su motivación y sentido de autoeficacia."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la lectura con marcapáginas de guía y preguntas literales directas."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Uso de recta numérica, tabla pitagórica y plantilla pautada para encolumnar operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Esquemas visuales guiados con imágenes representativas de los conceptos clave."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Actividades lúdicas de repetición y asociación imagen-palabra."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-63",
    "stage": "PRIMARIA",
    "name": "Velasco Correa, David",
    "grade": "5º Educación Primaria B",
    "tutor": "Tutor/a de 5º Educación Primaria B",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de aprendizaje; Otras Dificultades Específicas de Aprendizaje",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-71",
    "stage": "PRIMARIA",
    "name": "Zapata Pérez, Paula",
    "grade": "5º Educación Primaria C",
    "tutor": "Tutor/a de 5º Educación Primaria C",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas capacidades intelectuales",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "Enriquecimiento",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular, y estimular el potencial intelectual y creativo mediante enriquecimiento curricular horizontal, retos de indagación y proyectos autónomos.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Compactación curricular ('Curriculum Compacting'): reducir ejercicios mecánicos y repetitivos cuando demuestre dominio y sustituirlos por retos de ampliación.",
        "Enriquecimiento horizontal e interdisciplinar (Taxonomía de Bloom: analizar, evaluar y crear) mediante proyectos de investigación autónoma.",
        "Disponer de una 'Carpeta de Enriquecimiento' con retos lógicos, lecturas avanzadas o experimentos a la que acudir al finalizar tareas comunes.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates.",
        "Acceso flexible a la biblioteca de aula, rincón STEM o recursos de investigación; agrupamientos flexibles por proyectos."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado.",
        "Evaluar proyectos de profundización mediante rúbricas que valoren la originalidad, rigor documental y pensamiento crítico.",
        "Cuidar el perfeccionismo disfuncional: valorar positivamente el riesgo intelectual y la asunción de errores en problemas difíciles."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase.",
        "Atender a la disincronía evolutiva (desfase entre alta capacidad cognitiva y madurez socioemocional o grafomotriz).",
        "Evitar exigir perfección constante o recriminarle fallos habituales por su condición de altas capacidades."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos).",
            "Proponer retos de creación literaria compleja, escritura periodística y lecturas de nivel superior."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas.",
            "Sustituir tandas de cuentas mecánicas por problemas de ingenio, acertijos lógicos y criptogramas numéricos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos.",
            "Fomentar proyectos aplicando el método científico y diseño de hipótesis experimentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response).",
            "Textos auténticos, lecturas graduadas avanzadas y debates sobre temas de actualidad."
          ]
        }
      ],
      "ptHoursPerWeek": 1
    }
  },
  {
    "id": "NEAE-76",
    "stage": "PRIMARIA",
    "name": "Arribas Casado, Arturo",
    "grade": "6º Educación Primaria A",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención (TDAH)",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-90",
    "stage": "PRIMARIA",
    "name": "Astupiña Chavesta, Álvaro Lionel",
    "grade": "6º Educación Primaria C",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "category": "ACNEE - Trastorno Específico del Lenguaje (TEL/TDL)",
    "specificNeed": "Trastornos específicos del lenguaje que afectan a la comprensión y expresión",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "Significativa (ACS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 3
    }
  },
  {
    "id": "NEAE-87",
    "stage": "PRIMARIA",
    "name": "Calzadilla Páramo, Ana",
    "grade": "6º Educación Primaria B",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de aprendizaje (DEA / Dislexia)",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-92",
    "stage": "PRIMARIA",
    "name": "Cantero Pérez, María",
    "grade": "6º Educación Primaria C",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "category": "ACNEE - Trastorno Específico del Lenguaje (TEL/TDL)",
    "specificNeed": "Trastornos específicos del lenguaje que afectan a la comprensión y expresión",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 3
    }
  },
  {
    "id": "NEAE-74",
    "stage": "PRIMARIA",
    "name": "Cardoza Flores, Ysabella Ariana",
    "grade": "6º Educación Primaria A",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "category": "ACNEE - Trastorno del Espectro Autista (TEA)",
    "specificNeed": "Trastorno del espectro autista (TEA)",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "Significativa (ACS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a garantizar la predictibilidad del entorno escolar, la estructuración visual TEACCH, la regulación sensorial y la comprensión socio-comunicativa.",
      "methodologicalAdaptations": [
        "Estructuración visual TEACCH del trabajo diario: presentar siempre en su mesa una tira o secuencia visual con las tareas de la sesión ('Primero -> Después -> Por último').",
        "Anticipación sistemática ante cambios imprevistos: avisar con apoyo visual cualquier modificación de horario, profesorado, excursión o actividad especial.",
        "Lenguaje oral directo, conciso y literal: evitar ironías, metáforas, dobles sentidos o preguntas retóricas que generen confusión pragmática.",
        "Integración funcional de sus intereses restringidos como puente motivacional para introducir contenidos curriculares nuevos.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona de baja sobrecarga acústica y visual, lejos de puertas de paso continuo, timbres o ventanas distractores.",
        "Habilitar una tarjeta visual pactada de regulación ('Rincón de Calma' / descanso sensorial de 3-5 minutos) ante sobrecarga acústica o motriz."
      ],
      "evaluationAdaptations": [
        "Evaluación adaptada según su Adaptación Curricular Significativa (ACS) o ACNS, priorizando ítems estructurados, opción múltiple o relacionar conceptos.",
        "Ampliación del tiempo de examen (+35% a +50%) o división de la prueba en dos bloques para evitar fatiga cognitiva."
      ],
      "emotionalTips": [
        "No interpretar la rigidez cognitiva, falta de contacto visual o literalidad como desobediencia o desafío de autoridad.",
        "Supervisión preventiva en tiempos no estructurados (recreo, pasillos, entradas y salidas) apoyándole en la interacción social con iguales."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Utilizar esquemas visuales y organizadores gráficos para la comprensión lectora; aclarar explícitamente giros idiomáticos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Estructurar la resolución de problemas en plantilla fija visual (Datos / Dibujo / Operación / Solución); usar apoyos manipulativos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Presentar los temas mediante esquemas visuales causa-efecto y mapas conceptuales claros."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Trabajar vocabulario funcional mediante flashcards visuales sin sobrecarga de producción oral pública forzada."
          ]
        }
      ],
      "ptHoursPerWeek": 4
    }
  },
  {
    "id": "NEAE-75",
    "stage": "PRIMARIA",
    "name": "Castrejón Rex, Valle",
    "grade": "6º Educación Primaria A",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención; Trastornos específicos del desarrollo del habla y del lenguaje",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular, y consolidar las competencias instrumentales básicas (lectura comprensiva, cálculo elemental y noción temporal), reduciendo el desfase madurativo, y entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Fraccionar las actividades en pasos cortos y bien definidos, con verificación intermedia del trabajo antes de pasar al siguiente ejercicio.",
        "Uso sistemático de material manipulativo (bloques lógicos, regletas, dinero ficticio) para afianzar conceptos abstractos.",
        "Instrucciones breves, unívocas y apoyadas en ejemplos visuales ya resueltos como modelo.",
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates.",
        "Ubicación cercana al profesor y junto a un compañero tutor colaborador que preste apoyo silencioso en la organización de la mesa.",
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado.",
        "Adaptación de tiempos (+25% a +35%) y ajuste del nivel de exigencia conforme a su informe psicopedagógico (ACS o ACNS).",
        "Priorizar preguntas directas y desglosadas frente a enunciados complejos de razonamiento múltiple.",
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase.",
        "Reforzar el esfuerzo perseverante por encima del resultado numérico final, fomentando su motivación y sentido de autoeficacia.",
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos).",
            "Apoyar la lectura con marcapáginas de guía y preguntas literales directas.",
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas.",
            "Uso de recta numérica, tabla pitagórica y plantilla pautada para encolumnar operaciones.",
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos.",
            "Esquemas visuales guiados con imágenes representativas de los conceptos clave.",
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response).",
            "Actividades lúdicas de repetición y asociación imagen-palabra.",
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-OF-49",
    "stage": "PRIMARIA",
    "name": "Gonzales Chavarría, María Laura",
    "grade": "6º Educación Primaria C",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "category": "ACNEE - Trastorno Específico del Lenguaje (TEL/TDL)",
    "specificNeed": "Trastornos específicos del lenguaje que afectan a la comprensión y expresión",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 3
    }
  },
  {
    "id": "NEAE-82",
    "stage": "PRIMARIA",
    "name": "Gómez Berzosa, Salvador",
    "grade": "6º Educación Primaria B",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención; Trastorno de aprendizaje",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora, y garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad.",
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad.",
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz).",
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control.",
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación.",
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos.",
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos.",
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-OF-51",
    "stage": "PRIMARIA",
    "name": "Hristov Kirov, Christian",
    "grade": "6º Educación Primaria C",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "category": "ACNEE - Trastorno Específico del Lenguaje (TEL/TDL)",
    "specificNeed": "Trastornos específicos del lenguaje que afectan a la comprensión y expresión",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 3
    }
  },
  {
    "id": "NEAE-85",
    "stage": "PRIMARIA",
    "name": "Moreno González, Daniel",
    "grade": "6º Educación Primaria B",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención (TDAH)",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-95",
    "stage": "PRIMARIA",
    "name": "Oberlander Testillano, Dariusz",
    "grade": "6º Educación Primaria C",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de aprendizaje; Trastorno por Déficit de Atención e Hiperactividad",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora, y garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad.",
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad.",
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz).",
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control.",
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación.",
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos.",
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos.",
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-83",
    "stage": "PRIMARIA",
    "name": "Paz Castillo, Carlos Renato",
    "grade": "6º Educación Primaria B",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención (TDAH)",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-77",
    "stage": "PRIMARIA",
    "name": "Prior Gómez de Ramón, Pedro",
    "grade": "6º Educación Primaria A",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas capacidades intelectuales",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "Enriquecimiento",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "alTeacher": "Especialista de Audición y Lenguaje (AL)",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular, y estimular el potencial intelectual y creativo mediante enriquecimiento curricular horizontal, retos de indagación y proyectos autónomos.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Compactación curricular ('Curriculum Compacting'): reducir ejercicios mecánicos y repetitivos cuando demuestre dominio y sustituirlos por retos de ampliación.",
        "Enriquecimiento horizontal e interdisciplinar (Taxonomía de Bloom: analizar, evaluar y crear) mediante proyectos de investigación autónoma.",
        "Disponer de una 'Carpeta de Enriquecimiento' con retos lógicos, lecturas avanzadas o experimentos a la que acudir al finalizar tareas comunes.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates.",
        "Acceso flexible a la biblioteca de aula, rincón STEM o recursos de investigación; agrupamientos flexibles por proyectos."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado.",
        "Evaluar proyectos de profundización mediante rúbricas que valoren la originalidad, rigor documental y pensamiento crítico.",
        "Cuidar el perfeccionismo disfuncional: valorar positivamente el riesgo intelectual y la asunción de errores en problemas difíciles."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase.",
        "Atender a la disincronía evolutiva (desfase entre alta capacidad cognitiva y madurez socioemocional o grafomotriz).",
        "Evitar exigir perfección constante o recriminarle fallos habituales por su condición de altas capacidades."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos).",
            "Proponer retos de creación literaria compleja, escritura periodística y lecturas de nivel superior."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas.",
            "Sustituir tandas de cuentas mecánicas por problemas de ingenio, acertijos lógicos y criptogramas numéricos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos.",
            "Fomentar proyectos aplicando el método científico y diseño de hipótesis experimentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response).",
            "Textos auténticos, lecturas graduadas avanzadas y debates sobre temas de actualidad."
          ]
        }
      ],
      "ptHoursPerWeek": 1,
      "alHoursPerWeek": 1
    }
  },
  {
    "id": "NEAE-86",
    "stage": "PRIMARIA",
    "name": "Pérez de la Torre, Luis",
    "grade": "6º Educación Primaria B",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de aprendizaje; Otras Dificultades Específicas de Aprendizaje",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-84",
    "stage": "PRIMARIA",
    "name": "Trinidad Santalla, Marcelo",
    "grade": "6º Educación Primaria B",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención (TDAH)",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-100",
    "stage": "PRIMARIA",
    "name": "Vargas Villaroel, Jeff Celso",
    "grade": "6º Educación Primaria C",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención; Trastorno por Déficit de Atención e Hiperactividad",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-73",
    "stage": "PRIMARIA",
    "name": "Verdasco Venegas, Darío",
    "grade": "6º Educación Primaria A",
    "tutor": "Tutor/a de 6º Educación Primaria A",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención; Trastorno por Déficit de Atención e Hiperactividad",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-103",
    "stage": "PRIMARIA",
    "name": "Vidal Ruiz, Santiago",
    "grade": "6º Educación Primaria C",
    "tutor": "Tutor/a de 6º Educación Primaria C",
    "category": "ACNEAE - Dificultades Específicas de Aprendizaje",
    "specificNeed": "Trastorno de atención; Trastorno por Déficit de Atención e Hiperactividad",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 2
    }
  },
  {
    "id": "NEAE-88",
    "stage": "PRIMARIA",
    "name": "Villa Esteves, Alma",
    "grade": "6º Educación Primaria B",
    "tutor": "Tutor/a de 6º Educación Primaria B",
    "category": "ACNEAE - Altas Capacidades Intelectuales (AACC)",
    "specificNeed": "Altas capacidades intelectuales",
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "Enriquecimiento",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular, y estimular el potencial intelectual y creativo mediante enriquecimiento curricular horizontal, retos de indagación y proyectos autónomos.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Compactación curricular ('Curriculum Compacting'): reducir ejercicios mecánicos y repetitivos cuando demuestre dominio y sustituirlos por retos de ampliación.",
        "Enriquecimiento horizontal e interdisciplinar (Taxonomía de Bloom: analizar, evaluar y crear) mediante proyectos de investigación autónoma.",
        "Disponer de una 'Carpeta de Enriquecimiento' con retos lógicos, lecturas avanzadas o experimentos a la que acudir al finalizar tareas comunes.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates.",
        "Acceso flexible a la biblioteca de aula, rincón STEM o recursos de investigación; agrupamientos flexibles por proyectos."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado.",
        "Evaluar proyectos de profundización mediante rúbricas que valoren la originalidad, rigor documental y pensamiento crítico.",
        "Cuidar el perfeccionismo disfuncional: valorar positivamente el riesgo intelectual y la asunción de errores en problemas difíciles."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase.",
        "Atender a la disincronía evolutiva (desfase entre alta capacidad cognitiva y madurez socioemocional o grafomotriz).",
        "Evitar exigir perfección constante o recriminarle fallos habituales por su condición de altas capacidades."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos).",
            "Proponer retos de creación literaria compleja, escritura periodística y lecturas de nivel superior."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas.",
            "Sustituir tandas de cuentas mecánicas por problemas de ingenio, acertijos lógicos y criptogramas numéricos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos.",
            "Fomentar proyectos aplicando el método científico y diseño de hipótesis experimentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response).",
            "Textos auténticos, lecturas graduadas avanzadas y debates sobre temas de actualidad."
          ]
        }
      ],
      "ptHoursPerWeek": 1
    }
  },
  {
    "id": "NEAE-OF-30",
    "stage": "PRIMARIA",
    "name": "Li , Zan",
    "grade": "4º Educación Primaria A",
    "tutor": "Tutor/a de 4º Educación Primaria A",
    "category": "ACNEAE - Compensación Educativa",
    "specificNeed": "Compensación educativa",
    "ptTeacher": "",
    "curricularAdaptation": "No Significativa (ACNS)",
    "status": "Activo",
    "lastReviewDate": "2026-10-21",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a garantizar la equidad educativa, la inmersión lingüística y la nivelación de competencias curriculares básicas.",
      "methodologicalAdaptations": [
        "Apoyo lingüístico específico en vocabulario vehicular de la escuela mediante glosarios ilustrados bilingües/visuales.",
        "Enseñanza cooperativa en pequeños grupos con compañeros tutores de referencia lingüística."
      ],
      "environmentalAdaptations": [
        "Entorno inclusivo y acogedor, valorando la diversidad cultural en las dinámicas del aula."
      ],
      "evaluationAdaptations": [
        "Priorizar la evaluación de competencias básicas y progreso personal sobre estándares abstractos no asimilados."
      ],
      "emotionalTips": [
        "Fomentar el sentido de pertenencia y autoestima académica en el grupo-clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Refuerzo de lectoescritura funcional y vocabulario temático cotidiano."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Enunciados con lenguaje directo y apoyo gráfico en problemas cotidianos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Mapas conceptuales bilingües o ilustrados."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Aprovechamiento de competencias plurilingües previas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    }
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a afianzar el sentido numérico, la estructuración espacial de operaciones y el razonamiento lógico-matemático mediante enfoque manipulativo CPA.",
      "methodologicalAdaptations": [
        "Aplicar la secuencia Concreto -> Pictórico -> Abstracto (CPA): material manipulativo (regletas, ábaco, bloques multibase) antes del algoritmo.",
        "Plantillas pautadas con código de color en columnas (Centenas - Decenas - Unidades) para evitar errores de encolumnado.",
        "Plantilla de resolución de problemas en 4 fases: 1) Subrayar datos, 2) Dibujo/esquema, 3) Operación, 4) Solución.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Tener a la vista en su mesa la recta numérica y la tabla pitagórica plastificada."
      ],
      "evaluationAdaptations": [
        "Calificar los problemas por el planteamiento y razonamiento lógico (hasta el 70% de la nota), sin anular el ejercicio por error de cálculo mecánico.",
        "Tiempo adicional (+25%) y reducción del número de operaciones mecánicas repetitivas."
      ],
      "emotionalTips": [
        "Reducir la ansiedad matemática: evitar pruebas cronometradas de cálculo mental rápido en público."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la comprensión de secuencias temporales mediante líneas del tiempo visuales."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Cuadrícula grande adaptada, apoyo de tabla pitagórica y calculadora en fases complejas de resolución."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Tablas de conversión visual directa para cambios de unidades de medida."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyar con esquemas visuales el aprendizaje de las horas y fechas en lengua extranjera."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
    "ptTeacher": "María (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento.",
        "Coordinación estrecha y semanal con María (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal.",
        "Coordinación estrecha y semanal con Daniel Asenjo (PT): alinear objetivos del apoyo específico con las unidades didácticas del aula ordinaria."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a atención psicopedagógica personalizada en el aula ordinaria, consolidando las competencias instrumentales y la autorregulación en el trabajo.",
      "methodologicalAdaptations": [
        "Fraccionamiento de tareas en pasos breves y supervisión periódica del avance.",
        "Instrucciones directas, apoyos visuales y verificación de la comprensión antes de comenzar.",
        "Uso de organizadores gráficos y técnicas de estudio guiadas."
      ],
      "environmentalAdaptations": [
        "Ubicación preferente en primeras filas cerca del profesor y de la pizarra.",
        "Mesa de trabajo despejada de estímulos innecesarios para favorecer la concentración."
      ],
      "evaluationAdaptations": [
        "Ampliación del tiempo en pruebas escritas (+25%) y lectura previa de enunciados.",
        "Formato de examen con espaciado amplio y preguntas desglosadas."
      ],
      "emotionalTips": [
        "Refuerzo positivo diario ante el esfuerzo, perseverancia y pequeños logros.",
        "Ambiente de aula seguro que normalice el error como oportunidad de aprendizaje."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Lecturas guiadas con preguntas de comprensión directa y guiones para estructurar la expresión escrita."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyo visual en pizarra y comprobación guiada del planteamiento antes de la ejecución de operaciones."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Uso de esquemas visuales, mapas conceptuales y resúmenes de ideas esenciales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Apoyo visual en vocabulario y rutinas orales comunicativas dinámicas."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora, y garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase.",
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad.",
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad.",
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz).",
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control.",
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación.",
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos.",
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos.",
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a compensar la barrera comunicativa oral y escrita, afianzando la discriminación fonológica, la estructuración morfosintáctica y el vocabulario curricular.",
      "methodologicalAdaptations": [
        "Acompañar toda instrucción verbal con soporte visual complementario (imágenes, esquemas en pizarra, palabras clave subrayadas).",
        "Técnica de modelado y expansión indirecta: devolverle la frase gramaticalmente correcta de forma natural, sin corregir bruscamente ni exigir repetición punitiva.",
        "Anticipar el vocabulario técnico de cada unidad didáctica mediante un glosario visual con definición sencilla previa a la explicación grupal."
      ],
      "environmentalAdaptations": [
        "Ubicación en primeras filas centrada con visión directa del rostro del docente para facilitar la lectura labiofacial y claves gestuales.",
        "Controlar el ruido ambiental del aula durante las explicaciones orales y debates."
      ],
      "evaluationAdaptations": [
        "Lectura mediada de los enunciados del examen por parte del docente para asegurar que comprende la consigna.",
        "No penalizar incorrecciones morfosintácticas o léxicas en asignaturas no lingüísticas (Ciencias, Matemáticas).",
        "Permitir complementar respuestas escritas incompletas mediante explicación oral en privado."
      ],
      "emotionalTips": [
        "Respetar sus turnos de habla sin meterle prisa ni terminar sus frases; pactar previamente las preguntas que responderá en voz alta ante la clase."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Facilitar plantillas de estructuración de oraciones con código de color (Sujeto - Verbo - Complementos)."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir enunciados largos de problemas a representaciones gráficas o esquemáticas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar mediante mapas conceptuales, asociación concepto-imagen o esquemas de rellenar huecos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas receptivas y vocabulario funcional con soporte visual (Total Physical Response)."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a entrenar las funciones ejecutivas (inhibición de respuesta impulsiva, planificación y memoria de trabajo) y canalizar la actividad motora.",
      "methodologicalAdaptations": [
        "Fragmentación ejecutiva de tareas: entregar o marcar las actividades de una en una con metas cortas y revisión frecuente.",
        "Asegurar contacto visual antes de dar órdenes y pedirle que verbalice los pasos (autoinstrucciones: '¿Qué tengo que hacer? -> ¿Cómo lo haré? -> Reviso').",
        "Permitir descansos activos y movimiento funcional regulado ('recados pedagógicos': repartir material, borrar pizarra) tras bloques de concentración.",
        "Subrayar con fluorescente los verbos de acción en los enunciados y supervisar la agenda 5 minutos antes del final de la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera fila frente a la mesa del docente, lejos de ventanas, puertas y compañeros distractores.",
        "Política de 'Mesa Limpia': mantener sobre el pupitre únicamente el material de la tarea en curso.",
        "Temporizador visual (Time Timer o reloj) para que autorregule el tiempo restante de cada actividad."
      ],
      "evaluationAdaptations": [
        "Tiempo adicional (+25% a +35%) y entrega del examen en partes separadas para que no se abrume ni precipite.",
        "Recordatorio expreso y guiado 5 minutos antes de entregar para revisar posibles omisiones por impulsividad."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente cuando mantenga la atención o respete turnos; no castigar sistemáticamente suprimiendo el recreo (necesidad de descarga motriz)."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Dividir lecturas extensas en fragmentos con preguntas intermedias de control."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Apoyar el estudio con mapas conceptuales visuales y cuestionarios interactivos cortos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Alternar actividades dinámicas breves de listening, speaking y fichas cada 10-12 minutos."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a garantizar el acceso equitativo al currículo eliminando la barrera de la decodificación lectora mecánica y la ortografía arbitraria.",
      "methodologicalAdaptations": [
        "Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra; permitir responder directamente o entregar material impreso.",
        "Tipografía accesible en fichas: fuente sin serifa (Arial, Comic Sans o OpenDyslexic), tamaño 12-14 pt, interlineado 1.5 y texto alineado a la izquierda.",
        "No forzar la lectura en voz alta en público de forma imprevista; avisarle el día anterior para que prepare su fragmento."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana a la pizarra y al profesor; uso de regla de lectura o plantilla con ventana para no saltar líneas."
      ],
      "evaluationAdaptations": [
        "Lectura oral en voz alta de todos los enunciados por el docente al inicio del examen.",
        "NO penalizar faltas de ortografía natural o arbitraria en la calificación de las materias.",
        "Ampliación de tiempo (+25% a +35%) y posibilidad de comprobación oral de respuestas escritas dudosas."
      ],
      "emotionalTips": [
        "No imponer la copia repetitiva de palabras erróneas; usar bolígrafo verde y reforzar el contenido creativo e ideas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Separar la evaluación de la creatividad y coherencia textual de la exactitud ortográfica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tabla pitagórica de apoyo cuando el objetivo evaluado sea el razonamiento y la resolución de problemas."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "No descontar puntos por grafías fonológicas inexactas en vocabulario técnico si el concepto es correcto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar destrezas orales (Listening y Speaking) sobre el spelling literal escrito."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    },
    "quarterlyReviews": []
  }
];
