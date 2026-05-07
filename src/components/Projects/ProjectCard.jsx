export default function ProjectCard({ project }) {
  return (
    <li className="group p-6 border border-color-border/50 rounded-2xl bg-color-surface/40 backdrop-blur-md shadow-lg transition-all duration-500 hover:shadow-color-brand/20 hover:shadow-2xl hover:-translate-y-2 hover:border-color-brand/50 flex flex-col justify-between h-full">
      <div>
        <div className="w-12 h-12 bg-color-brand/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
          <div className="w-6 h-6 bg-color-brand rounded-md opacity-80"></div>
        </div>
        <h3 className="text-xl font-bold text-color-text mb-2 group-hover:text-color-brand transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-color-text-muted mb-6 leading-relaxed">
          {project.stack}
        </p>
      </div>
      
      <a 
        href={project.url} 
        className="relative overflow-hidden group/btn px-4 py-2 bg-color-surface-2/50 text-color-brand rounded-lg font-semibold text-sm transition-all hover:bg-color-brand hover:text-white inline-flex items-center justify-center gap-2"
      >
        <span>Ver projeto</span>
        <svg 
          className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </li>
  );
}
