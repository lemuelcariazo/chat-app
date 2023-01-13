import React, { useState, useContext } from "react";
import {
  Button,
  Box,
  Spinner,
  useControllableProp,
  useControllableState,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { UserContext } from "../utils/UserContext";
import useConfig from "../hooks/useConfig";

function Chat() {
  const navigate = useNavigate();
  const { config } = useConfig();
  const [isLoading, setIsloading] = useState<boolean>(false);

  const { data, loading, error } = useFetch(config.BASE_URL + "/api/protected");

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const response = await axios.delete(config.BASE_URL + "/api/logout");
      console.log({
        modal: response.data?.message,
      });
      navigate("/");
    } catch (e: any) {
      console.log({
        error: e.response.data.message,
      });
    } finally {
      setIsloading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Box className="h-screen w-screen flex justify-center items-center flex-col">
          <Spinner size="xl" />
        </Box>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
          {/* <h1>Test UseContext: {msg}</h1> */}
          <h1 className="font-extrabold">{`Hi, Welcome ${data?.username}`}</h1>
          <Box>
            <h1 className="text-40 font-extrabold w-screen text-center">
              This Chat page is Under Construction, Stay tuned!
            </h1>
          </Box>
          <Button
            isLoading={isLoading}
            colorScheme="twitter"
            onClick={handleLogout}
            leftIcon={<ArrowDownIcon />}
            className="mt-11"
          >
            Logout
          </Button>
        </div>
      )}
    </>
  );
}

export default Chat;
