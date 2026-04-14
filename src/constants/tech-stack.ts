import { SiBun, SiCouchbase, SiDocker, SiDrizzle, SiHono, SiNodedotjs, SiPostgresql, SiTailwindcss, SiTypescript } from "@icons-pack/react-simple-icons";
import type { InfoCard } from "./contact";

export const techStacks: InfoCard[] = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    link: "https://nodejs.org/en",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    link: "https://www.typescriptlang.org",
  },
  {
    name: "Drizzle ORM",
    icon: SiDrizzle,
    link: "https://orm.drizzle.team/",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    link: "https://www.postgresql.org/",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    link: "https://tailwindcss.com",
  },
  {
    name: "Hono",
    icon: SiHono,
    link: "https://hono.dev",
  },
  {
    name: "Docker",
    icon: SiDocker,
    link: "https://www.docker.com",
  },
  {
    name: "CouchDB",
    icon: SiCouchbase,
    link: "https://couchdb.apache.org/",
  },
];