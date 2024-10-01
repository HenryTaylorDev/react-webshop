import React from "react";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import ProductCard from "../../components/ProductCard.tsx";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  
} from '@chakra-ui/react'

const ProductList = ({ products, addToCart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex wrap="wrap" justify="center" flexWrap="wrap" gap="6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
          onBuy={() => {
            console.log(`Buying ${product.name}`);
          }}
          onAddToCart={() => addToCart(product)}
        />
      ))}

<Button onClick={onOpen}>Open Modal</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <p>efegeg</p>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost'>Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </Flex>
  );
};

export default ProductList;
