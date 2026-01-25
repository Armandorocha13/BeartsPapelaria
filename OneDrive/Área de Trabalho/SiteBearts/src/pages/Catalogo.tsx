import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/catalog/ProductCard';
import { products } from '@/data/products';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import imgPolaroide from '@/assets/subcat-polaroide.png';
import img3x4 from '@/assets/subcat-3x4.png';
import img10x15 from '@/assets/subcat-10x15.png';
import imgA5 from '@/assets/subcat-a5.png';
import imgA4 from '@/assets/subcat-a4.png';
import imgSacola18x21 from '@/assets/subcat-sacola-18-21.png';
import imgSacola11x8 from '@/assets/subcat-sacola-11-8.png';
import imgSacolaGeneric from '@/assets/subcat-sacola-generic.png';
import imgCaixaPiramide from '@/assets/subcat-caixa-piramide.png';
import imgCaixaMilk from '@/assets/subcat-caixa-milk.png';
import imgCaixaGeneric from '@/assets/subcat-caixa-generic.png';
import imgEtiquetaRedonda from '@/assets/subcat-etiqueta-redonda.png';
import imgEtiquetaQuadrada from '@/assets/subcat-etiqueta-quadrada.png';
import imgEtiquetaGeneric from '@/assets/subcat-etiqueta-generic.png';
import imgAdesivoRedondo from '@/assets/subcat-adesivo-redondo.png';
import imgAdesivoQuadrado from '@/assets/subcat-adesivo-quadrado.png';
import imgAdesivoPersonalizado from '@/assets/subcat-adesivo-personalizado.png';
import imgChaveiroRedondo from '@/assets/subcat-chaveiro-redondo.png';
import imgChaveiroQuadrado from '@/assets/subcat-chaveiro-quadrado.png';
import imgCartaoGeneric from '@/assets/subcat-cartao-generic.png';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'fotos', name: 'Fotos' },
  { id: 'sacolas', name: 'Sacolas' },
  { id: 'caixas', name: 'Caixas' },
  { id: 'etiquetas', name: 'Etiquetas' },
  { id: 'adesivos', name: 'Adesivos' },
  { id: 'chaveiros', name: 'Chaveiros' },
  { id: 'cartoes', name: 'Cartões' },
  { id: 'convites', name: 'Convites' },
  { id: 'outros', name: 'Outros' },
];

const subcategoriesList: Record<string, { id: string, name: string, image?: string }[]> = {
  fotos: [
    { id: 'all', name: 'Todas as Fotos' },
    { id: 'polaroide', name: 'Polaroide', image: imgPolaroide },
    { id: '3x4', name: 'Fotos 3x4', image: img3x4 },
    { id: '10x15', name: 'Fotos 10x15', image: img10x15 },
    { id: 'a5', name: 'Fotos A5', image: imgA5 },
    { id: 'a4', name: 'Fotos A4', image: imgA4 },
  ],
  sacolas: [
    { id: 'all', name: 'Todas as Sacolas' },
    { id: '18x21', name: 'Sacola de papel 18x21', image: imgSacola18x21 },
    { id: '11x8', name: 'Sacola de papel 11x8', image: imgSacola11x8 },
    { id: '15x11', name: 'Sacola de papel 15x11', image: imgSacolaGeneric },
    { id: '14x9', name: 'Sacola de papel 14x9', image: imgSacolaGeneric },
  ],
  caixas: [
    { id: 'all', name: 'Todas as Caixas' },
    { id: 'piramide', name: 'Caixa pirâmide', image: imgCaixaPiramide },
    { id: 'milk', name: 'Caixa milk', image: imgCaixaMilk },
    { id: '15x13x4', name: 'Caixa 15x13x4', image: imgCaixaGeneric },
    { id: '14x9', name: 'Caixa 14x9', image: imgCaixaGeneric },
    { id: '9x4x2', name: 'Caixa 9x4x2', image: imgCaixaGeneric },
  ],
  etiquetas: [
    { id: 'all', name: 'Todas as Etiquetas' },
    { id: 'redonda', name: 'Etiqueta Redonda', image: imgEtiquetaRedonda },
    { id: 'quadrada', name: 'Etiqueta Quadrada', image: imgEtiquetaQuadrada },
    { id: 'retangular', name: 'Etiqueta Retangular', image: imgEtiquetaGeneric },
    { id: 'caixao', name: 'Etiqueta Caixão', image: imgEtiquetaGeneric },
  ],
  adesivos: [
    { id: 'all', name: 'Todos os Adesivos' },
    { id: 'redondo', name: 'Adesivos Redondos', image: imgAdesivoRedondo },
    { id: 'quadrado', name: 'Adesivos Quadrados', image: imgAdesivoQuadrado },
    { id: 'personalizado', name: 'Adesivos Personalizados', image: imgAdesivoPersonalizado },
  ],
  chaveiros: [
    { id: 'all', name: 'Todos os Chaveiros' },
    { id: 'acrilico-quadrado', name: 'Chaveiro 3x4 acrílico quadrado', image: imgChaveiroQuadrado },
    { id: 'acrilico-redondo', name: 'Chaveiro 3x4 acrílico redondo', image: imgChaveiroRedondo },
  ],
  cartoes: [
    { id: 'all', name: 'Todos os Cartões' },
    { id: 'visita', name: 'Cartão de Visita', image: imgCartaoGeneric },
    { id: 'agradecimento', name: 'Cartão de Agradecimento', image: imgCartaoGeneric },
    { id: 'personalizado', name: 'Cartão Personalizado', image: imgCartaoGeneric },
    { id: 'fidelidade', name: 'Cartão Fidelidade', image: imgCartaoGeneric },
    { id: 'presente', name: 'Cartão Presente', image: imgCartaoGeneric },
    { id: 'sus', name: 'Cartão SUS', image: imgCartaoGeneric },
  ],
  convites: [
    { id: 'all', name: 'Todos os Convites' },
    { id: 'digital-simples', name: 'Convite digital simples', image: imgCartaoGeneric },
    { id: 'interativo', name: 'Convite interativo', image: imgCartaoGeneric },
    { id: 'pdf-longo', name: 'Convite PDF longo', image: imgCartaoGeneric },
    { id: 'video-1min', name: 'Convite em vídeo 1 min', image: imgCartaoGeneric },
    { id: 'video-plus-1min', name: 'Convite em vídeo +1 min', image: imgCartaoGeneric },
    { id: 'impresso', name: 'Convite impresso', image: imgCartaoGeneric },
  ],
  outros: [
    { id: 'all', name: 'Outros Serviços' },
    { id: 'arte-personalizada', name: 'Arte Personalizada', image: imgCartaoGeneric },
    { id: 'identidade-visual', name: 'Identidade Visual', image: imgCartaoGeneric },
    { id: 'logomarca', name: 'Logomarca', image: imgCartaoGeneric },
  ]
};

const Catalogo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('categoria');
  const subcategoryParam = searchParams.get('subcategoria');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync state with URL parameter
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }

    if (subcategoryParam) {
      setSelectedSubcategory(subcategoryParam);
    } else {
      setSelectedSubcategory('all');
    }
  }, [categoryParam, subcategoryParam]);

  const handleCategoryChange = (id: string) => {
    setSelectedCategory(id);
    setSelectedSubcategory('all');

    const newParams = new URLSearchParams(searchParams);
    if (id === 'all') {
      newParams.delete('categoria');
    } else {
      newParams.set('categoria', id);
    }
    newParams.delete('subcategoria');
    setSearchParams(newParams);
  };

  const handleSubcategoryChange = (id: string) => {
    setSelectedSubcategory(id);
    const newParams = new URLSearchParams(searchParams);
    if (id === 'all') {
      newParams.delete('subcategoria');
    } else {
      newParams.set('subcategoria', id);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Nosso</span> <span style={{ color: '#E697b4' }}>Catálogo</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore nossa seleção especial de materiais de papelaria
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-2xl"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryChange(category.id)}
                  className="rounded-2xl whitespace-nowrap"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Subcategory Filters */}
          {selectedCategory && subcategoriesList[selectedCategory] && (
            <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-border/50">
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap mr-2">Subcategorias:</span>
              {subcategoriesList[selectedCategory].map((sub) => (
                <Button
                  key={sub.id}
                  variant={selectedSubcategory === sub.id ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => handleSubcategoryChange(sub.id)}
                  className="rounded-full text-xs h-8 px-4"
                >
                  {sub.name}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Subcategory Cards Grid (Generic "Portal" for categories with subcategories) */}
          {selectedCategory && subcategoriesList[selectedCategory] && selectedSubcategory === 'all' && (
            <div className="mb-16">
              <h2 className="font-heading text-2xl font-bold mb-8 text-center uppercase tracking-wider text-muted-foreground/60">
                Escolha o modelo de <span className="text-primary">{categories.find(c => c.id === selectedCategory)?.name}</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {subcategoriesList[selectedCategory].filter(sub => sub.id !== 'all').map((sub, index) => (
                  <button
                    key={sub.id}
                    onClick={() => handleSubcategoryChange(sub.id)}
                    className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 border border-border/50 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square overflow-hidden bg-accent/20">
                      <img
                        src={sub.image}
                        alt={sub.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 text-center bg-gradient-to-b from-transparent to-accent/5">
                      <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                        {sub.name}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* WhatsApp Contact for Personalized Items */}
          {((selectedCategory === 'adesivos' || selectedCategory === 'cartoes') && selectedSubcategory === 'personalizado') && (
            <div className="mb-16 animate-fade-in">
              <div className="bg-card rounded-[2rem] p-8 md:p-12 shadow-card border border-border flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#25D366]/10 rounded-3xl flex items-center justify-center flex-shrink-0 animate-bounce-slow">
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-heading text-2xl font-bold mb-4">{selectedCategory === 'adesivos' ? 'Adesivos' : 'Cartões'} Personalizados sob Medida</h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Deseja um {selectedCategory === 'adesivos' ? 'adesivo' : 'cartão'} com formato ou tamanho específico? Entre em contato conosco via WhatsApp para conversarmos sobre o seu projeto!
                  </p>
                  <Button
                    onClick={() => {
                      const phoneNumber = '5521971690013';
                      const message = encodeURIComponent(`Olá, gostaria de fazer um orçamento de ${selectedCategory === 'adesivos' ? 'adesivos' : 'cartões'} personalizados. Quais modelos e tamanhos tem disponíveis?`);
                      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                    }}
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl px-8 h-14 text-lg font-bold shadow-soft flex items-center gap-3 transition-all hover:scale-105"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Falar via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid (Only if not showing category "portal") */}
          {!(selectedCategory && subcategoriesList[selectedCategory] && selectedSubcategory === 'all') && (
            filteredProducts.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-6">
                  {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div key={product.id} style={{ animationDelay: `${index * 0.05}s` }}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Nenhum produto encontrado para "{searchQuery}"
                </p>
                <Button
                  variant="outline"
                  onClick={() => { setSearchQuery(''); handleCategoryChange('all'); }}
                  className="mt-4 rounded-2xl"
                >
                  Limpar filtros
                </Button>
              </div>
            )
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Catalogo;
