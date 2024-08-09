import React, { useEffect } from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, Image, Text, SimpleGrid } from "@chakra-ui/react";
import { H1, Body, ProjBlock, SkillTag } from "./Custom";
import Header from './Header';
import Footer from './Footer';
import SAQCover from './image/Insight_logo.png';
import medCover from './image/medCover.png';
import profileImg from './image/mongo.JPG';

const Project = () => {

  const theme = useTheme();
  const colors = theme.colors;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Header />
    <Flex p={"5rem 10rem"} w={'100%'} bg={colors.gradient} flexDirection={"column"}>
        <Flex justify={'center'} align={"center"} w={'100%'} p={'3rem'} flexDirection={"column"} textAlign={"center"}>
          <H1 fontWeight={'900'} fontSize={"6xl"} text="Hello, I'm Kotoe" />
          <Body fontWeight={'900'} fontSize={"xl"} pb={"3rem"}text="Software Engineer · Frontend Developer · UX Developer · UX Designer" />
          <Body fontSize={"3xl"} text="I am passionate about designing meaningful experiences that seamlessly and aesthetically integrate into people’s lives, transforming the way we interact with technology."/>
        </Flex>
        <Box p={"0rem 5rem 8rem 5rem"} w={'100%'}>
          <Flex justify={"space-evenly"} align={"center"} w={'100%'}> 
              <ProjBlock 
                title="SAQ Assistant" 
                link="/saq-assistant"
                darkMode={false}
                bg={colors.white}
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
              {/* <ProjBlock 
                title="360Med" 
                link="/360med" 
                themeColor={"linear-gradient(45deg, #FFFEF2 0%, #c2edce 50%, #6fb3b8 75%)"}
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
              <ProjBlock 
                title="The MARTA" 
                link="/marta" 
                themeColor={colors.gray}
                darkMode={false}
                date={"May 2023 - Aug 2023"}
                desc={"Research into the MARTA System"}
                skills={ 
                  <>
                  <SkillTag label={'UX Research'} bg={colors.mauve} />
                  <SkillTag label={'UI Design'} bg={colors.cyan} />
                  <SkillTag label={'Frontend Development'} bg={colors.white} border={'1px solid rgba(0, 0, 0, 0.1)'} />
                  </>
                }
                image={medCover}
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
          </Flex> 
      </Box>
    </Flex>
    <Footer />
    </>
  );
}

export default Project;
