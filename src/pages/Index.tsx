import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { Categories } from '@/components/home/Categories';
import { ProductCard } from '@/components/catalog/ProductCard';
import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ButtonColorful } from '@/components/ui/button-colorful';

const Index = () => {
  const featuredProducts = products.filter(p => p.category === 'pascoa').slice(0, 8);

  return (
    <Layout>
      <Hero />
      <Categories />

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Produtos em <span style={{ color: '#E697b4' }}>Destaque</span>
              </h2>
              <p className="text-muted-foreground mt-2">
                Confira nossa coleção especial de Páscoa
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
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronto para <span style={{ color: '#E697b4' }}>organizar sua vida</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Descubra nossa coleção completa e encontre os materiais perfeitos para você
          </p>
          <ButtonColorful asChild className="h-14 px-8 text-lg">
            <Link to="/catalogo?categoria=pascoa">
              <span>Explorar Catálogo de Páscoa</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </ButtonColorful>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
