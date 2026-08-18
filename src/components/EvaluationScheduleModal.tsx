import React, { useState } from 'react';
import { ReferralCase, EvaluationSession } from '../types';
import { Calendar, Clock, FileText, Printer, CheckCircle2, Plus, X, ShieldCheck } from 'lucide-react';

interface EvaluationScheduleModalProps {
  referralCase: ReferralCase | null;
  onClose: () => void;
  onAddSession: (caseId: string, session: EvaluationSession) => void;
}

export const EvaluationScheduleModal: React.FC<EvaluationScheduleModalProps> = ({
  referralCase,
  onClose,
  onAddSession
}) => {
  const [activeTab, setActiveTab] = useState<'SCHEDULE' | 'CONSENT'>('SCHEDULE');

  // New Session State
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState<string>('10:00');
  const [testCode, setTestCode] = useState<string>('WISC-V');
  const [counselorName, setCounselorName] = useState<string>('Dra. María Valls (Orientadora)');
  const [location, setLocation] = useState<string>('Despacho de Orientación 2');

  if (!referralCase) return null;

  const handleCreateSession = (e: React.FormEvent) => {
    e.preventDefault();
    const newSession: EvaluationSession = {
      id: `SESS-${Math.floor(1000 + Math.random() * 9000)}`,
      date,
      time,
      testCode,
      testName: testCode === 'WISC-V' ? 'Escala de Inteligencia de Wechsler para Niños' : testCode === 'EDAH' ? 'Escala de Evaluación del TDAH' : 'PROLEC-R / Batería de Lectura',
      counselorName,
      location,
      status: 'PROGRAMADA'
    };

    onAddSession(referralCase.id, newSession);
  };

  const handlePrintConsent = () => {
    window.print();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '850px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
          <div>
            <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
              Gestión de Citas & Autorización Legal
            </span>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
              {referralCase.studentName} <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>({referralCase.grade})</span>
            </h3>
          </div>

          <button className="btn btn-secondary no-print" onClick={onClose} style={{ padding: '0.3rem 0.6rem' }}>
            <X size={18} />
          </button>
        </div>

        {/* Modal Navigation */}
        <div className="nav-tabs no-print" style={{ marginBottom: '1rem' }}>
          <button className={`tab-btn ${activeTab === 'SCHEDULE' ? 'active' : ''}`} onClick={() => setActiveTab('SCHEDULE')}>
            <Calendar size={16} /> Agendar Cita de Evaluación
          </button>
          <button className={`tab-btn ${activeTab === 'CONSENT' ? 'active' : ''}`} onClick={() => setActiveTab('CONSENT')}>
            <ShieldCheck size={16} /> Documento de Consentimiento Familiar
          </button>
        </div>

        {activeTab === 'SCHEDULE' && (
          <div>
            <form onSubmit={handleCreateSession} style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--primary-700)', marginBottom: '0.75rem' }}>Nueva Cita de Pruebas Psicométricas</h4>
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Prueba / Batería a Aplicar *</label>
                  <select className="select-input" value={testCode} onChange={(e) => setTestCode(e.target.value)}>
                    <option value="WISC-V">WISC-V (Escala Intelectual Global)</option>
                    <option value="EDAH">EDAH (Evaluación TDAH)</option>
                    <option value="PROLEC-R">PROLEC-R / PROESC (Batería Lectoescritura)</option>
                    <option value="SENA">SENA (Evaluación Socioemocional)</option>
                    <option value="BADYG">BADyG (Altas Capacidades / Lógica)</option>
                    <option value="d2">d2 (Atención Sostenida)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Fecha de la Cita *</label>
                  <input type="date" className="input-text" required value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Hora de Inicio *</label>
                  <input type="time" className="input-text" required value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Lugar / Ubicación *</label>
                  <input type="text" className="input-text" required value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                  <Plus size={16} /> Programar Cita y Notificar al Tutor
                </button>
              </div>
            </form>

            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>Citas Programadas para este Alumno</h4>
            {(!referralCase.evaluationSessions || referralCase.evaluationSessions.length === 0) ? (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>No hay citas agendadas aún para este expediente.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {referralCase.evaluationSessions.map(s => (
                  <div key={s.id} style={{ background: '#ffffff', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.15rem 0.5rem', borderRadius: '6px', fontWeight: 700 }}>
                        {s.testCode}
                      </span>
                      <strong style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>{s.testName}</strong>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        📅 {s.date} a las {s.time} • 📍 {s.location} ({s.counselorName})
                      </div>
                    </div>
                    <span style={{ background: '#dcfce7', color: '#15803d', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* OFFICIAL CONSENT DOCUMENT */}
        {activeTab === 'CONSENT' && (
          <div>
            <div className="no-print" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
              <button className="btn btn-primary" onClick={handlePrintConsent}>
                <Printer size={16} /> Imprimir Documento de Consentimiento
              </button>
            </div>

            <div style={{ background: '#ffffff', padding: '2rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }} id="printable-consent">
              <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: '#64748b', textAlign: 'center', letterSpacing: '0.05em' }}>
                Gabinete Psicopedagógico Escolar • Documento Oficial
              </div>
              <h2 style={{ textAlign: 'center', fontSize: '1.3rem', margin: '0.5rem 0 1.5rem 0', color: 'var(--primary-900)' }}>
                AUTORIZACIÓN Y CONSENTIMIENTO INFORMADO PARA EVALUACIÓN PSICOPEDAGÓGICA
              </h2>

              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem', textAlign: 'justify' }}>
                Por la presente, D./Dª __________________________________________________________________ con DNI ______________________, como padre/madre/tutor legal del alumno/a <strong>{referralCase.studentName}</strong>, escolarizado/a en el curso <strong>{referralCase.grade}</strong>:
              </p>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                <strong>MANIFIESTA:</strong>
                <ol style={{ paddingLeft: '1.2rem', marginTop: '0.4rem' }}>
                  <li>Haber sido informado/a por el Equipo de Orientación y el Tutor/a acerca de los motivos de derivación psicopedagógica.</li>
                  <li>Conocer la naturaleza de las pruebas psicométricas y de observación que se aplicarán (baterías cognitivas, atención y lectoescritura).</li>
                  <li>Otorgar el consentimiento explícito para la aplicación de la evaluación psicopedagógica y la elaboración del posterior dictamen de medidas de apoyo.</li>
                </ol>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', fontSize: '0.85rem' }}>
                <div style={{ borderTop: '1px solid #000', width: '40%', paddingTop: '0.5rem', textAlign: 'center' }}>
                  Firma de la Familia / Tutores Legales<br />
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Fecha: ____ / ____ / 2026</span>
                </div>
                <div style={{ borderTop: '1px solid #000', width: '40%', paddingTop: '0.5rem', textAlign: 'center' }}>
                  Firma del Orientador/a Psicopedagógico/a<br />
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Sello del Gabinete Escolar</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
