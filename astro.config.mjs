// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://ukaa.no",
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Allow remote Cloudinary images as well
    domains: ["res.cloudinary.com"],
  },

  // Framework + media integrations
  integrations: [astroIcon(), mdx()],

  adapter: netlify(),
});
