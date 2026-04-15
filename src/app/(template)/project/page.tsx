import { HeaderBanner } from "@/components/project/HeaderBanner";
import { ProjectCard } from "@/components/project/ProjectCard";
import {
  productionProjectMetaData,
  productionProjects,
  sideProjectMetaData,
  sideProjects,
} from "@/constants/projects";

export default function ProjectsPage() {
  return (
    <main>
      <section className="w-full border-separator/10 border-b">
        <div className="inner relative flex h-16 gap-2 border-separator/10 border-x p-2"></div>
      </section>
      <HeaderBanner
        title={productionProjectMetaData.title}
        description={productionProjectMetaData.description}
      />
      <section className="w-full border-separator/10">
        <div className="inner relative grid grid-cols-1 gap-2 border-separator/10 border-x p-2 md:grid-cols-2">
          {productionProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section className="w-full border-separator/10 border-b">
        <div className="inner relative flex h-16 gap-2 border-separator/10 border-x p-2"></div>
      </section>
      <HeaderBanner
        title={sideProjectMetaData.title}
        description={sideProjectMetaData.description}
      />
      <section className="w-full border-separator/10">
        <div className="inner relative grid grid-cols-1 gap-2 border-separator/10 border-x p-2 md:grid-cols-2">
          {sideProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
