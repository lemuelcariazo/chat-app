import "./App.css";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Headers from "./components/Headers";

import { Routes, Router, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { UserContext } from "./utils/UserContext";

axios.defaults.withCredentials = true;

function App() {
  const [v, setV] = useState("hello Chat");

  return (
    <>
      <div className="App h-screen w-screen flex justify-center items-center flex-col">
        <Headers />
        <UserContext.Provider value={{ v, setV }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
