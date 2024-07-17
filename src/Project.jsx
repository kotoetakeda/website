import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image } from "@chakra-ui/react";
import { H1, H2, L1, Body, Box1, Box2 } from "./Fonts";
import Header from './Header';
import Footer from './Footer';
import profile from "./mongo.JPG";

const Project = () => {

  const theme = useTheme();
  const colors = theme.colors;
  return (
    <>
    <Header />
    <Box p={"3rem 5rem"} w={'100%'}>
        <Flex bg={colors.bg_white} w={'100%'} height={'fit-content'} py={"5rem"} flexDirection={'column'} justify={'center'} align={'center'}>
          <H1 text="Projects Gallery" pb={"3rem"}/>
          <Box1 image={profile} alt="temporary" width="80%" />
          <Box2 image={profile} alt="temporary" width="80%" />
          <Box1 image={profile} alt="temporary" width="80%" />
        </Flex>
    </Box>
    <Footer />
    </>
  );
}

export default Project;
