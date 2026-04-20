import path from "node:path";
import { DocsPage } from "fumadocs-ui/layouts/docs/page";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { InlineTOC } from "@/components/markdown/inline-toc";
import { getMDXComponents } from "@/components/markdown/mdx-components";
// import { createMetadataBlog, getBlogPageImage } from "@/lib/metadata";
import { blog } from "@/lib/source";
import { cn } from "@/lib/utils";
// import { ShareButton } from "./page.client";

export default async function Page(props: PageProps<"/blog/[slug]">) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const { body: Mdx, toc } = await page.data.load();

  const filteredToc = toc.filter((item) => item.depth <= 2);

  const image = {
    data: page.data.image, // || getBlogPageImage(page).url,
    invertable: !page.data.image,
    width: 1200,
    height: 630,
  };

  return (
    <DocsPage
      toc={filteredToc}
      full={page.data.full}
      breadcrumb={{ enabled: false }}
      tableOfContent={{
        style: "clerk",
      }}
      tableOfContentPopover={{
        style: "clerk",
      }}
      footer={{
        enabled: false,
      }}
    >
      <article className="mx-auto flex w-full max-w-200 flex-col px-4 py-16">
        <h1 className="mb-4 font-semibold text-3xl">{page.data.title}</h1>
        <section className="prose dark:prose-invert flex min-w-full items-center justify-between">
          <div className="not-prose mb-8 flex flex-row gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Written by</p>
              <p className="text-muted-foreground text-sm">At</p>
            </div>
            <div>
              <p className="font-medium">{page.data.author}</p>
              <p className="font-medium">
                {new Date(
                  page.data.createdAt ??
                    path.basename(page.path, path.extname(page.path)),
                ).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
          <div className="not-prose mb-8 flex flex-row gap-2">
            {/* <ShareButton url={page.url} /> */}
          </div>
        </section>
        {image.data?.url && (
          <Image
            src={image.data?.url ?? "/assets/blog/default.png"}
            alt="Blog Post Image"
            width={image.width}
            height={image.height}
            className={cn(
              "mx-auto mb-2 max-w-full rounded-md md:max-w-prose",
              image.invertable && "invert-100 dark:invert-0",
            )}
            unoptimized
          />
        )}
        {image.data && image.data?.description && (
          <p
            className="text-center text-sm text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: image.data.description }}
          />
        )}
        <div className="prose dark:prose-invert mx-auto min-w-0 flex-1">
          {page.data.tags?.includes("personal-opinion") && (
            <p className="mt-8 rounded-md border-yellow-500 border-l-4 bg-yellow-300/50 p-4 text-xs md:text-sm">
              ⚠️ <strong>Personal Opinion:</strong> The views expressed in this
              blog post are solely my own and do not represent the opinions of
              any organization or entity I may be affiliated with. And remember,
              you can always disagree with me!
            </p>
          )}
          <InlineTOC items={filteredToc} className="mt-2 mb-4" />
          <Mdx components={getMDXComponents()} />
        </div>
      </article>
    </DocsPage>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
