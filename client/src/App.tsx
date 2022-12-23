import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {
  return (
    <div className="App dark:bg-slate-900 dark:text-slate-50 bg-slate-200 text-slate-900">
      <>
        <h1 className="p-2 border border-solid border-slate-900">
          Hello, World
        </h1>
        <Button colorScheme="teal" variant="outline">
          Click Me
        </Button>
      </>
    </div>
  );
}

export default App;
