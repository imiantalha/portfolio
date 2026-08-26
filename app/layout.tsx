import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
import { personal } from "./data/site";
import "./globals.css";

const siteUrl = "https://imiantalha.vercel.app";
const description =
  "Muhammad Talha is a backend-focused Software Engineer in Lahore specializing in PHP, Laravel, REST APIs, databases, integrations, and full-stack delivery with React and Next.js.";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Talha | Software Engineer — Laravel, PHP & REST APIs",
    template: "%s | Muhammad Talha",
  },
  description,
  keywords: [
    "Muhammad Talha",
    "Software Engineer",
    "Laravel Developer",
    "PHP Developer",
    "REST API Developer",
    "Laravel Developer Lahore",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Muhammad Talha | Software Engineer — Laravel, PHP & REST APIs",
    description,
    url: siteUrl,
    type: "website",
    siteName: personal.name,
    locale: "en_US",
    images: [
      {
        url: "/images/profile/me.jpg",
        width: 1200,
        height: 1200,
        alt: "Muhammad Talha — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Talha | Software Engineer — Laravel, PHP & REST APIs",
    description,
    images: ["/images/profile/me.jpg"],
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: personal.name,
      jobTitle: "Software Engineer",
      description,
      url: siteUrl,
      email: `mailto:${personal.email}`,
      telephone: personal.phoneRaw,
      image: `${siteUrl}/images/profile/me.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      worksFor: {
        "@type": "Organization",
        name: "MindBlaze Technologies",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Virtual University of Pakistan",
      },
      sameAs: [personal.linkedin, personal.github],
      knowsAbout: [
        "PHP",
        "Laravel",
        "REST APIs",
        "React",
        "Next.js",
        "MySQL",
        "PostgreSQL",
        "MS SQL Server",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: personal.name,
      url: siteUrl,
      description,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: `${personal.name} | Software Engineer`,
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
  ],
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}var r=document.documentElement;r.classList.remove("light","dark");r.classList.add(t);r.style.colorScheme=t;}catch(e){document.documentElement.classList.add("light");}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background font-sans text-foreground antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          {children}
          <ScrollToTop />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
