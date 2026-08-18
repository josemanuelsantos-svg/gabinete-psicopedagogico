import React, { useState } from 'react';
import { StudentNEAE } from '../types';
import { Sparkles, BookOpen, Printer, CheckCircle2, User, ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';

interface NeaePortalProps {
  students: StudentNEAE[];
}

export const NeaePortal: React.FC<NeaePortalProps> = ({ students }) => {
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(students[0]?.id || null);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const filteredStudents = students.filter(s => {
    if (filterCategory !== 'ALL' && !s.category.includes(filterCategory)) return false;
    return true;
  });

  const selectedStudent = students.find(s => s.id === selectedStudentId);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0d9488 0%, #047857 100%)',
        color: 'white',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem 2rem',
        display: 'flex',
        justify-content: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <span style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>
            Registro Oficial NEAE / ACNEAE
          </span>
          <h2 style={{ fontSize: '1.6rem', color: 'white', marginTop: '0.3rem' }}>
            Portal de Pautas de Aula e Intervención Educativa
          </h2>
          <p style={{ opacity: 0.9, fontSize: '0.88rem' }}>
            Consulta rápida para el claustro de profesores sobre adaptaciones, apoyos de PT/AL y estrategias de trabajo para los alumnos censados.
          </p>
        </div>

        <button className="btn btn-secondary no-print" onClick={handlePrint} style={{ background: 'white', color: 'var(--primary-700)', border: 'none' }}>
          <Printer size={16} /> Imprimir Ficha de Pautas
        </button>
      </div>

      {/* Grid Layout: Left List + Right Detail */}
      <div className="grid-2" style={{ gridTemplateColumns: '1fr 2fr', alignItems: 'start' }}>
        {/* Left Column: Student List */}
        <div className="card no-print">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.05rem' }}>Alumnos Censados ({filteredStudents.length})</h3>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <select
              className="select-input"
              style={{ fontSize: '0.8rem', padding: '0.35rem 0.6rem' }}
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="ALL">Todas las Categorías</option>
              <option value="TDAH">TDAH</option>
              <option value="DEA Lectura">DEA Lectura (Dislexia)</option>
              <option value="Altas Capacidades">Altas Capacidades</option>
              <option value="TEL">TEL (Trastorno Lenguaje)</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {filteredStudents.map(s => (
              <div
                key={s.id}
                onClick={() => setSelectedStudentId(s.id)}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: `1px solid ${s.id === selectedStudentId ? 'var(--primary-600)' : 'var(--border-light)'}`,
                  background: s.id === selectedStudentId ? 'var(--primary-50)' : 'var(--bg-card)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{s.name}</h4>
                  <span style={{ fontSize: '0.72rem', background: '#e2e8f0', color: '#334155', padding: '0.15rem 0.5rem', borderRadius: '10px', fontWeight: 600 }}>
                    {s.grade}
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--primary-700)', fontWeight: 600, marginTop: '0.2rem' }}>
                  {s.category}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Adaptación: <strong>{s.curricularAdaptation}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Complete Intervention Blueprint */}
        {selectedStudent ? (
          <div className="card" id="printable-neae-card">
            <div style={{ borderBottom: '2px solid var(--primary-600)', paddingBottom: '1rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
                  {selectedStudent.category}
                </span>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '0.3rem' }}>
                  {selectedStudent.name}
                </h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Curso: <strong>{selectedStudent.grade}</strong> • Tutor/a: <strong>{selectedStudent.tutor}</strong>
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ background: '#dcfce7', color: '#15803d', padding: '0.3rem 0.75rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>
                  Adaptación {selectedStudent.curricularAdaptation}
                </span>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                  Última revisión: {selectedStudent.lastReviewDate}
                </p>
              </div>
            </div>

            {/* Special Support Teachers Pills */}
            {(selectedStudent.ptTeacher || selectedStudent.alTeacher) && (
              <div style={{ display: 'flex', gap: '1rem', background: 'var(--bg-subtle)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
                {selectedStudent.ptTeacher && (
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent-indigo)' }}>
                    📘 Pedagogía Terapéutica (PT): {selectedStudent.ptTeacher} ({selectedStudent.guidelines.ptHoursPerWeek || 2}h/semana)
                  </span>
                )}
                {selectedStudent.alTeacher && (
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent-purple)' }}>
                    🗣 Audición y Lenguaje (AL): {selectedStudent.alTeacher} ({selectedStudent.guidelines.alHoursPerWeek || 2}h/semana)
                  </span>
                )}
              </div>
            )}

            {/* General Goal */}
            <div style={{ marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--primary-700)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={18} /> Objetivo General de Intervención
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', background: '#f0fdfa', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-600)' }}>
                {selectedStudent.guidelines.generalGoal}
              </p>
            </div>

            {/* Methodological Adaptations */}
            <div style={{ marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <BookOpen size={18} color="var(--accent-blue)" /> Pautas Metodológicas para el Aula
              </h3>
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {selectedStudent.guidelines.methodologicalAdaptations.map((tip, idx) => (
                  <li key={idx} style={{ fontSize: '0.88rem', color: '#334155', lineHeight: '1.5' }}>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Evaluation & Environmental Adaptations */}
            <div className="grid-2" style={{ marginBottom: '1.25rem' }}>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '0.88rem', color: 'var(--accent-indigo)', marginBottom: '0.4rem', fontWeight: 700 }}>
                  Adaptación en Exámenes y Evaluaciones
                </h4>
                <ul style={{ paddingLeft: '1rem', fontSize: '0.82rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {selectedStudent.guidelines.evaluationAdaptations.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '0.88rem', color: 'var(--primary-700)', marginBottom: '0.4rem', fontWeight: 700 }}>
                  Disposición Ambiental del Aula
                </h4>
                <ul style={{ paddingLeft: '1rem', fontSize: '0.82rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {selectedStudent.guidelines.environmentalAdaptations.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Emotional Support Tips */}
            <div style={{ background: '#fffbe6', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #fde047' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#854d0e', marginBottom: '0.3rem', fontWeight: 700 }}>
                💡 Pautas Socioemocionales y de Gestión Clima de Aula
              </h4>
              <ul style={{ paddingLeft: '1rem', fontSize: '0.82rem', color: '#713f12' }}>
                {selectedStudent.guidelines.emotionalTips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <p>Selecciona un alumno del listado para consultar sus pautas de aula.</p>
          </div>
        )}
      </div>
    </div>
  );
};
