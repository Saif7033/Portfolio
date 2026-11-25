"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, MessageSquare, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate brief transition before showing confirmed state
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 450);
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      label: "github.com/saifalam",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      label: "linkedin.com/in/saifalam",
      icon: LinkedinIcon,
    },
    {
      name: "Direct Email",
      href: "mailto:saifalam@example.com",
      label: "saifalam@example.com",
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="border-b border-zinc-200/80 bg-[#FAFAFA] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Pitch & Direct Contact Channels */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-blue-600 mb-3 font-semibold">
              03 / CONTACT
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-zinc-950">
              Let&apos;s build intelligent systems together.
            </h2>
            <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-zinc-600">
              I am open to full-time roles, internship opportunities, and collaborative
              projects across Data Science, ML Engineering, and Applied AI.
            </p>

            {/* Direct Channels */}
            <div className="mt-8 space-y-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-3.5 shadow-2xs transition hover:border-zinc-300 hover:bg-zinc-50/80"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-50 border border-zinc-200/80 text-zinc-700 transition group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-zinc-900">
                          {link.name}
                        </div>
                        <div className="font-mono text-[11px] text-zinc-500">
                          {link.label}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-700" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 rounded-lg border border-zinc-200/60 bg-white/60 p-4 font-mono text-xs text-zinc-500">
              <span className="font-semibold text-zinc-700">Location:</span> Bhopal, MP, India (IST / UTC+5:30)
            </div>
          </motion.div>

          {/* Right Column: Crisp White Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="rounded-xl border border-zinc-200 bg-white p-7 shadow-xs sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-zinc-950">
                    Message received.
                  </h3>
                  <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-zinc-600">
                    Thank you for reaching out,{" "}
                    <span className="font-semibold text-zinc-900">{formData.name}</span>.
                    Saif will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 font-mono text-xs text-zinc-700 transition hover:bg-zinc-100"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-zinc-100 pb-3">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                    <h3 className="font-display text-lg font-bold tracking-[-0.01em] text-zinc-950">
                      Send an Inquiry
                    </h3>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs font-medium text-zinc-700"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Henderson"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs font-medium text-zinc-700"
                    >
                      Your Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs font-medium text-zinc-700"
                    >
                      Message or Project Brief
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Describe your team's project, role opening, or technical question..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white shadow-xs transition hover:bg-blue-700 active:scale-[0.99] disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                    <p className="mt-2 text-center font-mono text-[11px] text-zinc-400">
                      Phase 1 direct connection · Saif responds within 24 hours
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
