"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <nav className="space-x-4  p-4 flex  justify-left items-center bg-black">
      <Link href="/" className="text-xl font-semibold">
        Welly Aguiar
      </Link>
      <Link href="#projects">Projetos</Link>
      <Link href="#about">Sobre</Link>
      <Link href="#contact">Contato</Link>
      <button
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        onClick={toggleTheme}
      >
        {isDark ? "Light" : "Dark"}
      </button>
    </nav>
  );
}
