import { Github, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { repos } from "@/data/repos";
import { siteConfig } from "@/data/site";

export default function GitHubSection() {
  const hasGithub = Boolean(siteConfig.social.github);
  if (!hasGithub && repos.length === 0) return null;

  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head mx-auto" as="div">
          <span className="eyebrow justify-content-center">Open Source</span>
          <h2 className="section-title">Building in Public</h2>
          <p className="section-sub">
            I continuously experiment with new technologies, build projects and strengthen my software
            engineering skills through practical development.
          </p>
        </Reveal>

        {repos.length > 0 ? (
          <div className="row g-4">
            {repos.map((repo, i) => (
              <div className="col-md-6 col-lg-4" key={repo.name}>
                <Reveal delay={i * 70} className="h-100">
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" className="repo-card d-block text-decoration-none">
                    <div className="repo-top">
                      <h3>{repo.name}</h3>
                      <Github size={18} className="text-secondary-token" />
                    </div>
                    <p>{repo.description}</p>
                    <div className="project-tags mb-0">
                      {repo.techStack.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </a>
                </Reveal>
              </div>
            ))}
          </div>
        ) : (
          <Reveal className="d-flex justify-content-center">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card d-inline-flex align-items-center gap-3 px-4 py-3"
            >
              <Github size={22} />
              <span className="fw-semibold">View my repositories on GitHub</span>
              <ArrowUpRight size={16} />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
