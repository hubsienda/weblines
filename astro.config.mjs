import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://siendaweblines.com',
  integrations: [
    mdx(),
    sitemap()
  ],
  redirects: {
    '/legal': 'https://sienda.co.uk/legal/'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  },
  vite: {
    build: {
      cssCodeSplit: true
    }
  }
});
