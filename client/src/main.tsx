import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme";
import {
  ChakraProvider,
  ColorModeScript,
  ThemeProvider,
} from "@chakra-ui/react";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
