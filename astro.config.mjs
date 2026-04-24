// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tiesse-group.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  redirects: {
    '/en': '/'
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});