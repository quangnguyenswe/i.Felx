'use client';
import Link from "next/link";
import { PlusSeparator } from "../ui/plus-separator";
import dynamic from "next/dynamic";

const SkillsSection = dynamic(() => import("./skills"), { ssr: false });

export default function AboutSection() {
  return (
    <>
      <main className="w-full border-separator/10 border-t">
        <div className="inner relative flex h-full flex-col border-separator/10 border-x px-2 text-sm sm:px-4 sm:text-base xl:flex-row xl:justify-between xl:px-8">
          <div className="py-24 xl:max-w-7/11">
            <h1 className="text-lg md:text-5xl mb-4">Hi there,</h1>
            <p>
              i&apos;m Felix. i&apos;m a software developer from Vietnam with a
              strong foundation in full-stack development, and a passion for
              building scalable and efficient applications. i have experience
              working with diverse technologies and framworks.
            </p>
            <br />
            <p>
              As a developer, i am constantly learning and exploring new
              technologies to stay up-to-date with the latest trends in the
              industry.
            </p>
          </div>
          <div className="relative mx-auto mb-2 flex w-full max-w-sm items-center justify-center md:mb-6 lg:mb-12 xl:mb-0">
            <div className="flex flex-col justify-between rounded-xs border bg-muted/50 p-4 shadow-sm dark:bg-muted/20">
              <h2 className="font-semibold text-lg">Philosophy</h2>
              <p className="mt-1 leading-tight">
                I strongly believe that the power of technology to create
                positive change, and I am always eager to learn and grow as a
                developer.
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
