"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const scenarios = [
  {
    n: "01",
    industry: "Distribution / Operations",
    before:
      "A mid-size import business processing 200+ orders per week — manually re-entered across three systems by two people. 14 hours/week, every week.",
    after:
      "Automated sync between their ordering portal, inventory system, and accounting software using n8n. The team went from 14 hours to under 2 hours. They reinvested the rest into supplier negotiations.",
    metric: "86%",
    metricLabel: "reduction in manual data entry time",
  },
  {
    n: "02",
    industry: "Service Business / Customer Ops",
    before:
      "A service business fielding 60+ repetitive customer emails daily — quote requests, appointment confirmations, FAQ responses. Owner spending 3 hours a day just on inbox.",
    after:
      "AI triage + draft responses auto-generated for the most common request types. Owner reviews and sends in 20 minutes. Genuinely new customers get faster replies than before.",
    metric: "~90%",
    metricLabel: "reduction in email response time",
  },
  {
    n: "03",
    industry: "Sales Team / Reporting",
    before:
      "A sales team spending every Monday morning rebuilding the same performance dashboard in Excel. Meeting delayed until noon. Half the team showing up unprepared.",
    after:
      "Live dashboard auto-updates from CRM. Weekly summary email writes itself and lands in inboxes Friday at 4pm. Monday morning starts with decisions, not spreadsheets.",
    metric: "4+ hrs",
    metricLabel: "reclaimed per person, every week",
  },
];

function ScenarioItem({
  scenario,
  index,
}: {
  scenario: (typeof scenarios)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-14 md:py-16"
      style={{ borderTop: "1px solid var(--sand-300)" }}
    >
      {/* Number + industry */}
      <div className="md:col-span-3">
        <div
          className="font-sans font-medium text-[11px] tracking-[0.1em] uppercase mb-3"
          style={{ color: "var(--ink-400)" }}
        >
          {scenario.n}
        </div>
        <div
          className="font-sans font-medium text-[13px]"
          style={{ color: "var(--ink-700)" }}
        >
          {scenario.industry}
        </div>
      </div>

      {/* Before / After */}
      <div className="md:col-span-6 flex flex-col gap-6">
        <div>
          <div
            className="font-sans font-medium text-[10px] tracking-[0.12em] uppercase mb-2"
            style={{ color: "var(--ink-400)" }}
          >
            Before
          </div>
          <p
            className="font-sans font-light text-[15px] leading-[1.7]"
            style={{ color: "var(--ink-700)" }}
          >
            {scenario.before}
          </p>
        </div>
        <div>
          <div
            className="font-sans font-medium text-[10px] tracking-[0.12em] uppercase mb-2"
            style={{ color: "var(--amber-400)" }}
          >
            After
          </div>
          <p
            className="font-sans font-light text-[15px] leading-[1.7]"
            style={{ color: "var(--ink-900)" }}
          >
            {scenario.after}
          </p>
        </div>
      </div>

      {/* Metric */}
      <div className="md:col-span-3 flex flex-col justify-center">
        <div
          className="font-serif leading-none mb-2"
          style={{
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.02em",
            color: "var(--amber-400)",
          }}
        >
          {scenario.metric}
        </div>
        <div
          className="font-sans font-light text-[13px] leading-snug"
          style={{ color: "var(--ink-400)" }}
        >
          {scenario.metricLabel}
        </div>
      </div>
    </motion.div>
  );
}

export default function Results() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="results" className="py-32 md:py-44 px-6 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span
              className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase"
              style={{ color: "var(--ink-400)" }}
            >
              What This Looks Like
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif max-w-3xl mb-4"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
              color: "var(--ink-900)",
            }}
          >
            In practice, this is what changes.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="font-sans font-light text-[15px] max-w-xl leading-[1.8] mb-20"
            style={{ color: "var(--ink-700)" }}
          >
            Illustrative scenarios based on the kinds of work we do. Real clients
            get results that are specific to their operations.
          </motion.p>
        </div>

        <div>
          {scenarios.map((s, i) => (
            <ScenarioItem key={s.n} scenario={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
