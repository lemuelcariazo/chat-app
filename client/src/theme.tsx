import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Roboto", sans-serif',
  },

  styles: {
    global: {
      "html, body": {
        // color: "",
        lineHeight: "tall",
      },

      a: {
        color: "teal.500",
      },
      // Input: {
      //   color: "black",
      // },
    },
  },
};

export default extendTheme(theme);
