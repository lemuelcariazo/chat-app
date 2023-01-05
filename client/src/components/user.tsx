import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  FormControl,
  Input,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  useControllableProp,
  useControllableState,
} from "@chakra-ui/react";
import axios from "axios";
import Chat from "../pages/Chat";

const userCredentials = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isLogin, setIsLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      console.log(
        JSON.stringify({
          modal: "Please Complete Crendentials",
        })
      );
    }
    axios
      .post("http://localhost:8080/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log({
          modal: res.data.message,
        });
        // setIsLogin(true);
        setIsLoading(false);
        navigate("/chat");
      })
      .catch((e) => {
        setIsLoading(false);
        console.log({
          modal: e.message,
          status: e.status,
        });
      });
  };

  return (
    <>
      <FormControl
        w={["80%", "50%", "40%", "30%"]}
        h={["350", "350", "350", "350"]}
        className="flex items-center justify-center bg-sky-900 text-slate-900 rounded-lg "
      >
        <Tabs
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
              <Input
                variant="filled"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                variant="filled"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                isLoading={isLoading}
                loadingText="Logging In"
                colorScheme="teal"
                variant="outline"
                onClick={handleLogin}
              >
                Login
              </Button>
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
    </>
  );
};

export default userCredentials;
