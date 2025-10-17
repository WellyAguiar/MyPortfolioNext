"use client";

import Link from "next/link";
import { BsSun, BsMoon } from "react-icons/bs";

import { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <nav className="sticky top-0 z-50 
    h-[var(--headerheight)]
    space-x-4  
    p-4 flex  
    justify-start 
    items-center 
    hover:cursor-pointer 
    text-foreground 
    bg-background/80
    backdrop-blur-sm">
      <Link href="#about" className="text-xl font-semibold">
        Welly Aguiar
      </Link>
      <Link href="#about">Sobre</Link>
      <Link href="#stack">Tecnologias</Link>
      <Link href="#projects">Projetos</Link>
      <Link href="#contact">Contato</Link>
      <button
        className="p-0  rounded-full hover:scale-110"
        onClick={toggleTheme}
      >
  {isDark ? <BsMoon className="text-3xl" /> : <BsSun className="text-2xl hover:text-primary" />}
      </button>
    </nav>
  );
}
