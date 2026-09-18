"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/lib/hooks";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: "up" | "fade" | "scale";
  delay?: number;
}

export default function Reveal({ children, as: Tag = "div", className = "", variant = "up", delay = 0 }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const attr = variant === "up" ? "" : variant;

  return (
    <Tag
      ref={ref}
      data-reveal={attr === "" ? "up" : attr}
      className={className}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
