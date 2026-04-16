// source.config.ts
import {
  defineCollections,
  defineConfig,
  frontmatterSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var blog = defineCollections({
  type: "doc",
  dir: "src/content/blogs",
  schema: frontmatterSchema.extend({
    author: z.string(),
    createdAt: z.iso.date().or(z.date()),
    image: z.object({
      url: z.url(),
      description: z.string().optional()
    }).optional(),
    tags: z.array(z.string()).optional(),
    hidden: z.boolean().optional()
  }),
  async: true
});
var source_config_default = defineConfig();
export {
  blog,
  source_config_default as default
};
