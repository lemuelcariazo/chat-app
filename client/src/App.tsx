import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log(count);
  return (
    <div className="App">
      <>
        <h1>Hello, World</h1>
        <button onClick={(e) => setCount(count + 1)}></button>
      </>
    </div>
  );
}

export default App;
