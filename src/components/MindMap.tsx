"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const centerNode = { x: 500, y: 290, label: "Blueprint Labs" };

const primaryNodes = [
  { id: "assess", x: 500, y: 120, label: "Assess", angle: "top" },
  { id: "design", x: 690, y: 290, label: "Design", angle: "right" },
  { id: "build", x: 500, y: 460, label: "Build", angle: "bottom" },
  { id: "enable", x: 310, y: 290, label: "Enable", angle: "left" },
];

const secondaryNodes = [
  // Assess
  { id: "s1", x: 360, y: 45, label: "AI Readiness Audit", primaryId: "assess", anchor: "end" },
  { id: "s2", x: 640, y: 45, label: "Opportunity Mapping", primaryId: "assess", anchor: "start" },
  // Design
  { id: "s3", x: 840, y: 195, label: "Workflow Design", primaryId: "design", anchor: "start" },
  { id: "s4", x: 840, y: 385, label: "Tool Selection & ROI", primaryId: "design", anchor: "start" },
  // Build
  { id: "s5", x: 360, y: 535, label: "Automations & Agents", primaryId: "build", anchor: "end" },
  { id: "s6", x: 640, y: 535, label: "Reporting & BI", primaryId: "build", anchor: "start" },
  // Enable
  { id: "s7", x: 160, y: 195, label: "Team Training", primaryId: "enable", anchor: "end" },
  { id: "s8", x: 160, y: 385, label: "Ongoing Advisory", primaryId: "enable", anchor: "end" },
];

function getPrimaryNode(id: string) {
  return primaryNodes.find((n) => n.id === id)!;
}

export default function MindMap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-32 md:py-40 px-6 bg-[color:var(--color-bg-subtle)]">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[color:var(--color-text-tertiary)] mb-6"
          >
            The Blueprint
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.12] tracking-tight text-[color:var(--color-text-primary)] max-w-2xl mb-5"
          >
            Everything we do, in one view.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-lg text-[color:var(--color-text-secondary)] max-w-lg leading-relaxed mb-16"
          >
            Four phases, one continuous process. Each stage builds on the last
            — from diagnosis all the way to lasting adoption.
          </motion.p>
        </div>

        {/* Mind map SVG */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full overflow-x-auto"
        >
          <svg
            viewBox="0 0 1000 580"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full min-w-[600px]"
            aria-label="Blueprint Labs four-phase process: Assess, Design, Build, Enable, with sub-deliverables"
            role="img"
          >
            {/* Center to primary lines */}
            {primaryNodes.map((node, i) => (
              <motion.line
                key={`line-center-${node.id}`}
                x1={centerNode.x}
                y1={centerNode.y}
                x2={node.x}
                y2={node.y}
                stroke="var(--color-border-default)"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              />
            ))}

            {/* Primary to secondary lines */}
            {secondaryNodes.map((sec, i) => {
              const primary = getPrimaryNode(sec.primaryId);
              return (
                <motion.line
                  key={`line-${sec.id}`}
                  x1={primary.x}
                  y1={primary.y}
                  x2={sec.x}
                  y2={sec.y}
                  stroke="var(--color-border-soft)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="5 4"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.07 }}
                />
              );
            })}

            {/* Primary nodes */}
            {primaryNodes.map((node, i) => (
              <g key={`primary-${node.id}`}>
                {/* Halo */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={42}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="1"
                  opacity={0.2}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 0.2 } : {}}
                  style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
                />
                {/* Circle */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={30}
                  fill="var(--color-bg-canvas)"
                  stroke="var(--color-accent)"
                  strokeWidth="1.5"
                  opacity={0.85}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 0.85 } : {}}
                  style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
                />
                {/* Label */}
                <motion.text
                  x={node.x}
                  y={node.y + 5}
                  textAnchor="middle"
                  fill="var(--color-text-primary)"
                  fontSize="13"
                  fontWeight="600"
                  fontFamily="var(--font-inter), system-ui, sans-serif"
                  letterSpacing="0.02em"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
                >
                  {node.label}
                </motion.text>
              </g>
            ))}

            {/* Secondary nodes */}
            {secondaryNodes.map((sec, i) => (
              <g key={`secondary-${sec.id}`}>
                <motion.circle
                  cx={sec.x}
                  cy={sec.y}
                  r={5}
                  fill="var(--color-accent)"
                  opacity={0.7}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 0.7 } : {}}
                  style={{ transformOrigin: `${sec.x}px ${sec.y}px` }}
                  transition={{ duration: 0.3, delay: 0.9 + i * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
                />
                <motion.text
                  x={sec.anchor === "end" ? sec.x - 12 : sec.x + 12}
                  y={sec.y + 5}
                  textAnchor={sec.anchor as "start" | "end" | "middle"}
                  fill="var(--color-text-secondary)"
                  fontSize="12"
                  fontFamily="var(--font-inter), system-ui, sans-serif"
                  letterSpacing="0.015em"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.0 + i * 0.07 }}
                >
                  {sec.label}
                </motion.text>
              </g>
            ))}

            {/* Center node */}
            <motion.circle
              cx={centerNode.x}
              cy={centerNode.y}
              r={56}
              fill="var(--color-bg-surface)"
              stroke="var(--color-border-default)"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              style={{ transformOrigin: `${centerNode.x}px ${centerNode.y}px` }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            />
            <motion.circle
              cx={centerNode.x}
              cy={centerNode.y}
              r={10}
              fill="var(--color-accent)"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              style={{ transformOrigin: `${centerNode.x}px ${centerNode.y}px` }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            />
            <motion.text
              x={centerNode.x}
              y={centerNode.y + 26}
              textAnchor="middle"
              fill="var(--color-text-primary)"
              fontSize="11"
              fontWeight="600"
              fontFamily="var(--font-inter), system-ui, sans-serif"
              letterSpacing="0.06em"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              BLUEPRINT LABS
            </motion.text>
          </svg>
        </motion.div>

        {/* Phase legend — mobile-friendly */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Assess", desc: "AI readiness + opportunity mapping" },
            { label: "Design", desc: "Workflows, tools, ROI model" },
            { label: "Build", desc: "Automations, agents, reporting" },
            { label: "Enable", desc: "Training, handover, advisory" },
          ].map((phase, i) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.4 + i * 0.07 }}
              className="flex items-start gap-3"
            >
              <span className="mt-1 w-5 h-5 rounded flex-shrink-0 bg-[color:var(--color-accent-soft)] border border-[color:var(--color-accent)]/30 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent)]" />
              </span>
              <div>
                <div className="text-[13px] font-semibold text-[color:var(--color-text-primary)] mb-0.5">
                  {phase.label}
                </div>
                <div className="text-xs text-[color:var(--color-text-tertiary)] leading-snug">
                  {phase.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
