import { LinkedInIcon } from "@/icons/LinkedinIcon";
import { SiDiscord, SiFacebook, SiReddit, type IconType } from "@icons-pack/react-simple-icons";
import { Mail, type LucideIcon } from "lucide-react";

export type InfoCard = {
  name: string;
  icon: IconType | LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
};

export const contacts: (InfoCard & {
  contact: string;
})[] = [
  {
    name: "linkedIn",
    contact: "Felix Nguyen",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/quangnguyenduy03/",
  },
  {
    name: "email",
    contact: "felxnguyen03@proton.me",
    icon: Mail,
    link: "mailto:felxnguyen03@proton.me",
  },
  {
    name: "reddit",
    contact: "u/Far-Motor908",
    icon: SiReddit,
    link: "https://www.reddit.com/u/Far-Motor908",
  },
];
