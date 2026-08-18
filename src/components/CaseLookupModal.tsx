import React, { useState } from 'react';
import { ReferralCase } from '../types';
import { Search, ShieldCheck, CheckCircle2, Clock, Calendar, AlertCircle, X, Printer } from 'lucide-react';

interface CaseLookupModalProps {
  cases: ReferralCase[];
  isOpen: boolean;
  onClose: () => void;
}

export const CaseLookupModal: React.FC<CaseLookupModalProps> = ({
  cases,
  isOpen,
  onClose
}) => {
  const [searchCode, setSearchCode] = useState('');
  const [foundCase, setFoundCase] = useState<ReferralCase | null>(null);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = searchCode.trim().toUpperCase();
    const target = cases.find(c => c.id.toUpperCase() === cleanCode);

    if (target) {
      setFoundCase(target);
      setError('');
    } else {
      setFoundCase(null);
      setError(`No se ha encontrado ninguna derivación registrada con el código "${cleanCode}". Verifica el identificador de tu resguardo.`);
    }
  };

  const getStatusBadge = (status: ReferralCase['status']) => {
    switch (status) {
      case 'PENDIENTE_REVISION':
        return <span style={{ background: '#fef3c7', color: '#b45309', padding: '0.35rem 0.85rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.85rem' }}>⏳ Pendiente de Triaje en Orientación</span>;
      case 'EN_EVALUACION':
        return <span style={{ background: '#dbeafe', color: '#1d4ed8', padding: '0.35rem 0.85rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.85rem' }}>📑 En Proceso de Evaluación Práctica</span>;
      case 'DICTAMINADO_CON_PAUTAS':
        return <span style={{ background: '#dcfce7', color: '#15803d', padding: '0.35rem 0.85rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.85rem' }}>✅ Dictaminado con Pautas de Aula</span>;
      default:
        return <span style={{ background: '#f1f5f9', color: '#475569', padding: '0.35rem 0.85rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.85rem' }}>🔍 En Revisión</span>;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '650px', padding: '1.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
          <div>
            <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
              Consulta Anonimizada LOPD / GDPR
            </span>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
              Seguimiento por Código de Derivación
            </h3>
          </div>
          <button className="btn btn-secondary" onClick={onClose} style={{ padding: '0.3rem 0.6rem', minHeight: '36px' }}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSearch} style={{ marginBottom: '1.25rem' }}>
          <label className="form-label">Introduce tu Código de Expediente *</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              required
              className="input-text"
              placeholder="Ej: DER-2026-001"
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              style={{ flex: 1 }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem' }}>
              <Search size={16} /> Consultar Estado
            </button>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem', fontStyle: 'italic' }}>
            🔒 Este buscador seguro permite comprobar el estado de un expediente sin revelar datos del menor ni exponer el censo de otros niños.
          </p>
        </form>

        {error && (
          <div style={{ background: '#fee2e2', color: '#991b1b', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
            ⚠ {error}
          </div>
        )}

        {foundCase && (
          <div className="card" style={{ background: '#f8fafc', border: '1px solid var(--primary-100)', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CÓDIGO DE EXPEDIENTE</span>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-900)' }}>{foundCase.id}</h4>
              </div>
              <div>{getStatusBadge(foundCase.status)}</div>
            </div>

            <div style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div><strong>Alumno/a:</strong> {foundCase.studentName} ({foundCase.grade})</div>
              <div><strong>Fecha de Derivación:</strong> {foundCase.dateSubmitted}</div>
              <div><strong>Docente Solicitante:</strong> {foundCase.teacherName}</div>
              {foundCase.questionnaire.affectedSubjects && foundCase.questionnaire.affectedSubjects.length > 0 && (
                <div>
                  <strong>Asignaturas Afectadas:</strong>{' '}
                  <span style="color:var(--primary-700); font-weight:600;">
                    {foundCase.questionnaire.affectedSubjects.join(', ')}
                  </span>
                </div>
              )}
            </div>

            <div style={{ background: '#ffffff', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginTop: '1rem' }}>
              <strong style={{ fontSize: '0.82rem', color: 'var(--primary-800)' }}>Dictamen / Estado del Gabinete de Orientación:</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                {foundCase.triage.explanation}
              </p>

              {foundCase.assignedTests && foundCase.assignedTests.length > 0 && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--accent-indigo)', fontWeight: 600 }}>
                  📋 Pruebas Psicométricas en Proceso: {foundCase.assignedTests.join(', ')}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
