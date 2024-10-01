import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';

import { CartProvider } from './state/context/CartContext.tsx';
import HomePage from './pages/HomePage.tsx';
import CartPage from './pages/CartPage.tsx';
import ProductPage from './pages/ProductPage.tsx';

function App() {
  return (
    <ChakraProvider>
      <CartProvider>
        <Box p="6">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </Router>
        </Box>
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
// Use Chakra UI for component design
// For state management, use Recoil or Context API

// Features
// 1. User can add product to basket or wishlist
// 2. User can remove product from basket or wishlist
// 3. User can view their basket or wishlist
// 4. User can view all products
// 5. User can view product details
// 6. User can search for products

// Pages
// 1. Homepage
// 2. Products Page
// 3. Product Details Page
// 4. Basket Page
// 5. Wishlist Page
// 6. Payment Page
// 7. Order Confirmation Page
