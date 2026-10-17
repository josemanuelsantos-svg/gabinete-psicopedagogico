import React, { useState } from 'react';
import { ReferralCase } from '../types';
import { X, Clock, User, HeartHandshake, Baby, School, Eye, Download, FileCheck2, Printer } from 'lucide-react';

interface CaseDetailModalProps {
  referralCase: ReferralCase | null;
  onClose: () => void;
}

export const CaseDetailModal: React.FC<CaseDetailModalProps> = ({
  referralCase,
  onClose
}) => {
  const [showAttachmentPreview, setShowAttachmentPreview] = useState<boolean>(false);
  const [showFamilyAuthView, setShowFamilyAuthView] = useState<boolean>(false);

  if (!referralCase) return null;

  const q = referralCase.questionnaire || {} as any;
  const isInfantil = referralCase.stage === 'INFANTIL';
  const reasonText = q.mainReason || 'Sin motivo detallado registrado.';
  const measuresList = q.appliedMeasuresList || [];

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="case-detail-heading">
      <div className="modal-content" style={{ maxWidth: '860px', padding: '1.75rem', maxHeight: '92vh', overflowY: 'auto' }}>
        <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1.1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
              <span style={{ background: isInfantil ? '#fef3c7' : '#e0e7ff', color: isInfantil ? '#92400e' : '#3730a3', padding: '0.15rem 0.5rem', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                {isInfantil ? <Baby size={13} /> : <School size={13} />}
                {isInfantil ? '2º Ciclo Infantil' : 'Educación Primaria'}
              </span>
              {q.isHighCapacityEvaluation && (
                <span style={{ background: '#fef3c7', color: '#92400e', border: '1px solid #f59e0b', padding: '0.12rem 0.5rem', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 700 }}>
                  🌟 Evaluación Altas Capacidades (AACC)
                </span>
              )}
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

        {showFamilyAuthView ? (
          <div>
            <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', background: '#eff6ff', padding: '0.65rem 1rem', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1e40af' }}>
                📄 Vista de Autorización Familiar Oficial lista para imprimir
              </span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button type="button" className="btn btn-secondary" style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem' }} onClick={() => setShowFamilyAuthView(false)}>
                  ← Volver al Expediente
                </button>
                <button type="button" className="btn btn-primary" style={{ fontSize: '0.78rem', padding: '0.35rem 0.85rem' }} onClick={() => window.print()}>
                  <Printer size={14} /> Imprimir Autorización
                </button>
              </div>
            </div>

            <div style={{ border: '1px solid #cbd5e1', borderRadius: '10px', padding: '1.75rem', background: '#ffffff', color: '#0f172a', lineHeight: 1.55 }}>
              <div style={{ textAlign: 'center', borderBottom: '2px solid #0d9488', paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#475569', fontWeight: 700 }}>
                  Colegio San Buenaventura • Madrid • Gabinete de Orientación Psicopedagógica
                </div>
                <h2 style={{ fontSize: '1.22rem', color: '#0f172a', marginTop: '0.25rem', marginBottom: '0.15rem' }}>
                  AUTORIZACIÓN E INFORMACIÓN A LAS FAMILIAS PARA VALORACIÓN PSICOPEDAGÓGICA
                </h2>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                  Expediente Ref: {referralCase.id.slice(0, 8).toUpperCase()} • Fecha: {new Date().toLocaleDateString('es-ES')}
                </div>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.85rem 1rem', marginBottom: '1rem', fontSize: '0.85rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem' }}>
                <div><strong>Alumno/a:</strong> {referralCase.studentName}</div>
                <div><strong>Curso y Etapa:</strong> {referralCase.grade} ({referralCase.stage})</div>
                <div><strong>Tutor/a Solicitante:</strong> {referralCase.teacherName}</div>
                <div><strong>Modalidad:</strong> {q.isHighCapacityEvaluation ? 'Detección de Altas Capacidades (AACC)' : 'Valoración Psicopedagógica Ordinaria / NEAE'}</div>
              </div>

              <p style={{ fontSize: '0.85rem', textAlign: 'justify', marginBottom: '0.75rem' }}>
                Estimada familia: Desde el <strong>Gabinete Psicopedagógico del Colegio San Buenaventura</strong>, en coordinación con el tutor/a de su hijo/a, les solicitamos autorización para llevar a cabo una valoración psicopedagógica individualizada orientada a identificar sus fortalezas y necesidades de apoyo educativo en el aula.
              </p>

              <div style={{ marginBottom: '1rem', fontSize: '0.84rem', background: '#f0fdfa', borderLeft: '4px solid #0d9488', padding: '0.7rem 0.95rem', borderRadius: '4px' }}>
                <strong>Síntesis del motivo de consulta:</strong> <em>"{reasonText}"</em>
                {referralCase.assignedTests && referralCase.assignedTests.length > 0 && (
                  <div style={{ marginTop: '0.35rem' }}>
                    <strong>Pruebas psicométricas previstas:</strong> {referralCase.assignedTests.join(', ')}.
                  </div>
                )}
              </div>

              <div style={{ border: '1.5px solid #94a3b8', borderRadius: '8px', padding: '0.95rem', marginBottom: '1.5rem', fontSize: '0.84rem' }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 700 }}>DECLARACIÓN DE CONSENTIMIENTO INFORMADO FAMILIAR (RGPD / LOPD-GDD):</p>
                <p style={{ margin: '0 0 0.5rem 0' }}>
                  D./Dª ______________________________________________________, con DNI __________________, como madre / padre / tutor legal de <strong>{referralCase.studentName}</strong>:
                </p>
                <div style={{ display: 'flex', gap: '2rem', marginTop: '0.6rem', fontWeight: 700 }}>
                  <span>[ &nbsp; ] SÍ AUTORIZO la valoración psicopedagógica</span>
                  <span>[ &nbsp; ] NO AUTORIZO la valoración</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #cbd5e1', fontSize: '0.8rem', textAlign: 'center' }}>
                <div>
                  <div style={{ height: '50px' }}></div>
                  <div style={{ borderTop: '1px solid #64748b', paddingTop: '0.3rem' }}><strong>Firma de Madre / Padre / Tutor Legal</strong></div>
                </div>
                <div>
                  <div style={{ height: '50px' }}></div>
                  <div style={{ borderTop: '1px solid #64748b', paddingTop: '0.3rem' }}><strong>Gabinete de Orientación • Col. San Buenaventura</strong></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* 1. DICTAMEN TÉCNICO Y PRUEBAS ASIGNADAS POR ORIENTACIÓN */}
            <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-500)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem', flexWrap: 'wrap', gap: '0.4rem' }}>
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
                <div style={{ marginTop: '0.65rem', padding: '0.6rem 0.85rem', background: '#eef2ff', border: '1px solid #c7d2fe', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.82rem', color: '#3730a3', fontWeight: 700 }}>
                      📎 Evidencia adjunta: {q.attachedEvidenceName}
                    </div>
                    {q.attachedEvidenceDataUrl ? (
                      <div className="no-print" style={{ display: 'flex', gap: '0.45rem' }}>
                        <button
                          type="button"
                          onClick={() => setShowAttachmentPreview(prev => !prev)}
                          className="btn btn-secondary"
                          style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', minHeight: '28px', background: '#ffffff', color: '#3730a3', borderColor: '#818cf8' }}
                        >
                          <Eye size={13} /> {showAttachmentPreview ? 'Ocultar Vista Previa' : 'Previsualizar'}
                        </button>
                        <a
                          href={q.attachedEvidenceDataUrl}
                          download={q.attachedEvidenceName}
                          className="btn btn-primary"
                          style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', minHeight: '28px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                        >
                          <Download size={13} /> Descargar
                        </a>
                      </div>
                    ) : (
                      <span style={{ fontSize: '0.73rem', color: '#6366f1' }}>
                        (Verificado por Magic Bytes • Custodia documental)
                      </span>
                    )}
                  </div>

                  {showAttachmentPreview && q.attachedEvidenceDataUrl && (
                    <div style={{ marginTop: '0.65rem', background: '#ffffff', padding: '0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', textAlign: 'center' }}>
                      {q.attachedEvidenceMimeType === 'application/pdf' || q.attachedEvidenceDataUrl.startsWith('data:application/pdf') ? (
                        <iframe
                          src={q.attachedEvidenceDataUrl}
                          title={q.attachedEvidenceName}
                          style={{ width: '100%', height: '380px', border: 'none', borderRadius: '4px' }}
                        />
                      ) : (
                        <img
                          src={q.attachedEvidenceDataUrl}
                          alt={q.attachedEvidenceName}
                          style={{ maxWidth: '100%', maxHeight: '380px', objectFit: 'contain', borderRadius: '4px' }}
                        />
                      )}
                    </div>
                  )}
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

            <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowFamilyAuthView(true)}
                style={{ padding: '0.5rem 0.9rem', fontSize: '0.82rem', background: '#eff6ff', color: '#1e40af', borderColor: '#bfdbfe' }}
              >
                <FileCheck2 size={15} /> Generar Autorización Familiar Oficial
              </button>

              <button className="btn btn-primary" onClick={() => window.print()} style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                🖨 Imprimir Expediente Confidencial
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
