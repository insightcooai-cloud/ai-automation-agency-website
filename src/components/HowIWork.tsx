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

/* SVG vertical line with dash-draw animation */
function TimelineLine({ drawn }: { drawn: boolean }) {
  return (
    <svg
      className="absolute left-[5px] top-[12px]"
      width="2"
      height="calc(100% - 12px)"
      style={{ height: "calc(100% - 12px)" }}
      aria-hidden="true"
    >
      <line
        x1="1" y1="0" x2="1" y2="100%"
        stroke="var(--ink-200)"
        strokeWidth="2"
        strokeDasharray="400"
        strokeDashoffset={drawn ? 0 : 400}
        style={{ transition: "stroke-dashoffset 1.5s ease" }}
      />
    </svg>
  );
}

function PhaseItem({
  phase,
  index,
  lineDrawn,
}: {
  phase: (typeof phases)[0];
  index: number;
  lineDrawn: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-8 pb-14 last:pb-0"
    >
      {/* Node */}
      <div className="relative flex-shrink-0 mt-0.5" style={{ width: 12 }}>
        <div
          className="w-3 h-3 rounded-full border-2 transition-colors duration-500"
          style={{
            background: inView && lineDrawn ? "var(--amber-400)" : "var(--sand-50)",
            borderColor: inView && lineDrawn ? "var(--amber-400)" : "var(--ink-700)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 -mt-1">
        <div className="flex items-center gap-4 mb-4">
          <span
            className="font-sans font-medium text-[10px] tracking-[0.1em] uppercase"
            style={{ color: "var(--amber-400)" }}
          >
            {phase.timeline}
          </span>
        </div>
        <h3
          className="font-sans font-600 mb-4"
          style={{
            fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
            color: "var(--ink-900)",
          }}
        >
          {phase.title}
        </h3>
        <ul className="space-y-2">
          {phase.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span
                className="w-1 h-1 rounded-full mt-[10px] flex-shrink-0"
                style={{ background: "var(--ink-400)" }}
              />
              <span
                className="font-sans font-light text-[14px] leading-[1.7]"
                style={{ color: "var(--ink-700)" }}
              >
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
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" });

  return (
    <section id="blueprint-method" className="py-32 md:py-44 px-6 relative z-10 overflow-hidden">
      {/* Section watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          pointerEvents: "none",
          userSelect: "none",
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          fontSize: "clamp(120px, 18vw, 220px)",
          fontWeight: 400,
          lineHeight: 1,
          color: "var(--ink-900)",
          opacity: 0.025,
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
          top: "-20px",
          right: "-1%",
          zIndex: 0,
        }}
      >
        Process
      </div>
      <div className="max-w-[1400px] mx-auto">
        <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span
              className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase px-3 py-1 rounded-full inline-block"
              style={{ color: "var(--amber-400)", background: "rgba(200,146,42,0.08)" }}
            >
              03 — How It Works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif max-w-3xl mb-20"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--ink-900)",
            }}
          >
            Diagnosis before prescription. Always.
          </motion.h2>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative max-w-[640px] pl-8"
        >
          <TimelineLine drawn={timelineInView} />
          {phases.map((phase, i) => (
            <PhaseItem key={phase.n} phase={phase} index={i} lineDrawn={timelineInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
