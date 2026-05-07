import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Stack from "@/components/Stack/Stack";
import "@/app/globals.css";
import Header from "@/components/Header/Header";

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
