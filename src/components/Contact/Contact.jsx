import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";



export default function Contact() {
  const iconStyle =
    "w-6 h-6 text-white hover:text-blue-400 hover:scale-110 transition-transform duration-200";

  return (
    <section id="contact" className="p-8 bg-black">
      <h2 className="text-3xl font-bold mb-6 text-white">Contato</h2>
      <div className="flex space-x-6">
        <a href="mailto:wellyagui@gmail.com" aria-label="Email">
          <BsEnvelopeFill className={iconStyle} />
        </a>
        <a
          href="https://github.com/WellyAguiar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <BsGithub className={iconStyle} />
        </a>
        <a
          href="https://www.linkedin.com/in/welly-aguiar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin className={iconStyle} />
        </a>
      </div>
    </section>
  );
}
