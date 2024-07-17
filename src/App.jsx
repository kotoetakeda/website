import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./index";
import Homepage from './Homepage';
import Project from './Project';
import CV from './CV';
import Contact from './Contact';
import SAQ from './SAQ';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/project" element={<Project />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/saq-assistant" element={<SAQ />} />
        </Routes>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
