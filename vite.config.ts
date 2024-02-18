import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import biomePlugin from "vite-plugin-biome";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    biomePlugin({
      mode: "check",
      files: "src",
      applyFixes: true,
      failOnError: true,
    }),
  ],
  server: {
    port: 4200,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    // css: true,
    coverage: {
      reporter: ["text", "json", "html"],
      enabled: true,
      exclude: ["**/html/assets/**"],
    },
    reporters: ["html"],
  },
});
