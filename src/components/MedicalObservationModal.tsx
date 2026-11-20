import React, { useState } from 'react';
import {
  ReferralCase,
  MedicalReferralObservations,
  MedicalSpecialistTarget,
  InfantilMeasureRow
} from '../types';
import {
  X,
  Stethoscope,
  Save,
  CheckCircle2,
  ShieldAlert,
  Plus,
  Trash2,
  Baby,
  School
} from 'lucide-react';
import { OrientacionTau } from './FranciscanTauWord';

interface MedicalObservationModalProps {
  referralCase: ReferralCase;
  currentUserName: string;
  currentUserEmail: string;
  isCounselor: boolean;
  onSaveObservations: (caseId: string, obs: MedicalReferralObservations) => Promise<void>;
  onClose: () => void;
  onOpenReportGenerator?: () => void;
  onNotify?: (type: 'success' | 'error' | 'warning' | 'info', message: string) => void;
}

const INFANTIL_CONTEXT_OPTIONS = ['Aula', 'Patio', 'Comedor', 'Otros'];

const PRIMARIA_DOMAINS: Array<{
  key: keyof Pick<
    MedicalReferralObservations,
    | 'primariaWorkPace'
    | 'primariaEffortCapacity'
    | 'primariaOralComprehension'
    | 'primariaOralCommunication'
    | 'primariaAttention'
    | 'primariaLogicalReasoning'
    | 'primariaMemory'
    | 'primariaFrustrationTolerance'
    | 'primariaSpatialOrientation'
    | 'primariaClassSocialization'
    | 'primariaAutonomy'
  >;
  num: string;
  label: string;
  placeholder: string;
}> = [
  { key: 'primariaWorkPace', num: '01', label: 'Ritmo de trabajo', placeholder: 'Ej: Tarda en iniciar las tareas, necesita recordatorios para finalizar los ejercicios en el tiempo del grupo...' },
  { key: 'primariaEffortCapacity', num: '02', label: 'Capacidad de esfuerzo', placeholder: 'Ej: Se esfuerza cuando comprende la actividad pero abandona o se fatiga en tareas largas...' },
  { key: 'primariaOralComprehension', num: '03', label: 'Comprensión oral', placeholder: 'Ej: Comprende órdenes sencillas; cuando se encadenan varias consignas necesita repetición individual...' },
  { key: 'primariaOralCommunication', num: '04', label: 'Comunicación oral', placeholder: 'Ej: Se expresa con vocabulario adecuado pero le cuesta ordenar relatos o esperar su turno...' },
  { key: 'primariaAttention', num: '05', label: 'Atención', placeholder: 'Ej: Se distrae con facilidad ante estímulos del aula, pierde el hilo en explicaciones colectivas...' },
  { key: 'primariaLogicalReasoning', num: '06', label: 'Razonamiento lógico', placeholder: 'Ej: Resuelve operaciones mecánicas con apoyo, presenta dificultad en problemas de varios pasos...' },
  { key: 'primariaMemory', num: '07', label: 'Memoria', placeholder: 'Ej: Le cuesta retener instrucciones secuenciadas, tablas o contenidos recién trabajados...' },
  { key: 'primariaFrustrationTolerance', num: '08', label: 'Tolerancia a la frustración', placeholder: 'Ej: Se bloquea o se enfada ante el error o la corrección; mejora con acompañamiento tranquilo...' },
  { key: 'primariaSpatialOrientation', num: '09', label: 'Orientación espacial', placeholder: 'Ej: Desorden en la presentación del cuaderno, respeto de márgenes o ubicación en la página...' },
  { key: 'primariaClassSocialization', num: '10', label: 'Socialización en clase', placeholder: 'Ej: Buena relación general con compañeros, aunque en juegos reglados surgen roces por turnos...' },
  { key: 'primariaAutonomy', num: '11', label: 'Autonomía', placeholder: 'Ej: Precisa supervisión para apuntar deberes en la agenda, organizar su mesa y comenzar solo/a...' }
];

const SectionBadge: React.FC<{ num: string; title: string; subtitle?: string }> = ({ num, title, subtitle }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem', borderBottom: '2px solid #002D62', paddingBottom: '0.4rem' }}>
    <span style={{
      background: '#002D62',
      color: '#F5A800',
      fontWeight: 800,
      fontSize: '0.78rem',
      padding: '0.2rem 0.5rem',
      borderRadius: '6px',
      letterSpacing: '0.04em'
    }}>
      {num}
    </span>
    <div>
      <h4 style={{ margin: 0, fontSize: '0.94rem', color: '#002D62', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
        {title}
      </h4>
      {subtitle && (
        <p style={{ margin: 0, fontSize: '0.74rem', color: '#475569' }}>{subtitle}</p>
      )}
    </div>
  </div>
);

export const MedicalObservationModal: React.FC<MedicalObservationModalProps> = ({
  referralCase,
  currentUserName,
  currentUserEmail,
  isCounselor,
  onSaveObservations,
  onClose,
  onOpenReportGenerator,
  onNotify
}) => {
  const existing = referralCase.medicalObservations;
  const q = referralCase.questionnaire || ({} as any);

  const [stageFormat, setStageFormat] = useState<'INFANTIL' | 'PRIMARIA'>(
    existing?.stageFormat || (referralCase.stage === 'INFANTIL' ? 'INFANTIL' : 'PRIMARIA')
  );
  const [specialistTarget, setSpecialistTarget] = useState<MedicalSpecialistTarget>(
    existing?.specialistTarget || 'PEDIATRA'
  );
  const [customSpecialistName, setCustomSpecialistName] = useState<string>(
    existing?.customSpecialistName || ''
  );

  // Datos comunes 01
  const [birthDate, setBirthDate] = useState<string>(existing?.birthDate || '');
  const [studentAgeText, setStudentAgeText] = useState<string>(
    existing?.studentAgeText || (q.studentAge ? `${q.studentAge} años` : '')
  );

  // === ESTADOS EDUCACIÓN INFANTIL (02-07) ===
  const [infantilDifficultyExamples, setInfantilDifficultyExamples] = useState<string>(
    existing?.infantilDifficultyExamples || existing?.consultationReason || q.mainReason || ''
  );
  const [infantilSinceWhen, setInfantilSinceWhen] = useState<string>(existing?.infantilSinceWhen || '');
  const [infantilSituations, setInfantilSituations] = useState<string>(existing?.infantilSituations || '');
  const [infantilFrequencyIntensity, setInfantilFrequencyIntensity] = useState<string>(existing?.infantilFrequencyIntensity || '');
  const [infantilContextsText, setInfantilContextsText] = useState<string>(existing?.infantilContextsText || '');
  const [infantilContexts, setInfantilContexts] = useState<string[]>(existing?.infantilContexts || ['Aula']);
  const [infantilContextsOther, setInfantilContextsOther] = useState<string>(existing?.infantilContextsOther || '');
  const [infantilRecentChanges, setInfantilRecentChanges] = useState<string>(existing?.infantilRecentChanges || '');

  const [infantilLanguage, setInfantilLanguage] = useState<string>(
    existing?.infantilLanguage || existing?.languageAndCommunication || q.infantilOralLanguageDesc || ''
  );
  const [infantilMotor, setInfantilMotor] = useState<string>(
    existing?.infantilMotor || [existing?.grossMotorCoordination, existing?.fineMotorAndWriting].filter(Boolean).join(' ') || q.infantilPsychomotorFineDesc || ''
  );
  const [infantilCognitive, setInfantilCognitive] = useState<string>(
    existing?.infantilCognitive || existing?.attentionAndFocus || q.infantilLogicConceptsDesc || ''
  );
  const [infantilAutonomy, setInfantilAutonomy] = useState<string>(
    existing?.infantilAutonomy || q.infantilPersonalAutonomyDesc || ''
  );
  const [infantilSocioEmotional, setInfantilSocioEmotional] = useState<string>(
    existing?.infantilSocioEmotional || [existing?.emotionalRegulation, existing?.peerRelationships].filter(Boolean).join(' ') || q.infantilSocialPlayDesc || ''
  );

  const [infantilPlay, setInfantilPlay] = useState<string>(existing?.infantilPlay || '');
  const [infantilCreativity, setInfantilCreativity] = useState<string>(existing?.infantilCreativity || '');
  const [infantilLearningStyle, setInfantilLearningStyle] = useState<string>(
    existing?.infantilLearningStyle || existing?.taskCompletionAndPace || ''
  );
  const [infantilSensoryRepetitive, setInfantilSensoryRepetitive] = useState<'SI' | 'NO' | 'NO_CONSTA' | ''>(
    existing?.infantilSensoryRepetitive || ''
  );
  const [infantilSensoryDetails, setInfantilSensoryDetails] = useState<string>(existing?.infantilSensoryDetails || '');

  const [infantilCurricularProgress, setInfantilCurricularProgress] = useState<string>(
    existing?.infantilCurricularProgress || existing?.academicPerformance || ''
  );
  const [infantilAttendanceParticipation, setInfantilAttendanceParticipation] = useState<string>(
    existing?.infantilAttendanceParticipation || ''
  );

  const [infantilMeasuresTable, setInfantilMeasuresTable] = useState<InfantilMeasureRow[]>(
    existing?.infantilMeasuresTable && existing.infantilMeasuresTable.length > 0
      ? existing.infantilMeasuresTable
      : [
          { measure: '', period: '', result: '' },
          { measure: '', period: '', result: '' }
        ]
  );
  const [infantilExternalSupports, setInfantilExternalSupports] = useState<string>(
    existing?.infantilExternalSupports || (q.externalAssessmentDone ? q.externalAssessmentDetails || '' : '')
  );
  const [infantilStrengths, setInfantilStrengths] = useState<string>(existing?.infantilStrengths || '');
  const [infantilAdditionalInfo, setInfantilAdditionalInfo] = useState<string>(existing?.infantilAdditionalInfo || '');

  // === ESTADOS EDUCACIÓN PRIMARIA (02-03) ===
  const [primariaGroupSupport, setPrimariaGroupSupport] = useState<string>(existing?.primariaGroupSupport || '');
  const [primariaPtSupport, setPrimariaPtSupport] = useState<string>(
    existing?.primariaPtSupport || (referralCase.actionPlan?.ptHoursPerWeek ? `Sí, ${referralCase.actionPlan.ptHoursPerWeek} sesiones semanales` : '')
  );
  const [primariaEvalMeasures, setPrimariaEvalMeasures] = useState<string>(
    existing?.primariaEvalMeasures || (q.appliedMeasuresList?.length ? q.appliedMeasuresList.join(', ') : '')
  );

  const [primariaDomains, setPrimariaDomains] = useState<Record<string, string>>({
    primariaWorkPace: existing?.primariaWorkPace || existing?.taskCompletionAndPace || q.taskPaceDescriptor || '',
    primariaEffortCapacity: existing?.primariaEffortCapacity || '',
    primariaOralComprehension: existing?.primariaOralComprehension || existing?.languageAndCommunication || q.readingDescriptor || '',
    primariaOralCommunication: existing?.primariaOralCommunication || '',
    primariaAttention: existing?.primariaAttention || existing?.attentionAndFocus || q.attentionDescriptor || '',
    primariaLogicalReasoning: existing?.primariaLogicalReasoning || existing?.academicPerformance || q.mathDescriptor || '',
    primariaMemory: existing?.primariaMemory || '',
    primariaFrustrationTolerance: existing?.primariaFrustrationTolerance || existing?.emotionalRegulation || q.emotionalDescriptor || '',
    primariaSpatialOrientation: existing?.primariaSpatialOrientation || existing?.fineMotorAndWriting || '',
    primariaClassSocialization: existing?.primariaClassSocialization || existing?.peerRelationships || '',
    primariaAutonomy: existing?.primariaAutonomy || existing?.impulsivityControl || q.impulsivityDescriptor || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const toggleInfantilContext = (ctx: string) => {
    setInfantilContexts(prev =>
      prev.includes(ctx) ? prev.filter(c => c !== ctx) : [...prev, ctx]
    );
  };

  const updateMeasureRow = (idx: number, field: keyof InfantilMeasureRow, value: string) => {
    setInfantilMeasuresTable(prev => prev.map((row, i) => (i === idx ? { ...row, [field]: value } : row)));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload: MedicalReferralObservations = {
      specialistTarget,
      customSpecialistName: specialistTarget === 'OTRO_ESPECIALISTA' ? customSpecialistName : undefined,
      stageFormat,
      birthDate: birthDate.trim(),
      studentAgeText: studentAgeText.trim(),
      consultationReason:
        stageFormat === 'INFANTIL'
          ? infantilDifficultyExamples.trim() || q.mainReason || ''
          : existing?.consultationReason || q.mainReason || 'Derivación escolar para valoración médica',

      // Infantil
      infantilDifficultyExamples: infantilDifficultyExamples.trim(),
      infantilSinceWhen: infantilSinceWhen.trim(),
      infantilSituations: infantilSituations.trim(),
      infantilFrequencyIntensity: infantilFrequencyIntensity.trim(),
      infantilContextsText: infantilContextsText.trim(),
      infantilContexts,
      infantilContextsOther: infantilContextsOther.trim(),
      infantilRecentChanges: infantilRecentChanges.trim(),
      infantilLanguage: infantilLanguage.trim(),
      infantilMotor: infantilMotor.trim(),
      infantilCognitive: infantilCognitive.trim(),
      infantilAutonomy: infantilAutonomy.trim(),
      infantilSocioEmotional: infantilSocioEmotional.trim(),
      infantilPlay: infantilPlay.trim(),
      infantilCreativity: infantilCreativity.trim(),
      infantilLearningStyle: infantilLearningStyle.trim(),
      infantilSensoryRepetitive,
      infantilSensoryDetails: infantilSensoryDetails.trim(),
      infantilCurricularProgress: infantilCurricularProgress.trim(),
      infantilAttendanceParticipation: infantilAttendanceParticipation.trim(),
      infantilMeasuresTable: infantilMeasuresTable.filter(r => r.measure.trim() || r.period.trim() || r.result.trim()),
      infantilExternalSupports: infantilExternalSupports.trim(),
      infantilStrengths: infantilStrengths.trim(),
      infantilAdditionalInfo: infantilAdditionalInfo.trim(),

      // Primaria
      primariaGroupSupport: primariaGroupSupport.trim(),
      primariaPtSupport: primariaPtSupport.trim(),
      primariaEvalMeasures: primariaEvalMeasures.trim(),
      primariaWorkPace: primariaDomains.primariaWorkPace.trim(),
      primariaEffortCapacity: primariaDomains.primariaEffortCapacity.trim(),
      primariaOralComprehension: primariaDomains.primariaOralComprehension.trim(),
      primariaOralCommunication: primariaDomains.primariaOralCommunication.trim(),
      primariaAttention: primariaDomains.primariaAttention.trim(),
      primariaLogicalReasoning: primariaDomains.primariaLogicalReasoning.trim(),
      primariaMemory: primariaDomains.primariaMemory.trim(),
      primariaFrustrationTolerance: primariaDomains.primariaFrustrationTolerance.trim(),
      primariaSpatialOrientation: primariaDomains.primariaSpatialOrientation.trim(),
      primariaClassSocialization: primariaDomains.primariaClassSocialization.trim(),
      primariaAutonomy: primariaDomains.primariaAutonomy.trim(),

      // Campos clásicos sincronizados para compatibilidad
      attentionAndFocus: stageFormat === 'INFANTIL' ? infantilCognitive.trim() : primariaDomains.primariaAttention.trim(),
      taskCompletionAndPace: stageFormat === 'INFANTIL' ? infantilLearningStyle.trim() : primariaDomains.primariaWorkPace.trim(),
      motorRestlessness: existing?.motorRestlessness || '',
      impulsivityControl: stageFormat === 'INFANTIL' ? infantilAutonomy.trim() : primariaDomains.primariaAutonomy.trim(),
      languageAndCommunication: stageFormat === 'INFANTIL' ? infantilLanguage.trim() : primariaDomains.primariaOralComprehension.trim(),
      fineMotorAndWriting: stageFormat === 'INFANTIL' ? infantilMotor.trim() : primariaDomains.primariaSpatialOrientation.trim(),
      grossMotorCoordination: stageFormat === 'INFANTIL' ? infantilMotor.trim() : '',
      emotionalRegulation: stageFormat === 'INFANTIL' ? infantilSocioEmotional.trim() : primariaDomains.primariaFrustrationTolerance.trim(),
      peerRelationships: stageFormat === 'INFANTIL' ? infantilPlay.trim() : primariaDomains.primariaClassSocialization.trim(),
      academicPerformance: stageFormat === 'INFANTIL' ? infantilCurricularProgress.trim() : primariaDomains.primariaLogicalReasoning.trim(),
      measuresAppliedAndResults: stageFormat === 'INFANTIL' ? infantilExternalSupports.trim() : primariaEvalMeasures.trim(),

      filledByTeacherName: existing?.filledByTeacherName || currentUserName,
      filledByTeacherEmail: existing?.filledByTeacherEmail || currentUserEmail,
      filledDate: existing?.filledDate || new Date().toISOString().split('T')[0]
    };

    try {
      await onSaveObservations(referralCase.id, payload);
      setSaveSuccess(true);
      onNotify?.('success', 'Recogida de información guardada correctamente para Orientación.');
      setTimeout(() => setSaveSuccess(false), 2600);
    } catch (err) {
      console.error(err);
      onNotify?.('error', 'Error al guardar las observaciones médicas.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content" style={{ maxWidth: '940px', maxHeight: '93vh', overflowY: 'auto', padding: '1.5rem' }}>
        {/* Cabecera corporativa Colegio San Buenaventura con Cruz Tau */}
        <div style={{
          background: 'linear-gradient(135deg, #002D62 0%, #005CA9 100%)',
          color: 'white',
          borderRadius: '12px',
          padding: '1rem 1.25rem',
          marginBottom: '1rem',
          borderBottom: '4px solid #F5A800',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ background: 'white', padding: '0.35rem 0.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <img src="/logo-colegio.png" alt="Colegio San Buenaventura" style={{ height: '38px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#FDE68A', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Departamento de <OrientacionTau uppercase tauColor="#F5A800" style={{ color: '#ffffff', fontWeight: 800 }} /> · Colegio San Buenaventura
              </div>
              <h3 style={{ margin: '0.15rem 0 0 0', fontSize: '1.12rem', color: 'white', fontWeight: 800 }}>
                {stageFormat === 'INFANTIL'
                  ? 'Recogida de Información del Tutor/a (Educación Infantil)'
                  : 'Recogida de Información para Derivación Médica (Educación Primaria)'}
              </h3>
              <p style={{ margin: '0.15rem 0 0 0', fontSize: '0.78rem', color: '#DBEAFE' }}>
                Alumno/a: <strong>{referralCase.studentName}</strong> ({referralCase.grade})
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{ background: 'rgba(255,255,255,0.16)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '8px', padding: '0.35rem', cursor: 'pointer', display: 'flex' }}
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Selector de formato de etapa + aviso de observación escolar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem', background: '#f8fafc', padding: '0.7rem 0.9rem', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#002D62' }}>Plantilla oficial de etapa:</span>
            <button
              type="button"
              onClick={() => setStageFormat('INFANTIL')}
              className="btn"
              style={{
                padding: '0.32rem 0.75rem',
                fontSize: '0.78rem',
                background: stageFormat === 'INFANTIL' ? '#002D62' : 'white',
                color: stageFormat === 'INFANTIL' ? '#ffffff' : '#334155',
                border: stageFormat === 'INFANTIL' ? '1.5px solid #F5A800' : '1px solid #cbd5e1'
              }}
            >
              <Baby size={14} /> Educación Infantil
            </button>
            <button
              type="button"
              onClick={() => setStageFormat('PRIMARIA')}
              className="btn"
              style={{
                padding: '0.32rem 0.75rem',
                fontSize: '0.78rem',
                background: stageFormat === 'PRIMARIA' ? '#002D62' : 'white',
                color: stageFormat === 'PRIMARIA' ? '#ffffff' : '#334155',
                border: stageFormat === 'PRIMARIA' ? '1.5px solid #F5A800' : '1px solid #cbd5e1'
              }}
            >
              <School size={14} /> Educación Primaria
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <label style={{ fontSize: '0.76rem', fontWeight: 700, color: '#334155' }}>Especialista:</label>
            <select
              className="select-input"
              value={specialistTarget}
              onChange={(e) => setSpecialistTarget(e.target.value as MedicalSpecialistTarget)}
              style={{ width: 'auto', minHeight: '34px', padding: '0.25rem 0.6rem', fontSize: '0.78rem' }}
            >
              <option value="PEDIATRA">Pediatra de Atención Primaria</option>
              <option value="NEUROPEDIATRA">Neuropediatra</option>
              <option value="SALUD_MENTAL_USMIJ">Salud Mental (USMIJ)</option>
              <option value="OTRO_ESPECIALISTA">Otro especialista...</option>
            </select>
            {specialistTarget === 'OTRO_ESPECIALISTA' && (
              <input
                type="text"
                className="input-text"
                placeholder="Indicar especialidad..."
                value={customSpecialistName}
                onChange={(e) => setCustomSpecialistName(e.target.value)}
                style={{ width: '165px', minHeight: '34px', padding: '0.25rem 0.5rem', fontSize: '0.78rem' }}
              />
            )}
          </div>
        </div>

        {/* Nota metodológica oficial */}
        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderLeft: '4px solid #005CA9', borderRadius: '8px', padding: '0.7rem 0.9rem', marginBottom: '1.15rem', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
          <ShieldAlert size={18} color="#005CA9" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.79rem', color: '#1e3a8a', lineHeight: 1.45 }}>
            <strong>Instrucciones para el tutor/a:</strong> Cumplimentar desde la observación escolar describiendo conductas y situaciones concretas. <strong>No incluir diagnósticos ni conclusiones clínicas.</strong> Al guardar, el Departamento de Orientación generará automáticamente el informe oficial desarrollado para su revisión, firma y sello.
          </div>
        </div>

        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
          {/* BLOQUE 01 COMÚN: DATOS DE IDENTIFICACIÓN */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem' }}>
            <SectionBadge
              num="01"
              title={stageFormat === 'INFANTIL' ? 'Datos de Identificación' : 'Datos del Alumno/a'}
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              <div>
                <label className="form-label" style={{ fontSize: '0.78rem' }}>Alumno/a</label>
                <input type="text" className="input-text" value={referralCase.studentName} disabled style={{ background: '#f1f5f9', minHeight: '38px', fontSize: '0.84rem' }} />
              </div>
              <div>
                <label className="form-label" style={{ fontSize: '0.78rem' }}>Curso / Grupo</label>
                <input type="text" className="input-text" value={referralCase.grade} disabled style={{ background: '#f1f5f9', minHeight: '38px', fontSize: '0.84rem' }} />
              </div>
              <div>
                <label className="form-label" style={{ fontSize: '0.78rem' }}>Fecha de nacimiento</label>
                <input
                  type="text"
                  className="input-text"
                  placeholder="dd / mm / aaaa"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  style={{ minHeight: '38px', fontSize: '0.84rem' }}
                />
              </div>
              {stageFormat === 'INFANTIL' && (
                <div>
                  <label className="form-label" style={{ fontSize: '0.78rem' }}>Edad (años y meses)</label>
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Ej: 4 años y 6 meses"
                    value={studentAgeText}
                    onChange={(e) => setStudentAgeText(e.target.value)}
                    style={{ minHeight: '38px', fontSize: '0.84rem' }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* ================================================================= */}
          {/* FORMULARIO EDUCACIÓN INFANTIL (Apartados 02 a 07)                 */}
          {/* ================================================================= */}
          {stageFormat === 'INFANTIL' && (
            <>
              {/* 02 · MOTIVO DE LA DERIVACIÓN */}
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <SectionBadge
                  num="02"
                  title="Motivo de la Derivación"
                  subtitle="Indique qué preocupa, quién lo comunica y qué información se considera relevante para la consulta médica."
                />
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Dificultades o conductas observadas (ejemplos concretos y frecuencia) *</label>
                  <textarea
                    rows={3}
                    required
                    className="textarea-input"
                    placeholder="Describa conductas observables concretas en clase..."
                    value={infantilDifficultyExamples}
                    onChange={(e) => setInfantilDifficultyExamples(e.target.value)}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>¿Desde cuándo se observan?</label>
                    <input type="text" className="input-text" placeholder="Ej: Desde inicio de curso / 2º trimestre..." value={infantilSinceWhen} onChange={(e) => setInfantilSinceWhen(e.target.value)} style={{ minHeight: '38px' }} />
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>¿En qué situaciones o momentos aparecen?</label>
                    <input type="text" className="input-text" placeholder="Ej: Asamblea, transiciones, trabajo de mesa..." value={infantilSituations} onChange={(e) => setInfantilSituations(e.target.value)} style={{ minHeight: '38px' }} />
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>¿Con qué frecuencia e intensidad?</label>
                    <input type="text" className="input-text" placeholder="Ej: A diario, intensidad moderada-alta..." value={infantilFrequencyIntensity} onChange={(e) => setInfantilFrequencyIntensity(e.target.value)} style={{ minHeight: '38px' }} />
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>¿En qué contextos se aprecian? (detalle)</label>
                    <input type="text" className="input-text" placeholder="Ej: Principalmente en actividades grupales..." value={infantilContextsText} onChange={(e) => setInfantilContextsText(e.target.value)} style={{ minHeight: '38px' }} />
                  </div>
                </div>

                <div>
                  <label className="form-label" style={{ fontSize: '0.78rem' }}>Marque los contextos en los que se observa:</label>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    {INFANTIL_CONTEXT_OPTIONS.map(ctx => (
                      <label key={ctx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', background: infantilContexts.includes(ctx) ? '#eff6ff' : '#f8fafc', border: `1px solid ${infantilContexts.includes(ctx) ? '#005CA9' : '#cbd5e1'}`, padding: '0.35rem 0.7rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, color: '#0f172a' }}>
                        <input
                          type="checkbox"
                          checked={infantilContexts.includes(ctx)}
                          onChange={() => toggleInfantilContext(ctx)}
                        />
                        {ctx}
                      </label>
                    ))}
                    {infantilContexts.includes('Otros') && (
                      <input
                        type="text"
                        className="input-text"
                        placeholder="Especificar otros contextos..."
                        value={infantilContextsOther}
                        onChange={(e) => setInfantilContextsOther(e.target.value)}
                        style={{ width: '220px', minHeight: '34px', fontSize: '0.8rem' }}
                      />
                    )}
                  </div>
                </div>

                <div>
                  <label className="form-label" style={{ fontSize: '0.78rem' }}>Cambios recientes respecto a su funcionamiento habitual (si los hay)</label>
                  <textarea rows={2} className="textarea-input" placeholder="Indique si se han producido cambios recientes o acontecimientos relevantes..." value={infantilRecentChanges} onChange={(e) => setInfantilRecentChanges(e.target.value)} />
                </div>
              </div>

              {/* 03 · ÁREAS DE DESARROLLO */}
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <SectionBadge
                  num="03"
                  title="Áreas de Desarrollo"
                  subtitle="Registrar el nivel de autonomía y desempeño observado en las rutinas y actividades habituales del aula."
                />
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Lenguaje y comunicación <span style={{ fontWeight: 400, color: '#64748b' }}>· Comprensión de mensajes e instrucciones; expresión oral; pronunciación; construcción de frases; intención comunicativa e interacción.</span></label>
                  <textarea rows={2} className="textarea-input" value={infantilLanguage} onChange={(e) => setInfantilLanguage(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Desarrollo motor <span style={{ fontWeight: 400, color: '#64748b' }}>· Motricidad gruesa (desplazamientos, coordinación, equilibrio) y fina (uso de manos, herramientas, dibujo, manipulación).</span></label>
                  <textarea rows={2} className="textarea-input" value={infantilMotor} onChange={(e) => setInfantilMotor(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Habilidades cognitivas y aprendizaje <span style={{ fontWeight: 400, color: '#64748b' }}>· Atención, memoria, imitación, resolución de problemas, curiosidad, adquisición de conceptos y respuesta a nuevas tareas.</span></label>
                  <textarea rows={2} className="textarea-input" value={infantilCognitive} onChange={(e) => setInfantilCognitive(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Autonomía y hábitos <span style={{ fontWeight: 400, color: '#64748b' }}>· Control de esfínteres si es relevante, vestido, alimentación, higiene, organización y seguimiento de rutinas.</span></label>
                  <textarea rows={2} className="textarea-input" value={infantilAutonomy} onChange={(e) => setInfantilAutonomy(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Desarrollo socioemocional <span style={{ fontWeight: 400, color: '#64748b' }}>· Relación con iguales y adultos, expresión y regulación emocional, tolerancia a la frustración, adaptación a cambios y participación en el grupo.</span></label>
                  <textarea rows={2} className="textarea-input" value={infantilSocioEmotional} onChange={(e) => setInfantilSocioEmotional(e.target.value)} />
                </div>
              </div>

              {/* 04 · JUEGO, INTERESES Y ESTILO DE APRENDIZAJE */}
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <SectionBadge
                  num="04"
                  title="Juego, Intereses y Estilo de Aprendizaje"
                  subtitle="Complete los apartados que aporten información útil para comprender el funcionamiento del alumno/a."
                />
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Juego e interacción <span style={{ fontWeight: 400, color: '#64748b' }}>· Tipos de juego, juego simbólico, iniciativa, turnos, intereses compartidos y relación con iguales.</span></label>
                  <textarea rows={2} className="textarea-input" value={infantilPlay} onChange={(e) => setInfantilPlay(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Creatividad, preferencias e intereses <span style={{ fontWeight: 400, color: '#64748b' }}>· Actividades que le motivan, temas preferidos y formas de expresión creativa.</span></label>
                  <textarea rows={2} className="textarea-input" value={infantilCreativity} onChange={(e) => setInfantilCreativity(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Forma de aprender y realizar tareas <span style={{ fontWeight: 400, color: '#64748b' }}>· Apoyos que facilitan la comprensión (modelado, apoyos visuales, repetición, acompañamiento); ritmo, perseverancia y necesidad de supervisión.</span></label>
                  <textarea rows={2} className="textarea-input" value={infantilLearningStyle} onChange={(e) => setInfantilLearningStyle(e.target.value)} />
                </div>

                <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <label className="form-label" style={{ fontSize: '0.8rem', marginBottom: '0.45rem' }}>
                    En el entorno escolar, ¿se observan respuestas sensoriales o conductas repetitivas que afecten a su participación?
                  </label>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                    {[
                      { val: 'SI', label: 'Sí' },
                      { val: 'NO', label: 'No' },
                      { val: 'NO_CONSTA', label: 'No consta' }
                    ].map(opt => (
                      <label key={opt.val} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', cursor: 'pointer', fontWeight: 600 }}>
                        <input
                          type="radio"
                          name="sensoryRepetitive"
                          checked={infantilSensoryRepetitive === opt.val}
                          onChange={() => setInfantilSensoryRepetitive(opt.val as 'SI' | 'NO' | 'NO_CONSTA')}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                  <textarea
                    rows={2}
                    className="textarea-input"
                    placeholder="Si procede, describa qué se observa y ante qué estímulos o situaciones..."
                    value={infantilSensoryDetails}
                    onChange={(e) => setInfantilSensoryDetails(e.target.value)}
                  />
                </div>
              </div>

              {/* 05 · COMPETENCIA CURRICULAR Y PARTICIPACIÓN */}
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <SectionBadge num="05" title="Competencia Curricular y Participación" />
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Progreso respecto a los objetivos del nivel <span style={{ fontWeight: 400, color: '#64748b' }}>· Comunicación y lenguaje, conocimiento del entorno, iniciación a la lectoescritura y matemáticas, juego y participación.</span></label>
                  <textarea rows={2} className="textarea-input" value={infantilCurricularProgress} onChange={(e) => setInfantilCurricularProgress(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Asistencia, adaptación y participación en las rutinas escolares</label>
                  <textarea rows={2} className="textarea-input" value={infantilAttendanceParticipation} onChange={(e) => setInfantilAttendanceParticipation(e.target.value)} />
                </div>
              </div>

              {/* 06 · MEDIDAS Y APOYOS APLICADOS */}
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <SectionBadge num="06" title="Medidas y Apoyos Aplicados" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {infantilMeasuresTable.map((row, idx) => (
                    <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.7fr 1.4fr auto', gap: '0.45rem', alignItems: 'center' }}>
                      <input
                        type="text"
                        className="input-text"
                        placeholder="Medida / apoyo aplicado"
                        value={row.measure}
                        onChange={(e) => updateMeasureRow(idx, 'measure', e.target.value)}
                        style={{ minHeight: '36px', fontSize: '0.8rem' }}
                      />
                      <input
                        type="text"
                        className="input-text"
                        placeholder="Periodo"
                        value={row.period}
                        onChange={(e) => updateMeasureRow(idx, 'period', e.target.value)}
                        style={{ minHeight: '36px', fontSize: '0.8rem' }}
                      />
                      <input
                        type="text"
                        className="input-text"
                        placeholder="Respuesta observada / resultado"
                        value={row.result}
                        onChange={(e) => updateMeasureRow(idx, 'result', e.target.value)}
                        style={{ minHeight: '36px', fontSize: '0.8rem' }}
                      />
                      {infantilMeasuresTable.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setInfantilMeasuresTable(prev => prev.filter((_, i) => i !== idx))}
                          style={{ background: '#fee2e2', color: '#b91c1c', border: 'none', borderRadius: '6px', padding: '0.4rem', cursor: 'pointer' }}
                          title="Quitar fila"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setInfantilMeasuresTable(prev => [...prev, { measure: '', period: '', result: '' }])}
                    style={{ alignSelf: 'flex-start', padding: '0.3rem 0.7rem', fontSize: '0.76rem' }}
                  >
                    <Plus size={14} /> Añadir fila de medida / apoyo
                  </button>
                </div>

                <div>
                  <label className="form-label" style={{ fontSize: '0.78rem' }}>Apoyos externos conocidos por el centro (si la familia los ha comunicado) y coordinación realizada</label>
                  <textarea rows={2} className="textarea-input" placeholder="No solicitar información clínica no compartida por la familia..." value={infantilExternalSupports} onChange={(e) => setInfantilExternalSupports(e.target.value)} />
                </div>
              </div>

              {/* 07 · SÍNTESIS DEL TUTOR/A */}
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <SectionBadge num="07" title="Síntesis del Tutor/a" />
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Fortalezas, recursos personales y situaciones en las que muestra un mejor desempeño</label>
                  <textarea rows={2} className="textarea-input" value={infantilStrengths} onChange={(e) => setInfantilStrengths(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Información adicional que se considere importante para la consulta médica</label>
                  <textarea rows={2} className="textarea-input" value={infantilAdditionalInfo} onChange={(e) => setInfantilAdditionalInfo(e.target.value)} />
                </div>
              </div>
            </>
          )}

          {/* ================================================================= */}
          {/* FORMULARIO EDUCACIÓN PRIMARIA (Apartados 02 y 03 - 11 Ámbitos)    */}
          {/* ================================================================= */}
          {stageFormat === 'PRIMARIA' && (
            <>
              {/* 02 · CONTEXTO ESCOLAR Y APOYOS */}
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <SectionBadge
                  num="02"
                  title="Contexto Escolar y Apoyos"
                  subtitle={`El/la alumno/a ${referralCase.studentName} está escolarizado/a en ${referralCase.grade} del Colegio San Buenaventura.`}
                />
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Apoyos semanales de Lengua y Matemáticas en grupo reducido (indique sí/no y frecuencia)</label>
                  <textarea rows={2} className="textarea-input" placeholder="Ej: Sí, 2 sesiones semanales de Lengua y 2 de Matemáticas en grupo reducido / No recibe..." value={primariaGroupSupport} onChange={(e) => setPrimariaGroupSupport(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Apoyo del especialista de Pedagogía Terapéutica (indique sí/no y número de sesiones)</label>
                  <textarea rows={2} className="textarea-input" placeholder="Ej: Sí, 3 sesiones semanales con especialista PT / No recibe actualmente..." value={primariaPtSupport} onChange={(e) => setPrimariaPtSupport(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Medidas de acceso a los procesos de evaluación (indique cuáles)</label>
                  <textarea rows={2} className="textarea-input" placeholder="Ej: Ampliación de tiempo (+25%), lectura oral de enunciados, exámenes fragmentados, ubicación en primera fila..." value={primariaEvalMeasures} onChange={(e) => setPrimariaEvalMeasures(e.target.value)} />
                </div>
              </div>

              {/* 03 · DESARROLLO Y FUNCIONAMIENTO EN EL AULA (11 ÁMBITOS) */}
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem' }}>
                <SectionBadge
                  num="03"
                  title="Desarrollo y Funcionamiento en el Aula"
                  subtitle="Describa conductas observables y ejemplos relevantes en cada uno de los 11 ámbitos."
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '0.85rem' }}>
                  {PRIMARIA_DOMAINS.map(domain => (
                    <div key={domain.key} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.7rem' }}>
                      <label className="form-label" style={{ fontSize: '0.8rem', color: '#002D62', fontWeight: 700, marginBottom: '0.35rem' }}>
                        <span style={{ color: '#D97706', marginRight: '0.3rem' }}>{domain.num} ·</span>
                        {domain.label}
                      </label>
                      <textarea
                        rows={2}
                        className="textarea-input"
                        placeholder={domain.placeholder}
                        value={primariaDomains[domain.key] || ''}
                        onChange={(e) => setPrimariaDomains(prev => ({ ...prev, [domain.key]: e.target.value }))}
                        style={{ fontSize: '0.82rem' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Barra de acciones */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              {saveSuccess && (
                <span style={{ color: '#15803d', fontSize: '0.84rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={16} /> Observaciones guardadas correctamente
                </span>
              )}
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cerrar
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ background: '#002D62', borderColor: '#002D62' }}
              >
                <Save size={16} /> {isSubmitting ? 'Guardando...' : 'Guardar Recogida de Información'}
              </button>
              {isCounselor && onOpenReportGenerator && (
                <button
                  type="button"
                  className="btn"
                  onClick={onOpenReportGenerator}
                  style={{ background: '#F5A800', color: '#002D62', fontWeight: 800, border: 'none' }}
                >
                  <Stethoscope size={16} /> Generar / Ver Informe Oficial
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
