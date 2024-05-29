import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    prefetch: {
        prefetchAll: true
    },
    integrations: [tailwind()],
    site: 'https://owee24.aegee-delft.nl',
});