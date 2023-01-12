import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";

// https://vitejs.dev/config/
// dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  server: {
    proxy: {
      // "/api": "http://localhost:8080",
      "/api": "https://chat-app-server-one.vercel.app",
    },
  },
  plugins: [react()],
});
