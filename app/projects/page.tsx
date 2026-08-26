import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

const siteUrl = "https://imiantalha.vercel.app";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Laravel and PHP case studies by Muhammad Talha across e-commerce, B2B, HR, and enterprise workflow systems.",
  keywords: [
    "Laravel projects",
    "PHP case studies",
    "Muhammad Talha",
    "e-commerce API",
    "REST API",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Muhammad Talha",
    description:
      "Laravel and PHP case studies across e-commerce, B2B, HR, and enterprise workflow systems.",
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="min-h-screen bg-background">
        <div className="container-site py-16 sm:py-24">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to Home
          </Link>

          <div className="mt-14 max-w-4xl">
            <p className="text-sm font-medium text-primary">Projects</p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              Production systems I&apos;ve contributed to.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
              PHP and Laravel work across marketplaces, HR platforms, and enterprise workflows.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <article>
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                    {project.gallery[0] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.gallery[0].src}
                        alt={project.gallery[0].alt}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : null}
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h2 className="text-xl font-semibold group-hover:text-primary">
                        {project.title}
                      </h2>
                      <span className="shrink-0 rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                        {project.badge}
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {project.shortDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((technology) => (
                        <span
                          key={technology}
                          className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Muhammad Talha — selected software projects",
            itemListElement: projects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${siteUrl}/projects/${project.slug}`,
              name: project.title,
              description: project.shortDescription,
            })),
          }),
        }}
      />
    </>
  );
}
