import { experiences } from "../data/site";

export default function Experience() {
  return (
    <section id="experience" className="bg-background py-8 sm:py-10 md:py-12">
      <div className="container-site">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="mb-2 text-sm font-medium text-primary sm:text-base">Experience</p>
          <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">From learning Laravel to building production systems.</h2>
          <p className="text-sm text-muted-foreground sm:text-base">My experience has grown from PHP and Laravel development into backend-focused software engineering across APIs, integrations, business workflows, testing, performance, deployment, and production support.</p>
        </div>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.period}`} className="grid gap-4 rounded-lg border border-border bg-card p-5 shadow-sm sm:p-8 lg:grid-cols-[180px_1fr] lg:gap-8">
              <p className="text-sm font-medium text-muted-foreground">{experience.period}</p>
              <div>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div><h3 className="text-xl font-semibold">{experience.role}</h3><p className="mt-1 text-sm font-medium text-primary">{experience.company}</p></div>
                  <span className="text-sm text-muted-foreground">{experience.location}</span>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{experience.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {experience.highlights.map((highlight) => <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /><span>{highlight}</span></li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
