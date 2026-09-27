import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Umer Lakhany, Full-Stack Developer based in Karachi, Pakistan.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
      <Contact />
    </div>
  );
}
