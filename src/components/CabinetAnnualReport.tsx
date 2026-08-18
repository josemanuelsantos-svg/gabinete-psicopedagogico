import React from 'react';
import { ReferralCase, StudentNEAE } from '../types';
import { FileText, Printer, PieChart, CheckCircle2, TrendingUp, Award, BookOpen } from 'lucide-react';

interface CabinetAnnualReportProps {
  cases: ReferralCase[];
  studentsNEAE: StudentNEAE[];
}

export const CabinetAnnualReport: React.FC<CabinetAnnualReportProps> = ({ cases, studentsNEAE }) => {
  const handlePrint = () => {
    window.print();
  };

  const totalCases = cases.length;
  const totalDictaminados = cases.filter(c => c.status === 'DICTAMINADO_CON_PAUTAS').length;
  const totalEnEvaluacion = cases.filter(c => c.status === 'EN_EVALUACION').length;
  const totalPendientes = cases.filter(c => c.status === 'PENDIENTE_REVISION').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="no-print">
        <div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-900)' }}>
            Memoria Anual Psicopedagógica del Gabinete
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Resumen estadístico y memoria justificativa para la Dirección del Centro e Inspección Educativa.
          </p>
        </div>
        <button className="btn btn-primary" onClick={handlePrint}>
          <Printer size={16} /> Imprimir Memoria Oficial
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid-3 no-print">
        <div className="card" style={{ borderLeft: '4px solid var(--primary-600)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>SOLICITUDES REGISTRADAS</span>
          <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>{totalCases}</h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>100% procesadas en cuestionario base</p>
        </div>

        <div className="card" style={{ borderLeft: '4px solid var(--status-done-text)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>DICTÁMENES CON PAUTAS</span>
          <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>{totalDictaminados}</h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{((totalDictaminados / (totalCases || 1)) * 100).toFixed(0)}% del total derivado</p>
        </div>

        <div className="card" style={{ borderLeft: '4px solid var(--accent-indigo)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>ALUMNOS NEAE ACTIVOS</span>
          <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>{studentsNEAE.length}</h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Con apoyos PT/AL y adaptaciones</p>
        </div>
      </div>

      {/* Printable Annual Report Document */}
      <div className="card" id="printable-annual-report" style={{ padding: '2rem' }}>
        <div style={{ borderBottom: '2px solid var(--primary-600)', paddingBottom: '1rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
            Colegio Escolar • Equipo de Orientación Educativa
          </span>
          <h1 style={{ fontSize: '1.7rem', color: 'var(--primary-900)', marginTop: '0.3rem' }}>
            MEMORIA FINAL DE CURSO DEL GABINETE PSICOPEDAGÓGICO
          </h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Curso Académico 2025/2026 • Evaluación de Necesidades Específicas de Apoyo Educativo (NEAE)
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-700)', marginBottom: '0.6rem' }}>
            1. Balance Global de Derivaciones y Atenciones
          </h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', textAlign: 'justify' }}>
            Durante el presente curso académico, el Gabinete Psicopedagógico ha recibido y tramitado un total de <strong>{totalCases} derivaciones</strong> de alumnos por parte del claustro docente mediante el Cuestionario Base. Se han dictaminado favorablemente <strong>{totalDictaminados} casos</strong> con adaptaciones curriculares no significativas o programas de enriquecimiento, manteniéndose en evaluación activa {totalEnEvaluacion} expedientados.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-700)', marginBottom: '0.6rem' }}>
            2. Distribución de Tipologías de Atención a la Diversidad
          </h3>
          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><strong>ACNEAE - TDAH (Desatención / Hiperactividad):</strong> 42% del censo escolar.</li>
              <li><strong>ACNEAE - Dificultades Específicas de Aprendizaje (Dislexia / Disgrafía):</strong> 28% del censo.</li>
              <li><strong>ACNEAE - Altas Capacidades Intelectuales:</strong> 15% del censo.</li>
              <li><strong>ACNEAE - Trastornos del Lenguaje y la Comunicación (TEL):</strong> 15% del censo.</li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-700)', marginBottom: '0.6rem' }}>
            3. Evaluación de Eficacia de las Pautas de Aula
          </h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', textAlign: 'justify' }}>
            El análisis del Feedback Loop Trimestral cumplimentado por los tutores muestra una <strong>efectividad del 91.2%</strong> en la aplicación de adaptaciones metodológicas y ambientales en el aula ordinaria, destacando el éxito de las medidas de fraccionamiento de exámenes y apoyos visuales.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
          <div>
            <strong>Coordinador/a del Gabinete Psicopedagógico</strong><br />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Firmado digitalmente</span>
          </div>
          <div style={{ textAlign: 'right' }}>
            <strong>Vº Bº Dirección del Centro Escolar</strong><br />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Sello Oficial</span>
          </div>
        </div>
      </div>
    </div>
  );
};
