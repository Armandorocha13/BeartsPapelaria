import { useCart } from '@/contexto/contextoCarrinho';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/componentes/interface/button';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
    const { items, removeItem, updateQuantity, totalPrice, totalItems, applyCoupon, removeCoupon, discount, activeCoupon } = useCart();
    const [couponInput, setCouponInput] = useState('');
    const [couponMessage, setCouponMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

    const handleApplyCoupon = () => {
        if (!couponInput) return;
        const result = applyCoupon(couponInput);
        setCouponMessage({ text: result.message, type: result.success ? 'success' : 'error' });
        if (result.success) setCouponInput('');
    };

    const handleRemoveCoupon = () => {
        removeCoupon();
        setCouponMessage(null);
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(price);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl z-[101] transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b">
                        <div className="flex items-center gap-2">
                            <ShoppingBag className="w-6 h-6 text-primary" />
                            <h2 className="font-heading text-xl font-bold">Seu Carrinho</h2>
                            <span className="bg-accent text-primary text-xs font-bold px-2 py-1 rounded-full">
                                {totalItems}
                            </span>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-secondary rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Items List */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
                        {items.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
                                    <ShoppingBag className="w-10 h-10 text-muted-foreground" />
                                </div>
                                <p className="text-muted-foreground">Seu carrinho está vazio</p>
                                <Button
                                    variant="link"
                                    onClick={onClose}
                                    className="mt-2 text-primary"
                                >
                                    Continuar comprando
                                </Button>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div key={`${item.id}-${item.paperType}-${item.handleType}-${item.magnetType}-${item.secondaryVariation}`} className="flex gap-4">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-secondary flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className={`w-full h-full ${item.magnetType ? 'object-contain' : 'object-cover'}`}
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-heading font-semibold text-foreground truncate">
                                            {item.name}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <span className="text-[10px] text-muted-foreground uppercase font-medium">
                                                {item.category === 'dia-dos-namorados' || item.category === 'presentes-afetivos' ? 'presentes afetivos' : item.category}
                                            </span>
                                            {item.paperType && item.category !== 'dia-dos-namorados' && (
                                                <span className="text-[9px] bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded">
                                                    {item.paperType}
                                                </span>
                                            )}
                                            {item.handleType && (
                                                <span className="text-[9px] bg-accent/20 text-accent-foreground font-bold px-1.5 py-0.5 rounded">
                                                    {item.handleType}
                                                </span>
                                            )}
                                            {item.magnetType && item.magnetType !== 'Sem Ímã' && (
                                                <span className="text-[9px] bg-purple-100 text-purple-700 font-bold px-1.5 py-0.5 rounded">
                                                    {item.magnetType}
                                                </span>
                                            )}
                                            {item.secondaryVariation && (
                                                <span className="text-[9px] bg-secondary text-secondary-foreground font-bold px-1.5 py-0.5 rounded">
                                                    {item.secondaryVariation}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center gap-2 bg-secondary/30 rounded-lg p-0.5 border border-border/50">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1, item.paperType, item.handleType, item.magnetType, item.secondaryVariation)}
                                                    className="w-6 h-6 flex items-center justify-center rounded-md bg-background hover:text-primary transition-colors shadow-sm"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="w-4 text-center text-xs font-bold">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1, item.paperType, item.handleType, item.magnetType, item.secondaryVariation)}
                                                    className="w-6 h-6 flex items-center justify-center rounded-md bg-background hover:text-primary transition-colors shadow-sm"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="font-bold text-primary">
                                                    {formatPrice(item.price * item.quantity)}
                                                </span>
                                                <button
                                                    onClick={() => removeItem(item.id, item.paperType, item.handleType, item.magnetType, item.secondaryVariation)}
                                                    className="text-muted-foreground hover:text-destructive transition-colors p-1"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="p-6 border-t bg-secondary/10 space-y-4">
                            {/* Coupon Area */}
                            <div className="space-y-2">
                                {activeCoupon ? (
                                    <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-3 py-2">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold text-green-700 uppercase">Cupom Ativo</span>
                                            <span className="text-xs font-semibold text-green-800">{activeCoupon}</span>
                                        </div>
                                        <button 
                                            onClick={handleRemoveCoupon}
                                            className="text-[10px] text-red-600 underline font-medium"
                                        >
                                            Remover
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={couponInput}
                                            onChange={(e) => setCouponInput(e.target.value)}
                                            placeholder="CUPOM"
                                            className="flex-1 bg-background border-2 border-border rounded-xl px-3 py-1.5 text-xs outline-none focus:border-primary transition-all uppercase font-medium"
                                        />
                                        <Button 
                                            variant="outline" 
                                            size="sm"
                                            onClick={handleApplyCoupon}
                                            className="rounded-xl h-auto py-1"
                                        >
                                            Aplicar
                                        </Button>
                                    </div>
                                )}
                                {couponMessage && !activeCoupon && (
                                    <p className={`text-[10px] font-medium text-center ${couponMessage.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                                        {couponMessage.text}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(totalPrice + discount)}</span>
                                </div>
                                {discount > 0 && (
                                    <div className="flex items-center justify-between text-xs text-green-600 font-medium">
                                        <span>Desconto</span>
                                        <span>-{formatPrice(discount)}</span>
                                    </div>
                                )}
                                <div className="flex items-center justify-between pt-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-heading text-2xl font-bold text-primary">
                                        {formatPrice(totalPrice)}
                                    </span>
                                </div>
                            </div>

                            <Button 
                                asChild
                                className="w-full rounded-2xl py-6 text-lg font-bold shadow-button"
                            >
                                <Link onClick={onClose} to="/carrinho">
                                    Finalizar Compra
                                </Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
