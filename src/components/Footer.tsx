"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const footerLinks = translations.footer.links[lang];
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Chicago",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer
      className="relative z-10 px-6"
      style={{
        background: "var(--charcoal)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        paddingTop: "16px",
      }}
    >
      <div
        className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ minHeight: "72px" }}
      >
        {/* Wordmark */}
        <span
          className="font-sans font-medium text-[11px] tracking-[0.12em] uppercase"
          style={{ color: "var(--ink-200)" }}
        >
          Blueprint Labs
        </span>

        {/* Location + live clock */}
        <span
          className="font-sans"
          style={{
            fontSize: 11,
            color: "var(--ink-400)",
            letterSpacing: "0.04em",
            fontWeight: 300,
          }}
        >
          Austin, TX
          {time && (
            <span className="hidden sm:inline"> · {time}</span>
          )}
        </span>

        {/* Nav links */}
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          {footerLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="font-sans font-medium text-[11px] tracking-[0.06em] uppercase transition-colors duration-200 cursor-pointer"
              style={{ color: "var(--ink-400)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--sand-100)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-400)")}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* LinkedIn + copyright */}
        <div className="flex items-center gap-4">
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
          <p className="font-sans font-light text-[11px]" style={{ color: "var(--ink-400)" }}>
            &copy; {new Date().getFullYear()} Blueprint Labs
          </p>
        </div>
      </div>
    </footer>
  );
}
