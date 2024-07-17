import React from "react";
import { textDecoration, useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image } from "@chakra-ui/react";
import { H1, H2, H3, L1, Body } from "./Fonts";
import Header from './Header';
import Footer from './Footer';

const Resume = () => {

  const theme = useTheme();
  const colors = theme.colors;
  return (
    <>
    <Header />
    <Box p={"3rem 5rem"} w={'100%'}>
        <Flex bg={colors.bg_white} w={'100%'} height={'fit-content'} py={"5rem"} flexDirection={'column'} justify={'center'} align={'center'}>
          <H1 text="Resume" pb={"3rem"} />
          <Box w={"90%"} bg={colors.bg_gray} p={"2rem"}>
            <H3 text={'EDUCATION'} />
            <Box display={'grid'} gridTemplateColumns={'repeat(2, 35% 65%)'}>
              <Flex borderRight={'1px solid'} borderRightColor={colors.lines} my={"2rem"} p={"1rem"} justify={'right'} align={'top'} flexDirection={'column'} textAlign={'right'}>
                <L1 text={'Georgia Institute of Technology'} fontWeight={'700'}/>
                <Body text={'Atlanta, GA'} />
              </Flex>
              <Flex m={"2rem"} p={"1rem"} align={'top'} flexDirection={'column'}>
                <Body text="UX Developer Intern" fontWeight={'700'}  />
                <Text fontSize={'md'} m={'1'} >Jun 2024 - Aug 2024</Text>
                <Body my={'5'} mx={'1'}
                  text={'Apple Music Human Eval Lead\nCollaborating with cross-functional teams to test Apple Music search features before A/B testing: setting launch criteria, creating statistically significant evaluation input sets, analyzing human annotated data for loss patterns, automating available testing with Python, and providing final launch decision reports\nWorked proactively with acquired Primephonic team and created an evaluation for search of Apple Music Classical: used 700 classical search queries from Apple Music, created rating guidelines based on product requirements to ensure high search quality before the launch of the app worldwide (2023) and in Asia (2024)\/Created an evaluation for Similar Artists feature to test the new model before launch, analyzed over 1500 artist pairs, collected 4500 ratings, conducted statistical analysis on wins and losses of the models'} />
              </Flex>
            </Box>
          </Box>
        </Flex>
    </Box>
    <Footer />
    </>
  );
}

export default Resume;
