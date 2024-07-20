import React, { useState, useCallback } from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Text, Flex, Image, Box, WrapItem } from "@chakra-ui/react";
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
        <NavLink to={link}>
            {({ isActive }) => (
                <Text
                    fontSize="2xl"
                    m="1"
                    color={isActive ? theme.colors.body : theme.colors.body_inactive}
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
        <NavLink to={link}>
            <Text
                color={theme.colors.body}
                fontSize={"2xl"}
                m={'1'}
                {...rest}
                _hover={{textDecoration: "underline", textUnderlineOffset: "0.5rem"}}
            > {text} </Text>
        </NavLink>
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

const KeyProjBlock = ({ link, title, themeColor, ...rest }) => {
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    
    const handleMouseOver = useCallback(() => setHover(true), []);
    const handleMouseOut = useCallback(() => setHover(false), []);
    
    return (
        <WrapItem>
            <Flex flexDirection={'column'} justify={'center'} textAlign={'center'} m={'3rem'}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <Flex
                    width={'73rem'}
                    height={'20rem'}
                    bg={theme.colors.gray}
                    boxShadow={ hover ? "1px 1px 30px" + themeColor : "1px 1px 10px" + themeColor }
                    align={'center'}
                    justify={'center'}
                    mb={'1rem'}
                    {...rest}
                >
                </Flex>
                <L1 link={link} text={title} fontWeight={'900'} 
                    color={hover ? theme.colors.body : theme.colors.body_inactive}/>
            </Flex>
        </WrapItem>
    );
};

const ProjBlock = ({ link, title, themeColor, ...rest }) => {
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    
    const handleMouseOver = useCallback(() => setHover(true), []);
    const handleMouseOut = useCallback(() => setHover(false), []);

    return (
        <WrapItem>
            <Flex flexDirection={'column'} justify={'center'} textAlign={'center'} m={'3rem'}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <Flex
                    width={'20rem'}
                    height={'20rem'}
                    bg={theme.colors.gray}
                    boxShadow={ hover ? "1px 1px 30px" + themeColor : "1px 1px 10px" + themeColor }
                    align={'center'}
                    justify={'center'}
                    mb={'1rem'}
                    {...rest}
                >
                </Flex>
                <L1 link={link} text={title} fontWeight={'900'} 
                    color={hover ? theme.colors.body : theme.colors.body_inactive}/>
            </Flex>
        </WrapItem>
    );
};

const CVBlock = ({ company, location, position, time, description, ...rest }) => {
    const theme = useTheme();
    return (
        <Box display={'grid'} gridTemplateColumns={'repeat(2, 35% 65%)'}>
            <Flex borderRight={'1px solid'} borderRightColor={theme.colors.body} p={"1rem"} justify={'right'} align={'top'} flexDirection={'column'} textAlign={'right'}>
                <L1 text={company} fontWeight={'700'}/>
                <Body text={location} />
            </Flex>
            <Flex mt={"6rem"} mb={"1rem"} p={"1rem"} align={'top'} flexDirection={'column'}>
                <Body text={position} fontWeight={'700'} />
                <Text fontSize={'md'} m={'1'} >{time}</Text>
                <Box my={'5'} mx={'1'} fontSize={'xl'}>{description}</Box>
            </Flex>
        </Box>
    );
};

export { H1, H2, H3, L1, L2, Body, KeyProjBlock, ProjBlock, CVBlock };
