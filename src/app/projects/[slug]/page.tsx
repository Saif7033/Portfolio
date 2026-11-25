import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Calendar,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { pool, type Project } from "@/lib/db";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const res = await pool.query(
      "SELECT title, tagline FROM public.projects WHERE slug = $1",
      [slug]
    );
    const project = res.rows[0];
    if (!project) return { title: "Project Not Found | Saif Alam" };
    return {
      title: `${project.title} — Case Study | Saif Alam`,
      description: project.tagline,
    };
  } catch {
    return { title: "Project Case Study | Saif Alam" };
  }
}

function CaseStudySkeleton() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 animate-pulse">
      <div className="h-4 w-32 rounded bg-zinc-200" />
      <div className="mt-8 h-8 w-2/3 rounded bg-zinc-200" />
      <div className="mt-3 h-5 w-5/6 rounded bg-zinc-100" />
      <div className="mt-6 h-12 w-full rounded-lg bg-zinc-100" />
      <div className="mt-8 h-64 w-full rounded-xl bg-zinc-100" />
    </div>
  );
}

// Markdown parser helper for editorial case studies
function RenderMarkdown({ content }: { content: string }) {
  if (!content) return null;

  // Normalize escaped \n sequences into real newlines if needed
  const normalized = content.replace(/\\n/g, "\n");
  const blocks = normalized.split(/\n\n+/);

  return (
    <div className="space-y-6 text-zinc-700 leading-relaxed">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("### ")) {
          return (
            <h4
              key={idx}
              className="mt-6 text-base font-bold text-zinc-950 sm:text-lg"
            >
              {trimmed.replace("### ", "")}
            </h4>
          );
        }

        if (trimmed.startsWith("## ")) {
          const lines = trimmed.split("\n");
          const heading = lines[0].replace("## ", "");
          const body = lines.slice(1).join("\n").trim();

          return (
            <div key={idx} className="mt-8 border-b border-zinc-100 pb-4 first:mt-0">
              <h3 className="text-lg font-bold text-zinc-950 sm:text-xl">
                {heading}
              </h3>
              {body && (
                <p className="mt-3 text-sm leading-relaxed text-zinc-700 sm:text-base">
                  {body}
                </p>
              )}
            </div>
          );
        }

        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const items = trimmed.split("\n");
          return (
            <ul key={idx} className="space-y-2 pl-2">
              {items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-700"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{item.replace(/^[-*]\s+/, "")}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={idx} className="text-sm leading-relaxed text-zinc-700 sm:text-base">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let project: Project | null = null;

  try {
    const res = await pool.query(
      "SELECT * FROM public.projects WHERE slug = $1 LIMIT 1;",
      [slug]
    );
    project = res.rows[0] ?? null;
  } catch (err) {
    console.error("Database query error on slug:", err);
    notFound();
  }

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Navigation Breadcrumb */}
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-500 hover:text-zinc-950 transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
        <span>Back to all projects</span>
      </Link>

      {/* Hero Meta Header */}
      <header className="mt-6 border-b border-zinc-200 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
            {project.category}
          </span>
          <span className="text-zinc-300">·</span>
          <span className="inline-flex items-center gap-1 rounded border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[11px] text-zinc-600">
            Case Study
          </span>
        </div>

        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-zinc-950">
          {project.title}
        </h1>

        <p className="mt-4 text-[17px] sm:text-lg leading-relaxed text-zinc-600">
          {project.tagline}
        </p>

        {/* Highlighted Metric Callout */}
        {project.metrics && (
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-2xs font-mono text-xs text-zinc-900">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase text-zinc-400">
                Key Performance & Impact Metric
              </div>
              <div className="mt-0.5 font-semibold text-zinc-950">
                {project.metrics}
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack Pills & Action CTAs */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.tech_stack?.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-blue-200/50 bg-[#EFF6FF] px-2.5 py-1 font-mono text-xs font-medium text-[#1D4ED8]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-800 shadow-2xs transition hover:border-zinc-300 hover:bg-zinc-50"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub Source</span>
              </a>
            )}

            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-3.5 py-2 text-xs font-semibold text-white shadow-2xs transition hover:bg-blue-700"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Body: Architectural Case Study Content */}
      <section className="mt-8 rounded-xl border border-zinc-200 bg-white p-6 shadow-xs sm:p-10">
        <RenderMarkdown content={project.summary_markdown} />
      </section>

      {/* Next Step / Footer Navigation */}
      <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white p-6 sm:flex-row">
        <div>
          <div className="text-sm font-semibold text-zinc-900">
            Have questions about this architecture?
          </div>
          <div className="text-xs text-zinc-500">
            Let&apos;s discuss the ML design, data transformations, or deployment choices.
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="rounded-lg bg-[#2563EB] px-4 py-2 text-xs font-medium text-white shadow-xs transition hover:bg-blue-700"
          >
            Contact Saif
          </Link>
          <Link
            href="/#projects"
            className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100"
          >
            All Projects
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ProjectPage({ params }: PageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA] text-[#09090B]">
      <Navbar />

      <main className="flex-1">
        <Suspense fallback={<CaseStudySkeleton />}>
          <ProjectContent params={params} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
