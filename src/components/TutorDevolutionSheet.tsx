import React from 'react';
import { ReferralCase } from '../types';
import { Printer, CheckCircle2, X } from 'lucide-react';

interface TutorDevolutionSheetProps {
  referralCase: ReferralCase | null;
  onClose: () => void;
}

export const TutorDevolutionSheet: React.FC<TutorDevolutionSheetProps> = ({
  referralCase,
  onClose
}) => {
  if (!referralCase) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '800px', padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }} className="no-print">
          <div>
            <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
              Documento Ejecutivo de Orientación
            </span>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>
              Ficha de Devolución al Tutor/a
            </h3>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn btn-primary" onClick={handlePrint} style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
              <Printer size={16} /> Imprimir Ficha de Aula (1 Pág)
            </button>
            <button className="btn btn-secondary" onClick={onClose} style={{ padding: '0.4rem 0.6rem', minHeight: '36px' }}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable 1-Page Document */}
        <div className="card" id="printable-devolution-sheet" style={{ padding: '1.75rem', background: '#ffffff', border: '1px solid var(--border-light)' }}>
          <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', letterSpacing: '0.05em' }}>
            Colegio San Buenaventura • Equipo de Orientación Psicopedagógica
          </div>
          <h2 style={{ textAlign: 'center', fontSize: '1.3rem', margin: '0.3rem 0 1.25rem 0', color: 'var(--primary-900)' }}>
            FICHA RESUMEN DE DEVOLUCIÓN AL TUTOR/A
          </h2>

          <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
            <div><strong>Alumno/a:</strong> {referralCase.studentName}</div>
            <div><strong>Curso:</strong> {referralCase.grade}</div>
            <div><strong>Tutor/a Receptora:</strong> {referralCase.teacherName}</div>
            <div><strong>Fecha Dictamen:</strong> {referralCase.decisionDate || referralCase.dateSubmitted}</div>
            <div><strong>Dictamen Técnico:</strong> <span style={{ color: 'var(--primary-800)', fontWeight: 700 }}>{referralCase.categoryTag || 'Evaluación Psicopedagógica'}</span></div>
            <div><strong>Prioridad de Atención:</strong> {referralCase.priority}</div>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-800)', marginBottom: '0.4rem', borderBottom: '2px solid var(--primary-500)', paddingBottom: '0.2rem' }}>
              1. Conclusión y Valoración Técnica de Orientación
            </h4>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.5', textAlign: 'justify' }}>
              {referralCase.counselorNotes || 'Expediente valorado con pautas metodológicas específicas para aplicar en el aula ordinaria.'}
            </p>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-800)', marginBottom: '0.5rem', borderBottom: '2px solid var(--primary-500)', paddingBottom: '0.2rem' }}>
              2. Pautas Inmediatas de Aula a Aplicar desde el Lunes
            </h4>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {(referralCase.actionPlan?.methodologicalAdaptations || [
                'Ubicación en primera fila de aula cerca de la mesa del docente.',
                'Fraccionar tareas complejas y controles extensos en dos partes.',
                'Supervisión y confirmación del marcado de tareas en la agenda.',
                'Dar 25% más de tiempo en controles y exámenes escritos.',
                'Refuerzo positivo frecuente tras mantener la atención continua.'
              ]).map((tip, idx) => (
                <li key={idx}><strong>{idx + 1}.</strong> {tip}</li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', fontSize: '0.8rem' }}>
            <div>
              Firma del Orientador/a Psicopedagógico/a<br />
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Sello del Gabinete Escolar</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              Firma y Recibido del Tutor/a<br />
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Fecha: ____ / ____ / 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
