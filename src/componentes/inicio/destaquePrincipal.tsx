import { ArrowRight, Flame, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/componentes/interface/button';
import { ButtonColorful } from '@/componentes/interface/button-colorful';
import { useState, useEffect } from 'react';

const images = [
  '/images/WhatsApp Image 2026-06-13 at 17.16.13 - Editado.png'
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero bg-checkered">
      {/* Decorative Bunting (Bandeirinhas) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden flex justify-center gap-1 md:gap-2 opacity-60 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="w-8 h-10 md:w-12 md:h-16 animate-swing" 
            style={{ 
              backgroundColor: i % 3 === 0 ? '#e11d48' : (i % 3 === 1 ? '#ea580c' : '#f59e0b'),
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              animationDelay: `${i * 0.2}s`
            }} 
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Banner Destaque */}
            <div className="inline-flex items-start md:items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 mb-8 shadow-soft animate-fade-in border border-primary/20">
              <Flame className="w-5 h-5 text-[#ea580c] animate-pulse" />
              <span className="text-sm font-medium text-foreground leading-snug">
                <strong className="text-primary mr-1">Arraiá da Bearts 2026:</strong>
                Personalizados pra deixar seu arraiá ainda mais bão!
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
              <span style={{ color: '#e11d48' }}>Um São João <br className="md:hidden" /> com muita Alegria</span>
              <br className="hidden md:block" />
              <br className="md:hidden" />
              <span className="text-primary">e diversão! 🌽</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              De bandeirolas e adesivos a mimos personalizados. Sua papelaria criativa para animar sua festa junina.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <ButtonColorful asChild className="h-14 px-8 text-xl">
                <Link to="/catalogo?categoria=festa-junina" className="gap-2">
                  <span>Festa Junina</span>
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
                alt="Destaque Festa Junina Bearts"
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
