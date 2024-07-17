import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image, Icon } from "@chakra-ui/react";
import { H1, H2, L1, Body } from "./Fonts";
import { customTheme } from "./index";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {

  const theme = useTheme();
  const colors = theme.colors;
  return (
    <>
    <Flex p={'0.5rem 10rem'} w={'100%'} bg={colors.bg_white} align={'baseline'}>
        <Flex align={'center'}  justify={'space-between'} w={'50%'}>  
          <Text fontSize={'lg'} fontWeight={'900'}>KOTOE TAKEDA</Text>
          <Flex justify={'space-between'} align={'center'} w={'70%'}>
            <a href="mailto:ktakeda3@gatech.edu" target="_blank">
              <Flex gap="0.5rem" align={'center'}>
                <Icon as={MdEmail} boxSize={4}/>
                <Text fontSize={'sm'}>ktakeda3@gatech.edu</Text>
              </Flex>
            </a>

            <a href="https://www.linkedin.com/in/kotoetakeda/" target="_blank">
              <Flex gap="0.5rem" align={'center'}>
                <Icon as={FaLinkedin} boxSize={4}/>
                <Text fontSize={'sm'}>kotoetakeda</Text>
              </Flex>
            </a>

            <a href="https://github.com/kotoetakeda" target="_blank">
              <Flex gap="0.5rem" align={'center'}>
                <Icon as={FaGithubSquare} boxSize={4}/>
                <Text fontSize={'sm'}>kotoetakeda</Text>
              </Flex>
            </a>
          </Flex>
        </Flex>
        <Flex w={'50%'} justify={'end'}>
            <Text fontSize={"xs"}> 2024 Kotoe Takeda. All Copyrights Reserved.</Text>
        </Flex>
    </Flex>
    </>
  );
}

export default Footer;
