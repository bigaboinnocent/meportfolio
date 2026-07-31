import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // In split dev mode (frontend on 5173, backend on 5000), this forwards
    // relative /api calls to the backend so the app can always just call
    // "/api/...", whether it's served by Vite (dev) or by Express (prod).
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
