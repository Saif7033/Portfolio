"use client";

import { Briefcase, Calendar, CheckCircle2, Award, GraduationCap, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export function Experience() {
  const experiences = [
    {
      role: "Data Science & Machine Learning Intern",
      company: "Zalima Development Pvt. Ltd.",
      period: "3 Months · Applied Engineering",
      type: "Internship",
      description:
        "Focused on data preprocessing pipelines, exploratory analysis, and core machine learning model development for production-facing applications.",
      achievements: [
        "Preprocessed and cleaned heterogeneous tabular datasets, resolving severe feature skewness and engineering robust imputations.",
        "Built and evaluated predictive ML data pipelines using Python (Scikit-learn, Pandas, NumPy) with rigorous cross-validation.",
        "Collaborated cross-functionally with senior engineering teams to containerize ML logic and prepare model artifacts for deployment.",
        "Authored documentation on data pipeline reliability, performance metrics, and regression error distributions.",
      ],
      skills: ["Python", "Pandas", "Scikit-learn", "Data Pipelines", "SQL", "Git"],
    },
    {
      role: "Undergraduate Studies in Data Science & Applied ML",
      company: "University Academic Program",
      period: "Present · Bhopal, India",
      type: "Education",
      description:
        "Rigorous coursework in statistical learning, multivariate calculus, optimization, machine learning algorithms, and database systems.",
      achievements: [
        "Hands-on implementation of end-to-end predictive modeling projects from scratch.",
        "Extensive practical focus on cloud deployments (AWS), SQL optimization, and interactive frontends (Streamlit, Next.js).",
      ],
      skills: ["Machine Learning", "Statistics", "Linear Algebra", "AWS", "Streamlit", "PostgreSQL"],
    },
  ];

  return (
    <section id="experience" className="border-b border-zinc-200/80 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-blue-600 mb-3 font-semibold">
            02 / EXPERIENCE
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-zinc-950">
            Experience & Engineering Practice
          </h2>
          <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-zinc-600">
            Hands-on work turning exploratory machine learning prototypes into reliable,
            production-grade data pipelines.
          </p>
        </motion.div>

        {/* Timeline List */}
        <div className="mt-14 space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
              className="relative overflow-hidden rounded-xl border border-zinc-200 bg-[#FAFAFA] p-7 shadow-2xs transition hover:border-zinc-300 sm:p-8"
            >
              {/* Header row */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <span className="text-zinc-300">/</span>
                    <span className="text-sm font-semibold text-zinc-900">
                      {exp.company}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-zinc-950">
                    {exp.role}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-1.5 self-start rounded-md border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-600 shadow-2xs">
                  <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                {exp.description}
              </p>

              {/* Bullet Points */}
              <div className="mt-5 space-y-2.5">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm sm:text-[15px] leading-relaxed text-zinc-600">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Skills Footer */}
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-zinc-200/60 pt-4">
                <span className="font-mono text-xs font-medium text-zinc-400 mr-1">
                  Tools & Concepts:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-zinc-200 bg-white px-2.5 py-1 font-mono text-xs text-zinc-700 shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
