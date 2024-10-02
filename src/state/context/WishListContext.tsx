import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product } from '../../models/Product';

interface WishlistContextProps {
  wishlistItems: CartItem[];
  toggleWishlist: (product: Product) => void;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextProps | undefined>(undefined);

export const useWishlist = (): WishlistContextProps => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState<CartItem[]>([]);

  const toggleWishlist = (product: Product) => {
    setWishlistItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If the product is already in the wishlist, remove it
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        // If the product is not in the wishlist, add it
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
