import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image } from "@chakra-ui/react";
import { H1, H2, L1, Body } from "./Fonts";
import Header from './Header';
import Footer from './Footer';

const Resume = () => {

  const theme = useTheme();
  const colors = theme.colors;
  return (
    <>
    <Header />
    <Box p={"3rem 5rem"} w={'100%'}>
        <Flex bg={colors.bg_white} w={'100%'} height={'fit-content'} py={"5rem"} flexDirection={'column'} justify={'center'} align={'center'}>
          <H1 text="Resume" pb={"3rem"}/>
        </Flex>
    </Box>
    <Footer />
    </>
  );
}

export default Resume;
