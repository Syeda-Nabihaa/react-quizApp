import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { transformWithEsbuild } from "vite"; // Ensure this is imported

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "load+transform-js-files-as-jsx",
      async transform(code, id) {
        if (id.endsWith(".js")) {
          return transformWithEsbuild(code, id, {
            loader: "jsx", // Ensure JSX loader is applied
            jsx: "automatic", // Use the automatic JSX transform
          });
        }
        return null;
      },
    },
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx", // Enable JSX for .js files
      },
    },
  },

});