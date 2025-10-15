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
      <main className="min-h-screen bg-white dark:bg-violet-950/20 text-black dark:text-neutral-400">
        <About />
        <Tecnologies />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
