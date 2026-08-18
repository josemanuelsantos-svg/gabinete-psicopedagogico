import React from 'react';
import { StudentNEAE, SpecialistSupportSlot } from '../types';
import { Clock, UserCheck, Calendar, MapPin, Sparkles } from 'lucide-react';

interface SpecialistSchedulePortalProps {
  students: StudentNEAE[];
}

export const SpecialistSchedulePortal: React.FC<SpecialistSchedulePortalProps> = ({ students }) => {
  const days: SpecialistSupportSlot['dayOfWeek'][] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  // Flatten slots with student information
  const allSlots = students.flatMap(s =>
    (s.supportSlots || [
      { id: `${s.id}-slot1`, dayOfWeek: 'Lunes', timeSlot: '10:00 - 11:00', specialistType: s.ptTeacher ? 'PT' : 'AL', specialistName: s.ptTeacher || s.alTeacher || 'Especialista', mode: 'Aula de Apoyo PT/AL' },
      { id: `${s.id}-slot2`, dayOfWeek: 'Miércoles', timeSlot: '11:30 - 12:30', specialistType: s.alTeacher ? 'AL' : 'PT', specialistName: s.alTeacher || s.ptTeacher || 'Especialista', mode: 'Dentro del Aula' }
    ]).map(slot => ({ ...slot, studentName: s.name, grade: s.grade, category: s.category }))
  );

  return (
    <div className="card">
      <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
            Planificación de Apoyos Escolar
          </span>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
            Cuadrante Semanal de Pedagogía Terapéutica (PT) y Audición y Lenguaje (AL)
          </h2>
        </div>
      </div>

      {/* Grid of Days */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {days.map(day => {
          const daySlots = allSlots.filter(slot => slot.dayOfWeek === day);
          return (
            <div key={day} style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--primary-800)', marginBottom: '0.75rem', borderBottom: '2px solid var(--primary-500)', paddingBottom: '0.3rem' }}>
                📅 {day}
              </h3>

              {daySlots.length === 0 ? (
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Sin sesiones asignadas</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {daySlots.map(slot => (
                    <div key={slot.id} style={{ background: '#ffffff', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', boxShadow: 'var(--shadow-sm)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                        <span style={{ fontSize: '0.72rem', background: slot.specialistType === 'PT' ? '#e0e7ff' : '#f3e8ff', color: slot.specialistType === 'PT' ? '#3730a3' : '#6b21a8', padding: '0.15rem 0.5rem', borderRadius: '10px', fontWeight: 700 }}>
                          {slot.specialistType} • {slot.timeSlot}
                        </span>
                      </div>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>{slot.studentName}</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{slot.grade}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--primary-700)', marginTop: '0.3rem', fontWeight: 600 }}>
                        📍 {slot.mode} ({slot.specialistName})
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
