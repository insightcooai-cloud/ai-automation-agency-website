"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, type Lang } from "@/lib/translations";

type PhaseData = (typeof translations.howIWork.phases)[0];

function PhaseCard({
  phase,
  index,
  lang,
}: {
  phase: PhaseData;
  index: number;
  lang: Lang;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <>
      {/* Desktop zigzag row */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isLeft ? -32 : 32, y: 12 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="hidden md:grid md:grid-cols-2 md:gap-16 items-center"
      >
        {/* Left column */}
        {isLeft ? (
          <div className="relative" style={{ padding: "32px 0" }}>
            {/* Decorative large number */}
            <span
              className="absolute font-serif select-none pointer-events-none"
              style={{
                fontSize: "clamp(80px, 12vw, 140px)",
                opacity: 0.07,
                color: "var(--ink-900)",
                top: "-20px",
                left: "-8px",
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              {phase.n}
            </span>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--amber-400)" }}
                />
                <span
                  className="font-sans font-medium text-[10px] tracking-[0.1em] uppercase"
                  style={{ color: "var(--amber-400)" }}
                >
                  {phase.timeline[lang]}
                </span>
              </div>
              <h3
                className="font-sans font-semibold mb-4"
                style={{
                  fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                  color: "var(--ink-900)",
                }}
              >
                {phase.title[lang]}
              </h3>
              <ul className="space-y-2">
                {phase.points[lang].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className="w-1 h-1 rounded-full mt-[10px] flex-shrink-0"
                      style={{ background: "var(--ink-400)" }}
                    />
                    <span
                      className="font-sans font-light text-[14px] leading-[1.7]"
                      style={{ color: "var(--ink-700)" }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            {/* Decorative number for empty side */}
            <span
              className="font-serif select-none"
              style={{
                fontSize: "clamp(80px, 12vw, 140px)",
                opacity: 0.05,
                color: "var(--ink-900)",
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              {phase.n}
            </span>
          </div>
        )}

        {/* Right column */}
        {isLeft ? (
          <div className="flex items-center justify-center">
            <span
              className="font-serif select-none"
              style={{
                fontSize: "clamp(80px, 12vw, 140px)",
                opacity: 0.05,
                color: "var(--ink-900)",
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              {phase.n}
            </span>
          </div>
        ) : (
          <div className="relative" style={{ padding: "32px 0" }}>
            <span
              className="absolute font-serif select-none pointer-events-none"
              style={{
                fontSize: "clamp(80px, 12vw, 140px)",
                opacity: 0.07,
                color: "var(--ink-900)",
                top: "-20px",
                right: "-8px",
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              {phase.n}
            </span>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--amber-400)" }}
                />
                <span
                  className="font-sans font-medium text-[10px] tracking-[0.1em] uppercase"
                  style={{ color: "var(--amber-400)" }}
                >
                  {phase.timeline[lang]}
                </span>
              </div>
              <h3
                className="font-sans font-semibold mb-4"
                style={{
                  fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                  color: "var(--ink-900)",
                }}
              >
                {phase.title[lang]}
              </h3>
              <ul className="space-y-2">
                {phase.points[lang].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className="w-1 h-1 rounded-full mt-[10px] flex-shrink-0"
                      style={{ background: "var(--ink-400)" }}
                    />
                    <span
                      className="font-sans font-light text-[14px] leading-[1.7]"
                      style={{ color: "var(--ink-700)" }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      {/* Horizontal connector line between columns (desktop only) */}
      <div
        className="hidden md:block mx-auto"
        style={{
          width: "1px",
          height: "48px",
          background: "var(--sand-300)",
        }}
        aria-hidden="true"
      />

      {/* Mobile: simple stacked layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.7,
          delay: index * 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="md:hidden relative"
        style={{ paddingBottom: 32 }}
      >
        <span
          className="absolute font-serif select-none pointer-events-none"
          style={{
            fontSize: "80px",
            opacity: 0.07,
            color: "var(--ink-900)",
            top: "-16px",
            left: "-4px",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          {phase.n}
        </span>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--amber-400)" }}
            />
            <span
              className="font-sans font-medium text-[10px] tracking-[0.1em] uppercase"
              style={{ color: "var(--amber-400)" }}
            >
              {phase.timeline[lang]}
            </span>
          </div>
          <h3
            className="font-sans font-semibold mb-4"
            style={{
              fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
              color: "var(--ink-900)",
            }}
          >
            {phase.title[lang]}
          </h3>
          <ul className="space-y-2">
            {phase.points[lang].map((point: string) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  className="w-1 h-1 rounded-full mt-[10px] flex-shrink-0"
                  style={{ background: "var(--ink-400)" }}
                />
                <span
                  className="font-sans font-light text-[14px] leading-[1.7]"
                  style={{ color: "var(--ink-700)" }}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
}

export default function HowIWork() {
  const { lang } = useLanguage();
  const t = translations.howIWork;
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="blueprint-method" className="py-32 md:py-44 px-6 relative z-10 overflow-hidden">
<div className="max-w-[1400px] mx-auto">
        <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span
              className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase"
              style={{ color: "var(--ink-400)" }}
            >
              {t.sectionLabel[lang]}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif max-w-3xl mb-20"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--ink-900)",
            }}
          >
            {t.headline[lang]}
          </motion.h2>
        </div>

        {/* Zigzag timeline */}
        <div className="flex flex-col">
          {t.phases.map((phase, i) => (
            <PhaseCard key={phase.n} phase={phase} index={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
