import type { Metadata } from "next/types";

export function createMetadataBlog(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://ifelx.pages.dev",
      images: "/banner.png", // Default image for blog posts
      siteName: "I.felx's blog.",
      ...override.openGraph,
    },
    alternates: {
      types: {
        "application/rss+xml": [
          {
            title: "I.felx's Blog",
            url: "https://ifelx.pages.dev/blog/rss.xml",
          },
        ],
      },
      ...override.alternates,
    },
  };
}
