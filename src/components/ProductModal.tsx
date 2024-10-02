import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Heading, ButtonGroup, IconButton, Text } from '@chakra-ui/react';
import { Product } from '../models/Product';
import { FaRegHeart } from 'react-icons/fa';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  isWishlisted: boolean;
  onAddToCart: () => void;
  onToggleWishlist: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product, isWishlisted, onAddToCart, onToggleWishlist  }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{product.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody >
          <img src={product.image} alt={product.name} style={{ width: "100%" }} />
          <Heading as='h5' size='sm' pb={1}>
            Description
          </Heading>
          <Text pb={2}>{product.description}</Text>
          <Text as='b'>£{product.price}</Text>
        </ModalBody>
        <ModalFooter>
        <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue" onClick={onAddToCart}>
              +
            </Button>
            <IconButton
              aria-label="Toggle wishlist"
              icon={<FaRegHeart />}
              onClick={onToggleWishlist}
              colorScheme={isWishlisted ? "red" : "gray"} 
            />
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
