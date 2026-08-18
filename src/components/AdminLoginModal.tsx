import React, { useState } from 'react';
import { Lock, X, ShieldCheck, UserCheck, GraduationCap } from 'lucide-react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (mode: 'DOCENTE_NEAE' | 'ORIENTADOR_ADMIN', userProfile?: { name: string; email: string }) => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [selectedRole, setSelectedRole] = useState<'DOCENTE' | 'ORIENTADOR'>('DOCENTE');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPwd = password.trim();

    if (selectedRole === 'ORIENTADOR') {
      if (cleanPwd.toLowerCase() === 'orientancisco26' || cleanPwd.toLowerCase() === 'orienta2026') {
        onLoginSuccess('ORIENTADOR_ADMIN', { name: 'Equipo de Orientación', email: 'orientacion@sanbuenaventura.es' });
        setPassword('');
        setError(false);
      } else {
        setError(true);
      }
    } else {
      if (cleanPwd.toLowerCase() === 'profescano26' || cleanPwd.toLowerCase() === 'docentes2026') {
        onLoginSuccess('DOCENTE_NEAE', { name: 'Claustro Docente', email: 'docentes@sanbuenaventura.es' });
        setPassword('');
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '400px', padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--primary-100)', color: 'var(--primary-800)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Lock size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>Acceso al Portal</h3>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Colegio San Buenaventura</p>
            </div>
          </div>
          <button className="btn btn-secondary" onClick={onClose} style={{ padding: '0.35rem', minHeight: '32px' }}>
            <X size={18} />
          </button>
        </div>

        {/* 2 ENTRADAS POSIBLES: SELECTOR DE PERFIL */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.1rem' }}>
          <button
            type="button"
            onClick={() => { setSelectedRole('DOCENTE'); setError(false); }}
            style={{
              padding: '0.65rem 0.5rem',
              borderRadius: '8px',
              border: selectedRole === 'DOCENTE' ? '2px solid var(--primary-600)' : '1px solid var(--border-light)',
              background: selectedRole === 'DOCENTE' ? 'var(--primary-50)' : '#ffffff',
              color: selectedRole === 'DOCENTE' ? 'var(--primary-900)' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.82rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              cursor: 'pointer'
            }}
          >
            <GraduationCap size={20} color={selectedRole === 'DOCENTE' ? 'var(--primary-700)' : '#94a3b8'} />
            Claustro Docente
          </button>

          <button
            type="button"
            onClick={() => { setSelectedRole('ORIENTADOR'); setError(false); }}
            style={{
              padding: '0.65rem 0.5rem',
              borderRadius: '8px',
              border: selectedRole === 'ORIENTADOR' ? '2px solid var(--primary-600)' : '1px solid var(--border-light)',
              background: selectedRole === 'ORIENTADOR' ? 'var(--primary-50)' : '#ffffff',
              color: selectedRole === 'ORIENTADOR' ? 'var(--primary-900)' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.82rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              cursor: 'pointer'
            }}
          >
            <ShieldCheck size={20} color={selectedRole === 'ORIENTADOR' ? 'var(--primary-700)' : '#94a3b8'} />
            Orientación
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '0.85rem' }}>
            <label className="form-label" style={{ fontSize: '0.8rem' }}>
              Contraseña de {selectedRole === 'ORIENTADOR' ? 'Orientación' : 'Docentes'} *
            </label>
            <input
              type="password"
              required
              className="input-text"
              placeholder={selectedRole === 'ORIENTADOR' ? 'Introduce clave de Orientación...' : 'Introduce clave de Docentes...'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              style={{ fontSize: '0.88rem', minHeight: '42px' }}
              autoFocus
            />
          </div>

          {error && (
            <div style={{ background: '#fee2e2', color: '#991b1b', padding: '0.45rem 0.65rem', borderRadius: '6px', fontSize: '0.78rem', marginBottom: '0.85rem' }}>
              ⚠ Contraseña incorrecta para el acceso de {selectedRole === 'ORIENTADOR' ? 'Orientación' : 'Docentes'}.
            </div>
          )}

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose} style={{ flex: 1, minHeight: '40px', fontSize: '0.82rem' }}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary" style={{ flex: 1.5, minHeight: '40px', fontSize: '0.82rem' }}>
              🛡 Entrar al Portal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
