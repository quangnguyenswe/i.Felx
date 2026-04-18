import { PlusSeparator } from "@/components/ui/plus-separator";
import WorkCard from "@/components/work/work-card";
import { WorkHistoryProvider } from "@/components/work/work-history";
import { workHistory } from "@/constants/work";

export default function WorkPage() {
  return (
    <main>
      <section className="w-full border-separator/10 border-b">
        <div className="inner relative flex h-16 gap-2 border-separator/10 border-x p-2"></div>
      </section>

      <section className="w-full border-separator/10 border-b">
        <div className="inner relative flex min-h-62.5 border-separator/10 border-x">
          <PlusSeparator
            position={["top-left", "top-right", "bottom-left", "bottom-right"]}
            main={{ className: "z-20" }}
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full text-slate-900 dark:text-white">
            <div className="mx-10 mt-12 flex h-full flex-col gap-4">
              <h2 className="text-2xl md:text-4xl">My employment history</h2>
              <p className="max-w-2xl text-sm md:text-base">
                I have been fortunate to work with some amazing companies and
                teams throughout my career. Here is a brief overview of my
                professional journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-separator/10 border-b">
        <div className="inner relative flex h-16 gap-2 border-separator/10 border-x p-2"></div>
      </section>

      <section className="w-full border-separator/10">
        <div className="inner relative grid grid-cols-1 gap-2 border-separator/10 border-x p-2">
          <WorkHistoryProvider>
            {workHistory.map((work) => (
              <WorkCard key={work.company} work={work} />
            ))}
          </WorkHistoryProvider>
        </div>
      </section>
    </main>
  );
}
