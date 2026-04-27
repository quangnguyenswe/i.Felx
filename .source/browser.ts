// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blog: create.doc("blog", {"blog-guide.mdx": () => import("../src/content/blogs/blog-guide.mdx?collection=blog"), "nextjs-cloudflare-pages-guide.mdx": () => import("../src/content/blogs/nextjs-cloudflare-pages-guide.mdx?collection=blog"), }),
};
export default browserCollections;