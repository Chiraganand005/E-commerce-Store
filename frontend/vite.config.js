import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 👈 your backend server port
        changeOrigin: true,
      },
    },
  },
});
// This configuration sets up Vite to use React and proxies API requests to the backend server running on port 5000.
// Make sure to adjust the target if your backend runs on a different port.