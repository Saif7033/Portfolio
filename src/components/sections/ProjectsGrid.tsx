"use client";

import { FolderOpen } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/lib/db";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-white p-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400">
          <FolderOpen className="h-6 w-6" />
        </div>
        <h4 className="mt-4 text-sm font-semibold text-zinc-900">
          No projects found
        </h4>
        <p className="mt-1 text-xs text-zinc-500 max-w-sm">
          Featured data science and machine learning projects are currently being synchronized from the database.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project, idx) => (
        <ProjectCard key={project.id ?? project.slug} project={project} index={idx} />
      ))}
    </div>
  );
}
