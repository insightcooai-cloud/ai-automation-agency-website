"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#blueprint-method", label: "Approach" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[color:var(--color-bg-canvas)]/90 backdrop-blur-[12px] border-b border-[color:var(--color-border-default)]/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto h-16 px-6 flex items-center justify-between">
          {/* Wordmark — New Genre style */}
          <a
            href="#"
            className="text-[13px] font-medium tracking-[0.12em] uppercase text-[color:var(--color-text-primary)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] rounded-sm"
            aria-label="Blueprint Labs home"
          >
            Blueprint Labs
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text-primary)] transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] rounded-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[13px] font-medium px-5 py-2.5 rounded-[90px] bg-[color:var(--color-text-primary)]/[0.06] text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-text-primary)]/[0.12] transition-all duration-300 cursor-pointer min-h-[40px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)]"
            >
              Work with us
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 text-[color:var(--color-text-primary)] cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] rounded-md"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-[1.5px] bg-current rounded transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 md:hidden bg-[color:var(--color-bg-canvas)]/95 backdrop-blur-[12px] border-b border-[color:var(--color-border-default)]/40 px-6 py-6 flex flex-col gap-5"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text-primary)] transition-colors cursor-pointer min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-[13px] font-medium px-5 py-3.5 rounded-[90px] bg-[color:var(--color-bg-inverse)] text-[color:var(--color-text-inverse)] text-center cursor-pointer min-h-[44px] flex items-center justify-center"
          >
            Work with us
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
