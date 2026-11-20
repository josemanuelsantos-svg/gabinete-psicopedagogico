import React from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

const STYLES: Record<ToastType, { bg: string; border: string; color: string; icon: React.ReactNode }> = {
  success: {
    bg: '#f0fdf4',
    border: '#86efac',
    color: '#166534',
    icon: <CheckCircle2 size={18} color="#16a34a" />
  },
  error: {
    bg: '#fef2f2',
    border: '#fca5a5',
    color: '#991b1b',
    icon: <AlertCircle size={18} color="#dc2626" />
  },
  warning: {
    bg: '#fffbeb',
    border: '#fcd34d',
    color: '#92400e',
    icon: <AlertTriangle size={18} color="#d97706" />
  },
  info: {
    bg: '#eff6ff',
    border: '#93c5fd',
    color: '#1e40af',
    icon: <Info size={18} color="#2563eb" />
  }
};

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="no-print"
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        right: '1.25rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        maxWidth: '400px',
        width: 'calc(100vw - 2.5rem)'
      }}
    >
      {toasts.map(toast => {
        const s = STYLES[toast.type];
        return (
          <div
            key={toast.id}
            style={{
              background: s.bg,
              border: `1px solid ${s.border}`,
              color: s.color,
              borderRadius: '12px',
              padding: '0.75rem 1rem',
              boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.16)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.65rem',
              fontSize: '0.84rem',
              fontWeight: 600,
              lineHeight: 1.4
            }}
          >
            <span style={{ flexShrink: 0, marginTop: '1px' }}>{s.icon}</span>
            <span style={{ flex: 1 }}>{toast.message}</span>
            <button
              type="button"
              onClick={() => onDismiss(toast.id)}
              aria-label="Cerrar notificación"
              style={{
                background: 'transparent',
                border: 'none',
                color: s.color,
                cursor: 'pointer',
                padding: '2px',
                display: 'flex',
                opacity: 0.7
              }}
            >
              <X size={15} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
