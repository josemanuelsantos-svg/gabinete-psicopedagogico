import React, { useState } from 'react';
import { ReferralCase, CaseStatus, CasePriority, ActionPlanGuidelines } from '../types';
import { Filter, FileText, Edit3, Check, Baby, School, ShieldCheck, Clock } from 'lucide-react';

interface CounselorDashboardProps {
  cases: ReferralCase[];
  onUpdateCase: (updatedCase: ReferralCase) => void;
  onSelectCase: (c: ReferralCase) => void;
}

export const CounselorDashboard: React.FC<CounselorDashboardProps> = ({
  cases = [],
  onUpdateCase,
  onSelectCase
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [filterPriority, setFilterPriority] = useState<string>('ALL');
  const [filterStage, setFilterStage] = useState<string>('ALL');
  const [selectedCaseForAction, setSelectedCaseForAction] = useState<ReferralCase | null>(null);

  // Formulario manual del Orientador (técnico, no automatizado)
  const [counselorNotes, setCounselorNotes] = useState<string>('');
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [newStatus, setNewStatus] = useState<CaseStatus>('EN_EVALUACION');
  const [assignedPriority, setAssignedPriority] = useState<CasePriority>('MEDIA');

  // Pautas metodológicas dictaminadas
  const [actionPlan, setActionPlan] = useState<ActionPlanGuidelines>({
    generalGoal: 'Intervención y apoyo metodológico individualizado en el aula ordinaria.',
    methodologicalAdaptations: [
      'Fraccionamiento de instrucciones complejas en pasos secuenciales.',
      'Ampliación del 25% de tiempo en pruebas y controles de evaluación.',
      'Uso de apoyos visuales y esquemas resumen en la mesa de trabajo.'
    ],
    environmentalAdaptations: ['Ubicación en primera fila libre de distracciones visuales.'],
    evaluationAdaptations: ['Lectura previa guiada de enunciados de examen.'],
    emotionalTips: ['Refuerzo positivo contingente ante el esfuerzo y perseverancia.']
  });

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

  const handleOpenActionModal = (c: ReferralCase) => {
    setSelectedCaseForAction(c);
    setCounselorNotes(c.counselorNotes || '');
    setSelectedTests(c.assignedTests || []);
    setNewStatus(c.status === 'PENDIENTE_REVISION' ? 'EN_EVALUACION' : c.status);
    setAssignedPriority(c.priority || 'MEDIA');
    if (c.actionPlan) {
      setActionPlan(c.actionPlan);
    }
  };

  const handleTestToggle = (code: string) => {
    setSelectedTests(prev =>
      prev.includes(code) ? prev.filter(t => t !== code) : [...prev, code]
    );
  };

  const handleSaveDecision = () => {
    if (!selectedCaseForAction) return;

    const updated: ReferralCase = {
      ...selectedCaseForAction,
      status: newStatus,
      priority: assignedPriority,
      counselorNotes: counselorNotes.trim(),
      assignedTests: selectedTests,
      decisionDate: new Date().toISOString().split('T')[0],
      actionPlan: newStatus === 'DICTAMINADO_CON_PAUTAS' ? actionPlan : selectedCaseForAction.actionPlan
    };

    onUpdateCase(updated);
    setSelectedCaseForAction(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header Banner */}
      <div style={{
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
      <div className="card" style={{ padding: '1rem 1.25rem' }}>
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
        </div>
      </div>

      {/* Cases List */}
      <div className="card">
        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          Expedientes en Tramitación ({filteredCases.length})
        </h3>

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
                <div style={{ flex: '1 1 400px' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                    <span style={{ background: isInfantil ? '#fef3c7' : '#e0e7ff', color: isInfantil ? '#92400e' : '#3730a3', padding: '0.15rem 0.45rem', borderRadius: '10px', fontSize: '0.72rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                      {isInfantil ? <Baby size={13} /> : <School size={13} />}
                      {isInfantil ? 'Infantil' : 'Primaria'}
                    </span>
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
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    <strong>Docente solicitante:</strong> {c.teacherName} ({c.createdByEmail})
                  </p>

                  <p style={{ fontSize: '0.85rem', color: '#334155', fontStyle: 'italic', background: 'rgba(255,255,255,0.7)', padding: '0.4rem 0.6rem', borderRadius: '6px', borderLeft: '3px solid var(--primary-600)' }}>
                    "{reasonText}"
                  </p>

                  {c.assignedTests && c.assignedTests.length > 0 && (
                    <div style={{ marginTop: '0.4rem', fontSize: '0.78rem', color: 'var(--primary-800)' }}>
                      <strong>Pruebas asignadas por Orientación:</strong> {c.assignedTests.join(', ')}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    className="btn btn-secondary"
                    style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
                    onClick={() => onSelectCase(c)}
                  >
                    <FileText size={15} /> Ver Cuestionario
                  </button>

                  <button
                    className="btn btn-primary"
                    style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
                    onClick={() => handleOpenActionModal(c)}
                  >
                    <Edit3 size={15} /> Dictaminar / Asignar Pruebas
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL GESTIONAR DICTAMEN MANUAL */}
      {selectedCaseForAction && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-content" style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', background: selectedCaseForAction.stage === 'INFANTIL' ? '#fef3c7' : '#e0e7ff', color: selectedCaseForAction.stage === 'INFANTIL' ? '#92400e' : '#3730a3', padding: '0.15rem 0.5rem', borderRadius: '10px', fontWeight: 700 }}>
                  {selectedCaseForAction.stage === 'INFANTIL' ? '🧸 Infantil' : '🎒 Primaria'}
                </span>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                  Valoración Técnica: {selectedCaseForAction.studentName}
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
                  <option value="DICTAMINADO_CON_PAUTAS">Dictaminar y Asignar Pautas NEAE de Aula</option>
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
              <label className="form-label">Selección Manual de Pruebas Psicométricas a Aplicar:</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.35rem' }}>
                {availableTests.map(t => {
                  const isChecked = selectedTests.includes(t.code);
                  return (
                    <button
                      type="button"
                      key={t.code}
                      onClick={() => handleTestToggle(t.code)}
                      style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.78rem',
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
              <label className="form-label">Dictamen Técnico y Observaciones Clínicas de Orientación *</label>
              <textarea
                rows={4}
                className="textarea-input"
                placeholder="Escribe las valoraciones profesionales, conclusiones técnicas y plan de intervención recomendado para el tutor..."
                value={counselorNotes}
                onChange={(e) => setCounselorNotes(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setSelectedCaseForAction(null)}>Cancelar</button>
              <button type="button" className="btn btn-primary" onClick={handleSaveDecision}>
                <Check size={16} /> Guardar Dictamen Técnico
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
