import React, { useEffect } from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, Image } from "@chakra-ui/react";
import { H2, Body } from "./Custom";
import Header from './Header';
import Footer from './Footer';
import profile from "./image/mongo.JPG";

const Homepage = () => {

  const theme = useTheme();
  const colors = theme.colors;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Header />
    <Box p={"3rem 5rem"} w={'100%'} bg={colors.gradient}>
        <Box bg={colors.white} w={'100%'} display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} h={'fit-content'}>
            <Image src={profile} alt='profile image' h={'auto'} w={'auto'} gridColumn={'1 / 2'} bg="grey"></Image>
            <Flex h={'100%'} w={'100%'} gridColumn={'2 / 4'} p={"5rem"} flexDirection={'column'} align={'start'} justify={'center'}>
                <H2 text="About Me" />
                <Body pt={"1rem"}
                    text="I am a 4th-year Computer Science undergraduate at Georgia Tech, specializing in People and Media. I have hands-on experience as a Backend, Frontend, and Full Stack developer, as well as a UI/UX designer." />
                <Body pt={"1rem"}
                    text="My greatest motivation comes from listening 
                    to users’ needs and their requests for improvements, and there’s nothing more rewarding than hearing their words 
                    of satisfaction afterward. I am constantly driven by a desire to learn and grow, always seeking out new knowledge 
                    and innovative ways to enhance my skills both as a designer and a developer." />
            </Flex>
        </Box>
    </Box>
    <Footer />
    </>
  );
}

export default Homepage;
