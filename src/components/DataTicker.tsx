"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  "73% of AI projects never reach production",
  "48% of employees are not ready to derive value from AI",
  "51% of CIOs say AI skills gaps will impede 2026 objectives",
  "Only 5% of AI investments produce actual cost savings",
  "80% of leaders say value tracking is critical — fewer than 10% actually do it",
  "Change fatigue is the #1 barrier to AI adoption",
];

export default function DataTicker() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const sectionStyle: React.CSSProperties = {
    background: "var(--sand-200)",
    height: 44,
    borderTop: "1px solid var(--sand-300)",
    borderBottom: "1px solid var(--sand-300)",
  };

  if (!mounted) return <div style={sectionStyle} />;

  if (reducedMotion) {
    return (
      <section
        id="data-ticker"
        aria-label="AI adoption statistics"
        className="relative flex items-center justify-center overflow-hidden px-4"
        style={sectionStyle}
      >
        <p
          className="font-sans text-center"
          style={{ fontSize: 12, color: "var(--ink-700)", letterSpacing: "0.04em" }}
        >
          73% of AI projects never reach production
        </p>
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2"
          style={{ fontSize: 9, color: "var(--ink-400)" }}
        >
          Source: Gartner, McKinsey, BCG
        </span>
      </section>
    );
  }

  return (
    <section
      id="data-ticker"
      aria-label="AI adoption statistics — scroll of industry statistics"
      className="relative overflow-hidden flex items-center"
      style={sectionStyle}
    >
      <div className="ticker-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              aria-hidden="true"
              style={{ color: "var(--amber-400)", margin: "0 16px", lineHeight: 1 }}
            >
              ·
            </span>
            <span
              className="font-sans"
              style={{
                fontSize: 12,
                color: "var(--ink-700)",
                letterSpacing: "0.04em",
                fontWeight: 400,
              }}
            >
              {item}
            </span>
          </span>
        ))}
      </div>

      {/* Source attribution — gradient mask keeps it readable */}
      <span
        aria-label="Data sources"
        className="absolute right-0 top-0 bottom-0 flex items-center pr-4 pl-8 pointer-events-none"
        style={{
          fontSize: 9,
          color: "var(--ink-400)",
          background: "linear-gradient(90deg, transparent, var(--sand-200) 32px)",
          zIndex: 1,
        }}
      >
        Source: Gartner, McKinsey, BCG
      </span>
    </section>
  );
}
