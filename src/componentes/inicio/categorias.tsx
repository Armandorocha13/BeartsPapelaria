import { Camera, ShoppingBag, Package, Tag, Sticker, Key, CreditCard, Mail, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
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
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore por <span style={{ color: '#F48FB1' }}>Categoria</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Encontre tudo o que precisa organizado especialmente para você
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-6 gap-4 snap-x no-scrollbar">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={category.href}
                className="flex-none w-[160px] md:w-[200px] group p-6 bg-background rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in snap-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center group-hover:bg-[#F48FB1] group-hover:shadow-button transition-all duration-300">
                    <category.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                      {category.name}
                    </h3>
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Fading Edge (Optional, for better UX) */}
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
