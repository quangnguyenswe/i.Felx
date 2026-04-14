import { LanguagesTools } from "@/components/LanguageTools";
import * as icon from "@icons-pack/react-simple-icons";
import { CustomIcons } from "@/components/icons";

export interface ToolItem {
  name: string;
  Icon: React.ComponentType<{ className?: string; size?: number | string }>;
  hex: string;
  classNames?: {
    icon?: string;
    container?: string;
  };
}

export const frontendTools: ToolItem[] = [
  { name: "TypeScript", Icon: icon.SiTypescript, hex: icon.SiTypescriptHex },
  { name: "React", Icon: icon.SiReact, hex: icon.SiReactHex },
  {
    name: "Astro",
    Icon: icon.SiAstro,
    hex: icon.SiAstroHex,
    classNames: {
      icon: "group-hover:invert dark:group-hover:invert-0",
    },
  },
  { name: "Redux", Icon: icon.SiRedux, hex: icon.SiReduxHex },
  {
    name: "Tailwind CSS",
    Icon: icon.SiTailwindcss,
    hex: icon.SiTailwindcssHex,
  },
];

export const backendTools: ToolItem[] = [
  {
    name: "CouchDB",
    Icon: icon.SiCouchbase,
    hex: icon.SiCouchbaseHex,
    classNames: {
      icon: "group-hover:invert dark:group-hover:invert-0",
    },
  },
  { name: "Node.js", Icon: icon.SiNodedotjs, hex: icon.SiNodedotjsHex },
  { name: "TypeScript", Icon: icon.SiTypescript, hex: icon.SiTypescriptHex },
  { name: "NestJS", Icon: icon.SiNestjs, hex: icon.SiNestjsHex },
  { name: "PostgreSQL", Icon: icon.SiPostgresql, hex: icon.SiPostgresqlHex },
  {
    name: "Drizzle ORM",
    Icon: icon.SiDrizzle,
    hex: icon.SiDrizzleHex,
    classNames: {
      icon: "dark:group-hover:invert",
    },
  },
];

export const cloudTools: ToolItem[] = [
  { name: "Docker", Icon: icon.SiDocker, hex: icon.SiDockerHex },
  // { name: "AWS", Icon: CustomIcons.aws, hex: "#FF9900" },
  {
    name: "Google Cloud",
    Icon: icon.SiGooglecloud,
    hex: icon.SiGooglecloudHex,
  },
  { name: "Git", Icon: icon.SiGit, hex: icon.SiGitHex },
  {
    name: "GitHub Actions",
    Icon: icon.SiGithubactions,
    hex: icon.SiGithubactionsHex,
  },
  {
    name: "Nginx",
    Icon: icon.SiNginx,
    hex: icon.SiNginxHex,
  }
];

export const mobileTools: ToolItem[] = [
  { name: "React Native", Icon: icon.SiReact, hex: icon.SiReactHex },
  {
    name: "Expo",
    Icon: CustomIcons.expo,
    hex: "#000020",
    classNames: {
      icon: "group-hover:invert-0 dark:group-hover:invert",
    },
  },
];

export const skillsContent: Record<
  string,
  {
    title: string;
    element: React.ReactNode;
  }
> = {
  frontend: {
    title: "Frontend Development",
    element: (
      <div className="flex flex-col gap-6">
        <p className="text-muted-foreground">
          Crafting responsive and interactive user interfaces with modern web
          technologies. Specializing in React ecosystem and component-driven
          architecture.
        </p>
        <LanguagesTools
          items={frontendTools}
          variant="default"
          className="justify-center"
        />
      </div>
    ),
  },
  backend: {
    title: "Backend Development",
    element: (
      <div className="flex flex-col gap-6">
        <p className="text-muted-foreground">
          Building scalable server-side applications and APIs with Node.js.
          Experience with both SQL and NoSQL databases, focusing on performance
          and security.
        </p>
        <LanguagesTools items={backendTools} className="justify-center" />
      </div>
    ),
  },
  cloud: {
    title: "Cloud & DevOps",
    element: (
      <div className="flex flex-col gap-6">
        <p className="text-muted-foreground">
          Deploying and managing applications in the cloud. Familiar with AWS
          services, containerization with Docker, and CI/CD pipelines for
          streamlined development workflows.
        </p>
        <LanguagesTools
          items={cloudTools}
          variant="default"
          className="justify-center"
        />
      </div>
    ),
  },
  mobile: {
    title: "Mobile Development",
    element: (
      <div className="flex flex-col gap-6">
        <p className="text-muted-foreground">
          Developing cross-platform mobile applications. Experience with modern
          frameworks for iOS and Android development.
        </p>
        <LanguagesTools
          items={mobileTools}
          variant="default"
          className="justify-center"
        />
      </div>
    ),
  },
};
