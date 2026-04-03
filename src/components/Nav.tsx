"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#services",          label: "Services" },
  { href: "#blueprint-method",  label: "Approach" },
  { href: "#about",             label: "About" },
  { href: "#contact",           label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "kr">("en");
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Convert hash-only links to absolute when not on home page
  const href = (h: string) => (isHome ? h : `/${h}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new MutationObserver(() => {
      setDark(document.body.classList.contains("body--dark"));
    });
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const navBg = scrolled
    ? dark
      ? "bg-[rgba(28,28,26,0.88)] backdrop-blur-[16px] border-b border-white/[0.08]"
      : "bg-[rgba(253,250,245,0.88)] backdrop-blur-[16px] border-b border-[rgba(26,24,20,0.07)]"
    : "bg-transparent";

  const textColor = dark ? "text-[#F7F2E8]" : "text-[#3D3A34]";
  const linkColor = dark ? "text-[#EDE6D6]/70 hover:text-[#F7F2E8]" : "text-[#7A7568] hover:text-[#1A1814]";
  const btnStyle  = dark
    ? "border-white/20 text-[#F7F2E8]/80 hover:bg-white hover:text-[#1A1814]"
    : "border-[rgba(26,24,20,0.2)] text-[#3D3A34] hover:bg-[#1A1814] hover:text-[#FDFAF5]";

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className={`transition-all duration-400 ${navBg}`}>
        <div className="max-w-[1400px] mx-auto h-16 px-6 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href={isHome ? "#" : "/"}
            className={`text-[11px] font-medium tracking-[0.15em] uppercase cursor-pointer focus-visible:outline-none rounded-sm transition-colors duration-300 ${textColor}`}
            aria-label="Blueprint Labs home"
          >
            Blueprint Labs
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={href(link.href)}
                className={`nav-link text-[11px] font-medium tracking-[0.06em] uppercase transition-colors duration-300 cursor-pointer focus-visible:outline-none rounded-sm ${linkColor}`}
              >
                {link.label}
              </a>
            ))}

            {/* Free Assessment — primary CTA in nav */}
            <a
              href="/assessment"
              className={`nav-link flex items-center gap-1.5 text-[11px] font-medium tracking-[0.06em] uppercase transition-colors duration-300 cursor-pointer focus-visible:outline-none rounded-sm ${
                pathname === "/assessment"
                  ? "text-[#C8922A]"
                  : linkColor
              }`}
            >
              <span
                className="assessment-nav-dot w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: "var(--amber-400)" }}
                aria-hidden="true"
              />
              Free Assessment
            </a>

            {/* Language toggle */}
            <div className="flex items-center gap-1" role="group" aria-label="Language selection">
              <button
                onClick={() => setLang("en")}
                className={`text-[11px] font-medium tracking-[0.06em] px-2.5 py-1 rounded transition-all duration-200 cursor-pointer focus-visible:outline-none ${
                  lang === "en"
                    ? dark ? "text-[#F7F2E8] bg-white/10" : "text-[#1A1814] bg-[#1A1814]/08"
                    : dark ? "text-white/30 hover:text-white/60" : "text-[#B8B2A4] hover:text-[#7A7568]"
                }`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <span className={`text-[10px] ${dark ? "text-white/20" : "text-[#DDD4BE]"}`}>|</span>
              <button
                onClick={() => setLang("kr")}
                title="한국어 버전 준비 중"
                className={`text-[11px] font-medium tracking-[0.06em] px-2.5 py-1 rounded transition-all duration-200 cursor-pointer focus-visible:outline-none ${
                  lang === "kr"
                    ? dark ? "text-[#F7F2E8] bg-white/10" : "text-[#1A1814] bg-[#1A1814]/08"
                    : dark ? "text-white/30 hover:text-white/60" : "text-[#B8B2A4] hover:text-[#7A7568]"
                }`}
                aria-pressed={lang === "kr"}
              >
                한국어
              </button>
            </div>

            <a
              href={href("#contact")}
              className={`text-[11px] font-medium tracking-[0.06em] uppercase px-5 py-2.5 rounded-[2px] border transition-all duration-300 cursor-pointer min-h-[40px] flex items-center focus-visible:outline-none ml-1 ${btnStyle}`}
            >
              Work with us
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`md:hidden p-2 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none rounded-md transition-colors duration-300 ${textColor}`}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-[1px] bg-current rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[1px] bg-current rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1px] bg-current rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute top-full left-0 right-0 md:hidden backdrop-blur-[16px] px-6 py-6 flex flex-col gap-5 border-b ${
            dark
              ? "bg-[rgba(28,28,26,0.95)] border-white/[0.08]"
              : "bg-[rgba(253,250,245,0.97)] border-[rgba(26,24,20,0.06)]"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={href(link.href)}
              onClick={() => setMenuOpen(false)}
              className={`text-[11px] font-medium tracking-[0.08em] uppercase transition-colors cursor-pointer min-h-[44px] flex items-center ${linkColor}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/assessment"
            onClick={() => setMenuOpen(false)}
            className={`text-[11px] font-medium tracking-[0.08em] uppercase transition-colors cursor-pointer min-h-[44px] flex items-center gap-1.5 ${linkColor}`}
          >
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--amber-400)" }} aria-hidden="true" />
            Free Assessment
          </a>
          <div className="flex items-center gap-2 py-1">
            <span className={`text-[11px] tracking-[0.08em] uppercase ${dark ? "text-white/30" : "text-[#B8B2A4]"}`}>Lang:</span>
            <button onClick={() => setLang("en")} className={`text-[11px] font-medium px-2.5 py-1 rounded cursor-pointer ${lang === "en" ? (dark ? "text-white bg-white/10" : "text-[#1A1814] bg-[#1A1814]/08") : (dark ? "text-white/30" : "text-[#B8B2A4]")}`}>EN</button>
            <button onClick={() => setLang("kr")} title="한국어 버전 준비 중" className={`text-[11px] font-medium px-2.5 py-1 rounded cursor-pointer ${lang === "kr" ? (dark ? "text-white bg-white/10" : "text-[#1A1814] bg-[#1A1814]/08") : (dark ? "text-white/30" : "text-[#B8B2A4]")}`}>한국어</button>
          </div>
          <a
            href={href("#contact")}
            onClick={() => setMenuOpen(false)}
            className={`text-[11px] font-medium tracking-[0.08em] uppercase px-5 py-3.5 rounded-[2px] text-center cursor-pointer min-h-[44px] flex items-center justify-center ${
              dark ? "bg-[#F7F2E8] text-[#1A1814]" : "bg-[#1A1814] text-[#FDFAF5]"
            }`}
          >
            Work with us
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
