export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 gap-8"
    >
      <div className="md:mx-8 mx-4 md:max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-color-brand">
              Olá, eu sou Welly Aguiar!
            </h2>
            <p className="text-lg mb-4 text-color-text">
              Desenvolvedor Fullstack e estudante de Engenharia de Software.
Especializado em React, Next.js e Node.js, com foco em código limpo, organização e entrega consistente.
Busco criar aplicações bem estruturadas que resolvem problemas reais com eficiência.
            </p>
          </div>
          <div className="relative w-64 h-64 md:w-80  md:h-80 rounded-full overflow-hidden group order-1 md:order-2">
            <a href="https://www.linkedin.com/in/welly-aguiar/" target="_blank">
              <img
                src="/profilepic.jpg"
                alt="Welly Aguiar"
                className="w-full h-full rounded-full object-cover border-8 border-color-border transition-transform duration-500 hover:scale-105 hover:cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
