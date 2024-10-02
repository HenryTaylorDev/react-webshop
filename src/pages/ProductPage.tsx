import React from 'react';
import { useCart } from '../state/context/CartContext.tsx';
import { products } from '../data/Products.ts'; // Ensure this path points to your mock data
import ProductList from '../features/ProductList/ProductList.tsx';
import { Flex, useToast } from '@chakra-ui/react';
import Header from '../components/Header.tsx';
import { SelectedProductProvider } from '../state/context/ProductModalContext.tsx';
import { useWishlist } from '../state/context/WishListContext.tsx';

const ProductPage = () => {
  const { addToCart, getTotalItems } = useCart();
  const { wishlistItems, toggleWishlist } = useWishlist();
  const toast = useToast();

  const totalItems = getTotalItems(); 

  const registerCartAddition = (product) => {
    addToCart(product);

    toast({
      title: "Item added to cart",
      description: `${product.name} was added to your cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const isProductInWishlist = (productId: number) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  return (
    <div>
      <Header basketTotal={totalItems} wishlistTotal={wishlistItems.length} />
      <Flex justify="center" align="center">
        <SelectedProductProvider>
          <ProductList 
            products={products} 
            addToCart={registerCartAddition}
            isProductInWishlist={isProductInWishlist} 
            toggleWishlist={toggleWishlist} 
          />
        </SelectedProductProvider>
      </Flex>
    </div>
  );
};

export default ProductPage;
