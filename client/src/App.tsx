import { useState } from "react";
import {
  Input,
  Button,
  InputRightElement,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  IconButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ViewIcon,
  ViewOffIcon,
  EmailIcon,
} from "@chakra-ui/icons";

function App() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cPassword, setCPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [profileImage, setProfileImage] = useState("");
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="App dark:bg-slate-900 dark:text-slate-50 bg-slate-200 text-slate-900 w-screen h-screen flex justify-center items-center flex-col">
      <>
        <Tabs className="h-2/3" isFitted variant="unstyled">
          <TabList>
            <Tab className="hover:text-slate-400">Login</Tab>
            <Tab className="hover:text-slate-400">Register</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <form className="w-96 flex justify-center align-center flex-col gap-10 ">
                <Input
                  variant="flushed"
                  placeholder="Enter Email or Username"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputGroup>
                  <Input
                    variant="flushed"
                    placeholder="Enter password"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement className="text-slate-900">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShow(!show)}
                    >
                      {!show ? (
                        <ViewOffIcon boxSize={17} />
                      ) : (
                        <ViewIcon boxSize={17} color="red.900" />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <Button colorScheme="teal" variant="outline">
                  LOGIN
                </Button>
              </form>
            </TabPanel>
            <TabPanel>
              <form className="w-96 flex justify-center align-center flex-col gap-10 ">
                <Input
                  variant="flushed"
                  placeholder="Enter Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <Input
                  variant="flushed"
                  placeholder="Enter Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputGroup>
                  <Input
                    variant="flushed"
                    placeholder="Enter password"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement className="text-slate-900">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShow(!show)}
                    >
                      {!show ? (
                        <ViewOffIcon boxSize={17} />
                      ) : (
                        <ViewIcon boxSize={17} color="red.900" />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <InputGroup>
                  <Input
                    variant="flushed"
                    placeholder="Confirm password"
                    type={show ? "text" : "password"}
                    value={cPassword}
                    onChange={(e) => setCPassword(e.target.value)}
                  />
                </InputGroup>

                <Button colorScheme="teal" variant="outline">
                  LOGIN
                </Button>
              </form>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </>
    </div>
  );
}

export default App;
