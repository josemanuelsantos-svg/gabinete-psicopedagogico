import React, { useState } from 'react';
import { StudentNEAE, EducationalStage } from '../types';
import { 
  Sparkles, 
  BookOpen, 
  Printer, 
  Search, 
  Plus, 
  Pencil, 
  Trash2, 
  X, 
  Save, 
  UserCheck, 
  ShieldCheck, 
  AlertTriangle,
  Stethoscope,
  Activity,
  Bookmark,
  GraduationCap,
  ClipboardCheck
} from 'lucide-react';

interface NeaePortalProps {
  students: StudentNEAE[];
  isCounselor?: boolean;
  onSaveStudent?: (student: StudentNEAE) => Promise<void> | void;
  onDeleteStudent?: (studentId: string) => Promise<void> | void;
  onBulkSaveStudents?: (students: StudentNEAE[]) => Promise<void> | void;
  onOpenQuarterlyReview?: (student: StudentNEAE) => void;
}

function computeNextGrade(currentGrade: string): { nextGrade: string; nextStage: EducationalStage; isGraduatingPrimary: boolean } {
  const g = currentGrade.trim();
  const groupMatch = g.match(/\b([AB])\b$/i);
  const groupSuffix = groupMatch ? ` ${groupMatch[1].toUpperCase()}` : '';

  if (g.includes('3 años') || g.includes('1º Infantil')) {
    return { nextGrade: `Infantil 4 años${groupSuffix}`, nextStage: 'INFANTIL', isGraduatingPrimary: false };
  }
  if (g.includes('4 años') || g.includes('2º Infantil')) {
    return { nextGrade: `Infantil 5 años${groupSuffix}`, nextStage: 'INFANTIL', isGraduatingPrimary: false };
  }
  if (g.includes('5 años') || g.includes('3º Infantil')) {
    return { nextGrade: `1º Educación Primaria${groupSuffix || ' A'}`, nextStage: 'PRIMARIA', isGraduatingPrimary: false };
  }
  if (g.startsWith('1º')) return { nextGrade: `2º Educación Primaria${groupSuffix}`, nextStage: 'PRIMARIA', isGraduatingPrimary: false };
  if (g.startsWith('2º')) return { nextGrade: `3º Educación Primaria${groupSuffix}`, nextStage: 'PRIMARIA', isGraduatingPrimary: false };
  if (g.startsWith('3º')) return { nextGrade: `4º Educación Primaria${groupSuffix}`, nextStage: 'PRIMARIA', isGraduatingPrimary: false };
  if (g.startsWith('4º')) return { nextGrade: `5º Educación Primaria${groupSuffix}`, nextStage: 'PRIMARIA', isGraduatingPrimary: false };
  if (g.startsWith('5º')) return { nextGrade: `6º Educación Primaria${groupSuffix}`, nextStage: 'PRIMARIA', isGraduatingPrimary: false };
  if (g.startsWith('6º')) return { nextGrade: `1º ESO (Paso a Secundaria)`, nextStage: 'PRIMARIA', isGraduatingPrimary: true };
  return { nextGrade: g, nextStage: 'PRIMARIA', isGraduatingPrimary: false };
}

export const NeaePortal: React.FC<NeaePortalProps> = ({ 
  students = [], 
  isCounselor = false,
  onSaveStudent,
  onDeleteStudent,
  onBulkSaveStudents,
  onOpenQuarterlyReview
}) => {
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(students[0]?.id || null);
  const [filterNeed, setFilterNeed] = useState<string>('ALL');
  const [filterGrade, setFilterGrade] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Modal State for Counselor Editing/Adding
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState<StudentNEAE | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<StudentNEAE | null>(null);

  // Asistente de Promoción de Curso Escolar
  const [isPromotionModalOpen, setIsPromotionModalOpen] = useState(false);
  const [repeatingStudentIds, setRepeatingStudentIds] = useState<string[]>([]);

  // Form Fields State
  const [formData, setFormData] = useState<{
    id: string;
    name: string;
    stage: EducationalStage;
    grade: string;
    tutor: string;
    category: string;
    specificNeed: string;
    curricularAdaptation: 'No Significativa (ACNS)' | 'Significativa (ACS)' | 'Enriquecimiento' | 'Pautas Ordinarias';
    status: 'Activo' | 'En Seguimiento' | 'Alta';
    ptTeacher: string;
    ptHours: number;
    alTeacher?: string;
    alHours?: number;
    generalGoal: string;
    methodological: string;
    environmental: string;
    evaluation: string;
    emotional: string;
    subjectSpecificGuidelines?: Record<string, string[]>;
  }>({
    id: '',
    name: '',
    stage: 'PRIMARIA',
    grade: '1º Educación Primaria A',
    tutor: 'Tutor/a de Aula',
    category: 'ACNEAE - Apoyo Ordinario',
    specificNeed: 'Refuerzo Pedagógico en Competencias Básicas',
    curricularAdaptation: 'Pautas Ordinarias',
    status: 'Activo',
    ptTeacher: '',
    ptHours: 0,
    generalGoal: 'Atención educativa personalizada y adaptada en el aula ordinaria.',
    methodological: 'Fraccionamiento de tareas en pasos sencillos.\nSupervisión y confirmación del trabajo realizado.\nUso de apoyos manipulativos y visuales.',
    environmental: 'Ubicación en primera fila cerca de la pizarra.\nMesa de trabajo libre de distracciones visuales.',
    evaluation: 'Ampliación del tiempo en actividades escritas y controles (+25%).\nLectura oral previa de enunciados complejos.',
    emotional: 'Refuerzo positivo constante ante el esfuerzo.\nValidación emocional y fomento de un clima seguro.',
    subjectSpecificGuidelines: undefined
  });

  const applyClinicalTemplate = (templateKey: string) => {
    const templates: Record<string, {
      category: string;
      specificNeed: string;
      curricularAdaptation: 'No Significativa (ACNS)' | 'Significativa (ACS)' | 'Enriquecimiento' | 'Pautas Ordinarias';
      generalGoal: string;
      methodological: string[];
      environmental: string[];
      evaluation: string[];
      emotional: string[];
      subjectSpecificGuidelines: Record<string, string[]>;
    }> = {
      TEA: {
        category: 'ACNEE - Trastorno del Espectro Autista (TEA)',
        specificNeed: 'TEA (Estructuración TEACCH, Comprensión Pragmática y Regulación Sensorial)',
        curricularAdaptation: 'Significativa (ACS)',
        generalGoal: 'Garantizar la inclusión socioeducativa, predictibilidad del entorno escolar (metodología TEACCH), autorregulación sensorial y generalización de aprendizajes funcionales en coordinación con PT.',
        methodological: [
          'Estructuración visual TEACCH de la jornada: agenda visual individualizada en pupitre o pizarra anticipando cambios de actividad, profesores o salidas con al menos 15 minutos de antelación.',
          'Uso de lenguaje literal, claro, conciso y directo; evitar ironías, dobles sentidos, metáforas o preguntas abiertas ambiguas.',
          'Secuenciación paso a paso ("Primero... Después...") mediante apoyos visuales o pictogramas ARASAAC/esquemas numerados para iniciar y finalizar tareas de forma autónoma.',
          'Apoyo mediante Historias Sociales breves y guiones visuales para trabajar normas de convivencia, resolución de conflictos en el patio y trabajo en equipo.',
          'Integración funcional de sus centros de interés restringidos como puente motivacional para introducir contenidos curriculares nuevos.',
          'Tiempos de procesamiento verbal ampliados (espera estructurada de 5–8 segundos tras formularle una pregunta antes de repetirla o reformularla).'
        ],
        environmental: [
          'Ubicación preferente en primera fila lateral o zona de baja sobrecarga sensorial (alejado de timbres, puertas de paso continuo, ventanas ruidosas o luces parpadeantes).',
          'Habilitar un "Rincón de Calma" o permiso pactado de regulación sensorial (5 minutos con tarjeta visual de descanso) ante signos incipientes de saturación acústica o bloqueo.',
          'Mantener un entorno de trabajo visualmente limpio y predecible: en la mesa solo debe estar el material de la tarea en curso.',
          'Compañero/a tutor/a de referencia sensibilizado/a para acompañar en transiciones de aula, recreos estructurados y trabajos por parejas.'
        ],
        evaluation: [
          'Pruebas de evaluación altamente estructuradas, con formato visual limpio, un único ejercicio por bloque y ejemplo resuelto al inicio de cada pregunta.',
          'Sustituir preguntas abiertas o de inferencia pragmática compleja por ítems concretos: elección múltiple, unir con flechas, mapas conceptuales mudos o respuesta corta.',
          'Ampliación del tiempo de examen (+35% a +50%) o fraccionamiento del control en dos sesiones breves para evitar fatiga ejecutiva y bloqueo.',
          'Evaluación conforme a los criterios de su Adaptación Curricular Significativa (ACS) o ACNS en coordinación directa con el especialista de Pedagogía Terapéutica (PT).'
        ],
        emotional: [
          'No interpretar la rigidez cognitiva, la falta de contacto ocular sostenido o la literalidad como desafío de conducta o falta de respeto.',
          'Anticipar y validar emocionalmente cualquier imprevisto (ausencia de un profesor, lluvia en el recreo, excursión) ofreciendo una alternativa clara y segura.',
          'Intervenir de forma preventiva ante los primeros signos de sobrecarga (taparse los oídos, balanceo, bloqueo verbal) reduciendo inmediatamente las demandas verbales.'
        ],
        subjectSpecificGuidelines: {
          'Lengua y Literatura': [
            'Trabajar la comprensión lectora con organizadores gráficos visuales (¿Quién?, ¿Dónde?, ¿Qué pasó?, ¿Cómo terminó?) y apoyo de imágenes secuenciadas.',
            'Explicar explícitamente las frases hechas, modismos e intenciones emocionales de los personajes en las lecturas.'
          ],
          'Matemáticas': [
            'Apoyar la resolución de problemas con material manipulativo (regletas, bloques base 10) y plantilla visual dividida en: Datos / Dibujo / Operación / Solución.',
            'Resaltar con código de color el signo de la operación (+ en verde, - en rojo) para evitar errores por rigidez o cambio de operación.'
          ],
          'Ciencias / STEM': [
            'Presentar los temas mediante mapas visuales, esquemas causa-efecto y experimentos manipulativos concretos antes de la teoría abstracta.'
          ],
          'Idiomas / Inglés': [
            'Priorizar vocabulario funcional con flashcards visuales y rutinas predecibles; evitar exposiciones orales improvisadas frente a todo el grupo.'
          ]
        }
      },
      TEL: {
        category: 'ACNEE - Trastorno Específico del Lenguaje (TEL/TDL)',
        specificNeed: 'TEL / TDL (Estructuración Morfosintáctica y Comprensión Verbal)',
        curricularAdaptation: 'Significativa (ACS)',
        generalGoal: 'Desarrollar la competencia comunicativa expresiva y comprensiva, reduciendo la barrera lingüística en el acceso al currículo ordinario mediante apoyos visuales y modelado morfosintáctico.',
        methodological: [
          'Acompañar toda explicación oral con soporte visual simultáneo (esquemas en pizarra, imágenes, gestos naturales de apoyo y palabras clave destacadas).',
          'Hablar a velocidad pausada, vocalizando con claridad y empleando frases gramaticalmente completas pero de estructura sintáctica sencilla (Sujeto + Verbo + Objeto).',
          'Aplicar la técnica de modelado y expansión indirecta: ante un error morfosintáctico o léxico al hablar, no interrumpir ni corregir bruscamente, sino devolverle la frase bien construida de forma natural.',
          'Anticipar el vocabulario técnico o nuevo de cada unidad didáctica (glosario visual con imagen + definición sencilla) antes de explicarlo al grupo.',
          'Verificar la comprensión real de los enunciados pidiéndole que muestre o explique brevemente qué debe hacer.'
        ],
        environmental: [
          'Ubicación en primera o segunda fila centrada, garantizando contacto visual directo con el rostro del docente para facilitar la lectura labial y captación de claves gestuales.',
          'Agrupamiento en parejas o pequeño grupo cooperativo con compañeros de buen modelo lingüístico y actitud empática.',
          'Controlar el ruido ambiental del aula durante las explicaciones orales y puestas en común.'
        ],
        evaluation: [
          'Lectura oral mediada y explicación previa de todos los enunciados del examen para asegurar que se evalúa el conocimiento de la materia y no el déficit lingüístico.',
          'Priorizar pruebas con apoyo gráfico, esquemas para completar, verdadero/falso, relacionar conceptos o preguntas cortas frente a desarrollos extensos.',
          'No penalizar errores morfosintácticos, de concordancia o de vocabulario limitado en áreas no lingüísticas (Ciencias, Matemáticas).',
          'Permitir apoyo oral complementario en privado con el profesor para matizar respuestas que por escrito hayan quedado incompletas.'
        ],
        emotional: [
          'Respetar su turno de palabra sin meterle prisa ni terminar sus frases por impaciencia; darle seguridad comunicativa.',
          'Evitar exponerle a leer o hablar en público sin preparación previa; pactar de antemano qué pregunta o fragmento va a intervenir para que lo lleve ensayado.',
          'Reforzar positivamente toda iniciativa de comunicación oral y participación en el aula.'
        ],
        subjectSpecificGuidelines: {
          'Lengua y Literatura': [
            'Utilizar plantillas de estructuración de frases (¿Quién? + ¿Qué hace? + ¿Dónde/Cuándo?) con apoyo de colores para la expresión escrita.',
            'Trabajar lecturas con vocabulario glosado y preguntas literales directas antes de pasar a inferencias.'
          ],
          'Matemáticas': [
            'Traducir el enunciado verbal de los problemas matemáticos a dibujos o esquemas visuales, subrayando los datos numéricos y la pregunta final.'
          ],
          'Ciencias / STEM': [
            'Evaluar mediante mapas conceptuales visuales, maquetas o asociación imagen-concepto en lugar de definiciones memorísticas literales.'
          ],
          'Idiomas / Inglés': [
            'Priorizar la comprensión oral apoyada en gestos/imágenes (Total Physical Response) y vocabulario básico sin exigir precisión gramatical escrita compleja.'
          ]
        }
      },
      AUDITIVA: {
        category: 'ACNEE - Discapacidad Auditiva',
        specificNeed: 'Hipoacusia Neurosensorial (Adaptación Acústica, Lectura Labial y Apoyo Visual)',
        curricularAdaptation: 'No Significativa (ACNS)',
        generalGoal: 'Garantizar la plena accesibilidad auditiva y visual a la información oral del aula, optimizando el canal visual, la lectura labiofacial y el rendimiento de sus prótesis auditivas.',
        methodological: [
          'Hablar siempre de frente al alumno/a, con el rostro bien iluminado y sin obstáculos visuales (no explicar mientras se escribe de espaldas en la pizarra ni taparse la boca con papeles).',
          'Asegurar su atención visual (llamarle suavemente o hacer una señal visual) ANTES de comenzar una explicación oral o dar una instrucción importante.',
          'Escribir siempre en la pizarra las palabras técnicas nuevas, fechas de exámenes, páginas de deberes y cambios de tarea.',
          'En debates o intervenciones de compañeros situados detrás, repetir o resumir brevemente desde la posición del profesor lo que ha dicho el compañero.',
          'Activar subtítulos en español/inglés en todos los vídeos, proyecciones multimedia o audios empleados en el aula.'
        ],
        environmental: [
          'Ubicación en segunda fila central o ligeramente lateralizada (con el oído de mejor resto auditivo orientado hacia el centro del aula y visión panorámica de pizarra y compañeros).',
          'Reducción drástica de la reverberación y ruido de fondo: cerrar puerta/ventanas en momentos de explicación o audición y colocar fieltros en patas de sillas.',
          'Comprobación discreta diaria del correcto funcionamiento de audífonos / implante coclear / equipo de FM al inicio de la jornada.'
        ],
        evaluation: [
          'Sustituir o adaptar las pruebas de audición pura (dictados, listenings de idiomas sin apoyo visual) mediante lectura labiofacial directa con el profesor en silencio o transcripción escrita.',
          'Entregar por escrito todas las aclaraciones o correcciones que se digan en voz alta durante el transcurso de un examen.',
          'Tiempo adicional (+25%) en pruebas con alta carga de comprensión lectora y redacción.'
        ],
        emotional: [
          'Tener en cuenta la "fatiga auditiva y visual" acumulada a últimas horas de la mañana por el sobreesfuerzo constante de concentración labiofacial.',
          'Fomentar la empatía del grupo-clase (respetar turnos de palabra de uno en uno sin solaparse al hablar).'
        ],
        subjectSpecificGuidelines: {
          'Lengua y Literatura': [
            'En los dictados, situarse cerca del alumno/a articulando con claridad y ritmo pausado para permitir lectura labiofacial.',
            'Apoyar el nuevo vocabulario mediante campos semánticos visuales.'
          ],
          'Matemáticas': [
            'Acompañar la explicación del cálculo mental y resolución de problemas con representación simultánea en pizarra.'
          ],
          'Ciencias / STEM': [
            'Facilitar guiones escritos o presentaciones visuales de los temas y vídeos con subtítulos activados.'
          ],
          'Idiomas / Inglés': [
            'Adaptar los ejercicios de Listening: realizarlos a viva voz por el docente frente al alumno/a a velocidad reducida o con apoyo del texto escrito.'
          ]
        }
      },
      CONDUCTA: {
        category: 'ACNEE - Trastorno de Conducta y Regulación Emocional',
        specificNeed: 'Trastorno de Conducta y Autorregulación Emocional (Apoyo Conductual Positivo)',
        curricularAdaptation: 'No Significativa (ACNS)',
        generalGoal: 'Consolidar la autorregulación emocional, el control de la impulsividad reactiva y la tolerancia a la frustración mediante un Plan de Apoyo Conductual Positivo y co-regulación adulta.',
        methodological: [
          'Establecer normas de aula pocas, claras, formuladas en positivo ("Hablamos en tono suave", "Levantamos la mano") y visibles, pactando previamente las consecuencias lógicas.',
          'Aplicar la técnica del "Refuerzo Diferencial": prestar atención inmediata y elogio descriptivo cuando está trabajando tranquilo o cumpliendo normas, ignorando conductas leves de búsqueda de atención.',
          'Fraccionar las tareas de mayor exigencia ofreciendo "elecciones forzadas positivas" ("¿Prefieres empezar por el ejercicio 1 o por el 2?") para reducir la oposición reactiva.',
          'Intercalar responsabilidades prosociales en el aula (encargado de material, repartir fichas, borrar pizarra) que canalicen su liderazgo en rol positivo.',
          'Economía de fichas o contrato conductual individualizado con metas diarias cortas (por tramos de mañana/tarde) y refuerzo inmediato.'
        ],
        environmental: [
          'Ubicación en primera fila cerca de la mesa del docente, rodeado de compañeros tranquilos y prosociales que no entren en escaladas ni provocaciones.',
          'Pactar una "Señal Privada de Calma" (gesto discreto o tarjeta sobre la mesa) y una zona o salida regulada de enfriamiento emocional (2–3 min) antes de que estalle una crisis.',
          'Supervisión activa y estructuración de los tiempos no lectivos (transiciones en pasillos, filas y patio de recreo), que son los momentos de mayor vulnerabilidad.'
        ],
        evaluation: [
          'Separar estrictamente la calificación académica del comportamiento conductual: evaluar los aprendizajes objetivos sin restar nota académica por conducta.',
          'Fraccionar los exámenes largos y ofrecer supervisión cercana al inicio de la prueba para evitar que abandone el examen ante el primer bloqueo por frustración.',
          'Permitir pausas breves de regulación durante el control si se observa tensión motora o bloqueo.'
        ],
        emotional: [
          'Evitar SIEMPRE las reprimendas públicas en voz alta o las luchas de poder frente al grupo; corregir en privado, a su altura visual, con tono de voz firme, sereno y neutro.',
          'En fase de escalada emocional, reducir la carga verbal, validar la emoción ("Veo que estás muy enfadado ahora mismo, vamos a respirar") y posponer la reflexión para cuando haya recuperado la calma.',
          'Cuidar el vínculo diario: recibirle cada mañana desde cero ("borrón y cuenta nueva"), sin arrastrar etiquetas del día anterior.'
        ],
        subjectSpecificGuidelines: {
          'Lengua y Literatura': [
            'Alternar actividades de escritura con tareas dinámicas u orales para evitar picos de frustración ante textos largos.'
          ],
          'Matemáticas': [
            'Presentar los retos matemáticos de menor a mayor dificultad (empezar siempre con un ejercicio que domine para generar éxito inicial).'
          ],
          'Ciencias / STEM': [
            'Asignarle un rol concreto y estructurado dentro de los trabajos en equipo o experimentos prácticos.'
          ],
          'Idiomas / Inglés': [
            'Utilizar dinámicas participativas y gamificadas con feedback positivo inmediato.'
          ]
        }
      },
      TDAH: {
        category: 'ACNEAE - Dificultades Específicas de Aprendizaje',
        specificNeed: 'TDAH (Déficit de Atención con Hiperactividad e Impulsividad)',
        curricularAdaptation: 'No Significativa (ACNS)',
        generalGoal: 'Mejorar la atención sostenida, la inhibición de la respuesta impulsiva y la planificación ejecutiva en el aula ordinaria.',
        methodological: [
          'Fragmentación ejecutiva de tareas: entregar o señalar las actividades de una en una (o por bloques de 10–15 min) con metas cortas y verificación inmediata.',
          'Asegurar el contacto ocular antes de dar una instrucción; pedirle que verbalice en voz baja los pasos que va a seguir (autoinstrucciones de Meichenbaum: "¿Qué tengo que hacer?, ¿Cómo lo haré?, Repaso").',
          'Permitir movimiento funcional regulado ("recados pedagógicos": repartir material, llevar un aviso, borrar la pizarra) tras finalizar un bloque de concentración.',
          'Subrayar o resaltar con marcador fluorescente las palabras clave y verbos de acción en los enunciados antes de que empiece a responder.',
          'Supervisión obligatoria de la agenda escolar en los últimos 5 minutos de clase (verificar que ha anotado deberes y mete el material en la mochila).'
        ],
        environmental: [
          'Ubicación en primera fila, frente a la mesa del profesor, lejos de ventanas, puertas y compañeros distractores.',
          'Política de "Mesa Limpia": mantener sobre el pupitre únicamente el libro, cuaderno y estuche necesarios para la asignatura actual.',
          'Uso de apoyos visuales de gestión del tiempo (reloj visible o temporizador visual tipo Time Timer) para que autorregule el tiempo restante de cada tarea.'
        ],
        evaluation: [
          'Ampliación del tiempo de evaluación (+25% a +35%) y entrega del examen en páginas separadas o dobladas para que centre el foco en una sola parte a la vez.',
          'Subrayado previo en negrita/color de las palabras clave de los enunciados (especialmente cuando hay dos preguntas dentro de un mismo ítem).',
          'Recordatorio expreso y guiado 5 minutos antes de entregar el examen para que revise olvidos por impulsividad (preguntas sin contestar detrás de la hoja, signos de operaciones).',
          'Combinar el examen escrito tradicional con evaluación continua de cuaderno, proyectos y preguntas orales en clase.'
        ],
        emotional: [
          'Refuerzo positivo inmediato y frecuente cuando permanece concentrado o levanta la mano esperando su turno.',
          'No castigar sistemáticamente con "sin recreo": el alumnado con TDAH necesita imperiosamente la descarga motriz del patio para poder concentrarse en las sesiones posteriores.',
          'Separar la persona de la conducta al corregir despistes u olvidos, fomentando su autoestima académica.'
        ],
        subjectSpecificGuidelines: {
          'Lengua y Literatura': [
            'Dividir las lecturas largas en párrafos numerados con preguntas breves intercaladas para mantener la atención activa.',
            'Facilitar guiones de planificación antes de redactar un texto (Introducción - Nudo - Desenlace).'
          ],
          'Matemáticas': [
            'Exigir el uso de cuadrícula clara y rodear con color el signo de la operación (+, -, x, :) para evitar fallos por precipitación impulsiva.',
            'No penalizar el planteamiento completo de un problema si el único fallo es un error mecánico de cálculo final por inatención.'
          ],
          'Ciencias / STEM': [
            'Apoyar el estudio con esquemas visuales, mapas mentales con colores y vídeos cortos e interactivos.'
          ],
          'Idiomas / Inglés': [
            'Alternar actividades cortas (listening, speaking, juego de vocabulario, ejercicio escrito breve) cada 12–15 minutos.'
          ]
        }
      },
      TDA: {
        category: 'ACNEAE - Dificultades Específicas de Aprendizaje',
        specificNeed: 'TDA (Déficit de Atención Predominio Inatento y Velocidad de Procesamiento)',
        curricularAdaptation: 'No Significativa (ACNS)',
        generalGoal: 'Potenciar la atención selectiva, la memoria de trabajo y la velocidad de procesamiento, evitando la desconexión silenciosa en el aula.',
        methodological: [
          'Activar el foco atencional mediante señales discretas pactadas (tocar suavemente su hombro o su mesa al pasar, o nombrarle con naturalidad) sin exponerle ante la clase.',
          'Respetar su menor velocidad de procesamiento cognitivo: reducir un 20–30% el volumen de ejercicios repetitivos (ej. hacer 3 operaciones bien hechas en lugar de 6 iguales) y eximir de copiar enunciados largos.',
          'Acompañar las explicaciones orales con organizadores gráficos en la pizarra para compensar las sobrecargas en su memoria de trabajo.',
          'Dar las instrucciones por escrito o en lista de verificación (checklist de pasos) en su mesa para que pueda consultarlas si pierde el hilo de la explicación oral.',
          'Revisar la agenda escolar y el material necesario al cierre de la jornada junto con un compañero-tutor o el docente.'
        ],
        environmental: [
          'Ubicación en primera fila directamente frente al profesor, donde sea fácil mantener el contacto visual y detectar precozmente si "se queda en blanco" o desconecta.',
          'Sentarle junto a un compañero/a organizado/a y tranquilo/a que sirva de referente silencioso para seguir la página del libro o la tarea actual.',
          'Mesa despejada de estímulos innecesarios que favorezcan la ensoñación o distracción interna.'
        ],
        evaluation: [
          'Conceder entre un +25% y +35% de tiempo extra en todos los controles y pruebas escritas debido a su ritmo lento de procesamiento y ejecución.',
          'Diseñar exámenes con tipografía clara, interlineado amplio y sin saturación visual de preguntas en la misma hoja.',
          'Lectura inicial guiada de los enunciados y verificación a mitad del examen de que está gestionando bien el tiempo y no se ha bloqueado en una pregunta.'
        ],
        emotional: [
          'No confundir su lentitud cognitiva o sus despistes con "vagancia", desinterés o falta de esfuerzo; realiza un sobreesfuerzo mental invisible muy elevado.',
          'Valorar el porcentaje de acierto sobre los ejercicios realizados en lugar de penalizar severamente por no terminar a tiempo tareas largas.',
          'Fomentar su participación en clase avisándole unos minutos antes ("Enseguida te preguntaré tu opinión sobre este punto") para que pueda preparar su respuesta con seguridad.'
        ],
        subjectSpecificGuidelines: {
          'Lengua y Literatura': [
            'Permitir usar marcapáginas o regla de lectura para no saltar de línea y subrayar ideas principales párrafo a párrafo.'
          ],
          'Matemáticas': [
            'Proporcionar hojas con las operaciones ya copiadas o permitir responder directamente en la ficha para que dedique su energía mental al razonamiento matemático.'
          ],
          'Ciencias / STEM': [
            'Entregar esquemas-resumen de la unidad con los conceptos esenciales destacados para orientar su estudio en casa.'
          ],
          'Idiomas / Inglés': [
            'Repetir las pistas de audio (Listening) una vez adicional y facilitar apoyo visual del vocabulario.'
          ]
        }
      },
      DISLEXIA: {
        category: 'ACNEAE - Dificultades Específicas de Aprendizaje',
        specificNeed: 'Dislexia y Disortografía (Dificultad Específica en Lectoescritura)',
        curricularAdaptation: 'No Significativa (ACNS)',
        generalGoal: 'Garantizar el acceso al aprendizaje y la evaluación justa eliminando la barrera mecánica de la decodificación lectora y la ortografía arbitraria.',
        methodological: [
          'Eximir de la copia innecesaria de enunciados largos del libro o de la pizarra: permitir contestar directamente indicando el número de ejercicio o entregar material impreso.',
          'Tipografía accesible en fichas y apuntes: fuente sin serifa (Arial, Verdana, OpenDyslexic o Comic Sans), tamaño mínimo 12–14 pt, interlineado 1.5 y texto alineado a la izquierda (no justificado).',
          'No obligarle a leer en voz alta en público de forma imprevista; si va a leer en clase, entregarle el fragmento el día anterior para que pueda prepararlo con seguridad.',
          'Apoyar las reglas ortográficas mediante memoria visual (tarjetas ideovisuales con dibujos integrados en las letras dudosas b/v, g/j, h) en lugar de la simple repetición de normas.',
          'Facilitar esquemas previos, mapas mentales y audiolibros o lectura compartida para los libros de lectura obligatoria.'
        ],
        environmental: [
          'Ubicación cercana a la pizarra y al profesor para minimizar errores de copia a distancia y facilitar el apoyo discreto en la lectura.',
          'Permitir el uso de regla de lectura o guía con ventana coloreada para evitar saltos de línea y fatiga visual.'
        ],
        evaluation: [
          'Lectura oral en voz alta de todos los enunciados del examen por parte del profesor al inicio de la prueba (y a demanda durante la misma).',
          'NO penalizar las faltas de ortografía natural o arbitraria (omisiones, inversiones, rotaciones b/d, p/q, sustituciones, uniones/fragmentaciones de palabras) en la calificación de ninguna asignatura.',
          'Ampliación del tiempo de examen (+25% a +35%) y posibilidad de complementar o sustituir preguntas de desarrollo largo por comprobación oral o esquemas.',
          'En exámenes de Lengua y Literatura, evaluar el bloque de ortografía mediante actividades de reconocimiento visual o aplicación guiada, no por dictado puro penalizador.'
        ],
        emotional: [
          'No mandar repetir 10 o 20 veces cada palabra mal escrita como castigo mecánico (es pedagógicamente ineficaz en la dislexia y genera rechazo hacia la escritura).',
          'Corregir los textos usando bolígrafo verde o destacando los aciertos y el contenido creativo, señalando solo las 3–4 palabras de mayor frecuencia para trabajar en su diccionario personal.',
          'Destacar públicamente sus fortalezas en razonamiento oral, creatividad, resolución práctica o expresión artística.'
        ],
        subjectSpecificGuidelines: {
          'Lengua y Literatura': [
            'Evaluar la expresión escrita por la riqueza de ideas y coherencia del texto, separándola de la exactitud ortográfica.',
            'Ofrecer audiolibros o lectura bimodal (escuchar mientras sigue el texto) para las lecturas trimestrales.'
          ],
          'Matemáticas': [
            'Permitir tabla pitagórica de apoyo o calculadora básica cuando el objetivo sea la resolución de problemas (la dislexia afecta a la automatización verbal de las tablas de multiplicar).',
            'Leerle los enunciados de los problemas para asegurar que comprende el planteamiento.'
          ],
          'Ciencias / STEM': [
            'No descontar puntos por escribir con errores fonológicos los nombres científicos complejos si se identifica claramente el concepto.'
          ],
          'Idiomas / Inglés': [
            'Priorizar el peso de las destrezas orales (Speaking y Listening) frente al Spelling escrito literal; evaluar vocabulario reconociendo la palabra o uniéndola con su significado/imagen.'
          ]
        }
      },
      DISCALCULIA: {
        category: 'ACNEAE - Dificultades Específicas de Aprendizaje',
        specificNeed: 'Discalculia (Dificultad Específica en el Procesamiento Numérico y Cálculo)',
        curricularAdaptation: 'No Significativa (ACNS)',
        generalGoal: 'Desarrollar el sentido numérico y el razonamiento lógico-matemático mediante la metodología manipulativa-gráfica-simbólica (CPA).',
        methodological: [
          'Aplicar la secuencia CPA (Concreto -> Pictórico -> Abstracto): permitir el uso de material manipulativo (regletas Cuisenaire, bloques multibase, recta numérica, ábaco) antes de exigir el algoritmo abstracto.',
          'Proporcionar hojas pautadas con cuadrícula amplia o plantillas verticales con columnas diferenciadas por color (Centenas - Decenas - Unidades) para evitar errores de encolumnado.',
          'Desglosar la resolución de problemas matemáticos en 4 pasos visuales fijos: 1) Subrayar datos (azul) y pregunta (rojo), 2) Dibujar/representar la situación, 3) Elegir y realizar la operación, 4) Escribir la frase de solución.',
          'Permitir tener en la mesa apoyo visual de la recta numérica, tabla pitagórica de multiplicar y esquema de equivalencias de unidades.'
        ],
        environmental: [
          'Ubicación cercana al docente durante las sesiones de Matemáticas y Ciencias para supervisar el proceso de planteamiento antes de que mecanice un error.',
          'Disponer de banco de recursos manipulativos accesible en el aula sin estigmatización.'
        ],
        evaluation: [
          'Calificar los problemas matemáticos por el proceso y el razonamiento lógico planteado (hasta el 70% del valor del ítem), sin anular el ejercicio completo por un fallo en el cálculo mecánico.',
          'Permitir el uso de las tablas de multiplicar impresas o calculadora básica en cursos superiores cuando se evalúe resolución de problemas o geometría.',
          'Ampliar el tiempo (+25%) y reducir la cantidad de cuentas mecánicas extensas en el examen.'
        ],
        emotional: [
          'Reducir la "ansiedad matemática": evitar pruebas cronometradas de cálculo mental rápido en público que le generen bloqueo emocional.',
          'Reforzar cada avance en la comprensión lógica del problema por encima de la rapidez de cálculo.'
        ],
        subjectSpecificGuidelines: {
          'Lengua y Literatura': [
            'Apoyar la comprensión de secuencias temporales e históricas (fechas, siglos, orden cronológico) mediante líneas del tiempo visuales.'
          ],
          'Matemáticas': [
            'Uso de plantilla de resolución de problemas paso a paso, cuadrícula adaptada con código de color posicional y apoyo de tabla pitagórica.'
          ],
          'Ciencias / STEM': [
            'Facilitar formularios de apoyo y tablas de conversión visual para cambios de unidades (longitud, masa, capacidad, tiempo).'
          ],
          'Idiomas / Inglés': [
            'Apoyar visualmente el aprendizaje de las horas (telling the time) y los números en lengua extranjera.'
          ]
        }
      },
      AACC: {
        category: 'ACNEAE - Altas Capacidades Intelectuales (AACC)',
        specificNeed: 'Altas Capacidades Intelectuales (Enriquecimiento Curricular y Reto Cognitivo)',
        curricularAdaptation: 'Enriquecimiento',
        generalGoal: 'Estimular el potencial cognitivo y creativo mediante enriquecimiento curricular horizontal, retos de pensamiento crítico y proyectos de investigación autónoma, previniendo el aburrimiento escolar.',
        methodological: [
          'Compactación curricular ("Curriculum Compacting"): cuando demuestre dominio previo de un contenido, reducir los ejercicios mecánicos o repetitivos y sustituirlos por retos de profundización.',
          'Aplicar enriquecimiento horizontal e interdisciplinar (Taxonomía de Bloom: analizar, evaluar, crear) mediante retos de lógica, escritura creativa, programación o investigación científica.',
          'Diseñar una "Carpeta de Enriquecimiento / Proyecto Personal de Investigación" sobre un tema de su elección al que pueda acudir de forma autónoma al terminar las tareas ordinarias.',
          'Formularle preguntas abiertas de alto nivel cognitivo ("¿Qué pasaría si...?", "¿Cómo demostrarías...?") que estimulen el pensamiento divergente.',
          'Asignarle roles de coordinación creativa o mentoría cooperativa puntual, cuidando que no se convierta siempre en el "profesor ayudante" para no sobrecargarle socialmente.'
        ],
        environmental: [
          'Acceso flexible a biblioteca de aula, rincón de retos lógicos/STEM o recursos de investigación cuando finalice con éxito la tarea común.',
          'Agrupamientos flexibles: combinar momentos de trabajo con iguales de ritmo rápido en retos específicos y trabajo cooperativo inclusivo con el resto de la clase.'
        ],
        evaluation: [
          'Evaluar los proyectos de ampliación e investigación mediante rúbricas de pensamiento crítico, creatividad y rigor documental, reconociendo positivamente su esfuerzo extra.',
          'Permitir formatos alternativos y avanzados de demostración de aprendizaje (exposiciones multimedia, maquetas funcionales, ensayos de investigación, debates).',
          'Cuidar el perfeccionismo disfuncional en los exámenes: valorar el riesgo intelectual y la originalidad en la resolución de problemas.'
        ],
        emotional: [
          'Atender a la "disincronía evolutiva" (desfase entre su alta madurez intelectual y su desarrollo emocional o motriz propio de su edad cronológica).',
          'Trabajar la tolerancia al error y a la frustración ante retos verdaderamente difíciles (muchas veces no están acostumbrados a esforzarse porque todo les sale a la primera).',
          'Evitar exigirle que sea "perfecto en todo" o recriminarle en público ("con lo listo que eres, cómo fallas en esto").'
        ],
        subjectSpecificGuidelines: {
          'Lengua y Literatura': [
            'Proponer retos de creación literaria avanzada (cambios de narrador, finales alternativos, textos argumentativos, prensa escolar) y lecturas de mayor complejidad.'
          ],
          'Matemáticas': [
            'Sustituir tandas de cuentas mecánicas por problemas de Olimpiada Matemática, enigmas lógicos, criptogramas numéricos y problemas de varias soluciones.'
          ],
          'Ciencias / STEM': [
            'Fomentar la indagación mediante el método científico: formulación de hipótesis propias, diseño de experimentos y proyectos de investigación.'
          ],
          'Idiomas / Inglés': [
            'Facilitar lecturas graduadas de nivel superior, vídeos auténticos y retos comunicativos de mayor riqueza léxica.'
          ]
        }
      }
    };

    const tpl = templates[templateKey];
    if (!tpl) return;
    setFormData(prev => ({
      ...prev,
      category: tpl.category,
      specificNeed: tpl.specificNeed,
      curricularAdaptation: tpl.curricularAdaptation,
      generalGoal: tpl.generalGoal,
      methodological: tpl.methodological.join('\n'),
      environmental: tpl.environmental.join('\n'),
      evaluation: tpl.evaluation.join('\n'),
      emotional: tpl.emotional.join('\n'),
      subjectSpecificGuidelines: tpl.subjectSpecificGuidelines
    }));
  };

  const filteredStudents = (students || []).filter(s => {
    if (!s) return false;
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      const matchName = s.name.toLowerCase().includes(term);
      const matchNeed = (s.specificNeed || '').toLowerCase().includes(term);
      const matchCat = (s.category || '').toLowerCase().includes(term);
      if (!matchName && !matchNeed && !matchCat) return false;
    }
    if (filterGrade !== 'ALL') {
      if (filterGrade === '1º') {
        if (!s.grade.toLowerCase().includes('1º') || s.grade.toLowerCase().includes('eso')) return false;
      } else if (filterGrade === 'Infantil') {
        if (!s.grade.toLowerCase().includes('infantil') && !s.grade.toLowerCase().includes('años')) return false;
      } else if (!s.grade.toLowerCase().includes(filterGrade.toLowerCase())) {
        return false;
      }
    }
    if (filterNeed !== 'ALL') {
      const fullTxt = `${s.specificNeed || ''} ${s.category || ''}`.toLowerCase();
      if (filterNeed === 'TDAH' && !fullTxt.includes('tda') && !fullTxt.includes('atenc')) return false;
      if (filterNeed === 'DISLEXIA' && !fullTxt.includes('dislex') && !fullTxt.includes('lecto') && !fullTxt.includes('dea')) return false;
      if (filterNeed === 'AACC' && !fullTxt.includes('altas capacidades') && !fullTxt.includes('aacc')) return false;
      if (filterNeed === 'TEA' && !fullTxt.includes('tea') && !fullTxt.includes('autis')) return false;
      if (filterNeed === 'LENGUAJE' && !fullTxt.includes('lenguaje') && !fullTxt.includes('tel') && !fullTxt.includes('tdl') && !fullTxt.includes('dislalia')) return false;
      if (filterNeed === 'AUDITIVA' && !fullTxt.includes('auditiva') && !fullTxt.includes('hipoacusia')) return false;
      if (filterNeed === 'RETRASO' && !fullTxt.includes('retraso') && !fullTxt.includes('madurativo') && !fullTxt.includes('desarrollo')) return false;
      if (filterNeed === 'ESPECIFICO' && !fullTxt.includes('específico') && !fullTxt.includes('pt') && !s.ptTeacher) return false;
      if (filterNeed === 'ORDINARIO' && !fullTxt.includes('ordinario') && !fullTxt.includes('refuerzo')) return false;
    }
    return true;
  });

  const selectedStudent = (students || []).find(s => s?.id === (selectedStudentId || filteredStudents[0]?.id)) || filteredStudents[0];

  const handlePrint = () => {
    window.print();
  };

  // Open modal for creating a new student
  const handleOpenAddModal = () => {
    const nextNumber = students.length + 1;
    const newId = `NEAE-${nextNumber < 10 ? '0' + nextNumber : nextNumber}`;
    setFormData({
      id: newId,
      name: '',
      stage: 'PRIMARIA',
      grade: '1º Educación Primaria A',
      tutor: 'Tutor/a de 1ºA',
      category: 'ACNEAE - Dificultades Específicas de Aprendizaje',
      specificNeed: 'TDAH (Déficit de Atención con Hiperactividad)',
      curricularAdaptation: 'No Significativa (ACNS)',
      status: 'Activo',
      ptTeacher: 'Daniel Asenjo (PT)',
      ptHours: 3,
      generalGoal: 'Intervención y seguimiento pedagógico adaptado en el aula ordinaria.',
      methodological: 'Fraccionamiento de tareas en pasos breves.\nInstrucciones directas y apoyo visual.\nSupervisión periódica.',
      environmental: 'Ubicación en primera fila cerca del profesor y lejos de distracciones.',
      evaluation: 'Tiempo adicional (+25%) en exámenes y controles.\nLectura oral previa de enunciados.',
      emotional: 'Reforzamiento positivo constante ante el esfuerzo y perseverancia.',
      subjectSpecificGuidelines: undefined
    });
    setStudentToEdit(null);
    setIsEditModalOpen(true);
  };

  // Open modal for editing an existing student
  const handleOpenEditModal = (student: StudentNEAE) => {
    setStudentToEdit(student);
    setFormData({
      id: student.id,
      name: student.name,
      stage: student.stage || 'PRIMARIA',
      grade: student.grade,
      tutor: student.tutor || 'Tutor de Aula',
      category: student.category || 'ACNEAE',
      specificNeed: student.specificNeed || student.category || 'Refuerzo Pedagógico en Competencias Básicas',
      curricularAdaptation: student.curricularAdaptation || 'Pautas Ordinarias',
      status: student.status || 'Activo',
      ptTeacher: student.ptTeacher || '',
      ptHours: student.guidelines?.ptHoursPerWeek || 0,
      generalGoal: student.guidelines?.generalGoal || '',
      methodological: (student.guidelines?.methodologicalAdaptations || []).join('\n'),
      environmental: (student.guidelines?.environmentalAdaptations || []).join('\n'),
      evaluation: (student.guidelines?.evaluationAdaptations || []).join('\n'),
      emotional: (student.guidelines?.emotionalTips || []).join('\n'),
      subjectSpecificGuidelines: student.guidelines?.subjectSpecificGuidelines
    });
    setIsEditModalOpen(true);
  };

  // Save student (add or edit)
  const handleSaveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('El nombre del alumno/a es obligatorio.');
      return;
    }

    const splitLines = (text: string) => text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    const updatedStudent: StudentNEAE = {
      id: formData.id || `NEAE-${Date.now()}`,
      stage: formData.stage,
      name: formData.name.trim(),
      grade: formData.grade,
      tutor: formData.tutor.trim() || 'Tutor de Aula',
      category: formData.category.trim(),
      specificNeed: formData.specificNeed.trim() || 'Refuerzo Educativo',
      curricularAdaptation: formData.curricularAdaptation,
      status: formData.status,
      lastReviewDate: new Date().toISOString().split('T')[0],
      ptTeacher: formData.ptTeacher.trim() || undefined,
      guidelines: {
        generalGoal: formData.generalGoal.trim() || 'Intervención educativa adaptada en aula.',
        methodologicalAdaptations: splitLines(formData.methodological),
        environmentalAdaptations: splitLines(formData.environmental),
        evaluationAdaptations: splitLines(formData.evaluation),
        emotionalTips: splitLines(formData.emotional),
        ptHoursPerWeek: Number(formData.ptHours) || 0,
        subjectSpecificGuidelines: formData.subjectSpecificGuidelines
      }
    };

    if (onSaveStudent) {
      onSaveStudent(updatedStudent);
    }

    setSelectedStudentId(updatedStudent.id);
    setIsEditModalOpen(false);
  };

  // Delete student confirmation
  const handleConfirmDelete = () => {
    if (studentToDelete && onDeleteStudent) {
      onDeleteStudent(studentToDelete.id);
      if (selectedStudentId === studentToDelete.id) {
        setSelectedStudentId(null);
      }
    }
    setIsDeleting(false);
    setStudentToDelete(null);
  };

  const guidelines = selectedStudent?.guidelines || {
    generalGoal: 'Intervención educativa y metodológica adaptada en aula.',
    methodologicalAdaptations: ['Instrucciones paso a paso.', 'Apoyo visual y anticipación.'],
    environmentalAdaptations: ['Ubicación en primera fila cerca del profesor.'],
    evaluationAdaptations: ['Dar 25% más de tiempo en controles y exámenes.'],
    emotionalTips: ['Reforzamiento positivo constante ante el esfuerzo.'],
    ptHoursPerWeek: 0,
    alHoursPerWeek: 0
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Banner Superior */}
      <div style={{
        background: 'linear-gradient(135deg, #0d9488 0%, #047857 100%)',
        color: 'white',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <span style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>
            Censo Oficial de Diagnósticos y Necesidades • Colegio San Buenaventura
          </span>
          <h2 style={{ fontSize: '1.6rem', color: 'white', marginTop: '0.3rem' }}>
            Portal de Pautas y Necesidades Educativas del Alumnado
          </h2>
          <p style={{ opacity: 0.9, fontSize: '0.88rem' }}>
            {isCounselor 
              ? 'Panel de Orientación con capacidad plena de gestión: puedes añadir, editar o dar de baja alumnos, sus necesidades/diagnósticos (TDAH, Dislexia, AACC, etc.) y las pautas en el censo oficial.'
              : `Consulta oficial para el claustro de profesores: ${students.length} alumnos censados con necesidades específicas identificadas (TDAH, Dislexia, AACC, apoyos de especialistas PT) y pautas de aula.`
            }
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          {isCounselor && (
            <>
              <button 
                className="btn btn-primary no-print" 
                onClick={handleOpenAddModal}
                style={{ background: 'white', color: '#047857', border: 'none', fontWeight: 700 }}
              >
                <Plus size={16} /> Añadir Alumno NEAE
              </button>

              {onBulkSaveStudents && (
                <button
                  type="button"
                  className="btn btn-secondary no-print"
                  onClick={() => {
                    setRepeatingStudentIds([]);
                    setIsPromotionModalOpen(true);
                  }}
                  style={{ background: '#fef3c7', color: '#92400e', border: '1px solid #f59e0b', fontWeight: 700 }}
                >
                  <GraduationCap size={16} /> Promoción de Curso
                </button>
              )}
            </>
          )}

          <button className="btn btn-secondary no-print" onClick={handlePrint} style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
            <Printer size={16} /> Imprimir Ficha
          </button>
        </div>
      </div>

      {/* Grid Principal: Lista Izquierda + Ficha Derecha */}
      <div className="grid-2" style={{ gridTemplateColumns: '1fr 2fr', alignItems: 'start' }}>
        {/* Columna Izquierda: Buscador, Filtros y Lista */}
        <div className="card no-print">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <h3 style={{ fontSize: '1.05rem' }}>Alumnos Censados ({filteredStudents.length} / {students.length})</h3>
            {isCounselor && (
              <span style={{ fontSize: '0.72rem', background: '#dcfce7', color: '#166534', padding: '0.2rem 0.5rem', borderRadius: '12px', fontWeight: 700 }}>
                Modo Orientación
              </span>
            )}
          </div>

          {/* Buscador de Alumno o Diagnóstico */}
          <div style={{ position: 'relative', marginBottom: '0.75rem' }}>
            <input
              type="text"
              className="input-text"
              placeholder="Buscar por nombre o diagnóstico (ej: TDAH, Dislexia)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ fontSize: '0.82rem', paddingLeft: '2.1rem', minHeight: '38px' }}
            />
            <Search size={15} color="#94a3b8" style={{ position: 'absolute', left: '0.65rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>

          {/* Filtros por Curso y Necesidad / Diagnóstico */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <div>
              <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Curso:</label>
              <select
                className="select-input"
                style={{ fontSize: '0.78rem', padding: '0.3rem 0.5rem', minHeight: '36px' }}
                value={filterGrade}
                onChange={(e) => setFilterGrade(e.target.value)}
              >
                <option value="ALL">Todos los cursos</option>
                <option value="Infantil">Infantil (3-5 años)</option>
                <option value="1º">1º Primaria</option>
                <option value="2º">2º Primaria</option>
                <option value="3º">3º Primaria</option>
                <option value="4º">4º Primaria</option>
                <option value="5º">5º Primaria</option>
                <option value="6º">6º Primaria</option>
                <option value="1º ESO">1º ESO (Secundaria)</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Diagnóstico / Necesidad:</label>
              <select
                className="select-input"
                style={{ fontSize: '0.78rem', padding: '0.3rem 0.5rem', minHeight: '36px' }}
                value={filterNeed}
                onChange={(e) => setFilterNeed(e.target.value)}
              >
                <option value="ALL">Todas las necesidades</option>
                <option value="TEA">TEA (Autismo)</option>
                <option value="LENGUAJE">Lenguaje / TEL-TDL</option>
                <option value="AUDITIVA">Discapacidad Auditiva</option>
                <option value="RETRASO">Retraso General / Madurativo</option>
                <option value="TDAH">TDAH / Atención</option>
                <option value="DISLEXIA">Dislexia / Lectoescritura</option>
                <option value="AACC">Altas Capacidades (AACC)</option>
                <option value="ESPECIFICO">Apoyo Específico de PT</option>
                <option value="ORDINARIO">Apoyo Ordinario</option>
              </select>
            </div>
          </div>

          {/* Lista Scrollable */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '620px', overflowY: 'auto', paddingRight: '0.2rem' }}>
            {filteredStudents.length === 0 ? (
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textAlign: 'center', padding: '1.5rem 0' }}>
                No se han encontrado alumnos con los filtros seleccionados.
              </p>
            ) : (
              filteredStudents.map(s => {
                const isSelected = s.id === selectedStudent?.id;
                const needText = s.specificNeed || s.category;
                const lowNeed = needText.toLowerCase();
                const isAACC = lowNeed.includes('altas capacidades') || lowNeed.includes('aacc');
                const isTEA = lowNeed.includes('tea') || lowNeed.includes('autis');
                const isAuditiva = lowNeed.includes('auditiva') || lowNeed.includes('hipoacusia');
                const isRetraso = lowNeed.includes('retraso') || lowNeed.includes('madurativo') || lowNeed.includes('desarrollo');
                const isLenguaje = lowNeed.includes('lenguaje') || lowNeed.includes('tel') || lowNeed.includes('tdl') || lowNeed.includes('dislalia');
                const isTDAH = lowNeed.includes('tda') || lowNeed.includes('atenc');
                const isDislexia = lowNeed.includes('dislex') || lowNeed.includes('lecto') || lowNeed.includes('dea') || lowNeed.includes('aprendizaje');
                const isEsp = lowNeed.includes('específico') || !!s.ptTeacher;

                let badgeBg = '#f1f5f9';
                let badgeColor = '#475569';
                let badgeIcon = '📘';

                if (isAACC) {
                  badgeBg = '#fef3c7';
                  badgeColor = '#92400e';
                  badgeIcon = '⭐';
                } else if (isTEA) {
                  badgeBg = '#ede9fe';
                  badgeColor = '#5b21b6';
                  badgeIcon = '🧩';
                } else if (isAuditiva) {
                  badgeBg = '#ecfeff';
                  badgeColor = '#155e75';
                  badgeIcon = '🦻';
                } else if (isRetraso) {
                  badgeBg = '#f0fdf4';
                  badgeColor = '#166534';
                  badgeIcon = '🌱';
                } else if (isLenguaje) {
                  badgeBg = '#eef2ff';
                  badgeColor = '#3730a3';
                  badgeIcon = '🗣️';
                } else if (isTDAH) {
                  badgeBg = '#fee2e2';
                  badgeColor = '#991b1b';
                  badgeIcon = '⚡';
                } else if (isDislexia) {
                  badgeBg = '#fdf4ff';
                  badgeColor = '#86198f';
                  badgeIcon = '📖';
                } else if (isEsp) {
                  badgeBg = '#e0f2fe';
                  badgeColor = '#0369a1';
                  badgeIcon = '🎯';
                }

                return (
                  <div
                    key={s.id}
                    onClick={() => setSelectedStudentId(s.id)}
                    style={{
                      padding: '0.75rem 0.9rem',
                      borderRadius: 'var(--radius-md)',
                      border: `1px solid ${isSelected ? 'var(--primary-600)' : 'var(--border-light)'}`,
                      background: isSelected ? 'var(--primary-50)' : 'var(--bg-card)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 700 }}>{s.name}</h4>
                      <span style={{ fontSize: '0.7rem', background: '#e2e8f0', color: '#334155', padding: '0.1rem 0.45rem', borderRadius: '10px', fontWeight: 600 }}>
                        {s.grade.replace('Educación Primaria ', 'EP ')}
                      </span>
                    </div>

                    {/* Necesidad Específica destacada en la tarjeta */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.35rem' }}>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '6px',
                        background: badgeBg,
                        color: badgeColor,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        maxWidth: '85%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }} title={needText}>
                        <span>{badgeIcon}</span> {needText}
                      </span>

                      {isCounselor && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenEditModal(s);
                          }}
                          title="Editar alumno y diagnóstico"
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--primary-700)',
                            cursor: 'pointer',
                            padding: '0.15rem'
                          }}
                        >
                          <Pencil size={13} />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Columna Derecha: Ficha Detallada */}
        {selectedStudent ? (
          <div className="card" id="printable-neae-card" style={{ padding: '1.75rem' }}>
            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-900)' }}>
                    {selectedStudent.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.1rem' }}>
                    {selectedStudent.grade} • {selectedStudent.tutor}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                    <span className="badge" style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', fontSize: '0.78rem' }}>
                      Adaptación: {selectedStudent.curricularAdaptation}
                    </span>
                    <span style={{ fontSize: '0.72rem', background: '#f1f5f9', color: '#475569', padding: '0.15rem 0.45rem', borderRadius: '6px', fontWeight: 600 }}>
                      {selectedStudent.status}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Actualizado: {selectedStudent.lastReviewDate}
                  </div>

                  <div className="no-print" style={{ display: 'flex', gap: '0.4rem', marginTop: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {onOpenQuarterlyReview && (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => onOpenQuarterlyReview(selectedStudent)}
                        style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem', background: '#f0fdf4', color: '#166534', borderColor: '#86efac', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                      >
                        <ClipboardCheck size={13} /> Valorar Eficacia Trimestral
                      </button>
                    )}

                    {isCounselor && (
                      <>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => handleOpenEditModal(selectedStudent)}
                          style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                        >
                          <Pencil size={13} /> Editar Alumno
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => {
                            setStudentToDelete(selectedStudent);
                            setIsDeleting(true);
                          }}
                          style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem', color: '#b91c1c', borderColor: '#fca5a5', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                        >
                          <Trash2 size={13} /> Dar de Baja
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* BLOQUE DESTACADO: NECESIDAD ESPECÍFICA / DIAGNÓSTICO */}
              <div style={{ 
                background: 'linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 100%)', 
                border: '1.5px solid #99f6e4', 
                padding: '0.9rem 1.15rem', 
                borderRadius: '12px', 
                marginTop: '1.1rem',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    background: '#0d9488', 
                    color: 'white', 
                    width: '38px', 
                    height: '38px', 
                    borderRadius: '10px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Stethoscope size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                      Necesidad Específica / Diagnóstico del Alumno
                    </span>
                    <h4 style={{ fontSize: '1.2rem', color: '#0f172a', margin: '0.1rem 0', fontWeight: 800 }}>
                      {selectedStudent.specificNeed || selectedStudent.category}
                    </h4>
                    <span style={{ fontSize: '0.75rem', color: '#475569' }}>
                      Categoría administrativa: {selectedStudent.category}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontSize: '0.75rem', background: 'white', color: '#0d9488', padding: '0.25rem 0.65rem', borderRadius: '20px', fontWeight: 700, border: '1px solid #99f6e4' }}>
                    Dictamen de Gabinete
                  </span>
                </div>
              </div>

              {/* Especialista PT Asignado */}
              {selectedStudent.ptTeacher && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.85rem', background: '#e0e7ff', color: '#3730a3', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', border: '1px solid #c7d2fe' }}>
                  <div><strong>Maestro Especialista PT:</strong> {selectedStudent.ptTeacher} ({guidelines.ptHoursPerWeek || 0} h/semana de atención directa)</div>
                </div>
              )}
            </div>

            {/* Objetivo General */}
            <div style={{ marginBottom: '1.5rem', background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-600)' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--primary-800)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                Objetivo General de Intervención Educativa
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
                {guidelines.generalGoal}
              </p>
            </div>

            {/* 4 Dimensiones de Pautas */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {/* Metodológicas */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '1.1rem', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.92rem', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <Sparkles size={16} /> Pautas Metodológicas de Aula
                </h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--text-main)' }}>
                  {guidelines.methodologicalAdaptations.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>

              {/* Ubicación y Entorno */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '1.1rem', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.92rem', color: '#0369a1', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <BookOpen size={16} /> Ubicación y Entorno de Aula
                </h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--text-main)' }}>
                  {guidelines.environmentalAdaptations.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>

              {/* Adaptaciones de Evaluación */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '1.1rem', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.92rem', color: '#15803d', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <ShieldCheck size={16} /> Adaptaciones en Exámenes y Controles
                </h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--text-main)' }}>
                  {guidelines.evaluationAdaptations.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>

              {/* Apoyo Emocional */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '1.1rem', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.92rem', color: '#92400e', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <UserCheck size={16} /> Intervención Socioemocional, Conductual y Motivacional
                </h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--text-main)' }}>
                  {guidelines.emotionalTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PAUTAS ESPECÍFICAS POR ÁREAS CURRICULARES (LENGUA, MATES, CIENCIAS, INGLÉS) */}
            {guidelines.subjectSpecificGuidelines && guidelines.subjectSpecificGuidelines.length > 0 && (
              <div style={{ marginTop: '1.25rem', background: 'linear-gradient(135deg, #f8fafc 0%, #f0fdfa 100%)', border: '1px solid #99f6e4', borderRadius: 'var(--radius-md)', padding: '1.15rem 1.25rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: '#0f766e', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <BookOpen size={17} /> Pautas Didácticas Específicas por Asignatura (Adaptación de Aula)
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.85rem' }}>
                  {guidelines.subjectSpecificGuidelines.map((sg, idx) => (
                    <div key={idx} style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '0.85rem 1rem' }}>
                      <strong style={{ fontSize: '0.84rem', color: 'var(--primary-800)', display: 'block', marginBottom: '0.45rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.25rem' }}>
                        {sg.subject === 'Lengua y Literatura' ? '📘 ' : sg.subject === 'Matemáticas' ? '🔢 ' : sg.subject === 'Ciencias / STEM' ? '🔬 ' : sg.subject === 'Áreas de Infantil' ? '🎨 ' : '🌍 '}
                        {sg.subject}
                      </strong>
                      <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.79rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', color: '#334155', lineHeight: '1.45' }}>
                        {sg.tips.map((t, tidx) => (
                          <li key={tidx}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Historial de Revisiones Trimestrales si existen */}
            {selectedStudent.quarterlyReviews && selectedStudent.quarterlyReviews.length > 0 && (
              <div style={{ marginTop: '1.25rem', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 'var(--radius-md)', padding: '1rem 1.15rem' }}>
                <h4 style={{ fontSize: '0.92rem', color: 'var(--primary-800)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ClipboardCheck size={16} /> Historial Longitudinal de Revisiones Trimestrales ({selectedStudent.quarterlyReviews.length})
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedStudent.quarterlyReviews.map(rev => (
                    <div key={rev.id} style={{ background: '#ffffff', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '0.8rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                        <strong>{rev.quarter} ({rev.date}) — Docente: {rev.teacherName}</strong>
                        <span style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '0.1rem 0.5rem',
                          borderRadius: '10px',
                          background: rev.effectivenessRating === 'ALTA' ? '#dcfce7' : rev.effectivenessRating === 'MEDIA' ? '#fef3c7' : '#fee2e2',
                          color: rev.effectivenessRating === 'ALTA' ? '#166534' : rev.effectivenessRating === 'MEDIA' ? '#92400e' : '#991b1b'
                        }}>
                          Eficacia: {rev.effectivenessRating.replace(/_/g, ' ')}
                        </span>
                      </div>
                      <p style={{ margin: 0, color: '#334155' }}>{rev.classroomProgressNotes}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="card" style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            Selecciona un alumno/a de la lista para consultar o editar sus necesidades y pautas pedagógicas.
          </div>
        )}
      </div>

      {/* MODAL DE EDICIÓN / ALTA DE ALUMNO NEAE (EXCLUSIVO ORIENTADOR) */}
      {isEditModalOpen && (
        <div className="modal-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content" style={{ maxWidth: '850px', maxHeight: '90vh', overflowY: 'auto', padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-900)' }}>
                  {studentToEdit ? `✏️ Editar Alumno: ${studentToEdit.name}` : '➕ Alta de Nuevo Alumno en Censo NEAE'}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Gestión exclusiva de Orientación Psicopedagógica. Puedes especificar la necesidad/diagnóstico concreto (TDAH, Dislexia, AACC, etc.) y las pautas para los profesores.
                </p>
              </div>
              <button 
                type="button" 
                onClick={() => setIsEditModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveSubmit}>
              {/* Sección 1: Datos Básicos y Necesidad/Diagnóstico */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-800)', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.3rem', marginBottom: '0.75rem' }}>
                  1. Datos del Alumno y Necesidad Específica (Diagnóstico)
                </h4>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      className="input-text"
                      placeholder="Ej: Daniel Sánchez Rubio"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Etapa Educativa *</label>
                    <select
                      className="select-input"
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value as EducationalStage })}
                    >
                      <option value="PRIMARIA">Educación Primaria</option>
                      <option value="INFANTIL">Educación Infantil (2º Ciclo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Curso y Grupo *</label>
                    <select
                      className="select-input"
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    >
                      {formData.stage === 'INFANTIL' ? (
                        <>
                          <option value="1º Educación Infantil (3 años) A">1º Infantil (3 años) A</option>
                          <option value="1º Educación Infantil (3 años) B">1º Infantil (3 años) B</option>
                          <option value="1º Educación Infantil (3 años) C">1º Infantil (3 años) C</option>
                          <option value="2º Educación Infantil (4 años) A">2º Infantil (4 años) A</option>
                          <option value="2º Educación Infantil (4 años) B">2º Infantil (4 años) B</option>
                          <option value="2º Educación Infantil (4 años) C">2º Infantil (4 años) C</option>
                          <option value="3º Educación Infantil (5 años) A">3º Infantil (5 años) A</option>
                          <option value="3º Educación Infantil (5 años) B">3º Infantil (5 años) B</option>
                          <option value="3º Educación Infantil (5 años) C">3º Infantil (5 años) C</option>
                        </>
                      ) : (
                        <>
                          <option value="1º Educación Primaria A">1º Primaria A</option>
                          <option value="1º Educación Primaria B">1º Primaria B</option>
                          <option value="1º Educación Primaria C">1º Primaria C</option>
                          <option value="2º Educación Primaria A">2º Primaria A</option>
                          <option value="2º Educación Primaria B">2º Primaria B</option>
                          <option value="2º Educación Primaria C">2º Primaria C</option>
                          <option value="3º Educación Primaria A">3º Primaria A</option>
                          <option value="3º Educación Primaria B">3º Primaria B</option>
                          <option value="3º Educación Primaria C">3º Primaria C</option>
                          <option value="4º Educación Primaria A">4º Primaria A</option>
                          <option value="4º Educación Primaria B">4º Primaria B</option>
                          <option value="4º Educación Primaria C">4º Primaria C</option>
                          <option value="5º Educación Primaria A">5º Primaria A</option>
                          <option value="5º Educación Primaria B">5º Primaria B</option>
                          <option value="5º Educación Primaria C">5º Primaria C</option>
                          <option value="6º Educación Primaria A">6º Primaria A</option>
                          <option value="6º Educación Primaria B">6º Primaria B</option>
                          <option value="6º Educación Primaria C">6º Primaria C</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Tutor/a de Aula</label>
                    <input
                      type="text"
                      className="input-text"
                      placeholder="Ej: Tutor/a de 1ºA"
                      value={formData.tutor}
                      onChange={(e) => setFormData({ ...formData, tutor: e.target.value })}
                    />
                  </div>
                </div>

                {/* CAMPO CLAVE: NECESIDAD ESPECÍFICA / DIAGNÓSTICO */}
                <div style={{ marginTop: '0.85rem', background: '#f0fdfa', padding: '0.85rem', borderRadius: '8px', border: '1px solid #99f6e4' }}>
                  <label className="form-label" style={{ fontSize: '0.82rem', color: '#0f766e', fontWeight: 800 }}>
                    🩺 Necesidad Específica / Diagnóstico del Alumno (Visible para el Claustro) *
                  </label>
                  
                  {/* Botones de sugerencias rápidas */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.5rem' }}>
                    {[
                      'TDAH (Déficit de Atención con Hiperactividad)',
                      'TDA (Déficit de Atención Inatento)',
                      'Dislexia / DEA (Lectoescritura)',
                      'Discalculia (Dificultades Matemáticas)',
                      'Trastorno del Desarrollo del Lenguaje (TEL/TDL)',
                      'Altas Capacidades Intelectuales (AACC)',
                      'Trastorno del Espectro Autista (TEA)',
                      'Retraso Madurativo',
                      'Apoyo Específico Instrumental (PT)',
                      'Refuerzo Pedagógico Ordinario'
                    ].map(sug => (
                      <button
                        key={sug}
                        type="button"
                        onClick={() => setFormData({ ...formData, specificNeed: sug })}
                        style={{
                          fontSize: '0.7rem',
                          background: formData.specificNeed === sug ? '#0d9488' : 'white',
                          color: formData.specificNeed === sug ? 'white' : '#0f766e',
                          border: '1px solid #99f6e4',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '12px',
                          cursor: 'pointer'
                        }}
                      >
                        + {sug.split('(')[0].trim()}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    required
                    className="input-text"
                    placeholder="Ej: TDAH, Dislexia, Altas Capacidades, Discalculia, TEL..."
                    value={formData.specificNeed}
                    onChange={(e) => setFormData({ ...formData, specificNeed: e.target.value })}
                    style={{ fontWeight: 600, color: '#0f172a' }}
                  />
                  <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block', marginTop: '0.25rem' }}>
                    Puedes hacer clic en cualquiera de las sugerencias superiores o escribir libremente el diagnóstico exacto.
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginTop: '0.75rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Categoría Administrativa *</label>
                    <input
                      type="text"
                      required
                      className="input-text"
                      placeholder="Ej: ACNEAE, ACNEE, Dificultades de Aprendizaje..."
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Tipo de Adaptación Curricular *</label>
                    <select
                      className="select-input"
                      value={formData.curricularAdaptation}
                      onChange={(e) => setFormData({ ...formData, curricularAdaptation: e.target.value as any })}
                    >
                      <option value="Pautas Ordinarias">Pautas Ordinarias / Refuerzo</option>
                      <option value="No Significativa (ACNS)">No Significativa (ACNS)</option>
                      <option value="Significativa (ACS)">Significativa (ACS)</option>
                      <option value="Enriquecimiento">Enriquecimiento Curricular (AACC)</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Estado en el Censo</label>
                    <select
                      className="select-input"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    >
                      <option value="Activo">Activo</option>
                      <option value="En Seguimiento">En Seguimiento</option>
                      <option value="Alta">Alta / Resuelto</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Sección 2: Especialista de Apoyo PT */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-800)', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.3rem', marginBottom: '0.75rem' }}>
                  2. Especialista de Pedagogía Terapéutica (PT) y Dedicación Horaria
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Maestro/a Especialista PT</label>
                    <select
                      className="select-input"
                      value={formData.ptTeacher}
                      onChange={(e) => setFormData({ ...formData, ptTeacher: e.target.value })}
                    >
                      <option value="">Sin especialista PT (Apoyo ordinario en aula)</option>
                      <option value="Daniel Asenjo (PT)">Daniel Asenjo (PT)</option>
                      <option value="María (PT)">María (PT)</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Horas PT a la semana</label>
                    <input
                      type="number"
                      min="0"
                      max="15"
                      className="input-text"
                      value={formData.ptHours}
                      onChange={(e) => setFormData({ ...formData, ptHours: Number(e.target.value) })}
                    />
                  </div>
                </div>
              </div>

              {/* Sección 3: Pautas de Aula (Las 4 Dimensiones) */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.4rem', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-800)', margin: 0 }}>
                    3. Pautas Pedagógicas Especializadas para el Claustro
                  </h4>
                  <span style={{ fontSize: '0.72rem', color: '#4338ca', backgroundColor: '#eef2ff', padding: '0.18rem 0.55rem', borderRadius: '999px', fontWeight: 700 }}>
                    ✨ Incluye Pautas por Asignatura (Lengua, Matemáticas, STEM e Inglés)
                  </span>
                </div>

                {/* Selector Rápido de Plantillas Clínicas NEE / ACNEAE */}
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '10px', padding: '0.75rem', marginBottom: '0.9rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', marginBottom: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    ⚡ Cargar Protocolo Clínico-Pedagógico Especializado (1 clic):
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {[
                      { key: 'TEA', label: '🧩 ACNEE - TEA (Autismo / TEACCH)', bg: '#eff6ff', border: '#93c5fd', color: '#1e40af' },
                      { key: 'TEL', label: '🗣️ ACNEE - TEL / TDL (Lenguaje)', bg: '#f0fdf4', border: '#86efac', color: '#166534' },
                      { key: 'AUDITIVA', label: '🦻 ACNEE - Hipoacusia / Auditiva', bg: '#ecfeff', border: '#67e8f9', color: '#155e75' },
                      { key: 'CONDUCTA', label: '🛡️ ACNEE - Conducta y Regulación', bg: '#fef2f2', border: '#fca5a5', color: '#991b1b' },
                      { key: 'TDAH', label: '⚡ TDAH Hiperactivo-Impulsivo', bg: '#fffbeb', border: '#fcd34d', color: '#92400e' },
                      { key: 'TDA', label: '🔍 TDA Inatento / Lentitud', bg: '#fefce8', border: '#fde047', color: '#854d0e' },
                      { key: 'DISLEXIA', label: '📖 Dislexia y Disortografía', bg: '#f5f3ff', border: '#c4b5fd', color: '#5b21b6' },
                      { key: 'DISCALCULIA', label: '🔢 Discalculia Matemática', bg: '#fdf2f8', border: '#f9a8d4', color: '#9d174d' },
                      { key: 'AACC', label: '🌟 Altas Capacidades (AACC)', bg: '#f0fdfa', border: '#5eead4', color: '#115e59' },
                    ].map(btn => (
                      <button
                        key={btn.key}
                        type="button"
                        onClick={() => applyClinicalTemplate(btn.key)}
                        style={{
                          padding: '0.3rem 0.6rem',
                          fontSize: '0.73rem',
                          fontWeight: 700,
                          borderRadius: '6px',
                          border: `1px solid ${btn.border}`,
                          backgroundColor: btn.bg,
                          color: btn.color,
                          cursor: 'pointer'
                        }}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '0.75rem' }}>
                  <label className="form-label" style={{ fontSize: '0.78rem' }}>Objetivo General de Intervención *</label>
                  <textarea
                    rows={2}
                    required
                    className="input-text"
                    placeholder="Describe el objetivo nuclear del plan de apoyo..."
                    value={formData.generalGoal}
                    onChange={(e) => setFormData({ ...formData, generalGoal: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>
                      Pautas Metodológicas (1 por línea)
                    </label>
                    <textarea
                      rows={4}
                      className="input-text"
                      placeholder="Instrucción 1&#10;Instrucción 2&#10;Instrucción 3"
                      value={formData.methodological}
                      onChange={(e) => setFormData({ ...formData, methodological: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>
                      Ubicación y Entorno (1 por línea)
                    </label>
                    <textarea
                      rows={4}
                      className="input-text"
                      placeholder="Ubicación en primera fila&#10;Espacio libre de ruidos"
                      value={formData.environmental}
                      onChange={(e) => setFormData({ ...formData, environmental: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>
                      Adaptaciones en Exámenes (1 por línea)
                    </label>
                    <textarea
                      rows={4}
                      className="input-text"
                      placeholder="+25% de tiempo en controles&#10;Lectura oral de enunciados"
                      value={formData.evaluation}
                      onChange={(e) => setFormData({ ...formData, evaluation: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>
                      Apoyo Emocional y Motivacional (1 por línea)
                    </label>
                    <textarea
                      rows={4}
                      className="input-text"
                      placeholder="Refuerzo positivo diario&#10;Validar la frustración"
                      value={formData.emotional}
                      onChange={(e) => setFormData({ ...formData, emotional: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Botones de Guardado */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Save size={16} /> Guardar en el Censo Oficial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL DE CONFIRMACIÓN DE BORRADO */}
      {isDeleting && studentToDelete && (
        <div className="modal-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content" style={{ maxWidth: '480px', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <AlertTriangle size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.5rem' }}>
              ¿Dar de baja a {studentToDelete.name}?
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1.25rem' }}>
              Esta acción eliminará al alumno/a del censo oficial de NEAE ({studentToDelete.grade}). Los profesores dejarán de visualizar su diagnóstico y pautas en el portal.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setIsDeleting(false);
                  setStudentToDelete(null);
                }}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn"
                onClick={handleConfirmDelete}
                style={{ background: '#dc2626', color: 'white', border: 'none', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-md)' }}
              >
                Sí, Dar de Baja
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ASISTENTE DE PROMOCIÓN DE CURSO ESCOLAR (EXCLUSIVO ORIENTACIÓN) */}
      {isPromotionModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-content" style={{ maxWidth: '720px', padding: '1.75rem', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#92400e', background: '#fef3c7', padding: '0.15rem 0.55rem', borderRadius: '10px', fontWeight: 700 }}>
                  Automatización de Inicio de Curso • Orientación
                </span>
                <h3 style={{ fontSize: '1.2rem', margin: '0.25rem 0 0 0' }}>
                  🎓 Asistente de Promoción Anual de Curso Escolar
                </h3>
              </div>
              <button type="button" className="btn btn-secondary" onClick={() => setIsPromotionModalOpen(false)} style={{ padding: '0.35rem 0.6rem' }}>
                <X size={16} />
              </button>
            </div>

            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
              Esta herramienta actualiza automáticamente el curso de todos los alumnos activos del Censo NEAE al siguiente nivel escolar (ej. <em>1º → 2º Primaria</em>, <em>6º Primaria → 1º ESO</em>). Marca la casilla <strong>"Repite curso"</strong> únicamente en aquellos alumnos que permanezcan en el mismo nivel.
            </p>

            <div style={{ maxHeight: '380px', overflowY: 'auto', border: '1px solid var(--border-light)', borderRadius: '8px', marginBottom: '1.25rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid var(--border-light)', textAlign: 'left' }}>
                    <th style={{ padding: '0.6rem 0.75rem' }}>Alumno/a</th>
                    <th style={{ padding: '0.6rem 0.75rem' }}>Curso Actual</th>
                    <th style={{ padding: '0.6rem 0.75rem' }}>Nuevo Curso Propuesto</th>
                    <th style={{ padding: '0.6rem 0.75rem', textAlign: 'center' }}>¿Repite curso?</th>
                  </tr>
                </thead>
                <tbody>
                  {students.filter(s => s.status !== 'Alta').map(st => {
                    const isRepeating = repeatingStudentIds.includes(st.id);
                    const { nextGrade, isGraduatingPrimary } = computeNextGrade(st.grade);
                    return (
                      <tr key={st.id} style={{ borderBottom: '1px solid #f1f5f9', background: isRepeating ? '#fffbeb' : '#ffffff' }}>
                        <td style={{ padding: '0.55rem 0.75rem', fontWeight: 600 }}>{st.name}</td>
                        <td style={{ padding: '0.55rem 0.75rem', color: 'var(--text-muted)' }}>{st.grade}</td>
                        <td style={{ padding: '0.55rem 0.75rem', fontWeight: 700, color: isRepeating ? '#92400e' : isGraduatingPrimary ? '#4f46e5' : '#0f766e' }}>
                          {isRepeating ? `${st.grade} (Permanece)` : nextGrade}
                        </td>
                        <td style={{ padding: '0.55rem 0.75rem', textAlign: 'center' }}>
                          <input
                            type="checkbox"
                            checked={isRepeating}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setRepeatingStudentIds(prev => [...prev, st.id]);
                              } else {
                                setRepeatingStudentIds(prev => prev.filter(id => id !== st.id));
                              }
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setIsPromotionModalOpen(false)}>
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={async () => {
                  if (!onBulkSaveStudents) return;
                  const promoted = students.map(st => {
                    if (st.status === 'Alta' || repeatingStudentIds.includes(st.id)) return st;
                    const { nextGrade, nextStage, isGraduatingPrimary } = computeNextGrade(st.grade);
                    return {
                      ...st,
                      grade: nextGrade,
                      stage: nextStage,
                      tutor: `Tutor/a de ${nextGrade.replace('Educación Primaria ', '')}`,
                      status: isGraduatingPrimary ? ('En Seguimiento' as const) : st.status,
                      lastReviewDate: new Date().toISOString().split('T')[0]
                    };
                  });
                  await onBulkSaveStudents(promoted);
                  setIsPromotionModalOpen(false);
                }}
              >
                <GraduationCap size={16} /> Aplicar Promoción al Censo Oficial
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
