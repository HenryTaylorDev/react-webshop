import React, { useState } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import ProductCard from "../../components/ProductCard.tsx";
import ProductModal from "../../components/ProductModal.tsx";
import { Product } from "../../models/Product.ts";

const ProductList = ({ products, addToCart, isProductInWishlist, toggleWishlist }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    onOpen(); 
  };

  return (
    <>
      <Flex wrap="wrap" justify="center" flexWrap="wrap" gap="12">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            isWishlisted={isProductInWishlist(product.id)}
            onOpen={() => handleOpenModal(product)}
            onAddToCart={() => addToCart(product)}
            onToggleWishlist={() => toggleWishlist(product)} 
          />
        ))}
      </Flex>

      {selectedProduct && (
        <ProductModal
          isOpen={isOpen}
          onClose={onClose}
          product={selectedProduct}
        />
      )}
    </>
  );
};

export default ProductList;
