"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-zinc-200 bg-white py-8 transition-colors">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-900 text-sm">Saif Alam</span>
            <span className="text-zinc-300">·</span>
            <span className="font-mono text-xs text-zinc-500">
              Data Science & Applied ML
            </span>
          </div>
          <p className="font-mono text-xs text-zinc-400">
            © {currentYear} Saif Alam. Editorial Light Architecture. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5 text-xs text-zinc-500 font-medium">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="hover:text-zinc-950 transition-colors"
          >
            Contact
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 rounded border border-zinc-200 bg-zinc-50 px-2 py-1 text-[11px] font-mono text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition"
          >
            Top <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
