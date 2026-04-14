"use client";

import { useEffect, useState } from "react";
import { PlusSeparator } from "../ui/plus-separator";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import Link from "next/link";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function HeroSection() {
  return (
    <section className="relative flex flex-col">
      <div
        className={cn(
          "inner relative flex h-[70vh] flex-col justify-around border-separator/10 border-x px-4 transition-all *:transition-all sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-16",
          // backgroundImageVariants({ variant: currentTheme }),
        )}
      >
        <span className="flex flex-col *:transition-all lg:pb-64">
          <h1 className="font-medium font-montreal text-3xl sm:text-4xl lg:text-[2.5rem] lg:leading-14">
            Hows it goin', Felix here 👋
          </h1>
          <p className="max-w-112.5 text-xs leading-4 sm:text-sm lg:text-base lg:leading-5">
            a software developer with a strong foundation in full-stack
            development, and a passion for building scalable and efficient
            applications.
          </p>
        </span>
        <span className="flex w-full justify-center md:w-auto md:justify-end">
          <p className="w-full max-w-87.5 text-center font-montreal-mono text-muted-foreground text-xs sm:text-sm md:text-base lg:w-auto lg:pt-52 lg:text-end">
            &quot;Don’t do what you’ll regret. If you’ve already done it, don’t
            waste time regretting it.&quot;
          </p>
        </span>
      </div>
      <div className="border-separator/10 border-t">
        <div className="inner relative m-auto border-separator/10 border-x p-4">
          <span className="relative flex items-center justify-between font-montreal-mono text-xs opacity-90 transition-opacity duration-300 dark:opacity-75">
            <Link href="https://time.is/Hanoi" target="_blank">
              [<LocalTime />]
            </Link>
          </span>
          <PlusSeparator position={["top-left", "top-right"]} />
        </div>
      </div>
    </section>
  );
}

const LocalTime = dynamic(
  () =>
    Promise.resolve(() => {
      const [localTime, setLocalTime] = useState<string>(
        dayjs().tz("Asia/Ho_Chi_Minh").format("h:mm A"),
      );

      useEffect(() => {
        const timeInterval = setInterval(() => {
          setLocalTime(dayjs().tz("Asia/Ho_Chi_Minh").format("h:mm A"));
        }, 5000);

        return () => clearInterval(timeInterval);
      }, []);

      return <>{localTime}</>;
    }),
  { ssr: false },
);
