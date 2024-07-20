import React, { useEffect } from "react";
import { useTheme } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import { H1, H3, Body } from "./Custom";
import Header from './Header';
import Footer from './Footer';
import {
  useSteps,
} from '@chakra-ui/react';
import StepperElem from './Stepper';

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
      heading: 'Overview',
      description: 'Research phase involves gathering information and understanding the problem space.'
    },
    {
      heading: 'The Challenge',
      description: 'Ideation phase focuses on brainstorming and generating possible solutions.'
    },
    {
      heading: 'The Solution',
      description: 'Design phase is where the solution is crafted and planned in detail.'
    },
    {
      heading: 'Implementation',
      description: 'Development phase involves coding and building the solution.'
    },
    {
      heading: 'Reflection',
      description: 'Reflection phase is about reviewing and learning from the process.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
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
    };

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
          <H1 text="SAQ Assistant" pb={"3rem"} />
          <Body text={"\"We've been waiting for a tool like this for so long! This will significantly boost our productivity!\" - user"} />

          <StepperElem steps={steps} handleStepClick={handleStepClick} activeStep={activeStep} />

          {/* Render content for each step */}
          {stepContent.map((content, index) => (
            <Box
              id={steps[index].id}
              key={index}
              mb={"3rem"}
              p={"2rem"}
              borderWidth={1}
              borderRadius="md"
              borderColor={colors.gray[300]}
              bg={index === activeStep ? colors.gray[50] : colors.white}
              transition="background-color 0.3s"
            >
              <H3 text={content.heading} />
              <Body text={content.description} />
            </Box>
          ))}
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default SAQ;
