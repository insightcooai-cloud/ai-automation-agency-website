"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
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

const stats = [
  {
    stat: "74%",
    text: "of enterprise AI pilots fail to reach production. Tools get deployed. Value doesn\u2019t follow.",
  },
  {
    stat: "3\u00d7",
    text: "more AI subscriptions than clear use cases. The tools multiply. The strategy doesn\u2019t.",
  },
  {
    stat: "0",
    text: "readiness assessments happen before buying. Most teams skip diagnosis entirely.",
  },
];

export default function Problem() {
  return (
    <section className="py-32 md:py-40 px-6 bg-[color:var(--color-bg-subtle)]">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[color:var(--color-text-tertiary)] mb-6">
            The Reality
          </p>
        </FadeUp>
        <FadeUp delay={0.06}>
          <h2
            className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] tracking-tight text-[color:var(--color-text-primary)] max-w-2xl mb-20"
            style={{ textWrap: "balance" }}
          >
            Companies are busy adopting AI.{" "}
            <span className="text-[color:var(--color-text-tertiary)]">
              Few are getting value from it.
            </span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-[color:var(--color-border-default)] pt-16">
          {stats.map((item, i) => (
            <FadeUp key={i} delay={0.12 + i * 0.1}>
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
