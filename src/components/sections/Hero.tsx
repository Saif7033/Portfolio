"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Cpu,
  Rocket,
  Activity,
  CheckCircle2,
  RefreshCw,
  Terminal,
  MapPin,
} from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const triggerSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 1400);
  };

  const pipelineSteps = [
    {
      id: 1,
      title: "Data Ingestion",
      subtitle: "PostgreSQL & Cleaned Tabular Features",
      tag: "Pandas · SQL",
      icon: Database,
      detail: "Cleaned raw listings, handled outliers & automated null imputation.",
    },
    {
      id: 2,
      title: "Feature Engineering & Scikit-learn",
      subtitle: "Pipelines, One-Hot Encoding & Regression",
      tag: "Scikit-learn · Cross-Val",
      icon: Cpu,
      detail: "Trained Random Forest & Gradient Boosted regressors with strict CV.",
    },
    {
      id: 3,
      title: "Production Deploy · AWS / Streamlit",
      subtitle: "Interactive Inference & Cloud Serving",
      tag: "AWS · Streamlit",
      icon: Rocket,
      detail: "Sub-50ms inference latency with real-time parameter tuning.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-zinc-200/60 bg-[#FAFAFA] pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Architectural Dot Grid with radial edge fade */}
      <div
        className="dot-grid absolute inset-0 opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Editorial Headline & Pitch */}
          <div className="lg:col-span-7">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-3.5 py-1.5 text-xs font-mono text-zinc-700 shadow-2xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Available for Data Science & ML Roles</span>
            </motion.div>

            {/* Headline with commanding display scale and contrast */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.08, ease: "easeOut" }}
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.04em] leading-[1.03] text-zinc-950"
            >
              Saif Alam
              <span className="block mt-2 font-normal text-zinc-500">
                Applied Machine Learning
              </span>
            </motion.h1>

            {/* Human, punchy, concise bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.44, delay: 0.16, ease: "easeOut" }}
              className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-zinc-600"
            >
              Designing clean data pipelines, training Scikit-learn regressors,
              and deploying low-latency inference tools to production.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.44, delay: 0.24, ease: "easeOut" }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white shadow-xs transition hover:bg-blue-700 active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-2xs transition hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.98]"
              >
                <span>Contact Me</span>
              </a>

              <div className="hidden sm:flex items-center gap-1.5 ml-2 font-mono text-xs text-zinc-400">
                <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                <span>Bhopal, MP, India</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive SaaS-Style "Live ML Pipeline" Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.2, ease: "easeOut" }}
              className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-xs transition hover:border-zinc-300"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                    <Activity className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-tight text-zinc-900">
                    pipeline_orchestrator.py
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={triggerSimulation}
                    title="Simulate pipeline inference"
                    className="flex items-center gap-1 rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900"
                  >
                    <RefreshCw
                      className={`h-2.5 w-2.5 ${isSimulating ? "animate-spin text-blue-600" : ""}`}
                    />
                    <span>Run</span>
                  </button>
                  <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Pipeline Flow Steps */}
              <div className="relative mt-4 space-y-3">
                {pipelineSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isHovered = activeStep === step.id;

                  return (
                    <div
                      key={step.id}
                      onMouseEnter={() => setActiveStep(step.id)}
                      onMouseLeave={() => setActiveStep(null)}
                      className={`group relative rounded-lg border p-3 transition-all ${
                        isHovered
                          ? "border-blue-500/50 bg-blue-50/20"
                          : "border-zinc-200/80 bg-zinc-50/40 hover:border-zinc-300 hover:bg-zinc-50/80"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition ${
                              isHovered
                                ? "bg-blue-600 text-white"
                                : "bg-white border border-zinc-200 text-zinc-700 shadow-2xs"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[10px] font-semibold uppercase text-blue-600">
                                0{step.id}
                              </span>
                              <h4 className="text-xs font-semibold text-zinc-900">
                                {step.title}
                              </h4>
                            </div>
                            <p className="mt-0.5 text-[11px] text-zinc-500">
                              {step.subtitle}
                            </p>
                          </div>
                        </div>

                        <span className="shrink-0 rounded border border-zinc-200/60 bg-white px-1.5 py-0.5 font-mono text-[10px] text-zinc-600">
                          {step.tag}
                        </span>
                      </div>

                      {/* Detail Callout on Hover */}
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-2 border-t border-blue-100 pt-2 text-[11px] text-zinc-600"
                        >
                          {step.detail}
                        </motion.div>
                      )}

                      {/* Animated Connector Pulse to next step */}
                      {idx < pipelineSteps.length - 1 && (
                        <div className="absolute -bottom-3 left-7 h-3 w-[2px] bg-zinc-200 overflow-hidden">
                          <motion.div
                            animate={{
                              y: [-12, 12],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 1.5,
                              ease: "linear",
                              delay: idx * 0.4,
                            }}
                            className="h-2 w-full bg-blue-600"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Monospace Status Bar */}
              <div className="mt-5 -mx-5 -mb-5 flex items-center justify-between border-t border-zinc-100 bg-zinc-50/80 px-5 py-3 rounded-b-xl text-[11px] font-mono text-zinc-600">
                <div className="flex items-center gap-1.5">
                  <Terminal className="h-3 w-3 text-zinc-400" />
                  <span>Core: Python · SQL · AWS · Bhopal, IN</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
