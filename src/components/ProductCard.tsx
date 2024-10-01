import React from "react";
import { Card, CardBody, CardFooter, Stack, Heading, Image, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  onBuy: () => void;       
  onAddToCart: () => void; 
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, image, onBuy, onAddToCart }) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={image}
          alt={title}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>
            {description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue' onClick={onBuy}>
            Buy now
          </Button>
          <Button variant='outline' colorScheme='blue' onClick={onAddToCart}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
