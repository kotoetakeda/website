import React from "react";
import { useTheme, Box, Flex, UnorderedList, ListItem, Wrap } from "@chakra-ui/react";
import { H1, H3, Body, CVBlock, SvgIcon, ReactIcon } from "./Custom";
import Header from './Header';
import Footer from './Footer';
import { SiFlask, SiMural, SiCodepen } from "react-icons/si";
import { CgMaze } from "react-icons/cg";
import { ReactComponent as Next } from './icons/nextjs-icon.svg';
import { ReactComponent as ReactSvg } from './icons/react.svg';
import { ReactComponent as Node } from './icons/nodejs.svg';
import { ReactComponent as Angular } from './icons/angular-icon.svg';
import { ReactComponent as AWS } from './icons/aws.svg';
import { ReactComponent as Bootstrap } from './icons/bootstrap.svg';
import { ReactComponent as Cplusplus } from './icons/c-plusplus.svg';
import { ReactComponent as C } from './icons/c.svg';
import { ReactComponent as CSS } from './icons/css-3.svg';
import { ReactComponent as D3 } from './icons/d3.svg';
import { ReactComponent as Docker } from './icons/docker-icon.svg';
import { ReactComponent as Figma } from './icons/figma.svg';
import { ReactComponent as HTML } from './icons/html-5.svg';
import { ReactComponent as Java } from './icons/java.svg';
import { ReactComponent as JS } from './icons/javascript.svg';
import { ReactComponent as Jira } from './icons/jira.svg';
import { ReactComponent as MySQL } from './icons/mysql-icon.svg';
import { ReactComponent as Python } from './icons/python.svg';
import { ReactComponent as Swift } from './icons/swift.svg';
import { ReactComponent as Tableau } from './icons/tableau-icon.svg';
import { ReactComponent as Typescript } from './icons/typescript-icon.svg';

const CV = () => {
  const theme = useTheme();
  const colors = theme.colors;
  
  return (
    <>
      <Header />
      <Box p={"3rem 5rem"} w={'100%'} bg={colors.gradient}>
        <Flex bg={colors.white} w={'100%'} height={'fit-content'} py={"5rem"} flexDirection={'column'} justify={'center'} align={'center'}>
          <H1 text="Curriculum Vitae" pb={"3rem"} />
          
          <Box w={"90%"} bg={colors.gray} p={"2rem"}>
            <H3 text={'SKILLS'} mb={"2rem"} />
            <Body text={'Technical Skills: '}/>
            <Wrap spacing={'3'} my={'5'}>
              {/* Programming */}
              <SvgIcon as={Python} label={'Python'} />
              <SvgIcon as={JS} label={'JavaScript'} />
              <SvgIcon as={Java} label={'Java'} />
              <SvgIcon as={Cplusplus} label={'C++'} />
              <SvgIcon as={C} label={'C'} />
              <SvgIcon as={Typescript} label={'TypeScript'} />
              <SvgIcon as={Swift} label={'Swift'} />
              {/* Web Development */}
              <SvgIcon as={HTML} label={'HTML'} />
              <SvgIcon as={CSS} label={'CSS'} />
              <SvgIcon as={Next} label={'Next.js'} />
              <SvgIcon as={ReactSvg} label={'React'} />
              <SvgIcon as={Bootstrap} label={'Bootstrap'} />
              {/* <SvgIcon as={SiChakraui} label={'Chakra UI'} /> */}
              <SvgIcon as={Angular} label={'Angular'} />
              <SvgIcon as={Node} label={'Node.js'} />
              <SvgIcon as={D3} label={'D3.js'} />
              <ReactIcon as={SiFlask} label={'Flask'} />
              {/* Database */}
              <SvgIcon as={MySQL} label={'MySQL'} /> 
            </Wrap>

            <Body text={'Software and Tools: '}/>
            <Wrap spacing={'3'} my={'5'}>
              {/* Cloud */}
              <SvgIcon as={AWS} label={'AWS'} />
              {/* DevOps and Tools */}
              <SvgIcon as={Docker} label={'Docker'} />
              <SvgIcon as={Jira} label={'Jira'} />
              {/* Design and Prototyping */}
              <SvgIcon as={Figma} label={'Figma'} />
              <ReactIcon as={SiMural} label={'Mural'} />
              <ReactIcon as={SiCodepen} label={'Codepen'} />
              {/* Data Visualization */}
              <SvgIcon as={Tableau} label={'Tableau'} />
              {/* UX related */}
              <ReactIcon as={CgMaze} label={'Maze'} />
            </Wrap>
          </Box>

          <Box w={"90%"} bg={colors.gray} p={"2rem"} mt={"4rem"}>
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
              }
            />
          </Box>

          <Box w={"90%"} bg={colors.gray} p={"2rem"} mt={"4rem"}>
            <H3 text={'WORK EXPERIENCES'} mb={"2rem"} />
            <CVBlock
              company={"Insight Enterprises"} 
              location={'Chandler, AZ (Remote)'} 
              position={'UX Developer Intern'} 
              time={'June 2024 - Aug 2024'} 
              description={
                <UnorderedList>
                  <ListItem>Spearheaded the user experience design for a generative AI chatbot, improving user satisfaction scores by 30% through intuitive interface design and streamlined user flows.</ListItem>
                  <ListItem>Conducted extensive user research and usability testing that led to a 40% reduction in user errors and a 20% increase in task completion rates.</ListItem>
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
                  <ListItem>Spearheaded the frontend team in the development of a new client-requested feature that works with multi-page interaction, database, and the creation of new user interface on ML model training and data analysis pages.</ListItem>
                  <ListItem>Migrated current framework used in the front-end (JS and Flask+HTML) to React-based framework with aim to increase efficiency and flexibility for developers.</ListItem>
                  <ListItem>Utilized PyTest and Cypress to write end-to-end tests and unit tests.</ListItem>
                  <ListItem>Enhanced performance of the cloud-based software platform by refactoring code using JavaScript, Python (pandas, numpy), and Flask+HTML.</ListItem>
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
                  <ListItem>Contributed 1000+ lines of code on AWS Lambda using Python and MySQL for the company’s website and mobile app, enabling the implementation of 10 new user features.</ListItem>
                  <ListItem>Optimized RAM usage of a standalone project by 50% through modifying existing Python and MySQL code.</ListItem>
                  <ListItem>Standardized all lambda and gateway responses of REST API endpoints on API Gateway to give developers and users uniform client error responses.</ListItem>
                  <ListItem>Maintained and updated a real-time relational database while enhancing the schema design using MySQL.</ListItem>
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
