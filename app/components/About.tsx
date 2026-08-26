import { IconCheck } from "./Icons";
import { about, stats, whyChooseMe } from "../data/site";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-background to-primary/5 py-12 sm:py-16 md:py-20"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="order-2 lg:order-1">
            <div className="rounded-lg border border-border bg-gradient-to-br from-primary/10 to-primary/5 p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="mb-1 text-3xl font-bold text-primary sm:mb-2 sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-2 text-sm font-medium text-primary sm:text-base">
              {about.subtitle}
            </p>
            <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl">
              {about.title}
            </h2>
            <p className="mb-6 text-sm leading-7 text-muted-foreground sm:mb-8 sm:text-base">
              {about.description}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyChooseMe.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-border bg-background/70 p-4 sm:p-5"
                >
                  <div className="mb-3 flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 rounded-full bg-primary/10 p-1">
                      <IconCheck className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold sm:text-base">
                      {item.title}
                    </h3>
                  </div>
                  <p className="pl-8 text-xs leading-6 text-muted-foreground sm:text-sm">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
