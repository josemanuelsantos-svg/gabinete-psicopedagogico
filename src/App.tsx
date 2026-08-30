import React, { useState, useEffect } from 'react';
import { ReferralCase, StudentNEAE, EvaluationSession, QuarterlyReview } from './types';
import { INITIAL_CASES, INITIAL_STUDENTS_NEAE } from './data/initialData';
import { FirebaseService, CurrentUserSession } from './services/firebaseService';
import { Header } from './components/Header';
import { CounselorDashboard } from './components/CounselorDashboard';
import { ReferralForm } from './components/ReferralForm';
import { NeaePortal } from './components/NeaePortal';
import { CaseDetailModal } from './components/CaseDetailModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { EvaluationScheduleModal } from './components/EvaluationScheduleModal';
import { QuarterlyReviewModal } from './components/QuarterlyReviewModal';
import { SpecialistSchedulePortal } from './components/SpecialistSchedulePortal';
import { CabinetAnnualReport } from './components/CabinetAnnualReport';
import { CaseLookupModal } from './components/CaseLookupModal';
import { TutorDevolutionSheet } from './components/TutorDevolutionSheet';
import { 
  LayoutDashboard, FilePlus, BookOpen, Lock, CheckCircle2, Calendar, 
  PieChart, Search, ShieldCheck, UserCheck, AlertCircle, Copy, Check 
} from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('HOME');

  // Authentication State (Docente o Orientador)
  const [authLevel, setAuthLevel] = useState<'PUBLIC' | 'DOCENTE_NEAE' | 'ORIENTADOR_ADMIN'>('PUBLIC');
  const [currentUser, setCurrentUser] = useState<CurrentUserSession | null>(null);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isLookupModalOpen, setIsLookupModalOpen] = useState<boolean>(false);
  const [pendingTabKey, setPendingTabKey] = useState<string | null>(null);

  // Non-predictable secure tracking code shown after submission
  const [submittedSecureId, setSubmittedSecureId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<boolean>(false);

  // Cases & NEAE Data State
  const [cases, setCases] = useState<ReferralCase[]>([]);
  const [neaeStudents, setNeaeStudents] = useState<StudentNEAE[]>([]);
  
  // Modal States
  const [selectedCaseForModal, setSelectedCaseForModal] = useState<ReferralCase | null>(null);
  const [selectedCaseForSchedule, setSelectedCaseForSchedule] = useState<ReferralCase | null>(null);
  const [selectedCaseForDevolution, setSelectedCaseForDevolution] = useState<ReferralCase | null>(null);
  const [selectedStudentForReview, setSelectedStudentForReview] = useState<StudentNEAE | null>(null);

  // Load data based on authenticated role
  useEffect(() => {
    async function loadData() {
      if (authLevel === 'PUBLIC' || !currentUser) {
        setCases([]);
        setNeaeStudents([]);
        return;
      }

      try {
        const remoteCases = await FirebaseService.getCases(currentUser);
        if (remoteCases && remoteCases.length > 0) {
          setCases(remoteCases);
        } else if (currentUser.role === 'ORIENTADOR') {
          setCases(INITIAL_CASES);
        } else {
          // Si el docente no tiene casos remotos, lista vacía
          setCases([]);
        }

        const remoteNeae = await FirebaseService.getNeaeStudents(currentUser);
        if (remoteNeae && remoteNeae.length > 0) {
          setNeaeStudents(remoteNeae);
        } else {
          setNeaeStudents(INITIAL_STUDENTS_NEAE);
        }
      } catch (err) {
        console.warn('Cargando respaldo local:', err);
      }
    }
    loadData();
  }, [authLevel, currentUser]);

  const handleAddNewCase = async (newCase: ReferralCase) => {
    if (!currentUser) return;
    
    // Save to Firebase and update state
    const saveResult = await FirebaseService.saveCase(newCase, currentUser);
    if (saveResult.success) {
      setCases(prev => [newCase, ...prev]);
      setSubmittedSecureId(newCase.id);
      setActiveTab('MY_CASES');
    } else {
      alert(saveResult.error || 'Error al guardar la derivación');
    }
  };

  const handleTabClick = (tabKey: string) => {
    if (authLevel === 'PUBLIC') {
      setPendingTabKey(tabKey);
      setIsLoginModalOpen(true);
      return;
    }

    if (tabKey === 'DASHBOARD' || tabKey === 'SPECIALIST_SCHEDULE' || tabKey === 'ANNUAL_REPORT') {
      if (authLevel === 'ORIENTADOR_ADMIN') {
        setActiveTab(tabKey);
      } else {
        alert('Esta sección está restringida exclusivamente al Equipo de Orientación.');
      }
      return;
    }

    setActiveTab(tabKey);
  };

  const handleLoginSuccess = (mode: 'DOCENTE_NEAE' | 'ORIENTADOR_ADMIN', userProfile?: { name: string; email: string }) => {
    setAuthLevel(mode);
    const session: CurrentUserSession = {
      name: userProfile?.name || (mode === 'DOCENTE_NEAE' ? 'Claustro Docente' : 'Equipo de Orientación'),
      email: userProfile?.email || (mode === 'DOCENTE_NEAE' ? 'docentes@sanbuenaventura.es' : 'orientacion@sanbuenaventura.es'),
      role: mode === 'DOCENTE_NEAE' ? 'DOCENTE' : 'ORIENTADOR'
    };
    setCurrentUser(session);
    setIsLoginModalOpen(false);

    if (pendingTabKey) {
      setActiveTab(pendingTabKey);
      setPendingTabKey(null);
    } else {
      setActiveTab(mode === 'DOCENTE_NEAE' ? 'NEW_FORM' : 'DASHBOARD');
    }
  };

  const handleLogout = () => {
    setAuthLevel('PUBLIC');
    setCurrentUser(null);
    setActiveTab('HOME');
    setCases([]);
    setNeaeStudents([]);
  };

  const handleUpdateCase = async (updatedCase: ReferralCase) => {
    setCases(cases.map(c => c.id === updatedCase.id ? updatedCase : c));
    await FirebaseService.saveCase(updatedCase, currentUser);

    if (updatedCase.status === 'DICTAMINADO_CON_PAUTAS' && updatedCase.actionPlan) {
      const exists = neaeStudents.some(s => s.name === updatedCase.studentName);
      if (!exists) {
        const newNeae: StudentNEAE = {
          id: `NEAE-${Math.floor(100 + Math.random() * 900)}`,
          name: updatedCase.studentName,
          grade: updatedCase.grade,
          category: `ACNEAE - Apoyo Educativo`,
          tutor: updatedCase.teacherName,
          curricularAdaptation: 'No Significativa (ACNS)',
          status: 'Activo',
          lastReviewDate: updatedCase.decisionDate || new Date().toISOString().split('T')[0],
          guidelines: updatedCase.actionPlan
        };
        setNeaeStudents([newNeae, ...neaeStudents]);
        await FirebaseService.saveNeaeStudent(newNeae, currentUser);
      }
    }
  };

  const handleAddEvaluationSession = async (caseId: string, session: EvaluationSession) => {
    const updated = cases.map(c => {
      if (c.id === caseId) {
        const sessions = c.evaluationSessions || [];
        const updatedCase = { ...c, evaluationSessions: [...sessions, session] };
        FirebaseService.saveCase(updatedCase, currentUser);
        return updatedCase;
      }
      return c;
    });
    setCases(updated);
    setSelectedCaseForSchedule(null);
  };

  const handleAddQuarterlyReview = async (studentId: string, review: QuarterlyReview) => {
    const updated = neaeStudents.map(s => {
      if (s.id === studentId) {
        const reviews = s.quarterlyReviews || [];
        const updatedStudent = { ...s, quarterlyReviews: [...reviews, review], lastReviewDate: review.date };
        FirebaseService.saveNeaeStudent(updatedStudent, currentUser);
        return updatedStudent;
      }
      return s;
    });
    setNeaeStudents(updated);
    setSelectedStudentForReview(null);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2500);
  };

  return (
    <div className="app-container">
      <Header
        authLevel={authLevel}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
      />

      <main className="main-content">
        {/* Barra Superior con Estado de Seguridad y Buscador Seguro */}
        <div style={{ background: '#ffffff', padding: '0.65rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.78rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#166534', fontWeight: 600 }}>
            <ShieldCheck size={16} color="#0d9488" />
            <span>Sistema Seguro RGPD / LOPD-GDD • Protección de Datos de Menores</span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
          </div>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setIsLookupModalOpen(true)}
            style={{ padding: '0.3rem 0.75rem', fontSize: '0.76rem', background: '#ffffff', border: '1px solid var(--primary-600)', color: 'var(--primary-700)', minHeight: '32px' }}
          >
            <Search size={14} /> Consulta Segura por Identificador (UUID)
          </button>
        </div>

        {/* Banner de Confirmación tras Guardar con UUID no predecible */}
        {submittedSecureId && (
          <div style={{
            background: '#f0fdf4',
            border: '2px solid #86efac',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 12px rgba(22,101,52,0.08)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={24} color="#166534" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: '#14532d', fontWeight: 700 }}>
                    Expediente Registrado con Éxito en Orientación
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#166534', marginTop: '0.25rem' }}>
                    Tu derivación ha sido cifrada y almacenada de forma no predecible cumpliendo la normativa de protección de datos.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', background: '#ffffff', border: '1px solid #bbf7d0', padding: '0.4rem 0.75rem', borderRadius: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Identificador Seguro (UUID):</span>
                    <strong style={{ fontFamily: 'monospace', fontSize: '0.88rem', color: '#0f766e' }}>
                      {submittedSecureId}
                    </strong>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(submittedSecureId)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', minHeight: '26px', fontSize: '0.72rem' }}
                      title="Copiar identificador al portapapeles"
                    >
                      {copiedId ? <Check size={13} color="#166534" /> : <Copy size={13} />}
                      {copiedId ? 'Copiado' : 'Copiar'}
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSubmittedSecureId(null)}
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem', minHeight: '34px' }}
              >
                Cerrar Aviso
              </button>
            </div>
          </div>
        )}

        {/* Pestañas de Navegación Condicionadas por Autenticación */}
        <nav aria-label="Secciones del portal" className="nav-tabs no-print">
          {authLevel === 'PUBLIC' && (
            <button
              type="button"
              className={`tab-btn ${activeTab === 'HOME' ? 'active' : ''}`}
              onClick={() => setActiveTab('HOME')}
            >
              🏫 Inicio Institucional
            </button>
          )}

          {authLevel === 'DOCENTE_NEAE' && (
            <>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'NEW_FORM' ? 'active' : ''}`}
                onClick={() => setActiveTab('NEW_FORM')}
              >
                <FilePlus size={16} /> Nueva Derivación
              </button>

              <button
                type="button"
                className={`tab-btn ${activeTab === 'MY_CASES' ? 'active' : ''}`}
                onClick={() => setActiveTab('MY_CASES')}
              >
                📋 Mis Derivaciones ({cases.length})
              </button>

              <button
                type="button"
                className={`tab-btn ${activeTab === 'NEAE_PORTAL' ? 'active' : ''}`}
                onClick={() => setActiveTab('NEAE_PORTAL')}
              >
                <BookOpen size={16} /> Pautas de Aula NEAE
              </button>
            </>
          )}

          {authLevel === 'ORIENTADOR_ADMIN' && (
            <>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'DASHBOARD' ? 'active' : ''}`}
                onClick={() => setActiveTab('DASHBOARD')}
              >
                <LayoutDashboard size={16} /> Todos los Expedientes ({cases.length})
              </button>

              <button
                type="button"
                className={`tab-btn ${activeTab === 'NEAE_PORTAL' ? 'active' : ''}`}
                onClick={() => setActiveTab('NEAE_PORTAL')}
              >
                <BookOpen size={16} /> Censo y Pautas NEAE
              </button>

              <button
                type="button"
                className={`tab-btn ${activeTab === 'SPECIALIST_SCHEDULE' ? 'active' : ''}`}
                onClick={() => setActiveTab('SPECIALIST_SCHEDULE')}
              >
                <Calendar size={16} /> Apoyos PT / AL
              </button>

              <button
                type="button"
                className={`tab-btn ${activeTab === 'ANNUAL_REPORT' ? 'active' : ''}`}
                onClick={() => setActiveTab('ANNUAL_REPORT')}
              >
                <PieChart size={16} /> Memoria Anual
              </button>
            </>
          )}
        </nav>

        {/* VISTA 0: PANTALLA PÚBLICA (VISITANTE SIN SESIÓN) */}
        {authLevel === 'PUBLIC' && (
          <div className="card" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', padding: '3rem 2rem' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--primary-100)', color: 'var(--primary-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
              <Lock size={32} />
            </div>

            <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.25rem 0.85rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>
              Colegio San Buenaventura • Portal de Atención a la Diversidad
            </span>

            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-900)', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
              Acceso Restringido y Protegido a Datos Sensibles de Menores
            </h2>

            <p style={{ maxWidth: '620px', margin: '0 auto 1.75rem auto', color: '#475569', fontSize: '0.92rem', lineHeight: '1.6' }}>
              En cumplimiento estricto del RGPD (UE 2016/679) y la LOPD-GDD (LO 3/2018), los formularios de derivación psicopedagógica, informes y pautas de atención a la diversidad requieren identificación institucional docente o de orientación. No se permite el acceso público ni envíos anónimos.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsLoginModalOpen(true)}
                style={{ padding: '0.75rem 1.75rem', fontSize: '0.92rem' }}
              >
                <Lock size={16} /> Identificarse con Clave Institucional
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setIsLookupModalOpen(true)}
                style={{ padding: '0.75rem 1.25rem', fontSize: '0.88rem' }}
              >
                <Search size={16} /> Consulta Segura de Expediente
              </button>
            </div>
          </div>
        )}

        {/* VISTA 1: FORMULARIO DE DERIVACIÓN (SOLO DOCENTE AUTENTICADO) */}
        {authLevel === 'DOCENTE_NEAE' && currentUser && activeTab === 'NEW_FORM' && (
          <ReferralForm
            currentUser={currentUser}
            onSubmitCase={handleAddNewCase}
            onCancel={() => setActiveTab('MY_CASES')}
          />
        )}

        {/* VISTA 2: LISTADO DE DERIVACIONES PROPIAS DEL DOCENTE (AISLAMIENTO) */}
        {authLevel === 'DOCENTE_NEAE' && currentUser && activeTab === 'MY_CASES' && (
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-900)' }}>Mis Derivaciones Presentadas</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Aislamiento estricto: Solo se muestran los expedientes tramitados por <strong>{currentUser.email}</strong>.
                </p>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setActiveTab('NEW_FORM')}
                style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}
              >
                <FilePlus size={16} /> Nueva Solicitud
              </button>
            </div>

            {cases.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem', background: '#f8fafc', borderRadius: '10px', border: '1px dashed var(--border-light)' }}>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  No tienes derivaciones registradas en este curso escolar.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setActiveTab('NEW_FORM')}
                  style={{ marginTop: '0.75rem', fontSize: '0.82rem' }}
                >
                  Cumplimentar Solicitud
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {cases.map((c) => (
                  <div key={c.id} style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                        <span style={{ background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.1rem 0.45rem', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 700, fontFamily: 'monospace' }}>
                          ID: {c.id.slice(0, 8)}...
                        </span>
                        <span className={`status-badge status-${c.status}`}>
                          {c.status.replace(/_/g, ' ')}
                        </span>
                      </div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--text-main)' }}>{c.studentName} ({c.grade})</h4>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Fecha de registro: {c.dateSubmitted}</p>
                    </div>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setSelectedCaseForModal(c)}
                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                    >
                      Ver Detalle
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VISTA 3: PORTAL NEAE (DOCENTES Y ORIENTACIÓN) */}
        {authLevel !== 'PUBLIC' && activeTab === 'NEAE_PORTAL' && (
          <NeaePortal students={neaeStudents} />
        )}

        {/* VISTA 4: BANDEJA GLOBAL DE ORIENTACIÓN (SOLO ORIENTACIÓN) */}
        {authLevel === 'ORIENTADOR_ADMIN' && activeTab === 'DASHBOARD' && (
          <CounselorDashboard
            cases={cases}
            onUpdateCase={handleUpdateCase}
            onSelectCase={(c) => setSelectedCaseForModal(c)}
          />
        )}

        {/* VISTA 5: CUADRANTE PT/AL (SOLO ORIENTACIÓN) */}
        {authLevel === 'ORIENTADOR_ADMIN' && activeTab === 'SPECIALIST_SCHEDULE' && (
          <SpecialistSchedulePortal students={neaeStudents} />
        )}

        {/* VISTA 6: MEMORIA ANUAL (SOLO ORIENTACIÓN) */}
        {authLevel === 'ORIENTADOR_ADMIN' && activeTab === 'ANNUAL_REPORT' && (
          <CabinetAnnualReport cases={cases} studentsNEAE={neaeStudents} />
        )}
      </main>

      {/* Modal de Consulta Segura */}
      <CaseLookupModal
        cases={cases}
        isOpen={isLookupModalOpen}
        onClose={() => setIsLookupModalOpen(false)}
        currentUser={currentUser}
      />

      {/* Modal de Autenticación Institucional */}
      <AdminLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Modal de Detalle de Expediente */}
      <CaseDetailModal
        referralCase={selectedCaseForModal}
        onClose={() => setSelectedCaseForModal(null)}
      />

      {/* Modal de Devolución al Tutor */}
      <TutorDevolutionSheet
        referralCase={selectedCaseForDevolution}
        onClose={() => setSelectedCaseForDevolution(null)}
      />

      {/* Modal de Planificación de Evaluaciones */}
      <EvaluationScheduleModal
        referralCase={selectedCaseForSchedule}
        onClose={() => setSelectedCaseForSchedule(null)}
        onAddSession={handleAddEvaluationSession}
      />

      {/* Modal de Revisión Trimestral */}
      <QuarterlyReviewModal
        student={selectedStudentForReview}
        onClose={() => setSelectedStudentForReview(null)}
        onAddReview={handleAddQuarterlyReview}
      />
    </div>
  );
}

export default App;
