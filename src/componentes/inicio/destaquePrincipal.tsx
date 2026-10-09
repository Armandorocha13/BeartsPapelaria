import { ArrowRight, Sparkles, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ButtonColorful } from '@/componentes/interface/button-colorful';
import { RainbowBee, Snowflake, ChristmasTree, GiftBox, HollyBerry } from '@/componentes/interface/iconesDecorativos';

const heroBannerImage = '/images/natal.png';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF3F3] via-[#FFE4E6]/50 to-[#FFF9F5]">
      {/* Elementos Decorativos Flutuantes no Topo (Abelhas, Flocos de Neve e Pinheirinhos) */}
      <div className="absolute top-12 left-0 w-full overflow-hidden flex justify-center gap-4 md:gap-8 opacity-80 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="animate-swing"
            style={{ animationDelay: `${i * 0.25}s` }}
          >
            {i % 4 === 0 ? (
              <HollyBerry size={28} />
            ) : i % 4 === 1 ? (
              <Snowflake size={30} color={i % 2 === 0 ? '#93C5FD' : '#F9B8D4'} />
            ) : i % 4 === 2 ? (
              <ChristmasTree size={32} />
            ) : (
              <GiftBox size={28} />
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Banner Destaque Natalino 🎄 */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-2.5 mb-8 shadow-soft animate-fade-in border border-red-200/80">
              <Sparkles className="w-5 h-5 text-[#D42637] animate-pulse" />
              <span className="text-sm font-semibold text-[#4A2E2E] leading-snug flex items-center gap-1.5">
                <span className="text-[#D42637] font-bold">🎄 Edição Especial de Natal:</span>
                Mimos & Presentes Artesanais! 🎁
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
              <span className="text-[#4A2E2E]">O Natal chegou na</span> <br />
              <span className="text-[#D42637] drop-shadow-sm">Bearts Papelaria! 🎄✨</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#4A2E2E]/85 mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Celebre as festas de fim de ano com nossa papelaria artesanal personalizada! Transforme seus presentes de Natal em memórias inesquecíveis repletas de afeto, magia e encanto feito à mão. 🎁
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <ButtonColorful asChild className="h-14 px-8 text-lg sm:text-xl shadow-lg">
                <Link to="/catalogo?categoria=natal" className="gap-2">
                  <Gift className="w-5 h-5" />
                  <span>Explorar Mimos de Natal</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </ButtonColorful>
            </div>
          </div>

          {/* Hero Image & Mascot Container */}
          <div className="relative animate-fade-in lg:animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-square max-w-md mx-auto scale-100 lg:scale-110 flex items-center justify-center">
              {/* Moldura Decorativa Natalina */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-100/60 via-amber-100/40 to-emerald-100/50 blur-xl animate-pulse" />
              
              {/* Mascote Bearts */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src={heroBannerImage}
                  alt="Mascote Bearts Papelaria em Clima de Natal"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

