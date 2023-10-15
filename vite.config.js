import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [svelte()],
  server: {
    host: true,
    port: 8000,
    watch: {
      usePolling: true,
    },
  },
});
