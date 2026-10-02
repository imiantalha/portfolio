import type { Metadata } from "next";
import About from "./components/About";
import Contact from "./components/Contact";
import EngineeringHighlights from "./components/EngineeringHighlights";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollReveal from "./components/ScrollReveal";
import Skills from "./components/Skills";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <ScrollReveal direction="up">
          <Hero />
        </ScrollReveal>

        <ScrollReveal direction="left" delay={40}>
          <Skills />
        </ScrollReveal>

        <ScrollReveal direction="right" delay={60}>
          <FeaturedProjects />
        </ScrollReveal>

        <ScrollReveal direction="left" delay={40}>
          <Experience />
        </ScrollReveal>

        <ScrollReveal direction="right" delay={60}>
          <EngineeringHighlights />
        </ScrollReveal>

        <ScrollReveal direction="left" delay={40}>
          <About />
        </ScrollReveal>

        <ScrollReveal direction="right" delay={60}>
          <Contact />
        </ScrollReveal>
      </main>

      <ScrollReveal direction="up" delay={40}>
        <Footer />
      </ScrollReveal>
    </>
  );
}
