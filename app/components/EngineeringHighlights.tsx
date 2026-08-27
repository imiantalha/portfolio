const highlights = [
  { eyebrow: "Search Infrastructure", title: "Algolia → Meilisearch", detail: "Evaluated search infrastructure and prepared a Meilisearch migration approach to improve control over search data and infrastructure costs." },
  { eyebrow: "Data Architecture", title: "MySQL + SQL Server", detail: "Worked across multiple database systems, including query optimization, indexing, large data operations, and external database workflows." },
  { eyebrow: "Shipping Integrations", title: "FedEx · USPS · DHL · ShipStation", detail: "Integrated multiple shipping providers and handled carrier-specific rates, shipments, invoices, and operational workflows." },
  { eyebrow: "Performance", title: "~2–3s → ~0.5s", detail: "Investigated database and application bottlenecks and improved an API operation through indexing and query optimization." },
  { eyebrow: "API Evolution", title: "v1 · v2 · v3", detail: "Used API versioning to preserve backward compatibility for older mobile clients while evolving newer API contracts." },
  { eyebrow: "Support & Webhooks", title: "Zendesk Integration", detail: "Integrated ticket lifecycle webhooks and automated synchronization of newly registered users with the support platform." },
];

export default function EngineeringHighlights() {
  return (
    <section aria-labelledby="engineering-highlights-title" className="py-12 sm:py-16 md:py-20">
      <div className="container-site">
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Engineering Evidence</p>
          <h2 id="engineering-highlights-title" className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">Engineering Highlights</h2>
          <p className="mx-auto max-w-2xl px-4 text-sm text-muted-foreground sm:px-0 sm:text-base">A snapshot of real production problems, integrations, engineering decisions, and scale I have worked with.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <article key={highlight.title} className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{highlight.eyebrow}</p>
              <h3 className="mt-3 text-lg font-semibold transition-colors group-hover:text-primary sm:text-xl">{highlight.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{highlight.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
