import React, { useState } from 'react';
import { ReferralCase, CaseStatus, CasePriority, ActionPlanGuidelines } from '../types';
import { Filter, FileText, Edit3, Check, Baby, School, ShieldCheck, RefreshCw, Trash2, AlertTriangle, Sparkles, Printer, FileCheck2, Stethoscope } from 'lucide-react';

interface CounselorDashboardProps {
  cases: ReferralCase[];
  onUpdateCase: (updatedCase: ReferralCase) => void;
  onDeleteCase?: (caseId: string) => void;
  onSelectCase: (c: ReferralCase) => void;
  onOpenMedicalReport?: (c: ReferralCase) => void;
  onOpenMedicalObs?: (c: ReferralCase) => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

const CLINICAL_TEMPLATES: Record<string, {
  label: string;
  category: string;
  specificNeed: string;
  adaptation: 'No Significativa (ACNS)' | 'Significativa (ACS)' | 'Enriquecimiento' | 'Pautas Ordinarias';
  ptHours: number;
  plan: ActionPlanGuidelines;
}> = {
  TDAH: {
    label: '⚡ TDAH / Atención',
    category: 'ACNEAE - TDAH y Funciones Ejecutivas',
    specificNeed: 'TDAH (Déficit de Atención con/sin Hiperactividad)',
    adaptation: 'No Significativa (ACNS)',
    ptHours: 2,
    plan: {
      generalGoal: 'Potenciar la atención sostenida, la autorregulación ejecutiva y la finalización secuencial de tareas en el aula.',
      methodologicalAdaptations: [
        'Fraccionar las tareas largas y exámenes en bloques cortos y secuenciales.',
        'Combinar instrucciones verbales breves con apoyo visual en pizarra o mesa.',
        'Supervisar la agenda escolar y verificar la comprensión del enunciado antes de iniciar.'
      ],
      environmentalAdaptations: [
        'Ubicación en primera fila, cerca del docente y lejos de ventanas o zonas de paso.',
        'Permitir pequeños desplazamientos funcionales (repartir material, borrar pizarra) para canalizar la inquietud motora.'
      ],
      evaluationAdaptations: [
        'Ampliación del 25-35% de tiempo en controles y pruebas escritas.',
        'Subrayar en negrita las palabras clave y verbos de acción en los exámenes.',
        'Realizar lectura previa guiada de las preguntas antes de comenzar la prueba.'
      ],
      emotionalTips: [
        'Refuerzo positivo inmediato ante el esfuerzo y el autocontrol.',
        'Evitar reprimendas públicas por despistes; emplear señales privadas acordadas con el alumno/a.'
      ],
      ptHoursPerWeek: 2
    }
  },
  DISLEXIA: {
    label: '📖 Dislexia / DEA',
    category: 'ACNEAE - Dificultades Específicas de Aprendizaje (DEA)',
    specificNeed: 'Dislexia / Dificultad Específica de Lectoescritura',
    adaptation: 'No Significativa (ACNS)',
    ptHours: 3,
    plan: {
      generalGoal: 'Reforzar la conciencia fonológica, la fluidez lectora y garantizar que la dificultad lectoescritora no penalice la evaluación de contenidos.',
      methodologicalAdaptations: [
        'No forzar la lectura en voz alta en público sin preparación previa del texto.',
        'Facilitar esquemas visuales, mapas conceptuales y tipografía clara (Arial/Verdana 12-14pt, interlineado 1.5).',
        'Reducir la carga de copiado mecánico de pizarra o enunciados largos.'
      ],
      environmentalAdaptations: [
        'Ubicación cercana al profesor para supervisión silenciosa de la comprensión lectora.',
        'Permitir el uso de guía de lectura o regla para no saltar de línea.'
      ],
      evaluationAdaptations: [
        'No penalizar las faltas de ortografía natural o arbitraria en áreas no lingüísticas.',
        'Lectura oral de todos los enunciados del examen por parte del docente.',
        'Complementar o verificar oralmente aquellas respuestas escritas que resulten incompletas.'
      ],
      emotionalTips: [
        'Valorar el contenido y el razonamiento oral por encima de la forma ortográfica.',
        'Visibilizar sus fortalezas en creatividad, expresión oral o razonamiento.'
      ],
      ptHoursPerWeek: 3
    }
  },
  AACC: {
    label: '🌟 Altas Capacidades (AACC)',
    category: 'ACNEAE - Altas Capacidades Intelectuales',
    specificNeed: 'Altas Capacidades Intelectuales (AACC) / Sobredotación',
    adaptation: 'Enriquecimiento',
    ptHours: 0,
    plan: {
      generalGoal: 'Prevenir la desmotivación escolar mediante enriquecimiento curricular horizontal, retos de investigación y aprendizaje basado en proyectos.',
      methodologicalAdaptations: [
        'Compactar contenidos ya dominados evitando la repetición mecánica de ejercicios.',
        'Proponer retos de profundización, pensamiento divergente y proyectos interdisciplinares.',
        'Fomentar la autonomía investigadora y el uso de fuentes avanzadas.'
      ],
      environmentalAdaptations: [
        'Rincón o carpeta de ampliación disponible al finalizar las tareas ordinarias.',
        'Agrupamientos flexibles y tutoría entre iguales cuidando que no se convierta en una carga.'
      ],
      evaluationAdaptations: [
        'Valorar la originalidad de los planteamientos, la argumentación crítica y los proyectos de investigación.',
        'Permitir formatos alternativos de presentación de saberes (exposiciones, maquetas, ensayos).'
      ],
      emotionalTips: [
        'Acompañar la gestión del perfeccionismo y la tolerancia al error.',
        'Cuidar la integración socioemocional con su grupo de iguales.'
      ],
      ptHoursPerWeek: 0
    }
  },
  TEA: {
    label: '🧩 TEA / Espectro Autista',
    category: 'ACNEAE - Apoyo Específico (PT)',
    specificNeed: 'Trastorno del Espectro Autista (TEA)',
    adaptation: 'No Significativa (ACNS)',
    ptHours: 3,
    plan: {
      generalGoal: 'Proporcionar predictibilidad ambiental, estructuración visual de rutinas y apoyo en la regulación sensorial y habilidades pragmáticas.',
      methodologicalAdaptations: [
        'Anticipar con antelación cualquier cambio de rutina, excursión o sustitución docente.',
        'Emplear lenguaje literal, directo y claro, evitando dobles sentidos o ironías.',
        'Secuenciar las tareas con agendas visuales o listas de verificación paso a paso.'
      ],
      environmentalAdaptations: [
        'Entorno estructurado con baja sobrecarga sensorial (ruido y estímulos visuales).',
        'Acordar un espacio tranquilo de regulación emocional en caso de saturación.'
      ],
      evaluationAdaptations: [
        'Exámenes con formato estructurado, preguntas directas y ejemplos resueltos.',
        'Tiempo adicional y posibilidad de realizar pruebas en entorno tranquilo con el PT.'
      ],
      emotionalTips: [
        'Mediar positivamente en los juegos de patio y trabajos en equipo.',
        'Utilizar sus centros de interés para conectar con los aprendizajes curriculares.'
      ],
      ptHoursPerWeek: 3
    }
  },
  TEL: {
    label: '🗣️ TEL / Lenguaje',
    category: 'ACNEAE - Trastornos del Lenguaje y la Comunicación',
    specificNeed: 'Trastorno Específico del Lenguaje (TEL / TDL)',
    adaptation: 'No Significativa (ACNS)',
    ptHours: 3,
    plan: {
      generalGoal: 'Estimular la comprensión y expresión morfosintáctica y léxica apoyando el acceso al currículo mediante canal visual.',
      methodologicalAdaptations: [
        'Hablar de forma pausada asegurando el contacto visual y apoyando la explicación con imágenes o esquemas.',
        'Modelar de forma natural las expresiones del alumno/a (reformulación positiva sin corrección brusca).',
        'Dar tiempo extra de respuesta oral sin completar sus frases prematuramente.'
      ],
      environmentalAdaptations: [
        'Ubicación cercana al docente para facilitar la discriminación auditiva y visual.',
        'Diccionario visual de vocabulario clave de cada unidad didáctica.'
      ],
      evaluationAdaptations: [
        'Simplificar la complejidad sintáctica de los enunciados de examen.',
        'Priorizar preguntas de relacionar, opción múltiple o esquemas frente a redacciones extensas.'
      ],
      emotionalTips: [
        'Garantizar un clima de confianza donde se sienta seguro/a al participar oralmente.'
      ],
      ptHoursPerWeek: 3
    }
  },
  ORDINARIO: {
    label: '📚 Refuerzo Ordinario',
    category: 'ACNEAE - Apoyo Ordinario',
    specificNeed: 'Refuerzo Pedagógico en Competencias Básicas',
    adaptation: 'Pautas Ordinarias',
    ptHours: 0,
    plan: {
      generalGoal: 'Consolidar los aprendizajes instrumentales básicos y los hábitos de estudio mediante medidas ordinarias de atención a la diversidad.',
      methodologicalAdaptations: [
        'Supervisión cercana del trabajo diario en el aula y revisión de agenda.',
        'Explicación individualizada de refuerzo tras la exposición general al grupo.',
        'Uso de apoyos manipulativos y ejemplos prácticos.'
      ],
      environmentalAdaptations: [
        'Ubicación estratégica cerca del docente y con compañero/a tutor de referencia.'
      ],
      evaluationAdaptations: [
        'Verificación previa de la comprensión de los enunciados de control.',
        'Flexibilidad de tiempo (+20%) para revisar la prueba antes de entregar.'
      ],
      emotionalTips: [
        'Refuerzo positivo del progreso individual para afianzar la autoestima escolar.'
      ],
      ptHoursPerWeek: 0
    }
  }
};

export const CounselorDashboard: React.FC<CounselorDashboardProps> = ({
  cases = [],
  onUpdateCase,
  onDeleteCase,
  onSelectCase,
  onOpenMedicalReport,
  onOpenMedicalObs,
  onRefresh,
  isRefreshing = false
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [filterPriority, setFilterPriority] = useState<string>('ALL');
  const [filterStage, setFilterStage] = useState<string>('ALL');
  const [selectedCaseForAction, setSelectedCaseForAction] = useState<ReferralCase | null>(null);
  const [caseToDelete, setCaseToDelete] = useState<ReferralCase | null>(null);
  const [isDeletingCase, setIsDeletingCase] = useState<boolean>(false);
  const [caseForFamilyAuth, setCaseForFamilyAuth] = useState<ReferralCase | null>(null);

  // Formulario manual del Orientador (técnico, no automatizado)
  const [counselorNotes, setCounselorNotes] = useState<string>('');
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [newStatus, setNewStatus] = useState<CaseStatus>('EN_EVALUACION');
  const [assignedPriority, setAssignedPriority] = useState<CasePriority>('MEDIA');

  // Campos de incorporación al Censo NEAE al dictaminar
  const [dictamenCategory, setDictamenCategory] = useState<string>('ACNEAE - Dificultades Específicas de Aprendizaje (DEA)');
  const [dictamenSpecificNeed, setDictamenSpecificNeed] = useState<string>('TDAH / Dificultad de Atención');
  const [dictamenAdaptation, setDictamenAdaptation] = useState<'No Significativa (ACNS)' | 'Significativa (ACS)' | 'Enriquecimiento' | 'Pautas Ordinarias'>('No Significativa (ACNS)');
  const [dictamenPtTeacher, setDictamenPtTeacher] = useState<string>('');
  const [dictamenPtHours, setDictamenPtHours] = useState<number>(0);

  // Pautas metodológicas editables en texto (una por línea)
  const [generalGoal, setGeneralGoal] = useState<string>('Intervención y apoyo metodológico individualizado en el aula ordinaria.');
  const [methodologicalText, setMethodologicalText] = useState<string>(
    'Fraccionamiento de instrucciones complejas en pasos secuenciales.\nAmpliación del 25% de tiempo en pruebas y controles de evaluación.\nUso de apoyos visuales y esquemas resumen en la mesa de trabajo.'
  );
  const [environmentalText, setEnvironmentalText] = useState<string>('Ubicación en primera fila libre de distracciones visuales.');
  const [evaluationText, setEvaluationText] = useState<string>('Lectura previa guiada de enunciados de examen.');
  const [emotionalText, setEmotionalText] = useState<string>('Refuerzo positivo contingente ante el esfuerzo y perseverancia.');

  const availableTests = [
    { code: 'WISC-V', name: 'Escala Wechsler de Inteligencia (6-16 años)', area: 'Cognitiva' },
    { code: 'WPPSI-IV', name: 'Escala Wechsler Infantil (2:6 - 7:7 años)', area: 'Cognitiva Infantil' },
    { code: 'PROLEC-R', name: 'Batería de Evaluación de Procesos Lectores', area: 'Lectura' },
    { code: 'PROESC', name: 'Batería de Evaluación de Procesos de Escritura', area: 'Escritura' },
    { code: 'EDAH', name: 'Escala de Evaluación del TDAH', area: 'Atención/Hiperactividad' },
    { code: 'd2', name: 'Test de Atención Selectiva y Concentración', area: 'Atención Sostenida' },
    { code: 'PLON-R', name: 'Prueba de Lenguaje Oral Navarra', area: 'Lenguaje Oral Infantil' },
    { code: 'MSCA', name: 'Escalas McCarthy de Aptitudes y Psicomotricidad', area: 'Desarrollo Infantil' },
    { code: 'BADyG', name: 'Batería de Aptitudes Diferenciales', area: 'Aptitudes Generales' },
    { code: 'SENA', name: 'Sistema de Evaluación de Niños y Adolescentes', area: 'Socioemocional' }
  ];

  const filteredCases = (cases || []).filter(c => {
    if (!c) return false;
    if (filterStatus !== 'ALL' && c.status !== filterStatus) return false;
    if (filterPriority !== 'ALL' && c.priority !== filterPriority) return false;
    if (filterStage !== 'ALL' && c.stage !== filterStage) return false;
    return true;
  });

  const applyClinicalTemplate = (key: string) => {
    const tpl = CLINICAL_TEMPLATES[key];
    if (!tpl) return;
    setDictamenCategory(tpl.category);
    setDictamenSpecificNeed(tpl.specificNeed);
    setDictamenAdaptation(tpl.adaptation);
    setDictamenPtHours(tpl.ptHours);
    if (tpl.ptHours > 0 && !dictamenPtTeacher) {
      setDictamenPtTeacher('Daniel Asenjo (PT)');
    } else if (tpl.ptHours === 0) {
      setDictamenPtTeacher('');
    }
    setGeneralGoal(tpl.plan.generalGoal);
    setMethodologicalText(tpl.plan.methodologicalAdaptations.join('\n'));
    setEnvironmentalText(tpl.plan.environmentalAdaptations.join('\n'));
    setEvaluationText(tpl.plan.evaluationAdaptations.join('\n'));
    setEmotionalText(tpl.plan.emotionalTips.join('\n'));
  };

  const handleOpenActionModal = (c: ReferralCase) => {
    setSelectedCaseForAction(c);
    setCounselorNotes(c.counselorNotes || '');
    setSelectedTests(c.assignedTests || []);
    setNewStatus(c.status === 'PENDIENTE_REVISION' ? 'EN_EVALUACION' : c.status);
    setAssignedPriority(c.priority || 'MEDIA');

    // Si es una solicitud de Altas Capacidades, preseleccionar plantilla AACC si aún no tenía plan
    if (c.questionnaire?.isHighCapacityEvaluation && !c.actionPlan) {
      applyClinicalTemplate('AACC');
    } else if (c.actionPlan) {
      setDictamenCategory(c.dictamenCategory || 'ACNEAE - Apoyo Educativo');
      setDictamenSpecificNeed(c.dictamenSpecificNeed || 'Necesidades Específicas de Apoyo Educativo');
      setDictamenAdaptation(c.dictamenAdaptation || 'No Significativa (ACNS)');
      setDictamenPtTeacher(c.dictamenPtTeacher || '');
      setDictamenPtHours(c.actionPlan.ptHoursPerWeek || 0);
      setGeneralGoal(c.actionPlan.generalGoal || '');
      setMethodologicalText((c.actionPlan.methodologicalAdaptations || []).join('\n'));
      setEnvironmentalText((c.actionPlan.environmentalAdaptations || []).join('\n'));
      setEvaluationText((c.actionPlan.evaluationAdaptations || []).join('\n'));
      setEmotionalText((c.actionPlan.emotionalTips || []).join('\n'));
    } else {
      applyClinicalTemplate('TDAH');
    }
  };

  const handleTestToggle = (code: string) => {
    setSelectedTests(prev =>
      prev.includes(code) ? prev.filter(t => t !== code) : [...prev, code]
    );
  };

  const splitLines = (txt: string) => txt.split('\n').map(l => l.trim()).filter(Boolean);

  const handleSaveDecision = () => {
    if (!selectedCaseForAction) return;

    const builtPlan: ActionPlanGuidelines = {
      generalGoal: generalGoal.trim() || 'Intervención y apoyo metodológico individualizado en el aula ordinaria.',
      methodologicalAdaptations: splitLines(methodologicalText),
      environmentalAdaptations: splitLines(environmentalText),
      evaluationAdaptations: splitLines(evaluationText),
      emotionalTips: splitLines(emotionalText),
      ptHoursPerWeek: dictamenPtTeacher ? dictamenPtHours : 0
    };

    const updated: ReferralCase = {
      ...selectedCaseForAction,
      status: newStatus,
      priority: assignedPriority,
      counselorNotes: counselorNotes.trim(),
      assignedTests: selectedTests,
      decisionDate: new Date().toISOString().split('T')[0],
      actionPlan: newStatus === 'DICTAMINADO_CON_PAUTAS' ? builtPlan : selectedCaseForAction.actionPlan,
      dictamenCategory: newStatus === 'DICTAMINADO_CON_PAUTAS' ? dictamenCategory : selectedCaseForAction.dictamenCategory,
      dictamenSpecificNeed: newStatus === 'DICTAMINADO_CON_PAUTAS' ? dictamenSpecificNeed : selectedCaseForAction.dictamenSpecificNeed,
      dictamenAdaptation: newStatus === 'DICTAMINADO_CON_PAUTAS' ? dictamenAdaptation : selectedCaseForAction.dictamenAdaptation,
      dictamenPtTeacher: newStatus === 'DICTAMINADO_CON_PAUTAS' ? dictamenPtTeacher : selectedCaseForAction.dictamenPtTeacher
    };

    onUpdateCase(updated);
    setSelectedCaseForAction(null);
  };

  const handleOpenDeleteModal = (c: ReferralCase) => {
    setCaseToDelete(c);
    setIsDeletingCase(true);
  };

  const handleConfirmDeleteCase = () => {
    if (!caseToDelete || !onDeleteCase) return;
    onDeleteCase(caseToDelete.id);
    setCaseToDelete(null);
    setIsDeletingCase(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header Banner */}
      <div className="no-print" style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
        color: 'white',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
            <ShieldCheck size={18} color="#a5b4fc" />
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#a5b4fc', padding: '0.2rem 0.65rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
              Gabinete de Orientación • Acceso Exclusivo Autorizado
            </span>
          </div>
          <h2 style={{ fontSize: '1.55rem', color: 'white' }}>
            Bandeja de Derivaciones y Dictámenes Psicopedagógicos
          </h2>
          <p style={{ opacity: 0.85, fontSize: '0.85rem' }}>
            Gestión técnica y colegiada de solicitudes de valoración de <strong>Infantil y Primaria</strong>. La asignación de pruebas y el dictamen corresponden exclusivamente al criterio del orientador.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>{(cases || []).filter(c => c?.status === 'PENDIENTE_REVISION').length}</div>
            <div style={{ fontSize: '0.72rem', opacity: 0.8 }}>Por Dictaminar</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>{(cases || []).filter(c => c?.priority === 'ALTA' || c?.priority === 'URGENTE').length}</div>
            <div style={{ fontSize: '0.72rem', opacity: 0.8 }}>Prioridad Alta</div>
          </div>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="card no-print" style={{ padding: '1rem 1.25rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700 }}>
            <Filter size={16} /> Filtros Técnicos:
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Etapa:</span>
            <select className="select-input" style={{ width: 'auto', padding: '0.35rem 0.75rem', fontSize: '0.82rem' }} value={filterStage} onChange={(e) => setFilterStage(e.target.value)}>
              <option value="ALL">Todas las Etapas</option>
              <option value="INFANTIL">2º Ciclo Infantil (3-5 años)</option>
              <option value="PRIMARIA">Educación Primaria (1º-6º)</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Estado:</span>
            <select className="select-input" style={{ width: 'auto', padding: '0.35rem 0.75rem', fontSize: '0.82rem' }} value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="ALL">Todos los Estados</option>
              <option value="PENDIENTE_REVISION">Pendientes de Revisión</option>
              <option value="EN_EVALUACION">En Evaluación</option>
              <option value="DICTAMINADO_CON_PAUTAS">Dictaminados con Pautas</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Prioridad:</span>
            <select className="select-input" style={{ width: 'auto', padding: '0.35rem 0.75rem', fontSize: '0.82rem' }} value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
              <option value="ALL">Todas las Prioridades</option>
              <option value="URGENTE">Urgente</option>
              <option value="ALTA">Alta</option>
              <option value="MEDIA">Media</option>
              <option value="BAJA">Baja</option>
            </select>
          </div>

          {onRefresh && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onRefresh}
              disabled={isRefreshing}
              style={{ marginLeft: 'auto', padding: '0.35rem 0.75rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              title="Sincronizar con la nube (Firestore)"
            >
              <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
              {isRefreshing ? 'Sincronizando...' : 'Actualizar Bandeja'}
            </button>
          )}
        </div>
      </div>

      {/* Cases List */}
      <div className="card no-print">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.1rem', margin: 0 }}>
            Expedientes en Tramitación ({filteredCases.length})
          </h3>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Total en sistema: {cases.length} expediente(s)
          </span>
        </div>

        {filteredCases.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc', borderRadius: '10px', border: '1px dashed var(--border-light)' }}>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
              No hay solicitudes pendientes o coincidentes con los filtros
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 1rem auto' }}>
              Cuando los tutores y maestros cumplimenten y envíen solicitudes de derivación psicopedagógica, aparecerán aquí automáticamente sincronizadas en la nube.
            </p>
            {onRefresh && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onRefresh}
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
              >
                <RefreshCw size={14} style={{ marginRight: '0.35rem' }} /> Comprobar nuevas derivaciones
              </button>
            )}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredCases.map((c) => {
            const isInfantil = c.stage === 'INFANTIL';
            const priorityClass = (c.priority || 'MEDIA').toLowerCase();
            const statusLabel = (c.status || 'PENDIENTE_REVISION').replace(/_/g, ' ');
            const reasonText = c.questionnaire?.mainReason || 'Sin motivo registrado.';

            return (
              <div key={c.id} style={{
                border: `1px solid ${c.status === 'PENDIENTE_REVISION' ? 'var(--primary-500)' : 'var(--border-light)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem 1.25rem',
                background: c.status === 'PENDIENTE_REVISION' ? '#f0fdfa' : '#ffffff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ flex: '1 1 380px' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                    <span style={{ background: isInfantil ? '#fef3c7' : '#e0e7ff', color: isInfantil ? '#92400e' : '#3730a3', padding: '0.15rem 0.45rem', borderRadius: '10px', fontSize: '0.72rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                      {isInfantil ? <Baby size={13} /> : <School size={13} />}
                      {isInfantil ? 'Infantil' : 'Primaria'}
                    </span>
                    {c.questionnaire?.isHighCapacityEvaluation && (
                      <span style={{ background: '#fef3c7', color: '#92400e', border: '1px solid #f59e0b', padding: '0.12rem 0.5rem', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 700 }}>
                        🌟 Evaluación AACC
                      </span>
                    )}
                    <span className={`badge badge-${priorityClass}`}>{c.priority || 'MEDIA'}</span>
                    <span className={`status-badge status-${c.status || 'PENDIENTE_REVISION'}`}>
                      {statusLabel}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                      ID: {c.id.slice(0, 8)}... • {c.dateSubmitted}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    {c.studentName} <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>({c.grade})</span>
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                      <strong>Docente solicitante:</strong> {c.teacherName} ({c.createdByEmail})
                    </p>
                    {c.medicalObservations && (
                      <span style={{ fontSize: '0.70rem', background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', padding: '0.12rem 0.5rem', borderRadius: '12px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Stethoscope size={11} /> Obs. médica por {c.medicalObservations.filledByTeacherName}
                      </span>
                    )}
                    {c.medicalReport?.isFinalized && (
                      <span style={{ fontSize: '0.70rem', background: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe', padding: '0.12rem 0.5rem', borderRadius: '12px', fontWeight: 700 }}>
                        ✓ Informe Médico Oficial
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: '0.85rem', color: '#334155', fontStyle: 'italic', background: 'rgba(255,255,255,0.7)', padding: '0.4rem 0.6rem', borderRadius: '6px', borderLeft: '3px solid var(--primary-600)' }}>
                    "{reasonText}"
                  </p>

                  {c.assignedTests && c.assignedTests.length > 0 && (
                    <div style={{ marginTop: '0.4rem', fontSize: '0.78rem', color: 'var(--primary-800)' }}>
                      <strong>Pruebas asignadas por Orientación:</strong> {c.assignedTests.join(', ')}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ padding: '0.45rem 0.75rem', fontSize: '0.78rem' }}
                    onClick={() => onSelectCase(c)}
                  >
                    <FileText size={14} /> Cuestionario
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ padding: '0.45rem 0.75rem', fontSize: '0.78rem', background: '#eff6ff', color: '#1e40af', borderColor: '#bfdbfe' }}
                    onClick={() => setCaseForFamilyAuth(c)}
                    title="Generar Hoja Oficial de Autorización Familiar para Evaluación Psicopedagógica"
                  >
                    <FileCheck2 size={14} /> Autorización Familia
                  </button>

                  {onOpenMedicalReport && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      style={{
                        padding: '0.45rem 0.75rem',
                        fontSize: '0.78rem',
                        background: c.medicalReport?.isFinalized ? '#ecfdf5' : '#f0fdfa',
                        color: c.medicalReport?.isFinalized ? '#047857' : '#0d9488',
                        borderColor: c.medicalReport?.isFinalized ? '#a7f3d0' : '#99f6e4',
                        fontWeight: 600
                      }}
                      onClick={() => onOpenMedicalReport(c)}
                      title="Redactar, editar y emitir informe formal para Neuropediatra o Pediatra"
                    >
                      <Stethoscope size={14} /> {c.medicalReport?.isFinalized ? 'Informe Médico ✓' : 'Informe Médico'}
                    </button>
                  )}

                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}
                    onClick={() => handleOpenActionModal(c)}
                  >
                    <Edit3 size={14} /> Dictaminar / Pruebas
                  </button>

                  {onDeleteCase && (
                    <button
                      type="button"
                      className="btn"
                      onClick={() => handleOpenDeleteModal(c)}
                      title="Eliminar solicitud de dictamen"
                      style={{
                        padding: '0.45rem 0.7rem',
                        fontSize: '0.78rem',
                        background: '#fee2e2',
                        color: '#b91c1c',
                        border: '1px solid #fca5a5',
                        borderRadius: 'var(--radius-md)'
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>

      {/* MODAL GESTIONAR DICTAMEN MANUAL ENRIQUECIDO */}
      {selectedCaseForAction && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-content" style={{ maxWidth: '780px', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', background: selectedCaseForAction.stage === 'INFANTIL' ? '#fef3c7' : '#e0e7ff', color: selectedCaseForAction.stage === 'INFANTIL' ? '#92400e' : '#3730a3', padding: '0.15rem 0.5rem', borderRadius: '10px', fontWeight: 700 }}>
                  {selectedCaseForAction.stage === 'INFANTIL' ? '🧸 Infantil' : '🎒 Primaria'}
                </span>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                  Valoración Técnica y Dictamen: {selectedCaseForAction.studentName} ({selectedCaseForAction.grade})
                </h3>
              </div>
              <button className="btn btn-secondary" onClick={() => setSelectedCaseForAction(null)} style={{ padding: '0.35rem' }}>✕</button>
            </div>

            <div className="grid-2" style={{ marginBottom: '0.85rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Estado de la Tramitación *</label>
                <select className="select-input" value={newStatus} onChange={(e) => setNewStatus(e.target.value as CaseStatus)}>
                  <option value="PENDIENTE_REVISION">Pendiente de Revisión</option>
                  <option value="EN_EVALUACION">Aceptar e Iniciar Evaluación Psicopedagógica</option>
                  <option value="DICTAMINADO_CON_PAUTAS">Dictaminar e Incorporar al Censo NEAE con Pautas</option>
                  <option value="OBSERVACION_AULA">Recomendar Periodo de Medidas Ordinarias Previas</option>
                  <option value="EVALUACION_RECHAZADA">Desestimar (Derivación prematura / Resuelta)</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Prioridad Asignada *</label>
                <select className="select-input" value={assignedPriority} onChange={(e) => setAssignedPriority(e.target.value as CasePriority)}>
                  <option value="URGENTE">Urgente</option>
                  <option value="ALTA">Alta</option>
                  <option value="MEDIA">Media</option>
                  <option value="BAJA">Baja</option>
                </select>
              </div>
            </div>

            {/* Asignación Manual de Baterías Psicométricas */}
            <div className="form-group">
              <label className="form-label">Selección Manual de Pruebas Psicométricas a Aplicar / Aplicadas:</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.35rem' }}>
                {availableTests.map(t => {
                  const isChecked = selectedTests.includes(t.code);
                  return (
                    <button
                      type="button"
                      key={t.code}
                      onClick={() => handleTestToggle(t.code)}
                      style={{
                        padding: '0.32rem 0.7rem',
                        borderRadius: '20px',
                        fontSize: '0.76rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        border: isChecked ? '1px solid var(--primary-600)' : '1px solid var(--border-light)',
                        background: isChecked ? 'var(--primary-100)' : '#ffffff',
                        color: isChecked ? 'var(--primary-900)' : 'var(--text-muted)'
                      }}
                    >
                      {isChecked ? '✓ ' : '+ '}{t.code} ({t.area})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dictamen Técnico Clínico */}
            <div className="form-group">
              <label className="form-label">Dictamen Técnico y Conclusiones Clínicas de Orientación *</label>
              <textarea
                rows={3}
                className="textarea-input"
                placeholder="Escribe las conclusiones psicopedagógicas, resultados de pruebas y síntesis diagnóstica..."
                value={counselorNotes}
                onChange={(e) => setCounselorNotes(e.target.value)}
              />
            </div>

            {/* BLOQUE EXPANDIBLE SI SE SELECCIONA "DICTAMINADO_CON_PAUTAS" */}
            {newStatus === 'DICTAMINADO_CON_PAUTAS' && (
              <div style={{ background: '#f0fdfa', border: '1.5px solid #5eead4', borderRadius: 'var(--radius-md)', padding: '1rem 1.15rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <h4 style={{ fontSize: '0.95rem', color: '#0f766e', display: 'flex', alignItems: 'center', gap: '0.35rem', margin: 0 }}>
                    <Sparkles size={16} /> Configuración de Alta Automática en Censo NEAE y Pautas de Aula
                  </h4>
                  <span style={{ fontSize: '0.72rem', background: '#ccfbf1', color: '#115e59', padding: '0.15rem 0.5rem', borderRadius: '10px', fontWeight: 700 }}>
                    Sincronización directa con Censo y PT
                  </span>
                </div>

                {/* Selector de Plantillas Rápidas */}
                <div style={{ marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#134e4a', display: 'block', marginBottom: '0.35rem' }}>
                    Cargar Plantilla Clínica de Pautas (1 clic):
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {Object.entries(CLINICAL_TEMPLATES).map(([key, tpl]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => applyClinicalTemplate(key)}
                        style={{
                          padding: '0.28rem 0.65rem',
                          borderRadius: '8px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          background: '#ffffff',
                          border: '1px solid #14b8a6',
                          color: '#0f766e',
                          cursor: 'pointer'
                        }}
                      >
                        {tpl.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Diagnóstico / Necesidad Específica (Censo)</label>
                    <input
                      type="text"
                      className="text-input"
                      value={dictamenSpecificNeed}
                      onChange={(e) => setDictamenSpecificNeed(e.target.value)}
                      placeholder="Ej: TDAH, Dislexia, Altas Capacidades..."
                    />
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Tipo de Adaptación Curricular</label>
                    <select
                      className="select-input"
                      value={dictamenAdaptation}
                      onChange={(e) => setDictamenAdaptation(e.target.value as any)}
                    >
                      <option value="No Significativa (ACNS)">No Significativa (ACNS)</option>
                      <option value="Significativa (ACS)">Significativa (ACS)</option>
                      <option value="Enriquecimiento">Programa de Enriquecimiento (AACC)</option>
                      <option value="Pautas Ordinarias">Pautas Ordinarias de Aula</option>
                    </select>
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Especialista PT Asignado</label>
                    <select
                      className="select-input"
                      value={dictamenPtTeacher}
                      onChange={(e) => {
                        setDictamenPtTeacher(e.target.value);
                        if (e.target.value && dictamenPtHours === 0) setDictamenPtHours(2);
                        if (!e.target.value) setDictamenPtHours(0);
                      }}
                    >
                      <option value="">Sin apoyo de PT (Seguimiento ordinario en aula)</option>
                      <option value="Daniel Asenjo (PT)">Daniel Asenjo (PT)</option>
                      <option value="María (PT)">María (PT)</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Horas Semanales de PT</label>
                    <input
                      type="number"
                      min={0}
                      max={10}
                      className="text-input"
                      value={dictamenPtHours}
                      onChange={(e) => setDictamenPtHours(Number(e.target.value))}
                      disabled={!dictamenPtTeacher}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '0.6rem' }}>
                  <label className="form-label" style={{ fontSize: '0.78rem' }}>Objetivo Pedagógico General</label>
                  <input
                    type="text"
                    className="text-input"
                    value={generalGoal}
                    onChange={(e) => setGeneralGoal(e.target.value)}
                  />
                </div>

                <div className="grid-2" style={{ gap: '0.75rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.76rem' }}>Pautas Metodológicas (1 por línea)</label>
                    <textarea
                      rows={3}
                      className="textarea-input"
                      style={{ fontSize: '0.8rem' }}
                      value={methodologicalText}
                      onChange={(e) => setMethodologicalText(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.76rem' }}>Adaptaciones de Evaluación (1 por línea)</label>
                    <textarea
                      rows={3}
                      className="textarea-input"
                      style={{ fontSize: '0.8rem' }}
                      value={evaluationText}
                      onChange={(e) => setEvaluationText(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setSelectedCaseForAction(null)}>Cancelar</button>
              <button type="button" className="btn btn-primary" onClick={handleSaveDecision}>
                <Check size={16} /> Guardar Dictamen Técnico
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE AUTORIZACIÓN FAMILIAR OFICIAL IMPRIMIBLE */}
      {caseForFamilyAuth && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-content" style={{ maxWidth: '760px', padding: '2rem', maxHeight: '92vh', overflowY: 'auto' }}>
            <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-light)' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--primary-700)', fontWeight: 700 }}>
                  Documento Oficial RGPD / LOPD-GDD
                </span>
                <h3 style={{ fontSize: '1.15rem', margin: 0 }}>
                  Autorización Familiar para Evaluación Psicopedagógica
                </h3>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button type="button" className="btn btn-primary" onClick={() => window.print()}>
                  <Printer size={15} /> Imprimir / Guardar PDF
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => setCaseForFamilyAuth(null)}>
                  Cerrar
                </button>
              </div>
            </div>

            {/* Contenido Imprimible Oficial */}
            <div className="family-auth-sheet" style={{ border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1.25rem 1.5rem', background: '#ffffff', color: '#0f172a', lineHeight: 1.45 }}>
              <div style={{ borderBottom: '2px solid #0d9488', paddingBottom: '0.5rem', marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <img 
                    src="/logo-colegio.png" 
                    alt="Colegio San Buenaventura" 
                    style={{ height: '42px', maxWidth: '160px', objectFit: 'contain' }} 
                  />
                  <div style={{ textAlign: 'right', flex: 1 }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#1e293b', fontWeight: 800 }}>
                      Colegio San Buenaventura • Madrid • Cód. 28009033
                    </div>
                    <div style={{ fontSize: '0.66rem', color: '#64748b' }}>
                      Gabinete de Orientación Psicopedagógica y Atención a la Diversidad
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                  <h2 style={{ fontSize: '1.12rem', color: '#0f172a', margin: '0.1rem 0', fontWeight: 800 }}>
                    AUTORIZACIÓN E INFORMACIÓN A LAS FAMILIAS PARA VALORACIÓN PSICOPEDAGÓGICA
                  </h2>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                    Expediente Ref: {caseForFamilyAuth.id.slice(0, 8).toUpperCase()} • Fecha de emisión: {new Date().toLocaleDateString('es-ES')}
                  </div>
                </div>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0.65rem 0.9rem', marginBottom: '0.75rem', fontSize: '0.82rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem 1rem' }}>
                  <div><strong>Alumno/a:</strong> {caseForFamilyAuth.studentName}</div>
                  <div><strong>Curso y Etapa:</strong> {caseForFamilyAuth.grade} ({caseForFamilyAuth.stage})</div>
                  <div><strong>Profesor/a Solicitante:</strong> {caseForFamilyAuth.teacherName}</div>
                  <div><strong>Modalidad:</strong> {caseForFamilyAuth.questionnaire?.isHighCapacityEvaluation ? 'Detección de Altas Capacidades (AACC)' : 'Valoración Psicopedagógica Ordinaria / NEAE'}</div>
                </div>
              </div>

              <p style={{ fontSize: '0.82rem', textAlign: 'justify', marginBottom: '0.65rem', lineHeight: 1.4 }}>
                Estimada familia: Desde el <strong>Equipo de Orientación y Gabinete Psicopedagógico del Colegio San Buenaventura</strong>, en coordinación con la tutoría de su hijo/a, les informamos de la propuesta para realizar una <strong>valoración psicopedagógica individualizada</strong> con el objetivo de conocer con mayor precisión su perfil de aprendizaje, fortalezas y necesidades educativas, a fin de ofrecerle la mejor respuesta pedagógica en el aula.
              </p>

              <div style={{ marginBottom: '0.75rem', fontSize: '0.80rem', background: '#f0fdfa', borderLeft: '3.5px solid #0d9488', padding: '0.5rem 0.85rem', borderRadius: '4px', lineHeight: 1.35 }}>
                <strong>Síntesis del motivo pedagógico de la valoración:</strong>
                <div style={{ fontStyle: 'italic', marginTop: '0.15rem', color: '#1e293b' }}>
                  "{caseForFamilyAuth.questionnaire?.mainReason}"
                </div>
                {caseForFamilyAuth.assignedTests && caseForFamilyAuth.assignedTests.length > 0 && (
                  <div style={{ marginTop: '0.25rem' }}>
                    <strong>Pruebas estandarizadas previstas:</strong> {caseForFamilyAuth.assignedTests.join(', ')}.
                  </div>
                )}
              </div>

              <div style={{ fontSize: '0.74rem', color: '#475569', textAlign: 'justify', marginBottom: '0.75rem', padding: '0.5rem 0.75rem', background: '#f8fafc', borderRadius: '4px', border: '1px solid #e2e8f0', lineHeight: 1.35 }}>
                <strong>Protección de Datos y Confidencialidad (RGPD / LOPD-GDD):</strong> Los datos obtenidos tendrán carácter estrictamente confidencial y uso exclusivamente educativo dentro del centro escolar conforme a la Ley Orgánica 3/2018 y normativa educativa vigente. Una vez concluida la valoración, la familia será citada a una entrevista de devolución para compartir las conclusiones y orientaciones.
              </div>

              <div style={{ border: '1.5px solid #64748b', borderRadius: '6px', padding: '0.75rem 0.9rem', marginBottom: '0.85rem', fontSize: '0.82rem', background: '#ffffff' }}>
                <p style={{ margin: '0 0 0.4rem 0', fontWeight: 700 }}>
                  DECLARACIÓN DE CONSENTIMIENTO INFORMADO FAMILIAR:
                </p>
                <p style={{ margin: '0 0 0.5rem 0' }}>
                  D./Dª ________________________________________________________, con DNI ____________________, en calidad de madre / padre / tutor legal del alumno/a <strong>{caseForFamilyAuth.studentName}</strong>:
                </p>
                <div style={{ display: 'flex', gap: '2.5rem', margin: '0.4rem 0 0.1rem 0', fontWeight: 700 }}>
                  <span>[ &nbsp; ] SÍ AUTORIZO la valoración psicopedagógica</span>
                  <span>[ &nbsp; ] NO AUTORIZO la valoración</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginTop: '1.25rem', paddingTop: '0.5rem', fontSize: '0.80rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ height: '38px' }}></div>
                  <div style={{ borderTop: '1px solid #64748b', paddingTop: '0.3rem' }}>
                    <strong>Firma de la Madre / Padre / Tutor Legal</strong>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ height: '38px' }}></div>
                  <div style={{ borderTop: '1px solid #64748b', paddingTop: '0.3rem' }}>
                    <strong>Gabinete de Orientación • Col. San Buenaventura</strong>
                    <div style={{ fontSize: '0.70rem', color: '#64748b' }}>Fdo.: Mª Belén Hernando Martín (Orientadora)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE CONFIRMACIÓN DE BORRADO DE SOLICITUD DE DICTAMEN */}
      {isDeletingCase && caseToDelete && (
        <div className="modal-overlay" role="dialog" aria-modal="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content" style={{ maxWidth: '480px', padding: '1.75rem', textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <AlertTriangle size={26} />
            </div>
            <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '0.5rem' }}>
              ¿Eliminar solicitud de dictamen?
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1.25rem' }}>
              Se va a eliminar definitivamente el expediente de <strong>{caseToDelete.studentName}</strong> ({caseToDelete.grade}), tramitado por <strong>{caseToDelete.teacherName}</strong>. Esta acción borrará el informe tanto del panel como de la sincronización en la nube.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setIsDeletingCase(false);
                  setCaseToDelete(null);
                }}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn"
                onClick={handleConfirmDeleteCase}
                style={{ background: '#dc2626', color: 'white', border: 'none', padding: '0.55rem 1.35rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}
              >
                Sí, Eliminar Solicitud
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
