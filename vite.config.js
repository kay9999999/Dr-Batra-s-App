// frontend/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // or another plugin if you're not using React

export default defineConfig({
  plugins: [react()],
  base: "/", // This sets the public path for your assets (adjust as needed)
  build: {
    outDir: "../drbatra/dist", // This outputs the built files to the 'backend/dist' folder
  },
});
