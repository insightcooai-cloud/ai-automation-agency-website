"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PullQuote from "./PullQuote";

/* ── Easing ── */
const easeOutExpo = (t: number) =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

function useCountUp(target: number, duration = 1400, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor(easeOutExpo(progress) * target));
      if (progress < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return val;
}

function StatCard({
  value,
  suffix,
  label,
  source,
  duration,
  index,
}: {
  value: number | string;
  suffix?: string;
  label: string;
  source: string;
  duration?: number;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isNum = typeof value === "number";
  const count = useCountUp(isNum ? (value as number) : 0, duration ?? 1400, inView && isNum);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!inView || isNum) return;
    const str = String(value);
    let i = 0;
    const t = setInterval(() => {
      setTyped(str.slice(0, ++i));
      if (i >= str.length) clearInterval(t);
    }, 80);
    return () => clearInterval(t);
  }, [inView, isNum, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-white rounded-[2px] p-8"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
        borderTop: "2px solid var(--amber-400)",
      }}
    >
      <div
        className="font-serif mb-3"
        style={{
          fontSize: "clamp(48px, 6vw, 72px)",
          lineHeight: 1,
          color: "var(--ink-900)",
        }}
      >
        {isNum ? count : typed}
        {isNum && suffix && (
          <span style={{ fontSize: "0.55em", color: "var(--amber-400)" }}>
            {suffix}
          </span>
        )}
      </div>
      <p className="font-sans font-light text-[15px] leading-[1.6] mb-3" style={{ color: "var(--ink-700)" }}>
        {label}
      </p>
      <p
        className="font-sans text-[11px] tracking-[0.08em] uppercase"
        style={{ color: "var(--ink-400)" }}
      >
        {source}
      </p>
    </motion.div>
  );
}

/* ── Adoption Gap Chart — two-state scrollytelling ── */
const SEGMENTS = [
  { label: "Tool, not workflow focus", pct: "33%", height: "35.9%", bg: "var(--sage-500)" },
  { label: "Generic training",          pct: "28%", height: "30.4%", bg: "var(--sand-200)" },
  { label: "No clear owner",            pct: "31%", height: "33.7%", bg: "var(--sand-300)" },
];

function AdoptionGapChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [chartState, setChartState] = useState<0 | 1>(0);

  // Auto-transition to root-causes view ~1.5s after bars finish animating
  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setChartState(1), 2900);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[2px] p-8 mx-auto"
      style={{
        maxWidth: 900,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
      }}
    >
      {/* Chart header — label animates between states */}
      <div className="flex items-center justify-between mb-6">
        <p
          className="font-sans font-medium text-[11px] tracking-[0.12em] uppercase"
          style={{ color: "var(--amber-400)" }}
        >
          {chartState === 0 ? "The AI Adoption Gap" : "Where the gap comes from"}
        </p>
        {chartState === 1 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="font-sans text-[9px]"
            style={{ color: "var(--ink-400)" }}
          >
            Source: Gartner CIO Survey 2025
          </motion.p>
        )}
      </div>

      {/* Chart area */}
      <div className="flex items-end gap-10 justify-center" style={{ height: 320 }}>
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between items-end h-full pb-6" style={{ minWidth: 32 }}>
          {["100%", "50%", "0%"].map((l) => (
            <span key={l} className="font-sans font-light text-[10px]" style={{ color: "var(--ink-400)" }}>{l}</span>
          ))}
        </div>

        {/* Bar 1 — investing / root causes */}
        <div className="flex flex-col items-center gap-2" style={{ flex: 1 }}>
          <div
            className="w-full relative"
            style={{ height: 250, background: "var(--sand-100)", borderRadius: "2px 2px 0 0" }}
          >
            <AnimatePresence mode="wait">
              {chartState === 0 ? (
                <motion.div
                  key="single"
                  initial={{ scaleY: 0 }}
                  animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.25 } }}
                  transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 right-0 origin-bottom rounded-[2px]"
                  style={{ height: "92%", background: "var(--sand-300)" }}
                />
              ) : (
                <motion.div
                  key="stacked"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 flex flex-col-reverse"
                  style={{ height: "92%" }}
                >
                  {SEGMENTS.map((seg, i) => (
                    <motion.div
                      key={seg.label}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="origin-bottom relative flex items-center px-2 overflow-hidden"
                      style={{ height: seg.height, background: seg.bg }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.15 + 0.4 }}
                        className="font-sans truncate"
                        style={{ fontSize: 8, color: "var(--ink-700)", fontWeight: 500 }}
                      >
                        {seg.label} — {seg.pct}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="font-sans font-light text-[10px] text-center leading-tight" style={{ color: "var(--ink-400)", maxWidth: 80 }}>
            {chartState === 0 ? "Investing in AI tools" : "Adoption barriers"}
          </span>
        </div>

        {/* Gap annotation */}
        <div className="flex flex-col items-center justify-start" style={{ height: 250, paddingTop: 4 }}>
          <div className="flex flex-col items-center gap-1">
            <span className="font-sans font-medium text-[11px] tracking-[0.06em]" style={{ color: "var(--amber-400)" }}>
              78% gap
            </span>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
              <motion.path
                d="M8 0v16M3 11l5 5 5-5"
                stroke="var(--amber-400)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
              />
            </svg>
          </div>
        </div>

        {/* Bar 2 — successful */}
        <div className="flex flex-col items-center gap-2" style={{ flex: 1 }}>
          <div className="w-full relative" style={{ height: 250, background: "var(--sand-100)", borderRadius: "2px 2px 0 0" }}>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 right-0 origin-bottom rounded-[2px]"
              style={{ height: "14%", background: "var(--sage-500)" }}
            />
          </div>
          <span className="font-sans font-light text-[10px] text-center leading-tight" style={{ color: "var(--ink-400)", maxWidth: 80 }}>
            Successful adoption
          </span>
        </div>
      </div>

      {/* State toggle controls */}
      <div className="flex items-center justify-center gap-3 mt-5 pt-4" style={{ borderTop: "1px solid var(--sand-200)" }}>
        <button
          onClick={() => setChartState(0)}
          className="font-sans cursor-pointer transition-colors duration-200"
          style={{
            fontSize: 10,
            color: chartState === 0 ? "var(--amber-400)" : "var(--ink-400)",
            background: "none",
            border: "none",
            letterSpacing: "0.04em",
            padding: "4px 8px",
          }}
        >
          ← Overview
        </button>
        <span style={{ color: "var(--sand-300)", fontSize: 10, userSelect: "none" }}>|</span>
        <button
          onClick={() => setChartState(1)}
          className="font-sans cursor-pointer transition-colors duration-200"
          style={{
            fontSize: 10,
            color: chartState === 1 ? "var(--amber-400)" : "var(--ink-400)",
            background: "none",
            border: "none",
            letterSpacing: "0.04em",
            padding: "4px 8px",
          }}
        >
          Root causes →
        </button>
      </div>
    </motion.div>
  );
}

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="problem" className="py-40 md:py-56 px-6 relative z-10 overflow-hidden">
<div className="max-w-[1400px] mx-auto" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span
            className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase"
            style={{ color: "var(--ink-400)" }}
          >
            The Problem
          </span>
        </motion.div>

        {/* Big quote */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif max-w-5xl mb-16"
          style={{
            fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "var(--ink-900)",
          }}
        >
          Every company says &ldquo;use AI.&rdquo; Almost none show their teams{" "}
          <em className="italic">how</em>. That&apos;s the real gap — and
          that&apos;s exactly where we come in.
        </motion.p>

        {/* Callout 1 */}
        <div className="mb-16">
          <PullQuote
            quote="74% of CFOs say AI saves time. Only 5% report actual cost savings."
            attribution="— Gartner CFO Leadership Series, 2025"
          />
        </div>

        {/* Adoption Gap Chart */}
        <div className="mb-20">
          <AdoptionGapChart />
        </div>

        {/* Stat cards — row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <StatCard value={73} suffix="%" label="of AI projects fail to reach production" source="McKinsey, 2024" duration={1800} index={0} />
          <StatCard value={14} suffix="%" label="of companies have scaled AI successfully" source="BCG" duration={1200} index={1} />
          <StatCard value="#1" label="barrier isn't technology — it's adoption" source="Harvard Business Review" index={2} />
        </div>
      </div>
    </section>
  );
}
