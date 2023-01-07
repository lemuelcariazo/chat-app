import React from "react";
import UserCredentials from "../components/user";
import axios from "axios";

axios.defaults.withCredentials = true;

function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <UserCredentials />
    </div>
  );
}

export default Home;
