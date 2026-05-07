import { stackData } from "@/data/stack";
import SectionTitle from "../SectionTitle";

export default function Stack() {
  return (
    <section id="stack" className="p-8 bg-color-bg min-h-[calc(100dvh-var(--headerheight))] scroll-mt-[var(--headerheight)]
    flex flex-col justify-center items-center">
      <SectionTitle>Minha stack</SectionTitle>
      <div className="space-y-6 ">
        {Object.entries(stackData).map(([area, tools], index) => (
          <div key={index}>
            <h3 className="text-xl text-color-text font-semibold mb-2">{area}</h3>
            <ul className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <li
                  key={i}
                  className="px-3 py-1 bg-color-surface-2 text-color-text rounded-full text-md border border-color-border"
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
