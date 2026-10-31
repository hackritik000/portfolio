# Ritik Parihar — Portfolio Website

A modern, high-performance portfolio website built with **[Astro](https://astro.build)**, **[Tailwind CSS](https://tailwindcss.com)**, and powered exclusively by **[Bun](https://bun.sh)**.

Engineered for **Ritik Parihar**, Full-Stack & Cross-Platform Application Developer and Tech Team Lead based in Jodhpur, Rajasthan.

---

## 🚀 Tech Stack

- **Framework**: [Astro v7+](https://astro.build) (Static Site Generation / Islands Architecture)
- **Runtime & Package Manager**: [Bun](https://bun.sh) (v1.4+)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with custom glassmorphism and developer dark theme
- **Icons**: [lucide-astro](https://github.com/lucide-icons/lucide)
- **Data Layer**: Strictly-typed TypeScript data module (`src/data/portfolioData.ts`)

---

## ⚡ Quick Start with Bun

### 1. Install Dependencies
```bash
bun install
```

### 2. Start Local Development Server
```bash
bun run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production
```bash
bun run build
```
Generates ultra-fast static HTML/CSS assets in the `dist/` directory.

### 4. Preview Production Build
```bash
bun run preview
```

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── Ritik_s_Resume.pdf        # Downloadable/viewable resume
├── src/
│   ├── components/
│   │   ├── Navbar.astro           # Header navigation & mobile menu
│   │   ├── Hero.astro             # Hero section with Neovim code snippet
│   │   ├── About.astro            # Bio & core engineering principles
│   │   ├── Skills.astro           # Categorized skills matrix with live search
│   │   ├── Experience.astro       # Career & leadership timeline
│   │   ├── Projects.astro         # Filterable projects showcase
│   │   ├── Education.astro        # Academic history (B.Tech CSE, D.Pharm)
│   │   ├── NeovimTerminal.astro   # Interactive terminal emulator with CLI commands
│   │   ├── ResumeModal.astro      # Resume callout & download trigger
│   │   ├── Contact.astro          # Direct contacts, copy actions & mail form
│   │   └── Footer.astro           # Footer with links & status
│   ├── data/
│   │   └── portfolioData.ts       # Central source of truth for resume data
│   ├── layouts/
│   │   └── Layout.astro           # HTML shell, SEO, OpenGraph & JSON-LD
│   ├── pages/
│   │   └── index.astro            # Main landing page
│   └── styles/
│       └── global.css             # Tailwind v4 imports & custom utilities
├── astro.config.mjs               # Astro & Vite configuration
├── package.json                   # Bun scripts and dependencies
└── tsconfig.json                  # TypeScript configuration
```

---

## 🎯 Key Features

- **Built with Bun & Astro**: Zero-JS baseline where possible, instant static page loads.
- **Resume Integration**: Serves `Ritik_s_Resume.pdf` directly with 1-click download and browser viewing.
- **Interactive Neovim Terminal**: Live CLI emulator where visitors can run `whoami`, `skills`, `projects`, `resume`, `contact`, `neovim`, and `help`.
- **Dynamic Skill Search**: Live search bar to filter languages, frameworks, ORMs, and DevOps tools without reload.
- **Filterable Projects**: Categorized by Mobile (React Native), Full-Stack, and Web performance.
- **Copy-to-Clipboard Helpers**: 1-click copy with toast notifications for Email, Phone, and project info.
- **Rich SEO & Structured Data**: Complete OpenGraph meta tags and Schema.org JSON-LD Person markup.

---

## 👨‍💻 Developer Profile

- **Name**: Ritik Parihar
- **Email**: [hackritik000@gmail.com](mailto:hackritik000@gmail.com)
- **Phone**: [+91 8955721549](tel:+918955721549)
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/918955721549)
- **LinkedIn**: [linkedin.com/in/ritik-parihar](https://linkedin.com/in/ritik-parihar)
- **GitHub**: [github.com/hackritik000](https://github.com/hackritik000)
