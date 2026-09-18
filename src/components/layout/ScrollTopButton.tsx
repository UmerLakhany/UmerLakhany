"use client";

import { ArrowUp } from "lucide-react";
import { useScrolled } from "@/lib/hooks";

export default function ScrollTopButton() {
  const visible = useScrolled(480);

  return (
    <button
      type="button"
      className={`scroll-top-btn ${visible ? "is-visible" : ""}`}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={20} />
    </button>
  );
}
