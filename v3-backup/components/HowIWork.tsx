"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HowIWork() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  const mapRef = useRef(null);
  const mapInView = useInView(mapRef, { once: true, margin: "-10% 0px" });

  const flowRef = useRef(null);
  const flowInView = useInView(flowRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="blueprint-method"
      className="py-24 md:py-32 px-6 relative z-10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div ref={headerRef} className="mb-20 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--color-text-tertiary)] mb-8"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-[color:var(--color-text-primary)] max-w-4xl mx-auto md:mx-0"
          >
            Diagnosis before prescription.
          </motion.h2>
        </div>

        {/* Part 1: The Blueprint */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, y: 40 }}
          animate={mapInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 flex flex-col items-center"
        >
          <div className="w-full relative aspect-[16/10] md:aspect-[16/7] rounded-2xl md:rounded-3xl overflow-hidden bg-[color:var(--color-bg-canvas)] mb-12 border border-[color:var(--color-border-soft)] shadow-sm">
            <motion.img 
              src="/images/claude-mindmap.png"
              alt="Strategic Vision Mindmap"
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              animate={mapInView ? { scale: 1 } : { scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <div className="max-w-3xl text-center px-4">
            <h3 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.01em] text-[color:var(--color-text-primary)] mb-4">
              1. The Blueprint
            </h3>
            <p className="text-[17px] text-[color:var(--color-text-secondary)] leading-[1.6]">
              We assess your entire operational state—from data silos to team capabilities. By mapping the full strategic vision first, we prioritize the exact initiatives that bridge the AI gap securely and effectively.
            </p>
          </div>
        </motion.div>

        {/* Part 2: The Build */}
        <motion.div
          ref={flowRef}
          initial={{ opacity: 0, y: 40 }}
          animate={flowInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="w-full relative aspect-[16/10] md:aspect-[16/7] rounded-2xl md:rounded-3xl overflow-hidden bg-[#0C1018] mb-12 border border-[color:var(--color-border-soft)] shadow-xl">
            <motion.img 
              src="/images/n8n-workflow.png"
              alt="n8n Workflow Automation Pipeline"
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              animate={flowInView ? { scale: 1 } : { scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <div className="max-w-3xl text-center px-4">
            <h3 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.01em] text-[color:var(--color-text-primary)] mb-4">
              2. The Build
            </h3>
            <p className="text-[17px] text-[color:var(--color-text-secondary)] leading-[1.6]">
              We transition from theory to hands-on engineering. Utilizing robust tools like n8n, we architect complex data pipelines and logical data flows that integrate directly into your toolstack natively. No black boxes.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
