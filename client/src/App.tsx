import "./App.css";
import { Button, useColorMode, Box } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="App h-screen w-screen ">
      {/* I learned how the breakpoints works and the style props */}
      {/* I will create form and that form will be responsive  */}

      <Box
        w={["100%", "40%", "35%"]}
        h={["100%", "40%", "35%"]}
        backgroundColor="red.100"
        className="w-fit h-fit"
      >
        <h1>Hello, Chat App</h1>
        <Button
          onClick={toggleColorMode}
          color={"blackAlpha.900"}
          colorScheme="white"
        >
          {colorMode === "light" ? (
            <SunIcon color="yellow.700" />
          ) : (
            <MoonIcon color="red.500" />
          )}
        </Button>
      </Box>
    </div>
  );
}

export default App;
