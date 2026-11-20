import React from 'react';

interface TauGlyphProps {
  color?: string;
  height?: string;
  style?: React.CSSProperties;
}

/**
 * Cruz Tau franciscana inspirada directamente en el logotipo oficial del Colegio San Buenaventura.
 * Diseñada para sustituir a la letra "T" / "t" dentro de la palabra "Orientación".
 */
export const FranciscanTauGlyph: React.FC<TauGlyphProps> = ({
  color = '#F5A800',
  height = '1.08em',
  style
}) => (
  <svg
    viewBox="0 0 28 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      display: 'inline-block',
      height,
      width: 'auto',
      verticalAlign: '-0.12em',
      margin: '0 -0.02em',
      ...style
    }}
  >
    {/* Silueta orgánica fiel a la Tau del escudo del Colegio San Buenaventura */}
    <path
      d="M2.2 4.6C6.4 3.4 10.6 3.1 14 3.1C17.4 3.1 21.6 3.4 25.8 4.6L26.9 9.2C23.5 8.1 20.1 7.7 16.9 7.8C16.6 13.8 17.2 21.8 18.8 29.8L10.3 25.6C11.4 20.2 11.7 13.4 11.4 7.8C8.1 7.7 4.6 8.1 1.1 9.2L2.2 4.6Z"
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
 * Renderiza "Orientación" o "ORIENTACIÓN" sustituyendo la "t"/"T" por la Cruz Tau franciscana.
 */
export const OrientacionTau: React.FC<OrientacionTauProps> = ({
  uppercase = false,
  tauColor = '#F5A800',
  className,
  style
}) => (
  <span
    className={className}
    aria-label={uppercase ? 'ORIENTACIÓN' : 'Orientación'}
    style={{ display: 'inline-flex', alignItems: 'baseline', ...style }}
  >
    <span>{uppercase ? 'ORIEN' : 'Orien'}</span>
    <FranciscanTauGlyph
      color={tauColor}
      height={uppercase ? '0.96em' : '1.05em'}
      style={{ verticalAlign: uppercase ? '-0.06em' : '-0.1em' }}
    />
    <span>{uppercase ? 'ACIÓN' : 'ación'}</span>
  </span>
);
