"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <footer className="relative">
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-[color:var(--color-bg-inverse)]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 150px)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 150px)"
        }}
      />
      {/* Large serif CTA — New Genre "All our constellations" style */}
      <div
        className="py-32 md:py-40 px-6 relative z-10"
        ref={ctaRef}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2rem,5.5vw,4rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-text-inverse)] max-w-3xl mb-6"
          >
            Ready to build an AI foundation that actually works?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-[color:var(--color-text-tertiary)] max-w-lg leading-relaxed mb-12"
          >
            Start with a free AI readiness audit. We&apos;ll assess where you
            stand and show you exactly where AI can move the needle.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 rounded-[90px] bg-[color:var(--color-text-inverse)] text-[color:var(--color-bg-inverse)] text-[15px] font-medium hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-text-inverse)] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Work with us
            </a>
            <a
              href="#blueprint-method"
              className="inline-flex items-center px-7 py-3.5 rounded-[90px] border border-white/[0.12] text-[15px] text-[color:var(--color-text-tertiary)] hover:border-white/[0.3] hover:text-[color:var(--color-text-inverse)] transition-all duration-300 cursor-pointer"
            >
              Our approach
            </a>
          </motion.div>
        </div>
      </div>

      {/* Minimal footer bar */}
      <div className="py-6 px-6 border-t border-white/[0.06] relative z-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--color-text-tertiary)]">
            Blueprint Labs
          </span>
          <p className="text-xs text-[color:var(--color-text-tertiary)]">
            &copy; {new Date().getFullYear()} Blueprint Labs. All rights
            reserved.
          </p>
          <nav
            className="flex items-center gap-6"
            aria-label="Footer navigation"
          >
            {[
              ["#services", "Services"],
              ["#blueprint-method", "Approach"],
              ["#about", "About"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-xs text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text-inverse)] transition-colors duration-200 cursor-pointer"
              >
                {label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/steve-jun-74827379/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text-inverse)] transition-colors duration-200 cursor-pointer"
              aria-label="Steve Jun on LinkedIn"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
