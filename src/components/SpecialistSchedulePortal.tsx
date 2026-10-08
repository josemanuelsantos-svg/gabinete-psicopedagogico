import React from 'react';
import { StudentNEAE, SpecialistSupportSlot } from '../types';
import { Clock, UserCheck, Calendar, MapPin, Sparkles } from 'lucide-react';

interface SpecialistSchedulePortalProps {
  students: StudentNEAE[];
}

export const SpecialistSchedulePortal: React.FC<SpecialistSchedulePortalProps> = ({ students }) => {
  const days: SpecialistSupportSlot['dayOfWeek'][] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  // Filtrar exclusivamente los alumnos con apoyo de PT asignado
  const ptStudents = students.filter(s => s.ptTeacher || (s.guidelines?.ptHoursPerWeek && s.guidelines.ptHoursPerWeek > 0));

  // Generar cuadrante de sesiones de PT
  const allSlots = ptStudents.flatMap((s, idx) => {
    const ptName = s.ptTeacher || (idx % 2 === 0 ? 'Daniel Asenjo (PT)' : 'Diego López (PT)');
    return (s.supportSlots || [
      { 
        id: `${s.id}-slot1`, 
        dayOfWeek: (['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'][idx % 5]) as any, 
        timeSlot: idx % 2 === 0 ? '09:30 - 10:30' : '11:30 - 12:30', 
        specialistType: 'PT', 
        specialistName: ptName, 
        mode: 'Aula de Apoyo PT' 
      },
      { 
        id: `${s.id}-slot2`, 
        dayOfWeek: (['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'][(idx + 2) % 5]) as any, 
        timeSlot: idx % 2 === 0 ? '12:30 - 13:30' : '10:30 - 11:30', 
        specialistType: 'PT', 
        specialistName: ptName, 
        mode: 'Dentro del Aula' 
      }
    ]).map(slot => ({ ...slot, studentName: s.name, grade: s.grade, specificNeed: s.specificNeed || s.category }));
  });

  return (
    <div className="card">
      <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ background: '#e0e7ff', color: '#3730a3', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
            Planificación Oficial de Apoyos • Colegio San Buenaventura
          </span>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
            Cuadrante Semanal de Pedagogía Terapéutica (PT)
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Especialistas de PT en activo: <strong>Daniel Asenjo</strong> y <strong>Diego López</strong> ({ptStudents.length} alumnos atendidos).
          </p>
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
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Sin sesiones programadas</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {daySlots.map(slot => (
                    <div key={slot.id} style={{ background: '#ffffff', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', boxShadow: 'var(--shadow-sm)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                        <span style={{ fontSize: '0.72rem', background: '#e0e7ff', color: '#3730a3', padding: '0.15rem 0.5rem', borderRadius: '10px', fontWeight: 700 }}>
                          PT • {slot.timeSlot}
                        </span>
                      </div>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>{slot.studentName}</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{slot.grade}</div>
                      <div style={{ fontSize: '0.72rem', color: '#0d9488', marginTop: '0.2rem', fontWeight: 600 }}>
                        🩺 {slot.specificNeed}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--primary-700)', marginTop: '0.25rem', fontWeight: 600 }}>
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
