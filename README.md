# Portfolio Website

Personal portfolio website built with **React** to showcase my background, technical skills, and real-world project experience.

🔗 Live Demo: https://swaggyp7.github.io/ 
📄 Résumé: Available on the website

---

## ✨ Features

- Modern, responsive single-page portfolio
- Project highlights with:
  - Intro / Challenge / What I Did / Result structure
  - Image gallery with fullscreen modal (keyboard + click support)
- Smooth scroll navigation with active section tracking
- Subtle animations with `prefers-reduced-motion` support
- Clean, maintainable data-driven structure (easy to update content)

---

## 🛠 Tech Stack

### Frontend
- **React** (Functional Components + Hooks)
- **Vite** (Fast dev server & build tool)
- **JavaScript (ES6+)**
- **HTML5 / CSS3**

### UI & UX
- Responsive layout (desktop / tablet / mobile)
- CSS animations & transitions
- Accessible interactions (keyboard navigation, ARIA attributes)
- Modal rendered via **React Portal** (full-page overlay)

### Tooling & Platform
- **Git**
- **GitHub**
- **GitHub Pages**

---

## 🚀 CI/CD & Deployment

This project uses **GitHub Actions** for continuous integration and deployment.

### Workflow Overview

- On every push to the `main` branch:
  1. Install dependencies
  2. Build the React app using Vite
  3. Automatically deploy the production build to **GitHub Pages**

### Benefits
- No manual build or upload required
- Always keeps the live site in sync with the repository
- Safe, repeatable deployment process

---

## 📁 Project Structure (Simplified)

```text
/
├── public/
│   └── projects/        # Project screenshots
├── src/
│   ├── App.jsx          # Main portfolio layout
│   ├── data.js          # Profile data
│   └── index.css
│   └── main.jsx         # App entry
├── .github/workflows/
│   └── deploy.yml       # GitHub Actions CI/CD workflow
├── package.json
├── vite.config.js
└── README.md