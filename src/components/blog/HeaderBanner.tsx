"use client";

import { PlusSeparator } from "@/components/ui/plus-separator";
import { useIsMobile } from "@/hooks/use-mobile";
import dynamic from "next/dynamic";
import { lazy, useEffect, useState } from "react";

const GrainGradient = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.GrainGradient),
  {
    ssr: false,
  },
);

export function HeaderBanner() {
  const [showShaders, setShowShaders] = useState(false);
  useEffect(() => {
    // apply some delay, otherwise on slower devices, it errors with uniform images not being fully loaded.
    setTimeout(() => {
      setShowShaders(true);
    }, 400);
  }, []);

  const isMobile = useIsMobile();

  return (
    <section className="w-full border-separator/10 border-b">
      <div className="inner relative flex min-h-62.5 border-separator/10 border-x">
        <PlusSeparator
          position={["top-left", "top-right", "bottom-left", "bottom-right"]}
          main={{ className: "z-20" }}
        />
        {showShaders ? (
          <div className="h-62.5 w-full">
            <GrainGradient
              height={250}
              colors={["#00bba7", "#9ce685", "#f9f871"]}
              colorBack="#ffffff00"
              softness={0.7}
              intensity={0.15}
              noise={isMobile ? 0.25 : 0.5}
              shape="wave"
              speed={0.7}
              scale={isMobile ? 1 : 2.5}
              offsetX={1}
              offsetY={0.6}
              className="w-full animate-fd-fade-in bg-background/20 duration-1000"
            />
          </div>
        ) : (
          <div className="h-62.5 w-full" />
        )}
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full text-slate-900 dark:text-white">
          <div className="mx-10 mt-12 flex h-full flex-col gap-4">
            <h2 className="text-2xl md:text-4xl">Blog</h2>
            <p className="max-w-2xl text-sm md:text-base">
              Just whatever ideas, thoughts on my mind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
