import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Experience",
  description: "Umer Lakhany's freelance experience and academic background in Computer Science.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <h1 className="visually-hidden">Professional Experience</h1>
      <div style={{ paddingTop: "calc(var(--header-h) + 1rem)" }}>
        <Experience />
      </div>
      <Education />
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Looking for a developer for your next project?</h2>
          <Link href="/contact" className="btn btn-primary btn-lg mt-2">
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
