"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PullQuote from "./PullQuote";

const careerItems = [
  {
    period: "2025 — Present",
    role: "Founder",
    org: "Blueprint Labs",
    desc: "AI readiness audits, team training, and adoption strategy for SMBs across Austin and Dallas.",
    accent: true,
  },
  {
    period: "2022 — Present",
    role: "Senior Program Manager",
    org: "Amazon",
    desc: "Data, operations, and product at scale. Cross-functional execution across BI systems and operational infrastructure.",
    accent: false,
  },
  {
    period: "2015 — 2022",
    role: "Business Intelligence & Operations",
    org: "Fortune 500",
    desc: "Built BI systems, dashboards, and workflow automation across sales ops, business ops, and data storytelling.",
    accent: false,
  },
  {
    period: "2014 — Present",
    role: "AI Enablement Practice",
    org: "Independent Research & Consulting",
    desc: "AI readiness frameworks, prompt engineering curriculum, and adoption strategy — before it was called AI enablement.",
    accent: false,
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 md:py-44 px-6 relative overflow-hidden">
<div className="relative max-w-[1400px] mx-auto z-10" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span
            className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase"
            style={{ color: "var(--ink-400)" }}
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

          {/* Right — career timeline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p
              className="font-sans font-medium text-[11px] tracking-[0.12em] uppercase mb-8"
              style={{ color: "var(--ink-400)" }}
            >
              Career Arc
            </p>

            <div className="relative" style={{ paddingLeft: 24 }}>
              {/* Vertical connecting line */}
              <div
                className="absolute top-1 bottom-0"
                style={{
                  left: 3,
                  width: 2,
                  background: "var(--sand-300)",
                }}
                aria-hidden="true"
              />

              {careerItems.map((item, i) => (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                  style={{
                    paddingBottom: i < careerItems.length - 1 ? 32 : 0,
                  }}
                >
                  {/* Dot on the line */}
                  <div
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      left: -24 + 3 - 3,
                      top: 5,
                      background: item.accent
                        ? "var(--amber-400)"
                        : "var(--sage-500)",
                    }}
                  />

                  <p
                    className="font-sans tracking-[0.06em] uppercase mb-1"
                    style={{
                      fontSize: 11,
                      color: "var(--ink-400)",
                    }}
                  >
                    {item.period}
                  </p>
                  <p
                    className="font-serif leading-tight mb-0.5"
                    style={{
                      fontSize: 18,
                      color: "var(--ink-900)",
                    }}
                  >
                    {item.role}
                  </p>
                  <p
                    className="font-sans font-medium mb-2"
                    style={{
                      fontSize: 12,
                      color: "var(--amber-400)",
                    }}
                  >
                    {item.org}
                  </p>
                  <p
                    className="font-sans font-light leading-relaxed"
                    style={{
                      fontSize: 13,
                      color: "var(--ink-400)",
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
