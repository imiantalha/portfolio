import type { Metadata } from "next";
import About from "./components/About";
import Contact from "./components/Contact";
import EngineeringHighlights from "./components/EngineeringHighlights";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <Skills />
        <FeaturedProjects />
        <Experience />
        <EngineeringHighlights />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
