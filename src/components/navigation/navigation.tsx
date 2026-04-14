"use client";

import { useEffect, useState } from "react";

import { useIsMobile } from "@/hooks/use-mobile";

import { ChartNoAxesGantt, Undo } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

import {
  backItems,
  navItems,
  separatorItems,
  shadeExcludeItems,
} from "@/constants/navigation";
import { PlusSeparator } from "../ui/plus-separator";
import ThemeSwitch from "./theme-switch";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const isMobile = useIsMobile({ breakpoint: 512 });

  const [isMounted, setIsMounted] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {matchPath(pathname, shadeExcludeItems) ? null : (
        <div
          className="-z-50 absolute top-0 right-0 left-0 mx-auto"
          style={{ filter: "blur(clamp(200px, 10vw, 250px))" }}
        >
          <span
            className="absolute top-0 right-0 left-0 m-0 mx-auto h-[25vh] w-[90vw] bg-[#1D1EF0] p-0 sm:h-[15vh] md:h-[10vh] md:w-[80vw] dark:bg-[#6964ED]/80"
            style={{
              clipPath: "polygon(0% 51%, 50% 0%, 100% 51%, 100% 100%, 0% 100%)",
            }}
          />
        </div>
      )}
      <div
        className={`fixed top-0 right-0 left-0 z-50 h-(--navbar-height) border-separator/10 border-b p-4 backdrop-blur-sm transition duration-300 ${!isAtTop && "bg-background/50 dark:bg-background/30"}`}
      >
        <div className="inner flex items-center justify-between md:px-8">
          {matchPath(pathname, separatorItems) && (
            <div className="inner absolute right-0 bottom-0 left-0">
              <PlusSeparator
                position={["bottom-left", "bottom-right"]}
                child={{
                  "bottom-left": { className: "-bottom-[5px] -left-[3px]" },
                  "bottom-right": { className: "-bottom-[5px] -right-[4px]" },
                }}
              />
            </div>
          )}
          <div className="flex items-center gap-1">
            {isMounted && isMobile && (
              <Drawer
                open={open}
                onOpenChange={setOpen}
                direction={!isMobile ? "left" : "top"}
              >
                <DrawerTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="gap-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                  >
                    <ChartNoAxesGantt />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="p-0">
                  <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
                  <div className="overflow-auto p-6">
                    <div className="flex flex-col space-y-3">
                      {isMobile &&
                        navItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => {
                              setOpen(false);
                            }}
                            className="font-montreal text-2xl"
                          >
                            {item.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            )}
            <Link
              href="/"
              className="font-medium font-mono text-xs sm:text-base"
            >
              Felx.i
            </Link>
            {matchPath(pathname, backItems) && (
              <Link href="/blog" className="flex h-4 items-center">
                <Separator orientation="vertical" className="mr-0 ml-2" />
                <button type="button" className="py-2 pr-2 pl-4">
                  <Undo size={16} />
                </button>
              </Link>
            )}
          </div>
          <div className="flex items-center gap-6">
            {isMounted && !isMobile && (
              <nav className="flex gap-4 font-montreal-mono text-xs transition-opacity duration-300">
                {navItems.map((item) => (
                  <Link key={item.title} href={item.href}>
                    {item.title}
                  </Link>
                ))}
              </nav>
            )}
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </>
  );
}

function matchPath(pathname: string, patterns: string[]): boolean {
  return patterns.some((pattern) => {
    if (pattern === pathname) return true;

    if (pattern.includes("/**")) {
      const basePattern = pattern.replace("/**", "");
      return pathname.startsWith(basePattern);
    }

    if (pattern.includes("/*")) {
      const regexPattern = pattern
        .split("/")
        .map((segment) => {
          if (segment === "*") return "[^/]+";
          return segment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        })
        .join("/");

      const regex = new RegExp(`^${regexPattern}$`);
      return regex.test(pathname);
    }

    return false;
  });
}
