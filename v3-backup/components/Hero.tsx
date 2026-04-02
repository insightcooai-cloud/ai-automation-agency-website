"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #E8DDD0 0%, #D6CEBF 20%, #C5C8CC 45%, #B8C3D1 65%, #C7CDD6 85%, #E8DDD0 100%)",
          backgroundSize: "200% 200%",
          animation: "gradient-shift 20s ease infinite",
          maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)"
        }}
      />
      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <motion.div
        style={{ y: bgY }}
        className="relative z-10 max-w-[1200px] mx-auto w-full px-6 pt-48 pb-20"
      >
        <motion.div style={{ opacity: textOpacity, y: textY }}>
          {/* Giant serif statement */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.8rem,6.5vw,5rem)] leading-[1.05] tracking-[-0.02em] text-[color:var(--color-text-primary)] max-w-4xl mb-10"
          >
            We help businesses turn AI tools into real operational value.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-[color:var(--color-text-secondary)] max-w-lg leading-relaxed mb-14"
          >
            Blueprint Labs is your AI transformation partner — from readiness
            assessment to implementation to team adoption.
          </motion.p>

          {/* Single pill CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 rounded-[90px] bg-[color:var(--color-text-primary)]/[0.06] text-[15px] text-[color:var(--color-text-primary)] font-medium hover:bg-[color:var(--color-text-primary)]/[0.12] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)]"
            >
              Start with an assessment
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
