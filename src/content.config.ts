import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const voyages = defineCollection({
    loader: glob({ pattern: "*/index.{md,mdx}", base: "./src/content/voyages" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        order: z.number(),
    }),
});

const expeditions = defineCollection({
    loader: glob({ pattern: "*/!(index).{md,mdx}", base: "./src/content/voyages" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        order: z.number(),
    }),
});

export const collections = { voyages, expeditions };
