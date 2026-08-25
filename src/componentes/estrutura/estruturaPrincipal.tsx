import { ReactNode } from 'react';
import { Navbar } from './barraNavegacao';
import { Footer } from './rodape';
import { WelcomeModal } from '../inicio/modalBoasVindas';
import { RainbowBee, MiniFlower, PastelRainbow } from '../interface/iconesDecorativos';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Camada Global de Abelhas, Arco-Íris e Mini Flores Fofas no Fundo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[22%] right-[6%] opacity-55 animate-float" style={{ animationDelay: '1.2s' }}>
          <PastelRainbow size={42} />
        </div>
        <div className="absolute top-[38%] left-[3%] opacity-50 animate-float" style={{ animationDelay: '2.5s' }}>
          <MiniFlower size={38} color="#F9B8D4" centerColor="#FFE278" />
        </div>
        <div className="absolute top-[68%] right-[8%] opacity-50 animate-float" style={{ animationDelay: '0.8s' }}>
          <RainbowBee size={48} />
        </div>
        <div className="absolute bottom-[8%] left-[7%] opacity-50 animate-float" style={{ animationDelay: '2s' }}>
          <MiniFlower size={42} color="#D9BBF9" centerColor="#FFE278" />
        </div>
        <div className="absolute top-[12%] left-[45%] opacity-45 animate-float" style={{ animationDelay: '3.5s' }}>
          <MiniFlower size={32} color="#FFDCE8" centerColor="#FFE278" />
        </div>
        <div className="absolute bottom-[35%] left-[38%] opacity-50 animate-float" style={{ animationDelay: '1.5s' }}>
          <PastelRainbow size={38} />
        </div>
        <div className="absolute top-[55%] left-[85%] opacity-50 animate-float" style={{ animationDelay: '2.8s' }}>
          <MiniFlower size={36} color="#F9B8D4" centerColor="#FFE278" />
        </div>
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
