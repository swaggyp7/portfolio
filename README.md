# Yuteng Lin Final Portfolio Site

This project is a retro operating-system-inspired portfolio website built to present my background, project experience, and technical strengths in a format that is easy for recruiters and hiring managers to scan quickly.

The site is designed to highlight both front-end polish and product-minded engineering. It combines a custom Windows/XP-inspired interface with structured project case studies, an interactive portfolio explorer, and direct contact pathways.

## Project Highlights

- Retro desktop-style portfolio interface inspired by classic operating systems
- Structured project showcase with project summaries, features, responsibilities, results, and demo routes
- Portfolio explorer experience with folder navigation, README preview windows, and executable-style demo launch
- Recruiter-friendly content focused on professional experience, technical strengths, and contact access
- Static export deployment model suitable for simple hosting and containerized delivery

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- JavaScript (ES Modules)
- Nginx for Dockerized static serving

## Main Sections

- Desktop landing experience
- Computer page with profile summary, focus areas, education, experience, and skills
- Portfolio explorer with project folders and interactive README windows
- Demo preview routes for individual projects
- Contact page with direct channels and mail-client form

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Dockerized Setup

This project uses a multi-stage Docker build:

- Stage 1: Build the static Next.js export
- Stage 2: Serve the generated `out/` files with Nginx

The container working directory is:

```text
/yuteng_lin_final_site
```

### Build the image

```bash
docker build -t yuteng_lin_coding_assignment14 .
```

### Run the container on port 5575

Use the required container name and bind the host to `5575`:

```bash
docker run -d --name yuteng_lin_coding_assignment14 -p 5575:5575 yuteng_lin_coding_assignment14
```

Then open:

```text
http://localhost:5575
```

### Stop and remove the container

```bash
docker stop yuteng_lin_coding_assignment14
docker rm yuteng_lin_coding_assignment14
```

### Rebuild after changes

```bash
docker build -t yuteng_lin_coding_assignment14 .
docker rm -f yuteng_lin_coding_assignment14
docker run -d --name yuteng_lin_coding_assignment14 -p 5575:5575 yuteng_lin_coding_assignment14
```

## Recruiter Notes

This portfolio is intended to communicate:

- Full-stack development experience across UI, APIs, internal tools, and data workflows
- Ability to turn product and business requirements into practical implementations
- Experience building both customer-facing and internal systems
- Strong attention to interface detail, structure, and presentation

## Deployment Model

The app is currently configured as a static export project. That means it is well-suited for:

- GitHub Pages
- Static hosting
- Dockerized Nginx hosting

It does not require a Node.js server process in production for the current feature set.
