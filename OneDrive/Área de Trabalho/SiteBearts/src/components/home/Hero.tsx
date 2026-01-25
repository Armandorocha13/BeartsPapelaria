import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { useState, useEffect } from 'react';
import hero1 from '@/assets/hero-1.png';
import hero3 from '@/assets/hero-3.png';
import hero4 from '@/assets/hero-4.png';
import hero5 from '@/assets/hero-5.png';
import hero6 from '@/assets/hero-6.png';

const images = [hero1, hero3, hero4, hero5, hero6];

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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-soft animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Novas Opções Disponíveis</span>
              <Star className="w-4 h-4 text-primary fill-primary" />
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span style={{ color: '#E697b4' }}>Sua papelaria</span>
              <br />
              <span className="text-primary">dos sonhos</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Cadernos, canetas, adesivos e tudo que você precisa para organizar sua vida com muito estilo e criatividade.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <ButtonColorful asChild className="h-14 px-8 text-xl">
                <Link to="/catalogo" className="gap-2">
                  <span>Ver Catálogo</span>
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
