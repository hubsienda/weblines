import { defineCollection, z } from 'astro:content';

const fieldNotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum([
      'Secure Exchange',
      'AI & Automation',
      'Market Intelligence',
      'Business Engineering'
    ]),
    featured: z.boolean().default(false),
    ctaType: z.enum([
      'jambastic',
      'qoobix',
      'sienda-media',
      'review',
      'diagnostic'
    ])
  })
});

export const collections = {
  fieldNotes
};
