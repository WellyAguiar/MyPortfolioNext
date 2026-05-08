import Footer from "./_components/Footer/Footer";
import Projects from "./_components/Projects/Projects";
import About from "./_components/About/About";
import Contact from "./_components/Contact/Contact";
import Stack from "./_components/Stack/Stack";
import "@/app/globals.css";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-color-bg text-color-text">
        <About />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
