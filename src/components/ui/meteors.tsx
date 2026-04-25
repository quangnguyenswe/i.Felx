"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteorCount = number || 20;
  const meteors = new Array(meteorCount).fill(true);
  return (
    <motion.div
      className="relative h-full w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((_, idx) => {
        // Spread meteors across the full container width.
        const position = (idx / meteorCount) * 100;
        // Keep meteor timings deterministic to prevent hydration mismatches.
        const animationDelay = ((idx * 73) % 500) / 100;
        const animationDuration = 5 + ((idx * 91) % 500) / 100;

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-45 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-px before:w-12.5 before:-translate-y-[50%] before:transform before:bg-linear-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: "-40px", // Start above the container
              left: position + "%",
              animationDelay: animationDelay + "s",
              animationDuration: animationDuration + "s",
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
