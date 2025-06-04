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
      <main className="min-h-screen bg-neutral-300 dark:bg-neutral-900 text-gray-900 dark:text-neutral-300">
        <About />
        <Tecnologies />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
