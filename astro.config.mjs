// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Your live Vercel URL — needed by the sitemap plugin to generate absolute URLs
  site: 'https://muz-coffee-journey.vercel.app',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});