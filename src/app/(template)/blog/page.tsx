import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PlusSeparator } from "@/components/ui/plus-separator";
import { cn } from "@/lib/utils";
import { blog } from "@/lib/source";
import { HeaderBanner } from "@/components/blog/HeaderBanner";
import { PathUtils } from "fumadocs-core/source";
import Link from "next/link";

export default function BlogPage() {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.createdAt ?? getName(b.path)).getTime() -
      new Date(a.data.createdAt ?? getName(a.path)).getTime(),
  );
  return (
    <main>
      <section className="w-full border-separator/10 border-b">
        <div className="inner relative flex h-16 gap-2 border-separator/10 border-x"></div>
      </section>
      <HeaderBanner />
      <section className="w-full border-separator/10 border-b">
        <div className="inner relative grid grid-cols-1 gap-2 border-separator/10 border-x px-2 py-16 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="group relative flex flex-col overflow-hidden rounded-xs border border-separator/10 bg-background pb-6 transition *:px-6 hover:border-foreground/20"
            >
              <span className="relative h-64 w-full p-0!">
                <Image
                  src={post.data.image?.url ?? "/static/images/portfolio.png"}
                  alt={post.data.title}
                  className={cn(
                    "rounded-xs object-cover h-64",
                  )}
                  fill
                  unoptimized
                />
              </span>
              <p className="mt-5 font-medium text-lg leading-5">
                {post.data.title}
              </p>
              <p className="mt-px text-fd-muted-foreground text-sm leading-4.5">
                {post.data.description}
              </p>

              <span className="mt-4 flex items-center justify-between">
                <span className="inline-flex text-brand text-xs">
                  {(post.data.tags ?? []).map((tag, idx) => (
                    <span key={tag} className="inline-flex h-4 items-center">
                      <Badge>{tag}</Badge>
                      {idx !== (post.data.tags?.length ?? 0) - 1 && (
                        <Separator orientation="vertical" className="mx-1" />
                      )}
                    </span>
                  ))}
                </span>
                <p className="mt-auto text-brand text-xs">
                  {new Date(
                    post.data.createdAt ?? getName(post.path),
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </span>
            </Link>
          ))}
          <PlusSeparator
            position={["bottom-left", "bottom-right"]}
            main={{ className: "z-20" }}
          />
        </div>
        {posts.length > 3 && (
          <div className="inner relative grid grid-cols-1 gap-2 border-separator/10 border-x px-2 py-16 border-t mx-auto">
            <div className="w-full sm:max-w-[70%] mx-auto">
              <h2 className="text-2xl font-bold mb-4">More Posts</h2>
              <div>
                {posts.slice(3).map((post) => (
                  <Link
                    className="text-md group flex items-center justify-between border-b py-2 text-primary no-underline hover:text-blue-400"
                    key={post.url}
                    href={post.url}
                  >
                    <span className="text-sm transition-transform group-hover:translate-x-2 md:text-base">
                      {post.data.title}
                    </span>

                    <span className="block text-xs text-muted-foreground">
                      &raquo;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function getName(path: string) {
  return PathUtils.basename(path, PathUtils.extname(path));
}
