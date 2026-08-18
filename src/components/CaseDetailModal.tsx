import React from 'react';
import { ReferralCase } from '../types';
import { ShieldCheck, Brain, FileText, CheckCircle2, AlertTriangle, X, Clock, User, HeartHandshake, Baby, School } from 'lucide-react';

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
  const isInfantil = referralCase.stage === 'INFANTIL';

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '850px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
              <span style={{ background: isInfantil ? '#fef3c7' : '#e0e7ff', color: isInfantil ? '#92400e' : '#3730a3', padding: '0.15rem 0.5rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                {isInfantil ? <Baby size={14} /> : <School size={14} />}
                {isInfantil ? '2º Ciclo Infantil (3 a 5 años)' : 'Educación Primaria'}
              </span>
              <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.15rem 0.5rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
                Expediente {referralCase.id}
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
              {referralCase.studentName} ({referralCase.grade})
            </h3>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Tutor/a solicitante: {referralCase.teacherName} • Fecha: {referralCase.dateSubmitted}
            </p>
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
              Batería Psicométrica de Etapa Sugerida por el Gabinete:
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

        {/* 2. MOTIVO Y AYUDAS DE AULA PREVIAS */}
        <div style={{ background: 'var(--bg-subtle)', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '0.88rem', color: 'var(--primary-700)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Clock size={16} /> Motivo y Ayudas Previas Probadas en Clase ({questionnaire.measuresDuration || '1-2 meses'})
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
            "{questionnaire.mainReason}"
          </p>

          {questionnaire.appliedMeasuresList && questionnaire.appliedMeasuresList.length > 0 && (
            <div style={{ fontSize: '0.8rem', color: 'var(--primary-900)', marginBottom: '0.4rem' }}>
              <strong>Medidas aplicadas:</strong> {questionnaire.appliedMeasuresList.join(', ')}
            </div>
          )}

          {questionnaire.affectedSubjects && questionnaire.affectedSubjects.length > 0 && (
            <div style={{ fontSize: '0.8rem', color: 'var(--primary-800)', fontWeight: 600, marginBottom: '0.4rem' }}>
              📚 Áreas Afectadas: {questionnaire.affectedSubjects.join(', ')}
            </div>
          )}

          {questionnaire.measuresObservations && (
            <div style={{ fontSize: '0.8rem', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
              <strong>Evolución observada:</strong> {questionnaire.measuresObservations}
            </div>
          )}

          {questionnaire.attachedEvidenceName && (
            <div style={{ fontSize: '0.8rem', color: '#4f46e5', fontWeight: 600, marginTop: '0.4rem' }}>
              📎 Evidencia / Trabajo adjunto: {questionnaire.attachedEvidenceName}
            </div>
          )}
        </div>

        {/* 3. VOZ Y AUTOPERCEPCIÓN DEL ALUMNO/A */}
        {questionnaire.studentPerception && (
          <div style={{ background: '#f0fdf4', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid #86efac', marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '0.88rem', color: '#166534', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <User size={16} /> Voz y Percepción del Alumno/a (Recogido en Tutoría)
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.82rem' }}>
              <div><strong>Dificultad percibida:</strong> {questionnaire.studentPerception.perceivedDifficulty}</div>
              <div><strong>Motivación hacia la escuela:</strong> {questionnaire.studentPerception.schoolMotivation}</div>
              <div><strong>Actividades preferidas:</strong> {questionnaire.studentPerception.favoriteSubjects}</div>
              <div><strong>Actividades más complejas:</strong> {questionnaire.studentPerception.hardestSubjects}</div>
            </div>
          </div>
        )}

        {/* 4. CONTEXTO FAMILIAR */}
        <div style={{ background: '#f8fafc', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '0.88rem', color: 'var(--primary-700)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <HeartHandshake size={16} /> Entrevista Familiar e Informes Previos
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.82rem' }}>
            <div><strong>Reunión previa realizada:</strong> {questionnaire.familyMeetingDone ? 'Sí' : 'No'}</div>
            <div><strong>Acuerdo familiar:</strong> {questionnaire.familyAgreement}</div>
            <div style={{ gridColumn: '1 / -1' }}>
              <strong>Informes externos previos:</strong> {questionnaire.externalAssessmentDone ? (questionnaire.externalAssessmentDetails || 'Sí, aportados') : 'No constan'}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
          <button className="btn btn-primary" onClick={() => window.print()} style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            🖨 Imprimir Ficha de Devolución al Tutor
          </button>
        </div>
      </div>
    </div>
  );
};
