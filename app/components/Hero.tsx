import Image from "next/image";
import Link from "next/link";
import { hero } from "../data/site";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-background"
    >
      <div className="container-site grid min-h-[calc(100vh-80px)] gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16 lg:py-14">
        <div>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm text-muted-foreground">{hero.badge}</span>
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-primary">
            {hero.role}
          </p>

          <h1
            id="hero-title"
            className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {hero.title}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="#projects" className="rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
              {hero.primaryButton}
            </Link>
            <Link href="#contact" className="rounded-full border border-border px-6 py-3 text-center text-sm font-medium transition-colors hover:border-primary hover:text-primary">
              {hero.secondaryButton}
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground" aria-label="Primary technologies">
            {hero.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end lg:pt-2">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-4 rounded-full border border-border" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-border shadow-lg sm:h-80 sm:w-80">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 256px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
