"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ── Inline SVG diagrams ── */
const RadarSVG = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" role="img" aria-label="Radar chart showing AI readiness across 5 dimensions" fill="none">
    {/* Axes */}
    {[0,72,144,216,288].map((deg, i) => {
      const r = (deg * Math.PI) / 180;
      const x2 = 60 + 48 * Math.sin(r);
      const y2 = 60 - 48 * Math.cos(r);
      return <line key={i} x1="60" y1="60" x2={x2.toFixed(1)} y2={y2.toFixed(1)} stroke="#B8B2A4" strokeWidth="1" />;
    })}
    {/* Filled polygon (~40% fill) */}
    <polygon
      points="60,36 78,52 72,72 48,72 42,52"
      fill="rgba(200,146,42,0.18)"
      stroke="#C8922A"
      strokeWidth="1.5"
    />
    {/* Labels */}
    {[
      { label: "Tools", x: 60, y: 12 },
      { label: "Data",  x: 108, y: 50 },
      { label: "Goals", x: 90, y: 102 },
      { label: "Team",  x: 28, y: 102 },
      { label: "Flows", x: 8, y: 50 },
    ].map((l) => (
      <text key={l.label} x={l.x} y={l.y} textAnchor="middle" fontSize="9" fill="#7A7568" fontFamily="DM Sans, system-ui" fontWeight="500">
        {l.label}
      </text>
    ))}
  </svg>
);

const SkillBarsSVG = () => (
  <svg width="120" height="72" viewBox="0 0 120 72" role="img" aria-label="Skill bar chart showing three training levels at 40, 65, and 85 percent">
    {[
      { y: 10, w: 48, label: "40%" },
      { y: 30, w: 78, label: "65%" },
      { y: 50, w: 102, label: "85%" },
    ].map((b, i) => (
      <g key={i}>
        <rect x="0" y={b.y} width="110" height="12" rx="1" fill="#EDE6D6" />
        <rect x="0" y={b.y} width={b.w} height="12" rx="1" fill="#6B7C6A" />
        <text x={b.w + 4} y={b.y + 9} fontSize="8" fill="#7A7568" fontFamily="DM Sans, system-ui">{b.label}</text>
      </g>
    ))}
  </svg>
);

const RoadmapSVG = () => (
  <svg width="150" height="44" viewBox="0 0 150 44" role="img" aria-label="Roadmap showing 4 phases connected by dashed line">
    <line x1="20" y1="22" x2="130" y2="22" stroke="#B8B2A4" strokeWidth="1.5" strokeDasharray="4 3" />
    <path d="M130 18l8 4-8 4" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    {[20, 56, 92, 128].map((cx, i) => (
      <circle key={i} cx={cx} cy="22" r="8" fill={i === 0 ? "#C8922A" : "#F7F2E8"} stroke={i === 0 ? "#C8922A" : "#B8B2A4"} strokeWidth="1.5" />
    ))}
    {[20, 56, 92, 128].map((cx, i) => (
      <text key={i} x={cx} y="26" textAnchor="middle" fontSize="8" fill={i === 0 ? "#FDFAF5" : "#7A7568"} fontFamily="DM Sans, system-ui" fontWeight="500">{i + 1}</text>
    ))}
  </svg>
);

const FlowchartSVG = () => (
  <svg width="100" height="120" viewBox="0 0 100 120" role="img" aria-label="AI flowchart showing Input, AI Agent, and Output stages">
    {[
      { y: 4,  label: "Input" },
      { y: 46, label: "AI Agent" },
      { y: 88, label: "Output" },
    ].map((b, i) => (
      <g key={i}>
        <rect x="8" y={b.y} width="84" height="28" rx="3" fill="none" stroke="#3D3A34" strokeWidth="1.2" />
        <text x="50" y={b.y + 17} textAnchor="middle" fontSize="9" fill="#1A1814" fontFamily="DM Sans, system-ui" fontWeight="500">{b.label}</text>
        {i < 2 && (
          <path d={`M50 ${b.y + 28}v6l-4-4m4 4l4-4`} fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </g>
    ))}
  </svg>
);

const SparklineSVG = () => (
  <svg width="120" height="60" viewBox="0 0 120 60" role="img" aria-label="Upward trend sparkline showing AI adoption growth">
    {/* Grid */}
    {[10, 30, 50].map((y) => (
      <line key={y} x1="10" y1={y} x2="110" y2={y} stroke="#EDE6D6" strokeWidth="0.5" />
    ))}
    {/* Line */}
    <polyline points="20,46 60,28 100,12" fill="none" stroke="#6B7C6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Dots */}
    {[[20,46],[60,28],[100,12]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="4" fill="#C8922A" stroke="white" strokeWidth="1.5" />
    ))}
  </svg>
);

const serviceSVGs = [RadarSVG, SkillBarsSVG, RoadmapSVG, FlowchartSVG, SparklineSVG];

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

        <div className="flex flex-col">
          {services.map((s, i) => (
            <ServiceItem key={s.n} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
