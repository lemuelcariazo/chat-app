import "./App.css";
import {
  Button,
  useColorMode,
  FormControl,
  Input,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="App h-screen w-screen flex justify-center items-center">
      {/* I learned how the breakpoints works and the style props */}
      {/* I will create form and that form will be responsive  */}
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
      <FormControl
        w={["80%", "50%", "40%", "30%"]}
        h={["350", "350", "350", "350"]}
        className="flex items-center justify-center bg-sky-900 text-slate-100 rounded-lg"
      >
        <Tabs
          // variant=""
          isFitted
          colorScheme="whiteAlpha.900"
          size="md"
          className="w-full h-full"
        >
          <TabList>
            <Tab>Login</Tab>
            <Tab>Register</Tab>
          </TabList>

          <TabPanels>
            <TabPanel className="flex justify-between items-center flex-col gap-5">
              <Input variant="filled" placeholder="Email" />
              <Input variant="filled" placeholder="Password" />

              <Button variant="outline">Login</Button>
            </TabPanel>
            <TabPanel className="flex justify-center items-center flex-col gap-5">
              <Input variant="filled" placeholder="Username" />
              <Input variant="filled" placeholder="Email" />
              <Input variant="filled" placeholder="Password" />
              <Input variant="filled" placeholder="Confirm Password" />

              <Button variant="outline">Register</Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </FormControl>
    </div>
  );
}

export default App;
