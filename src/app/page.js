import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Tecnologies from "@/components/Tecnologies/Tecnologies";
import "@/styles/globals.css";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-100 dark:bg-black text-gray-800 dark:text-gray-400">
        <About />
        <Tecnologies />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
