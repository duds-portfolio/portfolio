import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    authorImage: z.string().optional(),
    authorName: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const caseStudies = defineCollection({
  // Load Markdown and MDX files in the `src/content/case-studies/` directory.
  loader: glob({ base: "./src/content/case-studies", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string().optional(),
    ogImage: z.string().optional(),
    client: z.string(),
    industry: z.string(),
    duration: z.string(),
    year: z.string(),
    challenge: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    category: z.enum([
      "government",
      "regulatory",
      "education",
      "enterprise",
      "service-design",
      "policy",
    ]),
  }),
});

export const collections = { blog, caseStudies };
