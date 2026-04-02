"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* ─── Bold Animated Gradient Background ─── */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ opacity: textOpacity }}
        aria-hidden="true"
      >
        {/* Large color blobs — newgenre-style bold gradient */}
        <div
          className="absolute inset-0 w-[200%] h-[200%] -left-[50%] -top-[50%]"
          style={{
            animation: "mesh-drift 20s ease-in-out infinite alternate",
          }}
        >
          {/* Deep navy-blue — top left anchor */}
          <div
            className="absolute rounded-full"
            style={{
              width: "80%",
              height: "80%",
              top: "10%",
              left: "5%",
              background: "radial-gradient(circle, rgba(30, 50, 100, 0.9) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          {/* Rich indigo-purple — top right */}
          <div
            className="absolute rounded-full"
            style={{
              width: "70%",
              height: "70%",
              top: "5%",
              right: "-10%",
              background: "radial-gradient(circle, rgba(80, 50, 140, 0.7) 0%, transparent 65%)",
              filter: "blur(90px)",
            }}
          />
          {/* Teal-cyan — bottom center */}
          <div
            className="absolute rounded-full"
            style={{
              width: "90%",
              height: "60%",
              bottom: "5%",
              left: "20%",
              background: "radial-gradient(circle, rgba(30, 130, 160, 0.65) 0%, transparent 65%)",
              filter: "blur(100px)",
            }}
          />
          {/* Warm rose — bottom left accent */}
          <div
            className="absolute rounded-full"
            style={{
              width: "50%",
              height: "50%",
              bottom: "15%",
              left: "-5%",
              background: "radial-gradient(circle, rgba(140, 70, 100, 0.4) 0%, transparent 65%)",
              filter: "blur(80px)",
            }}
          />
          {/* Sky-blue highlight — center right */}
          <div
            className="absolute rounded-full"
            style={{
              width: "60%",
              height: "55%",
              top: "30%",
              right: "5%",
              background: "radial-gradient(circle, rgba(70, 140, 200, 0.5) 0%, transparent 60%)",
              filter: "blur(70px)",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 max-w-[1400px] mx-auto w-full px-6 pt-48 pb-28"
      >
        {/* Structural label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <span className="text-[12px] font-medium tracking-[0.12em] uppercase text-white/60">
            AI Enablement Partner · Austin, TX
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(3rem,7.5vw,6.5rem)] leading-[1.04] tracking-[-0.04em] text-white max-w-5xl mb-12"
        >
          Your team has AI tools. We make sure they actually use them.
        </motion.h1>

        {/* Subtitle + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-end gap-8 max-w-4xl"
        >
          <p className="text-[15px] text-white/70 max-w-md leading-[1.7]">
            We assess where you are, show your team what&apos;s possible, and
            build the systems that make AI adoption stick — as your extended
            partner, not a one-time vendor.
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center px-7 py-3.5 rounded-[90px] bg-white text-[#1a1d2b] text-[15px] font-medium hover:bg-white/90 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
          >
            Book a free AI readiness audit
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
