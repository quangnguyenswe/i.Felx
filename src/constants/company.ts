import { Home, Rss, Video, type LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";
import type { Badge } from "@/components/ui/badge";
// import { baseUrl } from "@/sitemap";

export type Company = {
  title: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  image?: string;
  links?: Array<{
    title: string;
    href: string;
    icon: LucideIcon;
    variant?: ComponentProps<typeof Badge>["variant"];
  }>;
  flags?: Array<string>;
};
export const companies: Array<Company> = [
  {
    title: "VTI Group",
    startDate: "October, 2024",
    location: "Ha Noi, Vietnam",
    description:
      "VTI is a trusted global technology company, turning innovation into lasting value by harnessing AI and advanced technologies. As a dedicated partner in clients’ DX journeys, with a strong Asian presence and over 1,800 skilled personnel, we enable enterprises to navigate the digital era with confidence.",
    flags: ["first-job"],
    image: "static/images/vtijsc_logo.jpeg",
    links: [
      {
        title: "Landing Page",
        href: "https://www.vti.com.vn/",
        icon: Home,
        variant: "secondary",
      },
    ],
  },
];
