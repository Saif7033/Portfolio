# Saif Alam — Portfolio

Executive-grade, editorial light-mode portfolio for **Saif Alam** (Data Science & Applied Machine Learning).

Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **`motion/react`**, and **`lucide-react`**, powered by **PostgreSQL** and styled with the clean engineering aesthetics of Stripe, Linear, and Vercel.

---

## Tech Stack & Architecture

- **Framework**: Next.js 16.4.6 (App Router with Cache Components & Partial Prerendering)
- **Styling**: Tailwind CSS v4 & PostCSS
- **Typography**: `Bricolage_Grotesque` (Display), `Inter` (Sans), `JetBrains_Mono` (Monospace)
- **Animation**: `motion/react` (snappy spring physics & scroll-triggered reveals)
- **Database**: PostgreSQL (connection pooling via `pg`)
- **Icons**: `lucide-react` & custom SVG brand icons

---

## Features

- **Strict Editorial Light Mode**: `#FAFAFA` canvas and `#09090B` typography with subtle architectural dot-grid textures.
- **Interactive Live ML Pipeline**: Animated 3-stage visual pipeline (`Data Ingestion` $\rightarrow$ `Feature Engineering & Scikit-learn` $\rightarrow$ `Production Deploy · AWS / Streamlit`).
- **Dynamic Case Studies**: Deep-dive `/projects/[slug]` route with metric callouts, formatted problem/architecture writeups, and external GitHub/Live demo links.
- **Experience Timeline**: Production track record at Zalima Development Pvt. Ltd. (Data preprocessing, Scikit-learn pipelines, cross-functional ML delivery).
- **Interactive Command Palette**: `Cmd + K` search dialog to jump to projects, experience, or contacts.

---

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment**:
   Create a `.env.local` file with your PostgreSQL connection string:
   ```env
   DATABASE_URL="postgresql://user:password@host:5432/dbname"
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```
