import React from 'react';

interface TauGlyphProps {
  color?: string;
  height?: string;
  style?: React.CSSProperties;
}

/**
 * Glifo tipográfico de Cruz Tau franciscana diseñado con proporciones de letra "T"
 * para integrarse de forma natural y legible dentro de la palabra "Orientación".
 * Hereda por defecto `currentColor` para mantener unidad tipográfica.
 */
export const FranciscanTauGlyph: React.FC<TauGlyphProps> = ({
  color = 'currentColor',
  height = '0.82em',
  style
}) => (
  <svg
    viewBox="0 0 20 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      display: 'inline-block',
      height,
      width: 'auto',
      verticalAlign: '-0.02em',
      margin: '0 0.015em',
      shapeRendering: 'geometricPrecision',
      ...style
    }}
  >
    {/* Barra superior con suave arco franciscano y extremos ligeramente ensanchados + fuste esbelto apoyado en línea base */}
    <path
      d="M1.4 2.4C4.6 3.1 7.4 3.4 10 3.4C12.6 3.4 15.4 3.1 18.6 2.4L19.1 6.4C16.5 5.9 14.1 5.7 11.75 5.75L12.1 22.8L7.9 21.8L8.25 5.75C5.9 5.7 3.5 5.9 0.9 6.4L1.4 2.4Z"
      fill={color}
    />
  </svg>
);

interface OrientacionTauProps {
  uppercase?: boolean;
  tauColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Renderiza "Orientación" o "ORIENTACIÓN" integrando la Cruz Tau franciscana
 * como letra T con proporciones, grosor y línea base tipográficas limpias.
 */
export const OrientacionTau: React.FC<OrientacionTauProps> = ({
  uppercase = false,
  tauColor = 'currentColor',
  className,
  style
}) => (
  <span
    className={className}
    aria-label={uppercase ? 'ORIENTACIÓN' : 'Orientación'}
    style={{ display: 'inline', whiteSpace: 'nowrap', ...style }}
  >
    {uppercase ? 'ORIEN' : 'Orien'}
    <FranciscanTauGlyph
      color={tauColor}
      height={uppercase ? '0.78em' : '0.82em'}
    />
    {uppercase ? 'ACIÓN' : 'ación'}
  </span>
);
