import { projectsData } from "@/logic/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "@/components/SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-gradient-to-b from-color-bg via-color-bg to-color-surface min-h-[calc(100dvh-var(--headerheight))] scroll-mt-[var(--headerheight)]">
      <SectionTitle>Projetos</SectionTitle>
      <ul className="grid gap-8 sm:grid-cols-2 grid-cols-1">
        {projectsData.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </ul>
    </section>
  );
}
