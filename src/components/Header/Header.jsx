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
    <nav className="space-x-4  p-4 flex  justify-left items-center text-black dark:text-white bg-white dark:bg-black">
      <Link href="/" className="text-xl font-semibold">
        Welly Aguiar
      </Link>
      <Link href="#projects">Projetos</Link>
      <Link href="#about">Sobre</Link>
      <Link href="#contact">Contato</Link>
      <button
        className="p-0  rounded-full hover:scale-110"
        onClick={toggleTheme}
      >
  {isDark ? <BsMoon className="text-3xl text-neutral-900 hover:text-blue-500 hover:cursor-pointer" /> : <BsSun className="text-2xl text-neutral-300 hover:text-yellow-500 hover:curson-pointer" />}
      </button>
    </nav>
  );
}
