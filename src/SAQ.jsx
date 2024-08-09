import React, { useEffect } from "react";
import { useTheme } from "@chakra-ui/react";
import { Box, Flex, Wrap } from "@chakra-ui/react";
import { H1, H2, H3, Body, SvgIcon, ReactIcon } from "./Custom";
import Header from './Header';
import Footer from './Footer';
import { useSteps } from '@chakra-ui/react';
import StepperElem from './Stepper';
import Icons from './Icons';
import debounce from 'lodash.debounce';

const SAQ = () => {
  const theme = useTheme();
  const colors = theme.colors;

  const steps = [
    { title: 'Research', id: 'step-0' },
    { title: 'Ideation', id: 'step-1' },
    { title: 'Design', id: 'step-2' },
    { title: 'Development', id: 'step-3' },
    { title: 'Reflection', id: 'step-4' }
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY;
      const stepElements = steps.map(step => document.getElementById(step.id));
      const stepOffsets = stepElements.map(element => element ? element.offsetTop : 0);

      let newActiveStep = 0;
      for (let i = 0; i < stepOffsets.length; i++) {
        if (scrollPosition >= stepOffsets[i] - window.innerHeight / 2) {
          newActiveStep = i;
        }
      }

      setActiveStep(newActiveStep);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [steps, setActiveStep]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    const stepElement = document.getElementById(steps[index].id);
    if (stepElement) {
      stepElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <Box p={"3rem 5rem"} w={'100%'} bg={colors.gradient}>
        <Flex bg={colors.white} w={'100%'} height={'fit-content'} py={"5rem"} flexDirection={'column'} justify={'center'} align={'center'}>
          <H1 text="SAQ Assistant" pt={'2rem'} />
          <i><Body text={"\"We've been waiting for a tool like this for so long! This will significantly boost our productivity!\" - user"} my={'2rem'}/></i>
          {/* <Box width={"70vw"} display={'grid'} my={'2rem'}>
            <H3 text={"Overview"}/>
            <Body text={
              `SAQ Assistant is a RAG-based generative AI chatbot web application designed to streamline and expedite 
              the completion of Security Assessment Questionnaires (SAQs) by providing users with consistency, efficiency, 
              and effortlessness in the process.`} />
          </Box> */}
          <Box width={"70vw"} display={'grid'} gridTemplateColumns={'repeat(2, 25% 72%)'} my={'2rem'} gap={'3%'}>
            <Flex flexDirection={"column"} gap={"2vmin"}>
              <Box my={'2rem'} textAlign={'left'}>
                <H3 text={"My Roles"}/>
                <Body text={"UX Research"} />
                <Body text={"UI Design"} />
                <Body text={"Frontend Development"} />
              </Box>
              <Box my={'2rem'} textAlign={'left'}>
                <H3 text={"Project Duration"}/>
                <Body text={"10 weeks"} />
              </Box>
              <Box my={'2rem'} textAlign={'left'}>
                <H3 text={"Skills"}/>
                <Wrap textAlign={'left'}>
                  <ReactIcon as={Icons.Mural} label={'Mural'} />
                  <SvgIcon as={Icons.Figma} label={'Figma'} />
                  <SvgIcon as={Icons.Python} label={'Python'} />
                  <SvgIcon as={Icons.JS} label={'JavaScript'} />
                  <SvgIcon as={Icons.HTML} label={'HTML'} />
                  <SvgIcon as={Icons.CSS} label={'CSS'} />
                  <SvgIcon as={Icons.ReactSvg} label={'React'} />
                  <SvgIcon as={Icons.Node} label={'Node.js'} />
                  <ReactIcon as={Icons.Flask} label={'Flask'} />
                  <SvgIcon as={Icons.Docker} label={'Docker'} />
                  <SvgIcon as={Icons.Jira} label={'Jira'} />
                </Wrap>
              </Box>
            </Flex>

            <Flex flexDirection={'column'} justify={'space-between'} >
              <Box my={'2rem'}>
                <H3 text={"The Challenge"}/>
                <Body text={
                  `Every Insight customer submits a Security Assessment Questionnaire (SAQ) to inquire about Insight's 
                  policies and processes for implementing new security measures. These questionnaires can be quite 
                  lengthy, ranging from 20 to 300 questions. Currently, Insight's SAQ team manually reviews and answers 
                  these questions, with an average completion time of 7-10 days. 
                  The process involves searching through policy documents to find the appropriate answers and sometimes 
                  reaching out to other departments for additional information. The team then manually types all responses 
                  into spreadsheets or various forms, even when the content is often similar and merely rephrased.`} />
                <br/>
                <Body text={
                  `This manual, repetitive process is archaic and time-consuming, resulting in inconsistencies and delays in 
                  responding to customers. These inefficiencies hinder operational effectiveness and impact customer satisfaction.`} />
                <br/>
                <Body text={
                  `The challenge is to streamline and modernize this process using AI and technology to automate responses, ensure 
                  consistency, and significantly reduce the time required to complete the questionnaires. Achieving this will enhance 
                  efficiency, improve response times, and increase opportunities for customer engagement.`} />
              </Box>
              <Box my={'2rem'} width={'100%'}>
                <H3 text={"The Solution"}/>
                <Body text={
                  `We presented to our user, Insight’s SAQ team, a RAG-based generative AI chatbot web application tailored specifically 
                  to their needs. This tool is designed to seamlessly integrate with their current workflow, providing a centralized 
                  platform that contains all SAQ-specific documents required to answer the questionnaire questions. The web application 
                  includes intuitive features that enable users to easily navigate and reference different documents based on the context 
                  of the questions. Our goal is for this application to become the primary resource for the SAQ team, significantly 
                  streamlining the process and enhancing efficiency in completing their tasks.`} />
              </Box>
            </Flex>
            
          </Box>
          
          <StepperElem steps={steps} handleStepClick={handleStepClick} activeStep={activeStep} />


          <Box key={'0'} id={steps['0'].id} width={"70vw"} my={'3rem'} justify={'center'}>
            <H2 text={'Research'} />
            <Box my={'2rem'} width={'100%'}>
              <H3 text={"Kickoff and Stakeholder Meeting"}/>
              <Body text={`Our team started off with a meeting in order to go over the project plan and familiarize ourselves with the product. 
                            It was a lot of information thrown in our direction and I asked the client questions to clarify their goals for 
                            the social/online media intelligence system.`} />
            </Box>
            <Box my={'2rem'} width={'100%'}>
              <H3 text={"The Solution"}/>
              <Body text={"Neurotime is a research lab based in Azerbaijan focused on creating " +
                "products based on Natural Language Processing (NLP) technologies. For their first product, " +
                "they are creating a full media management suite. This is a continuation of their initial project " +
                "done by another team. This project is a focus on the social/online media intelligence system while " +
                "the one prior was on the stream analysis."} />
            </Box>
            <Box my={'2rem'} width={'100%'}>
              <H3 text={"The Solution"}/>
              <Body text={"Neurotime is a research lab based in Azerbaijan focused on creating " +
                "products based on Natural Language Processing (NLP) technologies. For their first product, " +
                "they are creating a full media management suite. This is a continuation of their initial project " +
                "done by another team. This project is a focus on the social/online media intelligence system while " +
                "the one prior was on the stream analysis."} />
            </Box>
            <Box my={'2rem'} width={'100%'}>
              <H3 text={"The Solution"}/>
              <Body text={"Neurotime is a research lab based in Azerbaijan focused on creating " +
                "products based on Natural Language Processing (NLP) technologies. For their first product, " +
                "they are creating a full media management suite. This is a continuation of their initial project " +
                "done by another team. This project is a focus on the social/online media intelligence system while " +
                "the one prior was on the stream analysis."} />
            </Box>
            <Box my={'2rem'} width={'100%'}>
              <H3 text={"The Solution"}/>
              <Body text={"Neurotime is a research lab based in Azerbaijan focused on creating " +
                "products based on Natural Language Processing (NLP) technologies. For their first product, " +
                "they are creating a full media management suite. This is a continuation of their initial project " +
                "done by another team. This project is a focus on the social/online media intelligence system while " +
                "the one prior was on the stream analysis."} />
            </Box>
          </Box>
          <Box key={'1'} id={steps['1'].id} width={"70vw"} my={'3rem'} justify={'center'}>
            <H2 text={'Ideation'} />
            <Box my={'2rem'} width={'100%'}>
              <H3 text={"The Solution"}/>
              <Body text={"Neurotime is a research lab based in Azerbaijan focused on creating " +
                "products based on Natural Language Processing (NLP) technologies. For their first product, " +
                "they are creating a full media management suite. This is a continuation of their initial project " +
                "done by another team. This project is a focus on the social/online media intelligence system while " +
                "the one prior was on the stream analysis."} />
            </Box>
            <Box my={'2rem'} width={'100%'}>
              <H3 text={"The Solution"}/>
              <Body text={"Neurotime is a research lab based in Azerbaijan focused on creating " +
                "products based on Natural Language Processing (NLP) technologies. For their first product, " +
                "they are creating a full media management suite. This is a continuation of their initial project " +
                "done by another team. This project is a focus on the social/online media intelligence system while " +
                "the one prior was on the stream analysis."} />
            </Box>
            <Box my={'2rem'} width={'100%'}>
              <H3 text={"The Solution"}/>
              <Body text={"Neurotime is a research lab based in Azerbaijan focused on creating " +
                "products based on Natural Language Processing (NLP) technologies. For their first product, " +
                "they are creating a full media management suite. This is a continuation of their initial project " +
                "done by another team. This project is a focus on the social/online media intelligence system while " +
                "the one prior was on the stream analysis."} />
            </Box>
            <Box my={'2rem'} width={'100%'}>
              <H3 text={"The Solution"}/>
              <Body text={"Neurotime is a research lab based in Azerbaijan focused on creating " +
                "products based on Natural Language Processing (NLP) technologies. For their first product, " +
                "they are creating a full media management suite. This is a continuation of their initial project " +
                "done by another team. This project is a focus on the social/online media intelligence system while " +
                "the one prior was on the stream analysis."} />
            </Box>
          </Box>
          <Box key={'2'} id={steps['2'].id} width={"70vw"} my={'3rem'} justify={'center'}>
            <H2 text={'Design'} />
            <Body text={'Hi'} />
          </Box>
          <Box key={'3'} id={steps['3'].id} width={"70vw"} my={'3rem'} justify={'center'}>
            <H2 text={'Development'} />
            <Body text={'Hi'} />
          </Box>
          <Box key={'4'} id={steps['4'].id} width={"70vw"} my={'3rem'} justify={'center'}>
            <H2 text={'Reflection'} />
            <Body text={'Hi'} />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default SAQ;
