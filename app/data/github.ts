import { personal } from "../data/site";

export type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type GithubApiResponse = {
  total?: Record<string, number>;
  contributions?: ContributionDay[];
};

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function buildYearWindow(contributions: ContributionDay[]) {
  const byDate = new Map(
    contributions.map((day) => [day.date, day] as const),
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(today.getFullYear(), 0, 1);
  start.setDate(start.getDate() - start.getDay());

  const days: ContributionDay[] = [];

  for (let cursor = new Date(start); cursor <= today; cursor.setDate(cursor.getDate() + 1)) {
    const date = toDateKey(cursor);
    const match = byDate.get(date);
    days.push({
      date,
      count: match?.count ?? 0,
      level: match?.level ?? 0,
    });
  }

  return days;
}

export async function getGithubContributions() {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${personal.githubUser}`,
    { next: { revalidate: 3600 } },
  );

  if (!response.ok) {
    throw new Error(`GitHub contributions request failed (${response.status})`);
  }

  const data = (await response.json()) as GithubApiResponse;
  const contributions = Array.isArray(data.contributions) ? data.contributions : [];
  const days = buildYearWindow(contributions);
  const total = days.reduce((sum, day) => sum + day.count, 0);

  return { days, total };
}
