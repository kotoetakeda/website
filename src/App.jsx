import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./index";
import Homepage from './Homepage';
import Project from './Project';
import Resume from './Resume';
import Contact from './Contact';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
