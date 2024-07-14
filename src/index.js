import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color: "rgba(0, 0, 0, 0.9)",
        fontFamily: "forum, serif"
      },
    },
    brand: {
      bg_white: "FFFFFF",
      bg_gray: "F7F8F9"
    }
  },
});

const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default customTheme;