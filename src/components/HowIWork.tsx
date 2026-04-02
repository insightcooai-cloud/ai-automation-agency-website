"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    n: "01",
    title: "Discovery",
    timeline: "1–2 weeks",
    points: [
      "Free AI readiness audit",
      "Stakeholder interviews & workflow observation",
      "Current state assessment & gap analysis",
    ],
  },
  {
    n: "02",
    title: "Strategy",
    timeline: "2–3 weeks",
    points: [
      "Use case prioritization by impact & feasibility",
      "Phased roadmap design",
      "ROI modeling & business case development",
    ],
  },
  {
    n: "03",
    title: "Build & Train",
    timeline: "4–8 weeks",
    points: [
      "Implementation sprints with your team",
      "Hands-on workshops & prompt engineering training",
      "Custom automations, agents, and integrations",
    ],
  },
  {
    n: "04",
    title: "Enable & Scale",
    timeline: "Ongoing",
    points: [
      "SOPs, documentation & change management",
      "Adoption monitoring & optimization",
      "Monthly advisory retainer for scaling guidance",
    ],
  },
];

function PhaseCard({
  phase,
  index,
}: {
  phase: (typeof phases)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative"
    >
      <div className="relative z-10">
        {/* Phase number + timeline */}
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[color:var(--color-text-primary)]/15 text-[12px] font-medium text-[color:var(--color-text-tertiary)]">
            {phase.n}
          </span>
          <span className="text-[12px] font-medium tracking-[0.06em] uppercase text-[color:var(--color-text-tertiary)]">
            {phase.timeline}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-[clamp(1.4rem,2vw,1.8rem)] leading-[1.12] tracking-[-0.02em] text-[color:var(--color-text-primary)] mb-5">
          {phase.title}
        </h3>

        {/* Bullet points */}
        <ul className="space-y-2.5">
          {phase.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[color:var(--color-text-tertiary)] mt-2 flex-shrink-0" />
              <span className="text-[14px] text-[color:var(--color-text-secondary)] leading-[1.6]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function HowIWork() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="blueprint-method"
      className="py-32 md:py-44 px-6 relative z-10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div ref={headerRef}>
          {/* Structural label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-[color:var(--color-text-tertiary)]">
              03 — How It Works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-[color:var(--color-text-primary)] max-w-4xl mb-24"
          >
            Diagnosis before prescription. Always.
          </motion.h2>
        </div>

        {/* 4-Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {phases.map((phase, i) => (
            <PhaseCard key={phase.n} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
