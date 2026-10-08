import React, { useState } from 'react';
import { Lock, X, GraduationCap, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { verifyRolePassword } from '../utils/security';

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
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  const handleClose = () => {
    setShowPassword(false);
    setError(false);
    setPassword('');
    onClose();
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsValidating(true);
    setError(false);

    try {
      const isValid = await verifyRolePassword(selectedRole, password);

      if (isValid) {
        if (selectedRole === 'ORIENTADOR') {
          onLoginSuccess('ORIENTADOR_ADMIN', { name: 'Equipo de Orientación', email: 'orientacion@sanbuenaventura.es' });
        } else {
          onLoginSuccess('DOCENTE_NEAE', { name: 'Claustro Docente', email: 'docentes@sanbuenaventura.es' });
        }
        setPassword('');
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error al validar credenciales:', err);
      setError(true);
    } finally {
      setIsValidating(false);
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
          <button className="btn btn-secondary" onClick={handleClose} style={{ padding: '0.35rem', minHeight: '32px' }}>
            <X size={18} />
          </button>
        </div>

        {/* 2 ENTRADAS POSIBLES: SELECTOR DE PERFIL */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.1rem' }}>
          <button
            type="button"
            onClick={() => { setSelectedRole('DOCENTE'); setError(false); setShowPassword(false); }}
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
            onClick={() => { setSelectedRole('ORIENTADOR'); setError(false); setShowPassword(false); }}
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

        {/* PASSWORD FORM */}
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '0.85rem' }}>
            <label className="form-label" style={{ fontSize: '0.8rem' }}>
              {selectedRole === 'DOCENTE' ? 'Contraseña de Docentes *' : 'Contraseña de Orientación *'}
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="input-text"
                placeholder="Introduce contraseña..."
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                style={{ fontSize: '0.88rem', minHeight: '42px', paddingRight: '2.5rem', width: '100%' }}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
                style={{
                  position: 'absolute',
                  right: '0.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: showPassword ? 'var(--primary-700)' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.35rem',
                  borderRadius: '6px'
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div style={{ background: '#fee2e2', color: '#991b1b', padding: '0.5rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem', marginBottom: '0.85rem' }}>
              ⚠ Contraseña incorrecta. Por favor, verifica la clave de acceso.
            </div>
          )}

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="button" className="btn btn-secondary" onClick={handleClose} style={{ flex: 1, minHeight: '40px', fontSize: '0.82rem' }}>
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isValidating}
              style={{ flex: 1.5, minHeight: '40px', fontSize: '0.82rem' }}
            >
              {isValidating ? 'Verificando...' : '🛡 Entrar al Portal'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
