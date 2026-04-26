import { MetadataRoute } from "next";

export const baseUrl = (path: string) => `https://ifelx.pages.dev${path}`;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl("/"),
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: baseUrl("/about"),
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseUrl("/projects"),
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseUrl("/blog"),
      lastModified: new Date("2026-04-25"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: baseUrl("/attribute"),
      lastModified: new Date("2026-04-25"),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}
