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
    <Box p={"3rem 5rem"} w={'100%'} bg={colors.gradient}>
        <Flex bg={colors.white} w={'100%'} height={'fit-content'} py={"5rem"} flexDirection={'column'} justify={'center'} align={'center'}>
          <H1 text="Projects Gallery" pb={"3rem"}/>
          <Box1 image={profile} alt="temporary" width="80%" title="SAQ Assistant" link="/saq-assistant" />
          <Box2 image={profile} alt="temporary" width="80%" title="360Med" />
          <Box1 image={profile} alt="temporary" width="80%" title="Healthcare Technology" />
        </Flex>
    </Box>
    <Footer />
    </>
  );
}

export default Project;
