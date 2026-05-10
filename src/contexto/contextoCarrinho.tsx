import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    category: string;
    paperType?: string;
    handleType?: string;
    magnetType?: string;
    secondaryVariation?: string;
    volumeDiscounts?: { quantity: number; discount: number }[];
}

interface CartContextType {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string, paperType?: string, handleType?: string, magnetType?: string, secondaryVariation?: string) => void;
    updateQuantity: (id: string, quantity: number, paperType?: string, handleType?: string, magnetType?: string, secondaryVariation?: string) => void;
    clearCart: () => void;
    applyCoupon: (code: string) => { success: boolean; message: string };
    removeCoupon: () => void;
    totalItems: number;
    totalPrice: number;
    discount: number;
    activeCoupon: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [activeCoupon, setActiveCoupon] = useState<string | null>(null);

    const addItem = (newItem: CartItem) => {
        setItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.id === newItem.id &&
                    item.paperType === newItem.paperType &&
                    item.handleType === newItem.handleType &&
                    item.magnetType === newItem.magnetType &&
                    item.secondaryVariation === newItem.secondaryVariation
            );
            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === newItem.id &&
                        item.paperType === newItem.paperType &&
                        item.handleType === newItem.handleType &&
                        item.magnetType === newItem.magnetType &&
                        item.secondaryVariation === newItem.secondaryVariation
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            }
            return [...currentItems, newItem];
        });
    };

    const removeItem = (id: string, paperType?: string, handleType?: string, magnetType?: string, secondaryVariation?: string) => {
        setItems((currentItems) =>
            currentItems.filter(
                (item) => item.id !== id ||
                    item.paperType !== paperType ||
                    item.handleType !== handleType ||
                    item.magnetType !== magnetType ||
                    item.secondaryVariation !== secondaryVariation
            )
        );
    };

    const updateQuantity = (id: string, newQuantity: number, paperType?: string, handleType?: string, magnetType?: string, secondaryVariation?: string) => {
        if (newQuantity < 1) return;
        setItems((currentItems) =>
            currentItems.map((item) =>
                item.id === id &&
                    item.paperType === paperType &&
                    item.handleType === handleType &&
                    item.magnetType === magnetType &&
                    item.secondaryVariation === secondaryVariation
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
        setActiveCoupon(null);
    };

    const applyCoupon = (code: string) => {
        const upperCode = code.toUpperCase().trim();
        
        if (upperCode === 'BEARTS10') {
            if (subtotal < 50) {
                return { success: false, message: 'O cupom BEARTS10 só é válido para compras acima de R$ 50,00.' };
            }
            setActiveCoupon(upperCode);
            return { success: true, message: 'Cupom aplicado: 10% de desconto!' };
        }

        return { success: false, message: 'Cupom inválido ou expirado.' };
    };

    const removeCoupon = () => setActiveCoupon(null);

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    
    // Cálculo do subtotal base (com descontos de volume inclusos por item)
    const subtotal = items.reduce((acc, item) => {
        let itemTotal = item.price * item.quantity;
        
        if (item.volumeDiscounts && item.volumeDiscounts.length > 0) {
            const applicableDiscount = [...item.volumeDiscounts]
                .sort((a, b) => b.quantity - a.quantity)
                .find(d => item.quantity >= d.quantity);
                
            if (applicableDiscount) {
                itemTotal -= applicableDiscount.discount;
            }
        }
        
        return acc + itemTotal;
    }, 0);

    // Revalidação do cupom caso o subtotal mude (ex: remover itens)
    useEffect(() => {
        if (activeCoupon === 'BEARTS10' && subtotal < 50) {
            setActiveCoupon(null);
        }
    }, [subtotal, activeCoupon]);

    // Calcula o desconto do cupom sobre o subtotal
    let couponDiscountValue = 0;
    if (activeCoupon === 'BEARTS10' && subtotal >= 50) {
        couponDiscountValue = subtotal * 0.10; // 10% de desconto
    }

    const totalPrice = Math.max(0, subtotal - couponDiscountValue);

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                applyCoupon,
                removeCoupon,
                totalItems,
                totalPrice,
                discount: couponDiscountValue,
                activeCoupon,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
