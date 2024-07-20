import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, Wrap } from "@chakra-ui/react";
import { H1, KeyProjBlock, ProjBlock } from "./Custom";
import Header from './Header';
import Footer from './Footer';

const Project = () => {

  const theme = useTheme();
  const colors = theme.colors;
  return (
    <>
    <Header />
    <Box p={"3rem 5rem"} w={'100%'} bg={colors.gradient}>
        <Flex bg={colors.white} w={'100%'} height={'fit-content'} py={"5rem"} flexDirection={'column'} justify={'center'} align={'center'}>
          <H1 text="Projects Gallery" pb={"3rem"}/>
          <Wrap>
            <KeyProjBlock title="SAQ Assistant" link="/saq-assistant" themeColor="#D6D6D6" />
            <ProjBlock title="360Med" link="/" themeColor="#D6D6D6" />
            <ProjBlock title="Healthcare Technology" link="/" themeColor="#D6D6D6" />
            <ProjBlock title="The MARTA" link="/" themeColor="#D6D6D6" />
          </Wrap>
        </Flex>
    </Box>
    <Footer />
    </>
  );
}

export default Project;
