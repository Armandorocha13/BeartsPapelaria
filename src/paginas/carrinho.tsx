import { useCart } from '@/contexto/contextoCarrinho';
import { Layout } from '@/componentes/estrutura/estruturaPrincipal';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/componentes/interface/button';
import { ButtonColorful } from '@/componentes/interface/button-colorful';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Carrinho = () => {
    const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        observations: ''
    });

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(price);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleCheckout = () => {
        const phoneNumber = '5521971690013';

        // Construct items list message
        const itemsList = items.map(item =>
            `• ${item.quantity}x ${item.name}${item.paperType && item.category !== 'dia-das-maes' ? ` (${item.paperType})` : ''}${item.handleType ? ` [${item.handleType}]` : ''} (${formatPrice(item.price * item.quantity)})`
        ).join('\n');

        const message = encodeURIComponent(
            `*Novo Pedido - Bearts Papelaria*\n\n` +
            `*Cliente:* ${formData.firstName} ${formData.lastName}\n` +
            `*Resumo do Pedido:*\n${itemsList}\n\n` +
            `*Total:* ${formatPrice(totalPrice)}\n` +
            `*Frete:* A combinar\n\n` +
            `*Observações:* ${formData.observations || 'Nenhuma'}`
        );

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-12 md:py-20">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
                    <div>
                        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                            Seu <span className="text-primary">Carrinho</span>
                        </h1>
                        <p className="text-muted-foreground mt-2">
                            Você tem {totalItems} item(s) no carrinho
                        </p>
                    </div>
                    <ButtonColorful asChild className="w-fit h-11">
                        <Link to="/catalogo">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            <span>Continuar Comprando</span>
                        </Link>
                    </ButtonColorful>
                </div>

                {items.length === 0 ? (
                    <div className="bg-card rounded-3xl p-12 text-center shadow-soft animate-fade-in border border-border">
                        <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag className="w-12 h-12 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h2>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                            Parece que você ainda não adicionou nenhum produto. Que tal explorar nosso catálogo e encontrar algo especial?
                        </p>
                        <ButtonColorful asChild className="h-12 px-8">
                            <Link to="/catalogo">Ver Produtos</Link>
                        </ButtonColorful>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Items Table */}
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <div
                                    key={`${item.id}-${item.paperType}-${item.handleType}`}
                                    className="bg-card rounded-2xl p-4 md:p-6 shadow-soft border border-border flex flex-col sm:flex-row items-center gap-6 animate-fade-in"
                                >
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-secondary flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-1">
                                            {item.name}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2 mb-4">
                                            <p className="text-sm text-muted-foreground uppercase tracking-wider">
                                                {item.category}
                                            </p>
                                            {item.paperType && item.category !== 'dia-das-maes' && (
                                                <span className="text-[10px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full shadow-sm">
                                                    {item.paperType}
                                                </span>
                                            )}
                                            {item.handleType && (
                                                <span className="text-[10px] bg-accent/20 text-accent-foreground font-bold px-2 py-0.5 rounded-full shadow-sm">
                                                    {item.handleType}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
                                            <div className="flex items-center gap-3 bg-secondary/50 rounded-2xl p-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1, item.paperType, item.handleType)}
                                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-background hover:text-primary transition-colors shadow-sm"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-8 text-center font-bold">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1, item.paperType, item.handleType)}
                                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-background hover:text-primary transition-colors shadow-sm"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <div className="text-lg font-bold text-primary">
                                                {formatPrice(item.price * item.quantity)}
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => removeItem(item.id, item.paperType, item.handleType)}
                                        className="p-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-2xl transition-all"
                                        title="Remover item"
                                    >
                                        <Trash2 className="w-6 h-6" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Summary Card */}
                        <div className="bg-card rounded-3xl p-8 shadow-card border border-border sticky top-24">
                            <h2 className="font-heading text-2xl font-bold mb-6">Resumo</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-muted-foreground">
                                    <span>Subtotal ({totalItems} itens)</span>
                                    <span>{formatPrice(totalPrice)}</span>
                                </div>
                                <div className="flex justify-between text-muted-foreground">
                                    <span>Frete</span>
                                    <span className="text-primary font-medium">A combinar</span>
                                </div>
                                <div className="h-px bg-border my-4" />

                                {/* Form fields */}
                                <div className="space-y-4 pt-2">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nome</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="w-full bg-secondary/30 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                                placeholder="Seu nome"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sobrenome</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="w-full bg-secondary/30 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                                placeholder="Sobrenome"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="observations" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Observações</label>
                                        <textarea
                                            id="observations"
                                            rows={3}
                                            value={formData.observations}
                                            onChange={handleInputChange}
                                            className="w-full bg-secondary/30 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                                            placeholder="Algum detalhe especial?"
                                        />
                                    </div>
                                </div>

                                <div className="h-px bg-border my-4" />
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold">Total</span>
                                    <span className="text-3xl font-bold text-primary">
                                        {formatPrice(totalPrice)}
                                    </span>
                                </div>
                            </div>

                            <ButtonColorful
                                onClick={handleCheckout}
                                className="w-full h-16 text-xl font-bold mb-4"
                                label="Finalizar Compra"
                            />

                            <p className="text-center text-sm text-muted-foreground">
                                Finalize seu pedido enviando os detalhes para nosso WhatsApp
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Carrinho;
