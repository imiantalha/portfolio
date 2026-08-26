export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  shortDescription: string;
  role: string;
  technologies: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  contributions: string[];
  architecture?: {
    title: string;
    description: string;
    results: string[];
  };
  challenges?: {
    title: string;
    description: string;
    approach: string[];
  }[];
  impact?: {
    title: string;
    description: string;
  };
  gallery: ProjectImage[];
};

export const mallshark: Project = {
  number: "01",
  slug: "mallshark",
  title: "Mallshark",
  category: "Multi-Vendor E-commerce Marketplace",
  badge: "E-commerce",
  description:
    "Production marketplace covering vendors, customers, products, orders, checkout, payments, shipping, search, notifications, inventory, reporting, and mobile APIs.",
  shortDescription:
    "Multi-vendor marketplace with payments, shipping, search, notifications, and versioned mobile APIs.",
  role: "Backend / Full-Stack Software Engineer",
  technologies: ["PHP", "Laravel", "MySQL", "Laravel Passport", "REST APIs", "Stripe", "PayPal", "Crypto.com", "FedEx", "DHL", "USPS", "ShipStation", "Algolia", "Meilisearch", "Firebase / FCM", "Queues & Jobs"],
  contributions: [
    "Product, vendor, customer, order, checkout, and multi-vendor workflows",
    "Stripe, PayPal, and Crypto.com payment integrations",
    "FedEx, DHL, USPS, and ShipStation shipping integrations",
    "Shipment creation, label generation, and tracking workflows",
    "Versioned mobile APIs across v1, v2, and v3",
    "Firebase notifications and webhook processing",
    "Queue jobs and CSV bulk product / stock processing",
    "Caching, analytics, and asynchronous processing",
    "Multi-warehouse inventory across the Middle East",
    "Customer- and origin-based pricing",
    "MySQL integration with an external MS SQL system",
    "Database/query optimization that reduced one product-detail operation from ~2–3s to ~0.5s",
  ],
  architecture: {
    title: "Production-scale marketplace engineering",
    description:
      "Multiple business domains, external integrations, versioned APIs, asynchronous processing, and data exchanged between MySQL and an external MS SQL system.",
    results: [
      "200+ vendors", "1M+ customers", "1M+ API users", "Thousands of orders", "6K+ products",
      "Large production database", "Multiple warehouses across the Middle East", "Laravel Passport", "API v1 / v2 / v3",
    ],
  },
  challenges: [
    {
      title: "Algolia → self-hosted Meilisearch",
      description: "Migrated production search from Algolia to self-hosted Meilisearch while preserving application search functionality.",
      approach: [
        "Replaced the production search dependency with self-hosted Meilisearch",
        "Migrated application and product search workflows",
        "Removed approximately $100/month in recurring search cost",
      ],
    },
    {
      title: "Multi-carrier shipping",
      description: "Supported multiple shipping authorities and services instead of a single carrier dependency.",
      approach: [
        "Integrated FedEx, DHL, USPS, and ShipStation",
        "Implemented shipment creation and label generation",
        "Supported carrier tracking URLs",
      ],
    },
    {
      title: "Multi-database business workflows",
      description: "Core application data lived in MySQL while stock and customer-related data also came from an external MS SQL system.",
      approach: [
        "Connected workflows across MySQL and MS SQL",
        "Integrated stock and customer data into marketplace operations",
        "Handled business workflows spanning different data sources",
      ],
    },
  ],
  impact: {
    title: "A measurable infrastructure decision",
    description: "The Algolia-to-Meilisearch migration removed approximately $100/month in recurring search cost without claiming an unmeasured performance improvement.",
  },
  gallery: [
    { src: "/images/mallshark/explore.png", alt: "Mallshark product exploration interface" },
    { src: "/images/mallshark/product.png", alt: "Mallshark product management interface" },
    { src: "/images/mallshark/checkout.png", alt: "Mallshark checkout interface" },
    { src: "/images/mallshark/seller-center.png", alt: "Mallshark seller center interface" },
  ],
};

export const textileSouk: Project = {
  number: "02",
  slug: "textile-souk",
  title: "Textile Souk",
  category: "B2B Textile Marketplace · API-First Backend",
  badge: "B2B Marketplace",
  description:
    "API-first mobile backend covering products, orders, inquiries, shipments, cargo, stock, warehouse transfers, notifications, reports, and external business data.",
  shortDescription:
    "API-first B2B backend with MS SQL pricing, warehouse transfers, and Zendesk support workflows.",
  role: "Backend Engineer",
  technologies: ["PHP", "Laravel", "MySQL", "MS SQL Server", "REST APIs", "Firebase / FCM", "Zendesk"],
  contributions: [
    "Built the backend and REST APIs from scratch for mobile clients",
    "Product and order management",
    "Inquiry, shipment, and cargo workflows",
    "Stock management and warehouse transfers",
    "Firebase / FCM push notifications",
    "Reports and business workflows",
    "External stock and pricing integration through MS SQL Server",
    "Customer- and region-based pricing workflows",
    "Zendesk support integration and ticket lifecycle webhooks",
    "Automated new-user synchronization with Zendesk",
    "Background processing for resource-intensive operations",
  ],
  architecture: {
    title: "Two-database architecture driven by business data",
    description:
      "MySQL handled core application workflows while MS SQL Server supplied external stock and pricing data, including customer- and region-specific pricing.",
    results: [
      "Backend built from scratch for a mobile application",
      "MySQL for core application records and workflows",
      "MS SQL Server for external stock and pricing",
      "Customer- and region-specific pricing",
      "Warehouse stock transfers",
      "REST API-first architecture",
      "Firebase / FCM notifications",
      "Zendesk support integration",
    ],
  },
  challenges: [
    {
      title: "Customer- and region-specific pricing",
      description: "Pricing depended on customer and regional context from the external business data system.",
      approach: [
        "Integrated external MS SQL pricing data",
        "Connected customer and regional context to pricing workflows",
        "Kept application workflows aligned with external stock and pricing",
      ],
    },
    {
      title: "API-first mobile backend",
      description: "The backend was designed around REST APIs consumed by the mobile application rather than a traditional web frontend.",
      approach: [
        "Built APIs around core marketplace workflows",
        "Structured product, order, shipment, stock, and notification operations",
        "Implemented business logic independently of a traditional web UI",
      ],
    },
    {
      title: "Zendesk support integration",
      description: "Integrated Zendesk as the customer-support ticketing system and synchronized support activity with the application.",
      approach: [
        "Handled webhooks for new tickets, replies, queries, resolutions, and closures",
        "Automated new-user registration synchronization with Zendesk",
        "Kept customer-support records connected to application users and lifecycle events",
      ],
    },
  ],
  impact: {
    title: "A backend built around the mobile product",
    description: "Built the API layer from scratch, connecting application workflows with external stock and pricing data through a deliberate two-database architecture and integrating Zendesk for customer support.",
  },
  gallery: [
    { src: "/images/textile-souk/dashboard.png", alt: "Textile Souk dashboard" },
    { src: "/images/textile-souk/products.png", alt: "Textile Souk products interface" },
    { src: "/images/textile-souk/brands.png", alt: "Textile Souk brands interface" },
    { src: "/images/textile-souk/stock.png", alt: "Textile Souk stock transfer interface" },
  ],
};

export const ems: Project = {
  number: "03",
  slug: "employee-management-system",
  title: "Employee Management System",
  category: "HR & Employee Management",
  badge: "HR",
  description: "HR platform covering attendance, leave, employee workflows, RBAC, REST APIs, and a Next.js / React interface.",
  shortDescription:
    "HR platform with attendance, leave, Sanctum auth, RBAC, and a Next.js / React interface.",
  role: "Backend / Full-Stack Software Engineer",
  technologies: ["Laravel", "PHP", "Next.js", "React", "REST APIs", "Laravel Sanctum", "RBAC", "MySQL"],
  contributions: [
    "Attendance and leave workflows",
    "REST API development",
    "Laravel Sanctum authentication",
    "Role-based access control",
    "Next.js / React frontend integration",
    "Employee data and workflow updates",
    "Leave recalculation after significant employee data updates",
  ],
  architecture: {
    title: "API-driven HR application",
    description: "Worked across the Laravel API and Next.js / React interface, connecting backend business workflows with the application UI.",
    results: ["Laravel backend", "Next.js / React interface", "Laravel Sanctum", "RBAC", "Attendance and leave workflows", "MySQL"],
  },
  gallery: [{ src: "/images/ems/dashboard.png", alt: "Employee management system dashboard" }],
};

export const pakRailways: Project = {
  number: "04",
  slug: "pak-railways-tender-workflow",
  title: "Pak Railways Tender Workflow Management System",
  category: "Enterprise Workflow Management",
  badge: "Enterprise",
  description: "Enterprise workflow system covering tenders, bids, orders, shipments, reporting, filters, imports/exports, and unified dashboard search.",
  shortDescription:
    "Enterprise tender workflows with unified search, reporting, and bulk Excel imports/exports.",
  role: "Software Engineer",
  technologies: ["Laravel", "PHP", "MySQL", "Algolia", "DataTables", "Excel Imports / Exports", "RBAC"],
  contributions: [
    "Unified dashboard search across enterprise data",
    "Tender and bid management",
    "Order and shipment workflows",
    "Advanced filters and DataTables",
    "Reports and Excel exports",
    "Excel imports and bulk addition",
    "Large report-generation/email workflows using chunk-by-ID processing",
    "CRUD and enterprise data management",
  ],
  architecture: {
    title: "Unified search for enterprise workflows",
    description: "Dashboard search brought relevant orders, bids, shipments, and other enterprise data into one search experience.",
    results: ["Unified dashboard search", "Algolia search", "Bid management", "Order and shipment workflows", "Filtered reporting", "Excel imports and exports"],
  },
  gallery: [{ src: "/images/pak-railways/dashboard.png", alt: "Pak Railways tender workflow dashboard" }],
};

export const doorToDoor: Project = {
  number: "05",
  slug: "door-to-door",
  title: "Door to Door / Fresco Canada",
  category: "Canada-Focused Single-Vendor E-commerce",
  badge: "E-commerce",
  description: "Single-vendor e-commerce implementation using Laravel and Blade, covering authentication, catalogue, categories, filtering, storefront, and backend integration.",
  shortDescription:
    "Canada-focused Laravel storefront with catalogue, filtering, authentication, and admin workflows.",
  role: "Software Engineer",
  technologies: ["Laravel", "PHP", "Blade", "MySQL", "E-commerce"],
  contributions: ["Authentication", "Product listing and catalogue", "Category browsing and filtering", "Storefront and dashboard interfaces", "Backend integration"],
  architecture: {
    title: "Single-vendor e-commerce implementation",
    description: "A focused Canada-oriented storefront using familiar single-vendor e-commerce patterns.",
    results: ["Single-vendor architecture", "Blade frontend", "Product catalogue", "Category filtering", "Authentication"],
  },
  gallery: [{ src: "/images/door-to-door/home.png", alt: "Door to Door e-commerce homepage" }],
};

export const featuredProjects: Project[] = [mallshark, textileSouk];
export const otherProjects: Project[] = [ems, pakRailways, doorToDoor];
export const projects: Project[] = [mallshark, textileSouk, ems, pakRailways, doorToDoor];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
