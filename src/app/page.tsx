import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import GitHubSection from "@/components/sections/GitHubSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Education />
      <GitHubSection />
      <Contact />
    </>
  );
}
