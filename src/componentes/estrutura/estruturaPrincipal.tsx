import { ReactNode } from 'react';
import { Navbar } from './barraNavegacao';
import { Footer } from './rodape';
import { WelcomeModal } from '../inicio/modalBoasVindas';
import { Heart } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Camada Global de Corações no Fundo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <Heart fill="#e11d48" className="absolute top-[5%] left-[8%] w-16 h-16 text-[#e11d48]/15 animate-float" style={{ animationDelay: '0s' }} />
        <Heart fill="#e11d48" className="absolute top-[25%] right-[5%] w-12 h-12 text-[#e11d48]/15 animate-float" style={{ animationDelay: '1.5s' }} />
        <Heart fill="#e11d48" className="absolute top-[50%] left-[3%] w-20 h-20 text-[#e11d48]/15 animate-float" style={{ animationDelay: '3s' }} />
        <Heart fill="#e11d48" className="absolute top-[75%] right-[8%] w-14 h-14 text-[#e11d48]/15 animate-float" style={{ animationDelay: '0.5s' }} />
        <Heart fill="#e11d48" className="absolute bottom-[10%] left-[10%] w-24 h-24 text-[#e11d48]/15 animate-float" style={{ animationDelay: '2s' }} />
        <Heart fill="#e11d48" className="absolute top-[15%] left-[45%] w-10 h-10 text-[#e11d48]/15 animate-float" style={{ animationDelay: '4s' }} />
        <Heart fill="#e11d48" className="absolute bottom-[40%] left-[40%] w-12 h-12 text-[#e11d48]/15 animate-float" style={{ animationDelay: '1s' }} />
        <Heart fill="#e11d48" className="absolute top-[60%] left-[80%] w-16 h-16 text-[#e11d48]/15 animate-float" style={{ animationDelay: '2.5s' }} />
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
