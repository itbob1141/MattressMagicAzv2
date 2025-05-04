// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: "https://mattressmagicaz.com",
  output: "static",
  integrations: [tailwind(), icon(), sitemap(), react()],
});