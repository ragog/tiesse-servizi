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
    '/en': '/tiesse-servizi'
  },
  // La pagina CT Investing Capital non e' finita: fuori dalla sitemap
  // finche' non viene collegata dal bivio.
  integrations: [sitemap({
    filter: (page) => !page.includes('ct-investing-capital')
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});