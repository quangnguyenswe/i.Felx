import { GitHubIcon } from "@/icons/GithubIcon";
import { LinkedInIcon } from "@/icons/LinkedinIcon";
import { AtSign } from "lucide-react";

export const socials = [
  {
    name: "Email",
    href: "mailto:quangnguyen7403@gmail.com",
    icon: AtSign,
  },
  {
    name: "GitHub",
    href: "https://github.com/quangnguyenswe",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/quangnguyenduy03/",
    icon: LinkedInIcon,
  },
];

export const pages = {
  personal: [
    { name: "blog", href: "/blog" },
    { name: "about me", href: "/about" },
    { name: "projects", href: "/projects" },
  ],
  explore: [
    { name: "home", href: "/" },
    { name: "work", href: "/work" },
  ],
  meta: [
    { name: "sitemap", href: "/sitemap.xml" },
    { name: "attribute", href: "/attribute" },
  ],
};
