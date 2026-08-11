import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ButtonColorful } from '@/componentes/interface/button-colorful';
import { RainbowBee, MiniFlower, PastelRainbow } from '@/componentes/interface/iconesDecorativos';

const heroBannerImage = '/images/bearts-hero-3d-latest.png';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3E8FF]">
      {/* Elementos Decorativos Flutuantes no Topo (Abelhas, Arco-Íris e Flores) */}
      <div className="absolute top-4 left-0 w-full overflow-hidden flex justify-center gap-4 md:gap-8 opacity-70 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="animate-swing"
            style={{ animationDelay: `${i * 0.25}s` }}
          >
            {i % 3 === 0 ? (
              <MiniFlower
                size={28}
                color={i % 2 === 0 ? '#FCE7F3' : '#E9D5FF'}
                centerColor="#FEF08A"
              />
            ) : i % 3 === 1 ? (
              <RainbowBee size={32} />
            ) : (
              <PastelRainbow size={30} />
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Banner Destaque */}
            <div className="inline-flex items-start md:items-center gap-2 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 mb-8 shadow-soft animate-fade-in border border-[#E9D5FF]">
              <Sparkles className="w-5 h-5 text-[#8B629B] animate-pulse" />
              <span className="text-sm font-medium text-foreground leading-snug">
                <strong className="text-[#8B629B] mr-1">Papelaria Afetiva & Mimos:</strong>
                Criados com muito amor e carinho! 🌸
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
              <span style={{ color: '#6B4F78' }}>Bearts Papelaria:</span> <br />
              <span style={{ color: '#E87A90' }}>Amor em forma de papel. ✨</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              De cadernos e adesivos a mimos e papelaria personalizada. Encontre lembranças perfeitas criadas com carinho na Bearts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <ButtonColorful asChild className="h-14 px-8 text-xl">
                <Link to="/catalogo" className="gap-2">
                  <span>Catálogo Completo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </ButtonColorful>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in lg:animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-square scale-110 lg:scale-125 flex items-center justify-center">
              <img
                src={heroBannerImage}
                alt="Bearts Papelaria Mascot 3D"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#E9D5FF]/40 rounded-full opacity-60 animate-float blur-sm" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#FCE7F3]/50 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
