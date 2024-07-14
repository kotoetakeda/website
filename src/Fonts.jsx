import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Text } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const H1 = ({ text, ...rest }) => {
    const theme = useTheme();
    return (
        <Text
            color={theme.styles.colors.body}
            fontSize={"4xl"}
            my={'2'}
            {...rest}
        > {text} </Text>
    );
};

const H2 = ({ text, ...rest }) => {
    const theme = useTheme();
    return (
        <Text
            color={theme.styles.colors.body}
            fontSize={"4xl"}
            my={'1.5'}
            {...rest}
        > {text} </Text>
    );
};

const L1 = ({ link, text, ...rest }) => {
    const theme = useTheme();
    return (
        <Link to={link}
            textDecoration={'none'}
            _hover={{textDecoration: 'none'}}
            _active={{textDecoration: 'none'}}
            _disabled={{textDecoration: 'none'}}
        ><Text
            color={theme.styles.colors.body}
            fontSize={"xl"}
            m={'1'}
            {...rest}
            _hover={{textDecoration: "underline", textUnderlineOffset: "0.5rem"}}
        > {text} </Text></Link>
    );
};

const Body = ({ text, ...rest }) => {
    const theme = useTheme();
    return (
        <Text
            color={theme.styles.colors.body}
            fontSize={"xl"}
            m={'1'}
            {...rest}
        > {text} </Text>
    );
};

export { H1, H2, L1, Body };