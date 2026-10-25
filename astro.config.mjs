import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://chmmao.github.io', trailingSlash: 'always', redirects: { '/updates/site-launch/': '/', '/de/updates/site-launch/': '/de/', '/zh/updates/site-launch/': '/zh/' }, prefetch: { prefetchAll: true, defaultStrategy: 'hover' } });
