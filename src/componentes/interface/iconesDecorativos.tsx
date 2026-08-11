import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
}

/**
 * Abelha fofa no estilo exato da Identidade Visual Bearts
 * Corpo Amarelo Candy (#FFE278), Asas Rosa Bebê (#F9B8D4) e Traço Dotted (. . . .)
 */
export const RainbowBee: React.FC<IconProps> = ({ className = '', style, size = 42 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Rastro Dotted Flutuante (Flight Path Trail) */}
      <path
        d="M 6,48 Q 14,56 22,50 Q 28,44 24,36"
        stroke="#A855F7"
        strokeWidth="2"
        strokeDasharray="3 4"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Asas Rosa Bebê (#F9B8D4 & #FFDCE8) em formato de coração / gota */}
      <ellipse cx="33" cy="21" rx="9" ry="14" transform="rotate(-30 33 21)" fill="#F9B8D4" stroke="#E896B9" strokeWidth="1.2" />
      <ellipse cx="44" cy="21" rx="9" ry="14" transform="rotate(30 44 21)" fill="#FFDCE8" stroke="#E896B9" strokeWidth="1.2" />

      {/* Anteninhas */}
      <path d="M 23,28 Q 18,20 16,16" stroke="#4A3A54" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="15" cy="15" r="2.5" fill="#4A3A54" />
      
      <path d="M 30,27 Q 27,18 27,13" stroke="#4A3A54" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="27" cy="12" r="2.5" fill="#4A3A54" />

      {/* Corpo da Abelhinha - Amarelo Candy (#FFE278) */}
      <ellipse cx="32" cy="38" rx="16" ry="17" fill="#FFE278" stroke="#F5C029" strokeWidth="1.2" />

      {/* Listras Escuras Fofas (#4A3A54) */}
      <path d="M 21,34 C 27,37 39,37 44,34" stroke="#4A3A54" strokeWidth="3" strokeLinecap="round" />
      <path d="M 20,42 C 26,45 40,45 45,42" stroke="#4A3A54" strokeWidth="3" strokeLinecap="round" />

      {/* Bochecha Rosada */}
      <circle cx="21" cy="32" r="2.8" fill="#F9B8D4" />

      {/* Olhos Sorridentes e Brilho */}
      <circle cx="25" cy="30" r="2" fill="#4A3A54" />
      <circle cx="25.6" cy="29.3" r="0.7" fill="#FFFFFF" />

      {/* Sorrisinho */}
      <path d="M 27,34 Q 29,37 31,34" stroke="#4A3A54" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Ferrão Suave */}
      <path d="M 47,38 L 52,38 L 47,41 Z" fill="#4A3A54" />
    </svg>
  );
};

/**
 * Arco-Íris Pastel Exato da Identidade Visual Bearts
 * Arcos: Rosa Bebê (#F9B8D4), Amarelo Candy (#FFE278), Lilás Pastel (#D9BBF9)
 */
export const PastelRainbow: React.FC<IconProps> = ({ className = '', style, size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Arco Exterior: Rosa Bebê #F9B8D4 */}
      <path d="M 6,32 A 18,18 0 0 1 42,32" stroke="#F9B8D4" strokeWidth="5.5" strokeLinecap="round" />
      {/* Arco do Meio: Amarelo Candy #FFE278 */}
      <path d="M 12,32 A 12,12 0 0 1 36,32" stroke="#FFE278" strokeWidth="5.5" strokeLinecap="round" />
      {/* Arco Interior: Lilás Pastel #D9BBF9 */}
      <path d="M 18,32 A 6,6 0 0 1 30,32" stroke="#D9BBF9" strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  );
};

/**
 * Mini Flor Fofa em Tons Pastel da Identidade Visual
 */
export const MiniFlower: React.FC<IconProps & { color?: string; centerColor?: string }> = ({
  className = '',
  style,
  size = 32,
  color = '#F9B8D4',
  centerColor = '#FFE278'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* 5 Pétalas Circulares Soft */}
      <circle cx="24" cy="13" r="8.5" fill={color} />
      <circle cx="34" cy="20" r="8.5" fill={color} />
      <circle cx="30" cy="33" r="8.5" fill={color} />
      <circle cx="18" cy="33" r="8.5" fill={color} />
      <circle cx="14" cy="20" r="8.5" fill={color} />

      {/* Miolo Amarelo Candy (#FFE278) */}
      <circle cx="24" cy="24" r="7" fill={centerColor} stroke="#F5C029" strokeWidth="1" />
      
      {/* Ponto de Brilho no Miolo */}
      <circle cx="22" cy="22" r="1.5" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
};
