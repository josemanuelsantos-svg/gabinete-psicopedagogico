import React, { useState } from 'react';
import { StudentNEAE } from '../types';
import { Sparkles, BookOpen, Printer, Search, Filter, UserCheck, ShieldCheck } from 'lucide-react';

interface NeaePortalProps {
  students: StudentNEAE[];
}

export const NeaePortal: React.FC<NeaePortalProps> = ({ students = [] }) => {
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(students[0]?.id || null);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const [filterGrade, setFilterGrade] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredStudents = (students || []).filter(s => {
    if (!s) return false;
    // Filtro por término de búsqueda (nombre)
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      if (!s.name.toLowerCase().includes(term)) return false;
    }
    // Filtro por curso
    if (filterGrade !== 'ALL') {
      if (!s.grade.toLowerCase().includes(filterGrade.toLowerCase())) return false;
    }
    // Filtro por categoría
    if (filterCategory !== 'ALL') {
      const cat = (s.category || '').toLowerCase();
      if (filterCategory === 'AACC' && !cat.includes('altas capacidades')) return false;
      if (filterCategory === 'ESPECIFICO' && !cat.includes('específico')) return false;
      if (filterCategory === 'ORDINARIO' && !cat.includes('ordinario')) return false;
    }
    return true;
  });

  const selectedStudent = (students || []).find(s => s?.id === (selectedStudentId || filteredStudents[0]?.id)) || filteredStudents[0];

  const handlePrint = () => {
    window.print();
  };

  const guidelines = selectedStudent?.guidelines || {
    generalGoal: 'Intervención educativa y metodológica adaptada en aula.',
    methodologicalAdaptations: ['Instrucciones paso a paso.', 'Apoyo visual y anticipación.', 'Fraccionamiento de tareas.'],
    environmentalAdaptations: ['Ubicación en primera fila cerca del profesor.'],
    evaluationAdaptations: ['Dar 25% más de tiempo en controles y exámenes.'],
    emotionalTips: ['Reforzamiento positivo constante ante el esfuerzo.'],
    ptHoursPerWeek: 2,
    alHoursPerWeek: 1
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
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <span style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>
            Censo Oficial de Apoyo y Diversidad • Colegio San Buenaventura
          </span>
          <h2 style={{ fontSize: '1.6rem', color: 'white', marginTop: '0.3rem' }}>
            Portal de Pautas de Aula e Intervención Educativa
          </h2>
          <p style={{ opacity: 0.9, fontSize: '0.88rem' }}>
            Consulta oficial para el claustro de profesores: <strong>{students.length} alumnos censados</strong> en Primaria (1º a 6º) con adaptaciones metodológicas, apoyos ordinarios y específicos (PT/AL) y altas capacidades.
          </p>
        </div>

        <button className="btn btn-secondary no-print" onClick={handlePrint} style={{ background: 'white', color: 'var(--primary-700)', border: 'none' }}>
          <Printer size={16} /> Imprimir Ficha de Pautas
        </button>
      </div>

      {/* Grid Layout: Left List + Right Detail */}
      <div className="grid-2" style={{ gridTemplateColumns: '1fr 2fr', alignItems: 'start' }}>
        {/* Left Column: Student List & Filters */}
        <div className="card no-print">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <h3 style={{ fontSize: '1.05rem' }}>Alumnos Censados ({filteredStudents.length} / {students.length})</h3>
          </div>

          {/* Buscador de Alumno */}
          <div style={{ position: 'relative', marginBottom: '0.75rem' }}>
            <input
              type="text"
              className="input-text"
              placeholder="Buscar por nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ fontSize: '0.82rem', paddingLeft: '2.1rem', minHeight: '38px' }}
            />
            <Search size={15} color="#94a3b8" style={{ position: 'absolute', left: '0.65rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>

          {/* Filtros por Curso y Modalidad */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <div>
              <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Curso:</label>
              <select
                className="select-input"
                style={{ fontSize: '0.78rem', padding: '0.3rem 0.5rem', minHeight: '36px' }}
                value={filterGrade}
                onChange={(e) => setFilterGrade(e.target.value)}
              >
                <option value="ALL">Todos los cursos</option>
                <option value="1º">1º Primaria</option>
                <option value="2º">2º Primaria</option>
                <option value="3º">3º Primaria</option>
                <option value="4º">4º Primaria</option>
                <option value="5º">5º Primaria</option>
                <option value="6º">6º Primaria</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Modalidad:</label>
              <select
                className="select-input"
                style={{ fontSize: '0.78rem', padding: '0.3rem 0.5rem', minHeight: '36px' }}
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="ALL">Todas las modalidades</option>
                <option value="ESPECIFICO">Apoyo Específico (PT/AL)</option>
                <option value="ORDINARIO">Apoyo Ordinario</option>
                <option value="AACC">Altas Capacidades (AACC)</option>
              </select>
            </div>
          </div>

          {/* Lista con Scroll */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', maxHeight: '620px', overflowY: 'auto', paddingRight: '0.2rem' }}>
            {filteredStudents.length === 0 ? (
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textAlign: 'center', padding: '1.5rem 0' }}>
                No se han encontrado alumnos con los filtros seleccionados.
              </p>
            ) : (
              filteredStudents.map(s => {
                const isSelected = s.id === selectedStudent?.id;
                const isAACC = s.category.includes('Altas Capacidades');
                const isEsp = s.category.includes('Específico');

                return (
                  <div
                    key={s.id}
                    onClick={() => setSelectedStudentId(s.id)}
                    style={{
                      padding: '0.7rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      border: `1px solid ${isSelected ? 'var(--primary-600)' : 'var(--border-light)'}`,
                      background: isSelected ? 'var(--primary-50)' : 'var(--bg-card)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h4 style={{ fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 700 }}>{s.name}</h4>
                      <span style={{ fontSize: '0.7rem', background: '#e2e8f0', color: '#334155', padding: '0.1rem 0.45rem', borderRadius: '10px', fontWeight: 600 }}>
                        {s.grade.replace('Educación Primaria ', 'EP ')}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.25rem' }}>
                      <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        padding: '0.1rem 0.4rem',
                        borderRadius: '6px',
                        background: isAACC ? '#fef3c7' : (isEsp ? '#e0f2fe' : '#f1f5f9'),
                        color: isAACC ? '#92400e' : (isEsp ? '#0369a1' : '#475569')
                      }}>
                        {isAACC ? '⭐ Altas Capacidades' : (isEsp ? '🎯 Apoyo Específico PT/AL' : '📘 Apoyo Ordinario')}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Detailed Guidelines */}
        {selectedStudent ? (
          <div className="card" id="printable-neae-card" style={{ padding: '1.75rem' }}>
            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{
                    background: selectedStudent.category.includes('Altas Capacidades') ? '#fef3c7' : (selectedStudent.category.includes('Específico') ? '#e0f2fe' : '#ccfbf1'),
                    color: selectedStudent.category.includes('Altas Capacidades') ? '#92400e' : (selectedStudent.category.includes('Específico') ? '#0369a1' : '#0f766e'),
                    padding: '0.2rem 0.6rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}>
                    {selectedStudent.category}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-900)', marginTop: '0.4rem' }}>
                    {selectedStudent.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    {selectedStudent.grade} • {selectedStudent.tutor}
                  </p>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="badge" style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', fontSize: '0.78rem' }}>
                    Adaptación: {selectedStudent.curricularAdaptation}
                  </span>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                    Última actualización: {selectedStudent.lastReviewDate}
                  </div>
                </div>
              </div>

              {/* Specialists Assigned */}
              {selectedStudent.ptTeacher && (
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', background: 'var(--bg-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem' }}>
                  <div><strong>Especialista PT:</strong> {selectedStudent.ptTeacher} ({guidelines.ptHoursPerWeek || 2} h/sem)</div>
                  {selectedStudent.alTeacher && (
                    <div><strong>Especialista AL:</strong> {selectedStudent.alTeacher} ({guidelines.alHoursPerWeek || 1} h/sem)</div>
                  )}
                </div>
              )}
            </div>

            {/* General Goal */}
            <div style={{ marginBottom: '1.5rem', background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-600)' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--primary-800)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                Objetivo General de Intervención Educativa
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
                {guidelines.generalGoal}
              </p>
            </div>

            {/* 4 Pillars of Guidelines */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {/* Methodological */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '1.1rem', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.92rem', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <Sparkles size={16} /> Pautas Metodológicas de Aula
                </h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--text-main)' }}>
                  {guidelines.methodologicalAdaptations.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>

              {/* Environmental */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '1.1rem', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.92rem', color: '#0369a1', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <BookOpen size={16} /> Ubicación y Entorno de Aula
                </h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--text-main)' }}>
                  {guidelines.environmentalAdaptations.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>

              {/* Evaluation */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '1.1rem', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.92rem', color: '#15803d', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <ShieldCheck size={16} /> Adaptaciones en Exámenes y Controles
                </h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--text-main)' }}>
                  {guidelines.evaluationAdaptations.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>

              {/* Emotional Tips */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '1.1rem', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.92rem', color: '#92400e', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <UserCheck size={16} /> Apoyo Emocional y Motivacional
                </h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--text-main)' }}>
                  {guidelines.emotionalTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="card" style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            Selecciona un alumno/a de la lista para consultar sus pautas pedagógicas.
          </div>
        )}
      </div>
    </div>
  );
};
