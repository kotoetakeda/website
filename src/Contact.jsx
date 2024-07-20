import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image, Input, Textarea, Button } from "@chakra-ui/react";
import { H1, H2, L1, Body } from "./Fonts";
import Header from './Header';
import Footer from './Footer';

const Contact = () => {

  const theme = useTheme();
  const colors = theme.colors;
  return (
    <>
    <Header />
    <Box p={"3rem 5rem"} w={'100%'} bg={colors.gradient}>
        <Flex bg={colors.white} w={'100%'} height={'fit-content'} py={"5rem"} flexDirection={'column'} justify={'center'} align={'center'} textAlign={'center'}>
          <H1 text="Let's Connect" pb={"1rem"}/>
          <Body text={"I would love to hear from you! Whether you want to give feedback to my work or learn more about it,"} />
          <Body text={"please reach out and I will get back to you as soon as I can. "} pb={"3rem"}/>
          <Flex width={'70%'} justify={'space-between'}>
            <Input placeholder={'Full Name'} size={"lg"} m={'3'} borderColor={colors.body} focusBorderColor={colors.cyan} />
            <Input placeholder={'Email'} size={"lg"} m={'3'} borderColor={colors.body} focusBorderColor={colors.cyan} />
          </Flex>
          <Flex width={'70%'} justify={'center'}>
            <Textarea placeholder={'Message'} size={"lg"} m={'3'} h={'30vh'} borderColor={colors.body} focusBorderColor={colors.cyan}/>
          </Flex>
          <Button bg={colors.navy} color={colors.white} px={'20'} py={'2'} m={'3'} _hover={{bg: colors.gradient, color: colors.body}}>Send</Button>
        </Flex>
    </Box>
    <Footer />
    </>
  );
}

export default Contact;
