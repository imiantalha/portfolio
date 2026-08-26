import { personal } from "../data/site";

const highlights = [
  { title: "Continuous Learning", description: "Deepening my knowledge of backend architecture, API design, databases, performance, testing, and modern full-stack development." },
  { title: "Personal Engineering", description: "Building and improving projects outside day-to-day work to experiment with new technologies, patterns, and production practices." },
  { title: "Technical Exploration", description: "Exploring tools and approaches such as Docker, Next.js, search infrastructure, system design, and deployment workflows." },
];

export default function GithubCalendar() {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-xl border border-border bg-card p-4 shadow-sm sm:p-6">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-base font-semibold sm:text-lg">GitHub Contributions</h3>
            <p className="text-sm text-muted-foreground">A snapshot of my ongoing development activity.</p>
          </div>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">View GitHub →</a>
        </div>
        <div className="overflow-x-auto pb-1">
          <img src="https://ghchart.rshah.org/imiantalha" alt="GitHub contribution graph for Muhammad Talha" className="mx-auto min-w-[720px] max-w-none" loading="lazy" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {highlights.map((highlight) => (
          <article key={highlight.title} className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg sm:p-6">
            <h3 className="text-base font-semibold transition-colors group-hover:text-primary sm:text-lg">{highlight.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{highlight.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
