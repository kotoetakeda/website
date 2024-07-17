import React from "react";
import { textDecoration, useTheme } from "@chakra-ui/react"; 
import { Box, Flex, HStack, Divider, Text, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import { H1, H2, H3, L1, Body, CVBlock } from "./Fonts";
import Header from './Header';
import Footer from './Footer';

const CV = () => {

  const theme = useTheme();
  const colors = theme.colors;
  return (
    <>
    <Header />
    <Box p={"3rem 5rem"} w={'100%'}>
        <Flex bg={colors.bg_white} w={'100%'} height={'fit-content'} py={"5rem"} flexDirection={'column'} justify={'center'} align={'center'}>
          <H1 text="Curriculum Vitae" pb={"3rem"} />
          <Box w={"90%"} bg={colors.bg_gray} p={"2rem"}>
            <H3 text={'EDUCATION'} mb={"2rem"} />
            <CVBlock
              company={"Georgia Institute of Technology"} 
              location={'Atlanta, GA'} 
              position={'Bachelor of Science in Computer Science'} 
              time={'Graduation: May 2025'} 
              description={
                <UnorderedList>
                  <ListItem>Dean's List</ListItem>
                  <ListItem>Coursework:</ListItem>
                  <UnorderedList>
                    <ListItem>Object-Oriented Programming</ListItem>
                    <ListItem>Data Structure and Algorithms</ListItem>
                    <ListItem>Computer Graphics</ListItem>
                    <ListItem>Statistics and Probability</ListItem>
                    <ListItem>Information Visualization</ListItem>
                    <ListItem>Software Development Life Cycle</ListItem>
                    <ListItem>Database Systems</ListItem>
                    <ListItem>Artificial Intelligence</ListItem>
                  </UnorderedList>
                </UnorderedList>
              }/>
          </Box>
          <Box w={"90%"} bg={colors.bg_gray} p={"2rem"} mt={"4rem"}>
            <H3 text={'WORK EXPERIENCES'} mb={"2rem"}/>
            <CVBlock
              company={"Insight Enterprises"} 
              location={'Chandler, AZ (Remote)'} 
              position={'UX Developer Intern'} 
              time={'June 2024 - Aug 2024'} 
              description={
                <UnorderedList>
                  <ListItem>Spearheaded the user experience design for a generative AI chatbot, improving user 
                            satisfaction scores by 30% through intuitive interface design and streamlined user flows</ListItem>
                  <ListItem>Conducted extensive user research and usability testing that lead to a 40% reduction in 
                            user errors and a 20% increase in task completion rates</ListItem>
                </UnorderedList>
              }
            />

            <CVBlock
              company={"Matmerize Inc."} 
              location={'Atlanta, GA'} 
              position={'Full Stack Developer Intern'} 
              time={'Jan 2024 - May 2024'} 
              description={
                <UnorderedList>
                  <ListItem>Spearheading the frontend team in the development of a new client-requested feature 
                            that works with multi-page interaction, database, and the creation of new user interface 
                            on ML model training and data analysis pages</ListItem>
                  <ListItem>Migrating current framework used in the front-end (JS and Flask+HTML) to React based framework 
                            with aim to increase efficiency and flexibility for developers</ListItem>
                  <ListItem>Utilized PyTest and Cypress to write end-to-end tests and unit tests</ListItem>
                  <ListItem>Enhanced performance of the cloud-based software platform by refactoring code using Javascript, 
                            Python (pandas, numpy), and Flask+HTML</ListItem>
                </UnorderedList>
              }
            />

            <CVBlock
              company={"InstaHub"} 
              location={'Philadelphia, PA (Remote)'} 
              position={'Software Engineer Intern'} 
              time={'June 2022 - Oct 2022'} 
              description={
                <UnorderedList>
                  <ListItem>Contributed 1000+ lines of code on AWS Lambda using Python and MySQL for the company’s website 
                            and mobile app, enabling the implementation of 10 new user features</ListItem>
                  <ListItem>Optimized RAM usage of a standalone project by 50% through modifying existing Python and MySQL code</ListItem>
                  <ListItem>Standardized all lambda and gateway responses of REST API endpoints on API Gateway to 
                            give developers and users uniform client error responses</ListItem>
                  <ListItem>Maintained and updated a real-time relational database while enhancing the schema design using MySQL</ListItem>
                </UnorderedList>
              }
            />
          </Box>
        </Flex>
    </Box>
    <Footer />
    </>
  );
}

export default CV;
