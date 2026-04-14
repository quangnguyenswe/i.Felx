import type { ReactElement } from "react";
import { Badge } from "@/components/ui/badge";

export interface ProjectItem {
  title: string;
  description: string;
  imageId: string;
  badge: ReactElement[];
  link?: string;
  // blogLink?: string;
  repo?: string;
  unmaintained?: boolean;
}

export const productionProjectMetaData = {
  title: "production projects.",
  description:
    "production projects are the projects that I have worked on that are currently being used by users. these projects are a testament to my ability to not only create but also maintain and improve software that serves real-world needs.",
};

export const productionProjects: ProjectItem[] = [
  {
    title: "VTI Workplace",
    description:
      "The all-in-one social media platform for enterprises, that combines chat, video, groups and more, to enhance communication and collaboration within organizations.",
    imageId: "/images/workplace.jpg",
    badge: [
      <Badge key="Workplace">Workplace</Badge>,
      <Badge key="social-media">Social Media</Badge>,
      <Badge key="enterprise">Enterprise</Badge>,
    ],
  },
  {
    title: "VCopilot",
    description:
      "An AI-powered coding assistant that provides code suggestions, planning, and automate development workflows. It understands your entire codebase and can work across multiple files and tools to get things done.",
    imageId: "/images/copilot.png",
    badge: [
      <Badge key="ai">AI</Badge>,
      <Badge key="copilot">Copilot</Badge>,
      <Badge key="tool">Tool</Badge>,
    ],
  },
  {
    title: "Vlearning",
    description:
      "A learning platform used internally at VTI for training and development. It provides a comprehensive guides, best practices, projects and interactive learning roadmaps to help employees grow their skills.",
    imageId: "/images/e-learning.jpg",
    badge: [
      <Badge key="learning">Learning</Badge>,
      <Badge key="internal">Internal</Badge>,
      <Badge key="tool">Tool</Badge>,
    ],
  },
];

export const sideProjectMetaData = {
  title: "side projects.",
  description:
    "side projects are a playground for my creativity and a testament to my passion for software development. these projects, often born out of curiosity and a desire to solve problems, allow me to explore new technologies and ideas without the constraints of production-level polish.",
};

export const sideProjects: ProjectItem[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio website built with Astro, showcasing my projects, skills, and sharing my software development journey.",
    imageId: "/images/portfolio.png",
    badge: [
      <Badge key="portfolio">Portfolio</Badge>,
      <Badge key="personal">Personal</Badge>,
    ],
  },
];
