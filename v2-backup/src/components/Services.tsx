"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    n: "01",
    title: "AI Readiness Audit",
    description:
      "Before tools, understanding. I assess your data, workflows, and team to map exactly where you are in your AI journey \u2014 and what to tackle first.",
  },
  {
    n: "02",
    title: "Workflow Automation",
    description:
      "Identify the repetitive work costing your team time and eliminate it \u2014 with automations designed around how you actually operate.",
  },
  {
    n: "03",
    title: "AI Agents & Chatbots",
    description:
      "Build agents that handle real tasks \u2014 customer intake, internal Q&A, data lookup \u2014 trained on your content and aligned to your processes.",
  },
  {
    n: "04",
    title: "Data & Reporting",
    description:
      "Turn data into decisions. BI systems and dashboards that surface what matters \u2014 backed by 10+ years of business intelligence experience.",
  },
  {
    n: "05",
    title: "AI Strategy & Consulting",
    description:
      "A trusted partner to cut through vendor noise, evaluate tools, and build a roadmap grounded in your actual business context.",
  },
  {
    n: "06",
    title: "Team AI Education",
    description:
      "Give your team more than access \u2014 give them context. Workshops and training that build real confidence and practical capability with AI.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group p-7 rounded-xl border border-[color:var(--color-border-default)] bg-[color:var(--color-bg-subtle)] hover:bg-[color:var(--color-bg-surface)] hover:shadow-sm transition-all duration-200 cursor-default"
    >
      <div className="text-xs text-[color:var(--color-text-tertiary)] tabular-nums mb-5">
        {service.n}
      </div>
      <h3 className="font-serif text-xl md:text-[1.4rem] text-[color:var(--color-text-primary)] mb-3 leading-snug">
        {service.title}
      </h3>
      <p className="text-[color:var(--color-text-secondary)] text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 md:py-40 px-6 bg-[color:var(--color-bg-canvas)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[color:var(--color-text-tertiary)] mb-6"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.12] tracking-normal text-[color:var(--color-text-primary)] max-w-xl mb-16"
          >
            Everything you need to make AI work.
          </motion.h2>
        </div>

        {/* Service card grid — 2×3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.n} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
