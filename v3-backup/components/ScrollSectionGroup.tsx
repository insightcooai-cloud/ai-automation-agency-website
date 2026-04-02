"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

export default function ScrollSectionGroup({ children }: { children: ReactNode }) {
  const containerRef = useRef(null);

  // We track the scroll progress within this entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smoothing for the background transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Map progress (0 to 1) to colors spanning the full page
  // 0.0 - 0.15: Canvas (Hero, Problem)
  // 0.15 - 0.35: Subtle (Services)
  // 0.35 - 0.45: Canvas (How I Work)
  // 0.45 - 0.60: Inverse (About)
  // 0.60 - 0.70: Subtle (FAQ)
  // 0.70 - 0.85: Canvas (Contact)
  // 0.85 - 1.00: Inverse (Footer)
  
  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.18, 0.33, 0.48, 0.63, 0.78, 0.90, 1],
    [
      "var(--color-bg-canvas)",  // Hero/Problem
      "var(--color-bg-subtle)",  // Services
      "var(--color-bg-canvas)",  // How I Work
      "var(--color-bg-inverse)", // About
      "var(--color-bg-subtle)",  // FAQ
      "var(--color-bg-canvas)",  // Contact
      "var(--color-bg-inverse)", // Footer
      "var(--color-bg-inverse)"
    ]
  );

  return (
    <motion.div ref={containerRef} style={{ backgroundColor }} className="w-full relative">
      {children}
    </motion.div>
  );
}
