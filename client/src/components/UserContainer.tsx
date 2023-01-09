import Register from "./Register";
import Login from "./Login";

import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";

const UserContainer = () => {
  return (
    <>
      <Tabs
        isLazy
        isFitted
        variant="unStyled"
        w={["80%", "50%", "40%", "30%"]}
        h={["350", "350", "350", "350"]}
        boxShadow="2xl"
        className="rounded-md py-4"
      >
        <TabList className="mx-4">
          <Tab
            _selected={{
              color: "white",
              bg: "teal.400",
            }}
            boxShadow="2xl"
          >
            Login
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "teal.400",
            }}
            boxShadow="2xl"
          >
            Register
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="flex flex-col gap-32">
            <Login />
          </TabPanel>
          <TabPanel className="flex flex-col gap-8">
            <Register />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default UserContainer;
