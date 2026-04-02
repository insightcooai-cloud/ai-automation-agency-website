"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PullQuote from "./PullQuote";

/* ── Workflow diagram SVGs ── */

// 01 ASSESS — horizontal pipeline
const AssessSVG = () => (
  <svg width="180" viewBox="0 0 180 58" fill="none" role="img" aria-label="AI Readiness Audit pipeline">
    {/* Trigger node */}
    <rect x="1" y="6" width="52" height="22" rx="6" fill="var(--sand-200)" stroke="var(--ink-700)" strokeWidth="1.2" />
    {/* AI/processing node */}
    <rect x="65" y="6" width="52" height="22" rx="6" fill="var(--amber-400)" fillOpacity="0.15" stroke="var(--amber-400)" strokeWidth="1.2" />
    {/* Output node */}
    <rect x="127" y="6" width="52" height="22" rx="6" fill="var(--sage-500)" fillOpacity="0.15" stroke="var(--sage-500)" strokeWidth="1.2" />

    {/* Arrow 1 */}
    <line x1="53" y1="17" x2="62" y2="17" stroke="var(--ink-400)" strokeWidth="1" />
    <path d="M58,14 L62,17 L58,20" fill="none" stroke="var(--ink-400)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    {/* Arrow 2 */}
    <line x1="117" y1="17" x2="126" y2="17" stroke="var(--ink-400)" strokeWidth="1" />
    <path d="M122,14 L126,17 L122,20" fill="none" stroke="var(--ink-400)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

    {/* Node labels */}
    <text x="27" y="20" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Current State</text>
    <text x="91" y="20" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Gap Analysis</text>
    <text x="153" y="16" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Readiness</text>
    <text x="153" y="26" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Score</text>

    {/* Sub-labels */}
    <text x="27" y="42" textAnchor="middle" fontSize="7.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">tools + workflows</text>
    <text x="91" y="42" textAnchor="middle" fontSize="7.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">vs. target state</text>
    <text x="153" y="42" textAnchor="middle" fontSize="7.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">with roadmap</text>
  </svg>
);

// 02 EDUCATE — branching diagram
const EducateSVG = () => (
  <svg width="180" viewBox="0 0 180 102" fill="none" role="img" aria-label="Team training branching into role-specific tracks">
    {/* Input node */}
    <rect x="65" y="2" width="50" height="22" rx="6" fill="var(--sand-200)" stroke="var(--ink-700)" strokeWidth="1.2" />
    <text x="90" y="16" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Your Workflows</text>

    {/* Vertical stem from input */}
    <line x1="90" y1="24" x2="90" y2="46" stroke="var(--ink-400)" strokeWidth="1" />

    {/* "Role-specific paths" label above branch */}
    <text x="90" y="41" textAnchor="middle" fontSize="7" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">Role-specific paths</text>

    {/* Horizontal branch */}
    <line x1="26" y1="46" x2="154" y2="46" stroke="var(--ink-400)" strokeWidth="1" />

    {/* Verticals to outputs with arrowheads */}
    <line x1="26" y1="46" x2="26" y2="70" stroke="var(--ink-400)" strokeWidth="1" />
    <path d="M23,66 L26,70 L29,66" fill="none" stroke="var(--ink-400)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

    <line x1="90" y1="46" x2="90" y2="70" stroke="var(--ink-400)" strokeWidth="1" />
    <path d="M87,66 L90,70 L93,66" fill="none" stroke="var(--ink-400)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

    <line x1="154" y1="46" x2="154" y2="70" stroke="var(--ink-400)" strokeWidth="1" />
    <path d="M151,66 L154,70 L157,66" fill="none" stroke="var(--ink-400)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

    {/* Output nodes */}
    <rect x="3" y="70" width="46" height="22" rx="6" fill="var(--sage-500)" fillOpacity="0.15" stroke="var(--sage-500)" strokeWidth="1.2" />
    <text x="26" y="84" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Leadership</text>

    <rect x="67" y="70" width="46" height="22" rx="6" fill="var(--sage-500)" fillOpacity="0.15" stroke="var(--sage-500)" strokeWidth="1.2" />
    <text x="90" y="84" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Managers</text>

    <rect x="131" y="70" width="46" height="22" rx="6" fill="var(--sage-500)" fillOpacity="0.15" stroke="var(--sage-500)" strokeWidth="1.2" />
    <text x="154" y="84" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Staff</text>
  </svg>
);

// 03 GUIDE — 2x2 priority matrix
const GuideSVG = () => (
  <svg width="180" viewBox="0 0 180 162" fill="none" role="img" aria-label="Use-case prioritization matrix: impact vs feasibility">
    {/* Quadrant fills */}
    <rect x="28" y="8" width="72" height="64" fill="var(--sand-200)" fillOpacity="0.55" />
    <rect x="100" y="8" width="72" height="64" fill="var(--amber-400)" fillOpacity="0.15" />
    <rect x="28" y="72" width="72" height="64" fill="var(--sand-200)" fillOpacity="0.25" />
    <rect x="100" y="72" width="72" height="64" fill="var(--sage-500)" fillOpacity="0.15" />

    {/* Outer border */}
    <rect x="28" y="8" width="144" height="128" stroke="var(--ink-700)" strokeWidth="0.8" />

    {/* Axis lines */}
    <line x1="28" y1="72" x2="174" y2="72" stroke="var(--ink-700)" strokeWidth="1" />
    <line x1="100" y1="6" x2="100" y2="136" stroke="var(--ink-700)" strokeWidth="1" />

    {/* Arrowheads */}
    <path d="M170,69 L174,72 L170,75" fill="none" stroke="var(--ink-700)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M97,10 L100,6 L103,10" fill="none" stroke="var(--ink-700)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

    {/* Quadrant labels */}
    <text x="136" y="38" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Start here</text>
    <text x="64" y="38" textAnchor="middle" fontSize="8" fill="var(--ink-400)" fontFamily="DM Sans, system-ui" fontWeight="500">Plan for later</text>
    <text x="136" y="106" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Quick wins</text>
    <text x="64" y="106" textAnchor="middle" fontSize="8" fill="var(--ink-400)" fontFamily="DM Sans, system-ui" fontWeight="500">Skip</text>

    {/* 3 dots in top-right */}
    <circle cx="118" cy="28" r="3" fill="var(--amber-400)" fillOpacity="0.85" />
    <circle cx="144" cy="44" r="3" fill="var(--amber-400)" fillOpacity="0.85" />
    <circle cx="128" cy="56" r="3" fill="var(--amber-400)" fillOpacity="0.85" />

    {/* Axis labels */}
    <text x="102" y="152" textAnchor="middle" fontSize="7.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">Feasibility →</text>
    <text x="10" y="72" textAnchor="middle" fontSize="7.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui" transform="rotate(-90, 10, 72)">↑ Impact</text>
  </svg>
);

// 04 BUILD — n8n-style workflow
const BuildSVG = () => (
  <svg width="180" viewBox="0 0 180 146" fill="none" role="img" aria-label="Order processing automation: trigger → AI classifier → auto-process or flag for review">
    {/* Row 1: Trigger */}
    <rect x="63" y="2" width="54" height="24" rx="6" fill="var(--sand-200)" stroke="var(--ink-700)" strokeWidth="1.2" />
    <text x="90" y="12" textAnchor="middle" fontSize="6.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui" fontWeight="500" letterSpacing="0.08em">TRIGGER</text>
    <text x="90" y="22" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">New Order</text>

    {/* Arrow: Trigger → AI */}
    <line x1="90" y1="26" x2="90" y2="40" stroke="var(--ink-400)" strokeWidth="1" />
    <path d="M87,36 L90,40 L93,36" fill="none" stroke="var(--ink-400)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

    {/* Row 2: AI Classifier (amber) */}
    <rect x="63" y="40" width="54" height="22" rx="6" fill="var(--amber-400)" fillOpacity="0.15" stroke="var(--amber-400)" strokeWidth="1.2" />
    <text x="90" y="54" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">AI Classifier</text>

    {/* Branch from AI to junction */}
    <line x1="90" y1="62" x2="90" y2="74" stroke="var(--ink-400)" strokeWidth="1" />
    <line x1="38" y1="74" x2="142" y2="74" stroke="var(--ink-400)" strokeWidth="1" />

    {/* Left branch down */}
    <line x1="38" y1="74" x2="38" y2="82" stroke="var(--ink-400)" strokeWidth="1" />
    <path d="M35,78 L38,82 L41,78" fill="none" stroke="var(--ink-400)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

    {/* Right branch down */}
    <line x1="142" y1="74" x2="142" y2="82" stroke="var(--ink-400)" strokeWidth="1" />
    <path d="M139,78 L142,82 L145,78" fill="none" stroke="var(--ink-400)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

    {/* Row 3: Auto-Process | Flag for Review */}
    <rect x="4" y="82" width="68" height="22" rx="6" fill="var(--sand-200)" stroke="var(--ink-700)" strokeWidth="1.2" />
    <text x="38" y="96" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Auto-Process</text>

    <rect x="108" y="82" width="68" height="22" rx="6" fill="var(--sand-200)" stroke="var(--ink-700)" strokeWidth="1.2" />
    <text x="142" y="92" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Flag for</text>
    <text x="142" y="102" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Review</text>

    {/* Arrows to row 4 */}
    <line x1="38" y1="104" x2="38" y2="118" stroke="var(--ink-400)" strokeWidth="1" />
    <path d="M35,114 L38,118 L41,114" fill="none" stroke="var(--ink-400)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

    <line x1="142" y1="104" x2="142" y2="118" stroke="var(--ink-400)" strokeWidth="1" />
    <path d="M139,114 L142,118 L145,114" fill="none" stroke="var(--ink-400)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

    {/* Row 4: ERP System | Slack Alert (output) */}
    <rect x="4" y="118" width="68" height="22" rx="6" fill="var(--sage-500)" fillOpacity="0.15" stroke="var(--sage-500)" strokeWidth="1.2" />
    <text x="38" y="132" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">ERP System</text>

    <rect x="108" y="118" width="68" height="22" rx="6" fill="var(--sage-500)" fillOpacity="0.15" stroke="var(--sage-500)" strokeWidth="1.2" />
    <text x="142" y="132" textAnchor="middle" fontSize="8" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">Slack Alert</text>
  </svg>
);

// 05 ENABLE — adoption curve line chart
const EnableSVG = () => (
  <svg width="180" viewBox="0 0 180 104" fill="none" role="img" aria-label="Team adoption curve: Blueprint Labs reaches 80% by week 24, industry average plateaus at 30%">
    {/* Axes */}
    <line x1="32" y1="10" x2="32" y2="80" stroke="var(--ink-700)" strokeWidth="0.8" />
    <line x1="32" y1="80" x2="172" y2="80" stroke="var(--ink-700)" strokeWidth="0.8" />

    {/* Grid lines */}
    <line x1="32" y1="59" x2="172" y2="59" stroke="var(--ink-400)" strokeWidth="0.4" strokeDasharray="2 3" />
    <line x1="32" y1="38" x2="172" y2="38" stroke="var(--ink-400)" strokeWidth="0.4" strokeDasharray="2 3" />

    {/* Y-axis tick labels */}
    <text x="28" y="62" textAnchor="end" fontSize="6.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">30%</text>
    <text x="28" y="41" textAnchor="end" fontSize="6.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">60%</text>

    {/* Industry average — dashed */}
    <polyline points="48,69 87,62 126,59 165,59" stroke="var(--ink-400)" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="round" />

    {/* Blueprint Labs line */}
    <polyline points="48,69 87,52 126,35 165,24" stroke="var(--sage-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Terminal dot — amber */}
    <circle cx="165" cy="24" r="3.5" fill="var(--amber-400)" />

    {/* X-axis labels */}
    <text x="48" y="90" textAnchor="middle" fontSize="6.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">Week 1</text>
    <text x="87" y="90" textAnchor="middle" fontSize="6.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">Week 4</text>
    <text x="126" y="90" textAnchor="middle" fontSize="6.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">Week 12</text>
    <text x="165" y="90" textAnchor="middle" fontSize="6.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">Week 24</text>

    {/* Y-axis label */}
    <text x="9" y="50" textAnchor="middle" fontSize="7" fill="var(--ink-400)" fontFamily="DM Sans, system-ui" transform="rotate(-90, 9, 50)">Adoption %</text>

    {/* Legend */}
    <line x1="34" y1="16" x2="50" y2="16" stroke="var(--sage-500)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="50" cy="16" r="2.5" fill="var(--amber-400)" />
    <text x="54" y="19" fontSize="6.5" fill="var(--ink-700)" fontFamily="DM Sans, system-ui" fontWeight="500">With Blueprint Labs</text>

    <line x1="34" y1="26" x2="50" y2="26" stroke="var(--ink-400)" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="round" />
    <text x="54" y="29" fontSize="6.5" fill="var(--ink-400)" fontFamily="DM Sans, system-ui">Without support</text>
  </svg>
);

const serviceSVGs = [AssessSVG, EducateSVG, GuideSVG, BuildSVG, EnableSVG];

const services = [
  {
    n: "01",
    title: "Assess",
    headline: "AI Readiness Audit",
    desc: "We evaluate your current tools, workflows, data readiness, and team capabilities. You get a clear-eyed view of where you stand — and where AI can realistically move the needle.",
    tags: ["Current State Analysis", "Data Readiness", "Capability Mapping"],
  },
  {
    n: "02",
    title: "Educate",
    headline: "Team Training & Workshops",
    desc: "Hands-on training tailored to your team's actual workflows — not generic prompt tutorials. From leadership buy-in sessions to department-specific enablement.",
    tags: ["Workshops", "Prompt Engineering", "Change Management"],
  },
  {
    n: "03",
    title: "Guide",
    headline: "Strategy & Roadmap",
    desc: "We prioritize use cases by impact and feasibility. You get a phased roadmap grounded in your real constraints — budget, data, and team readiness.",
    tags: ["Use Case Prioritization", "ROI Modeling", "Phased Roadmap"],
  },
  {
    n: "04",
    title: "Build",
    headline: "Custom Implementations",
    desc: "Agents, automations, dashboards, and integrations designed for your specific operations. No generic templates. Built on resilient tools like n8n and Make.",
    tags: ["AI Agents", "Workflow Automation", "Integrations"],
  },
  {
    n: "05",
    title: "Enable",
    headline: "Adoption & Ongoing Support",
    desc: "SOPs, documentation, team training, and monthly advisory retainers. We don't disappear after handoff — we ensure AI usage sticks on day 90 and beyond.",
    tags: ["SOPs", "Documentation", "Monthly Retainer"],
  },
];

function ServiceItem({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const SVG = serviceSVGs[index];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 group"
      style={{ borderLeft: "1px solid var(--ink-200)", paddingLeft: 0 }}
    >
      {/* Left border effect via inner padding */}
      <div className="md:col-span-1 pl-6">
        <span
          className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase"
          style={{ color: "var(--amber-400)" }}
        >
          {service.n}
        </span>
      </div>

      {/* Title + Headline */}
      <div className="md:col-span-4 pl-6 md:pl-0">
        <div
          className="font-sans font-medium text-[11px] tracking-[0.1em] uppercase mb-3"
          style={{ color: "var(--ink-400)" }}
        >
          {service.title}
        </div>
        <h3
          className="font-serif mb-0 transition-transform duration-300 group-hover:translate-x-1"
          style={{
            fontSize: "clamp(1.4rem, 2vw, 1.8rem)",
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
            color: "var(--ink-900)",
          }}
        >
          {service.headline}
        </h3>
      </div>

      {/* Description + Tags + SVG */}
      <div className="md:col-span-7 pl-6 md:pl-0 flex gap-8 items-start">
        <div className="flex-1">
          <p
            className="font-sans font-light text-[15px] leading-[1.7] mb-5"
            style={{ color: "var(--ink-700)" }}
          >
            {service.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans font-medium text-[10px] tracking-[0.06em] uppercase px-3 py-1.5"
                style={{
                  background: "var(--sand-200)",
                  borderRadius: "2px",
                  color: "var(--ink-700)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:block flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          <SVG />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="services" className="py-32 md:py-44 px-6 relative">
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
              02 — What We Do
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif max-w-4xl mb-16"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--ink-900)",
            }}
          >
            From assessment to adoption — everything your team needs to make AI work.
          </motion.h2>
        </div>

        {/* Callout 2 */}
        <div className="mb-16">
          <PullQuote
            quote="Generic one-size-fits-all AI training fails to deliver results because workforce needs and AI use cases are diverse and constantly evolving."
            attribution="— Gartner CIO Perspectives, December 2025"
          />
        </div>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <ServiceItem key={s.n} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
