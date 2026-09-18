// Add real GitHub repositories here when ready — name, description and
// techStack should reflect the actual repo. Nothing here is invented, so
// this stays empty until real repos are added; the GitHub section on the
// homepage hides itself gracefully when there's nothing to show.
export interface Repo {
  name: string;
  description: string;
  techStack: string[];
  url: string;
}

export const repos: Repo[] = [];
