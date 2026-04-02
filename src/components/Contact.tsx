"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
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

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative z-10">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Left — CTA statement */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--color-text-tertiary)] mb-10">
              Get in Touch
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-text-primary)] mb-6">
              Let&apos;s start with an honest conversation.
            </h2>
            <p className="text-[15px] text-[color:var(--color-text-secondary)] leading-relaxed">
              Tell us about your business and where you&apos;re stuck with AI.
              We&apos;ll follow up within 24 hours with honest feedback on
              whether we&apos;re a fit — no pressure, no sales pitch.
            </p>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full border border-[color:var(--color-border-default)] flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-5 h-5 text-[color:var(--color-accent)]"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 10l3 3 7-7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="font-serif text-xl text-[color:var(--color-text-primary)] mb-2">
                  Message sent.
                </p>
                <p className="text-[15px] text-[color:var(--color-text-secondary)]">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[13px] font-medium text-[color:var(--color-text-secondary)] mb-2"
                    >
                      Name{" "}
                      <span className="text-[color:var(--color-text-tertiary)]">
                        (required)
                      </span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[color:var(--color-text-primary)]/[0.04] rounded-lg text-base text-[color:var(--color-text-primary)] placeholder-[color:var(--color-text-tertiary)] outline-none border-none ring-0 focus:bg-[color:var(--color-text-primary)]/[0.08] transition-all duration-200 min-h-[48px]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[13px] font-medium text-[color:var(--color-text-secondary)] mb-2"
                    >
                      Email{" "}
                      <span className="text-[color:var(--color-text-tertiary)]">
                        (required)
                      </span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[color:var(--color-text-primary)]/[0.04] rounded-lg text-base text-[color:var(--color-text-primary)] placeholder-[color:var(--color-text-tertiary)] outline-none border-none ring-0 focus:bg-[color:var(--color-text-primary)]/[0.08] transition-all duration-200 min-h-[48px]"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-[13px] font-medium text-[color:var(--color-text-secondary)] mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[color:var(--color-text-primary)]/[0.04] rounded-lg text-base text-[color:var(--color-text-primary)] placeholder-[color:var(--color-text-tertiary)] outline-none border-none ring-0 focus:bg-[color:var(--color-text-primary)]/[0.08] transition-all duration-200 min-h-[48px]"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-role"
                      className="block text-[13px] font-medium text-[color:var(--color-text-secondary)] mb-2"
                    >
                      Role
                    </label>
                    <input
                      id="contact-role"
                      type="text"
                      value={form.role}
                      onChange={(e) =>
                        setForm({ ...form, role: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[color:var(--color-text-primary)]/[0.04] rounded-lg text-base text-[color:var(--color-text-primary)] placeholder-[color:var(--color-text-tertiary)] outline-none border-none ring-0 focus:bg-[color:var(--color-text-primary)]/[0.08] transition-all duration-200 min-h-[48px]"
                      placeholder="Your role"
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
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[color:var(--color-text-primary)]/[0.04] rounded-lg text-base text-[color:var(--color-text-primary)] placeholder-[color:var(--color-text-tertiary)] outline-none border-none ring-0 focus:bg-[color:var(--color-text-primary)]/[0.08] transition-all duration-200 resize-none"
                    placeholder="Tell us about your business and where you're stuck with AI adoption..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="self-start inline-flex items-center justify-center px-7 py-3.5 rounded-[90px] bg-[color:var(--color-bg-inverse)] text-[color:var(--color-text-inverse)] text-[15px] font-medium hover:bg-[color:var(--color-accent)] transition-colors duration-300 cursor-pointer min-h-[48px] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] focus-visible:ring-offset-2"
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
