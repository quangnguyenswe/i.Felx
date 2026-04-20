"use client";

import Link from "next/link";
import { PlusSeparator } from "../ui/plus-separator";
import dynamic from "next/dynamic";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const SkillsSection = dynamic(() => import("./skills"), { ssr: false });

export default function AboutSection() {
  return (
    <>
      <main className="w-full border-separator/10 border-t">
        <div className="inner relative flex h-full flex-col border-separator/10 border-x px-2 text-sm sm:px-4 sm:text-base xl:flex-row xl:justify-between xl:px-8">
          <div className="py-24 xl:max-w-7/11">
            <h1 className="text-lg md:text-5xl mb-4">Hi there,</h1>
            <p>
              i&apos;m a software developer from Vietnam. And for my real name,
              I&apos;m sure you will find it difficult to pronounce so just call
              me{" "}
              <Tooltip>
                <TooltipTrigger
                  render={
                    <span className="underline cursor-pointer">Felix</span>
                  }
                />
                <TooltipContent>
                  <p>trust me, it&apos;s easier this way 😉</p>
                </TooltipContent>
              </Tooltip>
              . i love building things and constantly learning and exploring new
              technologies to stay up-to-date with the latest trends in the
              industry.
            </p>
            <br />
            <p>
              i start my journey thinking being a frontend developer is all i
              want to do. Till i discovered the magic behind the scenes (server
              infrastructure, system design, ...). and guess what? now i do
              full-stack development and i love it. i enjoy the process of
              building and learning new things, and i am always looking for new
              challenges to push myself to grow as a developer.
            </p>
          </div>
          <div className="relative mx-auto mb-2 flex w-full max-w-sm items-center justify-center md:mb-6 lg:mb-12 xl:mb-0">
            <div className="flex flex-col justify-between rounded-xs border bg-muted/50 p-4 shadow-sm dark:bg-muted/20">
              <h2 className="font-semibold text-lg">Philosophy</h2>
              <p className="mt-1 leading-tight">
                As developers, we do it not because it is easy, but because we
                thought it would be easy.
              </p>
              <br />
              <p>
                Yeah we spend 6 hours to automate a 5 minutes task, but it is
                fun and rewarding. right? right.
              </p>
              <Link
                href="/about"
                className="mt-2 font-mono text-blue-600 text-sm hover:underline dark:text-blue-400"
              >
                [/about]
              </Link>
            </div>
          </div>
          <PlusSeparator position={["top-left", "top-right"]} />
        </div>
      </main>

      <SkillsSection />
    </>
  );
}
