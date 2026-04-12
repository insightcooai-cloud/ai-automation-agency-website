"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, type Lang } from "@/lib/translations";

type FAQData = { q: { en: string; kr: string }; a: { en: string; kr: string } };

function FAQItem({ faq, index, lang }: { faq: FAQData; index: number; lang: Lang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={{ borderTop: "1px solid var(--sand-300)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left cursor-pointer group focus-visible:outline-none rounded-sm"
        aria-expanded={open}
      >
        <span
          className="font-serif text-lg md:text-xl leading-snug transition-colors duration-300"
          style={{ color: open ? "var(--amber-400)" : "var(--ink-900)" }}
        >
          {faq.q[lang]}
        </span>
        <span
          className="flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center transition-all duration-300"
          style={{
            color: "var(--ink-400)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 max-w-2xl flex flex-col gap-4">
              {faq.a[lang].split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="font-sans font-light text-[15px] leading-[1.8]"
                  style={{ color: "var(--ink-700)" }}
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { lang } = useLanguage();
  const t = translations.faq;
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-32 md:py-44 px-6 relative">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span
              className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase"
              style={{ color: "var(--ink-400)" }}
            >
              {t.sectionLabel[lang]}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-serif mb-6"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--ink-900)",
            }}
          >
            {t.headline[lang]}
          </motion.h2>
        </div>

        {/* Who is this for — always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="mb-12 p-8 rounded-[2px]"
          style={{
            background: "white",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
            borderTop: "2px solid var(--amber-400)",
          }}
        >
          <div
            className="font-sans font-medium text-[11px] tracking-[0.12em] uppercase mb-4"
            style={{ color: "var(--amber-400)" }}
          >
            {t.whoLabel[lang]}
          </div>
          <p
            className="font-sans font-light text-[16px] leading-[1.8] max-w-2xl"
            style={{ color: "var(--ink-900)" }}
          >
            {t.whoBody[lang]}
          </p>
          <p
            className="font-sans font-light text-[14px] leading-[1.7] mt-4 max-w-2xl"
            style={{ color: "var(--ink-700)" }}
          >
            {t.whoFit[lang]}
          </p>
        </motion.div>

        <div>
          {t.items.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} lang={lang} />
          ))}
        </div>

        {/* Post-FAQ CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          style={{ borderTop: "1px solid var(--sand-300)" }}
        >
          <div>
            <p className="font-serif mb-2" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", lineHeight: 1.2, color: "var(--ink-900)" }}>
              {t.stillQuestions[lang]}
            </p>
            <p className="font-sans font-light text-[15px]" style={{ color: "var(--ink-400)" }}>
              {t.stillSubtext[lang]}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="/assessment"
              className="inline-flex items-center px-7 py-3.5 text-[11px] font-medium tracking-[0.08em] uppercase cursor-pointer focus-visible:outline-none min-h-[48px] transition-all duration-300"
              style={{ background: "var(--ink-900)", color: "var(--sand-50)", borderRadius: "2px" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--amber-400)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink-900)")}
            >
              {t.cta1[lang]}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 text-[11px] font-medium tracking-[0.08em] uppercase cursor-pointer focus-visible:outline-none min-h-[48px] transition-all duration-300"
              style={{ border: "1px solid var(--sand-300)", color: "var(--ink-700)", borderRadius: "2px", background: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--ink-900)"; e.currentTarget.style.color = "var(--ink-900)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--sand-300)"; e.currentTarget.style.color = "var(--ink-700)"; }}
            >
              {t.cta2[lang]}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
