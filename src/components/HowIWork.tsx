"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    n: "01",
    title: "Diagnose",
    sub: "AI Readiness Assessment",
    desc: "Map where you are. Identify the gaps worth closing. Understand your data, workflows, and team before recommending anything.",
  },
  {
    n: "02",
    title: "Design",
    sub: "Solution Architecture",
    desc: "Build the plan. Right tools, right sequence, right scope \u2014 calibrated to your maturity level, not a generic template.",
  },
  {
    n: "03",
    title: "Deploy",
    sub: "Build & Activate",
    desc: "Hands-on implementation. Automations, agents, dashboards \u2014 built and configured with your team, not just handed off.",
  },
  {
    n: "04",
    title: "Enable",
    sub: "Team Adoption",
    desc: "Make it stick. Training, documentation, and ongoing support so your team understands what was built and actually uses it.",
  },
];

function AnimatedWorkflowDiagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const nodes = [
    { x: 100, y: 80, label: "Diagnose", sub: "Audit" },
    { x: 300, y: 80, label: "Design", sub: "Roadmap" },
    { x: 500, y: 80, label: "Deploy", sub: "Build" },
    { x: 700, y: 80, label: "Enable", sub: "Adopt" },
  ];

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 800 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full min-w-[560px]"
        aria-label="4-phase process: Diagnose, Design, Deploy, Enable"
        role="img"
      >
        {/* Background track */}
        <line
          x1="100"
          y1="80"
          x2="700"
          y2="80"
          stroke="#E4E4E7"
          strokeWidth="2"
        />

        {/* Animated progress fill */}
        <motion.line
          x1="100"
          y1="80"
          x2="700"
          y2="80"
          stroke="#18181B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.2"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          style={{ transformOrigin: "100px 80px" }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        />

        {/* Connector dashes */}
        {nodes.slice(0, -1).map((node, i) => (
          <motion.line
            key={`dash-${i}`}
            x1={node.x + 34}
            y1={80}
            x2={nodes[i + 1].x - 34}
            y2={80}
            stroke="#E4E4E7"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            strokeLinecap="round"
            initial={{ opacity: 0, stroke: "#E4E4E7" }}
            animate={
              inView ? { opacity: 1, stroke: "#18181B" } : {}
            }
            transition={{ duration: 0.6, delay: 0.8 + i * 0.25 }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            {/* Halo ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={32}
              fill="none"
              stroke="#E4E4E7"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              style={{
                transformOrigin: `${node.x}px ${node.y}px`,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.18,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            />
            {/* Inner circle */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={20}
              fill="white"
              stroke="#E4E4E7"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              style={{
                transformOrigin: `${node.x}px ${node.y}px`,
              }}
              transition={{
                duration: 0.4,
                delay: 0.25 + i * 0.18,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            />
            {/* Center dot */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={4}
              fill="#18181B"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              style={{
                transformOrigin: `${node.x}px ${node.y}px`,
              }}
              transition={{
                duration: 0.3,
                delay: 0.35 + i * 0.18,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            />
            {/* Label below */}
            <motion.text
              x={node.x}
              y={node.y + 48}
              textAnchor="middle"
              fill="#18181B"
              fontSize="13"
              fontWeight="600"
              fontFamily="var(--font-inter), system-ui, sans-serif"
              initial={{ opacity: 0, y: 4 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.18 }}
            >
              {node.label}
            </motion.text>
            {/* Sublabel */}
            <motion.text
              x={node.x}
              y={node.y + 63}
              textAnchor="middle"
              fill="#A1A1AA"
              fontSize="10"
              fontFamily="var(--font-inter), system-ui, sans-serif"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.18 }}
            >
              {node.sub}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function PhaseCard({
  phase,
  index,
}: {
  phase: (typeof phases)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-6 rounded-2xl border border-[#E4E4E7] bg-white hover:shadow-sm transition-all duration-200"
    >
      <div className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium mb-4 bg-[#F4F4F5] text-[#71717A]">
        {phase.sub}
      </div>
      <h3 className="font-bold text-lg text-[#18181B] mb-2.5">{phase.title}</h3>
      <p className="text-sm text-[#71717A] leading-relaxed">{phase.desc}</p>
    </motion.div>
  );
}

export default function HowIWork() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="how-i-work" className="py-32 md:py-40 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.15em] uppercase text-[#A1A1AA] mb-6"
          >
            Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-bold text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] tracking-tight text-[#18181B] max-w-xl mb-5"
            style={{ textWrap: "balance" }}
          >
            Diagnosis before prescription.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-lg text-[#71717A] max-w-lg leading-relaxed mb-16"
          >
            Every engagement starts with understanding — not selling. I
            won&apos;t recommend a solution until I understand your problem.
          </motion.p>
        </div>

        {/* Animated diagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16 px-8 md:px-16 py-12 rounded-2xl bg-[#F4F4F5] border border-[#E4E4E7]"
        >
          <AnimatedWorkflowDiagram />
        </motion.div>

        {/* Phase detail cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p, i) => (
            <PhaseCard key={p.n} phase={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
