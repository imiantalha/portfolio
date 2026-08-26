import { processSteps } from "../data/site";

export default function Process() {
  return (
    <section
      aria-labelledby="process-title"
      className="bg-gradient-to-br from-background to-primary/5 py-12 sm:py-16 md:py-20"
    >
      <div className="container-site">
        <div className="mb-8 text-center sm:mb-12">
          <h2
            id="process-title"
            className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl"
          >
            My Development Process
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-sm text-muted-foreground sm:px-0 sm:text-base">
            A structured approach to delivering high-quality production software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
            >
              <p className="text-3xl font-bold text-primary md:text-4xl">
                {step.number}
              </p>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
