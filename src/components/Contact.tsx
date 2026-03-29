"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-32 md:py-40 px-6 bg-white relative overflow-hidden"
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
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#A1A1AA] mb-6">
              Get in Touch
            </p>
            <h2
              className="font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-[#18181B] mb-6"
              style={{ textWrap: "balance" }}
            >
              Let&apos;s start with a conversation.
            </h2>
            <p className="text-[#71717A] text-lg leading-relaxed mb-10 max-w-sm">
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
                  <span className="w-5 h-5 rounded-full bg-[#F4F4F5] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-[#18181B]"
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
                  <span className="text-sm text-[#71717A]">{text}</span>
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
              <div className="p-12 rounded-2xl bg-[#F4F4F5] border border-[#E4E4E7] text-center">
                <div className="w-12 h-12 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-5 h-5 text-[#18181B]"
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
                <h3 className="font-bold text-xl text-[#18181B] mb-2">
                  Message received.
                </h3>
                <p className="text-[#71717A] text-sm">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-[#F4F4F5] border border-[#E4E4E7] flex flex-col gap-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[#71717A] mb-2"
                    >
                      Name{" "}
                      <span className="text-[#A1A1AA]">(required)</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-[#E4E4E7] bg-white text-base text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18181B] focus-visible:border-transparent transition-all duration-200 min-h-[48px]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[#71717A] mb-2"
                    >
                      Email{" "}
                      <span className="text-[#A1A1AA]">(required)</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-[#E4E4E7] bg-white text-base text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18181B] focus-visible:border-transparent transition-all duration-200 min-h-[48px]"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[#71717A] mb-2"
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
                    className="w-full px-4 py-3 rounded-lg border border-[#E4E4E7] bg-white text-base text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18181B] focus-visible:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your business and what you're trying to solve..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#18181B] text-white text-sm font-medium hover:bg-[#27272A] transition-colors duration-200 cursor-pointer min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18181B] focus-visible:ring-offset-2"
                >
                  Send message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
