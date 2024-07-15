import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image } from "@chakra-ui/react";
import { H1, H2, L1, Body, ProjectBox } from "./Fonts";
import Header from './Header';
import Footer from './Footer';
import profile from "./mongo.JPG";

const Project = () => {

  const theme = useTheme();
  const colors = theme.colors;
  return (
    <>
    <Header />
    <Box p={"7rem 10rem"} w={'100%'} bg={theme.colors.gradient}>
        <ProjectBox image={profile} alt="temporary" />
    </Box>
    <Footer />
    </>
  );
}

export default Project;
