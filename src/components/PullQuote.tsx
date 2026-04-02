"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PullQuoteProps {
  quote: string;
  attribution: string;
  subLine?: string;
}

export default function PullQuote({ quote, attribution, subLine }: PullQuoteProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="reveal"
      style={{
        borderLeft: "3px solid var(--amber-400)",
        padding: "16px 24px",
        background: "var(--sand-100)",
        borderRadius: "0 2px 2px 0",
        maxWidth: 520,
      }}
    >
      <p
        className="font-serif italic"
        style={{
          fontSize: "clamp(18px, 2vw, 22px)",
          lineHeight: 1.5,
          color: "var(--ink-900)",
          marginBottom: 8,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <p
        className="font-sans"
        style={{ fontSize: 11, color: "var(--ink-400)", fontWeight: 300 }}
      >
        {attribution}
      </p>
      {subLine && (
        <p
          className="font-sans"
          style={{ fontSize: 13, color: "var(--ink-700)", fontWeight: 300, marginTop: 8 }}
        >
          {subLine}
        </p>
      )}
    </motion.div>
  );
}
