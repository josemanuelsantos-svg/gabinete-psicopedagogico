import React, { useState } from 'react';
import {
  ReferralCase,
  GeneratedMedicalReport,
  InfantilDevelopedReport,
  PrimariaDevelopedReport
} from '../types';
import { generateMedicalReportDraft } from '../utils/medicalReportGenerator';
import {
  X,
  Printer,
  Edit3,
  Eye,
  Sparkles,
  CheckCircle2,
  Save,
  Lock
} from 'lucide-react';
import { OrientacionTau } from './FranciscanTauWord';

interface MedicalReportModalProps {
  referralCase: ReferralCase;
  counselorName: string;
  counselorEmail: string;
  isCounselor: boolean;
  onSaveReport: (caseId: string, report: GeneratedMedicalReport) => Promise<void>;
  onClose: () => void;
  onNotify?: (type: 'success' | 'error' | 'warning' | 'info', message: string) => void;
}

const PRIMARIA_FIELDS: Array<{ key: keyof PrimariaDevelopedReport; num: string; label: string }> = [
  { key: 'workPace', num: '01', label: 'Ritmo de trabajo' },
  { key: 'effortCapacity', num: '02', label: 'Capacidad de esfuerzo' },
  { key: 'oralComprehension', num: '03', label: 'Comprensión oral' },
  { key: 'oralCommunication', num: '04', label: 'Comunicación oral' },
  { key: 'attention', num: '05', label: 'Atención' },
  { key: 'logicalReasoning', num: '06', label: 'Razonamiento lógico' },
  { key: 'memory', num: '07', label: 'Memoria' },
  { key: 'frustrationTolerance', num: '08', label: 'Tolerancia a la frustración' },
  { key: 'spatialOrientation', num: '09', label: 'Orientación espacial' },
  { key: 'classSocialization', num: '10', label: 'Socialización en clase' },
  { key: 'autonomy', num: '11', label: 'Autonomía' }
];

const SCHOOL_NAVY = '#002D62';
const SCHOOL_BLUE = '#005CA9';
const SCHOOL_GOLD = '#F5A800';

const PrintSectionHeader: React.FC<{ num: string; title: string; subtitle?: string }> = ({ num, title, subtitle }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.55rem',
    background: '#eff6ff',
    borderLeft: `4px solid ${SCHOOL_GOLD}`,
    borderBottom: `1.5px solid ${SCHOOL_NAVY}`,
    padding: '0.32rem 0.6rem',
    marginBottom: '0.45rem',
    pageBreakAfter: 'avoid',
    breakAfter: 'avoid'
  }}>
    <span style={{
      background: SCHOOL_NAVY,
      color: SCHOOL_GOLD,
      fontWeight: 800,
      fontSize: '0.76rem',
      padding: '0.12rem 0.42rem',
      borderRadius: '4px',
      letterSpacing: '0.04em',
      flexShrink: 0
    }}>
      {num}
    </span>
    <div style={{ lineHeight: 1.2 }}>
      <span style={{ fontSize: '0.84rem', fontWeight: 800, color: SCHOOL_NAVY, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
        {title}
      </span>
      {subtitle && (
        <span style={{ display: 'block', fontSize: '0.70rem', color: '#475569', fontWeight: 500, marginTop: '0.08rem' }}>
          {subtitle}
        </span>
      )}
    </div>
  </div>
);

const FieldBox: React.FC<{ label: string; hint?: string; value: string }> = ({ label, hint, value }) => (
  <div style={{
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    overflow: 'hidden',
    marginBottom: '0.42rem',
    pageBreakInside: 'avoid',
    breakInside: 'avoid'
  }}>
    <div style={{
      background: '#f1f5f9',
      borderBottom: '1px solid #cbd5e1',
      padding: '0.24rem 0.55rem',
      fontSize: '0.74rem',
      fontWeight: 700,
      color: SCHOOL_NAVY
    }}>
      {label}
      {hint && <span style={{ fontWeight: 400, color: '#475569' }}> · {hint}</span>}
    </div>
    <div style={{
      padding: '0.38rem 0.55rem',
      fontSize: '0.79rem',
      color: '#1e293b',
      lineHeight: 1.44,
      whiteSpace: 'pre-line',
      background: '#ffffff'
    }}>
      {value || '—'}
    </div>
  </div>
);

export const MedicalReportModal: React.FC<MedicalReportModalProps> = ({
  referralCase,
  counselorName,
  counselorEmail,
  isCounselor,
  onSaveReport,
  onClose,
  onNotify
}) => {
  const defaultCounselorName = 'Mª Belén Hernando Martín';
  const defaultCounselorEmail = 'orientacionep@sanbuenaventura.org';

  const [report, setReport] = useState<GeneratedMedicalReport>(() => {
    const freshDraft = generateMedicalReportDraft(
      referralCase,
      counselorName && counselorName !== 'Equipo de Orientación' ? counselorName : defaultCounselorName,
      counselorEmail && counselorEmail !== 'orientacion@sanbuenaventura.es' ? counselorEmail : defaultCounselorEmail
    );

    if (referralCase.medicalReport) {
      const rep: GeneratedMedicalReport = {
        ...freshDraft,
        ...referralCase.medicalReport,
        // Garantizar que informes guardados anteriormente obtengan infantilData / primariaData
        infantilData: referralCase.medicalReport.infantilData || freshDraft.infantilData,
        primariaData: referralCase.medicalReport.primariaData || freshDraft.primariaData,
        reportFormat: referralCase.medicalReport.reportFormat || freshDraft.reportFormat
      };
      if (!rep.generatedByCounselorName || rep.generatedByCounselorName === 'Equipo de Orientación') {
        rep.generatedByCounselorName = defaultCounselorName;
      }
      if (!rep.counselorEmail || rep.counselorEmail === 'orientacion@sanbuenaventura.es') {
        rep.counselorEmail = defaultCounselorEmail;
      }
      return rep;
    }

    return freshDraft;
  });

  const [viewMode, setViewMode] = useState<'PREVIEW' | 'EDIT'>('PREVIEW');
  const [isSaving, setIsSaving] = useState(false);
  const [saveNotification, setSaveNotification] = useState<string | null>(null);

  const isInfantil = (report.reportFormat || (referralCase.stage === 'INFANTIL' ? 'INFANTIL' : 'PRIMARIA')) === 'INFANTIL';

  const updateInfantilField = <K extends keyof InfantilDevelopedReport>(key: K, val: InfantilDevelopedReport[K]) => {
    setReport(prev => ({
      ...prev,
      infantilData: {
        ...(prev.infantilData as InfantilDevelopedReport),
        [key]: val
      }
    }));
  };

  const updatePrimariaField = <K extends keyof PrimariaDevelopedReport>(key: K, val: PrimariaDevelopedReport[K]) => {
    setReport(prev => ({
      ...prev,
      primariaData: {
        ...(prev.primariaData as PrimariaDevelopedReport),
        [key]: val
      }
    }));
  };

  if (!isCounselor) {
    return (
      <div className="modal-overlay" role="dialog" aria-modal="true">
        <div className="modal-content" style={{ maxWidth: '480px', padding: '1.75rem', textAlign: 'center' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
            <Lock size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.5rem' }}>
            Acceso Exclusivo de Orientación
          </h3>
          <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1.25rem' }}>
            La generación, firma y emisión de informes médicos oficiales está reservada al Departamento de Orientación del centro.
          </p>
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Entendido
          </button>
        </div>
      </div>
    );
  }

  const handleRegenerateDraft = () => {
    if (window.confirm('¿Deseas regenerar el informe desarrollado a partir de las observaciones más recientes del tutor? Se actualizarán los textos actuales.')) {
      const fresh = generateMedicalReportDraft(
        referralCase,
        report.generatedByCounselorName || defaultCounselorName,
        report.counselorEmail || defaultCounselorEmail
      );
      setReport(fresh);
      setSaveNotification('Informe regenerado y desarrollado desde las observaciones del tutor');
      onNotify?.('info', 'Informe regenerado automáticamente desde las observaciones del tutor.');
      setTimeout(() => setSaveNotification(null), 3500);
    }
  };

  const handleSave = async (markFinalized = false) => {
    setIsSaving(true);
    const updated: GeneratedMedicalReport = {
      ...report,
      updatedAt: new Date().toISOString(),
      isFinalized: markFinalized ? true : report.isFinalized,
      signatureDate: report.signatureDate || new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })
    };

    try {
      await onSaveReport(referralCase.id, updated);
      setReport(updated);
      const msg = markFinalized ? '¡Informe oficial finalizado y validado!' : 'Borrador guardado correctamente';
      setSaveNotification(msg);
      onNotify?.('success', msg);
      setTimeout(() => setSaveNotification(null), 3000);
    } catch (err) {
      console.error(err);
      onNotify?.('error', 'Error al guardar el informe médico.');
      setSaveNotification('Error al guardar el informe.');
      setTimeout(() => setSaveNotification(null), 3500);
    } finally {
      setIsSaving(false);
    }
  };

  const today = new Date();
  const dayNum = today.getDate();
  const monthName = today.toLocaleDateString('es-ES', { month: 'long' });
  const yearNum = today.getFullYear();

  const inf = report.infantilData;
  const pri = report.primariaData;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content" style={{ maxWidth: '960px', maxHeight: '94vh', overflowY: 'auto', padding: '1.5rem' }}>
        {/* Barra superior de control (NO imprimible) */}
        <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.08rem', color: SCHOOL_NAVY, fontWeight: 800 }}>
              {isInfantil ? 'Informe de Recogida · Educación Infantil' : 'Informe de Derivación Médica · Educación Primaria'}
            </h3>
            <p style={{ margin: '0.15rem 0 0 0', fontSize: '0.78rem', color: '#64748b' }}>
              Alumno/a: <strong>{referralCase.studentName}</strong> ({referralCase.grade}) • Orientadora: <strong>{report.generatedByCounselorName}</strong>
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setViewMode(viewMode === 'PREVIEW' ? 'EDIT' : 'PREVIEW')}
              style={{ padding: '0.38rem 0.75rem', fontSize: '0.8rem' }}
            >
              {viewMode === 'PREVIEW' ? <><Edit3 size={14} /> Editar Textos</> : <><Eye size={14} /> Vista Impresión</>}
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleRegenerateDraft}
              style={{ padding: '0.38rem 0.75rem', fontSize: '0.8rem', background: '#fffbeb', color: '#92400e', borderColor: '#fcd34d' }}
              title="Regenera todos los apartados desarrollados a partir de lo que rellenó el tutor"
            >
              <Sparkles size={14} /> Regenerar del Tutor
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleSave(false)}
              disabled={isSaving}
              style={{ padding: '0.38rem 0.75rem', fontSize: '0.8rem' }}
            >
              <Save size={14} /> Guardar
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setViewMode('PREVIEW');
                setTimeout(() => window.print(), 120);
              }}
              style={{ padding: '0.38rem 0.85rem', fontSize: '0.8rem', background: SCHOOL_NAVY, borderColor: SCHOOL_NAVY }}
            >
              <Printer size={14} /> Imprimir / PDF
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              style={{ padding: '0.35rem', minHeight: '34px' }}
              aria-label="Cerrar"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {saveNotification && (
          <div className="no-print" style={{ background: '#ecfdf5', border: '1px solid #86efac', color: '#166534', padding: '0.55rem 0.9rem', borderRadius: '8px', marginBottom: '0.9rem', fontSize: '0.82rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <CheckCircle2 size={16} /> {saveNotification}
          </div>
        )}

        {/* ================================================================= */}
        {/* MODO EDICIÓN (Para que Mª Belén ajuste cualquier apartado)        */}
        {/* ================================================================= */}
        {viewMode === 'EDIT' && (
          <div className="no-print" style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', background: '#f8fafc', padding: '0.85rem', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
              <div>
                <label className="form-label" style={{ fontSize: '0.78rem' }}>Formato del Informe</label>
                <select
                  className="select-input"
                  value={isInfantil ? 'INFANTIL' : 'PRIMARIA'}
                  onChange={(e) => setReport(prev => ({ ...prev, reportFormat: e.target.value as 'INFANTIL' | 'PRIMARIA' }))}
                  style={{ minHeight: '36px', fontSize: '0.82rem' }}
                >
                  <option value="INFANTIL">Educación Infantil (Recogida 01-08)</option>
                  <option value="PRIMARIA">Educación Primaria (Derivación 01-04 · 11 ámbitos)</option>
                </select>
              </div>
              <div>
                <label className="form-label" style={{ fontSize: '0.78rem' }}>Fecha de nacimiento</label>
                <input
                  type="text"
                  className="input-text"
                  placeholder="dd / mm / aaaa"
                  value={report.birthDate || ''}
                  onChange={(e) => setReport(prev => ({ ...prev, birthDate: e.target.value }))}
                  style={{ minHeight: '36px', fontSize: '0.82rem' }}
                />
              </div>
              {isInfantil && (
                <div>
                  <label className="form-label" style={{ fontSize: '0.78rem' }}>Edad (años y meses)</label>
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Ej: 4 años y 6 meses"
                    value={report.studentAgeText || ''}
                    onChange={(e) => setReport(prev => ({ ...prev, studentAgeText: e.target.value }))}
                    style={{ minHeight: '36px', fontSize: '0.82rem' }}
                  />
                </div>
              )}
              <div>
                <label className="form-label" style={{ fontSize: '0.78rem' }}>Tutor/a Responsable</label>
                <input
                  type="text"
                  className="input-text"
                  value={report.tutorName || referralCase.teacherName}
                  onChange={(e) => setReport(prev => ({ ...prev, tutorName: e.target.value }))}
                  style={{ minHeight: '36px', fontSize: '0.82rem' }}
                />
              </div>
              <div>
                <label className="form-label" style={{ fontSize: '0.78rem' }}>Orientadora Responsable</label>
                <input
                  type="text"
                  className="input-text"
                  value={report.generatedByCounselorName}
                  onChange={(e) => setReport(prev => ({ ...prev, generatedByCounselorName: e.target.value }))}
                  style={{ minHeight: '36px', fontSize: '0.82rem' }}
                />
              </div>
              <div>
                <label className="form-label" style={{ fontSize: '0.78rem' }}>Correo de Orientación</label>
                <input
                  type="email"
                  className="input-text"
                  value={report.counselorEmail}
                  onChange={(e) => setReport(prev => ({ ...prev, counselorEmail: e.target.value }))}
                  style={{ minHeight: '36px', fontSize: '0.82rem' }}
                />
              </div>
            </div>

            {isInfantil && inf ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h4 style={{ margin: '0.25rem 0 0 0', color: SCHOOL_NAVY }}>02 · Motivo de la Derivación</h4>
                <textarea rows={3} className="textarea-input" value={inf.difficultyExamples} onChange={(e) => updateInfantilField('difficultyExamples', e.target.value)} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.76rem' }}>¿Desde cuándo se observan?</label>
                    <input className="input-text" value={inf.sinceWhen} onChange={(e) => updateInfantilField('sinceWhen', e.target.value)} style={{ minHeight: '36px' }} />
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.76rem' }}>¿En qué situaciones aparecen?</label>
                    <input className="input-text" value={inf.situations} onChange={(e) => updateInfantilField('situations', e.target.value)} style={{ minHeight: '36px' }} />
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.76rem' }}>¿Frecuencia e intensidad?</label>
                    <input className="input-text" value={inf.frequencyIntensity} onChange={(e) => updateInfantilField('frequencyIntensity', e.target.value)} style={{ minHeight: '36px' }} />
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.76rem' }}>¿En qué contextos?</label>
                    <input className="input-text" value={inf.contextsText} onChange={(e) => updateInfantilField('contextsText', e.target.value)} style={{ minHeight: '36px' }} />
                  </div>
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '0.76rem' }}>Cambios recientes</label>
                  <textarea rows={2} className="textarea-input" value={inf.recentChanges} onChange={(e) => updateInfantilField('recentChanges', e.target.value)} />
                </div>

                <h4 style={{ margin: '0.5rem 0 0 0', color: SCHOOL_NAVY }}>03 · Áreas de Desarrollo</h4>
                {[
                  { k: 'language', l: 'Lenguaje y comunicación' },
                  { k: 'motor', l: 'Desarrollo motor' },
                  { k: 'cognitive', l: 'Habilidades cognitivas y aprendizaje' },
                  { k: 'autonomy', l: 'Autonomía y hábitos' },
                  { k: 'socioEmotional', l: 'Desarrollo socioemocional' }
                ].map(item => (
                  <div key={item.k}>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>{item.l}</label>
                    <textarea
                      rows={2}
                      className="textarea-input"
                      value={inf[item.k as keyof InfantilDevelopedReport] as string}
                      onChange={(e) => updateInfantilField(item.k as keyof InfantilDevelopedReport, e.target.value as any)}
                    />
                  </div>
                ))}

                <h4 style={{ margin: '0.5rem 0 0 0', color: SCHOOL_NAVY }}>04 · Juego, Intereses y Estilo de Aprendizaje</h4>
                {[
                  { k: 'play', l: 'Juego e interacción' },
                  { k: 'creativity', l: 'Creatividad, preferencias e intereses' },
                  { k: 'learningStyle', l: 'Forma de aprender y realizar tareas' },
                  { k: 'sensoryDetails', l: 'Respuestas sensoriales / conductas repetitivas (si procede)' }
                ].map(item => (
                  <div key={item.k}>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>{item.l}</label>
                    <textarea
                      rows={2}
                      className="textarea-input"
                      value={inf[item.k as keyof InfantilDevelopedReport] as string}
                      onChange={(e) => updateInfantilField(item.k as keyof InfantilDevelopedReport, e.target.value as any)}
                    />
                  </div>
                ))}

                <h4 style={{ margin: '0.5rem 0 0 0', color: SCHOOL_NAVY }}>05–07 · Competencia Curricular, Apoyos Externos y Síntesis</h4>
                {[
                  { k: 'curricularProgress', l: '05 · Progreso respecto a los objetivos del nivel' },
                  { k: 'attendanceParticipation', l: '05 · Asistencia, adaptación y participación en rutinas' },
                  { k: 'externalSupports', l: '06 · Apoyos externos conocidos por el centro' },
                  { k: 'strengths', l: '07 · Fortalezas y recursos personales' },
                  { k: 'additionalInfo', l: '07 · Información adicional para la consulta médica' }
                ].map(item => (
                  <div key={item.k}>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>{item.l}</label>
                    <textarea
                      rows={2}
                      className="textarea-input"
                      value={inf[item.k as keyof InfantilDevelopedReport] as string}
                      onChange={(e) => updateInfantilField(item.k as keyof InfantilDevelopedReport, e.target.value as any)}
                    />
                  </div>
                ))}
              </div>
            ) : pri ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h4 style={{ margin: '0.25rem 0 0 0', color: SCHOOL_NAVY }}>02 · Contexto Escolar y Apoyos</h4>
                <div>
                  <label className="form-label" style={{ fontSize: '0.78rem' }}>Apoyos semanales de Lengua y Matemáticas en grupo reducido</label>
                  <textarea rows={2} className="textarea-input" value={pri.groupSupport} onChange={(e) => updatePrimariaField('groupSupport', e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '0.78rem' }}>Apoyo del especialista de Pedagogía Terapéutica (PT)</label>
                  <textarea rows={2} className="textarea-input" value={pri.ptSupport} onChange={(e) => updatePrimariaField('ptSupport', e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '0.78rem' }}>Medidas de acceso a los procesos de evaluación</label>
                  <textarea rows={2} className="textarea-input" value={pri.evalMeasures} onChange={(e) => updatePrimariaField('evalMeasures', e.target.value)} />
                </div>

                <h4 style={{ margin: '0.5rem 0 0 0', color: SCHOOL_NAVY }}>03 · Desarrollo y Funcionamiento en el Aula (11 Ámbitos)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '0.75rem' }}>
                  {PRIMARIA_FIELDS.map(f => (
                    <div key={f.key}>
                      <label className="form-label" style={{ fontSize: '0.78rem', color: SCHOOL_NAVY }}>
                        {f.num} · {f.label}
                      </label>
                      <textarea
                        rows={3}
                        className="textarea-input"
                        value={pri[f.key]}
                        onChange={(e) => updatePrimariaField(f.key, e.target.value)}
                      />
                    </div>
                  ))}
                </div>

                <h4 style={{ margin: '0.5rem 0 0 0', color: SCHOOL_NAVY }}>04 · Cierre y Coordinación</h4>
                <textarea rows={2} className="textarea-input" value={pri.closingNote} onChange={(e) => updatePrimariaField('closingNote', e.target.value)} />
              </div>
            ) : null}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', paddingTop: '0.75rem', borderTop: '1px solid #e2e8f0' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setViewMode('PREVIEW')}>
                Ver Vista Previa
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleSave(true)}
                disabled={isSaving}
                style={{ background: '#15803d', borderColor: '#15803d' }}
              >
                <CheckCircle2 size={15} /> Guardar y Validar Informe Oficial
              </button>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* VISTA PREVIA / VERSIÓN IMPRIMIBLE CON COLORES DEL COLEGIO Y TAU   */}
        {/* ================================================================= */}
        {viewMode === 'PREVIEW' && (
          <div
            className="printable-medical-report"
            style={{
              background: '#ffffff',
              color: '#0f172a',
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              fontFamily: 'var(--font-primary)',
              WebkitPrintColorAdjust: 'exact',
              printColorAdjust: 'exact'
            }}
          >
            {/* CABECERA OFICIAL CON COLORES DEL COLEGIO SAN BUENAVENTURA Y CRUZ TAU */}
            <div style={{
              background: `linear-gradient(135deg, ${SCHOOL_NAVY} 0%, ${SCHOOL_BLUE} 100%)`,
              color: '#ffffff',
              borderRadius: '8px',
              borderBottom: `4px solid ${SCHOOL_GOLD}`,
              padding: '0.75rem 1rem',
              marginBottom: '0.65rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '0.85rem',
              pageBreakInside: 'avoid',
              breakInside: 'avoid'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ background: '#ffffff', padding: '0.32rem 0.5rem', borderRadius: '6px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  <img
                    src="/logo-colegio.png"
                    alt="Colegio San Buenaventura"
                    style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#FEF08A', letterSpacing: '0.03em' }}>
                    Departamento de <OrientacionTau style={{ color: '#ffffff', fontWeight: 800 }} />
                  </div>
                  <h1 style={{ margin: '0.12rem 0 0 0', fontSize: '1.08rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.01em', lineHeight: 1.18 }}>
                    {isInfantil
                      ? 'RECOGIDA DE INFORMACIÓN DEL TUTOR/A'
                      : 'INFORME DE DERIVACIÓN MÉDICA'}
                  </h1>
                  <div style={{ fontSize: '0.74rem', color: '#DBEAFE', marginTop: '0.12rem' }}>
                    {isInfantil ? (
                      'Educación Infantil · Documento de apoyo para derivación y coordinación médica'
                    ) : (
                      <>
                        Educación Primaria · Departamento de <OrientacionTau style={{ color: '#ffffff', fontWeight: 700 }} />
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#E0F2FE', lineHeight: 1.38, flexShrink: 0 }}>
                <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.72rem' }}>Colegio San Buenaventura</div>
                <div>Calle El Greco, 16 · 28011 Madrid</div>
                <div style={{ color: '#FDE68A', fontWeight: 600 }}>{report.counselorEmail || defaultCounselorEmail}</div>
              </div>
            </div>

            {/* ============================================================= */}
            {/* PLANTILLA IMPRESA 1: EDUCACIÓN INFANTIL (01 - 08)             */}
            {/* ============================================================= */}
            {isInfantil && inf && (
              <div>
                <p style={{
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderLeft: `3px solid ${SCHOOL_BLUE}`,
                  borderRadius: '4px',
                  padding: '0.35rem 0.6rem',
                  fontSize: '0.73rem',
                  color: '#334155',
                  marginBottom: '0.6rem',
                  lineHeight: 1.38
                }}>
                  Cumplimentar desde la observación escolar. Describir conductas y situaciones concretas, indicando desde cuándo se observan y en qué contextos. No incluir diagnósticos ni conclusiones clínicas.
                </p>

                {/* 01 · DATOS DE IDENTIFICACIÓN */}
                <PrintSectionHeader num="01" title="Datos de Identificación" />
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.77rem', marginBottom: '0.65rem', border: '1px solid #cbd5e1' }}>
                  <tbody>
                    {[
                      ['Nombre y apellidos del alumno/a:', referralCase.studentName],
                      ['Fecha de nacimiento:', report.birthDate || '____ / ____ / ______'],
                      ['Edad:', report.studentAgeText || 'años y meses'],
                      ['Etapa / nivel / grupo:', referralCase.grade],
                      ['Tutor/a:', report.tutorName || referralCase.teacherName],
                      ['Fecha de cumplimentación:', report.signatureDate || today.toLocaleDateString('es-ES')]
                    ].map(([lbl, val], i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #cbd5e1' }}>
                        <td style={{ width: '38%', background: '#f1f5f9', fontWeight: 700, color: SCHOOL_NAVY, padding: '0.28rem 0.55rem', borderRight: '1px solid #cbd5e1' }}>
                          {lbl}
                        </td>
                        <td style={{ padding: '0.28rem 0.55rem', color: '#0f172a', fontWeight: i === 0 ? 700 : 500 }}>
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* 02 · MOTIVO DE LA DERIVACIÓN */}
                <PrintSectionHeader
                  num="02"
                  title="Motivo de la Derivación"
                  subtitle="Qué preocupa, quién lo comunica y qué información se considera relevante para la consulta médica."
                />
                <FieldBox
                  label="Dificultades o conductas observadas (ejemplos concretos y frecuencia)"
                  value={inf.difficultyExamples}
                />
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.76rem', marginBottom: '0.45rem', border: '1px solid #cbd5e1', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                  <tbody>
                    {[
                      ['¿Desde cuándo se observan?', inf.sinceWhen],
                      ['¿En qué situaciones o momentos aparecen?', inf.situations],
                      ['¿Con qué frecuencia e intensidad?', inf.frequencyIntensity],
                      ['¿En qué contextos se aprecian?', inf.contextsText]
                    ].map(([lbl, val], i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #cbd5e1' }}>
                        <td style={{ width: '34%', background: '#f1f5f9', fontWeight: 700, color: SCHOOL_NAVY, padding: '0.26rem 0.5rem', borderRight: '1px solid #cbd5e1' }}>
                          {lbl}
                        </td>
                        <td style={{ padding: '0.26rem 0.5rem', color: '#1e293b' }}>{val || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '0.32rem 0.55rem',
                  marginBottom: '0.42rem',
                  fontSize: '0.76rem',
                  display: 'flex',
                  gap: '1.1rem',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  background: '#ffffff'
                }}>
                  <strong style={{ color: SCHOOL_NAVY }}>Contextos en los que se observa:</strong>
                  {['Aula', 'Patio', 'Comedor', 'Otros'].map(ctx => {
                    const checked = (inf.contextsSelected || []).includes(ctx);
                    return (
                      <span key={ctx} style={{ fontWeight: checked ? 700 : 500, color: checked ? SCHOOL_NAVY : '#475569' }}>
                        {checked ? '☑' : '☐'} {ctx}
                        {ctx === 'Otros' && checked && inf.contextsOther ? `: ${inf.contextsOther}` : ''}
                      </span>
                    );
                  })}
                </div>
                <FieldBox
                  label="Cambios recientes respecto a su funcionamiento habitual"
                  value={inf.recentChanges}
                />

                {/* 03 · ÁREAS DE DESARROLLO */}
                <PrintSectionHeader
                  num="03"
                  title="Áreas de Desarrollo"
                  subtitle="Nivel de autonomía y desempeño observado en las rutinas y actividades habituales del aula."
                />
                <FieldBox label="Lenguaje y comunicación" hint="Comprensión, expresión oral, pronunciación, frases e intención comunicativa" value={inf.language} />
                <FieldBox label="Desarrollo motor" hint="Motricidad gruesa y fina" value={inf.motor} />
                <FieldBox label="Habilidades cognitivas y aprendizaje" hint="Atención, memoria, imitación, resolución de problemas y respuesta a nuevas tareas" value={inf.cognitive} />
                <FieldBox label="Autonomía y hábitos" hint="Esfínteres si procede, vestido, alimentación, higiene y seguimiento de rutinas" value={inf.autonomy} />
                <FieldBox label="Desarrollo socioemocional" hint="Relación con iguales y adultos, regulación emocional, frustración y adaptación a cambios" value={inf.socioEmotional} />

                {/* 04 · JUEGO, INTERESES Y ESTILO DE APRENDIZAJE */}
                <PrintSectionHeader num="04" title="Juego, Intereses y Estilo de Aprendizaje" />
                <FieldBox label="Juego e interacción" hint="Tipos de juego, juego simbólico, iniciativa, turnos e intereses compartidos" value={inf.play} />
                <FieldBox label="Creatividad, preferencias e intereses" hint="Actividades motivadoras y formas de expresión creativa" value={inf.creativity} />
                <FieldBox label="Forma de aprender y realizar tareas" hint="Apoyos que facilitan la comprensión, ritmo, perseverancia y supervisión" value={inf.learningStyle} />
                <div style={{
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '0.35rem 0.55rem',
                  marginBottom: '0.5rem',
                  fontSize: '0.76rem',
                  pageBreakInside: 'avoid',
                  breakInside: 'avoid'
                }}>
                  <div style={{ fontWeight: 700, color: SCHOOL_NAVY, marginBottom: '0.22rem' }}>
                    En el entorno escolar, ¿se observan respuestas sensoriales o conductas repetitivas que afecten a su participación?
                  </div>
                  <div style={{ display: 'flex', gap: '1.25rem', marginBottom: inf.sensoryDetails ? '0.3rem' : 0 }}>
                    <span>{inf.sensoryRepetitive === 'SI' ? '☑' : '☐'} Sí</span>
                    <span>{inf.sensoryRepetitive === 'NO' ? '☑' : '☐'} No</span>
                    <span>{inf.sensoryRepetitive === 'NO_CONSTA' || !inf.sensoryRepetitive ? '☑' : '☐'} No consta</span>
                  </div>
                  {inf.sensoryDetails && (
                    <div style={{ borderTop: '1px dashed #cbd5e1', paddingTop: '0.28rem', color: '#1e293b', lineHeight: 1.42 }}>
                      {inf.sensoryDetails}
                    </div>
                  )}
                </div>

                {/* 05 · COMPETENCIA CURRICULAR Y PARTICIPACIÓN */}
                <PrintSectionHeader num="05" title="Competencia Curricular y Participación" />
                <FieldBox label="Progreso respecto a los objetivos del nivel" value={inf.curricularProgress} />
                <FieldBox label="Asistencia, adaptación y participación en las rutinas escolares" value={inf.attendanceParticipation} />

                {/* 06 · MEDIDAS Y APOYOS APLICADOS */}
                <PrintSectionHeader num="06" title="Medidas y Apoyos Aplicados" />
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.76rem', marginBottom: '0.45rem', border: '1px solid #cbd5e1', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                  <thead>
                    <tr style={{ background: SCHOOL_NAVY, color: '#ffffff' }}>
                      <th style={{ textAlign: 'left', padding: '0.3rem 0.5rem', width: '40%' }}>Medida / apoyo aplicado</th>
                      <th style={{ textAlign: 'left', padding: '0.3rem 0.5rem', width: '20%' }}>Periodo</th>
                      <th style={{ textAlign: 'left', padding: '0.3rem 0.5rem', width: '40%' }}>Respuesta observada / resultado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(inf.measuresTable || []).map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #cbd5e1' }}>
                        <td style={{ padding: '0.3rem 0.5rem', borderRight: '1px solid #cbd5e1' }}>{row.measure}</td>
                        <td style={{ padding: '0.3rem 0.5rem', borderRight: '1px solid #cbd5e1' }}>{row.period}</td>
                        <td style={{ padding: '0.3rem 0.5rem' }}>{row.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <FieldBox
                  label="Apoyos externos conocidos por el centro y coordinación realizada"
                  value={inf.externalSupports}
                />

                {/* 07 · SÍNTESIS DEL TUTOR/A */}
                <PrintSectionHeader num="07" title="Síntesis del Tutor/a" />
                <FieldBox label="Fortalezas, recursos personales y situaciones en las que muestra un mejor desempeño" value={inf.strengths} />
                <FieldBox label="Información adicional que se considere importante para la consulta médica" value={inf.additionalInfo} />

                {/* 08 · FIRMAS DE LA TUTORA Y LA ORIENTADORA */}
                <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid', marginTop: '0.55rem' }}>
                  <PrintSectionHeader num="08" title="Firmas de la Tutora y la Orientadora" />
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.76rem', marginBottom: '0.5rem', border: '1px solid #cbd5e1' }}>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                        <td style={{ width: '34%', background: '#f1f5f9', fontWeight: 700, color: SCHOOL_NAVY, padding: '0.26rem 0.5rem', borderRight: '1px solid #cbd5e1' }}>Tutora de Educación Infantil:</td>
                        <td style={{ padding: '0.26rem 0.5rem' }}>{report.tutorName || referralCase.teacherName}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                        <td style={{ background: '#f1f5f9', fontWeight: 700, color: SCHOOL_NAVY, padding: '0.26rem 0.5rem', borderRight: '1px solid #cbd5e1' }}>Orientadora:</td>
                        <td style={{ padding: '0.26rem 0.5rem', fontWeight: 700 }}>{report.generatedByCounselorName || defaultCounselorName}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                        <td style={{ background: '#f1f5f9', fontWeight: 700, color: SCHOOL_NAVY, padding: '0.26rem 0.5rem', borderRight: '1px solid #cbd5e1' }}>Centro:</td>
                        <td style={{ padding: '0.26rem 0.5rem' }}>Colegio San Buenaventura</td>
                      </tr>
                      <tr>
                        <td style={{ background: '#f1f5f9', fontWeight: 700, color: SCHOOL_NAVY, padding: '0.26rem 0.5rem', borderRight: '1px solid #cbd5e1' }}>Fecha:</td>
                        <td style={{ padding: '0.26rem 0.5rem' }}>{report.signatureDate || today.toLocaleDateString('es-ES')}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div style={{ border: '1px solid #94a3b8', borderRadius: '6px', padding: '0.45rem 0.65rem', minHeight: '78px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 800, color: SCHOOL_NAVY, textAlign: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.2rem' }}>
                        FIRMA DE LA TUTORA
                      </div>
                      <div style={{ fontSize: '0.74rem', textAlign: 'center', color: '#334155' }}>
                        Fdo.: {report.tutorName || referralCase.teacherName}
                      </div>
                    </div>
                    <div style={{ border: '1px solid #94a3b8', borderRadius: '6px', padding: '0.45rem 0.65rem', minHeight: '78px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 800, color: SCHOOL_NAVY, textAlign: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.2rem' }}>
                        FIRMA DE LA ORIENTADORA
                      </div>
                      <div style={{ fontSize: '0.74rem', textAlign: 'center', color: '#334155', fontWeight: 700 }}>
                        Fdo.: {report.generatedByCounselorName || defaultCounselorName}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', fontSize: '0.68rem', color: '#64748b', marginTop: '0.65rem', borderTop: `2px solid ${SCHOOL_GOLD}`, paddingTop: '0.3rem', fontWeight: 600 }}>
                  DOCUMENTO CONFIDENCIAL · Información destinada a la coordinación profesional autorizada.
                </div>
              </div>
            )}

            {/* ============================================================= */}
            {/* PLANTILLA IMPRESA 2: EDUCACIÓN PRIMARIA (01 - 04 · 11 Ámbitos)*/}
            {/* ============================================================= */}
            {!isInfantil && pri && (
              <div>
                <p style={{
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderLeft: `3px solid ${SCHOOL_BLUE}`,
                  borderRadius: '4px',
                  padding: '0.32rem 0.6rem',
                  fontSize: '0.74rem',
                  color: '#334155',
                  marginBottom: '0.6rem'
                }}>
                  Documento de coordinación · Información escolar para valoración por el especialista médico ({report.targetSpecialistTitle}).
                </p>

                {/* 01 · DATOS DEL ALUMNO/A */}
                <PrintSectionHeader num="01" title="Datos del Alumno/a" />
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem', marginBottom: '0.65rem', border: '1px solid #cbd5e1' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                      <td style={{ width: '28%', background: '#f1f5f9', fontWeight: 700, color: SCHOOL_NAVY, padding: '0.3rem 0.55rem', borderRight: '1px solid #cbd5e1' }}>
                        Apellidos y nombre:
                      </td>
                      <td colSpan={3} style={{ padding: '0.3rem 0.55rem', fontWeight: 700, color: '#0f172a' }}>
                        {referralCase.studentName}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ background: '#f1f5f9', fontWeight: 700, color: SCHOOL_NAVY, padding: '0.3rem 0.55rem', borderRight: '1px solid #cbd5e1' }}>
                        Curso / grupo:
                      </td>
                      <td style={{ padding: '0.3rem 0.55rem', borderRight: '1px solid #cbd5e1' }}>
                        {referralCase.grade}
                      </td>
                      <td style={{ width: '24%', background: '#f1f5f9', fontWeight: 700, color: SCHOOL_NAVY, padding: '0.3rem 0.55rem', borderRight: '1px solid #cbd5e1' }}>
                        Fecha de nacimiento:
                      </td>
                      <td style={{ padding: '0.3rem 0.55rem' }}>
                        {report.birthDate || '____ / ____ / ______'}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* 02 · CONTEXTO ESCOLAR Y APOYOS */}
                <PrintSectionHeader num="02" title="Contexto Escolar y Apoyos" />
                <p style={{ fontSize: '0.79rem', color: '#1e293b', lineHeight: 1.45, marginBottom: '0.45rem' }}>
                  El/la alumno/a <strong>{referralCase.studentName}</strong> está escolarizado/a en <strong>{referralCase.grade}</strong> del <strong>Colegio San Buenaventura</strong>, curso que le corresponde por edad. Actualmente recibe:
                </p>
                <FieldBox
                  label="Apoyos semanales de Lengua y Matemáticas en grupo reducido"
                  value={pri.groupSupport}
                />
                <FieldBox
                  label="Apoyo del especialista de Pedagogía Terapéutica (PT)"
                  value={pri.ptSupport}
                />
                <FieldBox
                  label="Medidas de acceso a los procesos de evaluación"
                  value={pri.evalMeasures}
                />
                <p style={{ fontSize: '0.77rem', color: '#334155', fontStyle: 'italic', margin: '0.35rem 0 0.6rem 0' }}>
                  En este informe se recoge información sobre distintos ámbitos evolutivos y curriculares para facilitar la valoración de las dificultades o necesidades observadas.
                </p>

                {/* 03 · DESARROLLO Y FUNCIONAMIENTO EN EL AULA (11 ÁMBITOS) */}
                <PrintSectionHeader
                  num="03"
                  title="Desarrollo y Funcionamiento en el Aula"
                  subtitle="Conductas observables y ejemplos relevantes en cada ámbito."
                />
                {PRIMARIA_FIELDS.map(f => (
                  <FieldBox
                    key={f.key}
                    label={`${f.num} · ${f.label}`}
                    value={pri[f.key]}
                  />
                ))}

                {/* 04 · CIERRE Y COORDINACIÓN */}
                <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid', marginTop: '0.55rem' }}>
                  <PrintSectionHeader num="04" title="Cierre y Coordinación" />
                  <p style={{ fontSize: '0.79rem', color: '#1e293b', lineHeight: 1.48, marginBottom: '0.5rem' }}>
                    {pri.closingNote}
                  </p>
                  <p style={{ fontSize: '0.79rem', color: '#0f172a', fontWeight: 600, marginBottom: '0.65rem' }}>
                    En Madrid, a {dayNum} de {monthName} de {yearNum}.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                    <div style={{ border: '1px solid #94a3b8', borderRadius: '6px', padding: '0.45rem 0.65rem', minHeight: '84px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 800, color: SCHOOL_NAVY, textAlign: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.2rem' }}>
                        TUTOR/A
                      </div>
                      <div style={{ fontSize: '0.74rem', textAlign: 'center', color: '#334155' }}>
                        Nombre y firma: <strong>{report.tutorName || referralCase.teacherName}</strong>
                      </div>
                    </div>

                    <div style={{ border: '1px solid #94a3b8', borderRadius: '6px', padding: '0.45rem 0.65rem', minHeight: '84px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 800, color: SCHOOL_NAVY, textAlign: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.2rem' }}>
                        ORIENTADORA DE INFANTIL Y PRIMARIA
                      </div>
                      <div style={{ fontSize: '0.74rem', textAlign: 'center', color: '#334155' }}>
                        Nombre y firma: <strong>{report.generatedByCounselorName || 'María Belén Hernando Martín'}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', fontSize: '0.68rem', color: '#64748b', marginTop: '0.65rem', borderTop: `2px solid ${SCHOOL_GOLD}`, paddingTop: '0.3rem', fontWeight: 600 }}>
                  DOCUMENTO CONFIDENCIAL · Información destinada a la coordinación profesional autorizada.
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
