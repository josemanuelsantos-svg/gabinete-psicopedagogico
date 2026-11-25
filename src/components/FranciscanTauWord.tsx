import React from 'react';

interface TauGlyphProps {
  color?: string;
  height?: string;
  style?: React.CSSProperties;
}

/**
 * Glifo tipográfico de Cruz Tau franciscana recortado al ras del trazo
 * y con kerning óptico ajustado para encajar sin huecos entre "Orien" y "ación".
 */
export const FranciscanTauGlyph: React.FC<TauGlyphProps> = ({
  color = '#F5A800',
  height = '0.82em',
  style
}) => (
  <svg
    viewBox="0.8 2.2 18.4 20.8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      display: 'inline-block',
      height,
      width: 'auto',
      verticalAlign: '-0.02em',
      margin: '0 -0.06em',
      shapeRendering: 'geometricPrecision',
      ...style
    }}
  >
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
 * Renderiza "Orientación" o "ORIENTACIÓN" sin espacios en blanco en JSX
 * para que la Tau franciscana quede pegada y fluida con el resto de la palabra.
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
    style={{ display: 'inline', whiteSpace: 'nowrap', ...style }}
  >{uppercase ? 'ORIEN' : 'Orien'}<FranciscanTauGlyph color={tauColor} height={uppercase ? '0.78em' : '0.82em'} />{uppercase ? 'ACIÓN' : 'ación'}</span>
);
