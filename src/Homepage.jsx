import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image } from "@chakra-ui/react";
import { H1, H2, L1, Body } from "./components";

const Homepage = () => {

  const theme = useTheme();
  const colors = theme.styles.colors;

  return (
    <>
    <Box p={"3rem 10rem"} w={'100%'} bg={colors.bg_white}>
        <H1 text="KOTOE TAKEDA" />
        <Divider borderColor={theme.styles.colors.body} border={"0.5px solid"} />
        <Flex align={'center'} justify={'end'}>
            <HStack spacing={'5'}>
                <L1 text="About" textDecoration="underline" textUnderlineOffset="0.5rem" />
                <L1 text="Projects" />
                <L1 text="Resume" />
                <L1 text="Contact" />
            </HStack>
        </Flex>
    </Box>
    <Box p={"3rem 5rem"} w={'100%'}>
        <Box bg={colors.bg_white} w={'100%'} display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'}>
            <Image src="./mongo.JPG" alt='profile image' h={'100%'} w={'100%'} gridColumn={'1 / 2'} bg="grey"></Image>
            <Box h={'100%'} w={'100%'} gridColumn={'2 / 4'} p={"5rem"}>
                <H1 text="Hello, I'm Kotoe" pb="2rem" />
                <Body 
                    text="As a software engineer, frontend developer, and UX designer, 
                    I specialize in blending technical prowess with user-centered design principles. 
                    My interdisciplinary skills enable me to foster seamless collaboration between design 
                    and development teams, driving innovation and enhancing product development processes. 
                    By crafting intuitive and efficient solutions that prioritize user experience while 
                    ensuring technical feasibility, I deliver enhanced user satisfaction and substantial 
                    value to employers." />
            </Box>
        </Box>
    </Box>
    <Box p={"3rem 5rem"} w={'100%'}>
        <Box bg={colors.bg_white} w={'100%'} display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'}>
            <Image src="./mongo.JPG" alt='profile image' h={'100%'} w={'100%'} gridColumn={'1 / 2'} bg="grey"></Image>
            <Box h={'100%'} w={'100%'} gridColumn={'2 / 4'} p={"5rem"}>
                <H1 text="Hello, I'm Kotoe" pb="2rem" />
                <Body 
                    text="As a software engineer, frontend developer, and UX designer, 
                    I specialize in blending technical prowess with user-centered design principles. 
                    My interdisciplinary skills enable me to foster seamless collaboration between design 
                    and development teams, driving innovation and enhancing product development processes. 
                    By crafting intuitive and efficient solutions that prioritize user experience while 
                    ensuring technical feasibility, I deliver enhanced user satisfaction and substantial 
                    value to employers." />
            </Box>
        </Box>
    </Box>
    <Flex p={'0.5rem 10rem'} w={'100%'} bg={colors.bg_white} align={'baseline'} position={'sticky'} bottom={'0'}>
        <Flex justify={'space-between'} align={'baseline'}  w={'50%'}> 
            <Text fontSize={'lg'} fontWeight={'900'}>KOTOE TAKEDA</Text>
            <Text fontSize={'sm'}>ktakeda3@gatech.edu</Text>
            <Text fontSize={'sm'}>kotoetakeda</Text>
            <Text fontSize={'sm'}>kotoetakeda</Text>
        </Flex>
        <Flex w={'50%'} justify={'end'}>
            <Text fontSize={"xs"}> 2024 Kotoe Takeda. All Copyright Reserved.</Text>
        </Flex>
    </Flex>
    </>
  );
}

export default Homepage;
