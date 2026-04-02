"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-32 md:py-44 px-6 relative overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto z-10" ref={ref}>
        {/* Structural label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-[color:var(--color-text-tertiary)]">
            04 — About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Left — main bio */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.03em] text-[color:var(--color-text-primary)] mb-10">
              Built by an operator, not a consultant.
            </h2>
            <p className="text-[color:var(--color-text-secondary)] text-base leading-[1.7] mb-6">
              I&apos;m Steve Jun. I&apos;ve spent over a decade at the
              intersection of data, operations, and product — building BI
              systems, managing sales and business operations, and shipping
              products that had to work in the real world. Today, I&apos;m a
              Senior Program Manager at a Fortune 5 tech company.
            </p>
            <p className="text-[color:var(--color-text-secondary)] text-[15px] leading-[1.7] mb-6">
              I started Blueprint Labs because I kept seeing the same problem:
              companies investing in AI tools that nobody actually used. Not
              because the tools were bad — but because nobody did the hard work
              of teaching teams <em className="italic">how</em> to use them and
              redesigning workflows around them.
            </p>
            <p className="text-[color:var(--color-text-secondary)] text-[15px] leading-[1.7]">
              That&apos;s what I do. I assess where you are, educate your team
              on what&apos;s possible, and build the systems that make AI
              adoption stick — not just on day one, but on day 90.
            </p>
          </motion.div>

          {/* Right — credentials + quote */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-3"
          >
            {[
              {
                label: "Business Intelligence",
                desc: "BI systems, dashboards, data storytelling across operations",
              },
              {
                label: "Program Management",
                desc: "Cross-functional execution at scale, Fortune 5 environment",
              },
              {
                label: "Business Operations",
                desc: "Workflow design, systems thinking, operational efficiency",
              },
              {
                label: "AI Enablement",
                desc: "Assessment, training, adoption strategy, and ongoing support",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.28 + i * 0.08 }}
                className="flex items-start justify-between gap-4 py-5 transition-colors duration-200"
              >
                <div>
                  <div className="font-medium text-[14px] text-[color:var(--color-text-primary)] mb-1">
                    {item.label}
                  </div>
                  <div className="text-[13px] text-[color:var(--color-text-tertiary)] leading-snug">
                    {item.desc}
                  </div>
                </div>
                <div className="text-xs text-[color:var(--color-text-tertiary)] self-center whitespace-nowrap flex-shrink-0">
                  10+ yrs
                </div>
              </motion.div>
            ))}

            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-4 pl-4 opacity-80"
            >
              <p className="text-[color:var(--color-text-secondary)] text-[15px] leading-[1.8] font-serif italic">
                &ldquo;I&apos;m not going to pitch you on AI. I&apos;m going to
                show you where your team is stuck, what&apos;s actually possible
                with the tools you already have, and then help you make it
                work. Personally.&rdquo;
              </p>
              <div className="mt-3 text-xs text-[color:var(--color-text-tertiary)]">
                — Steve Jun, Founder, Blueprint Labs
              </div>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
