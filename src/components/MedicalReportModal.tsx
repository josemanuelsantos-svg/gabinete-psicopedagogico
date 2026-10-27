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
  // Inicialización del informe redactado: cargamos el existente o generamos borrador
  const [report, setReport] = useState<GeneratedMedicalReport>(() => {
    if (referralCase.medicalReport) {
      return referralCase.medicalReport;
    }
    return generateMedicalReportDraft(referralCase, counselorName, counselorEmail);
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
      const freshDraft = generateMedicalReportDraft(referralCase, counselorName, counselorEmail);
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
              Alumno/a: <strong>{referralCase.studentName}</strong> ({referralCase.grade}) • Orientador/a: <strong>{counselorName}</strong>
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

            {/* Hoja Formal Imprimible */}
            <div className="family-auth-sheet" style={{ border: '1px solid #cbd5e1', borderRadius: '8px', padding: '2rem', background: '#ffffff', color: '#0f172a', lineHeight: 1.5, fontSize: '0.85rem' }}>
              
              {/* Membrete Oficial */}
              <div style={{ textAlign: 'center', borderBottom: '2.5px solid #0d9488', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#475569', fontWeight: 800 }}>
                  Colegio San Buenaventura • Madrid • Código de Centro 28009033
                </div>
                <div style={{ fontSize: '0.70rem', color: '#64748b', marginTop: '0.15rem' }}>
                  Departamento de Orientación Psicopedagógica y Atención a la Diversidad
                </div>
                <h2 style={{ fontSize: '1.25rem', color: '#0f172a', marginTop: '0.4rem', marginBottom: '0.2rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  Informe Escolar de Derivación y Coordinación Sanitaria
                </h2>
                <div style={{ fontSize: '0.78rem', color: '#0d9488', fontWeight: 700 }}>
                  A la atención de: {report.targetSpecialistTitle}
                </div>
              </div>

              {/* Ficha de Filiación */}
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0.75rem 1rem', marginBottom: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem 1.25rem', fontSize: '0.82rem' }}>
                <div><strong>Alumno/a:</strong> {referralCase.studentName}</div>
                <div><strong>Curso y Etapa:</strong> {referralCase.grade} ({referralCase.stage})</div>
                <div><strong>Tutor/a del Grupo:</strong> {referralCase.teacherName}</div>
                <div><strong>Orientador/a Responsable:</strong> {report.generatedByCounselorName}</div>
                <div><strong>Expediente Ref:</strong> {referralCase.id.slice(0, 8).toUpperCase()}</div>
                <div><strong>Fecha del Informe:</strong> {report.signatureDate || new Date().toLocaleDateString('es-ES')}</div>
              </div>

              {/* Secciones del Informe */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', textAlign: 'justify' }}>
                
                {/* 1. Motivo */}
                <div>
                  <h4 style={{ fontSize: '0.88rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem', borderBottom: '1px solid #ccfbf1', paddingBottom: '0.15rem' }}>
                    1. Motivo Clínico de Derivación y Coordinación
                  </h4>
                  <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{report.clinicalReasonNarrative}</p>
                </div>

                {/* 2. Rendimiento y Aprendizaje */}
                <div>
                  <h4 style={{ fontSize: '0.88rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem', borderBottom: '1px solid #ccfbf1', paddingBottom: '0.15rem' }}>
                    2. Desempeño Académico y Procesos de Aprendizaje
                  </h4>
                  <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{report.academicAndCognitiveNarrative}</p>
                </div>

                {/* 3. Atención y Funciones Ejecutivas */}
                <div>
                  <h4 style={{ fontSize: '0.88rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem', borderBottom: '1px solid #ccfbf1', paddingBottom: '0.15rem' }}>
                    3. Perfil de Atención Sostenida y Funciones Ejecutivas
                  </h4>
                  <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{report.attentionAndExecutiveNarrative}</p>
                </div>

                {/* 4. Actividad Motora e Impulsividad */}
                <div>
                  <h4 style={{ fontSize: '0.88rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem', borderBottom: '1px solid #ccfbf1', paddingBottom: '0.15rem' }}>
                    4. Actividad Motora, Inquietud e Impulsividad
                  </h4>
                  <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{report.motorAndRestlessnessNarrative}</p>
                </div>

                {/* 5. Lenguaje y Grafomotricidad */}
                <div>
                  <h4 style={{ fontSize: '0.88rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem', borderBottom: '1px solid #ccfbf1', paddingBottom: '0.15rem' }}>
                    5. Lenguaje, Comunicación y Desarrollo Grafomotor
                  </h4>
                  <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{report.languageAndCommunicationNarrative}</p>
                </div>

                {/* 6. Socioemocional */}
                <div>
                  <h4 style={{ fontSize: '0.88rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem', borderBottom: '1px solid #ccfbf1', paddingBottom: '0.15rem' }}>
                    6. Convivencia, Relaciones Sociales y Autorregulación Emocional
                  </h4>
                  <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{report.socioEmotionalNarrative}</p>
                </div>

                {/* 7. Medidas de Aula */}
                <div>
                  <h4 style={{ fontSize: '0.88rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem', borderBottom: '1px solid #ccfbf1', paddingBottom: '0.15rem' }}>
                    7. Medidas Educativas Ordinarias Aplicadas y Evolución
                  </h4>
                  <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{report.measuresAndEvolutionNarrative}</p>
                </div>

                {/* 8. Conclusiones y Petición */}
                <div style={{ background: '#f0fdfa', border: '1px solid #99f6e4', padding: '0.85rem 1rem', borderRadius: '6px' }}>
                  <h4 style={{ fontSize: '0.88rem', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    8. Valoración Sintética y Solicitud al Especialista Médico
                  </h4>
                  <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{report.counselorSynthesisAndRecommendations}</p>
                </div>
              </div>

              {/* Cláusula RGPD / Deontológica */}
              <div style={{ marginTop: '1.25rem', paddingTop: '0.65rem', borderTop: '1px solid #e2e8f0', fontSize: '0.70rem', color: '#64748b', textAlign: 'justify', lineHeight: 1.35 }}>
                <strong>Aviso de Confidencialidad y Secreto Profesional:</strong> El presente informe contiene datos de carácter personal y sensibles relativos a un menor de edad. Se expide con fines de coordinación sociosanitaria y educativa con amparo en la Ley Orgánica 3/2018 (LOPD-GDD) y el Reglamento General de Protección de Datos (UE 2016/679). Queda prohibida su reproducción o difusión no autorizada.
              </div>

              {/* Bloque de Firmas Oficiales y Sello */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginTop: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid #cbd5e1', fontSize: '0.78rem', textAlign: 'center' }}>
                <div>
                  <div style={{ height: '42px' }}></div>
                  <div style={{ borderTop: '1px solid #64748b', paddingTop: '0.35rem' }}>
                    <strong>Fdo.: {referralCase.teacherName}</strong>
                    <div style={{ fontSize: '0.70rem', color: '#64748b' }}>Tutor/a del Grupo</div>
                  </div>
                </div>

                <div>
                  <div style={{ height: '42px' }}></div>
                  <div style={{ borderTop: '1px solid #64748b', paddingTop: '0.35rem' }}>
                    <strong>Fdo.: {report.generatedByCounselorName}</strong>
                    <div style={{ fontSize: '0.70rem', color: '#64748b' }}>Dpto. Orientación Psicopedagógica</div>
                  </div>
                </div>

                <div>
                  <div style={{ height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '50px', height: '35px', border: '1px dashed #94a3b8', borderRadius: '4px', fontSize: '0.62rem', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      SELLO
                    </div>
                  </div>
                  <div style={{ borderTop: '1px solid #64748b', paddingTop: '0.35rem' }}>
                    <strong>Sello Oficial del Centro</strong>
                    <div style={{ fontSize: '0.70rem', color: '#64748b' }}>Colegio San Buenaventura</div>
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
