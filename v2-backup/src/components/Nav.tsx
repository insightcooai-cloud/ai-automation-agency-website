"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how-i-work", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
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
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div
        className={`w-full max-w-[700px] rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-[color:var(--color-bg-canvas)]/85 backdrop-blur-[12px] border border-[color:var(--color-border-soft)]/50 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-[color:var(--color-bg-canvas)]/60 backdrop-blur-[8px] border border-[color:var(--color-border-soft)]/30"
        }`}
      >
        <div className="h-14 px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] focus-visible:ring-offset-2 rounded-md"
            aria-label="Blueprint Labs home"
          >
            <div className="w-7 h-7 rounded-lg bg-[color:var(--color-bg-inverse)] grid grid-cols-2 gap-[3.5px] p-[5.5px]">
              <div className="bg-[color:var(--color-text-inverse)] rounded-[1.5px]" />
              <div className="bg-[color:var(--color-text-inverse)]/35 rounded-[1.5px]" />
              <div className="bg-[color:var(--color-text-inverse)]/35 rounded-[1.5px]" />
              <div className="bg-[color:var(--color-text-inverse)] rounded-[1.5px]" />
            </div>
            <span className="font-serif text-base text-[color:var(--color-text-primary)]">
              Blueprint Labs
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text-primary)] transition-colors duration-200 cursor-pointer py-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] focus-visible:ring-offset-2 rounded-sm"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-[color:var(--color-text-primary)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center text-sm font-medium px-5 py-2 rounded-full bg-[color:var(--color-bg-inverse)] text-[color:var(--color-text-inverse)] hover:bg-[color:var(--color-accent-hover)] transition-colors duration-200 cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] focus-visible:ring-offset-2"
          >
            Get in touch
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 text-[color:var(--color-text-primary)] cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] rounded-md"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
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
          className="absolute top-[calc(100%+8px)] left-4 right-4 md:hidden bg-[color:var(--color-bg-canvas)]/95 backdrop-blur-[12px] border border-[color:var(--color-border-soft)]/50 rounded-2xl px-6 py-5 flex flex-col gap-4 shadow-lg"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text-primary)] transition-colors cursor-pointer min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] rounded-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium px-5 py-3 rounded-full bg-[color:var(--color-bg-inverse)] text-[color:var(--color-text-inverse)] text-center cursor-pointer min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] focus-visible:ring-offset-2"
          >
            Get in touch
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
