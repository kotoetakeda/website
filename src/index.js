import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#F0F0F0",
        color: "rgba(0, 0, 0, 0.9)",
        fontFamily: "forum, serif",
        fontSize: "10px",
        fontWeight: "100",
      },
    },
  },
  colors: {
    bg_white: "#FFFFFF",
    bg_gray: "#F0F0F0",
    lines: "F0F0F0",
    body: "rgba(0, 0, 0, 0.9)",
    gradient: "linear-gradient(180deg, #F0F0F0 0%, #FFFFFF 75%)",
  },
});

const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default customTheme;