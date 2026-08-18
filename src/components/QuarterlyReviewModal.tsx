import React, { useState } from 'react';
import { StudentNEAE, QuarterlyReview } from '../types';
import { CheckCircle2, MessageSquare, AlertCircle, Plus, X } from 'lucide-react';

interface QuarterlyReviewModalProps {
  student: StudentNEAE | null;
  onClose: () => void;
  onAddReview: (studentId: string, review: QuarterlyReview) => void;
}

export const QuarterlyReviewModal: React.FC<QuarterlyReviewModalProps> = ({
  student,
  onClose,
  onAddReview
}) => {
  const [quarter, setQuarter] = useState<'1º Trimestre' | '2º Trimestre' | '3º Trimestre'>('1º Trimestre');
  const [teacherName, setTeacherName] = useState<string>(student?.tutor || 'Tutor de Aula');
  const [rating, setRating] = useState<'ALTA' | 'MEDIA' | 'NULA_REQUIERE_REVISION'>('ALTA');
  const [notes, setNotes] = useState<string>('');
  const [adjustmentsNeeded, setAdjustmentsNeeded] = useState<boolean>(false);

  if (!student) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: QuarterlyReview = {
      id: `REV-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      quarter,
      teacherName,
      effectivenessRating: rating,
      classroomProgressNotes: notes || 'Pautas aplicadas con buen seguimiento en el aula.',
      adaptationAdjustmentsNeeded: adjustmentsNeeded
    };

    onAddReview(student.id, newReview);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '650px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
          <div>
            <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
              Feedback Loop Docente
            </span>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
              Seguimiento Trimestral de Pautas - {student.name}
            </h3>
          </div>
          <button className="btn btn-secondary" onClick={onClose} style={{ padding: '0.3rem 0.6rem' }}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Trimestre Evaluado *</label>
              <select className="select-input" value={quarter} onChange={(e) => setQuarter(e.target.value as any)}>
                <option value="1º Trimestre">1º Trimestre (Octubre - Diciembre)</option>
                <option value="2º Trimestre">2º Trimestre (Enero - Marzo)</option>
                <option value="3º Trimestre">3º Trimestre (Abril - Junio)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Profesor / Tutor Evaluador *</label>
              <input type="text" required className="input-text" value={teacherName} onChange={(e) => setTeacherName(e.target.value)} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Valoración Global de Eficacia de las Pautas en el Aula *</label>
            <select className="select-input" value={rating} onChange={(e) => setRating(e.target.value as any)}>
              <option value="ALTA">Eficacia Alta (Gran mejora en el rendimiento/conducta del alumno)</option>
              <option value="MEDIA">Eficacia Media (Mejora parcial, requiere constancia)</option>
              <option value="NULA_REQUIERE_REVISION">Eficacia Nula (El alumno no progresa, requiere revisar el dictamen)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Observaciones Cualitativas del Aula y Progresos *</label>
            <textarea
              required
              rows={4}
              className="textarea-input"
              placeholder="Describe cómo responde el alumno a las adaptaciones de examen, fraccionamiento de tareas o apoyos..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginBottom: '1.25rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={adjustmentsNeeded}
                onChange={(e) => setAdjustmentsNeeded(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--primary-600)' }}
              />
              Solicitar revisión/modificación de las pautas actuales al Equipo de Orientación
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn btn-primary">
              <Plus size={16} /> Guardar Valoración Trimestral
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
