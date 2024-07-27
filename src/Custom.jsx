import React, { forwardRef, useState, useCallback } from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Text, Flex, Box, WrapItem, Tooltip, Image, Icon , HStack, Center, Button } from "@chakra-ui/react";
import { NavLink, useNavigate } from 'react-router-dom';

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

const ProjBlock = ({ link, title, themeColor, desc, skills, image, ...rest }) => {
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    
    const handleMouseOver = useCallback(() => setHover(true), []);
    const handleMouseOut = useCallback(() => setHover(false), []);
    const navigatePage = useCallback(() => navigate(link), [navigate, link]);

    return (
        <Box textAlign={'center'} m={'3rem'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={navigatePage}
            width={'80vw'}
            height={'40vh'}
            flexDirection={'row'}
            bg={theme.colors.gray}
            boxShadow={ hover ? "1px 1px 30px" + themeColor : "1px 1px 10px" + themeColor }
            display={'grid'}
            gridTemplateColumns={'repeat(2, 1fr)'}
            position={'relative'}
            {...rest}
        >
            <Flex flexDirection={'column'} align={'center'} justify={'center'} 
                    rowGap={'5'} p={'10'}>
                <H2 link={link} text={title} fontWeight={'900'} />
                <Body text={desc}/>
                <HStack>{skills}</HStack>
            </Flex>
            <Center>
                <Image src={image} alt={title}  height={'35vh'} />
            </Center>
        </Box>
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
            <Flex gridColumn={'1 / 2'} gridRow={'2 / 3'} {...rest}
                borderRight={'1px solid'} borderRightColor={theme.colors.body} />
            <Flex gridColumn={'2 / 3'} gridRow={'2 / 3'} align={'top'} flexDirection={'column'} px={'5'} pb={'6'}>
                <Body text={position} fontWeight={'700'} />
                <Text fontSize={'md'} m={'1'} >{time}</Text>
                <Box my={'5'} mx={'1'} fontSize={'xl'}>{description}</Box>
            </Flex>
        </Box>
    );
};

const SvgIcon = forwardRef(({ as: As, label, ...rest }, ref) => {
    const theme = useTheme();

    return (
        <WrapItem>
            <Tooltip label={label} fontSize='xs' color={theme.colors.body}>
                <Image as={As} alt={label} width={'2rem'} height={'2rem'} {...rest} />
            </Tooltip>
        </WrapItem>
    );
});

const ReactIcon = forwardRef(({ as: As, label, boxSize = '2rem', ...rest }, ref) => {
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

const SkillTag = ({ label, bg, ...rest }) => {
    return (
        <Center
            borderRadius={'12'}
            bg={bg}
            py={'1'}
            px={'3'}
            fontSize={'xs'}
            {...rest}
        >
            {label}
        </Center>
    )
}

const CustomButton = ({ label, ...rest }) => {
    const theme = useTheme();
    return (
        <Button bg={theme.colors.body} color={theme.colors.white} 
                px={'20'} py={'2'} m={'3'} 
                _hover={{bg: theme.colors.gradient, color: theme.colors.body}}
                {...rest} > 
            {label}
        </Button>
    )
}

export { H1, H2, H3, L1, L2, Body, ProjBlock, CVBlock, SvgIcon, ReactIcon, SkillTag, CustomButton };
