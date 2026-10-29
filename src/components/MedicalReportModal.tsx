import React, { useState } from 'react';
import { ReferralCase, GeneratedMedicalReport } from '../types';
import { generateMedicalReportDraft } from '../utils/medicalReportGenerator';
import { X, Printer, Edit3, Eye, Sparkles, CheckCircle2, Save, FileText, Lock } from 'lucide-react';

interface MedicalReportModalProps {
  referralCase: ReferralCase;
  counselorName: string;
  counselorEmail: string;
  isCounselor: boolean;
  onSaveReport: (caseId: string, report: GeneratedMedicalReport) => Promise<void>;
  onClose: () => void;
}

export const MedicalReportModal: React.FC<MedicalReportModalProps> = ({
  referralCase,
  counselorName,
  counselorEmail,
  isCounselor,
  onSaveReport,
  onClose
}) => {
  // Helper para renderizar párrafos limpios sin espacios muertos ni líneas en blanco redundantes
  const renderFormattedParagraphs = (rawText: string) => {
    if (!rawText) return null;
    const normalized = rawText.replace(/\r/g, '').replace(/\n{3,}/g, '\n\n').trim();
    const blocks = normalized.split('\n\n');

    return blocks.map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;
      return (
        <p key={idx} style={{ margin: '0 0 0.32rem 0', whiteSpace: 'pre-line', lineHeight: 1.45, fontSize: '0.80rem' }}>
          {trimmed}
        </p>
      );
    });
  };

  const defaultCounselorName = 'Mª Belén Hernando Martín';
  const defaultCounselorEmail = 'orientacionep@sanbuenaventura.org';

  // Inicialización del informe redactado: cargamos el existente o generamos borrador
  const [report, setReport] = useState<GeneratedMedicalReport>(() => {
    let rep: GeneratedMedicalReport;
    if (referralCase.medicalReport) {
      rep = { ...referralCase.medicalReport };
    } else {
      rep = generateMedicalReportDraft(
        referralCase, 
        counselorName && counselorName !== 'Equipo de Orientación' ? counselorName : defaultCounselorName, 
        counselorEmail && counselorEmail !== 'orientacion@sanbuenaventura.es' ? counselorEmail : defaultCounselorEmail
      );
    }

    // Auto-corregir si el informe guardado tenía el email antiguo o nombre genérico
    if (!rep.generatedByCounselorName || rep.generatedByCounselorName === 'Equipo de Orientación') {
      rep.generatedByCounselorName = counselorName && counselorName !== 'Equipo de Orientación' ? counselorName : defaultCounselorName;
    }
    if (!rep.counselorEmail || rep.counselorEmail === 'orientacion@sanbuenaventura.es') {
      rep.counselorEmail = defaultCounselorEmail;
    }

    return rep;
  });

  const [activeView, setActiveView] = useState<'EDIT' | 'PREVIEW'>('PREVIEW');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveNotification, setSaveNotification] = useState<string | null>(null);

  if (!isCounselor) {
    return (
      <div className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '600px', textAlign: 'center', padding: '2rem' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#fee2e2', color: '#b91c1c', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
            <Lock size={28} />
          </div>
          <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.5rem' }}>
            Acceso Reservado al Departamento de Orientación
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5, marginBottom: '1.5rem' }}>
            La generación, edición y emisión de Informes de Coordinación Sanitaria con Neuropediatras y Pediatras está restringida al equipo psicopedagógico oficial del centro para garantizar el secreto profesional y la custodia documental.
          </p>
          <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  }

  const handleRegenerate = () => {
    if (window.confirm('¿Deseas regenerar el borrador automático a partir de las observaciones más recientes del tutor? Se sobreescribirán los párrafos actuales.')) {
      const freshDraft = generateMedicalReportDraft(
        referralCase, 
        report.generatedByCounselorName || (counselorName && counselorName !== 'Equipo de Orientación' ? counselorName : defaultCounselorName), 
        report.counselorEmail || defaultCounselorEmail
      );
      setReport(freshDraft);
      setSaveNotification('Redacción regenerada con éxito');
      setTimeout(() => setSaveNotification(null), 3000);
    }
  };

  const handleSave = async (markFinalized: boolean = false) => {
    setIsSaving(true);
    const updated: GeneratedMedicalReport = {
      ...report,
      updatedAt: new Date().toISOString(),
      isFinalized: markFinalized ? true : report.isFinalized,
      signatureDate: report.signatureDate || new Date().toLocaleDateString('es-ES')
    };

    try {
      await onSaveReport(referralCase.id, updated);
      setReport(updated);
      setSaveNotification(markFinalized ? '¡Informe oficial finalizado y validado!' : 'Borrador guardado correctamente');
      setTimeout(() => setSaveNotification(null), 3000);
    } catch (err) {
      console.error(err);
      alert('Error al guardar el informe.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content" style={{ maxWidth: '960px', maxHeight: '94vh', overflowY: 'auto', padding: '1.75rem' }}>
        
        {/* Cabecera modal (no imprimible) */}
        <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#e0f2fe', color: '#0369a1', padding: '0.15rem 0.6rem', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 700 }}>
              <FileText size={13} /> {report.isFinalized ? 'INFORME OFICIAL FINALIZADO' : 'BORRADOR EN REVISIÓN'}
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', margin: '0.2rem 0 0 0' }}>
              Informe de Derivación a Neuropediatría / Pediatría
            </h3>
            <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
              Alumno/a: <strong>{referralCase.studentName}</strong> ({referralCase.grade}) • Orientadora: <strong>{report.generatedByCounselorName || defaultCounselorName}</strong>
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ display: 'flex', background: '#f1f5f9', padding: '0.2rem', borderRadius: '8px' }}>
              <button 
                type="button" 
                className={`btn ${activeView === 'PREVIEW' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveView('PREVIEW')}
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
              >
                <Eye size={14} /> Vista Oficial / Imprimir
              </button>
              <button 
                type="button" 
                className={`btn ${activeView === 'EDIT' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveView('EDIT')}
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
              >
                <Edit3 size={14} /> Editar Redacción
              </button>
            </div>

            <button type="button" className="btn btn-secondary" onClick={onClose} style={{ padding: '0.35rem 0.55rem', minHeight: '32px' }}>
              <X size={18} />
            </button>
          </div>
        </div>

        {saveNotification && (
          <div className="no-print" style={{ background: '#dcfce7', border: '1px solid #86efac', color: '#166534', padding: '0.65rem 1rem', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={16} /> {saveNotification}
          </div>
        )}

        {/* =========================================================================
            VISTA 1: MODO EDICIÓN NARRATIVA DE PÁRRAFOS
           ========================================================================= */}
        {activeView === 'EDIT' && (
          <div className="no-print" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '0.85rem 1.1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ fontSize: '0.82rem', color: '#334155' }}>
                ✏️ <strong>Redacción clínica-educativa editable:</strong> Modifica libremente cualquiera de los apartados para ajustarlos a la terminología del especialista médico.
              </div>
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={handleRegenerate} 
                style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem', background: '#ffffff', color: '#0f766e', borderColor: '#0f766e' }}
              >
                <Sparkles size={13} /> Regenerar Borrador desde Observaciones
              </button>
            </div>

            {/* Datos de Autoría y Contacto del Departamento de Orientación */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.85rem', background: '#f0fdfa', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid #99f6e4' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#0f766e', marginBottom: '0.25rem' }}>
                  Orientador/a Responsable (Firma oficial):
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={report.generatedByCounselorName}
                  onChange={(e) => setReport({ ...report, generatedByCounselorName: e.target.value })}
                  placeholder="Mª Belén Hernando Martín"
                  style={{ width: '100%', fontSize: '0.84rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#0f766e', marginBottom: '0.25rem' }}>
                  Correo Electrónico de Orientación:
                </label>
                <input
                  type="email"
                  className="input-field"
                  value={report.counselorEmail}
                  onChange={(e) => setReport({ ...report, counselorEmail: e.target.value })}
                  placeholder="orientacionep@sanbuenaventura.org"
                  style={{ width: '100%', fontSize: '0.84rem' }}
                />
              </div>
            </div>

            {/* 1. Motivo */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>
                1. Motivo Clínico de Derivación y Justificación Escolar:
              </label>
              <textarea 
                className="input-field" 
                rows={4}
                value={report.clinicalReasonNarrative}
                onChange={(e) => setReport({ ...report, clinicalReasonNarrative: e.target.value })}
                style={{ width: '100%', fontSize: '0.85rem', lineHeight: 1.45 }}
              />
            </div>

            {/* 2. Rendimiento y Competencia Curricular */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>
                2. Rendimiento Académico y Procesos de Aprendizaje:
              </label>
              <textarea 
                className="input-field" 
                rows={4}
                value={report.academicAndCognitiveNarrative}
                onChange={(e) => setReport({ ...report, academicAndCognitiveNarrative: e.target.value })}
                style={{ width: '100%', fontSize: '0.85rem', lineHeight: 1.45 }}
              />
            </div>

            {/* 3. Atención y Funciones Ejecutivas */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>
                3. Perfil de Atención Sostenida y Funciones Ejecutivas:
              </label>
              <textarea 
                className="input-field" 
                rows={4}
                value={report.attentionAndExecutiveNarrative}
                onChange={(e) => setReport({ ...report, attentionAndExecutiveNarrative: e.target.value })}
                style={{ width: '100%', fontSize: '0.85rem', lineHeight: 1.45 }}
              />
            </div>

            {/* 4. Actividad Motora e Impulsividad */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>
                4. Actividad Motora, Inquietud e Impulsividad:
              </label>
              <textarea 
                className="input-field" 
                rows={4}
                value={report.motorAndRestlessnessNarrative}
                onChange={(e) => setReport({ ...report, motorAndRestlessnessNarrative: e.target.value })}
                style={{ width: '100%', fontSize: '0.85rem', lineHeight: 1.45 }}
              />
            </div>

            {/* 5. Lenguaje, Comunicación y Grafismo */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>
                5. Lenguaje, Comunicación y Desarrollo Grafomotor:
              </label>
              <textarea 
                className="input-field" 
                rows={4}
                value={report.languageAndCommunicationNarrative}
                onChange={(e) => setReport({ ...report, languageAndCommunicationNarrative: e.target.value })}
                style={{ width: '100%', fontSize: '0.85rem', lineHeight: 1.45 }}
              />
            </div>

            {/* 6. Desarrollo Socioemocional */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>
                6. Dimensión Socioemocional y Relaciones Interpersonales:
              </label>
              <textarea 
                className="input-field" 
                rows={4}
                value={report.socioEmotionalNarrative}
                onChange={(e) => setReport({ ...report, socioEmotionalNarrative: e.target.value })}
                style={{ width: '100%', fontSize: '0.85rem', lineHeight: 1.45 }}
              />
            </div>

            {/* 7. Medidas de Aula Aplicadas */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>
                7. Medidas Educativas Ordinarias Ensayadas y Evolución:
              </label>
              <textarea 
                className="input-field" 
                rows={4}
                value={report.measuresAndEvolutionNarrative}
                onChange={(e) => setReport({ ...report, measuresAndEvolutionNarrative: e.target.value })}
                style={{ width: '100%', fontSize: '0.85rem', lineHeight: 1.45 }}
              />
            </div>

            {/* 8. Conclusiones y Solicitud al Especialista */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>
                8. Conclusiones y Solicitud al Especialista Médico:
              </label>
              <textarea 
                className="input-field" 
                rows={4}
                value={report.counselorSynthesisAndRecommendations}
                onChange={(e) => setReport({ ...report, counselorSynthesisAndRecommendations: e.target.value })}
                style={{ width: '100%', fontSize: '0.85rem', lineHeight: 1.45 }}
              />
            </div>

            {/* Botonera de guardado */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid #e2e8f0' }}>
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={() => handleSave(false)}
                disabled={isSaving}
              >
                <Save size={15} /> {isSaving ? 'Guardando...' : 'Guardar Borrador'}
              </button>
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={() => {
                  handleSave(false);
                  setActiveView('PREVIEW');
                }}
                disabled={isSaving}
              >
                Ver Vista Oficial Imprimible →
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            VISTA 2: DOCUMENTO OFICIAL FORMAL (IMPRIMIBLE / PDF)
           ========================================================================= */}
        {activeView === 'PREVIEW' && (
          <div>
            <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '0.65rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#334155' }}>
                📄 Formato oficial listo para entregar a la familia o remitir al facultativo médico.
              </span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => handleSave(false)}
                  disabled={isSaving}
                  style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem' }}
                >
                  <Save size={14} /> Guardar
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={() => handleSave(true)}
                  disabled={isSaving}
                  style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', background: '#047857' }}
                >
                  <CheckCircle2 size={14} /> Validar y Finalizar
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={() => window.print()}
                  style={{ fontSize: '0.78rem', padding: '0.35rem 0.85rem' }}
                >
                  <Printer size={14} /> Imprimir / Guardar PDF
                </button>
              </div>
            </div>

            {/* Hoja Formal Imprimible con Logo Oficial y Distribución Optimizada */}
            <div className="medical-report-sheet" style={{ border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1.25rem 1.75rem', background: '#ffffff', color: '#0f172a', lineHeight: 1.45, fontSize: '0.82rem' }}>
              
              {/* Membrete Oficial con Logo del Colegio */}
              <div className="report-header" style={{ borderBottom: '2px solid #0d9488', paddingBottom: '0.5rem', marginBottom: '0.65rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img 
                      src="/logo-colegio.png" 
                      alt="Logo Colegio San Buenaventura" 
                      style={{ height: '44px', maxWidth: '170px', objectFit: 'contain' }} 
                    />
                  </div>
                  <div style={{ textAlign: 'right', flex: 1 }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0f172a', fontWeight: 800 }}>
                      Colegio San Buenaventura • Madrid
                    </div>
                    <div style={{ fontSize: '0.67rem', color: '#475569', fontWeight: 600, marginTop: '0.05rem' }}>
                      Código de Centro: 28009033 • Departamento de Orientación Psicopedagógica
                    </div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b' }}>
                      Calle El Greco, 16, 28011 Madrid • {report.counselorEmail || defaultCounselorEmail}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '0.45rem' }}>
                  <h2 style={{ fontSize: '1.12rem', color: '#0f172a', margin: '0.1rem 0', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                    Informe Escolar de Derivación y Coordinación Sanitaria
                  </h2>
                  <div style={{ fontSize: '0.76rem', color: '#0f766e', fontWeight: 700 }}>
                    A la atención preferente de: {report.targetSpecialistTitle}
                  </div>
                </div>
              </div>

              {/* Ficha de Filiación */}
              <div className="report-filiation" style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '0.55rem 0.85rem', marginBottom: '0.65rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem 1rem', fontSize: '0.79rem' }}>
                <div><strong>Alumno/a:</strong> {referralCase.studentName}</div>
                <div><strong>Curso y Etapa:</strong> {referralCase.grade} ({referralCase.stage})</div>
                <div><strong>Tutor/a del Grupo:</strong> {referralCase.teacherName}</div>
                <div><strong>Orientador/a Responsable:</strong> {report.generatedByCounselorName || defaultCounselorName}</div>
                <div><strong>Expediente Ref:</strong> {referralCase.id.slice(0, 8).toUpperCase()}</div>
                <div><strong>Fecha de Emisión:</strong> {report.signatureDate || new Date().toLocaleDateString('es-ES')}</div>
              </div>

              {/* Secciones del Informe con Distribución Continua y Optimizada */}
              <div style={{ textAlign: 'justify' }}>
                
                {/* 1. Motivo */}
                <div className="report-section" style={{ marginBottom: '0.55rem' }}>
                  <h4 style={{ fontSize: '0.82rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 0.2rem 0', borderLeft: '3.5px solid #0d9488', paddingLeft: '0.5rem', letterSpacing: '0.02em' }}>
                    1. Motivo Clínico de Derivación y Justificación Escolar
                  </h4>
                  {renderFormattedParagraphs(report.clinicalReasonNarrative)}
                </div>

                {/* 2. Rendimiento y Aprendizaje */}
                <div className="report-section" style={{ marginBottom: '0.55rem' }}>
                  <h4 style={{ fontSize: '0.82rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 0.2rem 0', borderLeft: '3.5px solid #0d9488', paddingLeft: '0.5rem', letterSpacing: '0.02em' }}>
                    2. Desempeño Académico y Procesos de Aprendizaje
                  </h4>
                  {renderFormattedParagraphs(report.academicAndCognitiveNarrative)}
                </div>

                {/* 3. Atención y Funciones Ejecutivas */}
                <div className="report-section" style={{ marginBottom: '0.55rem' }}>
                  <h4 style={{ fontSize: '0.82rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 0.2rem 0', borderLeft: '3.5px solid #0d9488', paddingLeft: '0.5rem', letterSpacing: '0.02em' }}>
                    3. Perfil de Atención Sostenida y Funciones Ejecutivas
                  </h4>
                  {renderFormattedParagraphs(report.attentionAndExecutiveNarrative)}
                </div>

                {/* 4. Actividad Motora e Impulsividad */}
                <div className="report-section" style={{ marginBottom: '0.55rem' }}>
                  <h4 style={{ fontSize: '0.82rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 0.2rem 0', borderLeft: '3.5px solid #0d9488', paddingLeft: '0.5rem', letterSpacing: '0.02em' }}>
                    4. Actividad Motora, Inquietud e Impulsividad
                  </h4>
                  {renderFormattedParagraphs(report.motorAndRestlessnessNarrative)}
                </div>

                {/* 5. Lenguaje y Grafomotricidad */}
                <div className="report-section" style={{ marginBottom: '0.55rem' }}>
                  <h4 style={{ fontSize: '0.82rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 0.2rem 0', borderLeft: '3.5px solid #0d9488', paddingLeft: '0.5rem', letterSpacing: '0.02em' }}>
                    5. Lenguaje, Comunicación y Desarrollo Grafomotor
                  </h4>
                  {renderFormattedParagraphs(report.languageAndCommunicationNarrative)}
                </div>

                {/* 6. Socioemocional */}
                <div className="report-section" style={{ marginBottom: '0.55rem' }}>
                  <h4 style={{ fontSize: '0.82rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 0.2rem 0', borderLeft: '3.5px solid #0d9488', paddingLeft: '0.5rem', letterSpacing: '0.02em' }}>
                    6. Convivencia, Relaciones Sociales y Autorregulación Emocional
                  </h4>
                  {renderFormattedParagraphs(report.socioEmotionalNarrative)}
                </div>

                {/* 7. Medidas de Aula */}
                <div className="report-section" style={{ marginBottom: '0.55rem' }}>
                  <h4 style={{ fontSize: '0.82rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 0.2rem 0', borderLeft: '3.5px solid #0d9488', paddingLeft: '0.5rem', letterSpacing: '0.02em' }}>
                    7. Medidas Educativas Ordinarias Aplicadas y Evolución
                  </h4>
                  {renderFormattedParagraphs(report.measuresAndEvolutionNarrative)}
                </div>

                {/* 8. Conclusiones y Petición */}
                <div className="report-section report-box-callout" style={{ background: '#f0fdfa', border: '1px solid #99f6e4', borderLeft: '3.5px solid #0d9488', padding: '0.65rem 0.85rem', borderRadius: '6px', marginBottom: '0.55rem' }}>
                  <h4 style={{ fontSize: '0.82rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 0.25rem 0', letterSpacing: '0.02em' }}>
                    8. Valoración Sintética y Solicitud al Especialista Médico
                  </h4>
                  {renderFormattedParagraphs(report.counselorSynthesisAndRecommendations)}
                </div>
              </div>

              {/* Cláusula RGPD / Deontológica */}
              <div style={{ marginTop: '0.55rem', paddingTop: '0.4rem', borderTop: '1px solid #e2e8f0', fontSize: '0.68rem', color: '#64748b', textAlign: 'justify', lineHeight: 1.35 }}>
                <strong>Aviso de Confidencialidad y Secreto Profesional (RGPD / LOPD-GDD):</strong> El presente documento contiene información confidencial y sensible relativa al desarrollo psicopedagógico de un menor de edad. Se expide exclusivamente para fines de coordinación sociosanitaria y educativa con facultativos médicos colegiados, al amparo del RGPD (UE 2016/679) y la LO 3/2018. Queda prohibida su reproducción, difusión o cesión no autorizada.
              </div>

              {/* Bloque de Firmas Oficiales y Sello */}
              <div className="report-signatures" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.25rem', marginTop: '0.75rem', paddingTop: '0.45rem', borderTop: '1px solid #cbd5e1', fontSize: '0.75rem', textAlign: 'center' }}>
                <div>
                  <div style={{ height: '36px' }}></div>
                  <div style={{ borderTop: '1px solid #64748b', paddingTop: '0.25rem' }}>
                    <strong>Fdo.: {referralCase.teacherName}</strong>
                    <div style={{ fontSize: '0.66rem', color: '#64748b' }}>Tutor/a del Grupo</div>
                  </div>
                </div>

                <div>
                  <div style={{ height: '36px' }}></div>
                  <div style={{ borderTop: '1px solid #64748b', paddingTop: '0.25rem' }}>
                    <strong>Fdo.: {report.generatedByCounselorName || defaultCounselorName}</strong>
                    <div style={{ fontSize: '0.66rem', color: '#64748b' }}>Orientadora Psicopedagógica (Col. San Buenaventura)</div>
                  </div>
                </div>

                <div>
                  <div style={{ height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '52px', height: '32px', border: '1.5px dashed #94a3b8', borderRadius: '4px', fontSize: '0.60rem', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
                      SELLO
                    </div>
                  </div>
                  <div style={{ borderTop: '1px solid #64748b', paddingTop: '0.25rem' }}>
                    <strong>Colegio San Buenaventura</strong>
                    <div style={{ fontSize: '0.66rem', color: '#64748b' }}>Sello Oficial del Centro</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
