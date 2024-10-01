import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";


const Header = () => {
  return (
    <Flex mb={10} justify="center">
      <Heading as='h1' size='4xl' >Shoe Shop</Heading>
    </Flex>
  );
};  

export default Header;