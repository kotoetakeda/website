import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./index";
import Homepage from './Homepage';
import Project from './Project';
import CV from './CV';
import Contact from './Contact';
import SAQ from './SAQ';
import Med from './Med';
import HT from './HT';
import Marta from './Marta';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
        <BrowserRouter>
        <Routes>
            <Route path="/about" element={<Homepage />} />
            <Route path="/home" element={<Project />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/saq-assistant" element={<SAQ />} />
            <Route path="/360med" element={<Med />} />
            <Route path="/healthcare-technology" element={<HT />} />
            <Route path="/marta" element={<Marta />} />
        </Routes>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
