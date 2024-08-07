import React, { useEffect, useState } from "react";
import { useTheme } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import {
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from '@chakra-ui/react';

const StepperElem = ({ steps, handleStepClick, activeStep }) => {
  const theme = useTheme();
  const colors = theme.colors;
  
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stepperElement = document.getElementById('stepper-container');
      if (stepperElement) {
        const rect = stepperElement.getBoundingClientRect();
        setIsSticky(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize state based on current scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Flex
        id="stepper-container"
        width={'100%'}
        bg={colors.white}
        position={'sticky'}
        top={'0'}
        m={'10'}
        zIndex={1000}
        justify={'center'}
        align={'center'}
        boxShadow={ isSticky ? "0px 4px 2px -2px rgba(0, 0, 0, 0.1)" : 'none' }
      >
        <Stepper
          size={isSticky ? 'sm' : 'lg'}
          index={activeStep}
          width={'90%'}
          colorScheme="teal"
          color={colors.body_inactive}
          p={"2rem"}
        >
          {steps.map((step, index) => (
            <Step key={index} onClick={() => handleStepClick(index)}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  active={<StepNumber color={'teal'} fontWeight={'900'} />}
                  incomplete={<StepNumber />}
                />
              </StepIndicator>

              <StepTitle
                color={index === activeStep ? "teal" : index < activeStep ? "teal" : colors.body_inactive}
                fontWeight={index === activeStep ? "900" : index < activeStep ? "normal" : "normal"}
                fontSize={isSticky ? 'sm' : 'lg'}
              >
                {step.title}
              </StepTitle>

              <StepSeparator
                bg={index <= activeStep ? "teal" : colors.body_inactive}
              />
            </Step>
          ))}
        </Stepper>
      </Flex>
    </>
  );
};

export default StepperElem;
