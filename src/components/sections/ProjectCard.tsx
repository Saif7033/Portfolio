"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink, TrendingUp, Layers } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { motion } from "motion/react";
import type { Project } from "@/lib/db";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="group relative flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-7 shadow-xs transition-colors hover:border-blue-500/40"
    >
      <div>
        {/* Top bar: Category + Status */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-[#2563EB] uppercase">
            {project.category || "Applied ML"}
          </span>
          <span className="inline-flex items-center gap-1 rounded border border-zinc-200/60 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] text-zinc-500">
            Production Ready
          </span>
        </div>

        {/* Title & Link */}
        <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.02em] text-zinc-950 group-hover:text-blue-600 transition-colors">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        {/* Tagline */}
        <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-zinc-600">
          {project.tagline}
        </p>

        {/* Highlighted Metric Bar */}
        {project.metrics && (
          <div className="mt-5 flex items-center gap-2.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 font-mono text-xs text-zinc-800">
            <TrendingUp className="h-4 w-4 shrink-0 text-blue-600" />
            <span className="truncate">{project.metrics}</span>
          </div>
        )}

        {/* Tech Stack Pills */}
        {project.tech_stack && project.tech_stack.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-blue-200/50 bg-[#EFF6FF] px-2.5 py-1 font-mono text-xs font-medium text-[#1D4ED8]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="mt-7 flex items-center justify-between border-t border-zinc-100 pt-4">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 transition hover:text-blue-600"
        >
          <span>Read Case Study</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <div className="flex items-center gap-3">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="rounded p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-900"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
              className="rounded p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-900"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
