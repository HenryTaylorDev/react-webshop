import React from "react";
import { Card, CardBody, CardFooter, Stack, Heading, Image, Text, Divider, ButtonGroup, Button, Flex, IconButton } from '@chakra-ui/react';
import { FaRegHeart } from "react-icons/fa";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  isWishlisted: boolean;
  onOpen: () => void;
  onAddToCart: () => void;
  onToggleWishlist: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, image, isWishlisted, onOpen, onAddToCart, onToggleWishlist }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">${price}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex w="100%" justify="flex-end">
          <ButtonGroup spacing="2">
            <Button variant="outline"  size='sm' onClick={onAddToCart}>
              Add to Basket
            </Button>
            <Button  size='sm' onClick={onOpen}>Details</Button>
            <IconButton
              aria-label="Toggle wishlist"
              icon={<FaRegHeart />}
               size='sm'
              onClick={onToggleWishlist}
              colorScheme={isWishlisted ? "red" : "gray"} // Change color if wishlisted
            />
          </ButtonGroup>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
