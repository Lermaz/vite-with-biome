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
  test: {
    globals: true,
    // environment: "jsdom",
    // setupFiles: "./src/test/setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    coverage: {
      reporter: ["text", "json", "html"],
      enabled: true,
      exclude: ["**/html/assets/**"],
    },
    reporters: ["html"],
  },
});
