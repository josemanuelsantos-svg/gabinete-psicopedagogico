import React, { useState } from 'react';
import { StudentNEAE, EducationalStage } from '../types';
import { 
  Sparkles, 
  BookOpen, 
  Printer, 
  Search, 
  Plus, 
  Pencil, 
  Trash2, 
  X, 
  Save, 
  UserCheck, 
  ShieldCheck, 
  AlertTriangle,
  Clock
} from 'lucide-react';

interface NeaePortalProps {
  students: StudentNEAE[];
  isCounselor?: boolean;
  onSaveStudent?: (student: StudentNEAE) => Promise<void> | void;
  onDeleteStudent?: (studentId: string) => Promise<void> | void;
}

export const NeaePortal: React.FC<NeaePortalProps> = ({ 
  students = [], 
  isCounselor = false,
  onSaveStudent,
  onDeleteStudent
}) => {
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(students[0]?.id || null);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const [filterGrade, setFilterGrade] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Modal State for Counselor Editing/Adding
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState<StudentNEAE | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<StudentNEAE | null>(null);

  // Form Fields State
  const [formData, setFormData] = useState<{
    id: string;
    name: string;
    stage: EducationalStage;
    grade: string;
    tutor: string;
    category: string;
    curricularAdaptation: 'No Significativa (ACNS)' | 'Significativa (ACS)' | 'Enriquecimiento' | 'Pautas Ordinarias';
    status: 'Activo' | 'En Seguimiento' | 'Alta';
    ptTeacher: string;
    ptHours: number;
    alTeacher: string;
    alHours: number;
    generalGoal: string;
    methodological: string;
    environmental: string;
    evaluation: string;
    emotional: string;
  }>({
    id: '',
    name: '',
    stage: 'PRIMARIA',
    grade: '1º Educación Primaria A',
    tutor: 'Tutor/a de Aula',
    category: 'ACNEAE - Apoyo Ordinario',
    curricularAdaptation: 'Pautas Ordinarias',
    status: 'Activo',
    ptTeacher: '',
    ptHours: 0,
    alTeacher: '',
    alHours: 0,
    generalGoal: 'Atención educativa personalizada y adaptada en el aula ordinaria.',
    methodological: 'Fraccionamiento de tareas en pasos sencillos.\nSupervisión y confirmación del trabajo realizado.\nUso de apoyos manipulativos y visuales.',
    environmental: 'Ubicación en primera fila cerca de la pizarra.\nMesa de trabajo libre de distracciones visuales.',
    evaluationAdaptations: 'Ampliación del tiempo en actividades escritas y controles (+25%).\nLectura oral previa de enunciados complejos.',
    emotional: 'Refuerzo positivo constante ante el esfuerzo.\nValidación emocional y fomento de un clima seguro.'
  } as any);

  const filteredStudents = (students || []).filter(s => {
    if (!s) return false;
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      if (!s.name.toLowerCase().includes(term)) return false;
    }
    if (filterGrade !== 'ALL') {
      if (!s.grade.toLowerCase().includes(filterGrade.toLowerCase())) return false;
    }
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

  // Open modal for creating a new student
  const handleOpenAddModal = () => {
    const nextNumber = students.length + 1;
    const newId = `NEAE-${nextNumber < 10 ? '0' + nextNumber : nextNumber}`;
    setFormData({
      id: newId,
      name: '',
      stage: 'PRIMARIA',
      grade: '1º Educación Primaria A',
      tutor: 'Tutor/a de 1ºA',
      category: 'ACNEAE - Apoyo Ordinario',
      curricularAdaptation: 'Pautas Ordinarias',
      status: 'Activo',
      ptTeacher: 'Mª Ángeles Gómez (PT)',
      ptHours: 0,
      alTeacher: 'Sara Domínguez (AL)',
      alHours: 0,
      generalGoal: 'Intervención y seguimiento pedagógico adaptado en el aula.',
      methodological: 'Fraccionamiento de tareas en pasos breves.\nInstrucciones directas y apoyo visual.\nSupervisión periódica.',
      environmental: 'Ubicación en primera fila cerca del profesor.',
      evaluation: 'Tiempo adicional (+25%) en exámenes y controles.\nLectura oral previa de enunciados.',
      emotional: 'Reforzamiento positivo constante ante el esfuerzo y perseverancia.'
    });
    setStudentToEdit(null);
    setIsEditModalOpen(true);
  };

  // Open modal for editing an existing student
  const handleOpenEditModal = (student: StudentNEAE) => {
    setStudentToEdit(student);
    setFormData({
      id: student.id,
      name: student.name,
      stage: student.stage || 'PRIMARIA',
      grade: student.grade,
      tutor: student.tutor || 'Tutor de Aula',
      category: student.category,
      curricularAdaptation: student.curricularAdaptation || 'Pautas Ordinarias',
      status: student.status || 'Activo',
      ptTeacher: student.ptTeacher || '',
      ptHours: student.guidelines?.ptHoursPerWeek || 0,
      alTeacher: student.alTeacher || '',
      alHours: student.guidelines?.alHoursPerWeek || 0,
      generalGoal: student.guidelines?.generalGoal || '',
      methodological: (student.guidelines?.methodologicalAdaptations || []).join('\n'),
      environmental: (student.guidelines?.environmentalAdaptations || []).join('\n'),
      evaluation: (student.guidelines?.evaluationAdaptations || []).join('\n'),
      emotional: (student.guidelines?.emotionalTips || []).join('\n')
    });
    setIsEditModalOpen(true);
  };

  // Save student (add or edit)
  const handleSaveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('El nombre del alumno/a es obligatorio.');
      return;
    }

    const splitLines = (text: string) => text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    const updatedStudent: StudentNEAE = {
      id: formData.id || `NEAE-${Date.now()}`,
      stage: formData.stage,
      name: formData.name.trim(),
      grade: formData.grade,
      tutor: formData.tutor.trim() || 'Tutor de Aula',
      category: formData.category.trim(),
      curricularAdaptation: formData.curricularAdaptation,
      status: formData.status,
      lastReviewDate: new Date().toISOString().split('T')[0],
      ptTeacher: formData.ptTeacher.trim() || undefined,
      alTeacher: formData.alTeacher.trim() || undefined,
      guidelines: {
        generalGoal: formData.generalGoal.trim() || 'Intervención educativa adaptada en aula.',
        methodologicalAdaptations: splitLines(formData.methodological),
        environmentalAdaptations: splitLines(formData.environmental),
        evaluationAdaptations: splitLines(formData.evaluation),
        emotionalTips: splitLines(formData.emotional),
        ptHoursPerWeek: Number(formData.ptHours) || 0,
        alHoursPerWeek: Number(formData.alHours) || 0
      }
    };

    if (onSaveStudent) {
      onSaveStudent(updatedStudent);
    }

    setSelectedStudentId(updatedStudent.id);
    setIsEditModalOpen(false);
  };

  // Delete student confirmation
  const handleConfirmDelete = () => {
    if (studentToDelete && onDeleteStudent) {
      onDeleteStudent(studentToDelete.id);
      if (selectedStudentId === studentToDelete.id) {
        setSelectedStudentId(null);
      }
    }
    setIsDeleting(false);
    setStudentToDelete(null);
  };

  const guidelines = selectedStudent?.guidelines || {
    generalGoal: 'Intervención educativa y metodológica adaptada en aula.',
    methodologicalAdaptations: ['Instrucciones paso a paso.', 'Apoyo visual y anticipación.'],
    environmentalAdaptations: ['Ubicación en primera fila cerca del profesor.'],
    evaluationAdaptations: ['Dar 25% más de tiempo en controles y exámenes.'],
    emotionalTips: ['Reforzamiento positivo constante ante el esfuerzo.'],
    ptHoursPerWeek: 0,
    alHoursPerWeek: 0
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Banner Superior */}
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
            {isCounselor 
              ? 'Panel de Orientación con capacidad plena de gestión: puedes añadir, editar o dar de baja alumnos y pautas en el censo oficial.'
              : `Consulta oficial para el claustro de profesores: ${students.length} alumnos censados con adaptaciones metodológicas, apoyos ordinarios y específicos (PT/AL) y altas capacidades.`
            }
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          {/* Botón Exclusivo para Orientador: Añadir Alumno */}
          {isCounselor && (
            <button 
              className="btn btn-primary no-print" 
              onClick={handleOpenAddModal}
              style={{ background: 'white', color: '#047857', border: 'none', fontWeight: 700 }}
            >
              <Plus size={16} /> Añadir Alumno NEAE
            </button>
          )}

          <button className="btn btn-secondary no-print" onClick={handlePrint} style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
            <Printer size={16} /> Imprimir Ficha
          </button>
        </div>
      </div>

      {/* Grid Principal: Lista Izquierda + Ficha Derecha */}
      <div className="grid-2" style={{ gridTemplateColumns: '1fr 2fr', alignItems: 'start' }}>
        {/* Columna Izquierda: Buscador, Filtros y Lista */}
        <div className="card no-print">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <h3 style={{ fontSize: '1.05rem' }}>Alumnos Censados ({filteredStudents.length} / {students.length})</h3>
            {isCounselor && (
              <span style={{ fontSize: '0.72rem', background: '#dcfce7', color: '#166534', padding: '0.2rem 0.5rem', borderRadius: '12px', fontWeight: 700 }}>
                Modo Edición Activo
              </span>
            )}
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
                <option value="Infantil">Infantil (3-5 años)</option>
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

          {/* Lista Scrollable */}
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.25rem' }}>
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

                      {/* Icono de edición rápida si es Orientador */}
                      {isCounselor && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenEditModal(s);
                          }}
                          title="Editar este alumno"
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--primary-700)',
                            cursor: 'pointer',
                            padding: '0.15rem'
                          }}
                        >
                          <Pencil size={13} />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Columna Derecha: Ficha Detallada */}
        {selectedStudent ? (
          <div className="card" id="printable-neae-card" style={{ padding: '1.75rem' }}>
            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
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

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                    <span className="badge" style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', fontSize: '0.78rem' }}>
                      Adaptación: {selectedStudent.curricularAdaptation}
                    </span>
                    <span style={{ fontSize: '0.72rem', background: '#f1f5f9', color: '#475569', padding: '0.15rem 0.45rem', borderRadius: '6px', fontWeight: 600 }}>
                      {selectedStudent.status}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Actualizado: {selectedStudent.lastReviewDate}
                  </div>

                  {/* Acciones de Edición/Borrado para Orientador */}
                  {isCounselor && (
                    <div className="no-print" style={{ display: 'flex', gap: '0.4rem', marginTop: '0.5rem' }}>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => handleOpenEditModal(selectedStudent)}
                        style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                      >
                        <Pencil size={13} /> Editar Alumno
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                          setStudentToDelete(selectedStudent);
                          setIsDeleting(true);
                        }}
                        style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem', color: '#b91c1c', borderColor: '#fca5a5', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                      >
                        <Trash2 size={13} /> Dar de Baja
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Especialistas Asignados */}
              {(selectedStudent.ptTeacher || selectedStudent.alTeacher) && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', background: 'var(--bg-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem' }}>
                  {selectedStudent.ptTeacher && (
                    <div><strong>Especialista PT:</strong> {selectedStudent.ptTeacher} ({guidelines.ptHoursPerWeek || 0} h/sem)</div>
                  )}
                  {selectedStudent.alTeacher && (
                    <div><strong>Especialista AL:</strong> {selectedStudent.alTeacher} ({guidelines.alHoursPerWeek || 0} h/sem)</div>
                  )}
                </div>
              )}
            </div>

            {/* Objetivo General */}
            <div style={{ marginBottom: '1.5rem', background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-600)' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--primary-800)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                Objetivo General de Intervención Educativa
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
                {guidelines.generalGoal}
              </p>
            </div>

            {/* 4 Dimensiones de Pautas */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {/* Metodológicas */}
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

              {/* Ubicación y Entorno */}
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

              {/* Adaptaciones de Evaluación */}
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

              {/* Apoyo Emocional */}
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
            Selecciona un alumno/a de la lista para consultar o editar sus pautas pedagógicas.
          </div>
        )}
      </div>

      {/* MODAL DE EDICIÓN / ALTA DE ALUMNO NEAE (EXCLUSIVO ORIENTADOR) */}
      {isEditModalOpen && (
        <div className="modal-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content" style={{ maxWidth: '850px', maxHeight: '90vh', overflowY: 'auto', padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-900)' }}>
                  {studentToEdit ? `✏️ Editar Alumno NEAE: ${studentToEdit.name}` : '➕ Alta de Nuevo Alumno en Censo NEAE'}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Gestión exclusiva de Orientación Psicopedagógica. Los cambios se actualizarán de forma inmediata en el portal del profesorado.
                </p>
              </div>
              <button 
                type="button" 
                onClick={() => setIsEditModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveSubmit}>
              {/* Sección 1: Datos Básicos */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-800)', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.3rem', marginBottom: '0.75rem' }}>
                  1. Datos del Alumno y Escolarización
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      className="input-text"
                      placeholder="Ej: Daniel Sánchez Rubio"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Etapa Educativa *</label>
                    <select
                      className="select-input"
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value as EducationalStage })}
                    >
                      <option value="PRIMARIA">Educación Primaria</option>
                      <option value="INFANTIL">Educación Infantil (2º Ciclo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Curso y Grupo *</label>
                    <select
                      className="select-input"
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    >
                      {formData.stage === 'INFANTIL' ? (
                        <>
                          <option value="1º Educación Infantil (3 años) A">1º Infantil (3 años) A</option>
                          <option value="1º Educación Infantil (3 años) B">1º Infantil (3 años) B</option>
                          <option value="1º Educación Infantil (3 años) C">1º Infantil (3 años) C</option>
                          <option value="2º Educación Infantil (4 años) A">2º Infantil (4 años) A</option>
                          <option value="2º Educación Infantil (4 años) B">2º Infantil (4 años) B</option>
                          <option value="2º Educación Infantil (4 años) C">2º Infantil (4 años) C</option>
                          <option value="3º Educación Infantil (5 años) A">3º Infantil (5 años) A</option>
                          <option value="3º Educación Infantil (5 años) B">3º Infantil (5 años) B</option>
                          <option value="3º Educación Infantil (5 años) C">3º Infantil (5 años) C</option>
                        </>
                      ) : (
                        <>
                          <option value="1º Educación Primaria A">1º Primaria A</option>
                          <option value="1º Educación Primaria B">1º Primaria B</option>
                          <option value="1º Educación Primaria C">1º Primaria C</option>
                          <option value="2º Educación Primaria A">2º Primaria A</option>
                          <option value="2º Educación Primaria B">2º Primaria B</option>
                          <option value="2º Educación Primaria C">2º Primaria C</option>
                          <option value="3º Educación Primaria A">3º Primaria A</option>
                          <option value="3º Educación Primaria B">3º Primaria B</option>
                          <option value="3º Educación Primaria C">3º Primaria C</option>
                          <option value="4º Educación Primaria A">4º Primaria A</option>
                          <option value="4º Educación Primaria B">4º Primaria B</option>
                          <option value="4º Educación Primaria C">4º Primaria C</option>
                          <option value="5º Educación Primaria A">5º Primaria A</option>
                          <option value="5º Educación Primaria B">5º Primaria B</option>
                          <option value="5º Educación Primaria C">5º Primaria C</option>
                          <option value="6º Educación Primaria A">6º Primaria A</option>
                          <option value="6º Educación Primaria B">6º Primaria B</option>
                          <option value="6º Educación Primaria C">6º Primaria C</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Tutor/a de Aula</label>
                    <input
                      type="text"
                      className="input-text"
                      placeholder="Ej: Tutor/a de 1ºA"
                      value={formData.tutor}
                      onChange={(e) => setFormData({ ...formData, tutor: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginTop: '0.75rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Categoría NEAE *</label>
                    <input
                      type="text"
                      required
                      className="input-text"
                      placeholder="Ej: Altas Capacidades (AACC) o Apoyo Específico (PT/AL)"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Tipo de Adaptación Curricular *</label>
                    <select
                      className="select-input"
                      value={formData.curricularAdaptation}
                      onChange={(e) => setFormData({ ...formData, curricularAdaptation: e.target.value as any })}
                    >
                      <option value="Pautas Ordinarias">Pautas Ordinarias / Refuerzo</option>
                      <option value="No Significativa (ACNS)">No Significativa (ACNS)</option>
                      <option value="Significativa (ACS)">Significativa (ACS)</option>
                      <option value="Enriquecimiento">Enriquecimiento Curricular (AACC)</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Estado en el Censo</label>
                    <select
                      className="select-input"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    >
                      <option value="Activo">Activo</option>
                      <option value="En Seguimiento">En Seguimiento</option>
                      <option value="Alta">Alta / Resuelto</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Sección 2: Especialistas de Apoyo */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-800)', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.3rem', marginBottom: '0.75rem' }}>
                  2. Especialistas de Apoyo y Dedicación Horaria
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Maestro/a PT</label>
                    <input
                      type="text"
                      className="input-text"
                      placeholder="Ej: Mª Ángeles Gómez (PT)"
                      value={formData.ptTeacher}
                      onChange={(e) => setFormData({ ...formData, ptTeacher: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Horas PT/sem</label>
                    <input
                      type="number"
                      min="0"
                      max="15"
                      className="input-text"
                      value={formData.ptHours}
                      onChange={(e) => setFormData({ ...formData, ptHours: Number(e.target.value) })}
                    />
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Maestro/a AL</label>
                    <input
                      type="text"
                      className="input-text"
                      placeholder="Ej: Sara Domínguez (AL)"
                      value={formData.alTeacher}
                      onChange={(e) => setFormData({ ...formData, alTeacher: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Horas AL/sem</label>
                    <input
                      type="number"
                      min="0"
                      max="15"
                      className="input-text"
                      value={formData.alHours}
                      onChange={(e) => setFormData({ ...formData, alHours: Number(e.target.value) })}
                    />
                  </div>
                </div>
              </div>

              {/* Sección 3: Pautas de Aula (Las 4 Dimensiones) */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-800)', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.3rem', marginBottom: '0.75rem' }}>
                  3. Pautas Pedagógicas para el Claustro de Profesores
                </h4>

                <div style={{ marginBottom: '0.75rem' }}>
                  <label className="form-label" style={{ fontSize: '0.78rem' }}>Objetivo General de Intervención *</label>
                  <textarea
                    rows={2}
                    required
                    className="input-text"
                    placeholder="Describe el objetivo nuclear del plan de apoyo..."
                    value={formData.generalGoal}
                    onChange={(e) => setFormData({ ...formData, generalGoal: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>
                      Pautas Metodológicas (1 por línea)
                    </label>
                    <textarea
                      rows={4}
                      className="input-text"
                      placeholder="Instrucción 1&#10;Instrucción 2&#10;Instrucción 3"
                      value={formData.methodological}
                      onChange={(e) => setFormData({ ...formData, methodological: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>
                      Ubicación y Entorno (1 por línea)
                    </label>
                    <textarea
                      rows={4}
                      className="input-text"
                      placeholder="Ubicación en primera fila&#10;Espacio libre de ruidos"
                      value={formData.environmental}
                      onChange={(e) => setFormData({ ...formData, environmental: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>
                      Adaptaciones en Exámenes (1 por línea)
                    </label>
                    <textarea
                      rows={4}
                      className="input-text"
                      placeholder="+25% de tiempo en controles&#10;Lectura oral de enunciados"
                      value={formData.evaluation}
                      onChange={(e) => setFormData({ ...formData, evaluation: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>
                      Apoyo Emocional y Motivacional (1 por línea)
                    </label>
                    <textarea
                      rows={4}
                      className="input-text"
                      placeholder="Refuerzo positivo diario&#10;Validar la frustración"
                      value={formData.emotional}
                      onChange={(e) => setFormData({ ...formData, emotional: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Botones de Guardado */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Save size={16} /> Guardar en el Censo Oficial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL DE CONFIRMACIÓN DE BORRADO */}
      {isDeleting && studentToDelete && (
        <div className="modal-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content" style={{ maxWidth: '480px', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <AlertTriangle size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.5rem' }}>
              ¿Dar de baja a {studentToDelete.name}?
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1.25rem' }}>
              Esta acción eliminará al alumno/a del censo oficial de NEAE ({studentToDelete.grade}). Los profesores dejarán de visualizar sus pautas en el portal.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setIsDeleting(false);
                  setStudentToDelete(null);
                }}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn"
                onClick={handleConfirmDelete}
                style={{ background: '#dc2626', color: 'white', border: 'none', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-md)' }}
              >
                Sí, Dar de Baja
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
