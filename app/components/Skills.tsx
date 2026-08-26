import GithubCalendar from "./GithubCalendar";
import { NamedIcon } from "./Icons";
import { skills } from "../data/skills";
import { toolsIUse } from "../data/site";

export default function Skills() {
  return (
    <section id="skills" className="bg-background py-8 sm:py-10 md:py-12">
      <div className="container-site">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
            Technologies & Tools
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-sm text-muted-foreground sm:px-0 sm:text-base">
            Modern tools and technologies I use to build production PHP/Laravel applications and full-stack products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => (
            <article
              key={skill.id}
              className="rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
            >
              <div className="mb-3 inline-flex rounded-md bg-primary/10 p-2 text-primary">
                <NamedIcon name={skill.icon} className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-semibold">{skill.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {skill.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-border bg-card p-6 sm:p-8">
          <h3 className="mb-4 text-lg font-semibold">Tools I use</h3>
          <div className="flex flex-wrap gap-3">
            {toolsIUse.map((tool) => (
              <span
                key={tool.name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-foreground"
              >
                <NamedIcon name={tool.icon} className="h-4 w-4 text-primary" />
                {tool.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-border bg-card p-6 sm:p-8">
          <h3 className="mb-4 text-lg font-semibold">Days I Code</h3>
          <GithubCalendar />
        </div>
      </div>
    </section>
  );
}
