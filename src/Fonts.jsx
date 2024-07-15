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
    const activeStyle = {textDecoration: "underline", textUnderlineOffset: "0.5rem"};
    
    return (
        <NavLink to={link}
            textDecoration={'none'}
            _hover={{textDecoration: 'none'}}
            _active={{textDecoration: 'none'}}
            _disabled={{textDecoration: 'none'}}
            style={({ isActive }) => isActive ? activeStyle : undefined}
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

const ProjectBox = ({image, alt, ...rest}) => {
    const theme = useTheme();
    return (
        <Flex 
          border={'1px solid'}
          borderColor={theme.colors.body} 
          borderRadius={'25px'}
          boxShadow={"0.5px 0.5px 5px #000000"}
          bg={theme.colors.bg_white} 
          height={'20rem'}
          align={'center'}
          justify={'center'}
          p={"3rem"}
          flexDirection={'row'}
          {...rest}
        >
            <Flex w={'60%'} h={"100%"}>
                <L1 text={'MedConnect'} fontWeight={'900'} />
            </Flex>
            <Flex w={'40%'} h={"100%"}>
                <Image src={image} h={"100%"} w={"100%"} alt={alt} /> 
            </Flex>
          <Body />
        </Flex>
    );
};

export { H1, H2, L1, Body, ProjectBox };