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

  // Flowing gradient wash — all light tones, no dark sections.
  // Inspired by newgenre.studio: one continuous color journey.
  // Sky-blue → warm cream → soft lavender → peachy cream → sage → sky-blue → deep navy (footer only)
  const background = useTransform(
    scrollYProgress,
    [0, 0.08, 0.18, 0.30, 0.42, 0.55, 0.68, 0.78, 0.88, 0.96, 1],
    [
      "#2E3D5A", // 0%   Hero — deep navy-blue for rich gradient feel
      "#6A7FA0", // 8%   Hero → Problem transition — steel blue bridge
      "#F0EBE3", // 18%  Problem / Stats — warm cream
      "#E8E0EC", // 30%  SocialProof → Services — soft lavender
      "#E2E8EE", // 42%  Services mid — blue-gray mist
      "#EBE4DA", // 55%  Services → HowIWork — warm sand
      "#DDE5E4", // 68%  HowIWork → About — sage mist
      "#E8DFE8", // 78%  About — dusty rose
      "#EDE8E0", // 88%  FAQ — warm parchment
      "#E4E1EC", // 96%  Contact — light lilac
      "#1A1D2B", // 100% Footer — deep navy (only dark section)
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
