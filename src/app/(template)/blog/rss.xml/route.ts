import { Feed } from "feed";
import { blog } from "@/lib/source";
import { NextResponse } from "next/server";

export const revalidate = false;

const baseUrl = "https://ifelx.pages.dev";

export function GET() {
  const feed = new Feed({
    title: "I.Felx's Blog",
    id: `${baseUrl}/blog`,
    link: `${baseUrl}/blog`,
    language: "en",

    image: `${baseUrl}/banner.png`,
    favicon: `${baseUrl}/icon.png`,
    copyright: `Copyright © ${new Date().getFullYear()} I.Felx. All rights reserved.`,
  });

  for (const page of blog.getPages().sort((a, b) => {
    return (
      new Date(b.data.createdAt).getTime() -
      new Date(a.data.createdAt).getTime()
    );
  })) {
    feed.addItem({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      link: `${baseUrl}${page.url}`,
      date: new Date(page.data.createdAt),

      author: [
        {
          name: page.data.author,
        },
      ],
    });
  }

  return new NextResponse(feed.rss2());
}
