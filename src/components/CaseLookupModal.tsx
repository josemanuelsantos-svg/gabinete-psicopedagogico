import React, { useState } from 'react';
import { ReferralCase } from '../types';
import { CurrentUserSession } from '../services/firebaseService';
import { checkLookupRateLimit, recordFailedLookup, recordSuccessfulLookup, logSecurityEvent, maskIdentifier } from '../utils/privacyAudit';
import { Search, X, Lock, CheckCircle2, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

interface CaseLookupModalProps {
  cases: ReferralCase[];
  isOpen: boolean;
  onClose: () => void;
  currentUser: CurrentUserSession | null;
}

export const CaseLookupModal: React.FC<CaseLookupModalProps> = ({
  cases,
  isOpen,
  onClose,
  currentUser
}) => {
  const [searchCode, setSearchCode] = useState('');
  const [foundCase, setFoundCase] = useState<ReferralCase | null>(null);
  const [error, setError] = useState('');
  const [lockoutSeconds, setLockoutSeconds] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setFoundCase(null);

    // 1. Exigir autenticación institucional obligatoria
    if (!currentUser) {
      setError('Debes identificarte con tus credenciales institucionales para consultar el estado de un expediente.');
      logSecurityEvent({
        action: 'CONSULTA_DENEGADA',
        actorEmail: 'anonimo',
        actorRole: 'ANONIMO',
        success: false,
        notes: 'Intento de búsqueda de expediente sin autenticación'
      });
      return;
    }

    // 2. Control de Tasa (Anti-Enumeration Rate Limiting)
    const rateCheck = checkLookupRateLimit(currentUser.email);
    if (!rateCheck.allowed) {
      setLockoutSeconds(rateCheck.waitSeconds || 60);
      setError(`Límite de intentos superado por motivos de seguridad. Por favor, espera ${rateCheck.waitSeconds} segundos.`);
      return;
    }

    const cleanCode = searchCode.trim().toLowerCase();
    const target = cases.find(c => c.id.toLowerCase() === cleanCode);

    // 3. Verificación de Autorización: Docente solo puede consultar sus propios casos; Orientación puede consultar todos
    if (target) {
      const isOwnerTeacher = currentUser.role === 'DOCENTE' && (
        target.createdByEmail.toLowerCase() === currentUser.email.toLowerCase() ||
        target.teacherName.toLowerCase() === currentUser.name.toLowerCase()
      );
      const isOrientador = currentUser.role === 'ORIENTADOR';

      if (isOwnerTeacher || isOrientador) {
        setFoundCase(target);
        recordSuccessfulLookup(currentUser.email);
        logSecurityEvent({
          action: 'CONSULTA_EXPEDIENTE',
          actorEmail: currentUser.email,
          actorRole: currentUser.role,
          caseIdMasked: maskIdentifier(target.id),
          success: true,
          notes: 'Consulta autorizada de estado de expediente'
        });
        return;
      }
    }

    // Si no existe o no tiene permiso, mensaje GENÉRICO para no filtrar existencia de expedientes ajenos
    const failResult = recordFailedLookup(currentUser.email);
    if (failResult.blocked) {
      setLockoutSeconds(failResult.waitSeconds || 60);
      setError(`Demasiados intentos fallidos. Consulta bloqueada temporalmente por ${failResult.waitSeconds} segundos.`);
    } else {
      setError('No se ha encontrado ningún expediente correspondiente a este código o no tienes autorización para acceder a él.');
    }

    logSecurityEvent({
      action: 'CONSULTA_DENEGADA',
      actorEmail: currentUser.email,
      actorRole: currentUser.role,
      caseIdMasked: maskIdentifier(cleanCode),
      success: false,
      notes: 'Búsqueda no encontrada o acceso a expediente ajeno no autorizado'
    });
  };

  const getStatusBadge = (status: ReferralCase['status']) => {
    switch (status) {
      case 'PENDIENTE_REVISION':
        return <span style={{ background: '#fef3c7', color: '#b45309', padding: '0.35rem 0.85rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.82rem' }}>⏳ En Trámite de Revisión Técnica</span>;
      case 'EN_EVALUACION':
        return <span style={{ background: '#dbeafe', color: '#1d4ed8', padding: '0.35rem 0.85rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.82rem' }}>📑 En Proceso de Evaluación Psicopedagógica</span>;
      case 'DICTAMINADO_CON_PAUTAS':
        return <span style={{ background: '#dcfce7', color: '#15803d', padding: '0.35rem 0.85rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.82rem' }}>✅ Dictaminado con Pautas de Aula</span>;
      default:
        return <span style={{ background: '#f1f5f9', color: '#475569', padding: '0.35rem 0.85rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.82rem' }}>🔍 En Revisión por Orientación</span>;
    }
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="lookup-title">
      <div className="modal-content" style={{ maxWidth: '600px', padding: '1.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
              <ShieldCheck size={16} color="var(--primary-700)" />
              <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.15rem 0.5rem', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 700 }}>
                Consulta Segura RGPD / LOPD-GDD
              </span>
            </div>
            <h3 id="lookup-title" style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>
              Seguimiento de Expediente por Identificador Seguro
            </h3>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
            style={{ padding: '0.3rem 0.6rem', minHeight: '32px' }}
          >
            <X size={18} />
          </button>
        </div>

        {!currentUser ? (
          <div style={{ background: '#fef2f2', border: '1px solid #f87171', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
            <Lock size={24} color="#991b1b" style={{ margin: '0 auto 0.5rem auto' }} />
            <h4 style={{ color: '#991b1b', fontSize: '0.95rem', fontWeight: 700 }}>Acceso Restringido a Personal Institucional</h4>
            <p style={{ fontSize: '0.82rem', color: '#7f1d1d', marginTop: '0.25rem' }}>
              Por imperativo de la Ley de Protección de Datos de Menores, debes iniciar sesión con tu perfil de Docente u Orientación para comprobar el estado de cualquier derivación.
            </p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSearch} style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="input-case-uuid" className="form-label" style={{ fontSize: '0.82rem' }}>
                Introduce el código identificador seguro (UUID) *
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  id="input-case-uuid"
                  required
                  className="input-text"
                  placeholder="Ej: d3b07384-d113-46d8-ba96-22a84b06fb01"
                  value={searchCode}
                  onChange={(e) => setSearchCode(e.target.value)}
                  style={{ flex: 1, fontFamily: 'monospace', fontSize: '0.85rem' }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={Boolean(lockoutSeconds && lockoutSeconds > 0)}
                  style={{ padding: '0.6rem 1.1rem' }}
                >
                  <Search size={16} /> Consultar
                </button>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                🔒 Consulta protegida contra enumeración masiva. Solo puedes consultar expedientes generados por tu usuario.
              </p>
            </form>

            {error && (
              <div style={{ background: '#fef2f2', color: '#991b1b', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.82rem', marginBottom: '1rem', border: '1px solid #fca5a5' }} role="alert">
                ⚠ {error}
              </div>
            )}

            {foundCase && (
              <div className="card" style={{ background: '#f8fafc', border: '1px solid var(--primary-500)', padding: '1.1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Identificador del Caso:</span>
                    <div style={{ fontSize: '0.85rem', fontFamily: 'monospace', fontWeight: 700, color: 'var(--primary-900)' }}>
                      {foundCase.id}
                    </div>
                  </div>
                  <div>{getStatusBadge(foundCase.status)}</div>
                </div>

                <div style={{ fontSize: '0.82rem', color: '#334155', lineHeight: '1.6' }}>
                  <div><strong>Alumno/a:</strong> {foundCase.studentName} ({foundCase.grade})</div>
                  <div><strong>Fecha de Solicitud:</strong> {foundCase.dateSubmitted}</div>
                  <div><strong>Docente Solicitante:</strong> {foundCase.teacherName}</div>
                  {currentUser.role === 'ORIENTADOR' && foundCase.counselorNotes && (
                    <div style={{ marginTop: '0.5rem', background: '#ffffff', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                      <strong>Notas de Orientación:</strong> {foundCase.counselorNotes}
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
