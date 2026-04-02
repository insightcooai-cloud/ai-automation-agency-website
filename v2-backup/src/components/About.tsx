"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-32 md:py-40 px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-inverse)" }}
    >
      <div className="relative max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[color:var(--color-text-tertiary)] mb-12"
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Left — main bio */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.12] tracking-tight text-[color:var(--color-text-inverse)] mb-8">
              I&apos;ve worked inside the workflows you&apos;re trying to fix.
            </h2>
            <p className="text-[color:var(--color-text-tertiary)] text-lg leading-relaxed mb-6">
              I&apos;m Steve Jun. For over a decade I&apos;ve been at the
              intersection of data, operations, and product — building BI
              systems, managing sales and business operations, and shipping
              products that had to work in the real world, not just in a demo.
            </p>
            <p className="text-[color:var(--color-text-tertiary)] text-base leading-relaxed mb-6">
              I started Blueprint Labs because I kept seeing the same problem:
              businesses investing in AI tools that nobody actually used. Not
              because the tools were bad — but because the workflows weren&apos;t
              redesigned, the team wasn&apos;t trained, and nobody did the hard work
              of making adoption stick.
            </p>
            <p className="text-[color:var(--color-text-tertiary)] text-base leading-relaxed">
              That&apos;s what I do. I&apos;m not a researcher or a tool salesperson.
              I&apos;m an operator who builds AI systems that work the same way on
              day 90 as they did on day one.
            </p>
          </motion.div>

          {/* Right — credentials + quote */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-5"
          >
            {/* Expertise items */}
            {[
              {
                label: "Business Intelligence",
                desc: "BI systems, dashboards, data storytelling across operations",
              },
              {
                label: "Sales Operations",
                desc: "Revenue ops, pipeline design, process improvement",
              },
              {
                label: "Business Operations",
                desc: "Workflow design, systems thinking, operational efficiency",
              },
              {
                label: "Product Management",
                desc: "Data products and operational tools — shipped and maintained",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.28 + i * 0.08 }}
                className="flex items-start justify-between gap-4 p-5 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-200"
              >
                <div>
                  <div className="font-medium text-sm text-[color:var(--color-text-inverse)] mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-[color:var(--color-text-tertiary)] leading-snug">
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
              className="mt-3 border-l-2 border-[color:var(--color-accent)]/40 pl-5"
            >
              <p className="text-[color:var(--color-text-tertiary)] text-sm leading-[1.8] font-serif italic">
                &ldquo;Most AI consultants come from pure tech or pure strategy. I&apos;ve
                lived on both sides — data and operations. That&apos;s the
                difference between building something that sticks and something
                that gets abandoned after 90 days.&rdquo;
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
