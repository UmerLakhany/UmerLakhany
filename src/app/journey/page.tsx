import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Journey from "@/components/sections/Journey";

export const metadata: Metadata = {
  title: "Journey",
  description: "How Umer Lakhany went from freelancing in 2024 to building full-stack software as a BSCS student.",
};

export default function JourneyPage() {
  return (
    <>
      <div style={{ paddingTop: "calc(var(--header-h) + 1rem)" }}>
        <Journey />
      </div>
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Want to be part of the next chapter?</h2>
          <Link href="/contact" className="btn btn-primary btn-lg mt-2">
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
