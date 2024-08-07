import { defineConfig } from 'astro/config';
import favicons from "astro-favicons"; // Add code manually

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'nl',
        locales: ['nl', 'en'],
    },
    integrations: [
        favicons(
            {
                appName: "Avontuur aan de Horizon - AEGEE-Delft",
                appShortName: "AEGEE-Delft OWee",
                appDescription: "Avontuur aan de Horizon - AEGEE-Delft OWee 2024",
                lang: "nl-NL",
                emitAssets: true,
                masterPicture: "src/favicon.svg"
            }
        )
    ]

});
