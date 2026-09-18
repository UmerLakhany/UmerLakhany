import Image from "next/image";
import type { Project } from "@/lib/types";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function hostFromUrl(url?: string) {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function ProjectMedia({ project }: { project: Project }) {
  const { coverImage, name, liveUrl, status } = project;

  return (
    <div className="project-media">
      <span className={`project-status-badge ${status === "Completed" ? "status-live" : "status-dev"}`}>
        {status}
      </span>

      {coverImage ? (
        <Image
          src={coverImage.src}
          alt={coverImage.alt}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      ) : (
        <div className="browser-frame">
          <div className="browser-bar">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
            {liveUrl && <span className="browser-url">{hostFromUrl(liveUrl)}</span>}
          </div>
          <div className="project-media-placeholder">
            <span className="mono-initial">{initials(name)}</span>
            <span className="mono-tag">{project.categories[0]}</span>
          </div>
        </div>
      )}
    </div>
  );
}
