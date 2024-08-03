import React, { useEffect } from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { H1, ProjBlock, SkillTag } from "./Custom";
import Header from './Header';
import Footer from './Footer';
import SAQCover from './image/SAQCover.png';
import medCover from './image/medCover.png';

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
        {/* <SimpleGrid columns={2}>  */}
            <ProjBlock 
              title="SAQ Assistant" 
              link="/saq-assistant"
              themeColor={"linear-gradient(45deg, rgba(174, 10, 70, 0.8) 0%, rgba(168, 11, 110, 0.8) 30%, rgba(88, 40, 115, 0.8) 75%)"}
              darkMode={true}
              date={"Jun 2024 - Aug 2024"}
              desc={"A RAG-based generative AI chatbot web application"}
              skills={
                <>
                <SkillTag label={'UX Research'} bg={colors.mauve} />
                <SkillTag label={'UI Design'} bg={colors.cyan} />
                <SkillTag label={'Frontend Development'} bg={colors.white} border={'1px solid rgba(0, 0, 0, 0.1)'} />
                </>
              } 
              image={SAQCover}
            />
            <ProjBlock 
              title="360Med" 
              link="/360med" 
              themeColor={"linear-gradient(45deg, #FFFEF2 0%, #c2edce 30%, #6fb3b8 75%)"}
              darkMode={false}
              date={"Aug 2023 - Dec 2023"}
              desc={"A web application for medical databases"}
              skills={ 
                <>
                <SkillTag label={'UX Research'} bg={colors.mauve} />
                <SkillTag label={'UI Design'} bg={colors.cyan} />
                <SkillTag label={'Frontend Development'} bg={colors.white} border={'1px solid rgba(0, 0, 0, 0.1)'} />
                </>
              }
              image={medCover}
            />
            {/* <ProjBlock 
              title="The MARTA" 
              link="/marta" 
              themeColor={colors.gray} 
              date={"May 2023 - Aug 2023"}
              desc={"Research into the MARTA System"}
              skills={ 
                <>
                <SkillTag label={'UX Research'} bg={colors.mauve} />
                </>
              }
            /> */}
            {/* <ProjBlock 
              title="Healthcare Technology" 
              link="/healthcare-technology" 
              themeColor={colors.gray}
              date={"Aug 2021 - May 2022"} 
              desc={"A color-changing LED light to prevent hospital waste"}
              skills={ 
                <>
                <SkillTag label={'UX Research'} bg={colors.mauve} />
                </>
              }
            /> */}
        {/* </SimpleGrid>  */}
      </Flex>
    </Box>
    <Footer />
    </>
  );
}

export default Project;
