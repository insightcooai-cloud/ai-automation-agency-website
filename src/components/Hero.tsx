"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParticleField from "./ParticleField";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -48]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Particle field */}
      <ParticleField />

      {/* Subtle warm gradient overlay — keeps particles readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(200,146,42,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 70%, rgba(107,124,106,0.05) 0%, transparent 70%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 max-w-[1400px] mx-auto w-full px-6 pt-48 pb-28"
      >
        <div className="relative z-10">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex flex-wrap items-center gap-3"
          >
            <span
              className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase"
              style={{ color: "var(--ink-400)" }}
            >
              AI Enablement Partner · Austin, TX
            </span>
            <span
              className="font-sans font-medium text-[11px] tracking-[0.08em] px-2.5 py-1 rounded-full"
              style={{ color: "var(--amber-400)", background: "rgba(200,146,42,0.08)" }}
            >
              Led by an Amazon Sr. PM
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif leading-[1.04] tracking-[-0.02em] max-w-4xl mb-12"
            style={{
              fontSize: "clamp(44px, 6vw, 84px)",
              color: "var(--ink-900)",
            }}
          >
            Your team has AI tools. We make sure they actually use them.
          </motion.h1>

          {/* Subtitle + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-end gap-8 max-w-4xl"
          >
            <div className="max-w-sm">
              <p
                className="font-sans font-light text-[16px] leading-[1.8] mb-3"
                style={{ color: "var(--ink-700)" }}
              >
                We assess where you are, show your team what&apos;s possible, and
                build the systems that make AI adoption stick — as your extended
                partner, not a one-time vendor.
              </p>
              <p
                className="font-sans font-light text-[13px] leading-snug"
                style={{ color: "var(--ink-400)" }}
              >
                Specializing in Korean-owned businesses in Austin &amp; Dallas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3 flex-shrink-0">
              {/* Primary CTA */}
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 text-[11px] font-medium tracking-[0.08em] uppercase cursor-pointer focus-visible:outline-none min-h-[48px] transition-all duration-300"
                style={{
                  background: "var(--ink-900)",
                  color: "var(--sand-50)",
                  borderRadius: "2px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--amber-400)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink-900)")}
              >
                Book a free intro call
              </a>
              {/* Secondary CTA */}
              <a
                href="#blueprint-method"
                className="inline-flex items-center px-7 py-3.5 text-[11px] font-medium tracking-[0.08em] uppercase cursor-pointer focus-visible:outline-none min-h-[48px] transition-all duration-300"
                style={{
                  border: "1px solid var(--sand-300)",
                  color: "var(--ink-700)",
                  borderRadius: "2px",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--ink-900)";
                  e.currentTarget.style.color = "var(--ink-900)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--sand-300)";
                  e.currentTarget.style.color = "var(--ink-700)";
                }}
              >
                See how it works
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
