import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // Ensures proper routing
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000, // Optional: Set the local dev server port 
  },
  preview: {
    port: 5000, // Optional: Set the preview server port
  }
});
