import React from 'react';
import { Lock, LogOut, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  authLevel: 'PUBLIC' | 'DOCENTE_NEAE' | 'ORIENTADOR_ADMIN';
  onOpenLogin: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  authLevel,
  onOpenLogin,
  onLogout
}) => {
  return (
    <header className="header-nav">
      <div className="header-content">
        <div className="logo-group">
          <img
            src="/logo-gabinete.png"
            alt="Logo Gabinete Psicopedagógico"
            style={{ height: '48px', objectFit: 'contain' }}
          />
          <div style={{ borderLeft: '1px solid #cbd5e1', paddingLeft: '0.65rem', marginLeft: '0.2rem' }}>
            <h1 className="logo-title" style={{ fontSize: '1.1rem' }}>EduBuenaventura</h1>
            <p className="logo-sub" style={{ fontSize: '0.7rem' }}>Portal de Atención a la Diversidad • Col. San Buenaventura</p>
          </div>
        </div>

        {/* Minimal Auth Trigger Button */}
        <div>
          {authLevel === 'PUBLIC' ? (
            <button
              className="btn btn-primary"
              onClick={onOpenLogin}
              style={{
                padding: '0.45rem 1rem',
                fontSize: '0.82rem',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
                boxShadow: '0 2px 8px rgba(30,27,75,0.25)'
              }}
            >
              <Lock size={15} /> Entrar / Acceso Protegido
            </button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{
                background: authLevel === 'ORIENTADOR_ADMIN' ? '#dcfce7' : '#e0f2fe',
                color: authLevel === 'ORIENTADOR_ADMIN' ? '#15803d' : '#0369a1',
                padding: '0.3rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.78rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
                <ShieldCheck size={14} />
                {authLevel === 'ORIENTADOR_ADMIN' ? 'Gabinete Admin' : 'Claustro NEAE'}
              </span>

              <button
                className="btn btn-secondary"
                onClick={onLogout}
                style={{ padding: '0.3rem 0.6rem', fontSize: '0.78rem', borderRadius: '20px', color: '#b91c1c' }}
                title="Cerrar sesión protegida"
              >
                <LogOut size={14} /> Salir
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
