import { ReactNode } from 'react';
import { Navbar } from './barraNavegacao';
import { Footer } from './rodape';
import { WelcomeModal } from '../inicio/modalBoasVindas';
import { RainbowBee, Snowflake, ChristmasTree, GiftBox, HollyBerry, FairyLights, PastelRainbow } from '../interface/iconesDecorativos';
import { Sparkles, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#FFF9F5]">
      {/* Barra de Anúncio Especial de Natal no Topo 🎄 */}
      <div className="bg-gradient-to-r from-[#D42637] via-[#C41E3A] to-[#F59E0B] text-white py-2 px-4 text-center text-xs sm:text-sm font-medium z-50 flex items-center justify-center gap-2 shadow-sm relative overflow-hidden">
        <Sparkles className="w-4 h-4 animate-pulse shrink-0 text-amber-300" />
        <span>
          <strong>🎄 O Natal Chegou na Bearts!</strong> Presentes & mimos artesanais feitos com carinho.
        </span>
        <Link
          to="/catalogo?categoria=natal"
          className="ml-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-xs font-bold inline-flex items-center gap-1 transition-all border border-white/30"
        >
          <Gift className="w-3 h-3" />
          <span>Ver Mimos</span>
        </Link>
      </div>

      {/* Cordão Pisca-Pisca de Natal no Topo do Site 💡 */}
      <FairyLights className="relative z-40 bg-white/40 border-b border-red-100/50" />

      {/* Camada Global Natalina de Flocos de Neve & Enfeites no Fundo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Flocos de Neve ❄️ */}
        <div className="absolute top-[28%] left-[4%] opacity-55 animate-snowfall" style={{ animationDuration: '12s', animationDelay: '0s' }}>
          <Snowflake size={34} color="#93C5FD" />
        </div>
        <div className="absolute top-[12%] left-[48%] opacity-45 animate-snowfall" style={{ animationDuration: '15s', animationDelay: '3s' }}>
          <Snowflake size={28} color="#F9B8D4" />
        </div>
        <div className="absolute top-[45%] right-[7%] opacity-50 animate-snowfall" style={{ animationDuration: '10s', animationDelay: '5s' }}>
          <Snowflake size={38} color="#A7F3D0" />
        </div>
        <div className="absolute top-[75%] right-[15%] opacity-45 animate-snowfall" style={{ animationDuration: '14s', animationDelay: '2s' }}>
          <Snowflake size={32} color="#FDE047" />
        </div>

        {/* Pinheirinhos & Presentes 🎄🎁 */}
        <div className="absolute bottom-[10%] left-[6%] opacity-60 animate-float" style={{ animationDelay: '1.8s' }}>
          <ChristmasTree size={44} />
        </div>
        <div className="absolute bottom-[30%] right-[4%] opacity-60 animate-float" style={{ animationDelay: '3s' }}>
          <GiftBox size={38} />
        </div>
        <div className="absolute top-[52%] left-[82%] opacity-60 animate-float" style={{ animationDelay: '0.5s' }}>
          <HollyBerry size={34} />
        </div>
        <div className="absolute bottom-[40%] left-[36%] opacity-45 animate-float" style={{ animationDelay: '1.5s' }}>
          <PastelRainbow size={36} />
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

