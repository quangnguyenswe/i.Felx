"use client";
import dynamic from "next/dynamic";
import { PlusSeparator } from "@/components/ui/plus-separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

const Dithering = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.Dithering),
  {
    ssr: false,
  },
);

export function HeaderBanner() {
  const [showShaders, setShowShaders] = useState(false);
  useEffect(() => {
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
          <div className="h-62.5 w-full opacity-20">
            <Dithering
              height={250}
              colorBack="#ffffff00"
              shape="simplex"
              speed={0.4}
              scale={isMobile ? 0.4 : 0.8}
              offsetX={1}
              offsetY={0.6}
              className="h-full w-full animate-fd-fade-in bg-background/20 duration-1000"
            />
          </div>
        ) : (
          <div className="h-62.5 w-full" />
        )}
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full text-white mix-blend-difference">
          <div className="mx-10 mt-12 flex h-full flex-col">
            <h2 className="text-2xl md:text-4xl">attributes.</h2>
            <p className="max-w-2xl text-sm md:text-base">
              i have to come clean about this portfolio. it's not my design nor
              fully developed by me. it's a template that attracted me with its
              unique layout and simplicity. while the design may not be entirely
              original, the content and the way i present myself through it is
              authentically me. hope you enjoy exploring it as much as i enjoyed
              putting it together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
