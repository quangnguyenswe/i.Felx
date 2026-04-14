import ReactLenis from "lenis/react";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";
import { Toaster } from "@/components/ui/sonner";

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <>
      <NextThemesProvider
        {...props}
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        <ReactLenis root>{children}</ReactLenis>
        <Toaster richColors expand />
      </NextThemesProvider>
    </>
  );
}
