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
  const [lang, setLang] = useState<"en" | "kr">("en");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
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
            ? "bg-[#0A0A0B]/80 backdrop-blur-[16px] border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto h-16 px-6 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#"
            className="text-[13px] font-medium tracking-[0.12em] uppercase text-white/90 hover:text-white transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
            aria-label="Blueprint Labs home"
          >
            Blueprint Labs
          </a>

          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-white/50 hover:text-white transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
              >
                {link.label}
              </a>
            ))}

            {/* Language toggle */}
            <div className="flex items-center gap-1 ml-1" role="group" aria-label="Language selection">
              <button
                onClick={() => setLang("en")}
                className={`text-[12px] font-medium tracking-[0.06em] px-2.5 py-1 rounded transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 ${
                  lang === "en"
                    ? "text-white bg-white/10"
                    : "text-white/30 hover:text-white/60"
                }`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <span className="text-white/20 text-[11px]">|</span>
              <button
                onClick={() => setLang("kr")}
                title="한국어 버전 준비 중"
                className={`text-[12px] font-medium tracking-[0.06em] px-2.5 py-1 rounded transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 ${
                  lang === "kr"
                    ? "text-white bg-white/10"
                    : "text-white/30 hover:text-white/60"
                }`}
                aria-pressed={lang === "kr"}
              >
                한국어
              </button>
            </div>

            <a
              href="#contact"
              className="text-[13px] font-medium px-5 py-2.5 rounded-[90px] border border-white/20 text-white/80 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer min-h-[40px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ml-1"
            >
              Work with us
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-md text-white"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-[1.5px] bg-current rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[1.5px] bg-current rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] bg-current rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 md:hidden bg-[#0A0A0B]/95 backdrop-blur-[16px] px-6 py-6 flex flex-col gap-5 border-b border-white/[0.06]"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-white/50 hover:text-white transition-colors cursor-pointer min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile language toggle */}
          <div className="flex items-center gap-2 py-1">
            <span className="text-[12px] text-white/30">Language:</span>
            <button
              onClick={() => setLang("en")}
              className={`text-[12px] font-medium px-2.5 py-1 rounded cursor-pointer transition-all duration-200 ${
                lang === "en" ? "text-white bg-white/10" : "text-white/30"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("kr")}
              title="한국어 버전 준비 중"
              className={`text-[12px] font-medium px-2.5 py-1 rounded cursor-pointer transition-all duration-200 ${
                lang === "kr" ? "text-white bg-white/10" : "text-white/30"
              }`}
            >
              한국어
            </button>
          </div>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-[13px] font-medium px-5 py-3.5 rounded-[90px] bg-white text-black text-center cursor-pointer min-h-[44px] flex items-center justify-center"
          >
            Work with us
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
