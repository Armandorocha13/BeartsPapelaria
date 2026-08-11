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
  // Filtra apenas produtos que NÃO sejam do Dia dos Pais
  const nonFatherProducts = products.filter(p => p.category !== 'dia-dos-pais');

  // Prioriza as opções selecionadas: Topo de bolo, Polaroide, Chaveiro e itens em destaque
  const preferredSubcategories = ['topo-de-bolo', 'polaroide-personalizada', 'chaveiro-personalizado', 'polaroide', 'caixa-milk', 'adesivos'];

  const featuredProducts = nonFatherProducts
    .filter(p => preferredSubcategories.includes(p.subcategory || '') || p.id === 950 || p.id === 200 || p.id === 210)
    .slice(0, 8);

  if (featuredProducts.length < 8) {
    const extraProducts = nonFatherProducts.filter(p => !featuredProducts.includes(p)).slice(0, 8 - featuredProducts.length);
    featuredProducts.push(...extraProducts);
  }

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
                Descubra nossas criações e mimos mais amados
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
