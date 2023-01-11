function useConfig() {
  type Config = {
    BASE_URL: string;
  };

  const config: Config = {
    // BASE_URL: "http://localhost:8080/api/",
    // BASE_URL: "https://chat-app-server-tan.vercel.app/api/",
    // BASE_URL: "https://chat-app-server-affe.onrender.com/api/",
    BASE_URL: "https://chat-app-ruddy-one.vercel.app/api/",
  };

  return { config };
}

export default useConfig;
