import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    year: z.number(),
    category: z.enum(['residential', 'commercial', 'mixed-use', 'renovation']),
    coverImage: image(),
    gallery: z.array(image()).optional(),
    specs: z.object({
      area: z.string().optional(),
      budget: z.string().optional(),
      duration: z.string().optional(),
      client: z.string().optional(),
      features: z.array(z.string()).optional()
    }).optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
  })
});

export const collections = {
  projects: projectsCollection,
};
