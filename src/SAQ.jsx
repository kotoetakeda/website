import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image } from "@chakra-ui/react";
import { H1, H2, L1, Body } from "./Fonts";
import Header from './Header';
import Footer from './Footer';

const SAQ = () => {

  const theme = useTheme();
  const colors = theme.colors;
  return (
    <>
    <Header />
    <Box p={"3rem 5rem"} w={'100%'} bg={colors.gradient}>
        <Flex bg={colors.white} w={'100%'} height={'fit-content'} py={"5rem"} flexDirection={'column'} justify={'center'} align={'center'}>
          <H1 text="SAQ Assistant" pb={"3rem"}/>
          <Body text={"\"We've been waiting for a tool like this for so long! This will significantly boost our productivity!\"     - user"}/>
        </Flex>
    </Box>
    <Footer />
    </>
  );
}

export default SAQ;
