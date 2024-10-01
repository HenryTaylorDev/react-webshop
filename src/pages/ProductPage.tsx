import React from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../state/context/CartContext';

const ProductPage = ({ product }) => {
  const { addToCart } = useCart();


  return (
    <div>
      <ProductCard
        title="Shoes"
        description="some stuff"
        price={10}
        image="..."
        onBuy={() => {}}
        onAddToCart={() => addToCart(product)}
      />
    </div>
  );
};
export default ProductPage;

