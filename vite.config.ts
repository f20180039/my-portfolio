import checker from "vite-plugin-checker";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: {
        tsconfigPath: "./tsconfig.app.json", // Ensure correct tsconfig is used
        // overlay: true,
      },
    }),
  ],
});
