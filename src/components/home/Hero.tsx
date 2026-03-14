import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { useState, useEffect } from 'react';
const images = ['/images/easter_1.png', '/images/easter_2.png', '/images/easter_3.png'];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            {/* Banner Destaque */}
            <div className="inline-flex items-start md:items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 mb-8 shadow-soft animate-fade-in border border-primary/20">
              <span className="text-lg leading-none mt-0.5">🐰</span>
              <span className="text-sm font-medium text-foreground leading-snug">
                <strong className="text-primary mr-1">Catálogo de Páscoa 2026 Disponível:</strong>
                Confira nossas opções exclusivas de mimos e embalagens personalizadas!
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
              <span style={{ color: '#E697b4' }}>Uma Páscoa feita à mão</span>
              <br />
              <span className="text-primary">e cheia de afeto!</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              De fotos polaroid e adesivos personalizados a convites e embalagens criativas. Sua papelaria afetiva para todos os momentos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <ButtonColorful asChild className="h-14 px-8 text-xl">
                <Link to="/catalogo?categoria=outros" className="gap-2">
                  <span>Ver Catálogo de Páscoa</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </ButtonColorful>
              <ButtonColorful asChild className="h-14 px-8 text-lg">
                <Link to="/sobre">
                  <span>Conheça nossa história</span>
                </Link>
              </ButtonColorful>
            </div>
          </div>

          {/* Hero Image Slider */}
          <div className="relative animate-fade-in lg:animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-square">
              {images.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={`Hero ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${currentImage === index ? 'opacity-100' : 'opacity-0'
                    }`}
                />
              ))}
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
