import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex } from "@chakra-ui/react";
import { H1, ProjBlock, SvgIcon, ReactIcon } from "./Custom";
import Header from './Header';
import Footer from './Footer';
import Icons from './Icons';
import SAQAssistantCover from './image/medCover.png';
import MedCover from './image/medCover.png';
import HTCover from './image/medCover.png';
import MartaCover from './image/medCover.png';

const Project = () => {

  const theme = useTheme();
  const colors = theme.colors;
  return (
    <>
    <Header />
    <Box p={"3rem 5rem"} w={'100%'} bg={colors.gradient}>
      <Flex bg={colors.white} w={'100%'} height={'fit-content'} py={"5rem"} flexDirection={'column'} justify={'center'} align={'center'}>
        <H1 text="Projects Gallery" pb={"3rem"}/>
          <ProjBlock 
            title="SAQ Assistant" 
            link="/saq-assistant" 
            themeColor="#D6D6D6"
            desc={"A RAG-based generative AI chatbot"}
            skills={ 
              <>
              <SvgIcon as={Icons.Python} label={'Python'} />
              <SvgIcon as={Icons.JS} label={'JavaScript'} />
              <SvgIcon as={Icons.HTML} label={'HTML'} />
              <SvgIcon as={Icons.CSS} label={'CSS'} />
              <SvgIcon as={Icons.ReactSvg} label={'React'} />
              <SvgIcon as={Icons.Node} label={'Node.js'} />
              <ReactIcon as={Icons.Flask} label={'Flask'} />
              </>
            } 
            image={SAQAssistantCover}
          />
          <ProjBlock 
            title="360Med" 
            link="/360med" 
            themeColor="#D6D6D6" 
            image={MedCover} 
            desc={"A web application for medical databases"}
            skills={ 
              <>
              <SvgIcon as={Icons.Python} label={'Python'} />
              <SvgIcon as={Icons.JS} label={'JavaScript'} />
              <SvgIcon as={Icons.HTML} label={'HTML'} />
              <SvgIcon as={Icons.CSS} label={'CSS'} />
              <SvgIcon as={Icons.ReactSvg} label={'React'} />
              <SvgIcon as={Icons.Node} label={'Node.js'} />
              <ReactIcon as={Icons.Flask} label={'Flask'} />
              </>
            }
          />
          <ProjBlock 
            title="Healthcare Technology" 
            link="/healthcare-technology" 
            themeColor="#D6D6D6" 
            image={HTCover} 
            desc={"A color-changing LED light to prevent hospital waste"}
            skills={ 
              <>
              <SvgIcon as={Icons.Python} label={'Python'} />
              <SvgIcon as={Icons.JS} label={'JavaScript'} />
              <SvgIcon as={Icons.HTML} label={'HTML'} />
              <SvgIcon as={Icons.CSS} label={'CSS'} />
              <SvgIcon as={Icons.ReactSvg} label={'React'} />
              <SvgIcon as={Icons.Node} label={'Node.js'} />
              <ReactIcon as={Icons.Flask} label={'Flask'} />
              </>
            }
          />
          <ProjBlock 
            title="The MARTA" 
            link="/marta" 
            themeColor="#D6D6D6" 
            image={MartaCover} 
            desc={"Research into the MARTA System"}
            skills={ 
              <>
              <SvgIcon as={Icons.Python} label={'Python'} />
              <SvgIcon as={Icons.JS} label={'JavaScript'} />
              <SvgIcon as={Icons.HTML} label={'HTML'} />
              <SvgIcon as={Icons.CSS} label={'CSS'} />
              <SvgIcon as={Icons.ReactSvg} label={'React'} />
              <SvgIcon as={Icons.Node} label={'Node.js'} />
              <ReactIcon as={Icons.Flask} label={'Flask'} />
              </>
            }
          />
      </Flex>
    </Box>
    <Footer />
    </>
  );
}

export default Project;
