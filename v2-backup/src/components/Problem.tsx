"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Problem() {
  return (
    <section className="py-32 md:py-40 px-6 bg-[color:var(--color-bg-canvas)]">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[color:var(--color-text-tertiary)] mb-8">
            The Reality
          </p>
        </FadeUp>

        {/* Large editorial statement */}
        <FadeUp delay={0.06}>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.12] tracking-tight text-[color:var(--color-text-primary)] max-w-4xl mb-0">
            The problem isn&apos;t access to AI.
          </h2>
        </FadeUp>
        <FadeUp delay={0.14}>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.12] tracking-tight text-[color:var(--color-text-tertiary)] max-w-4xl mb-16">
            It&apos;s adoption.
          </h2>
        </FadeUp>

        {/* Stat row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-[color:var(--color-border-default)] pt-14">
          {[
            {
              stat: "74%",
              text: "of enterprise AI pilots fail to reach production. Tools get deployed. Value doesn't follow.",
            },
            {
              stat: "10%",
              text: "of AI's potential is what most teams actually use — not because of the tool, but because workflows weren't redesigned around it.",
            },
            {
              stat: "0",
              text: "readiness assessments happen before buying. Most businesses skip diagnosis entirely and wonder why adoption doesn't stick.",
            },
          ].map((item, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.1}>
              <div className="font-serif text-[clamp(3rem,6vw,5rem)] leading-none text-[color:var(--color-text-primary)] mb-5">
                {item.stat}
              </div>
              <p className="text-[color:var(--color-text-secondary)] text-base leading-relaxed">
                {item.text}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
