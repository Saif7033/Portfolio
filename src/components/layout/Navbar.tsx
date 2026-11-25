"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Command, X, ArrowUpRight, FolderGit2, Briefcase, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Cmd+K shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const quickActions = [
    { label: "Real Estate ML Valuation Engine", category: "Featured Project", href: "#projects", icon: FolderGit2 },
    { label: "Zalima Development Pvt. Ltd. (Internship)", category: "Experience", href: "#experience", icon: Briefcase },
    { label: "Get in touch / Email Saif", category: "Contact", href: "#contact", icon: Mail },
    { label: "GitHub Profile", category: "External", href: "https://github.com", icon: GithubIcon, external: true },
    { label: "LinkedIn Profile", category: "External", href: "https://linkedin.com", icon: LinkedinIcon, external: true },
  ];

  const filteredActions = quickActions.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand + Status Dot */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-medium text-zinc-950 transition-opacity hover:opacity-80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
            </span>
            <span className="text-sm font-semibold tracking-tight text-zinc-950">
              Saif Alam
            </span>
            <span className="hidden sm:inline-block rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
              DS & Applied ML
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-zinc-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Cmd + K Pill */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPaletteOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs text-zinc-500 shadow-xs transition hover:border-zinc-300 hover:text-zinc-800"
              aria-label="Quick search and command palette"
            >
              <Search className="h-3.5 w-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="inline-flex items-center gap-0.5 rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-[10px] font-medium text-zinc-500">
                <Command className="h-2.5 w-2.5" />
                <span>K</span>
              </kbd>
            </button>
          </div>
        </div>
      </header>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {paletteOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-zinc-950/20 backdrop-blur-xs"
              onClick={() => setPaletteOpen(false)}
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="relative w-full max-w-lg overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl"
            >
              <div className="flex items-center border-b border-zinc-200 px-3.5 py-2.5">
                <Search className="mr-2.5 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Type a command or jump to section..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-sm text-zinc-950 placeholder-zinc-400 outline-none"
                />
                <button
                  onClick={() => setPaletteOpen(false)}
                  className="rounded p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-72 overflow-y-auto p-2">
                <div className="px-2 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                  Quick Navigation
                </div>
                {filteredActions.length === 0 ? (
                  <div className="p-4 text-center text-xs text-zinc-400">
                    No matching items found.
                  </div>
                ) : (
                  filteredActions.map((action, i) => {
                    const Icon = action.icon;
                    return (
                      <a
                        key={i}
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        rel={action.external ? "noopener noreferrer" : undefined}
                        onClick={() => setPaletteOpen(false)}
                        className="group flex items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950"
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-4 w-4 text-zinc-400 group-hover:text-blue-600" />
                          <span>{action.label}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-[10px] text-zinc-400">
                            {action.category}
                          </span>
                          {action.external && (
                            <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                          )}
                        </div>
                      </a>
                    );
                  })
                )}
              </div>

              <div className="border-t border-zinc-100 bg-zinc-50 px-3.5 py-2 text-right font-mono text-[10px] text-zinc-400">
                Press <span className="font-semibold text-zinc-600">Esc</span> to close
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
