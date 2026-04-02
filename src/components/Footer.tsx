"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--charcoal)" }}>
      {/* Large serif CTA */}
      <div className="py-32 md:py-40 px-6 relative z-10" ref={ctaRef}>
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif max-w-3xl mb-6"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--sand-50)",
            }}
          >
            Ready to turn AI tools into real team capability?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-light text-[15px] max-w-lg leading-[1.8] mb-12"
            style={{ color: "var(--ink-200)" }}
          >
            Start with a free intro call. No commitment — just an honest
            conversation about where AI can move the needle for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a
              href="#contact"
              className="inline-flex items-center font-sans font-medium text-[11px] tracking-[0.08em] uppercase px-7 py-3.5 transition-all duration-300 cursor-pointer focus-visible:outline-none min-h-[48px]"
              style={{
                background: "var(--sand-50)",
                color: "var(--charcoal)",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--sand-50)")}
            >
              Book a free intro call
            </a>
            <a
              href="#blueprint-method"
              className="inline-flex items-center font-sans font-medium text-[11px] tracking-[0.08em] uppercase px-7 py-3.5 transition-all duration-300 cursor-pointer min-h-[48px]"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "var(--ink-200)",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                e.currentTarget.style.color = "var(--sand-50)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = "var(--ink-200)";
              }}
            >
              See how it works
            </a>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] mx-6" style={{ background: "rgba(255,255,255,0.06)" }} />

      {/* Footer bar */}
      <div className="py-6 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            className="font-sans font-medium text-[11px] tracking-[0.12em] uppercase"
            style={{ color: "var(--ink-400)" }}
          >
            Blueprint Labs
          </span>
          <p className="font-sans font-light text-[11px]" style={{ color: "var(--ink-400)" }}>
            &copy; {new Date().getFullYear()} Blueprint Labs. All rights reserved.
          </p>
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {[
              ["#services", "Services"],
              ["#blueprint-method", "Process"],
              ["#about", "About"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="nav-link font-sans font-medium text-[11px] tracking-[0.06em] uppercase transition-colors duration-200 cursor-pointer"
                style={{ color: "var(--ink-400)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--sand-100)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-400)")}
              >
                {label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/steve-jun-74827379/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 cursor-pointer"
              style={{ color: "var(--ink-400)" }}
              aria-label="Steve Jun on LinkedIn"
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--sand-100)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-400)")}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
