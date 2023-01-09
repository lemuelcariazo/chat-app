import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Input, Button, Box } from "@chakra-ui/react";
import { UserContext } from "../utils/UserContext";

function Login() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [msg, setMsg] = useState<any>("");

  const { logs, setLogs } = useContext(UserContext);

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setEmail("");
    setPassword("");

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

        setIsLoading(false);
        setMsg(res.data.message);
        // setLogs(res); /// teak useContext
        navigate("/chat");
      })
      .catch((e) => {
        console.log({
          modal: e.message,
          error: e.response.data?.message,
        });

        setIsLoading(false);
      });
  };

  return (
    <>
      <Box className="flex flex-col gap-2">
        <Input
          id="email"
          variant="filled"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          variant="filled"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>

      <Button
        isLoading={isLoading}
        loadingText="Logging In"
        onClick={handleLogin}
      >
        Login
      </Button>
    </>
  );
}

export default Login;
