"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[color:var(--color-bg-canvas)]">
      {/* Slow-spinning decorative ring */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 pointer-events-none">
        <div
          className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full opacity-[0.06]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, var(--color-bg-inverse) 60deg, transparent 120deg, var(--color-text-tertiary) 240deg, transparent 300deg)",
            animation: "slow-spin 20s linear infinite",
          }}
        />
      </div>

      {/* Secondary decorative ring */}
      <div className="absolute top-[30%] right-[15%] -translate-y-1/2 pointer-events-none">
        <div
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-[color:var(--color-border-soft)] opacity-30"
          style={{
            animation: "slow-spin 20s linear infinite reverse",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-bg-subtle)] border border-[color:var(--color-border-default)] mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[color:var(--color-accent)] animate-pulse" />
          <span className="text-sm text-[color:var(--color-text-secondary)]">
            AI Strategy &amp; Automation Consulting
          </span>
        </motion.div>

        {/* Headline — serif font */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.06] tracking-tight text-[color:var(--color-text-primary)] mb-7 max-w-3xl"
          style={{ textWrap: "balance" }}
        >
          Build your AI foundation the right way.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[color:var(--color-text-secondary)] max-w-xl leading-relaxed mb-12"
        >
          Most companies rush to adopt AI tools without a strategy. I help you
          diagnose where you stand, design what fits, and deploy what actually
          works — tailored to your business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="flex items-center gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[color:var(--color-bg-inverse)] text-[color:var(--color-text-inverse)] text-sm font-medium hover:bg-[color:var(--color-accent-hover)] transition-colors duration-200 cursor-pointer min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] focus-visible:ring-offset-2"
          >
            Start with a free audit
          </a>
          <a
            href="#how-i-work"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-[color:var(--color-border-default)] bg-[color:var(--color-bg-subtle)] text-sm text-[color:var(--color-text-secondary)] font-medium hover:border-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text-primary)] transition-all duration-200 cursor-pointer min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] focus-visible:ring-offset-2"
          >
            See how it works
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M8 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-[color:var(--color-border-default)] grid grid-cols-3 gap-8 max-w-sm"
        >
          {[
            { n: "10+", label: "Years in BI & Ops" },
            { n: "4", label: "Phase diagnostic process" },
            { n: "6", label: "Service areas" },
          ].map(({ n, label }) => (
            <div key={label}>
              <div className="font-serif text-2xl text-[color:var(--color-text-primary)] mb-1">{n}</div>
              <div className="text-xs text-[color:var(--color-text-tertiary)] leading-snug">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
