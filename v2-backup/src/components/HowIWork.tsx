"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    n: "01",
    title: "Assess",
    sub: "AI Readiness Audit",
    desc: "We map your current state — data quality, workflows, team capability, and tools in place. You get a clear picture of where you are on the AI maturity curve and exactly what to address first.",
    deliverables: ["Readiness scorecard", "Gap analysis", "Priority roadmap"],
  },
  {
    n: "02",
    title: "Design",
    sub: "Solution Architecture",
    desc: "We prioritize the workflows with the highest ROI, model the returns, select the right tools, and set governance guardrails — before a single line of code is written.",
    deliverables: ["Workflow prioritization", "ROI model", "Tool selection"],
  },
  {
    n: "03",
    title: "Build",
    sub: "Build & Implement",
    desc: "Hands-on implementation: automations, AI agents, knowledge systems, reporting, and integrations — built with your team, configured around your actual operations.",
    deliverables: ["Automations & agents", "Reporting & BI", "System integrations"],
  },
  {
    n: "04",
    title: "Enable",
    sub: "Adoption & Handover",
    desc: "We don't hand off a system and disappear. Training, documentation, and ongoing support until your team owns it — and uses it consistently.",
    deliverables: ["Team training", "SOPs & documentation", "Ongoing advisory"],
  },
];

function PhaseCard({ phase, index }: { phase: (typeof phases)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-7 rounded-xl border border-[color:var(--color-border-default)] bg-[color:var(--color-bg-canvas)] hover:border-[color:var(--color-accent)]/40 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="inline-flex px-2.5 py-1 rounded text-[13px] font-semibold bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)]">
          {phase.sub}
        </div>
        <span className="text-xs text-[color:var(--color-text-tertiary)] tabular-nums">{phase.n}</span>
      </div>
      <h3 className="font-serif text-2xl text-[color:var(--color-text-primary)] mb-3 leading-snug">
        {phase.title}
      </h3>
      <p className="text-sm text-[color:var(--color-text-secondary)] leading-relaxed mb-5">
        {phase.desc}
      </p>
      <ul className="flex flex-col gap-1.5">
        {phase.deliverables.map((d) => (
          <li key={d} className="flex items-center gap-2 text-[13px] text-[color:var(--color-text-tertiary)]">
            <span className="w-1 h-1 rounded-full bg-[color:var(--color-accent)]" aria-hidden="true" />
            {d}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function HowIWork() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="blueprint-method" className="py-32 md:py-40 px-6 bg-[color:var(--color-bg-subtle)]">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[color:var(--color-text-tertiary)] mb-6"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.12] tracking-tight text-[color:var(--color-text-primary)] max-w-xl mb-5"
          >
            Diagnosis before prescription.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-lg text-[color:var(--color-text-secondary)] max-w-lg leading-relaxed mb-16"
          >
            We won&apos;t recommend a tool until we understand your business. Every
            engagement starts with an honest assessment of where you are and
            what will actually move the needle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {phases.map((p, i) => (
            <PhaseCard key={p.n} phase={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
