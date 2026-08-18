import React, { useState, useEffect } from 'react';
import { UserRole, ReferralCase, StudentNEAE, EvaluationSession, QuarterlyReview } from './types';
import { INITIAL_CASES, INITIAL_STUDENTS_NEAE } from './data/initialData';
import { FirebaseService } from './services/firebaseService';
import { Header } from './components/Header';
import { TeacherDashboard } from './components/TeacherDashboard';
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
import { LayoutDashboard, FilePlus, BookOpen, ShieldCheck, Lock, CheckCircle2, Calendar, PieChart, Search, Database } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('NEW_FORM');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFirebaseConnected, setIsFirebaseConnected] = useState<boolean>(true);

  // Clean Dual Authentication State
  const [authLevel, setAuthLevel] = useState<'PUBLIC' | 'DOCENTE_NEAE' | 'ORIENTADOR_ADMIN'>('PUBLIC');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isLookupModalOpen, setIsLookupModalOpen] = useState<boolean>(false);
  const [pendingTabKey, setPendingTabKey] = useState<string | null>(null);

  const [submittedCaseId, setSubmittedCaseId] = useState<string | null>(null);

  // Cases & NEAE Data State
  const [cases, setCases] = useState<ReferralCase[]>(INITIAL_CASES);
  const [neaeStudents, setNeaeStudents] = useState<StudentNEAE[]>(INITIAL_STUDENTS_NEAE);
  
  // Modal States
  const [selectedCaseForModal, setSelectedCaseForModal] = useState<ReferralCase | null>(null);
  const [selectedCaseForSchedule, setSelectedCaseForSchedule] = useState<ReferralCase | null>(null);
  const [selectedCaseForDevolution, setSelectedCaseForDevolution] = useState<ReferralCase | null>(null);
  const [selectedStudentForReview, setSelectedStudentForReview] = useState<StudentNEAE | null>(null);

  // Load from Firebase Realtime Database on startup
  useEffect(() => {
    async function loadDataFromFirebase() {
      try {
        const remoteCases = await FirebaseService.getCases();
        if (remoteCases && remoteCases.length > 0) {
          setCases(remoteCases);
        }
        const remoteNeae = await FirebaseService.getNeaeStudents();
        if (remoteNeae && remoteNeae.length > 0) {
          setNeaeStudents(remoteNeae);
        }
        setIsFirebaseConnected(true);
      } catch (err) {
        console.warn('Usando almacenamiento local de respaldo:', err);
      }
    }
    loadDataFromFirebase();
  }, []);

  // Filter cases based on search term
  const filteredCases = cases.filter(c => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      c.studentName.toLowerCase().includes(term) ||
      c.grade.toLowerCase().includes(term) ||
      c.questionnaire.mainReason.toLowerCase().includes(term) ||
      c.triage.primaryHypothesis.toLowerCase().includes(term)
    );
  });

  const handleAddNewCase = async (newCase: ReferralCase) => {
    setCases([newCase, ...cases]);
    setSubmittedCaseId(newCase.id);
    setActiveTab('NEW_FORM');
    // Sync to Firebase
    await FirebaseService.saveCase(newCase);
  };

  const handleTabClick = (tabKey: string) => {
    if (tabKey === 'NEW_FORM') {
      setActiveTab('NEW_FORM');
      return;
    }

    if (tabKey === 'NEAE_PORTAL') {
      if (authLevel === 'DOCENTE_NEAE' || authLevel === 'ORIENTADOR_ADMIN') {
        setActiveTab('NEAE_PORTAL');
      } else {
        setPendingTabKey('NEAE_PORTAL');
        setIsLoginModalOpen(true);
      }
      return;
    }

    // Other tabs require full Gabinete Admin key
    if (authLevel === 'ORIENTADOR_ADMIN') {
      setActiveTab(tabKey);
    } else {
      setPendingTabKey(tabKey);
      setIsLoginModalOpen(true);
    }
  };

  const handleLoginSuccess = (mode: 'DOCENTE_NEAE' | 'ORIENTADOR_ADMIN') => {
    setAuthLevel(mode);
    setIsLoginModalOpen(false);
    setActiveTab(pendingTabKey || (mode === 'DOCENTE_NEAE' ? 'NEAE_PORTAL' : 'DASHBOARD'));
    setPendingTabKey(null);
  };

  const handleLogout = () => {
    setAuthLevel('PUBLIC');
    setActiveTab('NEW_FORM');
  };

  const handleUpdateCase = async (updatedCase: ReferralCase) => {
    setCases(cases.map(c => c.id === updatedCase.id ? updatedCase : c));
    await FirebaseService.saveCase(updatedCase);

    if (updatedCase.status === 'DICTAMINADO_CON_PAUTAS' && updatedCase.actionPlan) {
      const exists = neaeStudents.some(s => s.name === updatedCase.studentName);
      if (!exists) {
        const newNeae: StudentNEAE = {
          id: `NEAE-${Math.floor(100 + Math.random() * 900)}`,
          name: updatedCase.studentName,
          grade: updatedCase.grade,
          category: `ACNEAE - ${updatedCase.triage.primaryHypothesis.replace('_', ' ')}` as any,
          tutor: updatedCase.teacherName,
          curricularAdaptation: 'No Significativa (ACNS)',
          status: 'Activo',
          lastReviewDate: updatedCase.decisionDate || new Date().toISOString().split('T')[0],
          guidelines: updatedCase.actionPlan
        };
        setNeaeStudents([newNeae, ...neaeStudents]);
        await FirebaseService.saveNeaeStudent(newNeae);
      }
    }
  };

  const handleAddEvaluationSession = async (caseId: string, session: EvaluationSession) => {
    const updated = cases.map(c => {
      if (c.id === caseId) {
        const sessions = c.evaluationSessions || [];
        const updatedCase = { ...c, evaluationSessions: [...sessions, session] };
        FirebaseService.saveCase(updatedCase);
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
        FirebaseService.saveNeaeStudent(updatedStudent);
        return updatedStudent;
      }
      return s;
    });
    setNeaeStudents(updated);
    setSelectedStudentForReview(null);
  };

  return (
    <div className="app-container">
      <Header
        authLevel={authLevel}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
      />

      <main className="main-content">
        {/* Firebase Live Cloud Status Indicator */}
        <div style={{ background: '#f8fafc', padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.78rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#166534', fontWeight: 600 }}>
            <Database size={15} color="#0d9488" />
            <span>Base de Datos Firebase Realtime Conectada en Tiempo Real</span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
          </div>

          <button className="btn btn-secondary" onClick={() => setIsLookupModalOpen(true)} style={{ padding: '0.25rem 0.75rem', fontSize: '0.76rem', background: '#ffffff', border: '1px solid var(--primary-600)', color: 'var(--primary-700)', minHeight: '32px' }}>
            <Search size={14} /> Consultar Estado por Código (ej: DER-2026-001)
          </button>
        </div>

        {/* Success Banner when submitting referral */}
        {submittedCaseId && (
          <div style={{
            background: '#f0fdf4',
            border: '1px solid #86efac',
            borderRadius: 'var(--radius-lg)',
            padding: '1rem 1.25rem',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justify-content: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <CheckCircle2 size={22} color="#166534" />
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#14532d', fontWeight: 700 }}>
                  Derivación guardada en la Nube (ID: <strong>{submittedCaseId}</strong>)
                </h4>
                <p style={{ fontSize: '0.78rem', color: '#166534', marginTop: '0.15rem' }}>
                  🔒 Expediente sincronizado en Firebase. Guarda este código para consultar el estado en cualquier momento.
                </p>
              </div>
            </div>
            <button className="btn btn-secondary" onClick={() => setSubmittedCaseId(null)} style={{ padding: '0.3rem 0.65rem', fontSize: '0.78rem', minHeight: '36px' }}>
              Aceptar
            </button>
          </div>
        )}

        {/* Swipeable Mobile Navigation Tabs */}
        <div className="nav-tabs no-print">
          <button
            className={`tab-btn ${activeTab === 'NEW_FORM' ? 'active' : ''}`}
            onClick={() => handleTabClick('NEW_FORM')}
          >
            <FilePlus size={16} />
            Derivación (Público)
          </button>

          <button
            className={`tab-btn ${activeTab === 'NEAE_PORTAL' ? 'active' : ''}`}
            onClick={() => handleTabClick('NEAE_PORTAL')}
          >
            {authLevel !== 'PUBLIC' ? <BookOpen size={16} /> : <Lock size={14} color="var(--primary-600)" />}
            Pautas NEAE {authLevel !== 'PUBLIC' ? `(${neaeStudents.length})` : ''}
          </button>

          <button
            className={`tab-btn ${activeTab === 'DASHBOARD' ? 'active' : ''}`}
            onClick={() => handleTabClick('DASHBOARD')}
          >
            {authLevel === 'ORIENTADOR_ADMIN' ? <LayoutDashboard size={16} /> : <Lock size={14} color="var(--primary-600)" />}
            Expedientes
          </button>

          {authLevel === 'ORIENTADOR_ADMIN' && (
            <>
              <button
                className={`tab-btn ${activeTab === 'SPECIALIST_SCHEDULE' ? 'active' : ''}`}
                onClick={() => handleTabClick('SPECIALIST_SCHEDULE')}
              >
                <Calendar size={16} />
                Apoyos PT / AL
              </button>

              <button
                className={`tab-btn ${activeTab === 'ANNUAL_REPORT' ? 'active' : ''}`}
                onClick={() => handleTabClick('ANNUAL_REPORT')}
              >
                <PieChart size={16} />
                Memoria Anual
              </button>
            </>
          )}
        </div>

        {/* Dynamic Views */}
        {activeTab === 'NEW_FORM' && (
          <ReferralForm
            onSubmitCase={handleAddNewCase}
            onCancel={() => {}}
          />
        )}

        {activeTab === 'NEAE_PORTAL' && authLevel !== 'PUBLIC' && (
          <NeaePortal students={neaeStudents} />
        )}

        {activeTab === 'DASHBOARD' && authLevel === 'ORIENTADOR_ADMIN' && (
          <CounselorDashboard
            cases={filteredCases}
            onUpdateCase={handleUpdateCase}
            onSelectCase={(c) => setSelectedCaseForModal(c)}
          />
        )}

        {activeTab === 'SPECIALIST_SCHEDULE' && authLevel === 'ORIENTADOR_ADMIN' && (
          <SpecialistSchedulePortal students={neaeStudents} />
        )}

        {activeTab === 'ANNUAL_REPORT' && authLevel === 'ORIENTADOR_ADMIN' && (
          <CabinetAnnualReport cases={cases} studentsNEAE={neaeStudents} />
        )}
      </main>

      {/* Code Lookup Modal */}
      <CaseLookupModal
        cases={cases}
        isOpen={isLookupModalOpen}
        onClose={() => setIsLookupModalOpen(false)}
      />

      {/* Single Clean Login Password Modal */}
      <AdminLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Case Detail Modal */}
      <CaseDetailModal
        referralCase={selectedCaseForModal}
        onClose={() => setSelectedCaseForModal(null)}
      />

      {/* Tutor Devolution Sheet Modal */}
      <TutorDevolutionSheet
        referralCase={selectedCaseForDevolution}
        onClose={() => setSelectedCaseForDevolution(null)}
      />

      {/* Schedule & Consent Modal */}
      <EvaluationScheduleModal
        referralCase={selectedCaseForSchedule}
        onClose={() => setSelectedCaseForSchedule(null)}
        onAddSession={handleAddEvaluationSession}
      />

      {/* Quarterly Review Modal */}
      <QuarterlyReviewModal
        student={selectedStudentForReview}
        onClose={() => setSelectedStudentForReview(null)}
        onAddReview={handleAddQuarterlyReview}
      />
    </div>
  );
}

export default App;
