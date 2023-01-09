import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Box } from "@chakra-ui/react";
import useConfig from "../hooks/useConfig";
import axios from "axios";

function Register() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cPassword, setCPassword] = useState<string>("");

  const { config } = useConfig();

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setUsername("");
    setEmail("");
    setPassword("");
    setCPassword("");
    if (password !== cPassword) {
      console.log("Password not match!");
    }
    try {
      const response: any = await axios.post(config.BASE_URL + "register", {
        email: email,
        username: username,
        password: password,
      });
      console.log({
        modal: response.data?.message,
      });
    } catch (e: any) {
      console.log({
        error: e.response.data.message,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Box className="flex flex-col gap-2">
        <Input
          type="name"
          value={username}
          id="username"
          variant="filled"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          variant="filled"
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="password"
          variant="filled"
          placeholder="Password"
        />
        <Input
          type="password"
          value={cPassword}
          onChange={(e) => {
            setCPassword(e.target.value);
          }}
          id="cPassword"
          variant="filled"
          placeholder="Confirm Password"
        />
      </Box>

      <Button isLoading={isLoading} onClick={handleRegister}>
        Register
      </Button>
    </>
  );
}

export default Register;
