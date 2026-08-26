import { IconCheck } from "./Icons";
import { about, whyChooseMe } from "../data/site";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-background to-primary/5 py-12 sm:py-16 md:py-20">
      <div className="container-site">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center sm:mb-12">
            <p className="mb-2 text-sm font-medium text-primary sm:text-base">{about.subtitle}</p>
            <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl">{about.title}</h2>
            <p className="mx-auto max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">{about.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseMe.map((item) => (
              <article key={item.title} className="rounded-lg border border-border bg-background/70 p-4 sm:p-5">
                <div className="mb-3 flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 rounded-full bg-primary/10 p-1"><IconCheck className="h-4 w-4 text-primary" /></div>
                  <h3 className="text-sm font-semibold sm:text-base">{item.title}</h3>
                </div>
                <p className="pl-8 text-xs leading-6 text-muted-foreground sm:text-sm">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
