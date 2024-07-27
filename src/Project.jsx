import React, { useEffect } from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex } from "@chakra-ui/react";
import { H1, ProjBlock, SkillTag } from "./Custom";
import Header from './Header';
import Footer from './Footer';
import SAQAssistantCover from './image/medCover.png';
import MedCover from './image/medCover.png';
import HTCover from './image/medCover.png';
import MartaCover from './image/medCover.png';

const Project = () => {

  const theme = useTheme();
  const colors = theme.colors;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <SkillTag label={'UX Research'} bg={colors.mauve} />
              <SkillTag label={'UI Design'} bg={colors.cyan} />
              <SkillTag label={'Frontend Development'} bg={colors.white} border={'1px solid rgba(0, 0, 0, 0.1)'} />
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
              <SkillTag label={'UX Research'} bg={colors.mauve} />
              <SkillTag label={'UI Design'} bg={colors.cyan} />
              <SkillTag label={'Frontend Development'} bg={colors.white} border={'1px solid rgba(0, 0, 0, 0.1)'} />
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
              <SkillTag label={'UX Research'} bg={colors.mauve} />
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
              <SkillTag label={'UX Research'} bg={colors.mauve} />
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
