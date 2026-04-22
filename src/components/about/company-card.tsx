import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Company } from "@/constants/company";
import Link from "next/link";
import { LinkPreview } from "../link-preview";

export function CompanyCard({
  title,
  description,
  startDate,
  endDate,
  location,
  image,
  links,
  flags,
}: Company) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute top-2 -left-16 flex items-center justify-center rounded-full bg-white">
        <Avatar className="m-auto size-12 border">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1 text-sm sm:text-base">
        <div className="flex items-center gap-2">
          {startDate && (
            <time className="text-muted-foreground text-xs">{startDate}</time>
          )}
          •
          <time className="text-muted-foreground text-xs">
            {endDate || "Present"}
          </time>
        </div>
        <div
          className={
            (flags || []).length > 1
              ? "mb-1 flex flex-col justify-center gap-1 font-semibold leading-none xl:mb-0 xl:flex-row xl:items-center xl:justify-start xl:gap-0"
              : "flex items-center font-semibold leading-none"
          }
        >
          {title}
          {flags?.map((flag, idx) => {
            if (flag === "committee") {
              return (
                <Badge key={idx} variant="outline" className="ml-0 xl:ml-2">
                  Committee
                </Badge>
              );
            }

            const [type, value] = flag.split(":");
            if (type === "winner") {
              return (
                <Badge
                  key={idx}
                  className="ml-0 bg-linear-to-r from-amber-400 to-amber-500 text-black xl:ml-2 dark:from-amber-200 dark:to-amber-300"
                >
                  {value}
                </Badge>
              );
            }

            return null;
          })}
        </div>
        {location && (
          <p className="text-muted-foreground text-xs sm:text-sm">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-muted-foreground text-xs sm:text-sm">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            // <Link href={link.href} target="_blank" key={idx}>
              <LinkPreview url={link.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  title={link.title}
                  className="flex gap-2"
                  variant={link.variant || "default"}
                >
                  <link.icon className="size-3" />
                  {link.title}
                </Badge>
              </LinkPreview>
            // </Link>
          ))}
        </div>
      )}
    </li>
  );
}
