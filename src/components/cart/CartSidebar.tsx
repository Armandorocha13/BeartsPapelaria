import { useCart } from '@/context/CartContext';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
    const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

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
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
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
                                <div key={`${item.id}-${item.paperType}-${item.handleType}-${item.magnetType}`} className="flex gap-4">
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
                                            <span className="text-xs text-muted-foreground uppercase">
                                                {item.category}
                                            </span>
                                            <span className="text-xs text-red-600">
                                                [magnetType: {item.magnetType || 'undefined'}]
                                            </span>
                                            {item.paperType && (
                                                <span className="text-[10px] bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded shadow-sm">
                                                    {item.paperType}
                                                </span>
                                            )}
                                            {item.handleType && (
                                                <span className="text-[10px] bg-accent/20 text-accent-foreground font-bold px-1.5 py-0.5 rounded shadow-sm">
                                                    {item.handleType}
                                                </span>
                                            )}
                                            {item.magnetType && item.magnetType !== 'Sem Ímã' && (
                                                <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-1.5 py-0.5 rounded shadow-sm">
                                                    {item.magnetType}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 bg-secondary/50 rounded-lg p-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1, item.paperType, item.handleType, item.magnetType)}
                                                    className="w-6 h-6 flex items-center justify-center rounded-md bg-background hover:text-primary transition-colors"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="w-4 text-center text-sm font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1, item.paperType, item.handleType, item.magnetType)}
                                                    className="w-6 h-6 flex items-center justify-center rounded-md bg-background hover:text-primary transition-colors"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="font-bold text-primary">
                                                    {formatPrice(item.price * item.quantity)}
                                                </span>
                                                <button
                                                    onClick={() => removeItem(item.id, item.paperType, item.handleType, item.magnetType)}
                                                    className="text-muted-foreground hover:text-destructive transition-colors"
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
                        <div className="p-6 border-t bg-secondary/20">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span className="font-heading text-2xl font-bold text-primary">
                                    {formatPrice(totalPrice)}
                                </span>
                            </div>
                            <Button className="w-full rounded-2xl py-6 text-lg font-bold shadow-button">
                                Finalizar Compra
                            </Button>
                            <p className="text-center text-xs text-muted-foreground mt-4">
                                Taxas e frete calculados no checkout
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
