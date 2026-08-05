import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TechMarquee } from "@/components/tech-marquee";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/anim/scroll-progress";
import { ScrollTopButton } from "@/components/scroll-top";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ScrollTopButton />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechMarquee />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}