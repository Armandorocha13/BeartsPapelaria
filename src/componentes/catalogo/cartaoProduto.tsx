import { ShoppingCart, Sparkles, Minus, Plus } from 'lucide-react';
import { Button } from '@/componentes/interface/button';
import { ButtonColorful } from '@/componentes/interface/button-colorful';
import { Product } from '@/dados/produtos';
import { useState, useEffect } from 'react';
import { useCart } from '@/contexto/contextoCarrinho';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

/**
 * Componente de Card de Produto - Atualizado para Festa Junina
 */
export const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(product.minQuantity || 1);
  const getPaperOptions = () => {
    const base = ['GLOSSY', 'OFFSET'];
    if (product.subcategory === 'tag-bem-casado') {
      return ['KRAFT', 'MATTE', 'COUCHÊ FOSCO', 'COUCHÊ BRILHO'];
    }
    if (product.subcategory === 'vale-conforto') {
      return ['KRAFT', 'COUCHÊ FOSCO', 'COUCHÊ BRILHO', 'MATTE', 'GLOSSY'];
    }
    if (product.category === 'sacolas' || product.subcategory === 'kit-corporativo') {
      return [...base, 'KRAFT'];
    }
    if (product.category === 'adesivos') {
      return [...base, 'VINIL TRANSPARENTE'];
    }
    if (['etiquetas', 'cartoes'].includes(product.category) || (product.category === 'convites' && product.subcategory === 'impresso')) {
      return [...base, 'FOTOGRÁFICO MATTE'];
    }
    if (product.subcategory === 'topo-de-bolo') {
      return ['GLOSSY', 'MATTE'];
    }
    if (product.subcategory === 'cofre' || product.subcategory === 'aplique-tubete' || product.subcategory === 'buque-borboletas' || product.subcategory === 'imas-geladeira' || product.subcategory === 'lambe-lambe' || product.subcategory === 'caderno' || product.subcategory === 'livreto') {
      return ['GLOSSY'];
    }
    return base;
  };

  const paperOptions = getPaperOptions();

  const [paperType, setPaperType] = useState<string>(paperOptions[0]);
  const [handleType, setHandleType] = useState<string>('Alça de Cordão');
  const [magnetType, setMagnetType] = useState<string>('Sem Ímã');
  const [selectedVariation, setSelectedVariation] = useState(product.variations?.[0] || null);
  const [selectedSecondaryVariation, setSelectedSecondaryVariation] = useState(product.secondaryVariations?.[0] || null);
  const [selectedTertiaryVariation, setSelectedTertiaryVariation] = useState(product.tertiaryVariations?.[0] || null);
  const { addItem } = useCart();

  let currentPrice = selectedVariation ? selectedVariation.price : product.price;

  if (selectedSecondaryVariation) {
    currentPrice += selectedSecondaryVariation.price;
  }

  if (selectedTertiaryVariation) {
    currentPrice += selectedTertiaryVariation.price;
  }

  if (product.subcategory === 'kit-corporativo') {
    currentPrice = paperType === 'KRAFT' ? 15.00 : 18.00;
  }

  // Adicionais para Adesivos Redondos e Quadrados
  if (product.category === 'adesivos' && (product.subcategory === 'redondo' || product.subcategory === 'quadrado')) {
    if (paperType === 'VINIL TRANSPARENTE') {
      currentPrice += 2.50;
    } else if (paperType === 'GLOSSY') {
      currentPrice += 1.50;
    }
  }

  // Preços para Cartões baseados no papel
  if (product.category === 'cartoes') {
    if (product.subcategory === 'agradecimento' || product.subcategory === 'fidelidade' || product.subcategory === 'presente') {
      if (paperType === 'OFFSET') {
        currentPrice = 15.00;
      } else if (paperType === 'FOTOGRÁFICO MATTE') {
        currentPrice = 20.00;
      } else if (paperType === 'GLOSSY') {
        currentPrice = 25.00;
      }
    } else if (product.subcategory === 'sus') {
      currentPrice = paperType === 'GLOSSY' ? 15.00 : 12.00;
    } else {
      // Outros cartões (Visita, etc)
      if (paperType === 'GLOSSY') {
        currentPrice = 45.00;
      } else {
        currentPrice = 35.00;
      }
    }
  }

  // Preços para Convites Individuais baseados no papel
  if (product.category === 'convites' && product.subcategory === 'impresso') {
    currentPrice = paperType === 'GLOSSY' ? 14.00 : 12.00;
  }

  // Desconto Progressivo para Sacolas 18x21
  const originalIndividualPrice = currentPrice;
  const is18x21Bag = product.category === 'sacolas' && product.subcategory === '18x21';

  if (is18x21Bag && quantity >= 10) {
    currentPrice = 7.00;
  }

  if (product.id === 144 && quantity >= 10) {
    currentPrice = 3.50;
  }

  if (product.id === 145 && quantity >= 10) {
    currentPrice = 6.50;
  }

  if (product.id === 911 && quantity >= 10) {
    currentPrice = 13.00;
  }

  if (product.id === 912 && quantity >= 10) {
    currentPrice = 3.50;
  }

  // Aplica desconto por volume genérico se existir (ex: Polaroides)
  if (product.volumeDiscounts && product.volumeDiscounts.length > 0) {
    const applicableDiscount = [...product.volumeDiscounts]
      .sort((a, b) => b.quantity - a.quantity)
      .find(d => quantity >= d.quantity);
    
    if (applicableDiscount) {
      // O desconto é sobre o total, então subtraímos do preço individual proporcionalmente
      // ou apenas mostramos o valor final. Para manter a coerência, vamos aplicar no final.
    }
  }

  // Preço adicional para calendários com ímã
  const isCalendar = product.subcategory === 'calendario';
  if (isCalendar && magnetType === 'Com Ímã') {
    currentPrice += 1.50;
  }

  // Desconto para papel KRAFT em sacolas
  if (product.category === 'sacolas' && paperType === 'KRAFT') {
    if (product.subcategory === 'sacola-almofada') {
      currentPrice -= 1.50; // 4.50 -> 3.00
    } else {
      currentPrice -= 0.50;
    }
  }

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
  const decrement = () => setQuantity((prev) => (prev > (product.minQuantity || 1) ? prev - 1 : (product.minQuantity || 1)));

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}${selectedVariation ? '-' + selectedVariation.name : ''}${selectedSecondaryVariation ? '-' + selectedSecondaryVariation.name : ''}`,
      name: selectedVariation 
        ? `${product.name} - ${selectedVariation.name}${selectedSecondaryVariation ? ' (' + selectedSecondaryVariation.name + ')' : ''}` 
        : product.name,
      price: currentPrice,
      image: product.image,
      quantity: quantity,
      category: product.category,
      paperType: isCalendar || product.secondaryVariationTitle === 'Tipo de Papel:' ? undefined : paperType,
      handleType: product.category === 'sacolas' ? handleType : undefined,
      magnetType: isCalendar ? magnetType : undefined,
      secondaryVariation: selectedSecondaryVariation ? selectedSecondaryVariation.name : undefined,
      volumeDiscounts: product.volumeDiscounts,
    });

    const info = product.category === 'sacolas'
      ? `(${paperType}, ${handleType}${selectedVariation ? ', ' + selectedVariation.name : ''})`
      : isCalendar
        ? `(${magnetType}${selectedVariation ? ', ' + selectedVariation.name : ''})`
        : `(${product.secondaryVariationTitle === 'Tipo de Papel:' ? '' : paperType + (selectedVariation || selectedSecondaryVariation ? ', ' : '')}${selectedVariation ? selectedVariation.name : ''}${selectedSecondaryVariation ? (selectedVariation ? ', ' : '') + selectedSecondaryVariation.name : ''})`;

    toast.success(`${quantity}x ${product.name} ${info} adicionado ao carrinho!`);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activeImages = (paperType === 'KRAFT' && product.kraftImages)
    ? product.kraftImages
    : (product.images || [product.image]);

  useEffect(() => {
    if (activeImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % activeImages.length);
      }, 2500);
      return () => clearInterval(interval);
    } else {
      setCurrentImageIndex(0);
    }
  }, [activeImages]);

  const displayImage = activeImages[currentImageIndex] || product.image;


  return (
    <div className="group bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden animate-scale-in">
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover scale-[1.0] group-hover:scale-[1.05] transition-transform duration-500"
        />






        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span
              className="inline-flex items-center gap-1 text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full shadow-button"
              style={{ background: 'var(--accent-red)' }}
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
          {/* Variation Selection (Medidas) */}
          {product.variations && (
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase text-muted-foreground">
                {product.category === 'cartoes' || product.category === 'convites'
                  ? 'Quantidade:'
                  : 'Opções de Tamanho:'}
              </span>
              <select
                value={selectedVariation?.name}
                onChange={(e) => {
                  const variation = product.variations?.find(v => v.name === e.target.value);
                  if (variation) setSelectedVariation(variation);
                }}
                className="w-full bg-secondary/50 border-2 border-border rounded-xl px-3 py-2 text-xs font-medium focus:border-primary focus:ring-0 outline-none transition-all cursor-pointer"
              >
                {product.variations.map(variation => (
                  <option key={variation.name} value={variation.name}>
                    {variation.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Secondary Variation Selection (ex: Opções de Caderno) */}
          {product.secondaryVariations && (
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase text-muted-foreground">
                {product.secondaryVariationTitle || 'Opções:'}
              </span>
              <select
                value={selectedSecondaryVariation?.name}
                onChange={(e) => {
                  const variation = product.secondaryVariations?.find(v => v.name === e.target.value);
                  if (variation) setSelectedSecondaryVariation(variation);
                }}
                className="w-full bg-secondary/50 border-2 border-border rounded-xl px-3 py-2 text-xs font-medium focus:border-primary focus:ring-0 outline-none transition-all cursor-pointer"
              >
                {product.secondaryVariations.map(variation => (
                  <option key={variation.name} value={variation.name}>
                    {variation.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Tertiary Variation Selection (ex: Furação de Tags) */}
          {product.tertiaryVariations && (
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase text-muted-foreground">
                {product.tertiaryVariationTitle || 'Opções Extras:'}
              </span>
              <select
                value={selectedTertiaryVariation?.name}
                onChange={(e) => {
                  const variation = product.tertiaryVariations?.find(v => v.name === e.target.value);
                  if (variation) setSelectedTertiaryVariation(variation);
                }}
                className="w-full bg-secondary/50 border-2 border-border rounded-xl px-3 py-2 text-xs font-medium focus:border-primary focus:ring-0 outline-none transition-all cursor-pointer"
              >
                {product.tertiaryVariations.map(variation => (
                  <option key={variation.name} value={variation.name}>
                    {variation.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Paper Type Selection */}
          {(!product.noPaper && product.secondaryVariationTitle !== 'Tipo de Papel:' && !['logomarca', 'identidade-visual', 'arte-personalizada', 'caixas-personalizadas'].includes(product.subcategory || '') &&
            (product.category !== 'convites' || product.subcategory === 'impresso')) && (
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
            )}

          {/* Handle Type Selection - ONLY FOR SACOLAS EXCLUDING ALMOFADA */}
          {product.category === 'sacolas' && product.subcategory !== 'sacola-almofada' && (
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

          {/* Magnet Type Selection - ONLY FOR CALENDARS */}
          {isCalendar && (
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase text-muted-foreground">Selecione:</span>
              <select
                value={magnetType}
                onChange={(e) => setMagnetType(e.target.value)}
                className="w-full bg-secondary/50 border-2 border-border rounded-xl px-3 py-2 text-xs font-medium focus:border-primary focus:ring-0 outline-none transition-all cursor-pointer"
              >
                <option value="Sem Ímã">Sem Ímã</option>
                <option value="Com Ímã">Com Ímã (+R$ 1,50)</option>
              </select>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              {(() => {
                let total = currentPrice * quantity;
                let originalTotal = currentPrice * quantity;
                let hasDiscount = false;

                // Aplica desconto por volume genérico se existir (ex: Polaroides)
                if (product.volumeDiscounts) {
                  const discount = [...product.volumeDiscounts]
                    .sort((a, b) => b.quantity - a.quantity)
                    .find(d => quantity >= d.quantity);
                  if (discount) {
                    total -= discount.discount;
                    hasDiscount = true;
                  }
                }

                // Caso especial para sacolas 18x21 e outros que usam a lógica antiga de individualPrice
                if (currentPrice < originalIndividualPrice) {
                  originalTotal = originalIndividualPrice * quantity;
                  hasDiscount = true;
                }

                return (
                  <>
                    {hasDiscount && (
                      <span className="text-xs text-muted-foreground/60 line-through leading-none mb-1">
                        {formatPrice(originalTotal)}
                      </span>
                    )}
                    <span className="font-heading font-bold text-lg text-[#FF89B0] leading-none">
                      {formatPrice(total)}
                    </span>
                  </>
                );
              })()}
            </div>

            <div className="flex items-center gap-3 bg-secondary/50 rounded-2xl p-1">
              <button
                onClick={decrement}
                className="w-8 h-8 flex items-center justify-center rounded-xl bg-background hover:text-primary transition-colors"
                aria-label="Diminuir quantidade"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className={`text-center font-medium ${product.variations ? 'w-12 text-xs' : 'w-6 text-base'}`}>
                {quantity}
              </span>
              <button
                onClick={increment}
                className="w-8 h-8 flex items-center justify-center rounded-xl bg-background hover:text-primary transition-colors"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {product.price > 0 ? (
            <ButtonColorful
              onClick={handleAddToCart}
              className="w-full"
              label="Comprar"
            />
          ) : (
            <Button
              onClick={() => {
                const phoneNumber = '5521971809007';
                const message = encodeURIComponent(`Olá! Vi o produto "${product.name}" no site e gostaria de fazer um orçamento personalizado.`);
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
              }}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl h-12 font-bold shadow-soft flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fazer Orçamento
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
