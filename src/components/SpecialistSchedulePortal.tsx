import React, { useState } from 'react';
import { StudentNEAE, SpecialistSupportSlot } from '../types';
import { Calendar, Plus, Trash2, Printer, AlertTriangle, Edit3, Check, X, Users } from 'lucide-react';

interface SpecialistSchedulePortalProps {
  students: StudentNEAE[];
  onSaveStudent?: (student: StudentNEAE) => Promise<void> | void;
}

const DAYS: SpecialistSupportSlot['dayOfWeek'][] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const TIME_SLOTS = [
  '09:00 - 09:45',
  '09:45 - 10:30',
  '10:30 - 11:15',
  '11:45 - 12:30',
  '12:30 - 13:15',
  '15:00 - 15:45',
  '15:45 - 16:30'
];

export const SpecialistSchedulePortal: React.FC<SpecialistSchedulePortalProps> = ({
  students = [],
  onSaveStudent
}) => {
  const [selectedSpecialistFilter, setSelectedSpecialistFilter] = useState<string>('ALL');
  const [editingStudentId, setEditingStudentId] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Estado del modal de edición de sesiones para un alumno
  const [modalPtTeacher, setModalPtTeacher] = useState<string>('Daniel Asenjo (PT)');
  const [modalSlots, setModalSlots] = useState<SpecialistSupportSlot[]>([]);
  const [newDay, setNewDay] = useState<SpecialistSupportSlot['dayOfWeek']>('Lunes');
  const [newTime, setNewTime] = useState<string>('09:45 - 10:30');
  const [newMode, setNewMode] = useState<'Dentro del Aula' | 'Aula de Apoyo PT'>('Aula de Apoyo PT');

  // Filtrar alumnos con PT asignado
  const ptStudents = students.filter(
    s => s.status !== 'Alta' && (s.ptTeacher || (s.guidelines?.ptHoursPerWeek && s.guidelines.ptHoursPerWeek > 0))
  );

  // Obtener las sesiones de un alumno (reales o generadas por defecto si aún no se han personalizado)
  const getStudentSlots = (s: StudentNEAE, idx: number): SpecialistSupportSlot[] => {
    const ptName = s.ptTeacher || (idx % 2 === 0 ? 'Daniel Asenjo (PT)' : 'Diego López (PT)');
    if (s.supportSlots && s.supportSlots.length > 0) {
      return s.supportSlots.map(slot => ({
        ...slot,
        specialistName: slot.specialistName || ptName
      }));
    }
    return [
      {
        id: `${s.id}-slot1`,
        dayOfWeek: DAYS[idx % 5],
        timeSlot: idx % 2 === 0 ? '09:45 - 10:30' : '11:45 - 12:30',
        specialistType: 'PT',
        specialistName: ptName,
        mode: 'Aula de Apoyo PT'
      },
      {
        id: `${s.id}-slot2`,
        dayOfWeek: DAYS[(idx + 2) % 5],
        timeSlot: idx % 2 === 0 ? '12:30 - 13:15' : '10:30 - 11:15',
        specialistType: 'PT',
        specialistName: ptName,
        mode: 'Dentro del Aula'
      }
    ];
  };

  // Aplanar todas las sesiones
  const allSlots = ptStudents.flatMap((s, idx) =>
    getStudentSlots(s, idx).map(slot => ({
      ...slot,
      studentId: s.id,
      studentName: s.name,
      grade: s.grade,
      specificNeed: s.specificNeed || s.category
    }))
  );

  const visibleSlots = allSlots.filter(slot => {
    if (selectedSpecialistFilter === 'ALL') return true;
    return slot.specialistName.toLowerCase().includes(selectedSpecialistFilter.toLowerCase());
  });

  // Detector de colisiones (mismo PT en distintos cursos "Dentro del Aula" a la misma hora)
  const slotConflicts = new Set<string>();
  allSlots.forEach(a => {
    allSlots.forEach(b => {
      if (
        a.id !== b.id &&
        a.dayOfWeek === b.dayOfWeek &&
        a.timeSlot === b.timeSlot &&
        a.specialistName === b.specialistName &&
        a.grade !== b.grade &&
        (a.mode === 'Dentro del Aula' || b.mode === 'Dentro del Aula')
      ) {
        slotConflicts.add(`${a.dayOfWeek}-${a.timeSlot}-${a.specialistName}`);
      }
    });
  });

  const openScheduleEditor = (student: StudentNEAE) => {
    const idx = ptStudents.findIndex(st => st.id === student.id);
    setEditingStudentId(student.id);
    setModalPtTeacher(student.ptTeacher || 'Daniel Asenjo (PT)');
    setModalSlots(getStudentSlots(student, idx >= 0 ? idx : 0));
    setIsModalOpen(true);
  };

  const handleAddSlotInModal = () => {
    const created: SpecialistSupportSlot = {
      id: `slot-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      dayOfWeek: newDay,
      timeSlot: newTime,
      specialistType: 'PT',
      specialistName: modalPtTeacher,
      mode: newMode
    };
    setModalSlots(prev => [...prev, created]);
  };

  const handleRemoveSlotInModal = (slotId: string) => {
    setModalSlots(prev => prev.filter(sl => sl.id !== slotId));
  };

  const handleSaveStudentSchedule = async () => {
    const target = students.find(s => s.id === editingStudentId);
    if (!target || !onSaveStudent) {
      setIsModalOpen(false);
      return;
    }

    const syncedSlots = modalSlots.map(sl => ({
      ...sl,
      specialistName: modalPtTeacher
    }));

    const updatedStudent: StudentNEAE = {
      ...target,
      ptTeacher: modalPtTeacher,
      supportSlots: syncedSlots,
      guidelines: {
        ...target.guidelines,
        ptHoursPerWeek: syncedSlots.length
      }
    };

    await onSaveStudent(updatedStudent);
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ background: '#e0e7ff', color: '#3730a3', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
            Planificación Oficial Interactiva de Apoyos • Colegio San Buenaventura
          </span>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
            Cuadrante Semanal de Pedagogía Terapéutica (PT)
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Especialistas de PT en activo: <strong>Daniel Asenjo</strong> y <strong>Diego López</strong> ({ptStudents.length} alumnos atendidos • {allSlots.length} sesiones semanales).
          </p>
        </div>

        <div className="no-print" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <select
            className="select-input"
            style={{ width: 'auto', padding: '0.4rem 0.75rem', fontSize: '0.82rem' }}
            value={selectedSpecialistFilter}
            onChange={(e) => setSelectedSpecialistFilter(e.target.value)}
          >
            <option value="ALL">👥 Todos los Especialistas PT</option>
            <option value="Daniel Asenjo">👨‍🏫 Daniel Asenjo (PT)</option>
            <option value="Diego López">👨‍🏫 Diego López (PT)</option>
          </select>

          {onSaveStudent && ptStudents.length > 0 && (
            <button
              type="button"
              className="btn btn-secondary"
              style={{ fontSize: '0.8rem', padding: '0.42rem 0.85rem' }}
              onClick={() => openScheduleEditor(ptStudents[0])}
            >
              <Edit3 size={15} /> Editar Sesiones PT
            </button>
          )}

          <button
            type="button"
            className="btn btn-primary"
            style={{ fontSize: '0.8rem', padding: '0.42rem 0.85rem' }}
            onClick={() => window.print()}
          >
            <Printer size={15} /> Imprimir Horario PT
          </button>
        </div>
      </div>

      {/* Aviso de colisiones horarias si existen */}
      {slotConflicts.size > 0 && (
        <div className="no-print" style={{ background: '#fffbeb', border: '1px solid #f59e0b', borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', color: '#92400e' }}>
          <AlertTriangle size={18} color="#d97706" />
          <span>
            <strong>Aviso de coincidencia horaria:</strong> Se han detectado {slotConflicts.size} tramo(s) donde un mismo especialista PT figura simultáneamente en aulas de cursos distintos. Puedes hacer clic en cualquier tarjeta para reajustar su hora o agruparlos en el Aula de Apoyo PT.
          </span>
        </div>
      )}

      {/* Grid of Days */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {DAYS.map(day => {
          const daySlots = visibleSlots
            .filter(slot => slot.dayOfWeek === day)
            .sort((a, b) => a.timeSlot.localeCompare(b.timeSlot));

          return (
            <div key={day} style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', borderBottom: '2px solid var(--primary-500)', paddingBottom: '0.3rem' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--primary-800)', margin: 0 }}>
                  📅 {day}
                </h3>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  {daySlots.length} ses.
                </span>
              </div>

              {daySlots.length === 0 ? (
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Sin sesiones programadas</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {daySlots.map(slot => {
                    const hasConflict = slotConflicts.has(`${slot.dayOfWeek}-${slot.timeSlot}-${slot.specialistName}`);
                    const isDaniel = slot.specialistName.toLowerCase().includes('daniel');
                    return (
                      <div
                        key={slot.id}
                        onClick={() => {
                          const st = students.find(s => s.id === slot.studentId);
                          if (st && onSaveStudent) openScheduleEditor(st);
                        }}
                        title={onSaveStudent ? 'Haz clic para editar el horario de este alumno/a' : ''}
                        style={{
                          background: '#ffffff',
                          padding: '0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          border: hasConflict ? '1.5px solid #f59e0b' : '1px solid #cbd5e1',
                          boxShadow: 'var(--shadow-sm)',
                          cursor: onSaveStudent ? 'pointer' : 'default',
                          transition: 'transform 0.15s ease'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                          <span style={{
                            fontSize: '0.7rem',
                            background: isDaniel ? '#e0e7ff' : '#dcfce7',
                            color: isDaniel ? '#3730a3' : '#166534',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '10px',
                            fontWeight: 700
                          }}>
                            🕒 {slot.timeSlot}
                          </span>
                          {hasConflict && (
                            <span title="Solapamiento de aula" style={{ fontSize: '0.7rem', color: '#d97706', fontWeight: 700 }}>
                              ⚠️ Solape
                            </span>
                          )}
                        </div>
                        <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: 'block' }}>
                          {slot.studentName}
                        </strong>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{slot.grade}</div>
                        <div style={{ fontSize: '0.72rem', color: '#0d9488', marginTop: '0.2rem', fontWeight: 600 }}>
                          🩺 {slot.specificNeed}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--primary-700)', marginTop: '0.25rem', fontWeight: 600 }}>
                          📍 {slot.mode} • {slot.specialistName}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* MODAL INTERACTIVO PARA EDITAR SESIONES PT DE UN ALUMNO */}
      {isModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-content" style={{ maxWidth: '640px', padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.74rem', color: 'var(--primary-700)', fontWeight: 700 }}>
                  Configuración de Apoyo Especializado PT
                </span>
                <h3 style={{ fontSize: '1.15rem', margin: 0 }}>
                  Planificar Sesiones Semanales de PT
                </h3>
              </div>
              <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)} style={{ padding: '0.35rem 0.6rem' }}>
                <X size={16} />
              </button>
            </div>

            <div className="grid-2" style={{ gap: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <label className="form-label">Alumno/a NEAE</label>
                <select
                  className="select-input"
                  value={editingStudentId}
                  onChange={(e) => {
                    const st = students.find(s => s.id === e.target.value);
                    if (st) openScheduleEditor(st);
                  }}
                >
                  {students.filter(s => s.status !== 'Alta').map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.grade})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">Maestro Especialista PT Asignado</label>
                <select
                  className="select-input"
                  value={modalPtTeacher}
                  onChange={(e) => setModalPtTeacher(e.target.value)}
                >
                  <option value="Daniel Asenjo (PT)">Daniel Asenjo (PT)</option>
                  <option value="Diego López (PT)">Diego López (PT)</option>
                </select>
              </div>
            </div>

            {/* Añadir nueva sesión */}
            <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '0.85rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-800)', display: 'block', marginBottom: '0.5rem' }}>
                ➕ Añadir Tramo Horario de Apoyo PT:
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '0.5rem', alignItems: 'center' }}>
                <select className="select-input" style={{ fontSize: '0.8rem', padding: '0.38rem' }} value={newDay} onChange={(e) => setNewDay(e.target.value as any)}>
                  {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <select className="select-input" style={{ fontSize: '0.8rem', padding: '0.38rem' }} value={newTime} onChange={(e) => setNewTime(e.target.value)}>
                  {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <select className="select-input" style={{ fontSize: '0.8rem', padding: '0.38rem' }} value={newMode} onChange={(e) => setNewMode(e.target.value as any)}>
                  <option value="Aula de Apoyo PT">Aula de Apoyo PT</option>
                  <option value="Dentro del Aula">Dentro del Aula</option>
                </select>
                <button type="button" className="btn btn-primary" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }} onClick={handleAddSlotInModal}>
                  <Plus size={15} /> Añadir
                </button>
              </div>
            </div>

            {/* Lista de sesiones actuales del alumno */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '0.4rem' }}>
                Sesiones semanales asignadas ({modalSlots.length}):
              </span>
              {modalSlots.length === 0 ? (
                <div style={{ padding: '1rem', textAlign: 'center', background: '#f8fafc', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Este alumno/a no tiene sesiones asignadas actualmente.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {modalSlots.map(sl => (
                    <div key={sl.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', background: '#ffffff', border: '1px solid var(--border-light)', borderRadius: '6px', fontSize: '0.82rem' }}>
                      <div>
                        <strong>{sl.dayOfWeek}</strong> • {sl.timeSlot} — <span style={{ color: 'var(--primary-700)', fontWeight: 600 }}>{sl.mode}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveSlotInModal(sl.id)}
                        style={{ background: '#fee2e2', color: '#b91c1c', border: 'none', borderRadius: '6px', padding: '0.25rem 0.5rem', cursor: 'pointer', fontSize: '0.75rem' }}
                      >
                        <Trash2 size={13} /> Quitar
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSaveStudentSchedule}>
                <Check size={16} /> Guardar Horario PT en Nube
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
