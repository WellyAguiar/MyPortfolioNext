import { stackData } from "../../logic/stack";
import SectionTitle from "../../../components/SectionTitle";

export default function Stack() {
  return (
    <section id="stack" className="p-8 bg-color-bg min-h-[calc(100dvh-var(--headerheight))] scroll-mt-[var(--headerheight)] flex flex-col justify-center items-center relative overflow-hidden">
      {/* Glow de destaque para o 'Dark Core' */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-color-brand/10 rounded-full blur-[120px] -z-10"></div>
      
      <SectionTitle>Minha stack</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-8">
        {Object.entries(stackData).map(([area, tools], index) => (
          <div 
            key={index} 
            className="group p-6 rounded-2xl border border-color-border/40 bg-color-surface/30 backdrop-blur-sm hover:border-color-brand/40 transition-all duration-500"
          >
            <h3 className="text-xl text-color-brand font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-color-brand rounded-full"></span>
              {area}
            </h3>
            
            <ul className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <li
                  key={i}
                  className="px-4 py-2 bg-color-surface-2/50 text-color-text rounded-xl text-sm font-medium border border-color-border/50 transition-all duration-300 hover:bg-color-brand hover:text-white hover:border-color-brand hover:scale-105 cursor-default shadow-sm"
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
