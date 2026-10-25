import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const blog = defineCollection({loader: glob({pattern: '**/*.md', base: './src/content/blog'}), schema: z.object({lang:z.enum(['en','de','zh']).default('en'),title:z.string(),description:z.string(),date:z.coerce.date(),draft:z.boolean().default(false)})});
export const collections = { blog };
