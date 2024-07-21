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

  const stepContent = [
    {
      heading: 'Research',
      description: 'Research phase involves gathering information and understanding the problem space.'
    },
    {
      heading: 'Ideation',
      description: 'Ideation phase focuses on brainstorming and generating possible solutions.'
    },
    {
      heading: 'Design',
      description: 'Design phase is where the solution is crafted and planned in detail.'
    },
    {
      heading: 'Development',
      description: 'Development phase involves coding and building the solution.'
    },
    {
      heading: 'Reflection',
      description: 'Reflection phase is about reviewing and learning from the process.'
    }
  ];

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
          <H1 text="SAQ Assistant" />
          <i><Body text={"\"We've been waiting for a tool like this for so long! This will significantly boost our productivity!\" - user"} my={'2rem'}/></i>
          <Box width={"70vw"} display={'grid'} my={'2rem'}>
            <H3 text={"Overview"}/>
            <Body text={"Neurotime is a research lab based in Azerbaijan focused on creating " +
            "products based on Natural Language Processing (NLP) technologies. For their first product, " +
            "they are creating a full media management suite. This is a continuation of their initial project " +
            "done by another team. This project is a focus on the social/online media intelligence system while " +
            "the one prior was on the stream analysis."} />
          </Box>
          <Box width={"70vw"} display={'grid'} gridTemplateColumns={'repeat(2, 25% 70%)'} gap={'5%'}>
            <Box>
              <Box my={'2rem'}>
                <H3 text={"My Roles"}/>
                <Body text={"UI Design"} />
                <Body text={"UX Research"} />
                <Body text={"Frontend Development"} />
              </Box>
              <Box my={'2rem'}>
                <H3 text={"Skills"}/>
                <Wrap>
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
              <Box my={'2rem'}>
                <H3 text={"Project Duration"}/>
                <Body text={"10 weeks"} />
              </Box>
            </Box>

            <Box>
              <Box my={'2rem'}>
                <H3 text={"The Challenge"}/>
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
            
          </Box>
          
          <StepperElem steps={steps} handleStepClick={handleStepClick} activeStep={activeStep} />


          <Box key={'0'} id={steps['0'].id} width={"70vw"} my={'3rem'} justify={'center'}>
            <H2 text={'Research'} />
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
