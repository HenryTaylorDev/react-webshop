import React, { createContext, useContext, useState } from 'react';
import { Product } from '../../models/Product';

// Define the type for the context
interface ProductModalContextType {
  selectedProduct: Product | null;
  selectProduct: (product: Product) => void;
  clearProduct: () => void;
}

// Create the context with a default value of null
const SelectedProductContext = createContext<ProductModalContextType | null>(null);

// Custom hook to use the context
export const useSelectedProduct = () => {
  const context = useContext(SelectedProductContext);
  if (!context) {
    throw new Error('useSelectedProduct must be used within a SelectedProductProvider');
  }
  return context;
};

// Provider component
export const SelectedProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const selectProduct = (product: Product) => setSelectedProduct(product);
  const clearProduct = () => setSelectedProduct(null);

  return (
    <SelectedProductContext.Provider value={{ selectedProduct, selectProduct, clearProduct }}>
      {children}
    </SelectedProductContext.Provider>
  );
};
