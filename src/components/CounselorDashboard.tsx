import React, { useState } from 'react';
import { ReferralCase, CaseStatus, CasePriority, ActionPlanGuidelines } from '../types';
import { Stethoscope, Filter, AlertCircle, CheckCircle2, Clock, FileText, Sparkles, Activity, Edit3, Send, Check, Baby, School } from 'lucide-react';

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

  const filteredCases = (cases || []).filter(c => {
    if (!c) return false;
    if (filterStatus !== 'ALL' && c.status !== filterStatus) return false;
    if (filterPriority !== 'ALL' && c.priority !== filterPriority) return false;
    if (filterStage !== 'ALL' && c.stage !== filterStage) return false;
    return true;
  });

  const handleOpenActionModal = (c: ReferralCase) => {
    setSelectedCaseForAction(c);
    setCounselorNotes(c.counselorNotes || c.triage?.explanation || '');
    setSelectedTests(c.assignedTests || (c.triage?.recommendedTests || []).map(t => typeof t === 'string' ? t : t.code));
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
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <span style={{ background: 'rgba(255,255,255,0.15)', color: '#a5b4fc', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>
            Gabinete de Orientación • Col. San Buenaventura
          </span>
          <h2 style={{ fontSize: '1.6rem', color: 'white', marginTop: '0.3rem' }}>
            Bandeja de Derivaciones y Dictámenes Psicopedagógicos
          </h2>
          <p style={{ opacity: 0.85, fontSize: '0.88rem' }}>
            Revisa las solicitudes de <strong>Infantil y Primaria</strong>, valida el triaje automático y asigna baterías de pruebas psicométricas o pautas de aula.
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
            <Filter size={16} /> Filtros:
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

      {/* Cases List for Counselor */}
      <div className="card">
        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Bandeja de Derivaciones Recibidas ({filteredCases.length})</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredCases.map((c) => {
            const isInfantil = c.stage === 'INFANTIL';
            const riskTitle = c.triage?.riskProfileTitle || c.categoryTag || 'Perfil en Evaluación';
            const priorityClass = (c.priority || 'MEDIA').toLowerCase();
            const statusLabel = (c.status || 'PENDIENTE_REVISION').replace(/_/g, ' ');
            const reasonText = c.questionnaire?.mainReason || 'Motivo de derivación registrado en el aula.';

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
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ID: {c.id} • {c.dateSubmitted}</span>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    {c.studentName} <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>({c.grade})</span>
                  </h4>
                  <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    <strong>Solicitado por:</strong> {c.teacherName}
                  </p>

                  <p style={{ fontSize: '0.85rem', color: '#334155', fontStyle: 'italic', background: 'rgba(255,255,255,0.7)', padding: '0.4rem 0.6rem', borderRadius: '6px', borderLeft: '3px solid var(--primary-600)' }}>
                    "{reasonText}"
                  </p>

                  {/* AI Triage Snippet */}
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem', fontSize: '0.78rem', color: 'var(--primary-800)' }}>
                    <Sparkles size={14} color="var(--primary-600)" />
                    <span><strong>Perfil Objetivo:</strong> {riskTitle} (Confianza {c.triage?.confidenceScore || 92}%)</span>
                  </div>
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
                    <Edit3 size={15} /> Dictaminar / Gestionar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL GESTIONAR DICTAMEN */}
      {selectedCaseForAction && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', background: selectedCaseForAction.stage === 'INFANTIL' ? '#fef3c7' : '#e0e7ff', color: selectedCaseForAction.stage === 'INFANTIL' ? '#92400e' : '#3730a3', padding: '0.15rem 0.5rem', borderRadius: '10px', fontWeight: 700 }}>
                  {selectedCaseForAction.stage === 'INFANTIL' ? '🧸 Infantil' : '🎒 Primaria'}
                </span>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                  Dictaminar Expediente: {selectedCaseForAction.studentName}
                </h3>
              </div>
              <button className="btn btn-secondary" onClick={() => setSelectedCaseForAction(null)} style={{ padding: '0.35rem' }}>✕</button>
            </div>

            <div className="form-group">
              <label className="form-label">Estado de la Derivación *</label>
              <select className="select-input" value={newStatus} onChange={(e) => setNewStatus(e.target.value as CaseStatus)}>
                <option value="PENDIENTE_REVISION">Pendiente de Revisión</option>
                <option value="EN_EVALUACION">Aceptar e Iniciar Evaluación Psicopedagógica</option>
                <option value="DICTAMINADO_CON_PAUTAS">Dictaminar y Asignar Pautas NEAE de Aula</option>
                <option value="OBSERVACION_AULA">Recomendar 4 Semanas de Observación y Medidas</option>
                <option value="EVALUACION_RECHAZADA">Desestimar / Derivación Prematura</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Batería de Pruebas Psicométricas a Aplicar:</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.35rem' }}>
                {(selectedCaseForAction.triage?.recommendedTests || [
                  { code: 'WISC-V', name: 'Escala Wechsler', area: 'Cognitiva' },
                  { code: 'PROLEC-R', name: 'Batería Lectura', area: 'Lectoescritura' }
                ]).map(t => {
                  const testCode = typeof t === 'string' ? t : t.code;
                  const testArea = typeof t === 'string' ? 'General' : t.area;
                  const isChecked = selectedTests.includes(testCode);
                  return (
                    <button
                      type="button"
                      key={testCode}
                      onClick={() => handleTestToggle(testCode)}
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
                      {isChecked ? '✓ ' : '+ '}{testCode} ({testArea})
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Dictamen Clínico / Observaciones de Orientación *</label>
              <textarea
                rows={4}
                className="textarea-input"
                value={counselorNotes}
                onChange={(e) => setCounselorNotes(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setSelectedCaseForAction(null)}>Cancelar</button>
              <button type="button" className="btn btn-primary" onClick={handleSaveDecision}>
                <Check size={16} /> Guardar Dictamen en Firebase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
