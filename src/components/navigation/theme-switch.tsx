import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function ThemeSwitch({
  className,
  onClick,
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size" | "variant">) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
    setMounted(true);
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  if (!mounted) {
    return <Skeleton className={cn("h-8 w-16 rounded-full px-6", className)} />;
  }

  return (
    <Button
      className="h-8 rounded-full shadow-xl has-[>svg]:px-6"
      size="sm"
      variant="outline"
      onClick={(e) => {
        setTheme(theme === "dark" ? "light" : "dark");
        onClick?.(e);
      }}
      {...props}
    >
      {theme === "dark" ? (
        <>
          <Moon size={13.5} suppressHydrationWarning />
          <span className="sr-only">Switch to light mode</span>
        </>
      ) : (
        <>
          <Sun size={13.5} suppressHydrationWarning />
          <span className="sr-only">Switch to dark mode</span>
        </>
      )}
    </Button>
  );
}
