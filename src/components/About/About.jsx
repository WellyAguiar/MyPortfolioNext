import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 gap-8 bg-gradient-to-b from-color-bg via-color-bg to-color-surface"
    >
      <div className="md:mx-8 mx-4 md:max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Conteúdo de Texto */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Olá, eu sou{" "}
              <span className="bg-gradient-to-r from-color-brand to-purple-400 bg-clip-text text-transparent">
                Welly Aguiar!
              </span>
            </h2>
            <p className="text-lg mb-6 text-color-text leading-relaxed opacity-90">
              Desenvolvedor Fullstack e estudante de Engenharia de Software.
              <br className="hidden md:block" />
              Especializado em <span className="text-color-brand font-semibold">React, Next.js e Node.js</span>, com foco em código limpo e entrega consistente.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
               {/* Adicionando um botão de CTA sutil para dar mais "peso" visual */}
               <a href="#projects" className="px-6 py-3 bg-color-brand text-white rounded-xl font-medium hover:bg-color-brand-strong transition-all hover:scale-105 shadow-lg shadow-color-brand/20">
                 Ver Projetos
               </a>
            </div>
          </div>

          {/* Imagem de Perfil com Efeito de Brilho */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 order-1 md:order-2">
            {/* Elemento de Brilho (Glow) atrás da foto */}
            <div className="absolute inset-0 bg-color-brand/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-color-brand/30 p-2 bg-color-surface-2/50 backdrop-blur-sm shadow-2xl shadow-color-brand/10">
              <a href="https://www.linkedin.com/in/welly-aguiar/" target="_blank" className="relative block w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profilepic.jpg"
                  alt="Welly Aguiar"
                  fill
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
