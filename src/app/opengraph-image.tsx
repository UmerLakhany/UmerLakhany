import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — Full-Stack Web Developer`;

export default async function OgImage() {
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
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 5,
              background: "linear-gradient(135deg, #2563eb, #38bdf8)",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 2, color: "#f8fafc" }}>
            UMER LAKHANY
          </div>
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#f8fafc",
            lineHeight: 1.15,
            maxWidth: 900,
            letterSpacing: -2,
          }}
        >
          Full-Stack Web Developer
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#94a3b8",
            marginTop: 24,
            maxWidth: 820,
          }}
        >
          Building modern web applications, SaaS products &amp; backend systems.
        </div>

        <div style={{ display: "flex", gap: 14, marginTop: 48 }}>
          {["React.js", "Next.js", "Node.js", "TypeScript", "Python"].map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: 22,
                color: "#94a3b8",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 999,
                padding: "8px 22px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
