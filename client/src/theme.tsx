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

  styles: {
    global: {
      "html, body": {
        color: "red.600",
        lineHeight: "tall",
      },
      a: {
        color: "teal.500",
      },
    },
  },
};

export default extendTheme(theme);
