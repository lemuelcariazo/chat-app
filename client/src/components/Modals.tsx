import { useState } from "react";
import { Box, Button, ScaleFade, useDisclosure } from "@chakra-ui/react";

type tMsg = {
  msg?: string;
  sendModal?: boolean;
};

function Modals({ msg, sendModal }: tMsg) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [value, setValue] = useState<any>(sendModal);

  return (
    <>
      <ScaleFade initialScale={0.2} in={sendModal}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          {msg}
        </Box>
      </ScaleFade>
    </>
  );
}

export default Modals;
