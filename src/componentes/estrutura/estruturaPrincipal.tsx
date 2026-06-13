import { ReactNode } from 'react';
import { Navbar } from './barraNavegacao';
import { Footer } from './rodape';
import { WelcomeModal } from '../inicio/modalBoasVindas';

// Custom Balloon Icon component to replace missing lucide-react Balloon icon
const Balloon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M12 2a7 7 0 0 1 7 7c0 2.3-1 4.3-2.8 5.7L12 19l-4.2-4.3C6 13.3 5 11.3 5 9a7 7 0 0 1 7-7Z" />
    <path d="M12 19v4" />
    <path d="m19 2 1 2" />
    <path d="m22 7-2 1" />
    <path d="m3 7 2 1" />
    <path d="m5 2-1 2" />
  </svg>
);

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Camada Global de Elementos Juninos no Fundo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <span className="absolute top-[5%] left-[8%] text-4xl opacity-20 animate-float" style={{ animationDelay: '0s' }}>🔥</span>
        <span className="absolute top-[25%] right-[5%] text-4xl opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>🌽</span>
        <span className="absolute top-[50%] left-[3%] text-4xl opacity-20 animate-float" style={{ animationDelay: '3s' }}>🪗</span>
        <span className="absolute top-[75%] right-[8%] text-3xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>🔥</span>
        <span className="absolute bottom-[10%] left-[10%] text-5xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🌽</span>
        <span className="absolute top-[15%] left-[45%] text-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}>🪗</span>
        <span className="absolute bottom-[40%] left-[40%] text-4xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🔥</span>
        <span className="absolute top-[60%] left-[80%] text-4xl opacity-20 animate-float" style={{ animationDelay: '2.5s' }}>🌽</span>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <WelcomeModal />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
