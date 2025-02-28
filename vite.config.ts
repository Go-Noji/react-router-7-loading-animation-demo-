import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/react-router-7-loading-animation-demo-/",
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
