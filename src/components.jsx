import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Text } from "@chakra-ui/react";


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

const L1 = ({ text, ...rest }) => {
    const theme = useTheme();
    return (
        <Text
            color={theme.styles.colors.body}
            fontSize={"xl"}
            m={'1'}
            {...rest}
            _hover={{textDecoration: "underline", textUnderlineOffset: "0.5rem"}}
        > {text} </Text>
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
