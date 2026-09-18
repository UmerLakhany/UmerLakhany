import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Process from "@/components/sections/Process";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import GitHubSection from "@/components/sections/GitHubSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Journey />
      <Process />
      <Experience />
      <Education />
      <GitHubSection />
      <Contact />
    </>
  );
}
