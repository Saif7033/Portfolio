import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { ProjectsDataFetcher } from "@/components/sections/ProjectsSection";
import { ProjectsLoadingSkeleton } from "@/components/sections/ProjectsLoadingSkeleton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA] text-[#09090B]">
      {/* Sticky Translucent Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Projects Section with Suspense Boundary */}
        <section
          id="projects"
          className="border-b border-zinc-200/80 bg-[#FAFAFA] py-24 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-14 max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-blue-600 mb-3 font-semibold">
                01 / SELECTED WORK
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-zinc-950">
                Featured Applied ML Systems
              </h2>
              <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-zinc-600">
                Architected from exploratory analysis to reproducible Scikit-learn pipelines
                and real-time inference endpoints.
              </p>
            </div>

            {/* Suspense boundary with sleek skeleton fallback */}
            <Suspense fallback={<ProjectsLoadingSkeleton />}>
              <ProjectsDataFetcher />
            </Suspense>
          </div>
        </section>

        {/* Experience Section */}
        <Experience />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
