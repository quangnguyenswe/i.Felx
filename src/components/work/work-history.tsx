import { formatDate } from "@/lib/utils";
import type { ReactNode } from "react";

// Types
interface WorkHistoryProps {
  location?: string;
  startDate: string;
  endDate?: string;
  badges?: string[];
  children: ReactNode;
}

interface WorkHistoryTitleProps {
  children: ReactNode;
}

interface WorkHistoryDescriptionProps {
  children: ReactNode;
}

interface WorkHistoryProviderProps {
  children: ReactNode;
}

// Main container for WorkHistorys
export function WorkHistoryProvider({ children }: WorkHistoryProviderProps) {
  return (
    <div className="not-prose mx-auto max-w-5xl px-6 py-10 lg:px-10">
      <div className="relative">{children}</div>
    </div>
  );
}

// Individual WorkHistory entry
export function WorkHistory({ location, startDate, endDate, badges, children }: WorkHistoryProps) {
  const parsedStartDate = new Date(startDate);
  const formattedDate = formatDate(parsedStartDate);
  const parsedEndDate = endDate ? new Date(endDate) : null;
  const formattedEndDate = parsedEndDate ? formatDate(parsedEndDate) : "Present";
  const dateRange = `${formattedDate} - ${formattedEndDate}`;

  return (
    <div className="relative">
      <div className="flex flex-col gap-y-6 md:flex-row">
        {/* Left side - Date and Version */}
        <div className="shrink-0 md:w-48">
          <div className="pb-10 md:sticky md:top-24">
            <time className="mb-3 block font-medium text-muted-foreground text-sm">
              {dateRange}
            </time>

            {location && (
              <div className="relative z-10 px-2 inline-flex h-8 items-center justify-center rounded-lg border border-border font-bold text-foreground text-sm">
                {location}
              </div>
            )}
          </div>
        </div>

        {/* Right side - Content */}
        <div className="relative flex-1 pb-10 md:pl-8">
          {/* Vertical timeline line */}
          <div className="absolute top-2 left-0 hidden h-full w-px bg-border md:block">
            {/* Timeline dot */}
            <div className="-translate-x-1/2 absolute z-10 hidden size-3 rounded-full bg-primary md:block" />
          </div>

          <div className="space-y-6">
            <div className="relative z-10 flex flex-col gap-2">
              {/* Badges */}
              {badges && badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {badges.map((badge: string) => (
                    <span
                      key={badge}
                      className="flex h-6 w-fit items-center justify-center rounded-full border bg-muted px-2 font-medium text-muted-foreground text-xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// WorkHistory title
export function WorkHistoryTitle({ children }: WorkHistoryTitleProps) {
  return (
    <h2 className="text-balance font-semibold text-2xl tracking-tight">
      {children}
    </h2>
  );
}

// WorkHistory description
export function WorkHistoryDescription({ children }: WorkHistoryDescriptionProps) {
  return (
    <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 [&_b]:text-primary [&_b]:underline prose-headings:text-balance prose-p:text-balance prose-headings:font-semibold prose-headings:tracking-tight prose-p:tracking-tight prose-a:no-underline">
      {children}
    </div>
  );
}
