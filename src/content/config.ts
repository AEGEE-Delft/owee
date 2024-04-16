import { defineCollection, z } from "astro:content";

const committeeCollection = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        image: z.string().optional(),
    })
});

const calendarCollection = defineCollection({
    type: "data",
    schema: z.object({
        
    })
})

export const collections = {
    "committees": committeeCollection,
}
