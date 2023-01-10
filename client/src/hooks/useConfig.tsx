import React from "react";

function useConfig() {
  type Config = {
    BASE_URL: string;
  };

  const config: Config = {
    // BASE_URL: "http://localhost:8080/api/",
    BASE_URL: "https://chat-app-server-8pvy4xsxu-lemuelcariazo.vercel.app/",
  };

  return { config };
}

export default useConfig;
