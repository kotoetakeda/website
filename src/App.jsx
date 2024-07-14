import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./index";
import Homepage from "./Homepage";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Homepage />
    </ChakraProvider>
  );
}

export default App;
