import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const planning = defineCollection({
    loader: glob({ pattern: "**/*.yaml", base: "src/planning" }),
    schema: ({ image }) => z.object({
        day: z.string(),
        date: z.date(),
        language: z.enum(["nl", "en"]),
        events: z.array(z.object({
            title: z.string(),
            time: z.string(),
            location: z.string(),
            description: z.string(),
            image: image(),
        }))

    })
});


export const collections = { planning };