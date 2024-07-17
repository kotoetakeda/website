import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Text, Flex, Image } from "@chakra-ui/react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';


const H1 = ({ text, ...rest }) => {
    const theme = useTheme();
    return (
        <Text
            color={theme.colors.body}
            fontSize={"5xl"}
            my={'2'}
            {...rest}
        > {text} </Text>
    );
};

const H2 = ({ text, ...rest }) => {
    const theme = useTheme();
    return (
        <Text
            color={theme.colors.body}
            fontSize={"4xl"}
            my={'1.5'}
            {...rest}
        > {text} </Text>
    );
};

const L1 = ({ link, text, ...rest }) => {
    const theme = useTheme();
    
    return (
        <NavLink
            to={link}
        >
            {({ isActive }) => (
                <Text
                    fontSize="2xl"
                    m="1"
                    color={isActive ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.4)'}
                    fontWeight={isActive ? 'bold' : 'normal'}
                    _hover={{ color: theme.colors.body }}
                    {...rest}
                >
                    {text}
                </Text>
            )}
        </NavLink>
    );
};

const L2 = ({ link, text, ...rest }) => {
    const theme = useTheme();
    
    return (
        <NavLink to={link}
            textDecoration={'none'}
            _hover={{textDecoration: 'none'}}
            _active={{textDecoration: 'none'}}
            _disabled={{textDecoration: 'none'}}
        ><Text
            color={theme.colors.body}
            fontSize={"2xl"}
            m={'1'}
            {...rest}
            _hover={{textDecoration: "underline", textUnderlineOffset: "0.5rem"}}
        > {text} </Text></NavLink>
    );
};

const Body = ({ text, ...rest }) => {
    const theme = useTheme();
    return (
        <Text
            color={theme.colors.body}
            fontSize={"xl"}
            m={'1'}
            {...rest}
        > {text} </Text>
    );
};

const Box1 = ({image, alt, ...rest}) => {
    const theme = useTheme();
    return (
        <Flex 
          border={'1px solid'}
          borderColor={theme.colors.body} 
          borderRadius={'25px'}
          boxShadow={"0.5px 0.5px 10px #D6D6D6"}
          bg={theme.colors.bg_white} 
          height={'20rem'}
          align={'center'}
          justify={'center'}
          p={"3rem"}
          my={"2rem"}
          flexDirection={'row'}
          gap={'4%'}
          {...rest}
        >
            <Flex w={'43%'} h={"100%"}>
                <Image src={image} h={"100%"} w={"100%"} alt={alt} /> 
            </Flex>
            <Flex w={'53%'} h={"100%"}>
                <L2 text={'MedConnect'} fontWeight={'900'} />
            </Flex>
          <Body />
        </Flex>
    );
};

const Box2 = ({image, alt, ...rest}) => {
    const theme = useTheme();
    return (
        <Flex 
          border={'1px solid'}
          borderColor={theme.colors.body} 
          borderRadius={'25px'}
          boxShadow={"0.5px 0.5px 10px #D6D6D6"}
          bg={theme.colors.bg_white} 
          height={'20rem'}
          align={'center'}
          justify={'center'}
          p={"3rem"}
          my={"2rem"}
          flexDirection={'row'}
          gap={"4%"}
          {...rest}
        >
            <Flex w={'53%'} h={"100%"}>
                <L2 text={'MedConnect'} fontWeight={'900'} />
            </Flex>
            <Flex w={'43%'} h={"100%"}>
                <Image src={image} h={"100%"} w={"100%"} alt={alt} /> 
            </Flex>
          <Body />
        </Flex>
    );
};

export { H1, H2, L1, L2, Body, Box1, Box2 };