import type { Metadata } from "next";
import About from "./components/About";
import Contact from "./components/Contact";
import EngineeringHighlights from "./components/EngineeringHighlights";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import GithubCalendar from "./components/GithubCalendar";
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

        <section className="py-8 sm:py-10 md:py-12">
          <div className="container-site">
            <div className="mb-8 text-center sm:mb-10">
              <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">Engineering in Motion</h2>
            </div>
            <GithubCalendar />
          </div>
        </section>

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
