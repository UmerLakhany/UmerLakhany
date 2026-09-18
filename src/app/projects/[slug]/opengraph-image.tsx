import { ImageResponse } from "next/og";
import { getProjectBySlug, projects } from "@/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const name = project?.name ?? "Umer Lakhany";
  const tagline = project?.tagline ?? "Full-Stack Web Developer";
  const category = project?.categories[0] ?? "Project";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#07111f",
          backgroundImage:
            "radial-gradient(1000px 500px at 85% -10%, rgba(37,99,235,0.35), transparent 60%), radial-gradient(800px 500px at -10% 110%, rgba(56,189,248,0.22), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#38bdf8",
            marginBottom: 24,
          }}
        >
          {category}
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            color: "#f8fafc",
            lineHeight: 1.1,
            maxWidth: 980,
            letterSpacing: -2,
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: 30, color: "#94a3b8", marginTop: 24, maxWidth: 900 }}>{tagline}</div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 56 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              background: "linear-gradient(135deg, #2563eb, #38bdf8)",
            }}
          />
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 1, color: "#f8fafc" }}>
            UMER LAKHANY
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
