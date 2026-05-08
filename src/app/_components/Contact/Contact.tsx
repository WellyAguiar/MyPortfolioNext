import { Mail, Github, Linkedin } from "lucide-react";
import SectionTitle from "../SectionTitle";

export default function Contact() {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:wellyagui@gmail.com", color: "bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white" },
    { icon: Github, label: "GitHub", href: "https://github.com/WellyAguiar", color: "bg-gray-500/10 text-gray-500 hover:bg-gray-500 hover:text-white" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/welly-aguiar/", color: "bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white" },
  ];

  return (
    <section id="contact" className="py-20 px-8 bg-gradient-to-b from-color-bg to-color-surface flex flex-col items-center justify-center relative">
      <div className="max-w-2xl w-full text-center">
        <SectionTitle>Vamos conversar?</SectionTitle>
        <p className="text-color-text-muted text-lg mb-10 max-w-md mx-auto">
          Estou sempre aberto a novos projetos, colaborações ou apenas para bater um papo sobre tecnologia.
        </p>

        {/* Card de Contato Glassmorphic */}
        <div className="p-8 rounded-3xl border border-color-border/50 bg-color-surface/50 backdrop-blur-md shadow-2xl flex flex-wrap justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${link.color} shadow-sm`}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Detalhe decorativo sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-color-brand/30 to-transparent"></div>
    </section>
  );
}
