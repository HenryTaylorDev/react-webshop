import React, { useState } from "react";
import { Flex, Button, useDisclosure, Box, Spinner } from "@chakra-ui/react";

import ProductCard from "../../components/ProductCard.tsx";
import ProductModal from "../../components/ProductModal.tsx";
import { Product } from "../../models/Product.ts";

const ProductList = ({ products, addToCart, isProductInWishlist, toggleWishlist }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(false); 

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleShowMore = () => {
    setLoading(true); 
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 4);
      setLoading(false); 
    }, 1000); 
  };
  return (
    <>
    <Box>
      <Flex wrap="wrap" justify="center" flexWrap="wrap" gap="12">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            onOpen={() => handleOpenModal(product)}
            isWishlisted={isProductInWishlist(product.id)}
            onAddToCart={() => addToCart(product)}
            onToggleWishlist={() => toggleWishlist(product)} 
          />
        ))}
      </Flex>
      {visibleCount < products.length && (
          <Flex justify="center" mt="12" flexDirection="column" alignItems="center">
            {loading ? (
              <Spinner size="lg" />
            ) : (
              <Button size="lg" onClick={handleShowMore}>Show More</Button>
            )}
          </Flex>
        )}
    </Box>

      {selectedProduct && (
        <ProductModal
          isOpen={isOpen}
          onClose={onClose}
          product={selectedProduct}
          isWishlisted={isProductInWishlist(selectedProduct.id)}
          onAddToCart={() => addToCart(selectedProduct)}
          onToggleWishlist={() => toggleWishlist(selectedProduct)} 
        />
      )}


    </>
  );
};

export default ProductList;
