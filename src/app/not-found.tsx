import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section text-center" style={{ paddingTop: "calc(var(--header-h) + 4rem)" }}>
      <div className="container">
        <span className="eyebrow justify-content-center">404</span>
        <h1 className="section-title">Page not found</h1>
        <p className="fs-5 text-secondary-token mb-4 mx-auto" style={{ maxWidth: "32rem" }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link href="/" className="btn btn-primary btn-lg">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
