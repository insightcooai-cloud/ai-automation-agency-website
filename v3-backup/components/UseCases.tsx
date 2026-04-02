"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const usecases = [
  {
    category: "Customer Operations",
    title: "Customer communication & intake",
    desc: "Automate inbound inquiries, route requests, and respond to common questions — so your team handles only what requires a human.",
    impact: "Faster response, fewer dropped leads",
    fit: "High inquiry volume, phone-heavy operations",
  },
  {
    category: "Sales & Revenue",
    title: "Sales follow-up & lead prioritization",
    desc: "AI that surfaces which leads to act on, drafts outreach, and keeps your pipeline moving — without adding headcount.",
    impact: "Higher conversion, shorter sales cycles",
    fit: "B2B vendors, distributors, service businesses",
  },
  {
    category: "Knowledge & Internal Ops",
    title: "Internal knowledge retrieval",
    desc: "Build an AI layer over your SOPs, product docs, and institutional knowledge — so your team stops asking the same questions twice.",
    impact: "Faster onboarding, consistent answers",
    fit: "Multi-location, high staff turnover, complex products",
  },
  {
    category: "Back-Office",
    title: "Invoice & document processing",
    desc: "Extract, classify, and route documents automatically. Eliminate manual data entry from purchase orders, invoices, and contracts.",
    impact: "Hours saved per week, fewer errors",
    fit: "Vendors, distributors, procurement-heavy operations",
  },
  {
    category: "Data & Reporting",
    title: "Business intelligence & reporting",
    desc: "Turn fragmented data into dashboards that surface what actually matters — inventory, margins, team performance, customer trends.",
    impact: "Faster decisions, visible operations",
    fit: "Businesses running on spreadsheets or disconnected tools",
  },
  {
    category: "Team Capability",
    title: "AI capability building",
    desc: "Give your team more than access — give them context. Role-specific training and workflows that build real confidence with AI.",
    impact: "Consistent adoption, lasting ROI",
    fit: "Any business where tools are installed but underused",
  },
];

function UseCaseCard({ item, index }: { item: (typeof usecases)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex flex-col gap-4 p-7 rounded-xl border border-[color:var(--color-border-default)] bg-[color:var(--color-bg-canvas)] hover:border-[color:var(--color-accent)]/40 hover:bg-[color:var(--color-bg-subtle)] transition-all duration-300 cursor-default"
    >
      <div>
        <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[color:var(--color-accent)]">
          {item.category}
        </span>
      </div>
      <h3 className="font-serif text-xl leading-snug text-[color:var(--color-text-primary)]">
        {item.title}
      </h3>
      <p className="text-sm text-[color:var(--color-text-secondary)] leading-relaxed flex-1">
        {item.desc}
      </p>
      <div className="pt-4 border-t border-[color:var(--color-border-soft)] flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-[color:var(--color-text-tertiary)] mt-0.5 w-12 flex-shrink-0">
            Impact
          </span>
          <span className="text-[13px] text-[color:var(--color-text-secondary)]">{item.impact}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-[color:var(--color-text-tertiary)] mt-0.5 w-12 flex-shrink-0">
            Best for
          </span>
          <span className="text-[13px] text-[color:var(--color-text-secondary)]">{item.fit}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function UseCases() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 md:py-40 px-6 bg-[color:var(--color-bg-canvas)]">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[color:var(--color-text-tertiary)] mb-6"
          >
            Where We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.12] tracking-tight text-[color:var(--color-text-primary)] max-w-xl mb-5"
          >
            High-ROI workflows for growing businesses.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-lg text-[color:var(--color-text-secondary)] max-w-lg leading-relaxed mb-16"
          >
            We focus on the workflows that deliver measurable returns — not
            flashy demos. These are the use cases where AI reliably earns its
            cost within months.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {usecases.map((item, i) => (
            <UseCaseCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
