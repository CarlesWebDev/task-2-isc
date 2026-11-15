import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['.ngrok-free.app'],
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
             
              name: "react-vendor",
              test: /node_modules[\\/](react|react-dom|react-router)/,
              priority: 20,
            },
            {
              name: "vendor",
              test: /node_modules/,
              minSize: 50000,  // 50 kB
              maxSize: 250000, // 250 kB
              priority: 10,
            },
          ],
        },
      },
    },
  },
});
