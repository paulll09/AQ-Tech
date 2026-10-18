import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://aqtech.com.ar",
  // Emit page.html instead of page/index.html so clean URLs (no trailing
  // slash) are served with 200 instead of a directory redirect. See public/.htaccess.
  build: { format: "file" },
  trailingSlash: "never",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
