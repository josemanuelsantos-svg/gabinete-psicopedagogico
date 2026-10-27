import React, { useState } from 'react';
import { ReferralCase, MedicalReferralObservations, MedicalSpecialistTarget } from '../types';
import { X, Stethoscope, Save, CheckCircle2, User, HelpCircle, ShieldAlert } from 'lucide-react';

interface MedicalObservationModalProps {
  referralCase: ReferralCase;
  currentUserName: string;
  currentUserEmail: string;
  isCounselor: boolean;
  onSaveObservations: (caseId: string, obs: MedicalReferralObservations) => Promise<void>;
  onClose: () => void;
  onOpenReportGenerator?: () => void;
}

export const MedicalObservationModal: React.FC<MedicalObservationModalProps> = ({
  referralCase,
  currentUserName,
  currentUserEmail,
  isCounselor,
  onSaveObservations,
  onClose,
  onOpenReportGenerator
}) => {
  const existing = referralCase.medicalObservations;
  const q = referralCase.questionnaire || ({} as any);

  // Estados del cuestionario médico escolar
  const [specialistTarget, setSpecialistTarget] = useState<MedicalSpecialistTarget>(
    existing?.specialistTarget || 'NEUROPEDIATRA'
  );
  const [customSpecialistName, setCustomSpecialistName] = useState<string>(
    existing?.customSpecialistName || ''
  );
  const [consultationReason, setConsultationReason] = useState<string>(
    existing?.consultationReason || q.mainReason || ''
  );

  // 1. Atención y funciones ejecutivas
  const [attentionAndFocus, setAttentionAndFocus] = useState<string>(
    existing?.attentionAndFocus || q.attentionDescriptor || ''
  );
  const [taskCompletionAndPace, setTaskCompletionAndPace] = useState<string>(
    existing?.taskCompletionAndPace || q.taskPaceDescriptor || ''
  );

  // 2. Inquietud motora e impulsividad
  const [motorRestlessness, setMotorRestlessness] = useState<string>(
    existing?.motorRestlessness || ''
  );
  const [impulsivityControl, setImpulsivityControl] = useState<string>(
    existing?.impulsivityControl || q.impulsivityDescriptor || ''
  );

  // 3. Lenguaje y comunicación
  const [languageAndCommunication, setLanguageAndCommunication] = useState<string>(
    existing?.languageAndCommunication || q.infantilOralLanguageDesc || ''
  );

  // 4. Motricidad y grafomotricidad
  const [fineMotorAndWriting, setFineMotorAndWriting] = useState<string>(
    existing?.fineMotorAndWriting || q.infantilPsychomotorFineDesc || ''
  );
  const [grossMotorCoordination, setGrossMotorCoordination] = useState<string>(
    existing?.grossMotorCoordination || ''
  );

  // 5. Socioemocional
  const [emotionalRegulation, setEmotionalRegulation] = useState<string>(
    existing?.emotionalRegulation || q.emotionalDescriptor || ''
  );
  const [peerRelationships, setPeerRelationships] = useState<string>(
    existing?.peerRelationships || q.infantilSocialPlayDesc || ''
  );

  // 6. Rendimiento académico
  const [academicPerformance, setAcademicPerformance] = useState<string>(
    existing?.academicPerformance || 
    (q.affectedSubjects && q.affectedSubjects.length > 0 ? `Áreas afectadas: ${q.affectedSubjects.join(', ')}` : '')
  );

  // 7. Medidas pedagógicas
  const [measuresAppliedAndResults, setMeasuresAppliedAndResults] = useState<string>(
    existing?.measuresAppliedAndResults || q.measuresObservations || ''
  );

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload: MedicalReferralObservations = {
      specialistTarget,
      customSpecialistName: specialistTarget === 'OTRO_ESPECIALISTA' ? customSpecialistName : undefined,
      consultationReason,
      attentionAndFocus,
      taskCompletionAndPace,
      motorRestlessness,
      impulsivityControl,
      languageAndCommunication,
      fineMotorAndWriting,
      grossMotorCoordination,
      emotionalRegulation,
      peerRelationships,
      academicPerformance,
      measuresAppliedAndResults,
      filledByTeacherName: existing?.filledByTeacherName || currentUserName,
      filledByTeacherEmail: existing?.filledByTeacherEmail || currentUserEmail,
      filledDate: existing?.filledDate || new Date().toISOString().split('T')[0]
    };

    try {
      await onSaveObservations(referralCase.id, payload);
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
      }, 2500);
    } catch (err) {
      console.error(err);
      alert('Error al guardar las observaciones médicas.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content" style={{ maxWidth: '900px', maxHeight: '92vh', overflowY: 'auto', padding: '1.75rem' }}>
        
        {/* Cabecera */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#ecfdf5', color: '#047857', padding: '0.2rem 0.65rem', borderRadius: '12px', fontSize: '0.74rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              <Stethoscope size={14} /> Cuestionario de Coordinación con Especialistas Sanitarios
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', margin: '0.1rem 0' }}>
              Observación de Aula para Consulta Médica • {referralCase.studentName}
            </h3>
            <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
              Curso: <strong>{referralCase.grade}</strong> ({referralCase.stage}) • Tutor/a Solicitante: <strong>{referralCase.teacherName}</strong>
            </p>
          </div>
          <button type="button" className="btn btn-secondary" onClick={onClose} style={{ padding: '0.35rem 0.55rem', minHeight: '32px' }}>
            <X size={18} />
          </button>
        </div>

        {/* Nota informativa de custodia médica */}
        <div style={{ background: '#f8fafc', borderLeft: '4px solid #0d9488', padding: '0.8rem 1rem', borderRadius: '6px', marginBottom: '1.25rem', fontSize: '0.82rem', color: '#334155', lineHeight: 1.5 }}>
          <strong>ℹ️ Protocolo Institucional y Custodia Documental:</strong> Los datos y valoraciones volcados en este cuestionario serán procesados por el <strong>Departamento de Orientación</strong> para generar el <em>Informe Oficial de Coordinación con Neuropediatría / Pediatría</em>. Este informe oficial se redactará de forma amplia y profesional, y deberá ser validado, firmado y sellado por Orientación antes de su entrega a la familia o al facultativo.
        </div>

        {saveSuccess && (
          <div style={{ background: '#dcfce7', border: '1px solid #86efac', color: '#166534', padding: '0.75rem 1rem', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} />
            <strong>¡Observaciones guardadas con éxito!</strong> El equipo de orientación ya tiene acceso a estos datos.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Bloque 0: Destinatario y Motivo */}
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.1rem' }}>
            <h4 style={{ fontSize: '0.92rem', color: '#0f172a', marginBottom: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Stethoscope size={16} color="#0d9488" /> 1. Destinatario Médico y Motivo de Consulta
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '0.85rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                  Especialista de Destino:
                </label>
                <select 
                  className="input-field" 
                  value={specialistTarget} 
                  onChange={(e) => setSpecialistTarget(e.target.value as MedicalSpecialistTarget)}
                  style={{ width: '100%', fontSize: '0.84rem' }}
                >
                  <option value="NEUROPEDIATRA">Neuropediatra / Neurología Infantil</option>
                  <option value="PEDIATRA">Pediatra de Atención Primaria</option>
                  <option value="SALUD_MENTAL_USMIJ">Salud Mental Infantil (USMIJ / Psiquiatría)</option>
                  <option value="OTRO_ESPECIALISTA">Otro Especialista Médico</option>
                </select>
              </div>

              {specialistTarget === 'OTRO_ESPECIALISTA' && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                    Nombre o Especialidad Médica:
                  </label>
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="Ej. Foniatra, Cardiólogo Infantil, etc."
                    value={customSpecialistName}
                    onChange={(e) => setCustomSpecialistName(e.target.value)}
                    style={{ width: '100%', fontSize: '0.84rem' }}
                  />
                </div>
              )}
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                Motivo pedagógico principal de la consulta médica:
              </label>
              <textarea 
                className="input-field" 
                rows={2}
                placeholder="Ej. Sospecha de TDAH subtipo combinado, dificultad atencional acusada que compromete el aprendizaje, inquietud motriz constante y bloqueos de frustración."
                value={consultationReason}
                onChange={(e) => setConsultationReason(e.target.value)}
                style={{ width: '100%', fontSize: '0.84rem' }}
                required
              />
            </div>
          </div>

          {/* Bloque 1: Atención y Funciones Ejecutivas */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.1rem' }}>
            <h4 style={{ fontSize: '0.92rem', color: '#0f172a', marginBottom: '0.75rem', fontWeight: 700 }}>
              🧠 2. Atención Sostenida, Concentración y Funciones Ejecutivas
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                  Atención en clase y nivel de distracción:
                </label>
                <textarea 
                  className="input-field" 
                  rows={2}
                  placeholder="¿Mantiene la atención en explicaciones colectivas? ¿Se distrae con cualquier estímulo o pensamiento? ¿Olvida o pierde materiales a diario?"
                  value={attentionAndFocus}
                  onChange={(e) => setAttentionAndFocus(e.target.value)}
                  style={{ width: '100%', fontSize: '0.84rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                  Ritmo de trabajo, fatiga cognitiva y finalización de tareas:
                </label>
                <textarea 
                  className="input-field" 
                  rows={2}
                  placeholder="¿Le cuesta empezar las actividades? ¿Se fatiga rápidamente? ¿Termina las tareas a tiempo respecto a sus compañeros o deja controles a medias?"
                  value={taskCompletionAndPace}
                  onChange={(e) => setTaskCompletionAndPace(e.target.value)}
                  style={{ width: '100%', fontSize: '0.84rem' }}
                />
              </div>
            </div>
          </div>

          {/* Bloque 2: Inquietud Motora e Impulsividad */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.1rem' }}>
            <h4 style={{ fontSize: '0.92rem', color: '#0f172a', marginBottom: '0.75rem', fontWeight: 700 }}>
              ⚡ 3. Actividad Motora, Inquietud e Impulsividad
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                  Inquietud psicomotriz en el aula:
                </label>
                <textarea 
                  className="input-field" 
                  rows={2}
                  placeholder="¿Se mueve constantemente en la silla? ¿Se balancea, juguetea con objetos o se levanta sin motivo? ¿Parece accionado por un motor interno?"
                  value={motorRestlessness}
                  onChange={(e) => setMotorRestlessness(e.target.value)}
                  style={{ width: '100%', fontSize: '0.84rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                  Control de impulsos e inhibición conductual:
                </label>
                <textarea 
                  className="input-field" 
                  rows={2}
                  placeholder="¿Responde antes de que se termine la pregunta? ¿Le cuesta esperar su turno en asamblea o filas? ¿Interrumpe conversaciones o juegos?"
                  value={impulsivityControl}
                  onChange={(e) => setImpulsivityControl(e.target.value)}
                  style={{ width: '100%', fontSize: '0.84rem' }}
                />
              </div>
            </div>
          </div>

          {/* Bloque 3: Lenguaje, Motricidad y Grafomotricidad */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.1rem' }}>
            <h4 style={{ fontSize: '0.92rem', color: '#0f172a', marginBottom: '0.75rem', fontWeight: 700 }}>
              🗣️ 4. Comunicación, Lenguaje y Motricidad / Grafismo
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                  Lenguaje oral y comprensión de consignas:
                </label>
                <textarea 
                  className="input-field" 
                  rows={2}
                  placeholder="¿Comprende órdenes secuenciadas? ¿Presenta dificultades de articulación, fluidez verbal o vocabulario limitado? ¿Estructura bien sus explicaciones?"
                  value={languageAndCommunication}
                  onChange={(e) => setLanguageAndCommunication(e.target.value)}
                  style={{ width: '100%', fontSize: '0.84rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                    Motricidad fina y grafomotricidad:
                  </label>
                  <textarea 
                    className="input-field" 
                    rows={2}
                    placeholder="Agarre del lápiz, presión, legibilidad del trazo, fatiga rápida al escribir..."
                    value={fineMotorAndWriting}
                    onChange={(e) => setFineMotorAndWriting(e.target.value)}
                    style={{ width: '100%', fontSize: '0.84rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                    Motricidad gruesa y coordinación:
                  </label>
                  <textarea 
                    className="input-field" 
                    rows={2}
                    placeholder="Torpeza motriz, caídas frecuentes, coordinación en Educación Física o patio..."
                    value={grossMotorCoordination}
                    onChange={(e) => setGrossMotorCoordination(e.target.value)}
                    style={{ width: '100%', fontSize: '0.84rem' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bloque 4: Regulación Emocional y Rendimiento */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.1rem' }}>
            <h4 style={{ fontSize: '0.92rem', color: '#0f172a', marginBottom: '0.75rem', fontWeight: 700 }}>
              ❤️ 5. Autorregulación Emocional, Socialización y Rendimiento Curricular
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                    Tolerancia a la frustración y gestión emocional:
                  </label>
                  <textarea 
                    className="input-field" 
                    rows={2}
                    placeholder="¿Se bloquea ante errores? ¿Muestra rabietas, desánimo o ansiedad ante la dificultad?"
                    value={emotionalRegulation}
                    onChange={(e) => setEmotionalRegulation(e.target.value)}
                    style={{ width: '100%', fontSize: '0.84rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                    Relación con compañeros e integración:
                  </label>
                  <textarea 
                    className="input-field" 
                    rows={2}
                    placeholder="¿Juega con iguales en el patio? ¿Surgen conflictos por no respetar normas de juego?"
                    value={peerRelationships}
                    onChange={(e) => setPeerRelationships(e.target.value)}
                    style={{ width: '100%', fontSize: '0.84rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                  Rendimiento escolar y asignaturas con mayor dificultad:
                </label>
                <textarea 
                  className="input-field" 
                  rows={2}
                  placeholder="Detallar asignaturas afectadas (Lectoescritura, Matemáticas, Idiomas...) y nivel de desfase respecto al grupo clase."
                  value={academicPerformance}
                  onChange={(e) => setAcademicPerformance(e.target.value)}
                  style={{ width: '100%', fontSize: '0.84rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.25rem' }}>
                  Medidas y adaptaciones de aula ensayadas por el profesorado y resultado:
                </label>
                <textarea 
                  className="input-field" 
                  rows={2}
                  placeholder="Ej. Ubicación en primera fila, fraccionar controles, refuerzo positivo, agenda supervisada. Indicar si han resultado insuficientes."
                  value={measuresAppliedAndResults}
                  onChange={(e) => setMeasuresAppliedAndResults(e.target.value)}
                  style={{ width: '100%', fontSize: '0.84rem' }}
                />
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
              Responsable de observación: <strong>{existing?.filledByTeacherName || currentUserName}</strong>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cerrar
              </button>

              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isSubmitting}
                style={{ padding: '0.5rem 1.25rem' }}
              >
                <Save size={16} /> {isSubmitting ? 'Guardando...' : 'Guardar Observaciones Médicas'}
              </button>

              {isCounselor && onOpenReportGenerator && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    handleSubmit({ preventDefault: () => {} } as any).then(() => {
                      onOpenReportGenerator();
                    });
                  }}
                  style={{ background: 'linear-gradient(135deg, #0d9488 0%, #1e1b4b 100%)', border: 'none' }}
                >
                  ⚡ Pasar a Redacción de Informe Oficial →
                </button>
              )}
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
