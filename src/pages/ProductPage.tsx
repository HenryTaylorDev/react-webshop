import React from 'react';
import { useCart } from '../state/context/CartContext.tsx';
import { products } from '../data/Products.ts'; // Ensure this path points to your mock data
import ProductList from '../features/ProductList/ProductList.tsx';
import { Flex } from '@chakra-ui/react';
import Header from '../components/Header.tsx';

const ProductPage = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <Header />
      <Flex justify="center" align="center" >
        <ProductList products={products} addToCart={addToCart} />
      </Flex>
    </div>
  );
};

export default ProductPage;
