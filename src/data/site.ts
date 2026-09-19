// ============================================================
// Core site configuration.
// ============================================================

export const siteConfig = {
  name: "Umer Lakhany",
  role: "Full-Stack Web Developer",
  subrole: "BSCS Student",
  location: "Pakistan",
  email: "lakhanyumer@gmail.com",
  cvUrl: "/Muhammad_Umer_Lakakhany_CV.pdf",
  description:
    "Umer Lakhany is a Computer Science student and freelance Full-Stack Web Developer specializing in React, Next.js, Node.js, TypeScript and modern web applications.",
  url: "https://umerlakhany.dev", // update once a production domain is live
  social: {
    github: "https://github.com/UmerLakhany",
    linkedin: "https://www.linkedin.com/in/umer-lakhany-05a8283a9",
    fiverr: "https://www.fiverr.com/umer_lakhany",
    facebook: "https://www.facebook.com/umar.lakhany",
    instagram: "https://www.instagram.com/lakhanyxx",
  },
};

// EmailJS (client-side email delivery for the contact form — see
// src/components/sections/Contact.tsx). EmailJS's public key is designed
// to be used from the browser, so exposing it via NEXT_PUBLIC_* env vars
// is the intended, safe usage pattern (unlike a server-side secret key).
// Create a service + template at https://www.emailjs.com and set these in
// .env.local — the form degrades gracefully with a clear message until
// they're set.
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Journey", href: "/journey" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];
