"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "73%",
    label: "of AI projects fail to reach production",
    source: "McKinsey, 2024",
  },
  {
    value: "14%",
    label: "of companies have scaled AI successfully",
    source: "BCG",
  },
  {
    value: "#1",
    label: "barrier isn't technology — it's adoption",
    source: "Harvard Business Review",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section className="py-40 md:py-56 px-6 relative z-10">
      <div className="max-w-[1400px] mx-auto" ref={ref}>
        {/* Structural label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-[color:var(--color-text-tertiary)]">
            The Problem
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.08] tracking-[-0.03em] text-[color:var(--color-bg-inverse)] max-w-5xl mb-28"
        >
          Every company says &ldquo;use AI.&rdquo; Almost none show their teams{" "}
          <em className="italic">how</em>. That&apos;s the real gap — and
          that&apos;s exactly where we come in.
        </motion.p>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] tracking-[-0.03em] text-[color:var(--color-text-primary)] mb-2">
                {stat.value}
              </div>
              <p className="text-[15px] text-[color:var(--color-text-secondary)] leading-[1.6] mb-1">
                {stat.label}
              </p>
              <p className="text-[12px] text-[color:var(--color-text-tertiary)]">
                {stat.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
