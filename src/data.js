export const PROFILE = {
    name: "Yuteng Lin",
    title: "Full-Stack Web Developer",
    location: "Winnipeg, MB",
    email: "yutenglin.dev@gmail.com",
    phone: "(431) 554-0919",
    links: {
      github: "https://github.com/swaggyp7",
      linkedin: "https://www.linkedin.com/in/yuteng-lin-3ba8a9255/",
      resume: "https://drive.google.com/file/d/1DvBg706NOfHVGhjEsKVXCUAKSd72qSkW/view?usp=drive_link",
    },
    highlights: ["Vue 3", "React", "Node.js", "PHP", "Ruby", "Python", "SQL", "TypeScript"],
    heroTitle: "Building practical, production-ready web apps & internal tools.",
    summary:
      "Full-Stack Web Developer with 4 years of experience in a product company (China), now in Winnipeg and studying Full Stack Web Development at Red River College Polytechnic. Strong across front-end, back-end, databases, debugging, and shipping features end-to-end.",
    interests:
      "Interested in Junior / Co-op / Part-time roles · Learning local best practices · Ready to contribute from day one.",
  };

export const MAIN_SKILLS = [
    { name: "Vue 3", level: 90 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "PHP", level: 80 },
    { name: "SQL (MySQL/MS SQL)", level: 80 },
    { name: "Python", level: 75 },
  ];

export const SKILLS = [
    {
      group: "Front-End",
      items: ["Vue 3", "React", "TypeScript", "HTML5/CSS3", "Responsive Web Design"],
    },
    {
      group: "Back-End & APIs",
      items: ["Node.js", "PHP", "C# / ASP.NET (basic)"],
    },
    {
      group: "Databases",
      items: ["MySQL", "MS SQL", "Oracle DB", "SQLite", "Joins/Aggregation", "Stored Procedures"],
    },
    {
      group: "Testing & Tools",
      items: ["Jest", "Chrome DevTools", "Git/GitHub", "Docker", "Postman", "VS Code/Visual Studio"],
    },
  ];

export const EXPERIENCE = [
    {
      company: "Hunan Xingtui Technology Co., Ltd.",
      role: "Full-Stack Developer",
      period: "Oct 2021 – Feb 2025",
      location: "Changsha, China",
      bullets: [
        "Developed and maintained multiple B2C web & hybrid apps and internal tools (Vue/React/Node/PHP/MySQL).",
        "Owned features end-to-end: DB schema, API endpoints, responsive UI components, and release support.",
        "Optimized SQL for dashboards & reporting; improved slow queries with indexing and profiling.",
        "Resolved production issues by reproducing bugs, analyzing logs/stack traces, and debugging.",
        "Collaborated with PM/design/QA in Agile sprints; documented features and deployment notes.",
      ],
    },
  ];

export const PROJECTS = [
    {
      name: "Multi-Variant Game & Campaign Platform",
      stack: "Vue · TypeScript · PHP · MySQL · Android WebView / JSBridge",
      intro:
        "A large incentive / campaign platform with several variants (web, Android hybrid, mini-app). Users complete tasks to earn rewards; internal teams configure campaigns, monitor performance, and fight abuse.",
      challenges: [
        "Multiple variants gradually diverged (duplicate logic + inconsistent UI/behavior).",
        "Campaign rules needed frequent changes without redeploying, while keeping active campaigns stable.",
        "Peak traffic campaigns exposed performance bottlenecks on hot endpoints and slow SQL.",
      ],
      whatIDid: [
        "Refactored UI into shared, reusable components (task cards, reward lists, progress indicators) to keep behavior consistent across variants.",
        "Designed a central campaign configuration model in MySQL and exposed APIs so ops could adjust rules/rewards without code changes.",
        "Implemented JSBridge interfaces so Android could securely pass tokens/device info and the web layer could trigger native capabilities.",
        "Profiled slow queries, added indexes, and introduced caching/rate-limiting around hot endpoints used during peak campaigns.",
      ],
      results: [
        "Faster feature rollout across variants and less duplicated maintenance work.",
        "Safer campaign iteration with fewer deployment-time incidents.",
        "Improved responsiveness and stability during high-traffic periods (fewer complaints + less emergency debugging).",
      ],
      tags: ["Reusable components", "Config-driven rules", "Performance", "JSBridge"],
      images: [
        "/projects/game-01.jpg",
        "/projects/game-02.jpg",
        "/projects/game-03.jpg",
        "/projects/game-04.jpg",
      ],
    },
    {
      name: "Internal CMS & Admin Dashboard",
      stack: "React · TypeScript · PHP · MySQL",
      intro:
        "An internal CMS + dashboard for non-technical teams to manage marketing pages, in-app content, FAQs, and multi-campaign text/images with approvals and publishing controls.",
      challenges: [
        "Small content changes required developers, causing slow turnaround and more mistakes.",
        "Content structure lacked a single source of truth; updates were scattered across templates/config.",
        "Admin UI had to be flexible for layouts but still safe and easy for non-technical users.",
      ],
      whatIDid: [
        "Modeled content in a structured DB schema (pages → sections → blocks) with metadata (language/status/publish time) for governance and reuse.",
        "Built React admin screens: lists + filters (campaign/status/language), inline editors, and validation to reduce accidental breaks.",
        "Added reporting pages and dashboard views for key metrics (e.g., DAU, transaction volume, campaign performance) with tables and drill-down.",
      ],
      results: [
        "Non-technical teams could update content and monitor core metrics without developer help.",
        "Reduced campaign/content turnaround time; fewer back-and-forth requests.",
        "Unified content management + reporting into one extensible internal platform.",
      ],
      tags: ["Admin UX", "Content modeling", "CRUD", "Reporting"],
      images: [
        "/projects/cms-01.png",
        "/projects/cms-02.png",
        "/projects/cms-03.png",
        "/projects/cms-04.png",
        "/projects/cms-05.png",
      ],
    },
    {
      name: "Google Play Review Crawler & Reporting",
      stack: "Python · Scrapy · Scheduled Tasks · DB · CSV/Excel",
      intro:
        "A scheduled crawler that collects Google Play reviews, stores them in a structured database, and produces daily/weekly reporting to catch rating drops and recurring complaints after releases.",
      challenges: [
        "Review pages are noisy and can change—selectors needed to be maintainable and resilient.",
        "The crawler had to be stable (retries, throttling) and avoid aggressive request patterns.",
        "Ops needed actionable signals (spikes, keywords, version impact), not raw text.",
      ],
      whatIDid: [
        "Built a Scrapy spider to extract rating/text/time/version/locale, handle pagination, errors, and deduplication.",
        "Normalized + stored reviews with indexes by date/rating/version, and categorized issues via keyword tagging (e.g., crash/login/payment).",
        "Generated automated CSV/Excel outputs and summary metrics (daily rating trend, negative spikes, top complaint keywords).",
      ],
      results: [
        "Enabled near real-time feedback monitoring instead of manual store checks.",
        "Helped teams identify post-release issues faster when negative reviews spiked.",
        "Turned unstructured reviews into searchable, trendable insights for prioritization.",
      ],
      tags: ["Scrapy", "Scheduling", "Data pipeline", "Insights"],
      images: [],
    },
  ];

export const EDUCATION = [
    {
      school: "Red River College Polytechnic",
      program: "Full Stack Web Development Diploma",
      period: "Expected Aug 2026",
      location: "Canada",
    },
    {
      school: "Jilin University",
      program: "B.Sc. in Computer Science",
      period: "Sep 2020 - Jan 2023",
      location: "China",
    },
  ];

export const SECTIONS = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];