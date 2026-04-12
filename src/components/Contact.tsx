"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations.contact;
  const challenges = t.challenges[lang];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", challenge: "", preferredLang: "" });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full py-3 bg-transparent text-[15px] placeholder-[rgba(253,250,245,0.35)] outline-none transition-all duration-300 min-h-[48px]";
  const inputStyle = {
    color: "var(--sand-50)",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
  };
  const labelClass =
    "block font-sans font-medium text-[11px] tracking-[0.1em] uppercase mb-2";
  const labelStyle = { color: "var(--sand-200)" };

  return (
    <section id="contact" className="pt-24 md:pt-32 px-6 relative z-10" style={{ background: "var(--charcoal)", paddingBottom: "120px" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p
              className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase mb-10"
              style={{ color: "var(--ink-400)" }}
            >
              {t.sectionLabel[lang]}
            </p>
            <h2
              className="font-serif mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              {t.headline[lang]}
            </h2>
            <p
              className="font-sans font-light text-[15px] leading-[1.8] mb-6"
              style={{ color: "var(--sand-200)" }}
            >
              {t.subtitle[lang]}
            </p>
            <div
              className="rounded-[2px] p-4"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="font-sans font-medium text-[11px] tracking-[0.1em] uppercase mb-2" style={{ color: "var(--amber-400)" }}>
                {t.howLabel[lang]}
              </p>
              <p className="font-sans font-light text-[13px] leading-[1.7]" style={{ color: "var(--sand-300)" }}>
                {t.howBody[lang]}
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M5 10l3 3 7-7" stroke="var(--amber-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-serif text-xl mb-2" style={{ color: "var(--sand-50)" }}>
                  {t.successTitle[lang]}
                </p>
                <p className="font-sans font-light text-[15px]" style={{ color: "var(--sand-200)" }}>
                  {t.successSubtext[lang]}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="contact-name" className={labelClass} style={labelStyle}>
                      {t.labelName[lang]} <span style={{ color: "rgba(253,250,245,0.3)" }}>{t.labelRequired[lang]}</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      placeholder={t.placeholderName[lang]}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--amber-400)")}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.2)")}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass} style={labelStyle}>
                      {t.labelEmail[lang]} <span style={{ color: "rgba(253,250,245,0.3)" }}>{t.labelRequired[lang]}</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      placeholder={t.placeholderEmail[lang]}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--amber-400)")}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.2)")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="contact-challenge" className={labelClass} style={labelStyle}>
                      {t.labelChallenge[lang]}
                    </label>
                    <select
                      id="contact-challenge"
                      value={form.challenge}
                      onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                      className={`${inputClass} cursor-pointer appearance-none`}
                      style={{
                        ...inputStyle,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23B8B2A4' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0 center",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--amber-400)")}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.2)")}
                    >
                      <option value="" disabled style={{ background: "#1C1C1A" }}>{t.placeholderSelect[lang]}</option>
                      {challenges.map((c) => (
                        <option key={c} value={c} style={{ background: "#1C1C1A", color: "var(--sand-50)" }}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-lang" className={labelClass} style={labelStyle}>
                      {t.labelLang[lang]}
                    </label>
                    <select
                      id="contact-lang"
                      value={form.preferredLang}
                      onChange={(e) => setForm({ ...form, preferredLang: e.target.value })}
                      className={`${inputClass} cursor-pointer appearance-none`}
                      style={{
                        ...inputStyle,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23B8B2A4' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0 center",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--amber-400)")}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.2)")}
                    >
                      <option value="" disabled style={{ background: "#1C1C1A" }}>{t.placeholderLang[lang]}</option>
                      {t.langOptions[lang].map((o) => (
                        <option key={o} value={o} style={{ background: "#1C1C1A", color: "var(--sand-50)" }}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="self-start font-sans font-600 text-[11px] tracking-[0.08em] uppercase px-8 py-4 cursor-pointer disabled:opacity-50 transition-all duration-250 focus-visible:outline-none min-h-[48px]"
                  style={{
                    background: "var(--sand-50)",
                    color: "var(--charcoal)",
                    borderRadius: "2px",
                    border: "none",
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--sand-50)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {sending ? t.sendingBtn[lang] : t.submitBtn[lang]}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
