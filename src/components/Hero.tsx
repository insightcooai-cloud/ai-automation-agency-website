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
          bottom: "-40px",
          right: "-2%",
          zIndex: 0,
        }}
      >
        Blueprint
      </div>

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
            className="mb-12"
          >
            <span
              className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase"
              style={{ color: "var(--ink-400)" }}
            >
              AI Enablement Partner · Austin, TX
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-end gap-8 max-w-4xl"
          >
            <p
              className="font-sans font-light text-[16px] max-w-sm leading-[1.8]"
              style={{ color: "var(--ink-700)" }}
            >
              We assess where you are, show your team what&apos;s possible, and
              build the systems that make AI adoption stick — as your extended
              partner, not a one-time vendor.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 flex-shrink-0">
              <a
                href="#blueprint-method"
                className="inline-flex items-center gap-3 pl-7 pr-2 text-[11px] font-medium tracking-[0.08em] uppercase cursor-pointer focus-visible:outline-none min-h-[48px] transition-all duration-500 group/cta"
                style={{
                  background: "var(--ink-900)",
                  color: "var(--sand-50)",
                  borderRadius: "9999px",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--amber-400)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink-900)")}
              >
                See how it works
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover/cta:translate-x-0.5"
                  style={{ background: "rgba(255,255,255,0.12)", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 pl-7 pr-2 text-[11px] font-medium tracking-[0.08em] uppercase cursor-pointer focus-visible:outline-none min-h-[48px] transition-all duration-500 group/cta2"
                style={{
                  border: "1px solid var(--sand-300)",
                  color: "var(--ink-700)",
                  borderRadius: "9999px",
                  background: "transparent",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
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
                Book a free intro call
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover/cta2:translate-x-0.5"
                  style={{ background: "rgba(26,24,20,0.06)", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
