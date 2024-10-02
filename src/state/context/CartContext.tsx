import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, CartItem } from '../../models/Product';



interface CartContextProps {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
  }

  const CartContext = createContext<CartContextProps | undefined>(undefined);


  export const useCart = (): CartContextProps => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };
  
  interface CartProviderProps {
    children: ReactNode;
  }

  
  export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
    const addToCart = (product: Product) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);
        if (existingItem) {
          return prevItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prevItems, { ...product, quantity: 1 }];
      });
    };
  
    const removeFromCart = (id: number) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };
  
    const clearCart = () => {
      setCartItems([]);
    };

    const getTotalItems = (): number => {
      return cartItems.reduce((total, item) => total + item.quantity, 0);
    };
  
    return (
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getTotalItems }}>
        {children}
      </CartContext.Provider>
    );
  };