import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getProjectBySlug, projects } from "../../data/projects";
import { personal } from "../../data/site";

const siteUrl = "https://imiantalha.vercel.app";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project" };
  }

  const title = `${project.title} — ${project.category}`;
  const description = project.description;
  const image = project.gallery[0];

  return {
    title,
    description,
    keywords: [
      project.title,
      "Muhammad Talha",
      "Laravel",
      "PHP",
      ...project.technologies.slice(0, 6),
    ],
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Muhammad Talha`,
      description,
      url: `/projects/${project.slug}`,
      type: "article",
      images: image
        ? [{ url: image.src, alt: image.alt }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Muhammad Talha`,
      description,
      images: image ? [image.src] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${siteUrl}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: personal.name,
      url: siteUrl,
    },
    keywords: project.technologies.join(", "),
    about: project.category,
  };

  return (
    <>
      <Navbar />

      <main id="main-content" className="min-h-screen bg-background">
        <article className="container-site py-16 sm:py-24">
          <Link
            href="/#projects"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to projects
          </Link>

          <p className="mt-14 text-sm font-medium text-primary">{project.category}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            {project.description}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Role:</span> {project.role}
          </p>

          {project.gallery[0] ? (
            <div className="mt-10 overflow-hidden rounded-lg border border-border bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.gallery[0].src}
                alt={project.gallery[0].alt}
                className="max-h-[480px] w-full object-cover object-top"
              />
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground"
              >
                {technology}
              </span>
            ))}
          </div>

          {project.impact ? (
            <section className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-primary">
                Result
              </p>
              <h2 className="mt-2 text-xl font-semibold">{project.impact.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {project.impact.description}
              </p>
            </section>
          ) : null}

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">Contributions</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.contributions.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {project.architecture ? (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold tracking-tight">
                {project.architecture.title}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                {project.architecture.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.architecture.results.map((result) => (
                  <li
                    key={result}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.challenges?.length ? (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold tracking-tight">Engineering challenges</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {project.challenges.map((challenge) => (
                  <div
                    key={challenge.title}
                    className="rounded-lg border border-border bg-card p-6"
                  >
                    <h3 className="font-semibold">{challenge.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {challenge.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {challenge.approach.map((step) => (
                        <li
                          key={step}
                          className="text-sm leading-6 text-muted-foreground"
                        >
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {project.gallery.length > 1 ? (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold tracking-tight">Screenshots</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.gallery.slice(1).map((image) => (
                  <div
                    key={image.src}
                    className="overflow-hidden rounded-lg border border-border bg-muted"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-56 w-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </main>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
