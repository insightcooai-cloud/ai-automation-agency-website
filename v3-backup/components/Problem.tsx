"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="py-32 md:py-64 px-6 relative z-10">
      <div className="max-w-[1400px] mx-auto text-center md:text-left">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-[color:var(--color-bg-inverse)] max-w-6xl mx-auto md:mx-0"
        >
          The problem isn&apos;t access to AI. It&apos;s adoption. We build the systems, workflows, and data pipelines that make it actually work.
        </motion.p>
      </div>
    </section>
  );
}
