import React from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button, useColorMode, Box } from "@chakra-ui/react";
function Headers() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box className="flex justify-between w-screen h-14  p-4 ">
        <div className="relative">
          <h1>💬 Me!</h1>
        </div>
        <Button onClick={toggleColorMode} color={"blackAlpha.900"}>
          {colorMode === "light" ? (
            <SunIcon color="yellow.700" />
          ) : (
            <MoonIcon color="red.500" />
          )}
        </Button>
      </Box>
    </>
  );
}

export default Headers;
