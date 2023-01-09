import React from "react";

function useConfig() {
  type Config = {
    BASE_URL: string;
  };

  const config: Config = {
    BASE_URL: "http://localhost:8080/api/",
  };

  return { config };
}

export default useConfig;
