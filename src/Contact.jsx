import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image } from "@chakra-ui/react";
import { H1, H2, L1, Body } from "./Fonts";
import Header from './Header';
import Footer from './Footer';

const Contact = () => {

  const theme = useTheme();
  const colors = theme.styles.colors;
  return (
    <>
    <Header />
    <Flex>Hi</Flex>
    <Footer />
    </>
  );
}

export default Contact;
