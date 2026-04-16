import {
  defineCollections,
  defineConfig,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export const blog = defineCollections({
  type: "doc",
  dir: "src/content/blogs",
  schema: frontmatterSchema.extend({
    author: z.string(),
    createdAt: z.iso.date().or(z.date()),
    image: z
      .object({
        url: z.url(),
        description: z.string().optional(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
    hidden: z.boolean().optional(),
  }),
  async: true,
});

export default defineConfig();
