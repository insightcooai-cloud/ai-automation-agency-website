"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const expertise = [
  {
    label: "Business Intelligence",
    desc: "BI systems, dashboards, data storytelling",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <rect x="3" y="10" width="3" height="7" rx="1" fill="currentColor" />
        <rect
          x="8.5"
          y="6"
          width="3"
          height="11"
          rx="1"
          fill="currentColor"
          fillOpacity="0.7"
        />
        <rect
          x="14"
          y="3"
          width="3"
          height="14"
          rx="1"
          fill="currentColor"
          fillOpacity="0.4"
        />
      </svg>
    ),
  },
  {
    label: "Sales Operations",
    desc: "Revenue ops, pipeline design, process improvement",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 14l4-4 3 3 4-5 3 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="3" cy="14" r="1.5" fill="currentColor" />
        <circle cx="17" cy="10" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Business Operations",
    desc: "Workflow design, systems thinking, operational efficiency",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 3v2M10 15v2M3 10h2M15 10h2M5.5 5.5l1.4 1.4M13.1 13.1l1.4 1.4M14.5 5.5l-1.4 1.4M6.9 13.1l-1.4 1.4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Product Management",
    desc: "PM across data products and operational tools",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="6"
          height="6"
          rx="1.5"
          fill="currentColor"
          fillOpacity="0.8"
        />
        <rect
          x="11"
          y="3"
          width="6"
          height="6"
          rx="1.5"
          fill="currentColor"
          fillOpacity="0.4"
        />
        <rect
          x="3"
          y="11"
          width="6"
          height="6"
          rx="1.5"
          fill="currentColor"
          fillOpacity="0.4"
        />
        <rect
          x="11"
          y="11"
          width="6"
          height="6"
          rx="1.5"
          fill="currentColor"
          fillOpacity="0.8"
        />
      </svg>
    ),
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-32 md:py-40 px-6 text-[color:var(--color-text-inverse)] relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-inverse)" }}
    >
      <div className="relative max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-[0.15em] uppercase text-[color:var(--color-text-tertiary)] mb-6"
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <h2
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-[color:var(--color-text-inverse)] mb-8"
              style={{ textWrap: "balance" }}
            >
              I&apos;ve worked inside the workflows you&apos;re trying to fix.
            </h2>
            <p className="text-[color:var(--color-text-tertiary)] text-lg leading-relaxed mb-6">
              I&apos;m Steve Jun. For over a decade I&apos;ve worked at the
              intersection of data, operations, and product — building BI
              systems, running sales and business operations, and shipping
              products that had to work in the real world.
            </p>
            <p className="text-[color:var(--color-text-tertiary)] text-base leading-relaxed">
              That background shapes how I approach AI. I&apos;m not a researcher
              or a tool salesperson. I know the difference between a solution
              that looks good in a demo and one that actually sticks.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.14,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7 flex flex-col gap-5"
          >
            {expertise.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[color:var(--color-accent)]/15 flex items-center justify-center text-[color:var(--color-accent)]">
                  {item.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[color:var(--color-text-inverse)] mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-[color:var(--color-text-tertiary)] leading-snug">
                    {item.desc}
                  </div>
                </div>
                <div className="ml-auto text-xs text-[color:var(--color-text-tertiary)] self-center whitespace-nowrap">
                  10+ yrs
                </div>
              </motion.div>
            ))}

            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-3 border-l-2 border-[color:var(--color-accent)]/40 pl-5"
            >
              <p className="text-[color:var(--color-text-tertiary)] text-sm leading-[1.8] font-serif italic">
                &ldquo;Most AI consultants come from pure tech or pure strategy.
                I&apos;ve lived on both sides — data and operations. That&apos;s
                the difference.&rdquo;
              </p>
              <div className="mt-3 text-xs text-[color:var(--color-text-tertiary)]">
                — Steve Jun, Blueprint Labs
              </div>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
