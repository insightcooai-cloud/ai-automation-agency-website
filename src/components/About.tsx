"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PullQuote from "./PullQuote";

const pills = [
  "Business Intelligence",
  "Program Management",
  "Business Operations",
  "AI Enablement",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 md:py-44 px-6 relative overflow-hidden">
      {/* Section watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          pointerEvents: "none",
          userSelect: "none",
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          fontSize: "clamp(120px, 18vw, 220px)",
          fontWeight: 400,
          lineHeight: 1,
          color: "var(--ink-900)",
          opacity: 0.025,
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
          top: "-20px",
          left: "-1%",
          zIndex: 0,
        }}
      >
        Steve
      </div>
      <div className="relative max-w-[1400px] mx-auto z-10" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span
            className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase px-3 py-1 rounded-full inline-block"
            style={{ color: "var(--amber-400)", background: "rgba(200,146,42,0.08)" }}
          >
            04 — About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <h2
              className="font-serif mb-10"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "var(--ink-900)",
              }}
            >
              Built by an operator, not a consultant.
            </h2>
            <p className="font-sans font-light text-[15px] leading-[1.8] mb-6" style={{ color: "var(--ink-700)" }}>
              I&apos;m Steve Jun. I&apos;ve spent over a decade at the
              intersection of data, operations, and product — building BI
              systems, managing sales and business operations, and shipping
              products that had to work in the real world. Today, I&apos;m a
              Senior Program Manager at Amazon.
            </p>
            <p className="font-sans font-light text-[15px] leading-[1.8] mb-6" style={{ color: "var(--ink-700)" }}>
              I started Blueprint Labs because I kept seeing the same problem:
              companies investing in AI tools that nobody actually used. Not
              because the tools were bad — but because nobody did the hard work
              of teaching teams <em className="italic">how</em> to use them and
              redesigning workflows around them.
            </p>
            <p className="font-sans font-light text-[15px] leading-[1.8] mb-6" style={{ color: "var(--ink-700)" }}>
              That&apos;s what I do. I assess where you are, educate your team
              on what&apos;s possible, and build the systems that make AI
              adoption stick — not just on day one, but on day 90.
            </p>
            <p className="font-sans font-light text-[15px] leading-[1.8] mb-8" style={{ color: "var(--ink-700)" }}>
              We work closely with Korean-owned businesses in Austin and Dallas
              — and bring the same cultural fluency and operational depth to
              every engagement.
            </p>

            {/* Callout 3 */}
            <div className="mb-10">
              <PullQuote
                quote="48% of CIOs report their employees are not ready to derive value from AI."
                attribution="— Gartner CIO Talent Planning Survey, 2026"
                subLine="This is the exact gap Blueprint Labs was built to close."
              />
            </div>

            {/* Quote block */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative mt-10 pl-10"
            >
              {/* Decorative quote mark */}
              <span
                className="absolute top-[-20px] left-[-10px] font-serif leading-none select-none"
                style={{ fontSize: 120, color: "var(--amber-400)", opacity: 0.15 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className="font-serif italic relative z-10"
                style={{
                  fontSize: "clamp(18px, 2.2vw, 26px)",
                  lineHeight: 1.5,
                  color: "var(--ink-900)",
                }}
              >
                I&apos;m not going to pitch you on AI. I&apos;m going to show
                you where your team is stuck, what&apos;s actually possible with
                the tools you already have, and then help you make it work.
                Personally.
              </p>
              <footer className="font-sans font-light text-[12px] mt-4" style={{ color: "var(--ink-400)" }}>
                — Steve Jun, Founder, Blueprint Labs
              </footer>
            </motion.blockquote>
          </motion.div>

          {/* Right — skill bars */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p
              className="font-sans font-medium text-[11px] tracking-[0.12em] uppercase mb-5"
              style={{ color: "var(--ink-400)" }}
            >
              Core Expertise
            </p>
            <p
              className="font-sans font-medium text-[12px] uppercase mb-5"
              style={{ color: "var(--ink-400)", letterSpacing: "0.12em" }}
            >
              10+ Years Across All Disciplines
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="font-sans font-medium text-[12px]"
                  style={{
                    background: "var(--sand-200)",
                    borderRadius: "2px",
                    padding: "8px 16px",
                    color: "var(--ink-700)",
                    letterSpacing: "0.04em",
                    display: "inline-block",
                    margin: "4px",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
            <p
              className="font-sans font-light text-[13px] italic mt-6"
              style={{ color: "var(--ink-400)", lineHeight: 1.7 }}
            >
              BI systems, operations design, cross-functional execution, and AI adoption strategy — built across a decade at Amazon and Fortune 500 environments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
