const stack = {
  "Front-End": ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind"],
  "Back-End": ["Node.js", "Express", "Django", "Python"],
  DevOps: ["GitHub", "Git", "Docker", "Jest"],
};

export default function Stack() {
  return (
    <section id="stack" className="p-8 bg-background min-h-[calc(100dvh-var(--headerheight))] scroll-mt-[var(--headerheight)]
    flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-6">Minha stack</h2>
      <div className="space-y-6 ">
        {Object.entries(stack).map(([area, tools], index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-2">{area}</h3>
            <ul className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <li
                  key={i}
                  className="px-3 py-1 bg-secondary text-foreground rounded-full text-md"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
