// ============================================================
// Core site configuration.
// ============================================================

export const siteConfig = {
  name: "Umer Lakhany",
  role: "Full-Stack Developer",
  location: "Karachi, Pakistan",
  email: "lakhanyumer@gmail.com",
  phone: "+92 327 2298414",
  cvUrl: "/Muhammad_Umer_Lakakhany_CV.pdf",
  description:
    "Umer Lakhany is a Full-Stack Developer at Slynx Technologies, building responsive web applications with JavaScript, TypeScript, React.js, Next.js, Angular, Node.js and Express.js.",
  url: "https://umer-lakhany.vercel.app",
  social: {
    github: "https://github.com/UmerLakhany",
    linkedin: "https://www.linkedin.com/in/umer-lakhany-05a8283a9",
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
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
