import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image } from "@chakra-ui/react";
import { H1, H2, L1, Body } from "./Fonts";
import { NavLink } from "react-router-dom";

const Header = () => {

  const theme = useTheme();
  const colors = theme.styles.colors;

  return (
    <>
    <Box p={"3rem 10rem"} w={'100%'} bg={colors.bg_white}>
        <H1 text="KOTOE TAKEDA" />
        <Divider borderColor={theme.styles.colors.body} border={"0.5px solid"} />
        <Flex align={'center'} justify={'end'}>
            <HStack spacing={'5'}>
              <L1 text="About" link="/Homepage" />
              <L1 text="Projects" link="/Project" />
              <L1 text="Resume" link="/Resume" />
              <L1 text="Contact" link="/Contact" /> 
            </HStack>
        </Flex>
    </Box>
    </>
  );
}

export default Header;
