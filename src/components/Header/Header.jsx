"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
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
      <nav className="sticky top-0 z-50 h-[var(--headerheight)] px-4 flex justify-between items-center bg-color-bg/80 backdrop-blur-md border-b border-color-border/50 text-color-text">
        <span className="text-xl text-color-brand font-bold whitespace-nowrap">Welly Aguiar</span>
        <div className="flex space-x-4">
          <div className="w-8 h-8 rounded-full bg-color-surface-2 animate-pulse"></div>
        </div>
      </nav>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 
    h-[var(--headerheight)]
    px-4 md:px-8
    flex  
    justify-between 
    items-center 
    text-color-text
    bg-color-bg/80
    backdrop-blur-md
    border-b border-color-border/50
    transition-all duration-300">
      <div className="flex items-center">
        <Link href="#about" className="text-xl text-color-brand font-bold whitespace-nowrap hover:scale-105 transition-transform">
          Welly Aguiar
        </Link>
      </div>

      <div className="flex items-center space-x-4 md:space-x-8">
        <div className="hidden sm:flex items-center space-x-6">
          <Link href="#about" className="hover:text-color-brand transition-colors font-medium text-sm md:text-base">Sobre</Link>
          <Link href="#stack" className="hover:text-color-brand transition-colors font-medium text-sm md:text-base">Tecnologias</Link>
          <Link href="#projects" className="hover:text-color-brand transition-colors font-medium text-sm md:text-base">Projetos</Link>
          <Link href="#contact" className="hover:text-color-brand transition-colors font-medium text-sm md:text-base">Contato</Link>
        </div>

        <button
          className="p-2 rounded-xl bg-color-surface-2/50 hover:bg-color-surface-2 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-color-brand"
          onClick={toggleTheme}
          aria-label="Alternar tema"
        >
          {resolvedTheme === "dark" ? (
            <Moon className="w-5 h-5 text-color-brand" />
          ) : (
            <Sun className="w-5 h-5 text-color-brand" />
          )}
        </button>
      </div>
    </nav>
  );
  }
