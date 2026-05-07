import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-color-bg min-h-[calc(100dvh-var(--headerheight))] scroll-mt-[var(--headerheight)]">
      <SectionTitle>Projetos</SectionTitle>
      <ul className="grid gap-4 sm:grid-cols-2 grid-cols-1">
        {projectsData.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </ul>
    </section>
  );
}
