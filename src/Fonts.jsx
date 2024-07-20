import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Text, Flex, Image, Box } from "@chakra-ui/react";
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

const H3 = ({ text, ...rest }) => {
    const theme = useTheme();
    return (
        <Text
            color={theme.colors.body}
            fontSize={"3xl"}
            my={'1'}
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

const Box1 = ({image, alt, title, link, ...rest}) => {
    const theme = useTheme();
    return (
        <Flex 
          border={'1px solid'}
          borderColor={theme.colors.body} 
          borderRadius={'15px'}
          boxShadow={"0.5px 0.5px 10px #D6D6D6"}
          bg={theme.colors.white} 
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
                <L2 link={link} text={title} fontWeight={'900'} />
            </Flex>
          <Body />
        </Flex>
    );
};

const Box2 = ({image, alt, title, ...rest}) => {
    const theme = useTheme();
    return (
        <Flex 
          border={'1px solid'}
          borderColor={theme.colors.body} 
          borderRadius={'15px'}
          boxShadow={"0.5px 0.5px 10px #D6D6D6"}
          bg={theme.colors.white} 
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
                <L2 text={title} fontWeight={'900'} />
            </Flex>
            <Flex w={'43%'} h={"100%"}>
                <Image src={image} h={"100%"} w={"100%"} alt={alt} /> 
            </Flex>
          <Body />
        </Flex>
    );
};

const CVBlock = ({company, location, position, time, description, ...rest}) => {
    const theme = useTheme();
    return (
        <Box display={'grid'} gridTemplateColumns={'repeat(2, 35% 65%)'}>
            <Flex borderRight={'1px solid'} borderRightColor={theme.colors.navy} p={"1rem"} justify={'right'} align={'top'} flexDirection={'column'} textAlign={'right'}>
                <L1 text={company} fontWeight={'700'}/>
                <Body text={location} />
            </Flex>
            <Flex mt={"6rem"} mb={"1rem"} p={"1rem"} align={'top'} flexDirection={'column'}>
                <Body text={position} fontWeight={'700'} />
                <Text fontSize={'md'} m={'1'} >{time}</Text>
                <Box my={'5'} mx={'1'} fontSize={'xl'}>{description}</Box>
            </Flex>
        </Box>
    )
}

export { H1, H2, H3, L1, L2, Body, Box1, Box2, CVBlock };