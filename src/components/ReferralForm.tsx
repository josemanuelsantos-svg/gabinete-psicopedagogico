import React, { useState, useEffect } from 'react';
import { EducationalStage, ReferralCase, ReferralQuestionnaire, StudentSelfPerception } from '../types';
import { calculateTriage } from '../utils/triageEngine';
import { FileText, Send, Paperclip, CheckCircle2, Clock, User, HeartHandshake, Baby, School } from 'lucide-react';

interface ReferralFormProps {
  onSubmitCase: (newCase: ReferralCase) => void;
  onCancel: () => void;
}

export const ReferralForm: React.FC<ReferralFormProps> = ({ onSubmitCase }) => {
  // 1. Etapa y Datos Generales
  const [stage, setStage] = useState<EducationalStage>('PRIMARIA');
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('3º Educación Primaria A');
  const [teacherName, setTeacherName] = useState('');
  const [mainReason, setMainReason] = useState('');
  const [affectedSubjects, setAffectedSubjects] = useState<string[]>(['Matemáticas', 'Lengua y Literatura']);
  const [attachedEvidenceName, setAttachedEvidenceName] = useState<string>('');

  // 2.A Indicadores de Observación en Aula: PRIMARIA (1 al 5)
  const [attentionFocus, setAttentionFocus] = useState(3);
  const [readingComprehension, setReadingComprehension] = useState(3);
  const [mathReasoning, setMathReasoning] = useState(3);
  const [taskPaceAndCompletion, setTaskPaceAndCompletion] = useState(3);
  const [impulsivityAndAutonomy, setImpulsivityAndAutonomy] = useState(3);
  const [emotionalAndPeerRel, setEmotionalAndPeerRel] = useState(3);

  // 2.B Indicadores de Observación en Aula: INFANTIL (1 al 5)
  const [infantilOralLanguage, setInfantilOralLanguage] = useState(3);
  const [infantilAttentionAssembly, setInfantilAttentionAssembly] = useState(3);
  const [infantilPsychomotorFine, setInfantilPsychomotorFine] = useState(3);
  const [infantilLogicConcepts, setInfantilLogicConcepts] = useState(3);
  const [infantilPersonalAutonomy, setInfantilPersonalAutonomy] = useState(3);
  const [infantilSocialPlay, setInfantilSocialPlay] = useState(3);

  // 3. Ayudas Previas Probadas en Clase
  const [measuresDuration, setMeasuresDuration] = useState<'MENOS_1_MES' | '1_A_2_MESES' | 'MAS_2_MESES'>('1_A_2_MESES');
  const [appliedMeasuresList, setAppliedMeasuresList] = useState<string[]>([
    'Ubicación en primera fila cerca del profesor',
    'Darle más tiempo en exámenes (+25%)'
  ]);
  const [measuresResult, setMeasuresResult] = useState<'INSUFICIENTE' | 'MEJORIA_LEVE_PERSISTE_DIFICULTAD' | 'BLOQUEO_PERSISTENTE'>('MEJORIA_LEVE_PERSISTE_DIFICULTAD');
  const [measuresObservations, setMeasuresObservations] = useState('');

  // 4. Voz y Autopercepción del Alumno/a
  const [perceivedDifficulty, setPerceivedDifficulty] = useState<'NINGUNA' | 'LEVE' | 'MODERADA' | 'ALTA'>('MODERADA');
  const [favoriteSubjects, setFavoriteSubjects] = useState('Educación Física, Plástica');
  const [hardestSubjects, setHardestSubjects] = useState('Matemáticas, Lengua');
  const [schoolMotivation, setSchoolMotivation] = useState<'ALTA' | 'MEDIA' | 'BAJA'>('MEDIA');
  const [studentComments, setStudentComments] = useState('');

  // 5. Contexto Familiar
  const [familyMeetingDone, setFamilyMeetingDone] = useState(true);
  const [familyAgreement, setFamilyAgreement] = useState<'TOTAL_ACUERDO' | 'CONFORMIDAD_PARCIAL' | 'RESISTENCIA_FAMILIAR' | 'PENDIENTE_REUNION'>('TOTAL_ACUERDO');
  const [externalAssessmentDone, setExternalAssessmentDone] = useState(false);
  const [externalAssessmentDetails, setExternalAssessmentDetails] = useState('');
  const [familyAttitude, setFamilyAttitude] = useState('');

  // Sincronizar etapa cuando cambia el curso seleccionado
  const handleGradeChange = (newGrade: string) => {
    setGrade(newGrade);
    if (newGrade.includes('Infantil')) {
      setStage('INFANTIL');
      setAffectedSubjects(['Lenguaje Oral / Comunicación', 'Atención en Asamblea']);
      setAppliedMeasuresList(['Apoyo visual y pictogramas en la rutina diaria', 'Ubicación cerca de la tutora en asamblea']);
      setFavoriteSubjects('Juego simbólico, Psicomotricidad, Música');
      setHardestSubjects('Fichas de grafomotricidad, Asamblea larga');
    } else {
      setStage('PRIMARIA');
      setAffectedSubjects(['Matemáticas', 'Lengua y Literatura']);
      setAppliedMeasuresList(['Ubicación en primera fila cerca del profesor', 'Darle más tiempo en exámenes (+25%)']);
      setFavoriteSubjects('Educación Física, Plástica');
      setHardestSubjects('Matemáticas, Lengua');
    }
  };

  const handleStageSwitch = (newStage: EducationalStage) => {
    setStage(newStage);
    if (newStage === 'INFANTIL') {
      setGrade('2º Educación Infantil (4 años)');
      setAffectedSubjects(['Lenguaje Oral / Comunicación', 'Atención en Asamblea']);
      setAppliedMeasuresList(['Apoyo visual y pictogramas en la rutina diaria', 'Ubicación cerca de la tutora en asamblea']);
    } else {
      setGrade('3º Educación Primaria A');
      setAffectedSubjects(['Matemáticas', 'Lengua y Literatura']);
      setAppliedMeasuresList(['Ubicación en primera fila cerca del profesor', 'Darle más tiempo en exámenes (+25%)']);
    }
  };

  const subjectsListPrimaria = ['Matemáticas', 'Lengua y Literatura', 'Ciencias / STEM', 'Idiomas / Inglés', 'En todas las asignaturas'];
  const subjectsListInfantil = ['Lenguaje Oral / Comunicación', 'Atención en Asamblea', 'Grafomotricidad / Trazos', 'Lógica-Matemática / Conceptos', 'Autonomía / Hábitos', 'Socialización en el Recreo'];

  const availableMeasuresPrimaria = [
    'Ubicación en primera fila cerca del profesor o pizarra',
    'Darle más tiempo en exámenes y controles (+25%)',
    'Reducir cantidad de ejercicios o fraccionar tareas largas',
    'Asignar compañero/a tutor de apoyo al lado',
    'Uso de apoyos visuales, esquemas o recordatorios en la mesa',
    'Supervisión y confirmación del copiado de deberes en la agenda'
  ];

  const availableMeasuresInfantil = [
    'Ubicación cerca de la tutora en la asamblea con límite espacial marcado',
    'Apoyo visual mediante tiras de pictogramas (rutina y secuencias)',
    'Anticipación individual de cambios de actividad 2 minutos antes',
    'Adaptación de útiles: ceras gruesas triangulares y tijeras adaptadas',
    'Rincón de calma para descompresión sensorial y autorregulación',
    'Pareja de juego guiada por la tutora en el tiempo de rincones'
  ];

  const toggleSubject = (subject: string) => {
    if (affectedSubjects.includes(subject)) {
      setAffectedSubjects(affectedSubjects.filter(s => s !== subject));
    } else {
      setAffectedSubjects([...affectedSubjects, subject]);
    }
  };

  const toggleMeasure = (measure: string) => {
    if (appliedMeasuresList.includes(measure)) {
      setAppliedMeasuresList(appliedMeasuresList.filter(m => m !== measure));
    } else {
      setAppliedMeasuresList([...appliedMeasuresList, measure]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedEvidenceName(e.target.files[0].name);
    }
  };

  // -------------------------------------------------------------
  // DESCRIPTORES PRIMARIA (1 AL 5)
  // -------------------------------------------------------------
  const getAttentionDescriptor = (val: number) => {
    switch (val) {
      case 1: return '🔴 Dificultad Grave: Se distrae constantemente (>75% del tiempo), pierde el hilo y no copia del encerado.';
      case 2: return '🟠 Dificultad Frecuente: Inatención notable en tareas individuales (>50% del tiempo). Requiere avisos constantes.';
      case 3: return '🟡 Nivel Medio / Moderado: Atención intermitente; rinde en explicaciones cortas pero se dispersa en tareas largas.';
      case 4: return '🟢 Buen Nivel: Buena atención sostenida en la gran mayoría de sesiones de clase.';
      case 5: return '🔵 Excelente: Concentración profunda, perseverante y autónoma durante toda la jornada.';
      default: return '';
    }
  };

  const getReadingDescriptor = (val: number) => {
    switch (val) {
      case 1: return '🔴 Dificultad Grave: Lectura silábica muy lenta, omisiones constantes de letras y nula comprensión del texto.';
      case 2: return '🟠 Dificultad Frecuente: Lectura vacilante con bloqueos en palabras compuestas; gran fatiga y errores al leer en voz alta.';
      case 3: return '🟡 Nivel Medio / Moderado: Fluidez lectora aceptable, pero comete errores en palabras complejas o textos extensos.';
      case 4: return '🟢 Buen Nivel: Buena velocidad y comprensión de lecturas adecuadas a su curso escolar.';
      case 5: return '🔵 Excelente: Lectura rápida, expresiva y comprensión crítica muy superior a su edad.';
      default: return '';
    }
  };

  const getMathDescriptor = (val: number) => {
    switch (val) {
      case 1: return '🔴 Dificultad Grave: Bloqueo total ante operaciones básicas y problemas; no comprende los enunciados numéricos.';
      case 2: return '🟠 Dificultad Frecuente: Le cuesta mucho el cálculo mental y el planteamiento de problemas de más de un paso.';
      case 3: return '🟡 Nivel Medio / Moderado: Realiza operaciones mecánicas bien, pero necesita guía para razonar problemas nuevos.';
      case 4: return '🟢 Buen Nivel: Resuelve problemas con soltura y comprende conceptos lógico-matemáticos.';
      case 5: return '🔵 Excelente: Gran rapidez de cálculo, abstracción y razonamiento lógico sobresaliente.';
      default: return '';
    }
  };

  const getTaskPaceDescriptor = (val: number) => {
    switch (val) {
      case 1: return '🔴 Dificultad Grave: Ritmo extremadamente lento; deja más del 50% de las tareas/exámenes sin terminar.';
      case 2: return '🟠 Dificultad Frecuente: Se queda rezagado/a habitualmente al copiar de la pizarra o finalizar fichas de clase.';
      case 3: return '🟡 Nivel Medio / Moderado: Termina las tareas justo a tiempo si el docente le va recordando el tiempo.';
      case 4: return '🟢 Buen Nivel: Ritmo ágil y organizado; finaliza las actividades con normalidad.';
      case 5: return '🔵 Excelente: Termina con gran rapidez y pulcritud mucho antes que el resto de la clase.';
      default: return '';
    }
  };

  const getImpulsivityDescriptor = (val: number) => {
    switch (val) {
      case 1: return '🔴 Dificultad Grave: Muy impulsivo/a; interrumpe continuamente, se levanta sin permiso o responde sin pensar.';
      case 2: return '🟠 Dificultad Frecuente: Inquietud motora notable; le cuesta esperar su turno y mantener el orden del material.';
      case 3: return '🟡 Nivel Medio / Moderado: Inquietud leve; responde bien cuando se le reconduce con amabilidad.';
      case 4: return '🟢 Buen Nivel: Buen autocontrol, respeta los turnos de palabra y las normas de convivencia.';
      case 5: return '🔵 Excelente: Autorregulación óptima, muy reflexivo/a, centrado/a y paciente.';
      default: return '';
    }
  };

  const getEmotionalDescriptor = (val: number) => {
    switch (val) {
      case 1: return '🔴 Dificultad Grave: Baja tolerancia a la frustración; llora, se bloquea o tiene conflictos frecuentes con compañeros.';
      case 2: return '🟠 Dificultad Frecuente: Muestra inseguridad, ansiedad ante los exámenes o tendencia al aislamiento en el patio.';
      case 3: return '🟡 Nivel Medio / Moderado: Adaptación social normal; en momentos puntuales de estrés le cuesta gestionar la emoción.';
      case 4: return '🟢 Buen Nivel: Buena relación con el grupo de clase, sociable y tolerante.';
      case 5: return '🔵 Excelente: Gran empatía, liderazgo positivo y excelentes habilidades sociales.';
      default: return '';
    }
  };

  // -------------------------------------------------------------
  // DESCRIPTORES INFANTIL (2º CICLO - 3 A 5 AÑOS)
  // -------------------------------------------------------------
  const getInfantilLanguageDesc = (val: number) => {
    switch (val) {
      case 1: return '🔴 Dificultad Grave: Habla ininteligible, vocabulario muy escaso, frases de 1-2 palabras o no comprende órdenes sencillas.';
      case 2: return '🟠 Dificultad Frecuente: Dificultades notables de articulación (dislalias múltiples), oraciones incompletas y dificultad de relato.';
      case 3: return '🟡 Nivel Medio / Moderado: Se comunica con normalidad; comete errores en palabras complejas o fonemas tardíos (r, tr).';
      case 4: return '🟢 Buen Nivel: Buena fluidez expresiva, estructura oraciones con corrección y comprende cuentos de aula.';
      case 5: return '🔵 Excelente: Riqueza léxica sobresaliente, gran capacidad narrativa y perfecta articulación.';
      default: return '';
    }
  };

  const getInfantilAssemblyDesc = (val: number) => {
    switch (val) {
      case 1: return '🔴 Dificultad Grave: Incapaz de permanecer en la asamblea (>5 min); se levanta constantemente, interrumpe o corre por el aula.';
      case 2: return '🟠 Dificultad Frecuente: Inquietud motriz constante; necesita recordatorios continuos para mantenerse en su sitio.';
      case 3: return '🟡 Nivel Medio / Moderado: Participa en la asamblea aunque en actividades largas de más de 15 minutos se desconecta.';
      case 4: return '🟢 Buen Nivel: Atiende a las canciones, rutinas y explicaciones de la tutora con buena actitud.';
      case 5: return '🔵 Excelente: Gran atención sostenida, escucha activa a sus compañeros y respeta el turno de palabra.';
      default: return '';
    }
  };

  const getInfantilMotorDesc = (val: number) => {
    switch (val) {
      case 1: return '🔴 Dificultad Grave: No realiza la pinza digital (agarre palmar), no recorta con tijeras, torpeza motriz al correr/saltar.';
      case 2: return '🟠 Dificultad Frecuente: Trazos muy débiles o con excesiva presión; le cuestan los encajables, ensartables y modelado.';
      case 3: return '🟡 Nivel Medio / Moderado: Motricidad adecuada a su edad; realiza trazos básicos y maneja útiles con guía habitual.';
      case 4: return '🟢 Buen Nivel: Buen control visomotor, colorea respetando límites y maneja tijeras con soltura.';
      case 5: return '🔵 Excelente: Precisión grafomotriz excepcional, dibujo muy detallado y excelente coordinación física.';
      default: return '';
    }
  };

  const getInfantilLogicDesc = (val: number) => {
    switch (val) {
      case 1: return '🔴 Dificultad Grave: No identifica colores básicos, tamaños (grande/pequeño) ni nociones espaciales (arriba/abajo/dentro).';
      case 2: return '🟠 Dificultad Frecuente: Le cuesta la seriación de 2 elementos, el conteo elemental (1 al 5) o la asociación número-cantidad.';
      case 3: return '🟡 Nivel Medio / Moderado: Asimila conceptos básicos con el ritmo habitual del grupo; necesita apoyos manipulativos.';
      case 4: return '🟢 Buen Nivel: Identifica figuras geométricas, clasifica por varios criterios y cuenta con precisión.';
      case 5: return '🔵 Excelente: Deducción lógica precoz, conteo avanzado y gran curiosidad por patrones y números.';
      default: return '';
    }
  };

  const getInfantilAutonomyDesc = (val: number) => {
    switch (val) {
      case 1: return '🔴 Dificultad Grave: No controla esfínteres, dependiente total para el aseo, ponerse el abrigo o recoger materiales.';
      case 2: return '🟠 Dificultad Frecuente: Necesita ayuda constante para comer en el recreo, abrocharse o cuidar sus pertenencias.';
      case 3: return '🟡 Nivel Medio / Moderado: Realiza hábitos básicos con supervisión y recordatorios rutinarios de la tutora.';
      case 4: return '🟢 Buen Nivel: Muy autónomo/a en el baño, desayuno escolar y colocación de su mochila/abrigo.';
      case 5: return '🔵 Excelente: Totalmente autónomo/a e incluso ayuda de forma espontánea a sus compañeros.';
      default: return '';
    }
  };

  const getInfantilSocialDesc = (val: number) => {
    switch (val) {
      case 1: return '🔴 Dificultad Grave: Aislamiento severo, no responde al nombre, rabietas intensas y desreguladas o ausencia de juego simbólico.';
      case 2: return '🟠 Dificultad Frecuente: Juego en paralelo; le cuesta compartir juguetes o muestra baja tolerancia si no se hace lo que quiere.';
      case 3: return '🟡 Nivel Medio / Moderado: Se relaciona bien con el grupo; en situaciones de conflicto precisa la mediación de la tutora.';
      case 4: return '🟢 Buen Nivel: Sociable, disfruta del juego cooperativo y muestra empatía hacia sus iguales.';
      case 5: return '🔵 Excelente: Habilidades sociales sobresalientes, muy empático/a, comparte y lidera juegos integradores.';
      default: return '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const studentPerception: StudentSelfPerception = {
      perceivedDifficulty,
      favoriteSubjects,
      hardestSubjects,
      schoolMotivation,
      studentComments
    };

    const questionnaire: ReferralQuestionnaire = {
      stage,
      studentName,
      studentAge: stage === 'INFANTIL' ? (grade.includes('3 años') ? 3 : grade.includes('4 años') ? 4 : 5) : 8,
      grade,
      teacherName,
      subjectOrTutor: teacherName,
      referralDate: new Date().toISOString().split('T')[0],
      mainReason,
      affectedSubjects,
      attachedEvidenceName: attachedEvidenceName || undefined,

      // Primaria
      attentionFocus: stage === 'PRIMARIA' ? attentionFocus : undefined,
      attentionDescriptor: stage === 'PRIMARIA' ? getAttentionDescriptor(attentionFocus) : undefined,
      readingComprehension: stage === 'PRIMARIA' ? readingComprehension : undefined,
      readingDescriptor: stage === 'PRIMARIA' ? getReadingDescriptor(readingComprehension) : undefined,
      mathReasoning: stage === 'PRIMARIA' ? mathReasoning : undefined,
      mathDescriptor: stage === 'PRIMARIA' ? getMathDescriptor(mathReasoning) : undefined,
      taskPaceAndCompletion: stage === 'PRIMARIA' ? taskPaceAndCompletion : undefined,
      taskPaceDescriptor: stage === 'PRIMARIA' ? getTaskPaceDescriptor(taskPaceAndCompletion) : undefined,
      impulsivityAndAutonomy: stage === 'PRIMARIA' ? impulsivityAndAutonomy : undefined,
      impulsivityDescriptor: stage === 'PRIMARIA' ? getImpulsivityDescriptor(impulsivityAndAutonomy) : undefined,
      emotionalAndPeerRel: stage === 'PRIMARIA' ? emotionalAndPeerRel : undefined,
      emotionalDescriptor: stage === 'PRIMARIA' ? getEmotionalDescriptor(emotionalAndPeerRel) : undefined,

      // Infantil
      infantilOralLanguage: stage === 'INFANTIL' ? infantilOralLanguage : undefined,
      infantilOralLanguageDesc: stage === 'INFANTIL' ? getInfantilLanguageDesc(infantilOralLanguage) : undefined,
      infantilAttentionAssembly: stage === 'INFANTIL' ? infantilAttentionAssembly : undefined,
      infantilAttentionAssemblyDesc: stage === 'INFANTIL' ? getInfantilAssemblyDesc(infantilAttentionAssembly) : undefined,
      infantilPsychomotorFine: stage === 'INFANTIL' ? infantilPsychomotorFine : undefined,
      infantilPsychomotorFineDesc: stage === 'INFANTIL' ? getInfantilMotorDesc(infantilPsychomotorFine) : undefined,
      infantilLogicConcepts: stage === 'INFANTIL' ? infantilLogicConcepts : undefined,
      infantilLogicConceptsDesc: stage === 'INFANTIL' ? getInfantilLogicDesc(infantilLogicConcepts) : undefined,
      infantilPersonalAutonomy: stage === 'INFANTIL' ? infantilPersonalAutonomy : undefined,
      infantilPersonalAutonomyDesc: stage === 'INFANTIL' ? getInfantilAutonomyDesc(infantilPersonalAutonomy) : undefined,
      infantilSocialPlay: stage === 'INFANTIL' ? infantilSocialPlay : undefined,
      infantilSocialPlayDesc: stage === 'INFANTIL' ? getInfantilSocialDesc(infantilSocialPlay) : undefined,

      measuresDuration,
      appliedMeasuresList,
      measuresResult,
      measuresObservations,
      studentPerception,
      familyContactDone: true,
      familyMeetingDone,
      familyAgreement,
      externalAssessmentDone,
      externalAssessmentDetails,
      familyAttitude,
      additionalObservations: ''
    };

    const triage = calculateTriage(questionnaire);
    const caseId = `DER-2026-00${Math.floor(10 + Math.random() * 90)}`;

    const newCase: ReferralCase = {
      id: caseId,
      stage,
      studentName,
      grade,
      teacherName,
      dateSubmitted: new Date().toISOString().split('T')[0],
      status: 'PENDIENTE_REVISION',
      priority: triage.suggestedPriority,
      categoryTag: triage.riskProfileTitle,
      questionnaire,
      triage
    };

    onSubmitCase(newCase);
  };

  const currentTriage = calculateTriage({
    stage,
    studentName,
    studentAge: stage === 'INFANTIL' ? 4 : 8,
    grade,
    teacherName,
    subjectOrTutor: teacherName,
    referralDate: '',
    mainReason,
    affectedSubjects,
    attentionFocus,
    readingComprehension,
    mathReasoning,
    taskPaceAndCompletion,
    impulsivityAndAutonomy,
    emotionalAndPeerRel,
    infantilOralLanguage,
    infantilAttentionAssembly,
    infantilPsychomotorFine,
    infantilLogicConcepts,
    infantilPersonalAutonomy,
    infantilSocialPlay,
    measuresDuration,
    appliedMeasuresList,
    measuresResult,
    measuresObservations,
    familyContactDone: true,
    familyMeetingDone,
    familyAgreement,
    externalAssessmentDone,
    familyAttitude: '',
    additionalObservations: ''
  });

  return (
    <div className="card" style={{ maxWidth: '880px', margin: '0 auto' }}>
      <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
        <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
          Colegio San Buenaventura • Equipo de Orientación
        </span>
        <h2 style={{ fontSize: '1.35rem', color: 'var(--primary-900)', marginTop: '0.2rem' }}>
          Formulario de Solicitud de Valoración Psicopedagógica
        </h2>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          Cuestionario clínico adaptado por etapa evolutiva: <strong>2º Ciclo de Infantil (3-5 años)</strong> y <strong>Educación Primaria (6-12 años)</strong>.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* SELECTOR DE ETAPA EDUCATIVA */}
        <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', marginBottom: '1.25rem' }}>
          <label className="form-label" style={{ marginBottom: '0.5rem' }}>
            🎓 Selecciona la Etapa Educativa del Alumno/a *
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
            <button
              type="button"
              onClick={() => handleStageSwitch('INFANTIL')}
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: stage === 'INFANTIL' ? '2px solid var(--primary-600)' : '1px solid var(--border-light)',
                background: stage === 'INFANTIL' ? '#f0fdfa' : '#ffffff',
                color: stage === 'INFANTIL' ? 'var(--primary-900)' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.88rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
            >
              <Baby size={20} color={stage === 'INFANTIL' ? 'var(--primary-700)' : '#94a3b8'} />
              2º Ciclo Infantil (3 a 5 años)
            </button>

            <button
              type="button"
              onClick={() => handleStageSwitch('PRIMARIA')}
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: stage === 'PRIMARIA' ? '2px solid var(--primary-600)' : '1px solid var(--border-light)',
                background: stage === 'PRIMARIA' ? '#f0fdfa' : '#ffffff',
                color: stage === 'PRIMARIA' ? 'var(--primary-900)' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.88rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
            >
              <School size={20} color={stage === 'PRIMARIA' ? 'var(--primary-700)' : '#94a3b8'} />
              Educación Primaria (1º a 6º)
            </button>
          </div>
        </div>

        {/* BLOQUE 1: DATOS DEL ALUMNO Y CURSO */}
        <div className="grid-2">
          <div className="form-group">
            <label className="form-label">Nombre Completo del Alumno/a *</label>
            <input
              type="text"
              required
              className="input-text"
              placeholder="Ej: Mateo Fernández Ruiz"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Curso y Grupo *</label>
            <select className="select-input" value={grade} onChange={(e) => handleGradeChange(e.target.value)}>
              {stage === 'INFANTIL' ? (
                <>
                  <option value="1º Educación Infantil (3 años)">1º Educación Infantil (3 años)</option>
                  <option value="2º Educación Infantil (4 años)">2º Educación Infantil (4 años)</option>
                  <option value="3º Educación Infantil (5 años)">3º Educación Infantil (5 años)</option>
                </>
              ) : (
                <>
                  <option value="1º Educación Primaria">1º Educación Primaria</option>
                  <option value="2º Educación Primaria">2º Educación Primaria</option>
                  <option value="3º Educación Primaria A">3º Educación Primaria A</option>
                  <option value="4º Educación Primaria B">4º Educación Primaria B</option>
                  <option value="5º Educación Primaria">5º Educación Primaria</option>
                  <option value="6º Educación Primaria">6º Educación Primaria</option>
                  <option value="1º ESO">1º ESO</option>
                </>
              )}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Profesor / Tutor Solicitante *</label>
          <input
            type="text"
            required
            className="input-text"
            placeholder="Introduce tu nombre completo..."
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />
        </div>

        {/* ASIGNATURAS / ÁREAS AFECTADAS ADAPTADAS POR ETAPA */}
        <div className="form-group">
          <label className="form-label">Áreas / Momentos de la jornada donde se manifiesta la dificultad *</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.3rem' }}>
            {(stage === 'INFANTIL' ? subjectsListInfantil : subjectsListPrimaria).map(subj => {
              const selected = affectedSubjects.includes(subj);
              return (
                <button
                  type="button"
                  key={subj}
                  onClick={() => toggleSubject(subj)}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: selected ? '1px solid var(--primary-600)' : '1px solid var(--border-light)',
                    background: selected ? 'var(--primary-100)' : '#ffffff',
                    color: selected ? 'var(--primary-900)' : 'var(--text-muted)'
                  }}
                >
                  {selected ? '✓ ' : '+ '}{subj}
                </button>
              );
            })}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Motivo Principal de Consulta en el Aula *</label>
          <textarea
            required
            rows={3}
            className="textarea-input"
            placeholder={
              stage === 'INFANTIL'
                ? "Describe las conductas observadas en la asamblea, rincones o patio (ej: habla ininteligible, rabietas intensas, no sostiene la atención, dificultades con la pinza digital)..."
                : "Describe las conductas observadas en el aula (ej: bloqueo al copiar de la pizarra, lentitud lectora, desatención persistente en tareas individuales)..."
            }
            value={mainReason}
            onChange={(e) => setMainReason(e.target.value)}
          />
        </div>

        {/* EVIDENCIA ADJUNTA */}
        <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginBottom: '1.25rem' }}>
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Paperclip size={16} color="var(--primary-600)" />
            {stage === 'INFANTIL' ? 'Ficha de grafomotricidad / dibujo del alumno/a (Evidencia Opcional)' : 'Muestra de Trabajo / Examen del Alumno (Evidencia Opcional)'}
          </label>
          <input type="file" accept="image/*,.pdf" onChange={handleFileChange} style={{ fontSize: '0.82rem' }} />
          {attachedEvidenceName && (
            <p style={{ fontSize: '0.78rem', color: 'var(--primary-700)', marginTop: '0.3rem', fontWeight: 600 }}>
              📎 Archivo adjunto: {attachedEvidenceName}
            </p>
          )}
        </div>

        {/* BLOQUE 2: LAS 6 ÁREAS CON DESCRIPTORES ADAPTADOS SEGÚN LA ETAPA */}
        <div style={{ background: '#f8fafc', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', marginBottom: '1.25rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--primary-800)', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            📊 2. Indicadores de Aula ({stage === 'INFANTIL' ? '2º Ciclo Infantil: 3 a 5 años' : 'Educación Primaria: 6 a 12 años'})
          </h3>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
            Mueve el deslizador en cada área evolutiva según lo observado en el aula. Debajo de cada barra verás la descripción clínica del nivel.
          </p>

          {/* GUÍA DE ESCALA VISUAL */}
          <div style={{ display: 'flex', justifyContent: 'space-between', background: '#ffffff', padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.73rem', fontWeight: 600, marginBottom: '1rem', flexWrap: 'wrap', gap: '0.4rem' }}>
            <span style={{ color: '#991b1b' }}>1 = 🔴 Dificultad Grave / Muy Bajo</span>
            <span style={{ color: '#9a3412' }}>2 = 🟠 Dificultad Frecuente</span>
            <span style={{ color: '#854d0e' }}>3 = 🟡 Nivel Medio / Moderado</span>
            <span style={{ color: '#3730a3' }}>4 = 🟢 Buen Nivel</span>
            <span style={{ color: '#166534' }}>5 = 🔵 Excelente / Sobresaliente</span>
          </div>

          {/* SI LA ETAPA ES INFANTIL */}
          {stage === 'INFANTIL' ? (
            <>
              {/* INFANTIL ÁREA 1: LENGUAJE ORAL */}
              <div className="rating-group">
                <div className="rating-header">
                  <span>1. Lenguaje y Comunicación Oral (Expresión y Comprensión)</span>
                  <span className={`rating-badge val-${infantilOralLanguage}`}>{infantilOralLanguage} / 5</span>
                </div>
                <input type="range" min="1" max="5" value={infantilOralLanguage} style={{ width: '100%' }} onChange={(e) => setInfantilOralLanguage(Number(e.target.value))} />
                <div style={{ fontSize: '0.78rem', color: 'var(--primary-900)', marginTop: '0.35rem', fontStyle: 'italic', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  {getInfantilLanguageDesc(infantilOralLanguage)}
                </div>
              </div>

              {/* INFANTIL ÁREA 2: ASAMBLEA Y AUTORREGULACIÓN */}
              <div className="rating-group">
                <div className="rating-header">
                  <span>2. Atención en Asamblea, Regulación e Inquietud Motriz</span>
                  <span className={`rating-badge val-${infantilAttentionAssembly}`}>{infantilAttentionAssembly} / 5</span>
                </div>
                <input type="range" min="1" max="5" value={infantilAttentionAssembly} style={{ width: '100%' }} onChange={(e) => setInfantilAttentionAssembly(Number(e.target.value))} />
                <div style={{ fontSize: '0.78rem', color: 'var(--primary-900)', marginTop: '0.35rem', fontStyle: 'italic', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  {getInfantilAssemblyDesc(infantilAttentionAssembly)}
                </div>
              </div>

              {/* INFANTIL ÁREA 3: PSICOMOTRICIDAD FINA */}
              <div className="rating-group">
                <div className="rating-header">
                  <span>3. Psicomotricidad Fina, Pinza Digital y Grafomotricidad</span>
                  <span className={`rating-badge val-${infantilPsychomotorFine}`}>{infantilPsychomotorFine} / 5</span>
                </div>
                <input type="range" min="1" max="5" value={infantilPsychomotorFine} style={{ width: '100%' }} onChange={(e) => setInfantilPsychomotorFine(Number(e.target.value))} />
                <div style={{ fontSize: '0.78rem', color: 'var(--primary-900)', marginTop: '0.35rem', fontStyle: 'italic', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  {getInfantilMotorDesc(infantilPsychomotorFine)}
                </div>
              </div>

              {/* INFANTIL ÁREA 4: CONCEPTOS BÁSICOS Y LÓGICA */}
              <div className="rating-group">
                <div className="rating-header">
                  <span>4. Pensamiento Lógico y Conceptos Básicos (Colores, Tamaños, Espacio)</span>
                  <span className={`rating-badge val-${infantilLogicConcepts}`}>{infantilLogicConcepts} / 5</span>
                </div>
                <input type="range" min="1" max="5" value={infantilLogicConcepts} style={{ width: '100%' }} onChange={(e) => setInfantilLogicConcepts(Number(e.target.value))} />
                <div style={{ fontSize: '0.78rem', color: 'var(--primary-900)', marginTop: '0.35rem', fontStyle: 'italic', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  {getInfantilLogicDesc(infantilLogicConcepts)}
                </div>
              </div>

              {/* INFANTIL ÁREA 5: AUTONOMÍA PERSONAL */}
              <div className="rating-group">
                <div className="rating-header">
                  <span>5. Autonomía Personal y Hábitos de Aula (Higiene, Aseo, Desayuno)</span>
                  <span className={`rating-badge val-${infantilPersonalAutonomy}`}>{infantilPersonalAutonomy} / 5</span>
                </div>
                <input type="range" min="1" max="5" value={infantilPersonalAutonomy} style={{ width: '100%' }} onChange={(e) => setInfantilPersonalAutonomy(Number(e.target.value))} />
                <div style={{ fontSize: '0.78rem', color: 'var(--primary-900)', marginTop: '0.35rem', fontStyle: 'italic', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  {getInfantilAutonomyDesc(infantilPersonalAutonomy)}
                </div>
              </div>

              {/* INFANTIL ÁREA 6: SOCIALIZACIÓN Y JUEGO SIMBÓLICO */}
              <div className="rating-group">
                <div className="rating-header">
                  <span>6. Socialización, Juego Simbólico y Adaptación Emocional</span>
                  <span className={`rating-badge val-${infantilSocialPlay}`}>{infantilSocialPlay} / 5</span>
                </div>
                <input type="range" min="1" max="5" value={infantilSocialPlay} style={{ width: '100%' }} onChange={(e) => setInfantilSocialPlay(Number(e.target.value))} />
                <div style={{ fontSize: '0.78rem', color: 'var(--primary-900)', marginTop: '0.35rem', fontStyle: 'italic', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  {getInfantilSocialDesc(infantilSocialPlay)}
                </div>
              </div>
            </>
          ) : (
            /* SI LA ETAPA ES PRIMARIA */
            <>
              {/* PRIMARIA ÁREA 1: ATENCIÓN */}
              <div className="rating-group">
                <div className="rating-header">
                  <span>1. Atención y Concentración en el Aula</span>
                  <span className={`rating-badge val-${attentionFocus}`}>{attentionFocus} / 5</span>
                </div>
                <input type="range" min="1" max="5" value={attentionFocus} style={{ width: '100%' }} onChange={(e) => setAttentionFocus(Number(e.target.value))} />
                <div style={{ fontSize: '0.78rem', color: 'var(--primary-900)', marginTop: '0.35rem', fontStyle: 'italic', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  {getAttentionDescriptor(attentionFocus)}
                </div>
              </div>

              {/* PRIMARIA ÁREA 2: LECTURA */}
              <div className="rating-group">
                <div className="rating-header">
                  <span>2. Fluidez y Comprensión Lectora</span>
                  <span className={`rating-badge val-${readingComprehension}`}>{readingComprehension} / 5</span>
                </div>
                <input type="range" min="1" max="5" value={readingComprehension} style={{ width: '100%' }} onChange={(e) => setReadingComprehension(Number(e.target.value))} />
                <div style={{ fontSize: '0.78rem', color: 'var(--primary-900)', marginTop: '0.35rem', fontStyle: 'italic', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  {getReadingDescriptor(readingComprehension)}
                </div>
              </div>

              {/* PRIMARIA ÁREA 3: MATEMÁTICAS */}
              <div className="rating-group">
                <div className="rating-header">
                  <span>3. Razonamiento Lógico-Matemático y Problemas</span>
                  <span className={`rating-badge val-${mathReasoning}`}>{mathReasoning} / 5</span>
                </div>
                <input type="range" min="1" max="5" value={mathReasoning} style={{ width: '100%' }} onChange={(e) => setMathReasoning(Number(e.target.value))} />
                <div style={{ fontSize: '0.78rem', color: 'var(--primary-900)', marginTop: '0.35rem', fontStyle: 'italic', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  {getMathDescriptor(mathReasoning)}
                </div>
              </div>

              {/* PRIMARIA ÁREA 4: RITMO Y FINALIZACIÓN */}
              <div className="rating-group">
                <div className="rating-header">
                  <span>4. Ritmo de Trabajo y Finalización de Tareas</span>
                  <span className={`rating-badge val-${taskPaceAndCompletion}`}>{taskPaceAndCompletion} / 5</span>
                </div>
                <input type="range" min="1" max="5" value={taskPaceAndCompletion} style={{ width: '100%' }} onChange={(e) => setTaskPaceAndCompletion(Number(e.target.value))} />
                <div style={{ fontSize: '0.78rem', color: 'var(--primary-900)', marginTop: '0.35rem', fontStyle: 'italic', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  {getTaskPaceDescriptor(taskPaceAndCompletion)}
                </div>
              </div>

              {/* PRIMARIA ÁREA 5: IMPULSIVIDAD Y CONDUCTA */}
              <div className="rating-group">
                <div className="rating-header">
                  <span>5. Autonomía, Conducta y Control de Impulsividad</span>
                  <span className={`rating-badge val-${impulsivityAndAutonomy}`}>{impulsivityAndAutonomy} / 5</span>
                </div>
                <input type="range" min="1" max="5" value={impulsivityAndAutonomy} style={{ width: '100%' }} onChange={(e) => setImpulsivityAndAutonomy(Number(e.target.value))} />
                <div style={{ fontSize: '0.78rem', color: 'var(--primary-900)', marginTop: '0.35rem', fontStyle: 'italic', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  {getImpulsivityDescriptor(impulsivityAndAutonomy)}
                </div>
              </div>

              {/* PRIMARIA ÁREA 6: GESTIÓN EMOCIONAL */}
              <div className="rating-group">
                <div className="rating-header">
                  <span>6. Gestión Emocional y Relación con Compañeros</span>
                  <span className={`rating-badge val-${emotionalAndPeerRel}`}>{emotionalAndPeerRel} / 5</span>
                </div>
                <input type="range" min="1" max="5" value={emotionalAndPeerRel} style={{ width: '100%' }} onChange={(e) => setEmotionalAndPeerRel(Number(e.target.value))} />
                <div style={{ fontSize: '0.78rem', color: 'var(--primary-900)', marginTop: '0.35rem', fontStyle: 'italic', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  {getEmotionalDescriptor(emotionalAndPeerRel)}
                </div>
              </div>
            </>
          )}
        </div>

        {/* BLOQUE 3: AYUDAS PREVIAS PROBADAS EN CLASE */}
        <div style={{ background: '#f8fafc', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', marginBottom: '1.25rem' }}>
          <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-800)', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Clock size={17} /> 3. Ayudas y Medidas Previas Probadas en Clase ({stage === 'INFANTIL' ? 'Infantil' : 'Primaria'})
          </h4>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
            Indica qué apoyos específicos has intentado ya en el aula antes de formalizar la solicitud de valoración.
          </p>

          <div className="form-group">
            <label className="form-label">1. ¿Cuánto tiempo llevas aplicando apoyos en el aula? *</label>
            <select className="select-input" value={measuresDuration} onChange={(e) => setMeasuresDuration(e.target.value as any)}>
              <option value="MENOS_1_MES">Menos de 1 mes (Periodo inicial de observación)</option>
              <option value="1_A_2_MESES">Entre 1 y 2 meses (Tiempo recomendado)</option>
              <option value="MAS_2_MESES">Más de 2 meses (Dificultades persistentes)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">2. ¿Qué ayudas concretas has probado en clase? (Marca las aplicadas) *</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginTop: '0.35rem' }}>
              {(stage === 'INFANTIL' ? availableMeasuresInfantil : availableMeasuresPrimaria).map(measure => {
                const checked = appliedMeasuresList.includes(measure);
                return (
                  <label key={measure} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ffffff', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.82rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleMeasure(measure)}
                      style={{ width: '16px', height: '16px' }}
                    />
                    {measure}
                  </label>
                );
              })}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">3. ¿Qué resultado han dado esas ayudas en el aula? *</label>
            <select className="select-input" value={measuresResult} onChange={(e) => setMeasuresResult(e.target.value as any)}>
              <option value="MEJORIA_LEVE_PERSISTE_DIFICULTAD">Ha mejorado algo pero persiste una dificultad importante</option>
              <option value="INSUFICIENTE">No han sido suficientes; sigue sin avanzar al ritmo de clase</option>
              <option value="BLOQUEO_PERSISTENTE">Persiste el bloqueo y la desregulación conductual</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Observaciones adicionales sobre la evolución del alumno/a</label>
            <input
              type="text"
              className="input-text"
              placeholder={stage === 'INFANTIL' ? "Ej: El uso de pictogramas le ayuda en transiciones pero en asamblea sigue necesitando contención..." : "Ej: Sentarle delante reduce distracciones pero al escribir controles sigue necesitando mucho más tiempo..."}
              value={measuresObservations}
              onChange={(e) => setMeasuresObservations(e.target.value)}
            />
          </div>
        </div>

        {/* BLOQUE 4: AUTOPERCEPCIÓN Y VOZ DEL ALUMNO/A */}
        <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #86efac', marginBottom: '1.25rem' }}>
          <h4 style={{ fontSize: '0.9rem', color: '#166534', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <User size={16} /> 4. Percepción del Alumno/a e Interacción en Tutoría
          </h4>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Nivel de dificultad que manifiesta el alumno/a *</label>
              <select className="select-input" value={perceivedDifficulty} onChange={(e) => setPerceivedDifficulty(e.target.value as any)}>
                <option value="NINGUNA">No percibe ninguna dificultad ("A mí todo me resulta fácil")</option>
                <option value="LEVE">Percibe dificultad leve ("A veces me cuesta un poco")</option>
                <option value="MODERADA">Percibe dificultad moderada ("Me cuesta bastante seguir el ritmo")</option>
                <option value="ALTA">Percibe gran frustración ("Me siento muy agobiado/a en clase")</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Motivación y actitud hacia el colegio *</label>
              <select className="select-input" value={schoolMotivation} onChange={(e) => setSchoolMotivation(e.target.value as any)}>
                <option value="ALTA">Alta (Viene contento/a y participa activamente)</option>
                <option value="MEDIA">Media (Acude con normalidad)</option>
                <option value="BAJA">Baja (Muestra desgana, llanto al entrar o rechazo)</option>
              </select>
            </div>
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Actividades donde se siente más cómodo/a</label>
              <input type="text" className="input-text" value={favoriteSubjects} onChange={(e) => setFavoriteSubjects(e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Actividades que le resultan más difíciles o frustrantes</label>
              <input type="text" className="input-text" value={hardestSubjects} onChange={(e) => setHardestSubjects(e.target.value)} />
            </div>
          </div>
        </div>

        {/* BLOQUE 5: CONTEXTO FAMILIAR */}
        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '1.25rem' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--primary-800)', marginBottom: '0.75rem' }}>
            👪 5. Contexto Familiar e Informes Previos
          </h4>

          <div className="grid-2" style={{ marginBottom: '0.85rem' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">¿Entrevista realizada con la familia? *</label>
              <select className="select-input" value={familyMeetingDone ? 'SI' : 'NO'} onChange={(e) => setFamilyMeetingDone(e.target.value === 'SI')}>
                <option value="SI">Sí, entrevista informativa realizada con la familia</option>
                <option value="NO">No, pendiente de tutoría</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Conformidad / Acuerdo de la familia *</label>
              <select className="select-input" value={familyAgreement} onChange={(e) => setFamilyAgreement(e.target.value as any)}>
                <option value="TOTAL_ACUERDO">De acuerdo (Disposición total y consentimiento firmado)</option>
                <option value="CONFORMIDAD_PARCIAL">Conformidad con dudas o inquietud</option>
                <option value="RESISTENCIA_FAMILIAR">Resistencia / Reticencia familiar inicial</option>
                <option value="PENDIENTE_REUNION">Pendiente de presentar propuesta en tutoría</option>
              </select>
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '0.85rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '0.75rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={externalAssessmentDone}
                onChange={(e) => setExternalAssessmentDone(e.target.checked)}
                style={{ width: '18px', height: '18px' }}
              />
              ¿La familia dispone de informes externos? ({stage === 'INFANTIL' ? 'Atención Temprana / CDIAT, Neuropediatra, Logopeda' : 'Neuropediatra, Psicólogo privado, Logopeda'})
            </label>

            {externalAssessmentDone && (
              <div style={{ marginTop: '0.5rem' }}>
                <input
                  type="text"
                  className="input-text"
                  placeholder={stage === 'INFANTIL' ? "Detalle de informes (ej: Informe de Atención Temprana CDIAT / Valoración Logopédica)" : "Detalle de informes (ej: Informe Neuropediátrico del Hospital)"}
                  value={externalAssessmentDetails}
                  onChange={(e) => setExternalAssessmentDetails(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>

        {/* PREDICCIÓN DE TRIAJE EN TIEMPO REAL */}
        <div style={{ background: '#f0fdfa', border: '1px solid #14b8a6', borderRadius: 'var(--radius-md)', padding: '0.9rem', marginBottom: '1.25rem' }}>
          <div style={{ fontWeight: 700, color: 'var(--primary-800)', fontSize: '0.85rem' }}>
            ✨ Predicción Clínica del Gabinete: {currentTriage.riskProfileTitle}
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-main)', marginTop: '0.25rem' }}>
            {currentTriage.explanation}
          </p>
          <div style={{ fontSize: '0.78rem', color: 'var(--primary-700)', fontWeight: 600, marginTop: '0.35rem' }}>
            🧪 Batería Psicométrica de Etapa Sugerida: {currentTriage.recommendedTests.filter(t => t.recommended).map(t => t.code).join(', ')}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <button type="submit" className="btn btn-accent" style={{ padding: '0.75rem 1.5rem', width: '100%' }}>
            <Send size={18} /> Enviar Solicitud de Valoración ({stage === 'INFANTIL' ? '2º Ciclo Infantil' : 'Primaria'})
          </button>
        </div>
      </form>
    </div>
  );
};
