// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tiesse-group.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['it', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  redirects: {
    // Le vecchie pagine Real Estate sono spostate in C&T Developments con un
    // 301 vero, scritto in netlify.toml: qui non vanno, altrimenti Astro
    // genererebbe una pagina ponte che copre il 301.
    '/en': '/tiesse-servizi'
  },
  // Le pagine /proposta-* sono prove di design: noindex e fuori dalla sitemap.
  integrations: [sitemap({
    filter: (page) => !page.includes('/proposta-') && !page.includes('/bivio-')
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});