import React from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";
function Headers() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Button
        onClick={toggleColorMode}
        color={"blackAlpha.900"}
        position="absolute"
        right={2}
        top={2}
      >
        {colorMode === "light" ? (
          <SunIcon color="yellow.700" />
        ) : (
          <MoonIcon color="red.500" />
        )}
      </Button>
    </div>
  );    
}

export default Headers;
