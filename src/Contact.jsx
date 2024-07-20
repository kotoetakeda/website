import React, { useState } from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, Input, FormControl, Textarea, Button, useToast } from "@chakra-ui/react";
import { H1, Body } from "./Custom";
import Header from './Header';
import Footer from './Footer';
import emailjs from "emailjs-com";

const Contact = () => {

  const theme = useTheme();
  const colors = theme.colors;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_sduk1tm', // Service ID
      'template_qrcwnlo', // Template ID
      e.target,
      'JVvkuGQUcVqr53bpI' // Public Key
    )
    .then((result) => {
      console.log(result.text);
      toast({
        title: "Message Sent.",
        description: "Your message has been sent successfully.",
        status: "success",
        duration: 5000,
        isClosable: true
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }, (error) => {
      console.log(error.text);
      toast({
        title: "Error.",
        description: "There was an error sending your message.",
        status: "error",
        duration: 5000,
        isClosable: true
      });
    });
  };

  return (
    <>
    <Header />
    <Box p={"3rem 5rem"} w={'100%'} bg={colors.gradient}>
        <Flex bg={colors.white} w={'100%'} height={'fit-content'} py={"5rem"} flexDirection={'column'} justify={'center'} align={'center'} textAlign={'center'}>
          <H1 text="Let's Connect" pb={"1rem"}/>
          <Body text={"I would love to hear from you! Whether you want to give feedback to my work or learn more about it,"} />
          <Body text={"please reach out and I will get back to you as soon as I can. "} pb={"3rem"}/>
          <Box width={'70%'}>
            <form onSubmit={sendEmail} width={'100%'}>
              <Flex width={'100%'} justify={'space-between'} align={'center'} gap={'6'}>
                <FormControl id="name" isRequired>
                <Input 
                  placeholder={'Full Name*'} 
                  type="text" name="name"
                  value={formData.name}
                  size={"lg"} m={'3'} 
                  borderColor={colors.body} focusBorderColor={colors.cyan} 
                  onChange={handleChange} />
                </FormControl>
                <FormControl id="email" isRequired>
                  <Input
                    placeholder={'Email*'}
                    type="email" name="email"
                    size={"lg"} m={'3'}
                    value={formData.email}
                    borderColor={colors.body} focusBorderColor={colors.cyan} 
                    onChange={handleChange} />
                </FormControl>
              </Flex>
              <Flex width={'100%'} justify={'center'}>
                <FormControl id="message">
                  <Textarea 
                    placeholder={'Message'} name="message"
                    value={formData.message}
                    size={"lg"} m={'3'} h={'30vh'} 
                    borderColor={colors.body} focusBorderColor={colors.cyan}
                    onChange={handleChange} />
                </FormControl>
              </Flex>
              <Button bg={colors.body} type="submit" 
                color={colors.white} px={'20'} py={'2'} m={'3'} 
                _hover={{bg: colors.gradient, color: colors.body}}> 
                Send
              </Button>
            </form>
          </Box>
        </Flex>
    </Box>
    <Footer />
    </>
  );
}

export default Contact;
