export default function ProjectCard({ project }) {
  return (
    <li className="p-4 border border-color-border rounded-lg shadow-sm bg-color-surface transition-all hover:border-color-brand/50">
      <h3 className="text-xl font-semibold text-color-text">{project.name}</h3>
      <p className="text-sm text-color-text-muted mb-2">{project.stack}</p>
      <a 
        href={project.url} 
        className="text-color-brand hover:text-color-brand-strong transition-colors font-medium inline-block"
      >
        Ver projeto
      </a>
    </li>
  );
}
