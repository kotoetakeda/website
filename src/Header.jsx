import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image } from "@chakra-ui/react";
import { H1, H2, L1, Body } from "./Fonts";
import { NavLink } from "react-router-dom";

const Header = () => {

  const theme = useTheme();
  const colors = theme.colors;

  return (
    <>
    <Box p={"3rem 10rem"} w={'100%'} bg={colors.bg_white}>
        <H1 text="KOTOE TAKEDA" />
        <Divider borderColor={colors.body} border={"0.5px solid"} />
        <Flex align={'center'} justify={'end'}>
            <HStack spacing={'5'}>
              <L1 text="About" link="/home" />
              <L1 text="Projects" link="/project" />
              <L1 text="Resume" link="/resume" />
              <L1 text="Contact" link="/contact" /> 
            </HStack>
        </Flex>
    </Box>
    </>
  );
}

export default Header;