import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";


const Header = ({ basketTotal, wishlistTotal}) => {
  return (
    <Box mb={10} 
      w="100%"       
      as="header"
      position="sticky"
      top="0"
      zIndex="1000"
      bg="white"
      p={4}
    >
      <Flex mb={10} justify="space-between" >
        <Box>
          <Heading as='h1' size='4xl' >SCHOO'S</Heading>
        </Box>

        <Flex gap={5}>
          <Flex justify="center" direction="column" align="center" gap={1}>
            <Icon boxSize={10} as={FaBasketShopping}/>
            <p>{basketTotal}</p>
          </Flex>
          <Flex justify="center" direction="column" align="center" gap={1}>
            <Icon boxSize={10} as={FaRegHeart}/>
            <p>{wishlistTotal}</p>
          </Flex>
        </Flex>
      </Flex>

    </Box>
  );
};  

export default Header;