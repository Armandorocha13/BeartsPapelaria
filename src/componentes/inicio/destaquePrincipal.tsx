import { ArrowRight, Gift, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/componentes/interface/button';
import { ButtonColorful } from '@/componentes/interface/button-colorful';
import { useState, useEffect } from 'react';

const images = [
  '/images/4436c033-b83f-48e1-97c9-fac59d739df5.png'
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero bg-checkered">
      {/* Decorative Moustaches (Bigodes) */}
      <div className="absolute top-4 left-0 w-full overflow-hidden flex justify-center gap-4 md:gap-8 opacity-40 z-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 md:w-14 md:h-14 animate-swing"
            style={{
              color: i % 3 === 0 ? '#1d4ed8' : (i % 3 === 1 ? '#3b82f6' : '#60a5fa'),
              animationDelay: `${i * 0.25}s`
            }}
          >
            <path d="M 12,14.5 C 10.5,13.5 9,13 7.5,13 C 5,13 2.5,14.5 1,17 C 3.5,19 6,19 7.5,19 C 9.5,19 11,17.5 12,16.5 C 13,17.5 14.5,19 16.5,19 C 18,19 20.5,19 23,17 C 21.5,14.5 19,13 16.5,13 C 15,13 13.5,13.5 12,14.5 Z" />
          </svg>
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Banner Destaque */}
            <div className="inline-flex items-start md:items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 mb-8 shadow-soft animate-fade-in border border-primary/20">
              <Gift className="w-5 h-5 text-[#2563eb] animate-pulse" />
              <span className="text-sm font-medium text-foreground leading-snug">
                <strong className="text-primary mr-1">Especial Dia dos Pais:</strong>
                Mimos e personalizados para demonstrar todo seu amor!
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
              <span style={{ color: '#2563eb' }}>Um Dia dos Pais <br className="md:hidden" /> cheio de amor</span>
              <br className="hidden md:block" />
              <br className="md:hidden" />
              <span className="text-primary">e presentes especiais! 👔</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              De caixas de presente e chaveiros a mimos personalizados. Encontre lembranças perfeitas criadas com carinho na Bearts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <ButtonColorful asChild className="h-14 px-8 text-xl">
                <Link to="/catalogo?categoria=dia-dos-pais" className="gap-2">
                  <span>Dia dos Pais</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </ButtonColorful>
              <ButtonColorful asChild className="h-14 px-8 text-lg">
                <Link to="/catalogo">
                  <span>Catálogo Completo</span>
                </Link>
              </ButtonColorful>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in lg:animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-square scale-110 lg:scale-125 flex items-center justify-center">
              <img
                src={images[0]}
                alt="Destaque Dia dos Pais Bearts"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-40 animate-float blur-sm" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
