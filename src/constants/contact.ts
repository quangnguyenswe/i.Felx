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
    contact: "quangnguyen",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/quangnguyenduy03/",
  },
  {
    name: "email",
    contact: "quangnguyen7403@gmail.com",
    icon: Mail,
    link: "mailto:quangnguyen7403@gmail.com",
  },
  {
    name: "reddit",
    contact: "@V1gilante",
    icon: SiReddit,
    link: "https://www.reddit.comu/Far-Motor908",
  },
];
