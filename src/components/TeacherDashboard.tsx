import React from 'react';
import { ReferralCase, StudentNEAE } from '../types';
import { PlusCircle, FileText, CheckCircle2, Clock, Eye, BookOpen, AlertCircle, ArrowRight } from 'lucide-react';

interface TeacherDashboardProps {
  cases: ReferralCase[];
  neaeStudents: StudentNEAE[];
  onNewReferral: () => void;
  onSelectCase: (c: ReferralCase) => void;
  onOpenNeaePortal: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  cases,
  neaeStudents,
  onNewReferral,
  onSelectCase,
  onOpenNeaePortal
}) => {
  const pendingCases = cases.filter(c => c.status === 'PENDIENTE_REVISION');
  const evaluationCases = cases.filter(c => c.status === 'EN_EVALUACION');
  const completedCases = cases.filter(c => c.status === 'DICTAMINADO_CON_PAUTAS');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Banner Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0f766e 0%, #1e1b4b 100%)',
        color: 'white',
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '750px' }}>
          <span style={{ background: 'rgba(255,255,255,0.18)', color: '#ccfbf1', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Portal del Claustro Docente
          </span>
          <h2 style={{ fontSize: '1.8rem', color: 'white', marginTop: '0.5rem', marginBottom: '0.5rem', fontWeight: 800 }}>
            Derivación Rápida y Comunicación con Orientación
          </h2>
          <p style={{ opacity: 0.9, fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Rellena el cuestionario base para notificar al equipo psicopedagógico los alumnos que requieren valoración. Consulta en tiempo real el estado de tus expedientes y las pautas concretas para trabajar en el aula.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={onNewReferral} style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
              <PlusCircle size={20} />
              Nueva Derivación de Alumno
            </button>
            <button className="btn btn-secondary" onClick={onOpenNeaePortal} style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.25)' }}>
              <BookOpen size={18} />
              Ver Pautas de Aula NEAE ({neaeStudents.length})
            </button>
          </div>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid-3">
        <div className="card" style={{ borderLeft: '4px solid var(--status-pending-text)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>EN REVISIÓN</p>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>{pendingCases.length}</h3>
            </div>
            <div style={{ background: '#fef3c7', padding: '0.6rem', borderRadius: '12px', color: '#b45309' }}>
              <Clock size={24} />
            </div>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Casos pendientes de triaje inicial</p>
        </div>

        <div className="card" style={{ borderLeft: '4px solid var(--status-evaluation-text)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>EN EVALUACIÓN</p>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>{evaluationCases.length}</h3>
            </div>
            <div style={{ background: '#dbeafe', padding: '0.6rem', borderRadius: '12px', color: '#1d4ed8' }}>
              <FileText size={24} />
            </div>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Batería de pruebas en curso</p>
        </div>

        <div className="card" style={{ borderLeft: '4px solid var(--status-done-text)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>DICTAMINADOS</p>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>{completedCases.length}</h3>
            </div>
            <div style={{ background: '#dcfce7', padding: '0.6rem', borderRadius: '12px', color: '#15803d' }}>
              <CheckCircle2 size={24} />
            </div>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Con pautas de aula activas</p>
        </div>
      </div>

      {/* Cases List Table */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem' }}>Estado de mis Derivaciones Enviadas</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Haz clic en un expediente para consultar la predicción diagnóstica o las pautas de aula asignadas por el orientador.</p>
          </div>
          <button className="btn btn-primary" onClick={onNewReferral} style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}>
            <PlusCircle size={16} /> Nueva Derivación
          </button>
        </div>

        {cases.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
            <FileText size={40} color="var(--text-muted)" style={{ marginBottom: '0.5rem' }} />
            <p style={{ fontWeight: 600, color: 'var(--text-main)' }}>No has enviado ninguna derivación todavía.</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Rellena el cuestionario base para solicitar la valoración psicopedagógica de un alumno.</p>
            <button className="btn btn-primary" onClick={onNewReferral}>Comenzar Cuestionario</button>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Alumno / Curso</th>
                  <th>Fecha Envíos</th>
                  <th>Categoría / Motivo</th>
                  <th>Prioridad</th>
                  <th>Estado</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {cases.map((c) => (
                  <tr key={c.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>{c.studentName}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{c.grade} • {c.teacherName}</div>
                    </td>
                    <td style={{ fontSize: '0.85rem' }}>{c.dateSubmitted}</td>
                    <td>
                      <span style={{ background: 'var(--primary-50)', color: 'var(--primary-700)', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                        {c.categoryTag || c.triage.primaryHypothesis.replace('_', ' ')}
                      </span>
                    </td>
                    <td>
                      <span className={`badge badge-${c.priority.toLowerCase()}`}>
                        {c.priority}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge status-${c.status}`}>
                        {c.status === 'PENDIENTE_REVISION' && 'Pendiente Revisión'}
                        {c.status === 'EN_EVALUACION' && 'En Evaluación'}
                        {c.status === 'DICTAMINADO_CON_PAUTAS' && 'Dictaminado con Pautas'}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-secondary"
                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                        onClick={() => onSelectCase(c)}
                      >
                        <Eye size={14} /> Ver Expediente
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
