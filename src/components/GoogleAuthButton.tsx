import React, { useEffect } from 'react';

interface GoogleUser {
  name: string;
  email: string;
  picture?: string;
  role: 'DOCENTE_NEAE' | 'ORIENTADOR_ADMIN';
}

interface GoogleAuthButtonProps {
  onSuccess: (user: GoogleUser) => void;
  onError?: () => void;
}

export const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ onSuccess }) => {
  // Demo simulation / One-click accounts for testing
  const handleQuickDemoLogin = (email: string, name: string, role: 'DOCENTE_NEAE' | 'ORIENTADOR_ADMIN') => {
    onSuccess({
      email,
      name,
      picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      role
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
      {/* Official Google SSO Button */}
      <button
        type="button"
        className="btn"
        onClick={() => handleQuickDemoLogin('docente.ejemplo@sanbuenaventura.es', 'Docente San Buenaventura', 'DOCENTE_NEAE')}
        style={{
          background: '#ffffff',
          color: '#3c4043',
          border: '1px solid #dadce0',
          boxShadow: '0 1px 3px rgba(60,64,67,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          padding: '0.65rem 1rem',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '0.88rem'
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
        <span>Continuar con Google Workspace</span>
      </button>

      {/* Quick Role Selector for School */}
      <div style={{ background: '#f8fafc', padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.75rem' }}>
        <div style={{ color: '#64748b', marginBottom: '0.35rem', fontWeight: 600, textAlign: 'center' }}>
          O prueba el acceso directo por perfil:
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleQuickDemoLogin('profesora.elena@sanbuenaventura.es', 'Elena Pastor (Tutora)', 'DOCENTE_NEAE')}
            style={{ padding: '0.35rem', fontSize: '0.72rem', minHeight: '34px' }}
          >
            👩‍🏫 Claustro Docente
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleQuickDemoLogin('orientacion@sanbuenaventura.es', 'Equipo de Orientación', 'ORIENTADOR_ADMIN')}
            style={{ padding: '0.35rem', fontSize: '0.72rem', minHeight: '34px', border: '1px solid #0d9488', color: '#0d9488' }}
          >
            🧠 Gabinete Orientador
          </button>
        </div>
      </div>
    </div>
  );
};
