import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image } from "@chakra-ui/react";
import { H1, H2, L1, Body } from "./Fonts";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage';
import {CV} from './CV';
import Resume from './Resume';
import Contact from './Contact';

const Header = () => {

  const theme = useTheme();
  const colors = theme.styles.colors;
  return (
    <>
    <Box p={"3rem 10rem"} w={'100%'} bg={colors.bg_white}>
        <H1 text="KOTOE TAKEDA" />
        <Divider borderColor={theme.styles.colors.body} border={"0.5px solid"} />
        <Flex align={'center'} justify={'end'}>
            <HStack spacing={'5'}>
              <L1 text="About" link="/Homepage" />
              <L1 text="CV" link="/CV" />
              <L1 text="Resume" link="/Resume" />
              <L1 text="Contact" link="/Contact" />
              <Routes>
                <Route path="/Homepage" element={<Homepage />} />
                <Route path="/CV" element={<CV />} />
                <Route path="/Resume" element={<Resume />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </HStack>
        </Flex>
    </Box>
    </>
  );
}

export default Header;
