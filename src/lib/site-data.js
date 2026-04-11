export const siteConfig = {
  name: "Yuteng Lin",
  shortName: "Yuteng.exe",
  role: "Full-Stack Developer",
  location: "Winnipeg, MB",
  email: "yutenglin.dev@gmail.com",
  phone: "(431) 554-0919",
  availability: "Open for intership, full-time, and part-time opportunities",
  headline: "Turning Business Needs into Practical Digital Solutions",
  intro:
    "From internal systems and dashboards to workflow tools and support processes, I build solutions that connect business needs with reliable implementation.",
  summary:
    "Full-stack developer with 4 years of product-company experience, now studying Full Stack Web Development at Red River College Polytechnic. I enjoy building reliable interfaces, cleaning up business logic, and helping teams move from idea to release.",
  resumeUrl:
    "https://drive.google.com/file/d/1DvBg706NOfHVGhjEsKVXCUAKSd72qSkW/view?usp=drive_link",
  github: "https://github.com/swaggyp7",
  linkedin: "https://www.linkedin.com/in/yuteng-lin-3ba8a9255/",
};

export const navigation = [
  { href: "/", label: "Desktop", icon: "home" },
  { href: "/contact", label: "Contact", icon: "chat" },
];

export const desktopShortcuts = [
  {
    href: "/computer",
    label: "Computer",
    icon: "computer",
  },
  {
    href: "/portfolio",
    label: "Projects",
    icon: "folder",
  },
];

export const socialLinks = [
  { href: siteConfig.github, label: "GitHub", icon: "github-brand" },
  { href: siteConfig.linkedin, label: "LinkedIn", icon: "linkedin-brand" },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: "gmail-brand" },
];

export const systemStats = [
  { label: "Location", value: "Winnipeg, Canada" },
  { label: "Primary stack", value: "React, Vue, Node, PHP, SQL" },
  { label: "Work style", value: "Debug-first, product-minded, collaborative" },
  { label: "Availability", value: "Open for intership, full-time, and part-time opportunities" },
];

export const focusAreas = [
  "Reusable UI systems and polished front-end delivery",
  "API design, database schemas, and SQL optimization",
  "Production debugging, bug triage, and release support",
  "Internal tools that reduce repetitive work for teams",
];

export const skillGroups = [
  {
    title: "Front-End",
    items: ["React", "Next.js", "Vue 3", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Back-End",
    items: ["Node.js", "PHP", "REST APIs", "Authentication flows", "Python", "Scheduling"],
  },
  {
    title: "Data",
    items: ["MySQL", "MS SQL", "SQLite", "Indexing", "Query tuning", "Reporting"],
  },
  {
    title: "Workflow",
    items: ["GitHub", "Docker", "Agile sprints", "Documentation", "Debugging", "QA handoff"],
  },
];

export const timeline = [
  {
    period: "2025 - 2026",
    title: "Red River College Polytechnic",
    subtitle: "Full Stack Web Development Diploma",
    body:
      "Studying modern web architecture in Canada while rebuilding my portfolio, sharpening interview material, and aligning my experience for local teams.",
  },
  {
    period: "2021 - 2025",
    title: "Hunan Xingtui Technology Co., Ltd.",
    subtitle: "Full-Stack Developer",
    body:
      "Delivered B2C apps and internal platforms using Vue, React, Node, PHP, and MySQL. Worked across feature ownership, production support, performance fixes, and release collaboration.",
  },
];

export const projects = [
  {
    slug: "game-campaign-platform",
    name: "Multi-Variant Game & Campaign Platform",
    year: "2024",
    accent: "orange",
    category: "Campaign platform",
    stack: ["Vue", "TypeScript", "PHP", "MySQL", "Android WebView"],
    summary:
      "A campaign platform spanning web and Android hybrid surfaces where users completed tasks for rewards and operations teams needed control without emergency deploys.",
    features: [
      "Multi-variant campaign flows shared across web and Android hybrid surfaces.",
      "Centralized campaign rule configuration for operations teams.",
      "Reward task management with reusable UI patterns across product variants.",
    ],
    responsibilities: [
      "Refactored shared UI patterns across multiple product variants to keep user flows consistent.",
      "Built a central campaign configuration model so operations could manage rules without urgent code changes.",
      "Worked on performance tuning for high-traffic endpoints used during peak campaign periods.",
    ],
    results: [
      "Reduced duplicated maintenance work across product variants.",
      "Made campaign updates safer and faster for operations teams.",
      "Improved responsiveness and stability during traffic spikes.",
    ],
    impact: [
      "Refactored shared UI patterns so multiple variants stopped drifting apart.",
      "Built a central campaign configuration model so ops could adjust rules safely.",
      "Improved peak-traffic stability with indexing, caching, and rate limiting.",
    ],
    images: [
      "/projects/game-01.jpg",
      "/projects/game-02.jpg",
      "/projects/game-03.jpg",
      "/projects/game-04.jpg",
    ],
    demoUrl: "/portfolio/demo/game-campaign-platform",
  },
  {
    slug: "wpg-tech-shop",
    name: "WPG E-Shop",
    accent: "green",
    category: "ECommerce",
    stack: ["Ruby on Rails", "Active Record", "Puma", "ERB", "Bootstrap 5", "SQLite3", "Stripe Checkout", "Docker", "Selenium WebDriver"],
    summary:
      "WPG Tech Shop is a full-stack e-commerce web application built with Ruby on Rails for a consumer electronics and tech retail scenario. It covers the complete shopping flow, including product browsing, user registration and login, cart management, order handling, online payment, and admin-side operations. This project was designed to demonstrate more than just UI rendering. It simulates a realistic online store with an end-to-end business workflow and highlights my abilities in full-stack web development, domain modeling, payment integration, and admin system implementation.",
    features: [
      "End-to-end e-commerce flow covering product discovery, filtering, cart management, Stripe checkout, and order history.",
      "Customer and admin dashboards for account management, product and category operations, and order tracking with status-based filtering.",
      "Business-focused order architecture with province-based Canadian tax calculation and order snapshot storage for accurate historical records.",
    ],
    responsibilities: [
    ],
    results: [
    ],
    impact: [
    ],
    images: [
    ],
    demoUrl: "https://wpg-ecommerce-shop.up.railway.app/products",
  },
  {
    slug: "review-crawler-reporting",
    name: "Google Play Review Crawler & Reporting",
    year: "2022",
    accent: "blue",
    category: "Data pipeline",
    stack: ["Python", "Scrapy", "Scheduling", "CSV/Excel"],
    summary:
      "A scheduled review-monitoring pipeline that turned noisy store feedback into searchable issue clusters and recurring quality signals after releases.",
    features: [
      "Automated review collection with retry handling and scheduled runs.",
      "Issue categorization that grouped user feedback into recurring complaint themes.",
      "Exportable reporting outputs for operations and product stakeholders.",
    ],
    responsibilities: [
      "Built the crawler pipeline for collecting reviews, handling retries, and normalizing stored data.",
      "Designed categorization logic to group feedback into actionable issue buckets.",
      "Generated recurring reporting outputs for operations and product stakeholders.",
    ],
    results: [
      "Made post-release review monitoring significantly faster than manual checks.",
      "Surfaced complaint spikes and version-level issues earlier.",
      "Turned unstructured feedback into searchable trend data for prioritization.",
    ],
    impact: [
      "Normalized reviews by version, date, rating, and issue category.",
      "Generated recurring reports to highlight spikes in complaints and rating drops.",
      "Helped teams react faster to release regressions with less manual checking.",
    ],
    images: [],
    demoUrl: "/portfolio/demo/review-crawler-reporting",
  },
];

export const blogPosts = [
  {
    title: "Shipping Internal Tools Without Making Users Feel Like Testers",
    tag: "Product delivery",
    date: "Apr 2026",
    excerpt:
      "Notes on designing admin flows, handling rough business rules, and keeping internal platforms fast enough that teams actually trust them.",
  },
  {
    title: "How I Approach a Slow SQL Dashboard",
    tag: "Performance",
    date: "Mar 2026",
    excerpt:
      "My process for reproducing performance issues, reading execution plans, adding the right indexes, and verifying improvements before release.",
  },
  {
    title: "Debugging as a Team Sport",
    tag: "Engineering craft",
    date: "Feb 2026",
    excerpt:
      "Why production debugging gets better when logs, reproduction steps, and documentation are treated like shared infrastructure instead of hero work.",
  },
];

export const contactMethods = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yuteng-lin-3ba8a9255",
    href: siteConfig.linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/swaggyp7",
    href: siteConfig.github,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`,
  },
];
