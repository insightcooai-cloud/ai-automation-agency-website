"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "How long does a typical engagement take?",
    a: "The readiness audit takes 1–2 weeks. A full assess → guide → build → enable engagement typically runs 6–12 weeks, depending on scope. We work in focused sprints so you see results quickly — not months of consulting before anything happens.",
  },
  {
    q: "How is this different from an AI consulting firm?",
    a: "Most AI consultants deliver strategy decks. The most common complaint SMBs have — backed by multiple independent surveys — is that engagements produce slide decks without working automations, and disappear after delivery without training or change management support.\n\nBlueprint Labs is built differently: we start with a free readiness audit, build working automations and agents (not presentations), train your team on how to use them, and stay as an ongoing partner through adoption. Every engagement is founder-led — you work with Steve directly, not handed off to a junior team.",
  },
  {
    q: "Do you work with our existing tools?",
    a: "Absolutely. We start by evaluating what you already have — most teams don't need new tools, they need their current tools configured properly and their workflows redesigned to actually use them. We optimize what exists before recommending anything new.",
  },
  {
    q: "What if we don't know where to start?",
    a: "That's exactly what the readiness audit is designed for. You don't need to have an AI strategy before reaching out. We'll assess your current state, show you what's possible, and help you prioritize by impact and feasibility. No commitment required — just an honest conversation about where AI can realistically help your business.",
  },
  {
    q: "What happens after handoff?",
    a: "We don't disappear. Every engagement includes team training, documentation, and SOPs. For ongoing support, we offer monthly advisory retainers — adoption monitoring, optimization, and scaling guidance as your AI maturity grows.",
  },
  {
    q: "What does the free AI readiness audit include?",
    a: "A focused diagnostic covering your current AI usage, data readiness, workflow pain points, and team capabilities. You'll walk away with a clear picture of where you stand and the 2–3 highest-impact opportunities specific to your business — not a generic report, but an honest assessment of what's realistic for your team. Most importantly, you'll walk away knowing your top 2–3 highest-ROI workflow opportunities — the ones most likely to pay back within 90 days.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
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
          {faq.q}
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
              {faq.a.split("\n\n").map((para, i) => (
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
              FAQ
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
            Common questions.
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
            Who is this for?
          </div>
          <p
            className="font-sans font-light text-[16px] leading-[1.8] max-w-2xl"
            style={{ color: "var(--ink-900)" }}
          >
            Companies that have invested in AI tools but aren&apos;t seeing real
            adoption. If your team has ChatGPT licenses, Copilot seats, or other
            AI tools collecting dust — or if leadership keeps saying &ldquo;use
            AI&rdquo; without a plan for how — that&apos;s exactly where we come
            in.
          </p>
          <p
            className="font-sans font-light text-[14px] leading-[1.7] mt-4 max-w-2xl"
            style={{ color: "var(--ink-700)" }}
          >
            Particularly strong fit for mid-size businesses (10–500 employees)
            where every workflow improvement is felt immediately across the whole team.
          </p>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
