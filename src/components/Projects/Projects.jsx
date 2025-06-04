const projects = [
  { name: "App de Clima", stack: "React + API OpenWeather", url: "#" },
  { name: "CRUD de Notícias", stack: "Next.js + json-server", url: "#" },
  { name: "App de Clima", stack: "React + API OpenWeather", url: "#" },
  { name: "CRUD de Notícias", stack: "Next.js + json-server", url: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-gray">
      <h2 className="text-3xl font-bold mb-6">Projetos</h2>
      <ul className="grid gap-4 sm:grid-cols-2 grid-cols-1">
        {projects.map((p, i) => (
          <li key={i} className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{p.stack}</p>
            <a href={p.url} className="text-blue-500 hover:text-blue-400">
              Ver projeto
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
