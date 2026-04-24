import RootTemplate from "./(template)/template";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GridBox from "@/components/grid-box";

export default function NotFoundPage() {
  return (
    <RootTemplate>
      <main className="from-background to-secondary/10 flex min-h-screen flex-col items-center justify-center bg-linear-to-b p-4">
        <div className="w-full max-w-3xl space-y-4 lg:space-y-8">
          <div className="bg-primary/5 border-primary/10 relative flex h-64 items-center justify-center overflow-hidden rounded-lg border sm:h-80">
            <GridBox />
            <div className="relative z-10 text-center">
              <div className="text-primary mb-4 text-8xl font-black tracking-tighter sm:text-9xl">
                404
              </div>
              <div className="text-foreground text-xl font-medium sm:text-2xl">
                Page Not Found
              </div>
            </div>
            <div className="from-background/80 absolute right-0 bottom-0 left-0 h-1/3 bg-linear-to-t to-transparent"></div>
          </div>
          <div className="flex justify-center">
            <Link
              data-slot="button"
              data-variant="outline"
              data-size="lg"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4 group"
              href="/"
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </RootTemplate>
  );
}
