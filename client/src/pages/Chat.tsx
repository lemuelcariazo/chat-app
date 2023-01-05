import React, { useState, useEffect } from "react";
import {
  Button,
  useControllableProp,
  useControllableState,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Chat() {
  // const [isLogout, setIsLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    axios
      .delete("http://localhost:8080/api/logout")
      .then((res) => {
        console.log(res.data.message);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/protected")
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1>Hi I am Chat page</h1>
      <Button
        colorScheme="twitter"
        onClick={handleLogout}
        leftIcon={<ArrowDownIcon />}
      >
        Logout
      </Button>
    </div>
  );
}

export default Chat;
