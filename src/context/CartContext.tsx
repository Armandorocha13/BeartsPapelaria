import React, { createContext, useContext, useState, ReactNode } from 'react';

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
}

interface CartContextType {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string, paperType?: string, handleType?: string, magnetType?: string) => void;
    updateQuantity: (id: string, quantity: number, paperType?: string, handleType?: string, magnetType?: string) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (newItem: CartItem) => {
        setItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.id === newItem.id &&
                    item.paperType === newItem.paperType &&
                    item.handleType === newItem.handleType &&
                    item.magnetType === newItem.magnetType
            );
            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === newItem.id &&
                        item.paperType === newItem.paperType &&
                        item.handleType === newItem.handleType &&
                        item.magnetType === newItem.magnetType
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            }
            return [...currentItems, newItem];
        });
    };

    const removeItem = (id: string, paperType?: string, handleType?: string, magnetType?: string) => {
        setItems((currentItems) =>
            currentItems.filter(
                (item) => item.id !== id ||
                    item.paperType !== paperType ||
                    item.handleType !== handleType ||
                    item.magnetType !== magnetType
            )
        );
    };

    const updateQuantity = (id: string, newQuantity: number, paperType?: string, handleType?: string, magnetType?: string) => {
        if (newQuantity < 1) return;
        setItems((currentItems) =>
            currentItems.map((item) =>
                item.id === id &&
                    item.paperType === paperType &&
                    item.handleType === handleType &&
                    item.magnetType === magnetType
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const clearCart = () => setItems([]);

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
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
