"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dark gradient journey — newgenre.studio style.
  // Deep dark base with subtle atmospheric tints bleeding between sections.
  // No section borders. Color variation comes from the tint shifts + blob overlays.
  const background = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.38, 0.50, 0.62, 0.74, 0.84, 0.92, 1],
    [
      "#0A0A0B", // Hero — pure dark
      "#09090F", // Hero → Problem — hint of deep indigo
      "#080C12", // Problem — subtle blue
      "#08100E", // Services — teal dark
      "#0A0A0E", // HowIWork — back to pure
      "#0D0A14", // Results — purple tint
      "#090B14", // About — blue-indigo
      "#0A0A0C", // FAQ — neutral dark
      "#0C0A10", // Contact — faint purple
      "#050505", // Footer — deepest
    ]
  );

  return (
    <div ref={containerRef} className="relative min-h-screen w-full">
      <motion.div
        className="fixed inset-0 w-full h-full -z-50 pointer-events-none"
        style={{ background }}
      />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
