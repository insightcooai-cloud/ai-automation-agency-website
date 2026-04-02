"use client";

import { motion } from "framer-motion";

function BlueprintIllustration() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-h-[460px]"
      aria-hidden="true"
    >
      {/* Subtle dot grid */}
      {Array.from({ length: 7 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={48 + col * 64}
            cy={48 + row * 64}
            r={1.5}
            fill="var(--color-border-default)"
            opacity={0.7}
          />
        ))
      )}

      {/* Connection lines — center to outer */}
      <line x1="240" y1="240" x2="96" y2="112" stroke="var(--color-border-default)" strokeWidth="1" strokeLinecap="round" />
      <line x1="240" y1="240" x2="384" y2="96" stroke="var(--color-border-default)" strokeWidth="1" strokeLinecap="round" />
      <line x1="240" y1="240" x2="416" y2="280" stroke="var(--color-border-default)" strokeWidth="1" strokeLinecap="round" />
      <line x1="240" y1="240" x2="320" y2="400" stroke="var(--color-border-default)" strokeWidth="1" strokeLinecap="round" />
      <line x1="240" y1="240" x2="96" y2="384" stroke="var(--color-border-default)" strokeWidth="1" strokeLinecap="round" />
      <line x1="240" y1="240" x2="48" y2="224" stroke="var(--color-border-default)" strokeWidth="1" strokeLinecap="round" />
      <line x1="240" y1="240" x2="272" y2="64" stroke="var(--color-border-default)" strokeWidth="1" strokeLinecap="round" />

      {/* Secondary connections (dashed) */}
      <line x1="96" y1="112" x2="384" y2="96" stroke="var(--color-border-soft)" strokeWidth="0.75" strokeDasharray="4 5" strokeLinecap="round" />
      <line x1="384" y1="96" x2="416" y2="280" stroke="var(--color-border-soft)" strokeWidth="0.75" strokeDasharray="4 5" strokeLinecap="round" />
      <line x1="416" y1="280" x2="320" y2="400" stroke="var(--color-border-soft)" strokeWidth="0.75" strokeDasharray="4 5" strokeLinecap="round" />
      <line x1="320" y1="400" x2="96" y2="384" stroke="var(--color-border-soft)" strokeWidth="0.75" strokeDasharray="4 5" strokeLinecap="round" />

      {/* Center node */}
      <circle cx="240" cy="240" r="36" fill="var(--color-bg-surface)" stroke="var(--color-border-default)" strokeWidth="1.5" />
      <circle cx="240" cy="240" r="8" fill="var(--color-accent)" />

      {/* Outer nodes */}
      <circle cx="96" cy="112" r="18" fill="var(--color-bg-canvas)" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.8" />
      <circle cx="96" cy="112" r="5" fill="var(--color-accent)" />

      <circle cx="384" cy="96" r="14" fill="var(--color-bg-canvas)" stroke="var(--color-border-default)" strokeWidth="1" />
      <circle cx="384" cy="96" r="4" fill="var(--color-text-tertiary)" />

      <circle cx="416" cy="280" r="20" fill="var(--color-bg-canvas)" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.6" />
      <circle cx="416" cy="280" r="6" fill="var(--color-accent)" opacity="0.8" />

      <circle cx="320" cy="400" r="16" fill="var(--color-bg-canvas)" stroke="var(--color-border-default)" strokeWidth="1" />
      <circle cx="320" cy="400" r="4" fill="var(--color-text-tertiary)" />

      <circle cx="96" cy="384" r="12" fill="var(--color-bg-canvas)" stroke="var(--color-border-default)" strokeWidth="1" />
      <circle cx="96" cy="384" r="3" fill="var(--color-text-tertiary)" opacity="0.6" />

      <circle cx="48" cy="224" r="8" fill="var(--color-bg-canvas)" stroke="var(--color-border-soft)" strokeWidth="1" />
      <circle cx="48" cy="224" r="2.5" fill="var(--color-text-tertiary)" opacity="0.5" />

      <circle cx="272" cy="64" r="10" fill="var(--color-bg-canvas)" stroke="var(--color-border-default)" strokeWidth="1" />
      <circle cx="272" cy="64" r="3" fill="var(--color-text-tertiary)" opacity="0.5" />

      {/* Small accent detail lines */}
      <line x1="144" y1="160" x2="176" y2="176" stroke="var(--color-accent)" strokeWidth="0.75" opacity="0.4" strokeLinecap="round" />
      <line x1="352" y1="176" x2="336" y2="208" stroke="var(--color-accent)" strokeWidth="0.75" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[color:var(--color-bg-canvas)]">
      {/* Slow-spin background ring */}
      <div
        className="absolute top-1/2 right-[-10%] -translate-y-1/2 pointer-events-none select-none w-[600px] h-[600px] rounded-full opacity-[0.04]"
        aria-hidden="true"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, var(--color-bg-inverse) 60deg, transparent 120deg, var(--color-text-tertiary) 240deg, transparent 300deg)",
          animation: "slow-spin 24s linear infinite",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-bg-subtle)] border border-[color:var(--color-border-default)] mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent)] animate-pulse" />
              <span className="text-[13px] text-[color:var(--color-text-secondary)]">
                AI Transformation Partner for SMBs
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.08] tracking-tight text-[color:var(--color-text-primary)] mb-7"
            >
              Your team has AI tools.{" "}
              <span className="text-[color:var(--color-text-tertiary)]">
                They&apos;re not getting value from them.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[color:var(--color-text-secondary)] leading-relaxed mb-12 max-w-lg"
            >
              Blueprint Labs is your AI strategy and implementation partner. We
              assess where you stand, design what fits, build what works, and
              make adoption stick — from assessment to rollout.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[color:var(--color-bg-inverse)] text-[color:var(--color-text-inverse)] text-sm font-medium hover:bg-[color:var(--color-accent)] transition-colors duration-300 cursor-pointer min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] focus-visible:ring-offset-2"
              >
                Start with a free audit
              </a>
              <a
                href="#blueprint-method"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-[color:var(--color-border-soft)] bg-[color:var(--color-bg-canvas)]/70 backdrop-blur-sm text-sm text-[color:var(--color-text-secondary)] font-medium hover:bg-[color:var(--color-bg-subtle)] hover:text-[color:var(--color-text-primary)] transition-all duration-200 cursor-pointer min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] focus-visible:ring-offset-2"
              >
                See how we work
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 pt-8 border-t border-[color:var(--color-border-default)] flex items-start gap-10 flex-wrap"
            >
              {[
                { n: "10+", label: "Years in operations & data" },
                { n: "4-step", label: "Proven implementation process" },
                { n: "Free", label: "Initial AI readiness audit" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div className="font-serif text-2xl text-[color:var(--color-text-primary)] mb-0.5">
                    {n}
                  </div>
                  <div className="text-[13px] text-[color:var(--color-text-tertiary)] leading-snug">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Blueprint illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            <BlueprintIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
