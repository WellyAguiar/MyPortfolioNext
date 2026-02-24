const projects = [
  { name: "App de Clima", stack: "React + API OpenWeather", url: "#" },
  { name: "CRUD de Notícias", stack: "Next.js + json-server", url: "#" },
  { name: "App de Clima", stack: "React + API OpenWeather", url: "#" },
  { name: "CRUD de Notícias", stack: "Next.js + json-server", url: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-color-bg h-[calc(100dvh-var(--headerheight))] scroll-mt-[var(--headerheight)]">
      <h2 className="text-3xl text-color-brand font-bold mb-6">Projetos</h2>
      <ul className="grid gap-4 sm:grid-cols-2 grid-cols-1">
        {projects.map((p, i) => (
          <li key={i} className="p-4 border border-color-border rounded-lg shadow-sm bg-color-surface">
            <h3 className="text-xl font-semibold text-color-color-text">{p.name}</h3>
            <p className="text-sm text-color-text-muted mb-2">{p.stack}</p>
            <a href={p.url} className="text-color-brand over:text-color-brand-strong transition-colors">
              Ver projeto
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
