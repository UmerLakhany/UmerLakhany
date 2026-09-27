import Image from "next/image";
import {
  Cloud,
  Globe,
  HeartHandshake,
  Layers,
  LayoutGrid,
  ShoppingCart,
  Smartphone,
  User,
  type LucideIcon,
} from "lucide-react";
import type { Project, ProjectCategory } from "@/lib/types";

const categoryIcon: Record<ProjectCategory, LucideIcon> = {
  Platform: Smartphone,
  "Full-Stack": Layers,
  "Web Application": LayoutGrid,
  SaaS: Cloud,
  Nonprofit: HeartHandshake,
  "E-commerce": ShoppingCart,
  Website: Globe,
  Personal: User,
};

function hostFromUrl(url?: string) {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function ProjectMedia({ project }: { project: Project }) {
  const { coverImage, liveUrl, status } = project;
  const primaryCategory = project.categories[0];
  const Icon = categoryIcon[primaryCategory] ?? LayoutGrid;

  return (
    <div className="project-media">
      <span className={`project-status-badge ${status === "Live" ? "status-live" : "status-dev"}`}>
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
            <span className="placeholder-pattern" aria-hidden="true" />
            <span className="placeholder-tile">
              <Icon size={26} strokeWidth={1.75} />
            </span>
            <span className="placeholder-label">{primaryCategory}</span>
          </div>
        </div>
      )}
    </div>
  );
}
