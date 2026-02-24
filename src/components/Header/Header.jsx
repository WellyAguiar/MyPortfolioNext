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
    text-color-text
    bg-color-bg/80
    backdrop-blur-sm">
      <Link href="#about" className="text-xl text-color-brand font-semibold">
        Welly Aguiar
      </Link>
      <Link href="#about" className="hover:text-color-brand 
    transition-colors ">Sobre</Link>
      <Link href="#stack" className="hover:text-color-brand 
    transition-colors ">Tecnologias</Link>
      <Link href="#projects" className="hover:text-color-brand 
    transition-colors ">Projetos</Link>
      <Link href="#contact" className="hover:text-color-brand 
    transition-colors ">Contato</Link>
      <button
        className="p-0  rounded-full hover:scale-110"
        onClick={toggleTheme}
      >
  {isDark ? <BsMoon className="text-3xl" /> : <BsSun className="text-2xl hover:text-color-brand" />}
      </button>
    </nav>
  );
}
