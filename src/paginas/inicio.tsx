import { Layout } from '@/componentes/estrutura/estruturaPrincipal';
import { Hero } from '@/componentes/inicio/destaquePrincipal';
import { Categories } from '@/componentes/inicio/categorias';
import { ProductCard } from '@/componentes/catalogo/cartaoProduto';
import { products } from '@/dados/produtos';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ButtonColorful } from '@/componentes/interface/button-colorful';
import { RainbowBee, Snowflake, ChristmasTree, GiftBox } from '@/componentes/interface/iconesDecorativos';

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

      {/* Seção: Produtos Mais Vendidos de Natal 🎄 */}
      <section className="py-16 bg-gradient-to-b from-[#FFF3F3]/60 via-[#FFE4E6]/30 to-[#FFF9F5]/80 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D42637]/15 text-[#D42637] text-xs font-bold rounded-full mb-2 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Favoritos de Natal 🎅
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#4A2E2E]">
                Mais Pedidos para o <span style={{ color: '#D42637' }}>Natal</span> 🎁
              </h2>
              <p className="text-[#4A2E2E]/70 mt-1 text-sm md:text-base">
                Os mimos e lembrancinhas artesanais perfeitos para presentear quem você ama neste Natal
              </p>
            </div>
            <ButtonColorful asChild className="hidden md:flex gap-2 h-11 shadow-md">
              <Link to="/catalogo">
                <span>Ver Mimos de Natal</span>
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

      {/* Seção: Produtos em Destaque Natalino 🌟 */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#2D6A4F]/15 text-[#2D6A4F] text-xs font-bold rounded-full mb-2 uppercase tracking-wider">
                Edição de Fim de Ano ✨
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#4A2E2E]">
                Presentes em <span style={{ color: '#2D6A4F' }}>Destaque</span> 🎄
              </h2>
              <p className="text-[#4A2E2E]/70 mt-2">
                Descubra nossas criações encantadoras preparadas com carinho e magia natalina
              </p>
            </div>
            <ButtonColorful asChild className="hidden md:flex gap-2 h-11 shadow-md">
              <Link to="/catalogo">
                <span>Ver todo o catálogo</span>
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
            <ButtonColorful asChild className="h-11 w-full">
              <Link to="/catalogo">
                <span>Explorar Presentes de Natal</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </ButtonColorful>
          </div>
        </div>
      </section>

      {/* CTA Section Natalina 🎄 */}
      <section className="py-20 bg-gradient-to-r from-[#FFF3F3] via-[#FFE4E6] to-[#FEF3C7] relative overflow-hidden border-t border-b border-red-100">
        {/* Decorativos Flutuantes do Rodapé */}
        <div className="absolute top-4 left-0 w-full overflow-hidden flex justify-center gap-6 md:gap-10 opacity-60 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="animate-swing"
              style={{ animationDelay: `${i * 0.25}s` }}
            >
              {i % 3 === 0 ? (
                <RainbowBee size={28} />
              ) : i % 3 === 1 ? (
                <Snowflake size={24} color="#D42637" />
              ) : (
                <GiftBox size={24} />
              )}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-xs font-bold text-[#D42637] mb-4">
            <ChristmasTree size={16} />
            <span>Natal Bearts Papelaria</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#4A2E2E] mb-4">
            Espalhe amor neste Natal com <span style={{ color: '#D42637' }}>papelaria afetiva</span>! 🎄✨
          </h2>
          <p className="text-[#4A2E2E]/80 max-w-xl mx-auto mb-8 text-base md:text-lg">
            Garanta seus mimos artesanais e presentes personalizados para surpreender quem você ama neste fim de ano.
          </p>
          <ButtonColorful asChild className="h-14 px-8 text-lg shadow-xl">
            <Link to="/catalogo">
              <span>Garantir Meus Presentes de Natal 🎁</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </ButtonColorful>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
