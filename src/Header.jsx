import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider } from "@chakra-ui/react";
import { H2, L1 } from "./Custom";
import { NavLink } from "react-router-dom";

const Header = () => {
 
  const theme = useTheme();
  const colors = theme.colors;

  return (
    <>
    <Box p={"3rem 10rem"} w={'100%'} bg={colors.white}>
      <Flex justify={'space-between'} align={'baseline'}>
        <NavLink to={"/home"} textDecoration="none">
          <H2 text="KOTOE TAKEDA" color={colors.body}
            _hover={{bgGradient:"linear(to-r, #C2EDEA, #DED3DE)", bgClip:"text"}}
            
          />
        </NavLink>
        <Flex align={'center'} justify={'end'}>
            <HStack spacing={'5'}>
              <L1 text="Work" link="/home" />
              <L1 text="About" link="/about" />
              <L1 text="CV" link="/cv" />
              <L1 text="Contact" link="/contact" /> 
            </HStack>
        </Flex>
      </Flex>
      <Divider borderColor={colors.body} border={"0.5px solid"} />
    </Box>
    </>
  );
}

export default Header;
