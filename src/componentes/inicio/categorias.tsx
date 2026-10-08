import { Camera, ShoppingBag, Package, Tag, Sticker, Key, CreditCard, Mail, MoreHorizontal, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Natal 🎄',
    description: 'Mimos e presentes festivos',
    icon: Gift,
    href: '/catalogo?categoria=natal',
  },
  {
    name: 'Fotos',
    description: 'Suas memórias impressas',
    icon: Camera,
    href: '/catalogo?categoria=fotos',
  },
  {
    name: 'Sacolas',
    description: 'Embalagens personalizadas',
    icon: ShoppingBag,
    href: '/catalogo?categoria=sacolas',
  },
  {
    name: 'Caixas',
    description: 'Presentes e envios',
    icon: Package,
    href: '/catalogo?categoria=caixas',
  },
  {
    name: 'Etiquetas',
    description: 'Identificação com estilo',
    icon: Tag,
    href: '/catalogo?categoria=etiquetas',
  },
  {
    name: 'Adesivos',
    description: 'Decorativos e funcionais',
    icon: Sticker,
    href: '/catalogo?categoria=adesivos',
  },
  {
    name: 'Chaveiros',
    description: 'Acessórios exclusivos',
    icon: Key,
    href: '/catalogo?categoria=chaveiros',
  },
  {
    name: 'Cartões',
    description: 'Sua marca em tudo',
    icon: CreditCard,
    href: '/catalogo?categoria=cartoes',
  },
  {
    name: 'Convites',
    description: 'Momentos especiais',
    icon: Mail,
    href: '/catalogo?categoria=convites',
  },
  {
    name: 'Outros',
    description: 'Muito mais para você',
    icon: MoreHorizontal,
    href: '/catalogo?categoria=outros',
  },
];

export const Categories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF3F3]/40 to-[#FFF9F5] border-t border-b border-red-100/40">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-red-100/80 text-[#D42637] text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-red-200/50">
            🎄 Catálogo de Natal
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#4A2E2E] mb-4">
            Explore por <span className="text-[#D42637]">Categoria</span> 🎁
          </h2>
          <p className="text-[#4A2E2E]/70 max-w-xl mx-auto text-sm md:text-base">
            Encontre mimos e produtos artesanais organizados especialmente para você neste fim de ano
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-6 gap-4 snap-x no-scrollbar">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={category.href}
                className="flex-none w-[160px] md:w-[200px] group p-6 bg-white border border-red-100/80 rounded-2xl shadow-soft hover:shadow-card hover:border-red-300 transition-all duration-300 hover:-translate-y-1 animate-fade-in snap-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center group-hover:bg-[#D42637] group-hover:border-[#D42637] group-hover:shadow-md group-hover:shadow-red-200 transition-all duration-300">
                    <category.icon className="w-7 h-7 text-[#D42637] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-[#4A2E2E] group-hover:text-[#D42637] transition-colors text-sm md:text-base">
                      {category.name}
                    </h3>
                    <p className="text-[10px] md:text-xs text-[#4A2E2E]/65 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Fading Edge */}
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#FFF9F5] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
