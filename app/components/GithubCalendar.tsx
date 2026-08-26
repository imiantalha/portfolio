import { personal } from "../data/site";
import { getGithubContributions } from "../data/github";

const LEVELS = [0, 1, 2, 3, 4] as const;

function cellStyle(level: number) {
  const clamped = Math.min(Math.max(level, 0), 4);
  return { backgroundColor: `var(--contribution-${clamped})` };
}

const highlights = [
  { title: "Continuous Learning", description: "Deepening my knowledge of backend architecture, API design, databases, performance, testing, and modern full-stack development." },
  { title: "Personal Engineering", description: "Building and improving projects outside day-to-day work to experiment with new technologies, patterns, and production practices." },
  { title: "Technical Exploration", description: "Exploring tools and approaches such as Docker, Next.js, search infrastructure, system design, and deployment workflows." },
];

export default async function GithubCalendar() {
  let graph = null;
  try {
    const { days, total } = await getGithubContributions();
    const year = new Date().getFullYear();
    graph = (
      <>
        <div className="overflow-x-auto" dir="rtl">
          <div className="grid w-max grid-flow-col grid-rows-7 gap-1" dir="ltr" role="img" aria-label={`${total} GitHub contributions in ${year}`}>
            {days.map((day) => (
              <div key={day.date} title={`${day.date}: ${day.count} contributions`} className="h-3 w-3 rounded-[2px] ring-1 ring-inset ring-black/10 dark:ring-white/5" style={cellStyle(day.level)} />
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground sm:text-sm">
          <p>{total} contributions in {year}</p>
          <div className="flex items-center gap-2"><span>Less</span><div className="flex gap-1">{LEVELS.map((level) => <div key={level} className="h-3 w-3 rounded-[2px] ring-1 ring-inset ring-black/10 dark:ring-white/5" style={cellStyle(level)} />)}</div><span>More</span></div>
        </div>
      </>
    );
  } catch {
    graph = null;
  }

  return (
    <div>
      {graph}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {highlights.map((highlight) => (
          <article key={highlight.title} className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg sm:p-6">
            <h3 className="text-base font-semibold transition-colors group-hover:text-primary sm:text-lg">{highlight.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{highlight.description}</p>
          </article>
        ))}
      </div>
      <a href={personal.github} target="_blank" rel="noopener noreferrer" className="mt-5 block text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Explore my work on GitHub →</a>
    </div>
  );
}
