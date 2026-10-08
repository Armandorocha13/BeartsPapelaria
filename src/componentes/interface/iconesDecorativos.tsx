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
 * Abelhinha Bearts em Clima Natalino (com Touquinha de Papai Noel) 🎅🐝
 */
export const ChristmasBee: React.FC<IconProps> = ({ className = '', style, size = 48 }) => {
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
      {/* Rastro Dotted com Estrelinhas */}
      <path
        d="M 4,50 Q 14,58 22,50 Q 28,42 24,36"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeDasharray="3 3"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Asas Fofas com Brilho do Natal */}
      <ellipse cx="33" cy="23" rx="9" ry="14" transform="rotate(-30 33 23)" fill="#F9B8D4" stroke="#E896B9" strokeWidth="1.2" />
      <ellipse cx="44" cy="23" rx="9" ry="14" transform="rotate(30 44 23)" fill="#FFDCE8" stroke="#E896B9" strokeWidth="1.2" />

      {/* Anteninhas espreitando por baixo da touca */}
      <path d="M 20,24 Q 16,18 14,14" stroke="#4A3A54" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="13" cy="13" r="2.5" fill="#4A3A54" />

      {/* Corpo da Abelhinha */}
      <ellipse cx="32" cy="40" rx="16" ry="17" fill="#FFE278" stroke="#F5C029" strokeWidth="1.2" />

      {/* Listras Escuras */}
      <path d="M 21,36 C 27,39 39,39 44,36" stroke="#4A3A54" strokeWidth="3" strokeLinecap="round" />
      <path d="M 20,44 C 26,47 40,47 45,44" stroke="#4A3A54" strokeWidth="3" strokeLinecap="round" />

      {/* Bochechas Rosadas */}
      <circle cx="21" cy="34" r="2.8" fill="#FF89B0" />
      <circle cx="37" cy="34" r="2.8" fill="#FF89B0" opacity="0.6" />

      {/* Olhos Fofos */}
      <circle cx="25" cy="32" r="2.2" fill="#4A3A54" />
      <circle cx="25.7" cy="31.2" r="0.8" fill="#FFFFFF" />

      {/* Sorriso Encantado */}
      <path d="M 27,36 Q 29,39 31,36" stroke="#4A3A54" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Ferrão Mimo */}
      <path d="M 47,40 L 52,40 L 47,43 Z" fill="#4A3A54" />

      {/* TOUCA DE PAPAI NOEL NA ABELHINHA 🎅 */}
      {/* Corpo da Touca Vermelha Velvet */}
      <path d="M 16,25 Q 26,8 38,16 Q 44,22 46,27 C 40,25 24,24 16,25 Z" fill="#D42637" />
      {/* Caimento da Touca */}
      <path d="M 38,16 Q 48,18 52,26 Q 48,28 42,23 Z" fill="#B91C1C" />
      {/* Pompom Branco Fofinho */}
      <circle cx="53" cy="27" r="4.5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <circle cx="52" cy="26" r="2" fill="#F8FAFC" />
      {/* Borda Peludinha da Touca */}
      <path d="M 15,24 Q 30,22 45,26" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
      <path d="M 15,24 Q 30,22 45,26" stroke="#F1F5F9" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

/**
 * Arco-Íris Pastel Exato da Identidade Visual Bearts
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
      <path d="M 6,32 A 18,18 0 0 1 42,32" stroke="#F9B8D4" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M 12,32 A 12,12 0 0 1 36,32" stroke="#FFE278" strokeWidth="5.5" strokeLinecap="round" />
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
      <circle cx="24" cy="13" r="8.5" fill={color} />
      <circle cx="34" cy="20" r="8.5" fill={color} />
      <circle cx="30" cy="33" r="8.5" fill={color} />
      <circle cx="18" cy="33" r="8.5" fill={color} />
      <circle cx="14" cy="20" r="8.5" fill={color} />
      <circle cx="24" cy="24" r="7" fill={centerColor} stroke="#F5C029" strokeWidth="1" />
      <circle cx="22" cy="22" r="1.5" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
};

/**
 * Floco de Neve Cintilante de Natal ❄️
 */
export const Snowflake: React.FC<IconProps & { color?: string }> = ({
  className = '',
  style,
  size = 32,
  color = '#93C5FD'
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
      <path d="M24 4V44M4 24H44M9.85 9.85L38.15 38.15M9.85 38.15L38.15 9.85" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* V-branches */}
      <path d="M24 10L18 16M24 10L30 16M24 38L18 32M24 38L30 32" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 24L16 18M10 24L16 30M38 24L32 18M38 24L32 30" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="3" fill="#FFFFFF" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

/**
 * Árvore de Natal Fofa Pastel 🎄
 */
export const ChristmasTree: React.FC<IconProps> = ({ className = '', style, size = 36 }) => {
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
      {/* Tronco */}
      <rect x="20" y="38" width="8" height="7" rx="2" fill="#78350F" />
      {/* Camadas da Árvore */}
      <path d="M24 10L38 24H10L24 10Z" fill="#2D6A4F" />
      <path d="M24 18L41 33H7L24 18Z" fill="#1C5235" />
      <path d="M24 26L44 40H4L24 26Z" fill="#15803D" />
      {/* Estrela no Topo 🌟 */}
      <path d="M24 4L25.8 8.2L30.4 8.5L26.9 11.4L28 15.8L24 13.4L20 15.8L21.1 11.4L17.6 8.5L22.2 8.2L24 4Z" fill="#F59E0B" />
      {/* Enfeites/Bolinhas */}
      <circle cx="18" cy="28" r="2" fill="#D42637" />
      <circle cx="30" cy="31" r="2.2" fill="#F59E0B" />
      <circle cx="24" cy="22" r="1.8" fill="#F9B8D4" />
      <circle cx="22" cy="35" r="2" fill="#38BDF8" />
    </svg>
  );
};

/**
 * Caixinha de Presente Natalina 🎁
 */
export const GiftBox: React.FC<IconProps> = ({ className = '', style, size = 32 }) => {
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
      {/* Corpo da Caixa */}
      <rect x="8" y="20" width="32" height="22" rx="3" fill="#F7B6D2" stroke="#E896B9" strokeWidth="1" />
      {/* Tampa */}
      <rect x="6" y="14" width="36" height="8" rx="2" fill="#FF89B0" />
      {/* Fita Vertical */}
      <rect x="21" y="14" width="6" height="28" fill="#D42637" />
      {/* Fita Horizontal */}
      <rect x="8" y="28" width="32" height="5" fill="#D42637" />
      {/* Laço em cima */}
      <path d="M24 14 C18 8, 12 14, 21 14 Z" fill="#D42637" />
      <path d="M24 14 C30 8, 36 14, 27 14 Z" fill="#D42637" />
      <circle cx="24" cy="14" r="2.5" fill="#F59E0B" />
    </svg>
  );
};

/**
 * Azevinho de Natal (Holly Berry) 🌿🍒
 */
export const HollyBerry: React.FC<IconProps> = ({ className = '', style, size = 28 }) => {
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
      {/* Folha 1 */}
      <path d="M24 24 C14 12, 6 22, 16 32 C20 30, 22 28, 24 24 Z" fill="#2D6A4F" stroke="#1C5235" strokeWidth="1" />
      {/* Folha 2 */}
      <path d="M24 24 C34 12, 42 22, 32 32 C28 30, 26 28, 24 24 Z" fill="#15803D" stroke="#1C5235" strokeWidth="1" />
      {/* Bagas Vermelhas */}
      <circle cx="21" cy="26" r="4.5" fill="#D42637" />
      <circle cx="27" cy="26" r="4.5" fill="#DC2626" />
      <circle cx="24" cy="21" r="4" fill="#B91C1C" />
      {/* Brilhos nas bagas */}
      <circle cx="19.5" cy="24.5" r="1.2" fill="#FFFFFF" />
      <circle cx="25.5" cy="24.5" r="1.2" fill="#FFFFFF" />
    </svg>
  );
};

/**
 * Cordão de Luzes Natalinas Pisca-Pisca 💡✨
 */
export const FairyLights: React.FC<{ className?: string }> = ({ className = '' }) => {
  const colors = ['#D42637', '#F59E0B', '#10B981', '#FF89B0', '#3B82F6', '#9333EA', '#D42637', '#F59E0B'];
  return (
    <div className={`w-full overflow-hidden flex justify-between items-center px-4 py-1 pointer-events-none select-none ${className}`}>
      {colors.map((color, i) => (
        <div key={i} className="flex flex-col items-center animate-pulse" style={{ animationDelay: `${i * 0.2}s`, animationDuration: '1.5s' }}>
          {/* Fio */}
          <div className="w-[1px] h-3 bg-gray-400/60" />
          {/* Soquete */}
          <div className="w-2 h-1.5 bg-gray-700 rounded-t-sm" />
          {/* Lâmpada */}
          <div
            className="w-3.5 h-4.5 rounded-full shadow-lg transition-all"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}, 0 0 4px ${color}`
            }}
          />
        </div>
      ))}
    </div>
  );
};

