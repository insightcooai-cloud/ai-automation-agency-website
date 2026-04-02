"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
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

/* ── Adoption Gap Chart ── */
function AdoptionGapChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[2px] p-6 mx-auto"
      style={{
        maxWidth: 480,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
      }}
    >
      <p
        className="font-sans font-medium text-[11px] tracking-[0.12em] uppercase mb-6"
        style={{ color: "var(--amber-400)" }}
      >
        The AI Adoption Gap
      </p>

      {/* Chart area */}
      <div className="flex items-end gap-10 justify-center" style={{ height: 180 }}>
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between items-end h-full pb-6" style={{ minWidth: 32 }}>
          {["100%", "50%", "0%"].map((l) => (
            <span key={l} className="font-sans font-light text-[10px]" style={{ color: "var(--ink-400)" }}>{l}</span>
          ))}
        </div>

        {/* Bar 1 — investing */}
        <div className="flex flex-col items-center gap-2" style={{ flex: 1 }}>
          <div className="w-full relative" style={{ height: 140, background: "var(--sand-100)", borderRadius: "2px 2px 0 0" }}>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 right-0 origin-bottom rounded-[2px]"
              style={{ height: "92%", background: "var(--sand-300)" }}
            />
          </div>
          <span className="font-sans font-light text-[10px] text-center leading-tight" style={{ color: "var(--ink-400)", maxWidth: 80 }}>
            Investing in AI tools
          </span>
        </div>

        {/* Gap annotation */}
        <div className="flex flex-col items-center justify-start" style={{ height: 140, paddingTop: 4 }}>
          <div className="flex flex-col items-center gap-1">
            <span className="font-sans font-medium text-[11px] tracking-[0.06em]" style={{ color: "var(--amber-400)" }}>
              78% gap
            </span>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
              <path d="M8 0v16M3 11l5 5 5-5" stroke="var(--amber-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Bar 2 — successful */}
        <div className="flex flex-col items-center gap-2" style={{ flex: 1 }}>
          <div className="w-full relative" style={{ height: 140, background: "var(--sand-100)", borderRadius: "2px 2px 0 0" }}>
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

      <p className="font-sans font-light text-[10px] mt-4 text-right" style={{ color: "var(--ink-400)" }}>
        Source: BCG, McKinsey
      </p>
    </motion.div>
  );
}

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="problem" className="py-40 md:py-56 px-6 relative z-10">
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
          className="font-serif max-w-5xl mb-20"
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

        {/* Adoption Gap Chart */}
        <div className="mb-20">
          <AdoptionGapChart />
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <StatCard value={73} suffix="%" label="of AI projects fail to reach production" source="McKinsey, 2024" duration={1400} index={0} />
          <StatCard value={14} suffix="%" label="of companies have scaled AI successfully" source="BCG" duration={1200} index={1} />
          <StatCard value="#1" label="barrier isn't technology — it's adoption" source="Harvard Business Review" index={2} />
        </div>
      </div>
    </section>
  );
}
