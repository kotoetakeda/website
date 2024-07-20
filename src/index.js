import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#DED3DE",
        color: "rgba(0, 0, 0, 0.9)",
        fontFamily: "forum, serif",
        fontSize: "10px",
        fontWeight: "100",
      },
    },
  },
  colors: {
    white: "#F5F5F5",
    gray: "#F0F0F0",
    cyan: "#C2EDEA",
    mauve: "#DED3DE",
    navy: "#454447",
    body: "rgba(0, 0, 0, 0.9)",
    body_inactive: "rgba(0, 0, 0, 0.4)",
    gradient: "linear-gradient(45deg, #C2EDEA 0%, #DED3DE 95%)",
  },
});

const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default customTheme;