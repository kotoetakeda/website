import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image } from "@chakra-ui/react";
import { H1, H2, L1, Body } from "./Fonts";

const Footer = () => {

  const theme = useTheme();
  const colors = theme.styles.colors;
  return (
    <>
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

export default Footer;
