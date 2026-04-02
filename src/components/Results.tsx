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

/* ── Hover-reveal diagrams ── */

const Diagram1 = () => (
  <svg
    width="160"
    height="96"
    viewBox="0 0 160 96"
    fill="none"
    role="img"
    aria-label="Before and after bar chart: 14 hours per week reduced to 2 hours per week, an 86% reduction"
  >
    {/* Before row */}
    <text x="0" y="10" fontSize="7" fill="var(--ink-400)" fontFamily="DM Sans, system-ui" letterSpacing="0.08em">BEFORE</text>
    <rect x="0" y="14" width="148" height="12" rx="2" fill="var(--sand-300)" />
    <text x="0" y="38" fontSize="7.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">14 hrs / week</text>

    {/* Arrow */}
    <line x1="74" y1="43" x2="74" y2="52" stroke="var(--amber-400)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M70,49 L74,53 L78,49" fill="none" stroke="var(--amber-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* After row */}
    <text x="0" y="64" fontSize="7" fill="var(--ink-400)" fontFamily="DM Sans, system-ui" letterSpacing="0.08em">AFTER</text>
    <rect x="0" y="68" width="148" height="12" rx="2" fill="var(--sand-200)" />
    <rect x="0" y="68" width="21" height="12" rx="2" fill="var(--sage-500)" />
    <text x="24" y="78" fontSize="7.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">2 hrs / week</text>

    {/* Label */}
    <text x="0" y="96" fontSize="13" fill="var(--amber-400)" fontFamily="Playfair Display, Georgia, serif" fontStyle="italic">86% reduction</text>
  </svg>
);

const Diagram2 = () => (
  <svg
    width="160"
    height="96"
    viewBox="0 0 160 96"
    fill="none"
    role="img"
    aria-label="Inbox visualization: before shows 6 emails taking 3 hours daily, after shows 1 email and checkmarks in 20 minutes"
  >
    {/* Before inbox */}
    <text x="0" y="10" fontSize="7" fill="var(--ink-400)" fontFamily="DM Sans, system-ui" letterSpacing="0.08em">BEFORE</text>
    <rect x="0" y="14" width="88" height="36" rx="2" stroke="var(--sand-300)" strokeWidth="1" />
    {[20, 25, 30, 35, 40, 45].map((y, i) => (
      <rect key={i} x="5" y={y} width="78" height="2.5" rx="1" fill="var(--sand-300)" />
    ))}
    <text x="94" y="28" fontSize="7.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">3 hrs</text>
    <text x="94" y="38" fontSize="7.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">daily</text>

    {/* Arrow */}
    <line x1="44" y1="52" x2="44" y2="60" stroke="var(--amber-400)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M40,57 L44,61 L48,57" fill="none" stroke="var(--amber-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* After inbox */}
    <text x="0" y="72" fontSize="7" fill="var(--ink-400)" fontFamily="DM Sans, system-ui" letterSpacing="0.08em">AFTER</text>
    <rect x="0" y="76" width="88" height="14" rx="2" stroke="var(--sage-500)" strokeWidth="1" strokeOpacity="0.5" />
    <rect x="5" y="80" width="30" height="2.5" rx="1" fill="var(--sage-500)" fillOpacity="0.6" />
    <path d="M44,80 L47,83 L53,77" stroke="var(--sage-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="94" y="86" fontSize="7.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">20 min</text>

    {/* Label */}
    <text x="0" y="96" fontSize="13" fill="var(--amber-400)" fontFamily="Playfair Display, Georgia, serif" fontStyle="italic">~90% reduction</text>
  </svg>
);

const Diagram3 = () => (
  <svg
    width="160"
    height="96"
    viewBox="0 0 160 96"
    fill="none"
    role="img"
    aria-label="Timeline comparison: before shows 4-hour spreadsheet rebuild on Monday morning, after shows auto-delivered report on Friday at 4pm"
  >
    {/* Before timeline */}
    <text x="0" y="10" fontSize="7" fill="var(--ink-400)" fontFamily="DM Sans, system-ui" letterSpacing="0.08em">BEFORE · MON AM</text>
    <rect x="0" y="14" width="148" height="10" rx="2" fill="var(--sand-200)" />
    <rect x="0" y="14" width="55" height="10" rx="2" fill="var(--sand-300)" />
    <text x="2" y="23" fontSize="6.5" fill="var(--ink-700)" fontFamily="DM Sans, system-ui">Spreadsheet rebuild</text>

    {/* Arrow */}
    <line x1="74" y1="26" x2="74" y2="36" stroke="var(--amber-400)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M70,33 L74,37 L78,33" fill="none" stroke="var(--amber-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* After timeline */}
    <text x="0" y="48" fontSize="7" fill="var(--ink-400)" fontFamily="DM Sans, system-ui" letterSpacing="0.08em">AFTER · MON AM</text>
    <rect x="0" y="52" width="148" height="10" rx="2" fill="var(--sand-200)" />
    <path d="M8,57 L11,60 L18,53" stroke="var(--sage-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="24" y="60" fontSize="6.5" fill="var(--sage-500)" fontFamily="DM Sans, system-ui">Auto-delivered Fri 4pm</text>

    {/* Label */}
    <text x="0" y="96" fontSize="13" fill="var(--amber-400)" fontFamily="Playfair Display, Georgia, serif" fontStyle="italic">4+ hrs reclaimed</text>
  </svg>
);

const diagrams = [Diagram1, Diagram2, Diagram3];

function ScenarioItem({
  scenario,
  index,
}: {
  scenario: (typeof scenarios)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const Diagram = diagrams[index];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-14 md:py-16 group"
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

      {/* Metric + hover diagram */}
      <div className="md:col-span-3 flex flex-col justify-center relative" style={{ minHeight: 100 }}>
        {/* Default metric */}
        <div className="metric-default absolute inset-0 flex flex-col justify-center">
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

        {/* Hover diagram */}
        <div className="metric-diagram absolute inset-0 flex items-center">
          <Diagram />
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

        {/* Research benchmark strip */}
        <div
          style={{
            background: "var(--sand-100)",
            borderTop: "1px solid var(--sand-300)",
            padding: "20px 0",
            marginTop: 32,
          }}
        >
          <div className="flex items-start justify-around text-center gap-6 flex-wrap">
            <div>
              <div
                className="font-serif leading-none mb-2"
                style={{ fontSize: "clamp(28px, 3vw, 36px)", color: "var(--amber-400)" }}
              >
                66%
              </div>
              <div
                className="font-sans font-light text-[12px] leading-snug"
                style={{ color: "var(--ink-700)" }}
              >
                of AI-using SMBs<br />save $500–$2K/mo
              </div>
            </div>
            <div>
              <div
                className="font-serif leading-none mb-2"
                style={{ fontSize: "clamp(28px, 3vw, 36px)", color: "var(--amber-400)" }}
              >
                20+ hrs
              </div>
              <div
                className="font-sans font-light text-[12px] leading-snug"
                style={{ color: "var(--ink-700)" }}
              >
                saved per month<br />by 58% of SMBs
              </div>
            </div>
            <div>
              <div
                className="font-serif leading-none mb-2"
                style={{ fontSize: "clamp(28px, 3vw, 36px)", color: "var(--amber-400)" }}
              >
                2–6 months
              </div>
              <div
                className="font-sans font-light text-[12px] leading-snug"
                style={{ color: "var(--ink-700)" }}
              >
                typical payback<br />for focused automations
              </div>
            </div>
          </div>
          <p
            className="text-center font-sans font-light text-[10px] mt-5"
            style={{ color: "var(--ink-400)" }}
          >
            Industry benchmarks: Thryv AI &amp; Small Business Survey (500+ US SMBs, 2024–2025)
          </p>
        </div>
      </div>
    </section>
  );
}
