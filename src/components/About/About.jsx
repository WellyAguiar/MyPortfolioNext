export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 gap-8"
    >


      <div className="md:mx-8 mx-4 md:max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Olá, eu sou Welly Aguiar!</h2>
            <p className="text-lg mp-4">
              Sou um estudante apaixonado por jogos e tecnologia, sonhando em me
              tornar um desenvolvedor cada vez mais competente. Além de ser um
              autodidata, sou um excelente comunicador e possuo um bom humor
              contagiante, sempre buscando fazer as pessoas ao meu redor se sentirem
              bem. Estou em constante busca por aprimorar minhas habilidades em áreas
              de meu interesse e tecnologia em geral
            </p>
          
          </div>
                <div className="relative w-64 h-64 md:w-80  md:h-80 rounded-full overflow-hidden group order-1 md:order-2">
                  <img
                          src="/profilepic.jpg"
                          alt="Welly Aguiar"
                          className="w-full h-full rounded-full object-cover"
                        />
                </div>
        </div>
      </div>
    </section>
  );
}
