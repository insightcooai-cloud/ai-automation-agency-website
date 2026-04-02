"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const challenges = [
  "Manual data entry & reporting",
  "Customer communication & follow-up",
  "Inventory / order management",
  "Team training & AI adoption",
  "Something else",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", challenge: "" });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white/[0.04] rounded-lg text-base text-[color:var(--color-text-primary)] placeholder-[color:var(--color-text-tertiary)] outline-none focus:bg-white/[0.07] transition-all duration-200 min-h-[48px] border border-white/[0.06] focus:border-[color:var(--color-accent)]/40";

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative z-10">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Left — CTA statement */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--color-text-tertiary)] mb-10">
              Get in Touch
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-text-primary)] mb-6">
              Let&apos;s start with an honest conversation.
            </h2>
            <p className="text-[15px] text-[color:var(--color-text-secondary)] leading-relaxed">
              Tell us where you&apos;re stuck. We&apos;ll follow up within 24
              hours with honest feedback on whether we&apos;re a fit — no
              pressure, no sales pitch.
            </p>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full border border-[color:var(--color-border-default)] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-[color:var(--color-accent)]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-serif text-xl text-[color:var(--color-text-primary)] mb-2">
                  Message sent.
                </p>
                <p className="text-[15px] text-[color:var(--color-text-secondary)]">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-[13px] font-medium text-[color:var(--color-text-secondary)] mb-2">
                      Name <span className="text-[color:var(--color-text-tertiary)]">(required)</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[13px] font-medium text-[color:var(--color-text-secondary)] mb-2">
                      Email <span className="text-[color:var(--color-text-tertiary)]">(required)</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-challenge" className="block text-[13px] font-medium text-[color:var(--color-text-secondary)] mb-2">
                    Biggest operational challenge
                  </label>
                  <select
                    id="contact-challenge"
                    value={form.challenge}
                    onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                    className={`${inputClass} cursor-pointer appearance-none`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2352525A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                  >
                    <option value="" disabled>Select one…</option>
                    {challenges.map((c) => (
                      <option key={c} value={c} className="bg-[#111113] text-[#F0F0F2]">{c}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="self-start inline-flex items-center justify-center px-7 py-3.5 rounded-[90px] bg-white text-black text-[15px] font-medium hover:bg-white/90 transition-colors duration-300 cursor-pointer min-h-[48px] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
                >
                  {sending ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
