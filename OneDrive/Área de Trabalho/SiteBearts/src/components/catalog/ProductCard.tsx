import { ShoppingCart, Sparkles, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { Product } from '@/data/products';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const paperOptions = product.category === 'etiquetas'
    ? ['OFFSET', 'KRAFT', 'FOTOGRÁFICO MATTE', 'FOTOGRÁFICO GLOSSY']
    : product.category === 'adesivos'
      ? ['VINIL TRANSPARENTE', 'FOTOGRÁFICO GLOSSY']
      : product.category === 'cartoes'
        ? ['OFFSET', 'FOTOGRÁFICO MATTE', 'FOTOGRÁFICO GLOSSY']
        : (product.category === 'convites' && product.subcategory === 'impresso')
          ? ['OFFSET', 'KRAFT', 'FOTOGRÁFICO MATTE', 'FOTOGRÁFICO GLOSSY']
          : (product.category === 'chaveiros' || product.category === 'fotos')
            ? ['FOTOGRÁFICO']
            : ['OFFSET', 'KRAFT'];

  const [paperType, setPaperType] = useState<string>(paperOptions[0]);
  const [handleType, setHandleType] = useState<string>('Alça de Cordão');
  const { addItem } = useCart();

  const handleOptions = [
    'Alça de Cordão',
    'Fita de Cetim',
    'Alça de Gorgurão',
    'Alça de Kraft'
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addItem({
      id: String(product.id),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      category: product.category,
      paperType: paperType,
      handleType: product.category === 'sacolas' ? handleType : undefined,
    });

    const info = product.category === 'sacolas'
      ? `(${paperType}, ${handleType})`
      : `(${paperType})`;

    toast.success(`${quantity}x ${product.name} ${info} adicionado ao carrinho!`);
  };

  return (
    <div className="group bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden animate-scale-in">
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span
              className="inline-flex items-center gap-1 text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full shadow-button"
              style={{ background: 'var(--accent-pink)' }}
            >
              <Sparkles className="w-3 h-3" />
              Novo
            </span>
          )}
          {product.isFeatured && (
            <span className="bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
              Destaque
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="font-heading font-semibold text-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Price and quantity controls */}
        <div className="mt-4 pt-4 border-t border-border space-y-4">
          {/* Paper Type Selection */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase text-muted-foreground">Tipo de Papel:</span>
            <select
              value={paperType}
              onChange={(e) => setPaperType(e.target.value)}
              className="w-full bg-secondary/50 border-2 border-border rounded-xl px-3 py-2 text-xs font-medium focus:border-primary focus:ring-0 outline-none transition-all cursor-pointer"
            >
              {paperOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Handle Type Selection - ONLY FOR SACOLAS */}
          {product.category === 'sacolas' && (
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase text-muted-foreground">Tipo de Alça:</span>
              <select
                value={handleType}
                onChange={(e) => setHandleType(e.target.value)}
                className="w-full bg-secondary/50 border-2 border-border rounded-xl px-3 py-2 text-xs font-medium focus:border-primary focus:ring-0 outline-none transition-all cursor-pointer"
              >
                {handleOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="font-heading font-bold text-lg text-primary">
              {formatPrice(product.price)}
            </span>

            <div className="flex items-center gap-3 bg-secondary/50 rounded-2xl p-1">
              <button
                onClick={decrement}
                className="w-8 h-8 flex items-center justify-center rounded-xl bg-background hover:text-primary transition-colors"
                aria-label="Diminuir quantidade"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-6 text-center font-medium">{quantity}</span>
              <button
                onClick={increment}
                className="w-8 h-8 flex items-center justify-center rounded-xl bg-background hover:text-primary transition-colors"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <ButtonColorful
            onClick={handleAddToCart}
            className="w-full"
            label="Comprar"
          />
        </div>
      </div>
    </div>
  );
};
