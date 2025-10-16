const projects = [
  { name: "App de Clima", stack: "React + API OpenWeather", url: "#" },
  { name: "CRUD de Notícias", stack: "Next.js + json-server", url: "#" },
  { name: "App de Clima", stack: "React + API OpenWeather", url: "#" },
  { name: "CRUD de Notícias", stack: "Next.js + json-server", url: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-background">
      <h2 className="text-3xl font-bold mb-6">Projetos</h2>
      <ul className="grid gap-4 sm:grid-cols-2 grid-cols-1">
        {projects.map((p, i) => (
          <li key={i} className="p-4 border rounded-lg shadow-sm bg-card">
            <h3 className="text-xl font-semibold text-primary">{p.name}</h3>
            <p className="text-sm text-secondary mb-2">{p.stack}</p>
            <a href={p.url} className="text-primary">
              Ver projeto
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
