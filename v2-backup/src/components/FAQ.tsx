"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Who is Blueprint Labs for?",
    a: "Small to mid-sized businesses that want to use AI strategically \u2014 not just adopt the latest tools. If you\u2019re under pressure to \u2018do AI\u2019 but aren\u2019t sure where to start, or if you\u2019ve tried tools that didn\u2019t stick, that\u2019s exactly who I work with.",
  },
  {
    q: "What does the AI readiness audit include?",
    a: "The audit covers your current data infrastructure, existing workflows, team capabilities, and business goals. The output is a report that tells you where you are on the AI maturity scale, which gaps to address first, and a prioritized roadmap of where AI will actually move the needle.",
  },
  {
    q: "Do I need technical staff to work with you?",
    a: "No. I bridge the gap between technical capability and business need. I work directly with owners and operators \u2014 not just IT teams \u2014 and translate everything into plain business language.",
  },
  {
    q: "What tools and platforms do you work with?",
    a: "n8n, Make, Zapier, OpenAI, Anthropic, and custom API integrations. I\u2019m platform-agnostic \u2014 the right tool depends on your workflow, not what\u2019s trending.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "An AI audit takes 1\u20132 weeks. A full engagement \u2014 audit, design, and deployment \u2014 runs 6\u201312 weeks. I also offer ongoing advisory retainers for consistent strategic partnership.",
  },
  {
    q: "How does it start?",
    a: "A free discovery call. No pitch deck, no sales script. We talk about where you are and what\u2019s not working. If there\u2019s a fit, I\u2019ll propose a scope. If there isn\u2019t, I\u2019ll say so honestly.",
  },
];

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-7 text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text-primary)] focus-visible:ring-offset-2 rounded"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-base md:text-lg text-[color:var(--color-text-primary)] group-hover:text-[color:var(--color-text-primary)] transition-colors duration-200 leading-snug">
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent)] rotate-45"
              : "border-[color:var(--color-border-default)] bg-[color:var(--color-bg-subtle)]"
          }`}
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 2v6M2 5h6"
              stroke={isOpen ? "white" : "var(--color-text-tertiary)"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-[color:var(--color-text-secondary)] text-base leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-32 md:py-40 px-6 bg-[color:var(--color-bg-subtle)]">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[color:var(--color-text-tertiary)] mb-6"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.12] tracking-normal text-[color:var(--color-text-primary)] mb-14"
          >
            Common questions.
          </motion.h2>
        </div>

        <div className="max-w-3xl divide-y divide-[color:var(--color-border-default)]">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
