import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/site.scss";
import BootstrapJs from "@/components/bootstrap-js/bootstrapjs";
import { ToasterContainer } from "@/components/Toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollTopButton from "@/components/layout/ScrollTopButton";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Full-Stack Web Developer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Umer Lakhany",
    "Full-Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "Freelance Web Developer",
    "Node.js Developer",
    "BSCS Student",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Full-Stack Web Developer`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Full-Stack Web Developer`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ToasterContainer />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollTopButton />
        <BootstrapJs />
      </body>
    </html>
  );
}
