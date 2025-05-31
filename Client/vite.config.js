import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/bms/v1": {
        target: "https://bookmyshow-backend-vj31.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
