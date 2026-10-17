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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo; desarrollar su potencial cognitivo y creativo mediante enriquecimiento curricular horizontal, retos de investigación interdisciplinar y acompañamiento socioemocional.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Compactación curricular ('Curriculum Compacting'): evaluar brevemente qué contenidos de la unidad ya domina para eximirle de ejercicios mecánicos repetitivos y sustituirlos por retos de profundización.",
        "Implementar actividades graduadas basadas en la Taxonomía de Bloom: priorizar tareas de análisis, evaluación crítica, diseño y creación frente a la mera reproducción memorística.",
        "Proponer un 'Proyecto de Investigación Personal o ABP' trimestral conectado con el currículo pero elegido según sus intereses (con exposición o producto creativo para la clase).",
        "Incorporar retos de pensamiento divergente, acertijos lógico-matemáticos, debate argumentativo y dilemas éticos o científicos.",
        "Disponer de una 'Carpeta o Rincón de Enriquecimiento' en el aula a la que pueda acudir de forma autónoma cuando finalice con corrección la tarea nuclear."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión.",
        "Agrupamientos flexibles en el aula: combinar momentos de trabajo con compañeros de ritmo cognitivo similar (para retos complejos) con grupos heterogéneos cooperativos.",
        "Evitar utilizarle sistemáticamente como 'profesor ayudante' de compañeros con dificultades; debe tener derecho a aprender retos nuevos a su propio nivel.",
        "Acceso a recursos de consulta avanzada en el aula (biblioteca de aula, atlas, retos STEM o dispositivos de investigación supervisada)."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica.",
        "Incluir en los exámenes o tareas una 'Pregunta Estrella o Reto de Transferencia' opcional donde pueda aplicar lo aprendido a un supuesto nuevo o complejo.",
        "Evaluar mediante rúbricas de proyectos, presentaciones orales, maquetas o ensayos de investigación además de las pruebas escritas convencionales.",
        "Valorar la originalidad del planteamiento y el uso de estrategias propias (p. ej. si resuelve un problema matemático por un camino lógico distinto al explicado en clase)."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito.",
        "Acompañar la 'disincronía evolutiva' (desfase entre su alta madurez intelectual y su desarrollo emocional propio de la edad cronológica).",
        "Trabajar la tolerancia a la frustración y el perfeccionismo paralizante: normalizar el error como parte esencial del aprendizaje científico cuando se enfrenta por primera vez a un reto difícil.",
        "Fomentar un clima de aula que valore la curiosidad intelectual para evitar que oculte sus capacidades por miedo a destacar."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos.",
            "Proponer creación literaria avanzada, prensa escolar, debates orales estructurados y lecturas de mayor complejidad léxica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación.",
            "Ofrecer problemas abiertos con múltiples soluciones, enigmas de lógica, criptogramas numéricos y geometría aplicada."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos.",
            "Fomentar la indagación mediante el método científico (formulación de hipótesis, diseño de experimentos y búsqueda de causas-consecuencias)."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera.",
            "Facilitar lecturas graduadas de nivel superior ('Graded Readers') y proyectos comunicativos en lengua inglesa."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo; desarrollar su potencial cognitivo y creativo mediante enriquecimiento curricular horizontal, retos de investigación interdisciplinar y acompañamiento socioemocional.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Compactación curricular ('Curriculum Compacting'): evaluar brevemente qué contenidos de la unidad ya domina para eximirle de ejercicios mecánicos repetitivos y sustituirlos por retos de profundización.",
        "Implementar actividades graduadas basadas en la Taxonomía de Bloom: priorizar tareas de análisis, evaluación crítica, diseño y creación frente a la mera reproducción memorística.",
        "Proponer un 'Proyecto de Investigación Personal o ABP' trimestral conectado con el currículo pero elegido según sus intereses (con exposición o producto creativo para la clase).",
        "Incorporar retos de pensamiento divergente, acertijos lógico-matemáticos, debate argumentativo y dilemas éticos o científicos.",
        "Disponer de una 'Carpeta o Rincón de Enriquecimiento' en el aula a la que pueda acudir de forma autónoma cuando finalice con corrección la tarea nuclear."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión.",
        "Agrupamientos flexibles en el aula: combinar momentos de trabajo con compañeros de ritmo cognitivo similar (para retos complejos) con grupos heterogéneos cooperativos.",
        "Evitar utilizarle sistemáticamente como 'profesor ayudante' de compañeros con dificultades; debe tener derecho a aprender retos nuevos a su propio nivel.",
        "Acceso a recursos de consulta avanzada en el aula (biblioteca de aula, atlas, retos STEM o dispositivos de investigación supervisada)."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica.",
        "Incluir en los exámenes o tareas una 'Pregunta Estrella o Reto de Transferencia' opcional donde pueda aplicar lo aprendido a un supuesto nuevo o complejo.",
        "Evaluar mediante rúbricas de proyectos, presentaciones orales, maquetas o ensayos de investigación además de las pruebas escritas convencionales.",
        "Valorar la originalidad del planteamiento y el uso de estrategias propias (p. ej. si resuelve un problema matemático por un camino lógico distinto al explicado en clase)."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito.",
        "Acompañar la 'disincronía evolutiva' (desfase entre su alta madurez intelectual y su desarrollo emocional propio de la edad cronológica).",
        "Trabajar la tolerancia a la frustración y el perfeccionismo paralizante: normalizar el error como parte esencial del aprendizaje científico cuando se enfrenta por primera vez a un reto difícil.",
        "Fomentar un clima de aula que valore la curiosidad intelectual para evitar que oculte sus capacidades por miedo a destacar."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos.",
            "Proponer creación literaria avanzada, prensa escolar, debates orales estructurados y lecturas de mayor complejidad léxica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación.",
            "Ofrecer problemas abiertos con múltiples soluciones, enigmas de lógica, criptogramas numéricos y geometría aplicada."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos.",
            "Fomentar la indagación mediante el método científico (formulación de hipótesis, diseño de experimentos y búsqueda de causas-consecuencias)."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera.",
            "Facilitar lecturas graduadas de nivel superior ('Graded Readers') y proyectos comunicativos en lengua inglesa."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a activar el foco atencional sostenido, combatir la lentitud de velocidad de procesamiento y estructurar la planificación ejecutiva de tareas.",
      "methodologicalAdaptations": [
        "Activación atencional discreta: establecer una señal privada pactada (toque suave en el hombro o en su mesa al pasar) para reconectar su atención cuando se observe desconexión o ensueño, sin exponerle en voz alta.",
        "Dividir las fichas y actividades largas en 'micro-metas' con tiempos definidos mediante reloj o temporizador visual en pizarra.",
        "Entrenar el uso de las 'Autoinstrucciones de Meichenbaum' pegadas en su mesa: 1º ¿Qué tengo que hacer?, 2º ¿Cómo lo voy a hacer?, 3º Me fijo bien, 4º Repaso antes de entregar.",
        "Reducir la carga de copia mecánica de enunciados largos para que invierta su energía cognitiva en pensar y resolver la actividad.",
        "Verificar sistemáticamente el inicio de la tarea en los primeros 2 minutos tras dar la explicación grupal.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo; desarrollar su potencial cognitivo y creativo mediante enriquecimiento curricular horizontal, retos de investigación interdisciplinar y acompañamiento socioemocional.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Compactación curricular ('Curriculum Compacting'): evaluar brevemente qué contenidos de la unidad ya domina para eximirle de ejercicios mecánicos repetitivos y sustituirlos por retos de profundización.",
        "Implementar actividades graduadas basadas en la Taxonomía de Bloom: priorizar tareas de análisis, evaluación crítica, diseño y creación frente a la mera reproducción memorística.",
        "Proponer un 'Proyecto de Investigación Personal o ABP' trimestral conectado con el currículo pero elegido según sus intereses (con exposición o producto creativo para la clase).",
        "Incorporar retos de pensamiento divergente, acertijos lógico-matemáticos, debate argumentativo y dilemas éticos o científicos.",
        "Disponer de una 'Carpeta o Rincón de Enriquecimiento' en el aula a la que pueda acudir de forma autónoma cuando finalice con corrección la tarea nuclear."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión.",
        "Agrupamientos flexibles en el aula: combinar momentos de trabajo con compañeros de ritmo cognitivo similar (para retos complejos) con grupos heterogéneos cooperativos.",
        "Evitar utilizarle sistemáticamente como 'profesor ayudante' de compañeros con dificultades; debe tener derecho a aprender retos nuevos a su propio nivel.",
        "Acceso a recursos de consulta avanzada en el aula (biblioteca de aula, atlas, retos STEM o dispositivos de investigación supervisada)."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica.",
        "Incluir en los exámenes o tareas una 'Pregunta Estrella o Reto de Transferencia' opcional donde pueda aplicar lo aprendido a un supuesto nuevo o complejo.",
        "Evaluar mediante rúbricas de proyectos, presentaciones orales, maquetas o ensayos de investigación además de las pruebas escritas convencionales.",
        "Valorar la originalidad del planteamiento y el uso de estrategias propias (p. ej. si resuelve un problema matemático por un camino lógico distinto al explicado en clase)."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito.",
        "Acompañar la 'disincronía evolutiva' (desfase entre su alta madurez intelectual y su desarrollo emocional propio de la edad cronológica).",
        "Trabajar la tolerancia a la frustración y el perfeccionismo paralizante: normalizar el error como parte esencial del aprendizaje científico cuando se enfrenta por primera vez a un reto difícil.",
        "Fomentar un clima de aula que valore la curiosidad intelectual para evitar que oculte sus capacidades por miedo a destacar."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos.",
            "Proponer creación literaria avanzada, prensa escolar, debates orales estructurados y lecturas de mayor complejidad léxica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación.",
            "Ofrecer problemas abiertos con múltiples soluciones, enigmas de lógica, criptogramas numéricos y geometría aplicada."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos.",
            "Fomentar la indagación mediante el método científico (formulación de hipótesis, diseño de experimentos y búsqueda de causas-consecuencias)."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera.",
            "Facilitar lecturas graduadas de nivel superior ('Graded Readers') y proyectos comunicativos en lengua inglesa."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a garantizar la plena accesibilidad auditiva y visual a la información del aula, optimizando la lectura labiofacial y el canal visual.",
      "methodologicalAdaptations": [
        "Garantizar la visibilidad labiofacial en todo momento: hablar siempre de frente a la alumna, bien iluminado (sin situarse a contraluz frente a la ventana) y nunca explicar mientras se escribe de espaldas en la pizarra.",
        "Llamar su atención con una señal visual suave antes de iniciar una explicación general o cambiar de tema en el debate de clase.",
        "Repetir o resumir brevemente en voz clara las preguntas o intervenciones que hagan otros compañeros desde filas traseras (ya que pierde la referencia labial de quienes están detrás).",
        "Utilizar subtítulos siempre que se proyecten vídeos, documentales o recursos multimedia en la pizarra digital.",
        "Entregar por escrito en papel o plataforma digital las instrucciones de trabajos, fechas de exámenes y resúmenes de los temas.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación estratégica en 1ª o 2ª fila, ligeramente descentrada hacia un lateral para disponer de un ángulo visual de 180º que le permita ver tanto la cara del profesor como al resto de compañeros.",
        "Controlar el ruido ambiental y la reverberación del aula (cerrar puerta en momentos de explicación, fieltro en patas de sillas/mesas).",
        "Asignar un compañero/a cotutor de mesa que le indique rápidamente la página del libro o consignas orales puntuales."
      ],
      "evaluationAdaptations": [
        "Sustituir las pruebas de dictado auditivo o 'listening' por ejercicios escritos equivalentes o dictados realizados de frente a corta distancia con apoyo labiofacial.",
        "Asegurar que cualquier aclaración oral dada al grupo durante un examen se le escriba en la pizarra o se le comunique individualmente de frente.",
        "Ampliar el tiempo de realización de pruebas (+25%) y priorizar el soporte visual y escrito."
      ],
      "emotionalTips": [
        "Velar por su inclusión plena en trabajos en equipo recordando a los compañeros la norma de hablar de uno en uno y mirándose a la cara.",
        "Estar atentos a signos de 'fatiga auditiva y atencional' a últimas horas de la mañana debido al sobreesfuerzo de concentración visual."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Reforzar el vocabulario abstracto con apoyo de definiciones visuales y contextos escritos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Acompañar las explicaciones de cálculo mental con registro numérico visible en la pizarra."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Facilitar esquemas escritos completos del tema y activar subtítulos en todos los vídeos científicos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Adaptar las pruebas de 'Listening' (reproducción de audio de altavoz): realizarlas a viva voz por el docente de frente y a ritmo pausado, o sustituirlas por comprensión escrita."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a activar el foco atencional sostenido, combatir la lentitud de velocidad de procesamiento y estructurar la planificación ejecutiva de tareas.",
      "methodologicalAdaptations": [
        "Activación atencional discreta: establecer una señal privada pactada (toque suave en el hombro o en su mesa al pasar) para reconectar su atención cuando se observe desconexión o ensueño, sin exponerle en voz alta.",
        "Dividir las fichas y actividades largas en 'micro-metas' con tiempos definidos mediante reloj o temporizador visual en pizarra.",
        "Entrenar el uso de las 'Autoinstrucciones de Meichenbaum' pegadas en su mesa: 1º ¿Qué tengo que hacer?, 2º ¿Cómo lo voy a hacer?, 3º Me fijo bien, 4º Repaso antes de entregar.",
        "Reducir la carga de copia mecánica de enunciados largos para que invierta su energía cognitiva en pensar y resolver la actividad.",
        "Verificar sistemáticamente el inicio de la tarea en los primeros 2 minutos tras dar la explicación grupal.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo; desarrollar su potencial cognitivo y creativo mediante enriquecimiento curricular horizontal, retos de investigación interdisciplinar y acompañamiento socioemocional.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Compactación curricular ('Curriculum Compacting'): evaluar brevemente qué contenidos de la unidad ya domina para eximirle de ejercicios mecánicos repetitivos y sustituirlos por retos de profundización.",
        "Implementar actividades graduadas basadas en la Taxonomía de Bloom: priorizar tareas de análisis, evaluación crítica, diseño y creación frente a la mera reproducción memorística.",
        "Proponer un 'Proyecto de Investigación Personal o ABP' trimestral conectado con el currículo pero elegido según sus intereses (con exposición o producto creativo para la clase).",
        "Incorporar retos de pensamiento divergente, acertijos lógico-matemáticos, debate argumentativo y dilemas éticos o científicos.",
        "Disponer de una 'Carpeta o Rincón de Enriquecimiento' en el aula a la que pueda acudir de forma autónoma cuando finalice con corrección la tarea nuclear.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión.",
        "Agrupamientos flexibles en el aula: combinar momentos de trabajo con compañeros de ritmo cognitivo similar (para retos complejos) con grupos heterogéneos cooperativos.",
        "Evitar utilizarle sistemáticamente como 'profesor ayudante' de compañeros con dificultades; debe tener derecho a aprender retos nuevos a su propio nivel.",
        "Acceso a recursos de consulta avanzada en el aula (biblioteca de aula, atlas, retos STEM o dispositivos de investigación supervisada)."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica.",
        "Incluir en los exámenes o tareas una 'Pregunta Estrella o Reto de Transferencia' opcional donde pueda aplicar lo aprendido a un supuesto nuevo o complejo.",
        "Evaluar mediante rúbricas de proyectos, presentaciones orales, maquetas o ensayos de investigación además de las pruebas escritas convencionales.",
        "Valorar la originalidad del planteamiento y el uso de estrategias propias (p. ej. si resuelve un problema matemático por un camino lógico distinto al explicado en clase)."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito.",
        "Acompañar la 'disincronía evolutiva' (desfase entre su alta madurez intelectual y su desarrollo emocional propio de la edad cronológica).",
        "Trabajar la tolerancia a la frustración y el perfeccionismo paralizante: normalizar el error como parte esencial del aprendizaje científico cuando se enfrenta por primera vez a un reto difícil.",
        "Fomentar un clima de aula que valore la curiosidad intelectual para evitar que oculte sus capacidades por miedo a destacar."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos.",
            "Proponer creación literaria avanzada, prensa escolar, debates orales estructurados y lecturas de mayor complejidad léxica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación.",
            "Ofrecer problemas abiertos con múltiples soluciones, enigmas de lógica, criptogramas numéricos y geometría aplicada."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos.",
            "Fomentar la indagación mediante el método científico (formulación de hipótesis, diseño de experimentos y búsqueda de causas-consecuencias)."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera.",
            "Facilitar lecturas graduadas de nivel superior ('Graded Readers') y proyectos comunicativos en lengua inglesa."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo; desarrollar su potencial cognitivo y creativo mediante enriquecimiento curricular horizontal, retos de investigación interdisciplinar y acompañamiento socioemocional.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Compactación curricular ('Curriculum Compacting'): evaluar brevemente qué contenidos de la unidad ya domina para eximirle de ejercicios mecánicos repetitivos y sustituirlos por retos de profundización.",
        "Implementar actividades graduadas basadas en la Taxonomía de Bloom: priorizar tareas de análisis, evaluación crítica, diseño y creación frente a la mera reproducción memorística.",
        "Proponer un 'Proyecto de Investigación Personal o ABP' trimestral conectado con el currículo pero elegido según sus intereses (con exposición o producto creativo para la clase).",
        "Incorporar retos de pensamiento divergente, acertijos lógico-matemáticos, debate argumentativo y dilemas éticos o científicos.",
        "Disponer de una 'Carpeta o Rincón de Enriquecimiento' en el aula a la que pueda acudir de forma autónoma cuando finalice con corrección la tarea nuclear.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión.",
        "Agrupamientos flexibles en el aula: combinar momentos de trabajo con compañeros de ritmo cognitivo similar (para retos complejos) con grupos heterogéneos cooperativos.",
        "Evitar utilizarle sistemáticamente como 'profesor ayudante' de compañeros con dificultades; debe tener derecho a aprender retos nuevos a su propio nivel.",
        "Acceso a recursos de consulta avanzada en el aula (biblioteca de aula, atlas, retos STEM o dispositivos de investigación supervisada)."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica.",
        "Incluir en los exámenes o tareas una 'Pregunta Estrella o Reto de Transferencia' opcional donde pueda aplicar lo aprendido a un supuesto nuevo o complejo.",
        "Evaluar mediante rúbricas de proyectos, presentaciones orales, maquetas o ensayos de investigación además de las pruebas escritas convencionales.",
        "Valorar la originalidad del planteamiento y el uso de estrategias propias (p. ej. si resuelve un problema matemático por un camino lógico distinto al explicado en clase)."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito.",
        "Acompañar la 'disincronía evolutiva' (desfase entre su alta madurez intelectual y su desarrollo emocional propio de la edad cronológica).",
        "Trabajar la tolerancia a la frustración y el perfeccionismo paralizante: normalizar el error como parte esencial del aprendizaje científico cuando se enfrenta por primera vez a un reto difícil.",
        "Fomentar un clima de aula que valore la curiosidad intelectual para evitar que oculte sus capacidades por miedo a destacar."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos.",
            "Proponer creación literaria avanzada, prensa escolar, debates orales estructurados y lecturas de mayor complejidad léxica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación.",
            "Ofrecer problemas abiertos con múltiples soluciones, enigmas de lógica, criptogramas numéricos y geometría aplicada."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos.",
            "Fomentar la indagación mediante el método científico (formulación de hipótesis, diseño de experimentos y búsqueda de causas-consecuencias)."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera.",
            "Facilitar lecturas graduadas de nivel superior ('Graded Readers') y proyectos comunicativos en lengua inglesa."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a activar el foco atencional sostenido, combatir la lentitud de velocidad de procesamiento y estructurar la planificación ejecutiva de tareas; compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "Activación atencional discreta: establecer una señal privada pactada (toque suave en el hombro o en su mesa al pasar) para reconectar su atención cuando se observe desconexión o ensueño, sin exponerle en voz alta.",
        "Dividir las fichas y actividades largas en 'micro-metas' con tiempos definidos mediante reloj o temporizador visual en pizarra.",
        "Entrenar el uso de las 'Autoinstrucciones de Meichenbaum' pegadas en su mesa: 1º ¿Qué tengo que hacer?, 2º ¿Cómo lo voy a hacer?, 3º Me fijo bien, 4º Repaso antes de entregar.",
        "Reducir la carga de copia mecánica de enunciados largos para que invierta su energía cognitiva en pensar y resolver la actividad.",
        "Verificar sistemáticamente el inicio de la tarea en los primeros 2 minutos tras dar la explicación grupal.",
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual.",
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen.",
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas.",
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir.",
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido.",
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto.",
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves.",
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a desarrollar el sentido numérico, la comprensión visuoespacial de las operaciones y el razonamiento lógico-matemático desde lo manipulativo hacia lo simbólico.",
      "methodologicalAdaptations": [
        "Aplicar la secuencia didáctica CPA (Concreto -> Pictórico -> Abstracto): introducir todo concepto matemático primero con material manipulativo (regletas, bloques base 10, policubos), luego con dibujo y finalmente con números.",
        "Facilitar plantillas cuadriculadas con columnas coloreadas (Centenas - Decenas - Unidades) para evitar el desalineamiento espacial al colocar las cuentas.",
        "Autorizar el uso permanente de la recta numérica, la tabla del 100 y la tabla pitagórica en su mesa durante el trabajo diario.",
        "Desglosar la resolución de problemas mediante autoinstrucciones visuales y representación gráfica obligatoria ('Dibuja el problema antes de elegir la operación').",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [],
      "evaluationAdaptations": [
        "Permitir el uso de tablas de apoyo visual y plantillas de posición numérica durante los controles.",
        "Valorar positivamente el planteamiento lógico y el proceso seguido en el problema aunque exista un error de cálculo mecánico final (no tachar el problema entero como 0).",
        "Reducir el número de cuentas mecánicas repetitivas en el examen, seleccionando una muestra representativa de cada operación."
      ],
      "emotionalTips": [],
      "subjectSpecificGuidelines": [
        {
          "subject": "Matemáticas",
          "tips": [
            "Trabajar el cálculo mental apoyado en descomposición visual (amigos del 10, amigos del 100) sin someterle a pruebas de cálculo rápido contra reloj.",
            "Resaltar con colores diferentes los signos de las operaciones (+ en verde, - en rojo, x en azul) para evitar confusiones perceptivas."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a activar el foco atencional sostenido, combatir la lentitud de velocidad de procesamiento y estructurar la planificación ejecutiva de tareas.",
      "methodologicalAdaptations": [
        "Activación atencional discreta: establecer una señal privada pactada (toque suave en el hombro o en su mesa al pasar) para reconectar su atención cuando se observe desconexión o ensueño, sin exponerle en voz alta.",
        "Dividir las fichas y actividades largas en 'micro-metas' con tiempos definidos mediante reloj o temporizador visual en pizarra.",
        "Entrenar el uso de las 'Autoinstrucciones de Meichenbaum' pegadas en su mesa: 1º ¿Qué tengo que hacer?, 2º ¿Cómo lo voy a hacer?, 3º Me fijo bien, 4º Repaso antes de entregar.",
        "Reducir la carga de copia mecánica de enunciados largos para que invierta su energía cognitiva en pensar y resolver la actividad.",
        "Verificar sistemáticamente el inicio de la tarea en los primeros 2 minutos tras dar la explicación grupal.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo; entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión.",
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica.",
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito.",
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo; desarrollar su potencial cognitivo y creativo mediante enriquecimiento curricular horizontal, retos de investigación interdisciplinar y acompañamiento socioemocional.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Compactación curricular ('Curriculum Compacting'): evaluar brevemente qué contenidos de la unidad ya domina para eximirle de ejercicios mecánicos repetitivos y sustituirlos por retos de profundización.",
        "Implementar actividades graduadas basadas en la Taxonomía de Bloom: priorizar tareas de análisis, evaluación crítica, diseño y creación frente a la mera reproducción memorística.",
        "Proponer un 'Proyecto de Investigación Personal o ABP' trimestral conectado con el currículo pero elegido según sus intereses (con exposición o producto creativo para la clase).",
        "Incorporar retos de pensamiento divergente, acertijos lógico-matemáticos, debate argumentativo y dilemas éticos o científicos.",
        "Disponer de una 'Carpeta o Rincón de Enriquecimiento' en el aula a la que pueda acudir de forma autónoma cuando finalice con corrección la tarea nuclear.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión.",
        "Agrupamientos flexibles en el aula: combinar momentos de trabajo con compañeros de ritmo cognitivo similar (para retos complejos) con grupos heterogéneos cooperativos.",
        "Evitar utilizarle sistemáticamente como 'profesor ayudante' de compañeros con dificultades; debe tener derecho a aprender retos nuevos a su propio nivel.",
        "Acceso a recursos de consulta avanzada en el aula (biblioteca de aula, atlas, retos STEM o dispositivos de investigación supervisada)."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica.",
        "Incluir en los exámenes o tareas una 'Pregunta Estrella o Reto de Transferencia' opcional donde pueda aplicar lo aprendido a un supuesto nuevo o complejo.",
        "Evaluar mediante rúbricas de proyectos, presentaciones orales, maquetas o ensayos de investigación además de las pruebas escritas convencionales.",
        "Valorar la originalidad del planteamiento y el uso de estrategias propias (p. ej. si resuelve un problema matemático por un camino lógico distinto al explicado en clase)."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito.",
        "Acompañar la 'disincronía evolutiva' (desfase entre su alta madurez intelectual y su desarrollo emocional propio de la edad cronológica).",
        "Trabajar la tolerancia a la frustración y el perfeccionismo paralizante: normalizar el error como parte esencial del aprendizaje científico cuando se enfrenta por primera vez a un reto difícil.",
        "Fomentar un clima de aula que valore la curiosidad intelectual para evitar que oculte sus capacidades por miedo a destacar."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos.",
            "Proponer creación literaria avanzada, prensa escolar, debates orales estructurados y lecturas de mayor complejidad léxica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación.",
            "Ofrecer problemas abiertos con múltiples soluciones, enigmas de lógica, criptogramas numéricos y geometría aplicada."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos.",
            "Fomentar la indagación mediante el método científico (formulación de hipótesis, diseño de experimentos y búsqueda de causas-consecuencias)."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera.",
            "Facilitar lecturas graduadas de nivel superior ('Graded Readers') y proyectos comunicativos en lengua inglesa."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a garantizar la predictibilidad del entorno escolar, la estructuración visual tipo TEACCH, la regulación sensorial y la comprensión socio-comunicativa; entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Estructuración visual TEACCH del trabajo diario: presentar siempre en su mesa una tira o secuencia visual con las 3-4 tareas de la sesión ('Primero -> Después -> Por último') para reducir la incertidumbre.",
        "Anticipación sistemática ante cambios imprevistos: avisar de forma individualizada y con apoyo visual cualquier modificación de horario, excursión, simulacro o ausencia de un profesor.",
        "Emplear un lenguaje oral directo, literal y conciso: evitar ironías, dobles sentidos, metáforas o preguntas retóricas que generen confusión pragmática.",
        "Conectar los contenidos curriculares nuevos con sus centros de interés específicos para facilitar el enganche atencional y la motivación intrínseca.",
        "Secuenciar las tareas complejas de aula en pasos cortos, cerrados y verificables, mostrándole un modelo visual del producto final esperado antes de que empiece.",
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona tranquila del aula, protegida de focos de sobrecarga sensorial (timbres, puertas de pasillo, proyectores ruidosos o ventanas con tránsito).",
        "Establecer un 'espacio o rincón de regulación sensorial' acordado (o permiso de salida pautada de 3 minutos con tarjeta visual) cuando detecte saturación.",
        "Mantener su pupitre despejado, únicamente con el material de la asignatura en curso, utilizando código de colores por área.",
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Exámenes con diseño visual altamente estructurado: recuadros delimitados para cada respuesta, sin preguntas ambiguas ni enunciados con múltiples órdenes anidadas.",
        "Incluir un ejemplo resuelto al inicio de cada bloque de ejercicios del examen para clarificar exactamente qué se espera.",
        "Permitir realizar las pruebas de evaluación en entorno silencioso o con el apoyo del especialista PT si el ruido del aula le bloquea.",
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Mediación estructurada en recreos y trabajos cooperativos: asignarle un rol concreto y claro dentro del grupo (ej. encargado de material o verificador de datos) y un compañero de referencia empático.",
        "Utilizar historias sociales breves o guiones visuales para explicar normas de convivencia o resolver malentendidos con iguales sin confrontación verbal.",
        "Respetar sus tiempos de procesamiento emocional ante el bloqueo sin forzar el contacto ocular ni exigir respuestas inmediatas bajo estrés.",
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la comprensión de textos narrativos mediante organizadores gráficos de estados mentales ('¿Qué piensa el personaje? ¿Qué siente? ¿Por qué actúa así?').",
            "Sustituir redacciones libres o abstractas por redacciones guiadas con estructura de preguntas pautadas o apoyo de viñetas."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir los problemas verbales a esquemas gráficos ('Datos - Operación - Dibujo - Resultado') eliminando información superflua del enunciado.",
            "Emplear material manipulativo o representaciones visuales constantes para conceptos abstractos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar mapas conceptuales visuales al inicio del tema con el vocabulario nuclear ilustrado."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el apoyo visual (flashcards, rutinas escritas) frente a dinámicas grupales ruidosas o de improvisación oral."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a garantizar la predictibilidad del entorno escolar, la estructuración visual tipo TEACCH, la regulación sensorial y la comprensión socio-comunicativa.",
      "methodologicalAdaptations": [
        "Estructuración visual TEACCH del trabajo diario: presentar siempre en su mesa una tira o secuencia visual con las 3-4 tareas de la sesión ('Primero -> Después -> Por último') para reducir la incertidumbre.",
        "Anticipación sistemática ante cambios imprevistos: avisar de forma individualizada y con apoyo visual cualquier modificación de horario, excursión, simulacro o ausencia de un profesor.",
        "Emplear un lenguaje oral directo, literal y conciso: evitar ironías, dobles sentidos, metáforas o preguntas retóricas que generen confusión pragmática.",
        "Conectar los contenidos curriculares nuevos con sus centros de interés específicos para facilitar el enganche atencional y la motivación intrínseca.",
        "Secuenciar las tareas complejas de aula en pasos cortos, cerrados y verificables, mostrándole un modelo visual del producto final esperado antes de que empiece.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona tranquila del aula, protegida de focos de sobrecarga sensorial (timbres, puertas de pasillo, proyectores ruidosos o ventanas con tránsito).",
        "Establecer un 'espacio o rincón de regulación sensorial' acordado (o permiso de salida pautada de 3 minutos con tarjeta visual) cuando detecte saturación.",
        "Mantener su pupitre despejado, únicamente con el material de la asignatura en curso, utilizando código de colores por área."
      ],
      "evaluationAdaptations": [
        "Exámenes con diseño visual altamente estructurado: recuadros delimitados para cada respuesta, sin preguntas ambiguas ni enunciados con múltiples órdenes anidadas.",
        "Incluir un ejemplo resuelto al inicio de cada bloque de ejercicios del examen para clarificar exactamente qué se espera.",
        "Permitir realizar las pruebas de evaluación en entorno silencioso o con el apoyo del especialista PT si el ruido del aula le bloquea."
      ],
      "emotionalTips": [
        "Mediación estructurada en recreos y trabajos cooperativos: asignarle un rol concreto y claro dentro del grupo (ej. encargado de material o verificador de datos) y un compañero de referencia empático.",
        "Utilizar historias sociales breves o guiones visuales para explicar normas de convivencia o resolver malentendidos con iguales sin confrontación verbal.",
        "Respetar sus tiempos de procesamiento emocional ante el bloqueo sin forzar el contacto ocular ni exigir respuestas inmediatas bajo estrés."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la comprensión de textos narrativos mediante organizadores gráficos de estados mentales ('¿Qué piensa el personaje? ¿Qué siente? ¿Por qué actúa así?').",
            "Sustituir redacciones libres o abstractas por redacciones guiadas con estructura de preguntas pautadas o apoyo de viñetas."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir los problemas verbales a esquemas gráficos ('Datos - Operación - Dibujo - Resultado') eliminando información superflua del enunciado.",
            "Emplear material manipulativo o representaciones visuales constantes para conceptos abstractos."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar mapas conceptuales visuales al inicio del tema con el vocabulario nuclear ilustrado."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el apoyo visual (flashcards, rutinas escritas) frente a dinámicas grupales ruidosas o de improvisación oral."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica; compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual.",
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen.",
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas.",
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir.",
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido.",
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto.",
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves.",
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo; desarrollar su potencial cognitivo y creativo mediante enriquecimiento curricular horizontal, retos de investigación interdisciplinar y acompañamiento socioemocional.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Compactación curricular ('Curriculum Compacting'): evaluar brevemente qué contenidos de la unidad ya domina para eximirle de ejercicios mecánicos repetitivos y sustituirlos por retos de profundización.",
        "Implementar actividades graduadas basadas en la Taxonomía de Bloom: priorizar tareas de análisis, evaluación crítica, diseño y creación frente a la mera reproducción memorística.",
        "Proponer un 'Proyecto de Investigación Personal o ABP' trimestral conectado con el currículo pero elegido según sus intereses (con exposición o producto creativo para la clase).",
        "Incorporar retos de pensamiento divergente, acertijos lógico-matemáticos, debate argumentativo y dilemas éticos o científicos.",
        "Disponer de una 'Carpeta o Rincón de Enriquecimiento' en el aula a la que pueda acudir de forma autónoma cuando finalice con corrección la tarea nuclear.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión.",
        "Agrupamientos flexibles en el aula: combinar momentos de trabajo con compañeros de ritmo cognitivo similar (para retos complejos) con grupos heterogéneos cooperativos.",
        "Evitar utilizarle sistemáticamente como 'profesor ayudante' de compañeros con dificultades; debe tener derecho a aprender retos nuevos a su propio nivel.",
        "Acceso a recursos de consulta avanzada en el aula (biblioteca de aula, atlas, retos STEM o dispositivos de investigación supervisada)."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica.",
        "Incluir en los exámenes o tareas una 'Pregunta Estrella o Reto de Transferencia' opcional donde pueda aplicar lo aprendido a un supuesto nuevo o complejo.",
        "Evaluar mediante rúbricas de proyectos, presentaciones orales, maquetas o ensayos de investigación además de las pruebas escritas convencionales.",
        "Valorar la originalidad del planteamiento y el uso de estrategias propias (p. ej. si resuelve un problema matemático por un camino lógico distinto al explicado en clase)."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito.",
        "Acompañar la 'disincronía evolutiva' (desfase entre su alta madurez intelectual y su desarrollo emocional propio de la edad cronológica).",
        "Trabajar la tolerancia a la frustración y el perfeccionismo paralizante: normalizar el error como parte esencial del aprendizaje científico cuando se enfrenta por primera vez a un reto difícil.",
        "Fomentar un clima de aula que valore la curiosidad intelectual para evitar que oculte sus capacidades por miedo a destacar."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos.",
            "Proponer creación literaria avanzada, prensa escolar, debates orales estructurados y lecturas de mayor complejidad léxica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación.",
            "Ofrecer problemas abiertos con múltiples soluciones, enigmas de lógica, criptogramas numéricos y geometría aplicada."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos.",
            "Fomentar la indagación mediante el método científico (formulación de hipótesis, diseño de experimentos y búsqueda de causas-consecuencias)."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera.",
            "Facilitar lecturas graduadas de nivel superior ('Graded Readers') y proyectos comunicativos en lengua inglesa."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica; compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual.",
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen.",
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas.",
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir.",
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido.",
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto.",
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves.",
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica; compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual.",
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen.",
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas.",
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir.",
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido.",
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto.",
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves.",
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo; desarrollar su potencial cognitivo y creativo mediante enriquecimiento curricular horizontal, retos de investigación interdisciplinar y acompañamiento socioemocional.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Compactación curricular ('Curriculum Compacting'): evaluar brevemente qué contenidos de la unidad ya domina para eximirle de ejercicios mecánicos repetitivos y sustituirlos por retos de profundización.",
        "Implementar actividades graduadas basadas en la Taxonomía de Bloom: priorizar tareas de análisis, evaluación crítica, diseño y creación frente a la mera reproducción memorística.",
        "Proponer un 'Proyecto de Investigación Personal o ABP' trimestral conectado con el currículo pero elegido según sus intereses (con exposición o producto creativo para la clase).",
        "Incorporar retos de pensamiento divergente, acertijos lógico-matemáticos, debate argumentativo y dilemas éticos o científicos.",
        "Disponer de una 'Carpeta o Rincón de Enriquecimiento' en el aula a la que pueda acudir de forma autónoma cuando finalice con corrección la tarea nuclear.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión.",
        "Agrupamientos flexibles en el aula: combinar momentos de trabajo con compañeros de ritmo cognitivo similar (para retos complejos) con grupos heterogéneos cooperativos.",
        "Evitar utilizarle sistemáticamente como 'profesor ayudante' de compañeros con dificultades; debe tener derecho a aprender retos nuevos a su propio nivel.",
        "Acceso a recursos de consulta avanzada en el aula (biblioteca de aula, atlas, retos STEM o dispositivos de investigación supervisada)."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica.",
        "Incluir en los exámenes o tareas una 'Pregunta Estrella o Reto de Transferencia' opcional donde pueda aplicar lo aprendido a un supuesto nuevo o complejo.",
        "Evaluar mediante rúbricas de proyectos, presentaciones orales, maquetas o ensayos de investigación además de las pruebas escritas convencionales.",
        "Valorar la originalidad del planteamiento y el uso de estrategias propias (p. ej. si resuelve un problema matemático por un camino lógico distinto al explicado en clase)."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito.",
        "Acompañar la 'disincronía evolutiva' (desfase entre su alta madurez intelectual y su desarrollo emocional propio de la edad cronológica).",
        "Trabajar la tolerancia a la frustración y el perfeccionismo paralizante: normalizar el error como parte esencial del aprendizaje científico cuando se enfrenta por primera vez a un reto difícil.",
        "Fomentar un clima de aula que valore la curiosidad intelectual para evitar que oculte sus capacidades por miedo a destacar."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos.",
            "Proponer creación literaria avanzada, prensa escolar, debates orales estructurados y lecturas de mayor complejidad léxica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación.",
            "Ofrecer problemas abiertos con múltiples soluciones, enigmas de lógica, criptogramas numéricos y geometría aplicada."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos.",
            "Fomentar la indagación mediante el método científico (formulación de hipótesis, diseño de experimentos y búsqueda de causas-consecuencias)."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera.",
            "Facilitar lecturas graduadas de nivel superior ('Graded Readers') y proyectos comunicativos en lengua inglesa."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo; entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión.",
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica.",
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito.",
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
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
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
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
    "ptTeacher": "Diego López (PT)",
    "curricularAdaptation": "No Significativa (ACNS)",
    "lastReviewDate": "2026-10-08",
    "status": "Activo",
    "guidelines": {
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica; compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos; afianzar la correcta articulación fonética, la discriminación auditiva de fonemas y la seguridad comunicativa en el aula.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave.",
        "Modelado fonético indirecto: cuando pronuncie un fonema con sustitución u omisión, repetir nosotros la palabra dentro de una frase con articulación clara y pausada, mirándole a la cara pero sin exigirle que la repita en público.",
        "Apoyar la conciencia fonológica asociando cada sonido con su punto de articulación visual y gestual al trabajar la lectoescritura.",
        "Coordinar con la familia y especialistas los fonemas en fase de generalización para reforzarlos positivamente en la lectura individual.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual.",
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen.",
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas.",
        "No penalizar en la escritura aquellos errores ortográficos derivados directamente de su patrón articulatorio (escribir como pronuncia) mientras se consolida la rehabilitación."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas.",
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir.",
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido.",
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto.",
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves.",
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a fortalecer el autocontrol conductual, la tolerancia a la frustración y la autorregulación emocional mediante estrategias proactivas y contención positiva; activar el foco atencional sostenido, combatir la lentitud de velocidad de procesamiento y estructurar la planificación ejecutiva de tareas.",
      "methodologicalAdaptations": [
        "Prevención y anticipación de detonantes: identificar las situaciones que suelen generar frustración (transiciones, tareas largas de escritura, cambios de actividad) y anticipar la expectativa de conducta en privado.",
        "Aplicar la técnica del 'Opciones Limitadas Positivas': ofrecerle dos alternativas válidas de actuación ('¿Prefieres empezar por el ejercicio 1 o por el 2?') para reducir las conductas de oposición y darle sensación de control.",
        "Fraccionar el trabajo en metas cortas de éxito inmediato (10-15 minutos) con feedback positivo inmediato al completar cada tramo.",
        "Evitar las luchas de poder o discusiones en público delante del grupo clase; dar las indicaciones de reconducción en voz baja, a corta distancia y con tono neutro y firme.",
        "Acordar un 'Contrato Conductual o Sistema de Economía de Fichas' con objetivos semanales muy concretos (máximo 2 conductas diana) formulados siempre en positivo.",
        "Activación atencional discreta: establecer una señal privada pactada (toque suave en el hombro o en su mesa al pasar) para reconectar su atención cuando se observe desconexión o ensueño, sin exponerle en voz alta.",
        "Dividir las fichas y actividades largas en 'micro-metas' con tiempos definidos mediante reloj o temporizador visual en pizarra.",
        "Entrenar el uso de las 'Autoinstrucciones de Meichenbaum' pegadas en su mesa: 1º ¿Qué tengo que hacer?, 2º ¿Cómo lo voy a hacer?, 3º Me fijo bien, 4º Repaso antes de entregar.",
        "Reducir la carga de copia mecánica de enunciados largos para que invierta su energía cognitiva en pensar y resolver la actividad.",
        "Verificar sistemáticamente el inicio de la tarea en los primeros 2 minutos tras dar la explicación grupal.",
        "Coordinación estrecha con Diego López (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana al docente, rodeado de compañeros con perfil tranquilo y prosocial que actúen como modelos de regulación.",
        "Disponer de un protocolo pactado de 'Enfriamiento Emocional' (beber agua, llevar un recado a secretaría o acudir 5 minutos al rincón de calma) antes de que escale un bloqueo.",
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Presentar los exámenes página a página o por bloques para evitar el bloqueo emocional al ver una prueba extensa.",
        "Permitir breves pausas de regulación si muestra signos de ansiedad o frustración durante un control.",
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Aplicar la secuencia 'Conectar antes de Corregir': validar primero la emoción ('Entiendo que este ejercicio te haya resultado frustrante') y, una vez calmado, abordar la conducta.",
        "Asignarle responsabilidades de ayuda o liderazgo positivo en el aula (encargado de material, ayudante tecnológico) para transformar su autoconcepto en el grupo.",
        "Comunicación fluida con la familia destacando también los días y momentos de logro conductual, no únicamente las incidencias.",
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 3
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a consolidar los aprendizajes instrumentales básicos (comprensión lectora, expresión escrita y razonamiento matemático) y afianzar hábitos eficaces de estudio y autonomía.",
      "methodologicalAdaptations": [
        "Andamiaje pedagógico en el aula ('Scaffolding'): tras la explicación general al grupo, acercarse a su mesa para verificar que ha comprendido la consigna y guiar el primer ejemplo.",
        "Fraccionamiento de las tareas largas en bloques manejables, revisando y validando el primer ejercicio antes de que continúe con el resto.",
        "Enseñanza explícita de estrategias de estudio: subrayado de palabras clave, elaboración de esquemas sencillos y autoverificación del trabajo.",
        "Uso de apoyos manipulativos, organizadores gráficos y ejemplos resueltos en la pizarra como referencia constante.",
        "Supervisión diaria de la agenda escolar para asegurar la organización de tareas y materiales entre colegio y familia."
      ],
      "environmentalAdaptations": [
        "Ubicación en las primeras filas del aula, cerca del docente, para facilitar la consulta rápida de dudas y mantener la atención sostenida.",
        "Emparejamiento con un 'compañero/a tutor' empático y organizado para actividades cooperativas y resolución de dudas puntuales.",
        "Ambiente estructurado con rutinas claras de inicio, desarrollo y cierre de cada sesión lectiva."
      ],
      "evaluationAdaptations": [
        "Lectura previa guiada de los enunciados del examen asegurando que comprende qué se pide en cada pregunta.",
        "Destacar en negrita las palabras clave de los enunciados y distribuir las preguntas con espacio suficiente de respuesta.",
        "Conceder tiempo adicional (+20% a +25%) para que pueda terminar y revisar su prueba sin presión temporal.",
        "Valorar el progreso individual respecto a su propio punto de partida y el trabajo diario de cuaderno."
      ],
      "emotionalTips": [
        "Refuerzo positivo frecuente del esfuerzo y de las pequeñas mejoras diarias para fortalecer su autoeficacia académica.",
        "Fomentar su participación en clase con preguntas ajustadas a su nivel de seguridad para que experimente éxito ante sus compañeros.",
        "Comunicación periódica y constructiva con la familia compartiendo pautas sencillas de refuerzo en casa."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Trabajar la comprensión lectora en 3 fases: antes de leer (anticipar por el título), durante la lectura (subrayar idea principal de cada párrafo) y después (resumir en una frase).",
            "Facilitar guiones estructurados para la expresión escrita y revisar el vocabulario básico."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Apoyar el cálculo y la resolución de problemas con representación gráfica (dibujar los datos) y comprobación guiada del resultado.",
            "Reforzar las operaciones básicas con material visual y práctica distribuida."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar esquemas resumen de cada apartado del tema para centrar el estudio en los conceptos fundamentales."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Reforzar las estructuras comunicativas básicas y el vocabulario esencial mediante apoyo visual e interactivo."
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
      "generalGoal": "Intervención psicopedagógica en 1º Ciclo de Primaria (etapa de adquisición instrumental de lectoescritura y noción numérica) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
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
      "generalGoal": "Intervención psicopedagógica en 2º Ciclo de Primaria (etapa de afianzamiento comprensivo, resolución de problemas e inicio de estudio autónomo) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Coordinación estrecha con Daniel Asenjo (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
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
      "generalGoal": "Intervención psicopedagógica en 3º Ciclo de Primaria (etapa de abstracción, síntesis de textos expositivos y preparación para Secundaria) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a garantizar la predictibilidad del entorno escolar, la estructuración visual tipo TEACCH, la regulación sensorial y la comprensión socio-comunicativa; desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo; entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica; compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "Estructuración visual TEACCH del trabajo diario: presentar siempre en su mesa una tira o secuencia visual con las 3-4 tareas de la sesión ('Primero -> Después -> Por último') para reducir la incertidumbre.",
        "Anticipación sistemática ante cambios imprevistos: avisar de forma individualizada y con apoyo visual cualquier modificación de horario, excursión, simulacro o ausencia de un profesor.",
        "Emplear un lenguaje oral directo, literal y conciso: evitar ironías, dobles sentidos, metáforas o preguntas retóricas que generen confusión pragmática.",
        "Conectar los contenidos curriculares nuevos con sus centros de interés específicos para facilitar el enganche atencional y la motivación intrínseca.",
        "Secuenciar las tareas complejas de aula en pasos cortos, cerrados y verificables, mostrándole un modelo visual del producto final esperado antes de que empiece.",
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave.",
        "Coordinación estrecha con Especialista de Pedagogía Terapéutica (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona tranquila del aula, protegida de focos de sobrecarga sensorial (timbres, puertas de pasillo, proyectores ruidosos o ventanas con tránsito).",
        "Establecer un 'espacio o rincón de regulación sensorial' acordado (o permiso de salida pautada de 3 minutos con tarjeta visual) cuando detecte saturación.",
        "Mantener su pupitre despejado, únicamente con el material de la asignatura en curso, utilizando código de colores por área.",
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión.",
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual.",
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Exámenes con diseño visual altamente estructurado: recuadros delimitados para cada respuesta, sin preguntas ambiguas ni enunciados con múltiples órdenes anidadas.",
        "Incluir un ejemplo resuelto al inicio de cada bloque de ejercicios del examen para clarificar exactamente qué se espera.",
        "Permitir realizar las pruebas de evaluación en entorno silencioso o con el apoyo del especialista PT si el ruido del aula le bloquea.",
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica.",
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen.",
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Mediación estructurada en recreos y trabajos cooperativos: asignarle un rol concreto y claro dentro del grupo (ej. encargado de material o verificador de datos) y un compañero de referencia empático.",
        "Utilizar historias sociales breves o guiones visuales para explicar normas de convivencia o resolver malentendidos con iguales sin confrontación verbal.",
        "Respetar sus tiempos de procesamiento emocional ante el bloqueo sin forzar el contacto ocular ni exigir respuestas inmediatas bajo estrés.",
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito.",
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas.",
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la comprensión de textos narrativos mediante organizadores gráficos de estados mentales ('¿Qué piensa el personaje? ¿Qué siente? ¿Por qué actúa así?').",
            "Sustituir redacciones libres o abstractas por redacciones guiadas con estructura de preguntas pautadas o apoyo de viñetas.",
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos.",
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir los problemas verbales a esquemas gráficos ('Datos - Operación - Dibujo - Resultado') eliminando información superflua del enunciado.",
            "Emplear material manipulativo o representaciones visuales constantes para conceptos abstractos.",
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación.",
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar mapas conceptuales visuales al inicio del tema con el vocabulario nuclear ilustrado.",
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos.",
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el apoyo visual (flashcards, rutinas escritas) frente a dinámicas grupales ruidosas o de improvisación oral.",
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera.",
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a afianzar la correcta articulación fonética, la discriminación auditiva de fonemas y la seguridad comunicativa en el aula.",
      "methodologicalAdaptations": [
        "Modelado fonético indirecto: cuando pronuncie un fonema con sustitución u omisión, repetir nosotros la palabra dentro de una frase con articulación clara y pausada, mirándole a la cara pero sin exigirle que la repita en público.",
        "Apoyar la conciencia fonológica asociando cada sonido con su punto de articulación visual y gestual al trabajar la lectoescritura.",
        "Coordinar con la familia y especialistas los fonemas en fase de generalización para reforzarlos positivamente en la lectura individual."
      ],
      "environmentalAdaptations": [],
      "evaluationAdaptations": [
        "No penalizar en la escritura aquellos errores ortográficos derivados directamente de su patrón articulatorio (escribir como pronuncia) mientras se consolida la rehabilitación."
      ],
      "emotionalTips": [],
      "subjectSpecificGuidelines": [],
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a garantizar la continuidad educativa, el bienestar físico y emocional y la flexibilización curricular adaptada a sus necesidades de salud.",
      "methodologicalAdaptations": [
        "Flexibilización de ritmos y cargas de trabajo diario atendiendo a su nivel de energía o fatiga física a lo largo de la jornada.",
        "Facilitar resúmenes, apuntes y materiales digitalizados en caso de ausencias médicas o revisiones hospitalarias para que no pierda el hilo del grupo.",
        "Priorizar los aprendizajes esenciales y competenciales de cada unidad frente a la acumulación de tareas secundarias."
      ],
      "environmentalAdaptations": [
        "Ubicación cómoda y accesible cerca de la puerta o del docente según sus requerimientos de salud y supervisión.",
        "Permiso flexible e inmediato para acudir al baño, beber agua o descansar si presenta malestar físico."
      ],
      "evaluationAdaptations": [
        "Flexibilidad total en las fechas de exámenes y entregas, adaptando los calendarios tras periodos de ausencia justificada.",
        "Fraccionar las pruebas de evaluación para evitar el agotamiento prolongado."
      ],
      "emotionalTips": [
        "Mantener el vínculo afectivo con sus compañeros y el sentido de pertenencia al grupo clase en todo momento.",
        "Coordinación estrecha y cálida entre tutoría, orientación y familia."
      ],
      "subjectSpecificGuidelines": [],
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica; compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual.",
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen.",
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas.",
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir.",
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido.",
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto.",
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves.",
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a garantizar la predictibilidad del entorno escolar, la estructuración visual tipo TEACCH, la regulación sensorial y la comprensión socio-comunicativa; desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo; entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica; compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "Estructuración visual TEACCH del trabajo diario: presentar siempre en su mesa una tira o secuencia visual con las 3-4 tareas de la sesión ('Primero -> Después -> Por último') para reducir la incertidumbre.",
        "Anticipación sistemática ante cambios imprevistos: avisar de forma individualizada y con apoyo visual cualquier modificación de horario, excursión, simulacro o ausencia de un profesor.",
        "Emplear un lenguaje oral directo, literal y conciso: evitar ironías, dobles sentidos, metáforas o preguntas retóricas que generen confusión pragmática.",
        "Conectar los contenidos curriculares nuevos con sus centros de interés específicos para facilitar el enganche atencional y la motivación intrínseca.",
        "Secuenciar las tareas complejas de aula en pasos cortos, cerrados y verificables, mostrándole un modelo visual del producto final esperado antes de que empiece.",
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación en zona tranquila del aula, protegida de focos de sobrecarga sensorial (timbres, puertas de pasillo, proyectores ruidosos o ventanas con tránsito).",
        "Establecer un 'espacio o rincón de regulación sensorial' acordado (o permiso de salida pautada de 3 minutos con tarjeta visual) cuando detecte saturación.",
        "Mantener su pupitre despejado, únicamente con el material de la asignatura en curso, utilizando código de colores por área.",
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión.",
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual.",
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Exámenes con diseño visual altamente estructurado: recuadros delimitados para cada respuesta, sin preguntas ambiguas ni enunciados con múltiples órdenes anidadas.",
        "Incluir un ejemplo resuelto al inicio de cada bloque de ejercicios del examen para clarificar exactamente qué se espera.",
        "Permitir realizar las pruebas de evaluación en entorno silencioso o con el apoyo del especialista PT si el ruido del aula le bloquea.",
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica.",
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen.",
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Mediación estructurada en recreos y trabajos cooperativos: asignarle un rol concreto y claro dentro del grupo (ej. encargado de material o verificador de datos) y un compañero de referencia empático.",
        "Utilizar historias sociales breves o guiones visuales para explicar normas de convivencia o resolver malentendidos con iguales sin confrontación verbal.",
        "Respetar sus tiempos de procesamiento emocional ante el bloqueo sin forzar el contacto ocular ni exigir respuestas inmediatas bajo estrés.",
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito.",
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas.",
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la comprensión de textos narrativos mediante organizadores gráficos de estados mentales ('¿Qué piensa el personaje? ¿Qué siente? ¿Por qué actúa así?').",
            "Sustituir redacciones libres o abstractas por redacciones guiadas con estructura de preguntas pautadas o apoyo de viñetas.",
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos.",
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Traducir los problemas verbales a esquemas gráficos ('Datos - Operación - Dibujo - Resultado') eliminando información superflua del enunciado.",
            "Emplear material manipulativo o representaciones visuales constantes para conceptos abstractos.",
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación.",
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Proporcionar mapas conceptuales visuales al inicio del tema con el vocabulario nuclear ilustrado.",
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos.",
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el apoyo visual (flashcards, rutinas escritas) frente a dinámicas grupales ruidosas o de improvisación oral.",
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera.",
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera."
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a activar el foco atencional sostenido, combatir la lentitud de velocidad de procesamiento y estructurar la planificación ejecutiva de tareas.",
      "methodologicalAdaptations": [
        "Activación atencional discreta: establecer una señal privada pactada (toque suave en el hombro o en su mesa al pasar) para reconectar su atención cuando se observe desconexión o ensueño, sin exponerle en voz alta.",
        "Dividir las fichas y actividades largas en 'micro-metas' con tiempos definidos mediante reloj o temporizador visual en pizarra.",
        "Entrenar el uso de las 'Autoinstrucciones de Meichenbaum' pegadas en su mesa: 1º ¿Qué tengo que hacer?, 2º ¿Cómo lo voy a hacer?, 3º Me fijo bien, 4º Repaso antes de entregar.",
        "Reducir la carga de copia mecánica de enunciados largos para que invierta su energía cognitiva en pensar y resolver la actividad.",
        "Verificar sistemáticamente el inicio de la tarea en los primeros 2 minutos tras dar la explicación grupal."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a fortalecer el autocontrol conductual, la tolerancia a la frustración y la autorregulación emocional mediante estrategias proactivas y contención positiva; entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Prevención y anticipación de detonantes: identificar las situaciones que suelen generar frustración (transiciones, tareas largas de escritura, cambios de actividad) y anticipar la expectativa de conducta en privado.",
        "Aplicar la técnica del 'Opciones Limitadas Positivas': ofrecerle dos alternativas válidas de actuación ('¿Prefieres empezar por el ejercicio 1 o por el 2?') para reducir las conductas de oposición y darle sensación de control.",
        "Fraccionar el trabajo en metas cortas de éxito inmediato (10-15 minutos) con feedback positivo inmediato al completar cada tramo.",
        "Evitar las luchas de poder o discusiones en público delante del grupo clase; dar las indicaciones de reconducción en voz baja, a corta distancia y con tono neutro y firme.",
        "Acordar un 'Contrato Conductual o Sistema de Economía de Fichas' con objetivos semanales muy concretos (máximo 2 conductas diana) formulados siempre en positivo.",
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase.",
        "Coordinación estrecha con Especialista de Pedagogía Terapéutica (PT): alinear semanalmente los contenidos trabajados en el apoyo especializado con las actividades del aula ordinaria para garantizar la transferencia del aprendizaje."
      ],
      "environmentalAdaptations": [
        "Ubicación cercana al docente, rodeado de compañeros con perfil tranquilo y prosocial que actúen como modelos de regulación.",
        "Disponer de un protocolo pactado de 'Enfriamiento Emocional' (beber agua, llevar un recado a secretaría o acudir 5 minutos al rincón de calma) antes de que escale un bloqueo.",
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Presentar los exámenes página a página o por bloques para evitar el bloqueo emocional al ver una prueba extensa.",
        "Permitir breves pausas de regulación si muestra signos de ansiedad o frustración durante un control.",
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Aplicar la secuencia 'Conectar antes de Corregir': validar primero la emoción ('Entiendo que este ejercicio te haya resultado frustrante') y, una vez calmado, abordar la conducta.",
        "Asignarle responsabilidades de ayuda o liderazgo positivo en el aula (encargado de material, ayudante tecnológico) para transformar su autoconcepto en el grupo.",
        "Comunicación fluida con la familia destacando también los días y momentos de logro conductual, no únicamente las incidencias.",
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
          ]
        }
      ],
      "ptHoursPerWeek": 0
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a desarrollar la comprensión morfosintáctica, enriquecer el caudal léxico-semántico y asegurar el acceso visual al currículo; desarrollar su potencial cognitivo y creativo mediante enriquecimiento curricular horizontal, retos de investigación interdisciplinar y acompañamiento socioemocional.",
      "methodologicalAdaptations": [
        "Canal bimodal (auditivo + visual): acompañar toda explicación verbal con esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave escritas.",
        "Ajuste del discurso docente: hablar a ritmo pausado, con frases bien articuladas, pausas entre ideas y asegurando el contacto visual antes de formular una consigna.",
        "Aplicar la técnica de 'reformulación y expansión indirecta': cuando cometa un error morfosintáctico o léxico al hablar, no interrumpir bruscamente; devolverle la frase bien construida de forma natural.",
        "Respetar el 'tiempo de latencia de respuesta' (esperar 5-8 segundos tras hacerle una pregunta oral) para permitirle organizar mentalmente la estructura de su oración.",
        "Entregar glosarios visuales anticipados (vocabulario clave con imagen y definición sencilla) al comenzar cada unidad didáctica nueva.",
        "Compactación curricular ('Curriculum Compacting'): evaluar brevemente qué contenidos de la unidad ya domina para eximirle de ejercicios mecánicos repetitivos y sustituirlos por retos de profundización.",
        "Implementar actividades graduadas basadas en la Taxonomía de Bloom: priorizar tareas de análisis, evaluación crítica, diseño y creación frente a la mera reproducción memorística.",
        "Proponer un 'Proyecto de Investigación Personal o ABP' trimestral conectado con el currículo pero elegido según sus intereses (con exposición o producto creativo para la clase).",
        "Incorporar retos de pensamiento divergente, acertijos lógico-matemáticos, debate argumentativo y dilemas éticos o científicos.",
        "Disponer de una 'Carpeta o Rincón de Enriquecimiento' en el aula a la que pueda acudir de forma autónoma cuando finalice con corrección la tarea nuclear."
      ],
      "environmentalAdaptations": [
        "Ubicación en primera o segunda fila, frente al docente, garantizando buena recepción auditiva y lectura de apoyos gestuales y labiofaciales.",
        "Pizarra o corcho de aula con banco visual permanente de conectores discursivos ('Primero, después, porque, por lo tanto') para apoyar su expresión.",
        "Agrupamientos flexibles en el aula: combinar momentos de trabajo con compañeros de ritmo cognitivo similar (para retos complejos) con grupos heterogéneos cooperativos.",
        "Evitar utilizarle sistemáticamente como 'profesor ayudante' de compañeros con dificultades; debe tener derecho a aprender retos nuevos a su propio nivel.",
        "Acceso a recursos de consulta avanzada en el aula (biblioteca de aula, atlas, retos STEM o dispositivos de investigación supervisada)."
      ],
      "evaluationAdaptations": [
        "Simplificación sintáctica de los enunciados de examen: usar oraciones activas, afirmativas y cortas, evitando subordinadas complejas o dobles negaciones.",
        "Lectura oral previa e individualizada de todas las preguntas del control, verificando que comprende qué debe hacer en cada ejercicio.",
        "Priorizar ítems de reconocimiento visual, unir con flechas, completar esquemas o preguntas de opción múltiple frente a preguntas de desarrollo extenso.",
        "Calificar el dominio del contenido conceptual sin descontar puntuación por errores de concordancia gramatical, omisión de nexos o pobreza léxica.",
        "Incluir en los exámenes o tareas una 'Pregunta Estrella o Reto de Transferencia' opcional donde pueda aplicar lo aprendido a un supuesto nuevo o complejo.",
        "Evaluar mediante rúbricas de proyectos, presentaciones orales, maquetas o ensayos de investigación además de las pruebas escritas convencionales.",
        "Valorar la originalidad del planteamiento y el uso de estrategias propias (p. ej. si resuelve un problema matemático por un camino lógico distinto al explicado en clase)."
      ],
      "emotionalTips": [
        "No exponerle a intervenciones orales improvisadas ante toda la clase; pactar previamente qué pregunta va a responder para que pueda prepararla con seguridad.",
        "Prevenir el aislamiento en el patio mediando en juegos reglados donde la exigencia verbal sea baja y pueda participar con éxito.",
        "Acompañar la 'disincronía evolutiva' (desfase entre su alta madurez intelectual y su desarrollo emocional propio de la edad cronológica).",
        "Trabajar la tolerancia a la frustración y el perfeccionismo paralizante: normalizar el error como parte esencial del aprendizaje científico cuando se enfrenta por primera vez a un reto difícil.",
        "Fomentar un clima de aula que valore la curiosidad intelectual para evitar que oculte sus capacidades por miedo a destacar."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Apoyar la expresión escrita y oral mediante 'plantillas de estructuración de frases' (Quién + Qué hace + Dónde + Cuándo).",
            "Trabajar la comprensión lectora con textos breves, subrayando previamente las palabras clave y anticipando el significado de términos desconocidos.",
            "Proponer creación literaria avanzada, prensa escolar, debates orales estructurados y lecturas de mayor complejidad léxica."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Desglosar lingüísticamente los enunciados de problemas matemáticos: rodear en verde los datos numéricos y en rojo la pregunta final antes de elegir la operación.",
            "Ofrecer problemas abiertos con múltiples soluciones, enigmas de lógica, criptogramas numéricos y geometría aplicada."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Evaluar los temas de Ciencias mediante esquemas mudos para completar, mapas visuales y asociación de conceptos clave en lugar de memorización literal de párrafos.",
            "Fomentar la indagación mediante el método científico (formulación de hipótesis, diseño de experimentos y búsqueda de causas-consecuencias)."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Priorizar el vocabulario funcional básico con apoyo pictográfico (flashcards) y eximir de exigencias gramaticales complejas en lengua extranjera.",
            "Facilitar lecturas graduadas de nivel superior ('Graded Readers') y proyectos comunicativos en lengua inglesa."
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a entrenar las funciones ejecutivas (inhibición de la impulsividad, memoria de trabajo y atención sostenida) y estructurar la autorregulación motora y académica.",
      "methodologicalAdaptations": [
        "Fragmentación de instrucciones: dar las consignas de una en una, de forma breve y pidiéndole que verbalice con sus palabras qué debe hacer antes de empezar ('¿Cuál es el primer paso?').",
        "Canalización de la hiperactividad mediante 'movimiento funcional autorizado': encargarle repartir fichas, borrar la pizarra o llevar recados entre tarea y tarea.",
        "Uso de 'Checklists' o listas de verificación visuales en su pupitre para estructurar el inicio, desarrollo y cierre de cada asignatura.",
        "Alternar dentro de la misma hora lectiva actividades de alta demanda atencional (cálculo, comprensión) con tareas más dinámicas o manipulativas.",
        "Supervisión directa del registro de deberes y fechas en la agenda escolar (o plataforma digital) 5 minutos antes de finalizar la clase."
      ],
      "environmentalAdaptations": [
        "Ubicación en el 'triángulo de acción docente' (primera fila, frente a la mesa del profesor), lejos de ventanas, puertas y compañeros distractores.",
        "Norma de 'Mesa Limpia': mantener sobre el pupitre exclusivamente el libro, cuaderno y estuche necesarios para la tarea actual."
      ],
      "evaluationAdaptations": [
        "Formato de examen adaptado a funciones ejecutivas: resaltar en NEGRITA y MAYÚSCULAS los verbos de acción y datos clave de cada pregunta (ej. 'CALCULA Y RODEA', 'ELIGE LA OPCIÓN FALSA').",
        "Evitar preguntas con doble enunciado en el mismo ítem (separar en apartado 'a' y apartado 'b' con su propio espacio de respuesta).",
        "Entregar el examen en dos partes o supervisar a mitad de la prueba para comprobar que no se ha saltado ninguna pregunta ni cara del folio por impulsividad.",
        "Ampliación de tiempo (+25% a +35%) y recordatorio individual de 'lectura reflexiva y revisión final' antes de recoger el examen."
      ],
      "emotionalTips": [
        "Refuerzo positivo inmediato y específico: elogiar el proceso concreto ('Muy bien por haber leído dos veces el enunciado antes de contestar') en lugar de elogios genéricos.",
        "Separar la valoración de su esfuerzo y capacidad del síntoma neurobiológico (olvidos involuntarios o inquietud motora), evitando etiquetas negativas."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Permitir el uso de regla o marcapáginas de lectura para no perder el renglón y pedirle subrayar de distinto color sujeto, verbo o ideas clave.",
            "En redacciones, proporcionar un guion previo en 3 bloques (Inicio - Nudo - Desenlace) antes de escribir."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Autorizar el uso de hoja en sucio cuadriculada para alinear correctamente las columnas en operaciones y rodear con color el signo (+, -, x, :) para evitar errores por impulsividad.",
            "Aplicar plantilla de pasos en problemas: 1º Subrayo datos, 2º Rodeo la pregunta, 3º Elijo operación, 4º Compruebo si el resultado tiene sentido."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Fomentar el estudio mediante esquemas de llaves, mapas mentales con colores y preguntas cortas en lugar de bloques extensos de texto."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "Combinar apoyos auditivos y visuales cortos y dinámicos, dividiendo los ejercicios de vocabulario y gramática en bloques breves."
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
      "generalGoal": "Intervención psicopedagógica en Educación Secundaria Obligatoria (organización departamental y autonomía ejecutiva avanzada) orientada a compensar las dificultades de acceso lectoescritor (decodificación fonológica, velocidad lectora y ortografía arbitraria) garantizando la evaluación justa de sus conocimientos.",
      "methodologicalAdaptations": [
        "No exponerle a leer en voz alta ante la clase sin haberle entregado el fragmento el día anterior para que pueda prepararlo en casa o con el PT.",
        "Adaptación tipográfica universal de materiales: fuente sin serifa (Arial, Verdana u OpenDyslexic), tamaño 12-14 puntos, interlineado 1.5 y alineación a la izquierda (nunca texto justificado).",
        "Eliminar la exigencia de copiar enunciados largos del libro o de la pizarra: permitir responder directamente indicando el número del ejercicio o entregar ficha impresa.",
        "Proporcionar esquemas visuales, mapas conceptuales y resúmenes con apoyos gráficos para reducir la fatiga de lectura en temas largos.",
        "Permitir el uso de guía de lectura (regla opaca o ventana lectora) y marcadores fluorescentes para identificar palabras clave."
      ],
      "environmentalAdaptations": [
        "Ubicación próxima al docente y a la pizarra para facilitar el seguimiento visual y ofrecer ayuda discreta en la lectura de consignas.",
        "Disponer en su mesa o carpeta de 'tarjetas de consulta rápida' (reglas ortográficas visuales, tablas de multiplicar, vocabulario frecuente)."
      ],
      "evaluationAdaptations": [
        "Lectura oral previa de todos los enunciados del examen por parte del profesor al inicio de la prueba para asegurar la plena comprensión.",
        "NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, sustituciones b/v, g/j, h) en la calificación de áreas no lingüísticas (Matemáticas, Ciencias), y aplicar baremo adaptado en Lengua.",
        "Complementar los exámenes escritos con breves preguntas orales de verificación cuando una respuesta escrita sea escueta o confusa por fatiga grafomotora.",
        "Ampliación del tiempo de examen (+30% a +50%) y espaciado amplio entre preguntas."
      ],
      "emotionalTips": [
        "Proteger su autoconcepto académico reconociendo explícitamente su esfuerzo: un alumno con dislexia invierte hasta 5 veces más energía cognitiva al leer y escribir que un lector automatizado.",
        "Evitar devolver cuadernos o exámenes llenos de tachones en tinta roja; corregir priorizando 2 o 3 palabras frecuentes para trabajar cada semana."
      ],
      "subjectSpecificGuidelines": [
        {
          "subject": "Lengua y Literatura",
          "tips": [
            "Evaluar las reglas ortográficas mediante ejercicios prácticos de aplicación o dictados preparados (con las palabras trabajadas previamente), nunca sobre textos sorpresa.",
            "Fragmentar los libros de lectura obligatoria por capítulos cortos o permitir el apoyo simultáneo de audiolibro mientras sigue el texto con la vista."
          ]
        },
        {
          "subject": "Matemáticas",
          "tips": [
            "Permitir tener a la vista la tabla pitagórica / tablas de multiplicar si presenta dificultad asociada en la automatización de secuencias verbales.",
            "Leerle en voz alta los enunciados de los problemas matemáticos para que un error de lectura no impida demostrar su razonamiento lógico."
          ]
        },
        {
          "subject": "Ciencias / STEM",
          "tips": [
            "Diseñar controles con preguntas de relacionar, completar esquemas, verdadero/falso justificado o identificar en imágenes, evitando exigir el desarrollo escrito de páginas enteras."
          ]
        },
        {
          "subject": "Idiomas / Inglés",
          "tips": [
            "En Inglés (lengua opaca de alta dificultad para la dislexia): priorizar la comprensión y expresión oral (Speaking/Listening) sobre la exactitud ortográfica escrita (Spelling).",
            "En vocabulario escrito en inglés, permitir bancos de palabras de apoyo ('Word Bank') o aceptar fonética aproximada sin penalizar letras mudas o dobles vocales."
          ]
        }
      ],
      "ptHoursPerWeek": 0
    },
    "quarterlyReviews": []
  }
];
