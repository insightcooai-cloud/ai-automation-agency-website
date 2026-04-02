"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 md:py-40 px-6 bg-[color:var(--color-bg-canvas)] relative overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[color:var(--color-text-tertiary)] mb-6">
              Get in Touch
            </p>
            <h2
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.12] tracking-normal text-[color:var(--color-text-primary)] mb-6"
            >
              Let&apos;s start with a conversation.
            </h2>
            <p className="text-[color:var(--color-text-secondary)] text-lg leading-relaxed mb-10 max-w-sm">
              No pitch. No pressure. Tell me what you&apos;re working on and
              we&apos;ll figure out if there&apos;s a fit.
            </p>

            {/* Trust signals */}
            <div className="flex flex-col gap-4">
              {[
                "Free initial discovery call",
                "Response within 24 hours",
                "Honest assessment \u2014 no hard sell",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[color:var(--color-accent-soft)] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-[color:var(--color-accent)]"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 6l2.5 2.5 4.5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[color:var(--color-text-secondary)]">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.14,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <div className="p-12 rounded-xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border-default)] text-center" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-12 h-12 rounded-full bg-[color:var(--color-accent-soft)] border border-[color:var(--color-border-default)] flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-5 h-5 text-[color:var(--color-accent)]"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10l4 4 8-8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-[color:var(--color-text-primary)] mb-2">
                  Message received.
                </h3>
                <p className="text-[color:var(--color-text-secondary)] text-sm">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border-default)] flex flex-col gap-5"
                style={{ boxShadow: "var(--shadow-card)" }}
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[13px] font-medium text-[color:var(--color-text-secondary)] mb-2"
                    >
                      Name{" "}
                      <span className="text-[color:var(--color-text-tertiary)]">(required)</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-[color:var(--color-border-soft)] bg-[color:var(--color-bg-canvas)] text-base text-[color:var(--color-text-primary)] placeholder-[color:var(--color-text-tertiary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:border-transparent transition-all duration-200 min-h-[48px]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[13px] font-medium text-[color:var(--color-text-secondary)] mb-2"
                    >
                      Email{" "}
                      <span className="text-[color:var(--color-text-tertiary)]">(required)</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-[color:var(--color-border-soft)] bg-[color:var(--color-bg-canvas)] text-base text-[color:var(--color-text-primary)] placeholder-[color:var(--color-text-tertiary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:border-transparent transition-all duration-200 min-h-[48px]"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[13px] font-medium text-[color:var(--color-text-secondary)] mb-2"
                  >
                    What are you working on?
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded border border-[color:var(--color-border-soft)] bg-[color:var(--color-bg-canvas)] text-base text-[color:var(--color-text-primary)] placeholder-[color:var(--color-text-tertiary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your business and what you're trying to solve..."
                  />
                </div>
                {error && (
                  <p className="text-sm text-[color:var(--color-error)]">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 rounded-full bg-[color:var(--color-bg-inverse)] text-[color:var(--color-text-inverse)] text-sm font-medium hover:bg-[color:var(--color-accent-hover)] transition-colors duration-200 cursor-pointer min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
