import { IconMail, IconMapPin, IconPhone } from "./Icons";
import { personal } from "../data/site";

const details = [
  {
    title: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: IconMail,
  },
  {
    title: "Phone",
    value: personal.phone,
    href: personal.phoneHref,
    icon: IconPhone,
  },
  {
    title: "Location",
    value: personal.location,
    href: undefined,
    icon: IconMapPin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-background py-12 sm:py-16 md:py-20">
      <div className="container-site">
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-2 text-sm font-medium text-primary sm:text-base">
            Get In Touch
          </p>
          <h2 className="mb-3 px-4 text-2xl font-bold sm:mb-4 sm:px-0 sm:text-3xl md:text-4xl">
            Have a project in mind? Let&apos;s build something useful together.
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-sm text-muted-foreground sm:px-0 sm:text-base">
            I&apos;m always open to discussing new projects, engineering problems, or opportunities to contribute to a product.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {details.map((item) => {
            const Icon = item.icon;
            const isPhone = item.title === "Phone";

            const card = (
              <article className="h-full rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="text-base font-semibold sm:text-lg">{item.title}</h3>
                </div>
                <p
                  className={`text-sm text-muted-foreground sm:text-base ${
                    isPhone
                      ? "whitespace-nowrap font-medium tracking-wide text-foreground"
                      : "break-words"
                  }`}
                  dir={isPhone ? "ltr" : undefined}
                >
                  {item.value}
                </p>
              </article>
            );

            return item.href ? (
              <a key={item.title} href={item.href} className="block">
                {card}
              </a>
            ) : (
              <div key={item.title}>{card}</div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${personal.email}`}
            className="w-full rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Email Me
          </a>
          <a
            href={personal.phoneHref}
            className="w-full rounded-full border border-border px-6 py-3 text-center text-sm font-medium transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            {personal.phone}
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-border px-6 py-3 text-center text-sm font-medium transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-border px-6 py-3 text-center text-sm font-medium transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
