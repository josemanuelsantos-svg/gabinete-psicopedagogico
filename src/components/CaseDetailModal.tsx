import React from 'react';
import { ReferralCase } from '../types';
import { X, Clock, User, HeartHandshake, Baby, School, FileText, CheckCircle2 } from 'lucide-react';

interface CaseDetailModalProps {
  referralCase: ReferralCase | null;
  onClose: () => void;
}

export const CaseDetailModal: React.FC<CaseDetailModalProps> = ({
  referralCase,
  onClose
}) => {
  if (!referralCase) return null;

  const q = referralCase.questionnaire || {} as any;
  const isInfantil = referralCase.stage === 'INFANTIL';
  const reasonText = q.mainReason || 'Sin motivo detallado registrado.';
  const measuresList = q.appliedMeasuresList || [];

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="case-detail-heading">
      <div className="modal-content" style={{ maxWidth: '850px', padding: '1.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1.1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
              <span style={{ background: isInfantil ? '#fef3c7' : '#e0e7ff', color: isInfantil ? '#92400e' : '#3730a3', padding: '0.15rem 0.5rem', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                {isInfantil ? <Baby size={13} /> : <School size={13} />}
                {isInfantil ? '2º Ciclo Infantil' : 'Educación Primaria'}
              </span>
              <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.15rem 0.5rem', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 700, fontFamily: 'monospace' }}>
                ID: {referralCase.id.slice(0, 8)}...
              </span>
            </div>
            <h3 id="case-detail-heading" style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
              {referralCase.studentName} ({referralCase.grade})
            </h3>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Docente solicitante: <strong>{referralCase.teacherName}</strong> ({referralCase.createdByEmail}) • Fecha: {referralCase.dateSubmitted}
            </p>
          </div>
          <button className="btn btn-secondary" onClick={onClose} style={{ padding: '0.35rem 0.6rem', minHeight: '34px' }}>
            <X size={18} />
          </button>
        </div>

        {/* 1. DICTAMEN TÉCNICO Y PRUEBAS ASIGNADAS POR ORIENTACIÓN */}
        <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-500)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
            <h4 style={{ fontSize: '0.98rem', color: 'var(--primary-900)', fontWeight: 700 }}>
              Dictamen y Valoración Técnica de Orientación
            </h4>
            <span style={{ fontSize: '0.75rem', background: '#ffffff', padding: '0.2rem 0.6rem', borderRadius: '12px', border: '1px solid var(--primary-600)', color: 'var(--primary-800)', fontWeight: 600 }}>
              Estado: {referralCase.status.replace(/_/g, ' ')}
            </span>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
            {referralCase.counselorNotes || 'Expediente pendiente de valoración técnica presencial por el orientador del centro.'}
          </p>

          {referralCase.assignedTests && referralCase.assignedTests.length > 0 && (
            <div style={{ marginTop: '0.75rem', paddingTop: '0.6rem', borderTop: '1px solid var(--primary-200)' }}>
              <strong style={{ fontSize: '0.78rem', color: 'var(--primary-800)', textTransform: 'uppercase' }}>
                Batería de Pruebas Psicométricas Seleccionadas:
              </strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.3rem' }}>
                {referralCase.assignedTests.map((testCode) => (
                  <span key={testCode} style={{ background: '#ffffff', border: '1px solid var(--primary-600)', color: 'var(--primary-900)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.78rem', fontWeight: 600 }}>
                    ✓ {testCode}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 2. MOTIVO Y MEDIDAS PREVIAS OBSERVADAS EN AULA */}
        <div style={{ background: 'var(--bg-subtle)', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '0.88rem', color: 'var(--primary-700)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Clock size={16} /> Motivo de Consulta y Adaptaciones Previas ({q.measuresDuration || 'Tiempo no especificado'})
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
            "{reasonText}"
          </p>

          {measuresList.length > 0 && (
            <div style={{ fontSize: '0.8rem', color: 'var(--primary-900)', marginBottom: '0.4rem' }}>
              <strong>Medidas ordinarias aplicadas:</strong> {measuresList.join(', ')}
            </div>
          )}

          {q.affectedSubjects && q.affectedSubjects.length > 0 && (
            <div style={{ fontSize: '0.8rem', color: 'var(--primary-800)', fontWeight: 600, marginBottom: '0.4rem' }}>
              📚 Áreas de Dificultad: {q.affectedSubjects.join(', ')}
            </div>
          )}

          {q.measuresObservations && (
            <div style={{ fontSize: '0.8rem', background: '#ffffff', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
              <strong>Evolución observada por el tutor:</strong> {q.measuresObservations}
            </div>
          )}

          {q.attachedEvidenceName && (
            <div style={{ fontSize: '0.8rem', color: '#4f46e5', fontWeight: 600, marginTop: '0.4rem' }}>
              📎 Evidencia adjunta: {q.attachedEvidenceName}
            </div>
          )}
        </div>

        {/* 3. VOZ DEL ALUMNO */}
        {q.studentPerception && (
          <div style={{ background: '#f0fdf4', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid #86efac', marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '0.88rem', color: '#166534', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <User size={16} /> Voz y Percepción del Alumno/a (Tutoría)
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.82rem' }}>
              <div><strong>Dificultad percibida:</strong> {q.studentPerception.perceivedDifficulty || 'No declarada'}</div>
              <div><strong>Motivación escolar:</strong> {q.studentPerception.schoolMotivation || 'No declarada'}</div>
            </div>
          </div>
        )}

        {/* 4. CONTEXTO FAMILIAR Y REGISTRO RGPD */}
        <div style={{ background: '#f8fafc', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '0.88rem', color: 'var(--primary-700)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <HeartHandshake size={16} /> Entrevista Familiar y Trazabilidad RGPD
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.82rem' }}>
            <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
              <strong>Reunión con familia:</strong> {q.familyMeetingDone ? 'Sí, realizada' : 'Pendiente'}
            </div>
            <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
              <strong>Conformidad familiar:</strong> {q.familyAgreement || 'No indicada'}
            </div>
            {referralCase.privacyConsent && (
              <div style={{ gridColumn: '1 / -1', background: '#ffffff', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-light)', marginTop: '0.3rem' }}>
                <strong>Consentimiento RGPD:</strong> Cláusula {referralCase.privacyConsent.policyVersion} aceptada por {referralCase.privacyConsent.userEmail} el {referralCase.privacyConsent.acceptedAt.slice(0, 10)}.
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
          <button className="btn btn-primary" onClick={() => window.print()} style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            🖨 Imprimir Expediente Confidencial
          </button>
        </div>
      </div>
    </div>
  );
};
