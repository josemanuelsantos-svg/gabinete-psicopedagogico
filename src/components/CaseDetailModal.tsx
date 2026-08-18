import React from 'react';
import { ReferralCase } from '../types';
import { ShieldCheck, Brain, FileText, CheckCircle2, AlertTriangle, X, Clock, User, HeartHandshake } from 'lucide-react';

interface CaseDetailModalProps {
  referralCase: ReferralCase | null;
  onClose: () => void;
}

export const CaseDetailModal: React.FC<CaseDetailModalProps> = ({
  referralCase,
  onClose
}) => {
  if (!referralCase) return null;

  const { questionnaire, triage } = referralCase;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
          <div>
            <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
              Expediente {referralCase.id}
            </span>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
              {referralCase.studentName} ({referralCase.grade})
            </h3>
          </div>
          <button className="btn btn-secondary" onClick={onClose} style={{ padding: '0.4rem 0.6rem', minHeight: '36px' }}>
            <X size={18} />
          </button>
        </div>

        {/* 1. PERFIL DE RIESGO INTELIGENTE */}
        <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-500)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
            <Brain size={20} color="var(--primary-700)" />
            <h4 style={{ fontSize: '0.98rem', color: 'var(--primary-900)' }}>
              {triage.riskProfileTitle}
            </h4>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
            {triage.explanation}
          </p>

          <div style={{ marginTop: '0.75rem', paddingTop: '0.6rem', borderTop: '1px solid var(--primary-100)' }}>
            <strong style={{ fontSize: '0.8rem', color: 'var(--primary-800)', textTransform: 'uppercase' }}>
              Batería Psicometríca Sugerida por el Gabinete:
            </strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.3rem' }}>
              {triage.recommendedTests.map(t => (
                <span key={t.code} style={{ background: '#ffffff', border: '1px solid var(--primary-600)', color: 'var(--primary-900)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.78rem', fontWeight: 600 }}>
                  {t.code} ({t.area})
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. MOTIVO Y MEDIDAS PREVIAS (NORMATIVA) */}
        <div style={{ background: 'var(--bg-subtle)', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '0.88rem', color: 'var(--primary-700)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Clock size={16} /> Motivo y Trazabilidad de Medidas Ordinarias Previas ({questionnaire.measuresDurationWeeks || 4} Semanas)
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
            "{questionnaire.mainReason}"
          </p>

          {questionnaire.affectedSubjects && questionnaire.affectedSubjects.length > 0 && (
            <div style={{ fontSize: '0.8rem', color: 'var(--primary-800)', fontWeight: 600, marginBottom: '0.4rem' }}>
              📚 Asignaturas Afectadas: {questionnaire.affectedSubjects.join(', ')}
            </div>
          )}

          {questionnaire.previousMeasuresObservations && (
            <div style={{ fontSize: '0.8rem', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
              <strong>Evolución observada:</strong> {questionnaire.previousMeasuresObservations}
            </div>
          )}
        </div>

        {/* 3. VOZ Y AUTOPERCEPCIÓN DEL ALUMNO/A */}
        {questionnaire.studentPerception && (
          <div style={{ background: '#f0fdf4', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid #86efac', marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '0.88rem', color: '#166534', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <User size={16} /> Voz y Autopercepción del Alumno/a (Tutoría)
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.82rem' }}>
              <div><strong>Dificultad percibida:</strong> {questionnaire.studentPerception.perceivedDifficulty}</div>
              <div><strong>Motivación hacia la escuela:</strong> {questionnaire.studentPerception.schoolMotivation}</div>
              <div><strong>Asignaturas preferidas:</strong> {questionnaire.studentPerception.favoriteSubjects}</div>
              <div><strong>Asignaturas más difíciles:</strong> {questionnaire.studentPerception.hardestSubjects}</div>
            </div>
          </div>
        )}

        {/* 4. DESCRIPTORES CONDUCTUALES OBJETIVOS REGISTRADOS */}
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '0.88rem', color: 'var(--primary-700)', marginBottom: '0.4rem' }}>
            Indicadores Conductuales Objetivos Registrados (1 a 5)
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.82rem' }}>
            <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
              Atención: <strong>{questionnaire.attentionFocus}/5</strong>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>{questionnaire.attentionDescriptor}</div>
            </div>
            <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
              Lectoescritura: <strong>{questionnaire.readingComprehension}/5</strong>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>{questionnaire.readingDescriptor}</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn btn-secondary" onClick={onClose}>
            Cerrar Expediente
          </button>
        </div>
      </div>
    </div>
  );
};
