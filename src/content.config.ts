// z se importa de astro:content porque su BaseSchema no acepta zod externo
// eslint-disable-next-line @typescript-eslint/no-deprecated
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  title: z.string(),
  summary: z.string().max(140),
  role: z.enum(['Full-stack', 'Frontend', 'Backend', 'Mobile']),
  stack: z.array(z.string()),
  client: z.string(),
  year: z.number(),
  featured: z.boolean().default(false),
  order: z.number().optional(),
  demoUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  cover: z.string().optional(),
  draft: z.boolean().default(false),
});

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: projectSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: projectSchema,
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { proyectos, projects, blog };
