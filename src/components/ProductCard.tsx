import React from "react";
import { Card, CardBody, CardFooter, Stack, Heading, Image, Text, Divider, ButtonGroup, Button, Flex, IconButton } from '@chakra-ui/react';
import { IoMdAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

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
        <Flex w="100%" justify="flex-end">
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={onBuy}>
              +
            </Button>
            <IconButton aria-label='Add to wishlist' icon={<FaRegHeart />} onClick={onAddToCart} />
          </ButtonGroup>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
