import React, { useState } from 'react';
import { ReferralCase, CaseStatus, CasePriority, ActionPlanGuidelines } from '../types';
import { Stethoscope, Filter, AlertCircle, CheckCircle2, Clock, FileText, Sparkles, Activity, Edit3, Send, Check } from 'lucide-react';

interface CounselorDashboardProps {
  cases: ReferralCase[];
  onUpdateCase: (updatedCase: ReferralCase) => void;
  onSelectCase: (c: ReferralCase) => void;
}

export const CounselorDashboard: React.FC<CounselorDashboardProps> = ({
  cases,
  onUpdateCase,
  onSelectCase
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [filterPriority, setFilterPriority] = useState<string>('ALL');
  const [selectedCaseForAction, setSelectedCaseForAction] = useState<ReferralCase | null>(null);

  // Decision Form State
  const [counselorNotes, setCounselorNotes] = useState<string>('');
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [newStatus, setNewStatus] = useState<CaseStatus>('EN_EVALUACION');

  // Action plan guidelines state for dictamen
  const [actionPlan, setActionPlan] = useState<ActionPlanGuidelines>({
    generalGoal: 'Pautas de apoyo en aula e intervención psicopedagógica.',
    methodologicalAdaptations: [
      'Proporcionar instrucciones paso a paso.',
      'Dar 25% más de tiempo en controles de evaluación.',
      'Permitir el uso de material de apoyo visual.'
    ],
    environmentalAdaptations: ['Ubicación en primera fila cerca del profesor.'],
    evaluationAdaptations: ['Formato impreso adaptado e instrucciones leídas oralmente.'],
    emotionalTips: ['Reforzamiento positivo constante ante el esfuerzo.']
  });

  const filteredCases = cases.filter(c => {
    if (filterStatus !== 'ALL' && c.status !== filterStatus) return false;
    if (filterPriority !== 'ALL' && c.priority !== filterPriority) return false;
    return true;
  });

  const handleOpenActionModal = (c: ReferralCase) => {
    setSelectedCaseForAction(c);
    setCounselorNotes(c.counselorNotes || c.triage.explanation);
    setSelectedTests(c.assignedTests || c.triage.recommendedTests.map(t => t.code));
    setNewStatus(c.status === 'PENDIENTE_REVISION' ? 'EN_EVALUACION' : c.status);
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
      counselorNotes,
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
        justify-content: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <span style={{ background: 'rgba(255,255,255,0.15)', color: '#a5b4fc', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>
            Panel Técnico de Orientación
          </span>
          <h2 style={{ fontSize: '1.6rem', color: 'white', marginTop: '0.3rem' }}>
            Gestión de Derivaciones y Dictámenes Psicopedagógicos
          </h2>
          <p style={{ opacity: 0.85, fontSize: '0.88rem' }}>
            Revisa las solicitudes enviadas por los profesores, valida las sugerencias del motor de triaje y asigna las baterías de pruebas o pautas de aula.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>{cases.filter(c => c.status === 'PENDIENTE_REVISION').length}</div>
            <div style={{ fontSize: '0.72rem', opacity: 0.8 }}>Por Dictaminar</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>{cases.filter(c => c.priority === 'ALTA' || c.priority === 'URGENTE').length}</div>
            <div style={{ fontSize: '0.72rem', opacity: 0.8 }}>Prioridad Alta</div>
          </div>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="card" style={{ padding: '1rem 1.25rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700 }}>
            <Filter size={16} /> Filtros:
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

      {/* Cases List for Counselor */}
      <div className="card">
        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Bandeja de Derivaciones Recibidas ({filteredCases.length})</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredCases.map((c) => (
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
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.3rem' }}>
                  <span className={`badge badge-${c.priority.toLowerCase()}`}>{c.priority}</span>
                  <span className={`status-badge status-${c.status}`}>
                    {c.status === 'PENDIENTE_REVISION' && 'Por Dictaminar'}
                    {c.status === 'EN_EVALUACION' && 'En Evaluación'}
                    {c.status === 'DICTAMINADO_CON_PAUTAS' && 'Dictaminado'}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ID: {c.id} • {c.dateSubmitted}</span>
                </div>

                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                  {c.studentName} <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>({c.grade})</span>
                </h4>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  <strong>Solicitado por:</strong> {c.teacherName}
                </p>

                <p style={{ fontSize: '0.85rem', color: '#334155', fontStyle: 'italic', background: 'rgba(255,255,255,0.7)', padding: '0.4rem 0.6rem', borderRadius: '6px', borderLeft: '3px solid var(--primary-600)' }}>
                  "{c.questionnaire.mainReason}"
                </p>

                {/* AI Triage Snippet */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem', fontSize: '0.78rem', color: 'var(--primary-800)' }}>
                  <Sparkles size={14} color="var(--primary-600)" />
                  <span><strong>Sugerencia de Triaje:</strong> {c.triage.primaryHypothesis.replace('_', ' ')} (Confianza {c.triage.confidenceScore}%)</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className="btn btn-secondary"
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
                  onClick={() => onSelectCase(c)}
                >
                  <FileText size={15} /> Ver Cuestionario Completo
                </button>

                <button
                  className="btn btn-primary"
                  style={{ padding: '0.45rem 0.95rem', fontSize: '0.8rem' }}
                  onClick={() => handleOpenActionModal(c)}
                >
                  <Edit3 size={15} /> Dictaminar / Asignar Pruebas
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action / Decision Modal */}
      {selectedCaseForAction && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Stethoscope size={22} /> Dictamen de Orientación Psicopedagógica
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Alumno: <strong>{selectedCaseForAction.studentName}</strong> ({selectedCaseForAction.grade})
                </p>
              </div>
              <button className="btn btn-secondary" onClick={() => setSelectedCaseForAction(null)} style={{ padding: '0.3rem 0.6rem', fontSize: '0.78rem' }}>
                Cerrar
              </button>
            </div>

            {/* AI Triage Recommendation Alert */}
            <div style={{ background: '#f0fdfa', border: '1px solid var(--primary-500)', borderRadius: 'var(--radius-md)', padding: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-900)', fontWeight: 700, fontSize: '0.88rem' }}>
                <Sparkles size={18} color="var(--primary-600)" /> Recomendación Automática del Cuestionario
              </div>
              <p style={{ fontSize: '0.82rem', color: '#1e293b', marginTop: '0.3rem' }}>
                {selectedCaseForAction.triage.explanation}
              </p>
            </div>

            <div className="form-group">
              <label className="form-label">Estado de la Solicitud</label>
              <select
                className="select-input"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value as CaseStatus)}
              >
                <option value="EN_EVALUACION">Proceder con Evaluación Psicopedagógica (En curso)</option>
                <option value="DICTAMINADO_CON_PAUTAS">Emitir Dictamen y Pautas de Aula para el Tutor</option>
                <option value="OBSERVACION_AULA">Mantener en Observación de Aula (Pautas ordinarias primero)</option>
                <option value="EVALUACION_RECHAZADA">Desestimar Evaluación Psicopedagógica</option>
              </select>
            </div>

            {/* If in evaluation status, pick psychometric tests */}
            {newStatus === 'EN_EVALUACION' && (
              <div className="form-group">
                <label className="form-label">Batería de Pruebas Psicométricas Acreditadas</label>
                <p className="form-sublabel">Selecciona las pruebas que aplicará el orientador/a en la sala de evaluación:</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem' }}>
                  {['WISC-V', 'EDAH', 'PROLEC-R', 'PROESC', 'SENA', 'BADYG', 'd2', 'CELF-5'].map((testCode) => {
                    const isSelected = selectedTests.includes(testCode);
                    return (
                      <div
                        key={testCode}
                        onClick={() => handleTestToggle(testCode)}
                        style={{
                          background: isSelected ? 'var(--primary-50)' : 'var(--bg-subtle)',
                          border: `1px solid ${isSelected ? 'var(--primary-600)' : 'var(--border-light)'}`,
                          borderRadius: 'var(--radius-md)',
                          padding: '0.6rem 0.75rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justify-content: 'space-between',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: isSelected ? 'var(--primary-800)' : 'var(--text-main)'
                        }}
                      >
                        <span>{testCode}</span>
                        {isSelected && <Check size={16} color="var(--primary-600)" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* If issuing dictamen, configure guidelines */}
            {newStatus === 'DICTAMINADO_CON_PAUTAS' && (
              <div style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1rem', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.6rem', color: 'var(--primary-700)' }}>Pautas de Intervención en el Aula (Visibles para el Profesor)</h4>

                <div className="form-group">
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Objetivo General</label>
                  <input
                    type="text"
                    className="input-text"
                    value={actionPlan.generalGoal}
                    onChange={(e) => setActionPlan({ ...actionPlan, generalGoal: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Adaptaciones Metodológicas (separadas por línea)</label>
                  <textarea
                    rows={3}
                    className="textarea-input"
                    value={actionPlan.methodologicalAdaptations.join('\n')}
                    onChange={(e) => setActionPlan({ ...actionPlan, methodologicalAdaptations: e.target.value.split('\n') })}
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Notas e Instrucciones del Orientador/a para la Ficha</label>
              <textarea
                rows={3}
                className="textarea-input"
                placeholder="Escribe aquí las observaciones dirigidas al equipo docente..."
                value={counselorNotes}
                onChange={(e) => setCounselorNotes(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.25rem' }}>
              <button className="btn btn-secondary" onClick={() => setSelectedCaseForAction(null)}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={handleSaveDecision}>
                <Send size={16} /> Guardar Dictamen y Notificar al Profesor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
