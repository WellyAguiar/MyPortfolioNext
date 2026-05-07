"use client";

import Link from "next/link";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 h-[var(--headerheight)] space-x-4 p-4 flex justify-start items-center bg-color-bg/80 backdrop-blur-sm text-color-text">
        <span className="text-xl text-color-brand font-semibold">Welly Aguiar</span>
        <span className="opacity-0">Sobre</span>
        <span className="opacity-0">Tecnologias</span>
        <span className="opacity-0">Projetos</span>
        <span className="opacity-0">Contato</span>
        <div className="w-10 h-10"></div>
      </nav>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
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
        className="p-2 rounded-full hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-color-brand"
        onClick={toggleTheme}
        aria-label="Alternar tema"
      >
        {resolvedTheme === "dark" ? (
          <BsMoon className="text-2xl text-color-brand" />
        ) : (
          <BsSun className="text-2xl hover:text-color-brand" />
        )}
      </button>
    </nav>
  );
}
