import { Layout } from '@/componentes/estrutura/estruturaPrincipal';
import { Hero } from '@/componentes/inicio/destaquePrincipal';
import { Categories } from '@/componentes/inicio/categorias';
import { ProductCard } from '@/componentes/catalogo/cartaoProduto';
import { products } from '@/dados/produtos';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/componentes/interface/button';
import { ButtonColorful } from '@/componentes/interface/button-colorful';

const Index = () => {
  const featuredProducts = products.filter(p => p.category === 'dia-dos-pais').slice(0, 8);

  return (
    <Layout>
      <Hero />
      <Categories />

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Produtos em <span style={{ color: 'hsl(var(--primary))' }}>Destaque</span>
              </h2>
              <p className="text-muted-foreground mt-2">
                Confira nossa coleção especial de Dia dos Pais
              </p>
            </div>
            <ButtonColorful asChild className="hidden md:flex gap-2 h-11">
              <Link to="/catalogo">
                <span>Ver todos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ButtonColorful>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="w-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 text-center md:hidden">
            <ButtonColorful asChild className="h-11">
              <Link to="/catalogo">
                <span>Ver todos os produtos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ButtonColorful>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero bg-checkered relative overflow-hidden">
        {/* Decorative Moustaches for bottom section */}
        <div className="absolute top-4 left-0 w-full overflow-hidden flex justify-center gap-4 md:gap-8 opacity-30 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 animate-swing"
              style={{
                color: i % 3 === 0 ? '#1d4ed8' : (i % 3 === 1 ? '#3b82f6' : '#60a5fa'),
                animationDelay: `${i * 0.15}s`
              }}
            >
              <path d="M 12,14.5 C 10.5,13.5 9,13 7.5,13 C 5,13 2.5,14.5 1,17 C 3.5,19 6,19 7.5,19 C 9.5,19 11,17.5 12,16.5 C 13,17.5 14.5,19 16.5,19 C 18,19 20.5,19 23,17 C 21.5,14.5 19,13 16.5,13 C 15,13 13.5,13.5 12,14.5 Z" />
            </svg>
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Demonstre todo o seu <span style={{ color: 'hsl(var(--primary))' }}>amor e admiração</span>!
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Descubra nossa coleção completa de Dia dos Pais e encontre o presente perfeito para surpreender o seu herói
          </p>
          <ButtonColorful asChild className="h-14 px-8 text-lg">
            <Link to="/catalogo?categoria=dia-dos-pais">
              <span>Explorar Coleção Dia dos Pais</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </ButtonColorful>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
