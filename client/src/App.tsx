import "./App.css";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Headers from "./components/Headers";

import { Routes, Route } from "react-router-dom";
import axios from "axios"

axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <div className="App h-screen w-screen flex justify-center items-center">
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
