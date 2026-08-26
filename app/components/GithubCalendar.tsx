import { personal } from "../data/site";
import { getGithubContributions } from "../data/github";

const LEVELS = [0, 1, 2, 3, 4] as const;

function cellStyle(level: number) {
  const clamped = Math.min(Math.max(level, 0), 4);
  return {
    backgroundColor: `var(--contribution-${clamped})`,
  };
}

export default async function GithubCalendar() {
  try {
    const { days, total } = await getGithubContributions();
    const year = new Date().getFullYear();

    return (
      <div>
        <div className="overflow-x-auto" dir="rtl">
          <div
            className="grid w-max grid-flow-col grid-rows-7 gap-1"
            dir="ltr"
            role="img"
            aria-label={`${total} GitHub contributions in ${year}`}
          >
            {days.map((day) => (
              <div
                key={day.date}
                title={`${day.date}: ${day.count} contributions`}
                className="h-3 w-3 rounded-[2px] ring-1 ring-inset ring-black/10 dark:ring-white/5"
                style={cellStyle(day.level)}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground sm:text-sm">
          <p>
            {total} contributions in {year}
          </p>
          <div className="flex items-center gap-2">
            <span>Less</span>
            <div className="flex gap-1">
              {LEVELS.map((level) => (
                <div
                  key={level}
                  className="h-3 w-3 rounded-[2px] ring-1 ring-inset ring-black/10 dark:ring-white/5"
                  style={cellStyle(level)}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    );
  } catch {
    return (
      <a
        href={personal.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-x-auto"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://ghchart.rshah.org/40c463/${personal.githubUser}`}
          alt={`${personal.name} GitHub contribution calendar`}
          className="h-auto w-full min-w-[640px]"
        />
      </a>
    );
  }
}
