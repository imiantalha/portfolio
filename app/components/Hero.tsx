import { hero } from "../data/site";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-16 sm:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container-site py-5 sm:py-6 md:py-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative mb-4 inline-flex items-center sm:mb-6">
            <span
              aria-hidden="true"
              className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary"
            />
            <span className="relative inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:px-4 sm:py-2 sm:text-sm">
              {hero.badge}
            </span>
          </div>

          <h1
            id="hero-title"
            className="mb-4 px-2 text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            {hero.title}{" "}
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent sm:inline">
              {hero.titleHighlight}
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl px-4 text-base text-muted-foreground sm:mb-12 sm:px-0 sm:text-lg md:text-xl">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {hero.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground sm:text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
