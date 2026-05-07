import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const iconStyle =
    "w-6 h-6 text-color-brand hover:text-color-brand-strong hover:scale-110 transition-transform duration-200";

  return (
    <section id="contact" className="p-8 bg-color-surface ">
      <h2 className="text-3xl font-bold mb-6 text-color-text">Contato</h2>
      <div className="flex space-x-6">
        <a href="mailto:wellyagui@gmail.com" aria-label="Email">
          <Mail className={iconStyle} />
        </a>
        <a
          href="https://github.com/WellyAguiar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className={iconStyle} />
        </a>
        <a
          href="https://www.linkedin.com/in/welly-aguiar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className={iconStyle} />
        </a>
      </div>
    </section>
  );
}
