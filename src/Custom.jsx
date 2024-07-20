import React, { forwardRef, useState, useCallback } from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Text, Flex, Box, WrapItem, Tooltip, Icon } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';

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
        <Box display={'grid'} gridTemplateColumns={'repeat(2, 35% 65%)'} gridTemplateRows={'repeat(2, 10% 90%)'}>
            <Flex gridColumn={'1 / 2'} gridRow={'1 / 2'} px={'5'} pt={'6'}
                borderRight={'1px solid'} borderRightColor={theme.colors.body} 
                justify={'right'} align={'top'} flexDirection={'column'} textAlign={'right'}>
                <L1 text={company} fontWeight={'700'}/>
                <Body text={location} />
            </Flex>
            <Flex gridColumn={'1 / 2'} gridRow={'2 / 3'} 
                borderRight={'1px solid'} borderRightColor={theme.colors.body} />
            <Flex gridColumn={'2 / 3'} gridRow={'2 / 3'} align={'top'} flexDirection={'column'} px={'5'} pb={'6'}>
                <Body text={position} fontWeight={'700'} />
                <Text fontSize={'md'} m={'1'} >{time}</Text>
                <Box my={'5'} mx={'1'} fontSize={'xl'}>{description}</Box>
            </Flex>
        </Box>
    );
};

const TooltipIcon = forwardRef(({ as: As, label, boxSize = 10, ...rest }, ref) => {
    const theme = useTheme();
    
    return (
        <WrapItem>
            <Tooltip label={label} fontSize='xs' color={theme.colors.body}>
                <span ref={ref}>
                    <Icon as={As} label={label} boxSize={boxSize} {...rest} />
                </span>
            </Tooltip>
        </WrapItem>
    );
});

export { H1, H2, H3, L1, L2, Body, KeyProjBlock, ProjBlock, CVBlock, TooltipIcon };
