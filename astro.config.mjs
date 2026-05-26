// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://everayy.com',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
});
