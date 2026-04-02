"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  {
    value: "10+",
    unit: "yrs",
    label: "Business intelligence & operations experience",
  },
  {
    value: "Sr. PM",
    unit: "",
    label: "Currently at Amazon",
  },
  {
    value: "1:1",
    unit: "",
    label: "Founder-led, every engagement",
  },
  {
    value: "Austin",
    unit: "TX",
    label: "Serving businesses locally & remotely",
  },
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="px-6 relative z-10">
      <div className="max-w-[1400px] mx-auto" ref={ref}>
        <div className="pt-8" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {credentials.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="py-6"
            >
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.02em] text-[color:var(--color-text-primary)]">
                  {item.value}
                </span>
                {item.unit && (
                  <span className="text-[13px] font-medium text-[color:var(--color-text-tertiary)]">
                    {item.unit}
                  </span>
                )}
              </div>
              <p className="text-[13px] text-[color:var(--color-text-tertiary)] leading-snug">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="pb-8" />
      </div>
    </section>
  );
}
