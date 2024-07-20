import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, Image } from "@chakra-ui/react";
import { H2, Body } from "./Custom";
import Header from './Header';
import Footer from './Footer';
import profile from "./image/mongo.JPG";

const Homepage = () => {

  const theme = useTheme();
  const colors = theme.colors;

  return (
    <>
    <Header />
    <Box p={"3rem 5rem"} w={'100%'} bg={colors.gradient}>
        <Box bg={colors.white} w={'100%'} display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} h={'fit-content'}>
            <Image src={profile} alt='profile image' h={'auto'} w={'auto'} gridColumn={'1 / 2'} bg="grey"></Image>
            <Flex h={'100%'} w={'100%'} gridColumn={'2 / 4'} p={"5rem"} flexDirection={'column'} align={'start'} justify={'center'}>
                <H2 text="Hello, I'm Kotoe" pb="2rem" />
                <Body 
                    text="As a software engineer, frontend developer, and UX designer, 
                    I specialize in blending technical prowess with user-centered design principles. 
                    My interdisciplinary skills enable me to foster seamless collaboration between design 
                    and development teams, driving innovation and enhancing product development processes. 
                    By crafting intuitive and efficient solutions that prioritize user experience while 
                    ensuring technical feasibility, I deliver enhanced user satisfaction and substantial 
                    value to employers." />
            </Flex>
        </Box>
    </Box>
    <Footer />
    </>
  );
}

export default Homepage;
