import { Layout } from '@/componentes/estrutura/estruturaPrincipal';
import { Hero } from '@/componentes/inicio/destaquePrincipal';
import { Categories } from '@/componentes/inicio/categorias';
import { ProductCard } from '@/componentes/catalogo/cartaoProduto';
import { products } from '@/dados/produtos';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ButtonColorful } from '@/componentes/interface/button-colorful';
import { RainbowBee, MiniFlower } from '@/componentes/interface/iconesDecorativos';

const Index = () => {
  // Filtra produtos ativos (excluindo dia dos pais)
  const nonFatherProducts = products.filter(p => p.category !== 'dia-dos-pais');

  // IDs dos Produtos Mais Vendidos solicitados: Buquê de Borboletas (232), Chaveiro (210), Polaroide (200), Quadros (204)
  const bestSellerIds = [232, 210, 200, 204];
  const bestSellers = bestSellerIds
    .map(id => nonFatherProducts.find(p => p.id === id))
    .filter((p): p is typeof products[0] => p !== undefined);

  // Produtos em Destaque complementares
  const featuredIds = [233, 227, 203, 220, 223, 222, 214, 950];
  const featuredProducts = featuredIds
    .map(id => nonFatherProducts.find(p => p.id === id))
    .filter((p): p is typeof products[0] => p !== undefined);

  if (featuredProducts.length < 8) {
    const remaining = nonFatherProducts.filter(p => !bestSellerIds.includes(p.id) && !featuredProducts.includes(p));
    featuredProducts.push(...remaining.slice(0, 8 - featuredProducts.length));
  }

  return (
    <Layout>
      <Hero />
      <Categories />

      {/* Seção: Produtos Mais Vendidos */}
      <section className="py-16 bg-[#EADDFB]/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="inline-block px-3 py-1 bg-[#FF89B0]/20 text-[#FF89B0] text-xs font-bold rounded-full mb-2 uppercase tracking-wider">
                Os queridinhos da Bearts 🔥
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#4A2E2E]">
                Produtos <span style={{ color: '#FF89B0' }}>Mais Vendidos</span>
              </h2>
              <p className="text-[#4A2E2E]/70 mt-1 text-sm md:text-base">
                Conheça os mimos artesanais que conquistaram nossos clientes
              </p>
            </div>
            <ButtonColorful asChild className="hidden md:flex gap-2 h-11">
              <Link to="/catalogo">
                <span>Ver todos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ButtonColorful>
          </div>

          {/* Grid dos Mais Vendidos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <div key={product.id} className="w-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção: Produtos em Destaque */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#4A2E2E]">
                Produtos em <span style={{ color: '#C7B5F2' }}>Destaque</span>
              </h2>
              <p className="text-[#4A2E2E]/70 mt-2">
                Descubra nossas criações encantadoras preparadas com carinho
              </p>
            </div>
            <ButtonColorful asChild className="hidden md:flex gap-2 h-11">
              <Link to="/catalogo">
                <span>Ver todos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ButtonColorful>
          </div>

          {/* Grid dos Produtos em Destaque */}
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
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        {/* Decorative Bees and Flowers for bottom section */}
        <div className="absolute top-4 left-0 w-full overflow-hidden flex justify-center gap-4 md:gap-8 opacity-50 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="animate-swing"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {i % 2 === 0 ? (
                <MiniFlower size={24} color={i % 3 === 0 ? '#FBCFE8' : '#D8B4F8'} centerColor="#FEF08A" />
              ) : (
                <RainbowBee size={24} />
              )}
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Feito à mão com <span style={{ color: 'hsl(var(--primary))' }}>amor & carinho</span>! 🌸
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Descubra nossa papelaria fofa e encontre o presente artesanal perfeito para encantar quem você ama.
          </p>
          <ButtonColorful asChild className="h-14 px-8 text-lg">
            <Link to="/catalogo">
              <span>Explorar Todo o Catálogo</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </ButtonColorful>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
