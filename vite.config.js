import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HOST = "0.0.0.0";
const REPLACEMENT = `${path.resolve(__dirname, "./src")}/`;

export default defineConfig({
  base: "./",
  server: {
    host: HOST,
  },
  resolve: {
    extensions: [".vue", ".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: [
      {
        find: "@/",
        replacement: REPLACEMENT,
      },
      {
        find: "src/",
