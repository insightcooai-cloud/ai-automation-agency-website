"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "Who is this for?",
    a: "Companies that have invested in AI tools but aren't seeing real adoption. If your team has ChatGPT licenses, Copilot seats, or other AI tools collecting dust — or if leadership keeps saying 'use AI' without a plan for how — that's exactly where we come in. Particularly strong fit for mid-size businesses (10–500 employees) where every workflow improvement is felt immediately.",
  },
  {
    q: "What does the free AI readiness audit include?",
    a: "A focused diagnostic covering your current AI usage, data readiness, workflow pain points, and team capabilities. You'll walk away with a clear picture of where you stand and the 2–3 highest-impact opportunities specific to your business — not a generic report, but an honest assessment of what's realistic for your team.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "The readiness audit takes 1–2 weeks. A full assess → guide → build → enable engagement typically runs 6–12 weeks, depending on scope. We work in focused sprints so you see results quickly — not months of consulting before anything happens.",
  },
  {
    q: "How is this different from an AI consulting firm?",
    a: "Most firms sell strategy decks or deploy tools without context. We do both — we assess, educate, build, and train. You get one partner from assessment through adoption, not a chain of handoffs between strategists and developers. And we don't disappear after the slide deck. We stay until your team is actually using the tools independently.",
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
      className="mb-2"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] rounded-sm"
        aria-expanded={open}
      >
        <span className="font-serif text-lg md:text-xl text-[color:var(--color-text-primary)] leading-snug group-hover:text-[color:var(--color-accent)] transition-colors duration-300">
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center text-[color:var(--color-text-tertiary)] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
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
            <p className="text-[15px] text-[color:var(--color-text-secondary)] leading-relaxed pb-7 max-w-2xl">
              {faq.a}
            </p>
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
          {/* Structural label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-[color:var(--color-text-tertiary)]">
              05 — FAQ
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] text-[color:var(--color-text-primary)] mb-16"
          >
            Common questions.
          </motion.h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
