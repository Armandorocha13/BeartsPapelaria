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
  const featuredProducts = products.filter(p => p.category === 'festa-junina').slice(0, 8);

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
                Produtos em <span style={{ color: '#e11d48' }}>Destaque</span>
              </h2>
              <p className="text-muted-foreground mt-2">
                Confira nossa coleção especial de Festa Junina
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
        {/* Decorative Bunting for bottom section */}
        <div className="absolute top-0 left-0 w-full overflow-hidden flex justify-center gap-1 opacity-40 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="w-6 h-8 animate-swing" 
              style={{ 
                backgroundColor: i % 3 === 0 ? '#e11d48' : (i % 3 === 1 ? '#ea580c' : '#f59e0b'),
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                animationDelay: `${i * 0.1}s`
              }} 
            />
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronto pra <span style={{ color: '#e11d48' }}>pular a fogueira</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Descubra nossa coleção completa e encontre os itens perfeitos para seu arraiá
          </p>
          <ButtonColorful asChild className="h-14 px-8 text-lg">
            <Link to="/catalogo?categoria=festa-junina">
              <span>Explorar Catálogo Junino</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </ButtonColorful>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
