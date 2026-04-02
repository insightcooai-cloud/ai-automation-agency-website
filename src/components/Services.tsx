"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    n: "01",
    title: "Assess",
    headline: "AI Readiness Audit",
    desc: "We evaluate your current tools, workflows, data readiness, and team capabilities. You get a clear-eyed view of where you stand — and where AI can realistically move the needle.",
    tags: ["Current State Analysis", "Data Readiness", "Capability Mapping"],
    image: "/images/service-assess.png",
  },
  {
    n: "02",
    title: "Educate",
    headline: "Team Training & Workshops",
    desc: "Hands-on training tailored to your team's actual workflows — not generic prompt tutorials. From leadership buy-in sessions to department-specific enablement.",
    tags: ["Workshops", "Prompt Engineering", "Change Management"],
    image: "/images/service-educate.png",
  },
  {
    n: "03",
    title: "Guide",
    headline: "Strategy & Roadmap",
    desc: "We prioritize use cases by impact and feasibility. You get a phased roadmap grounded in your real constraints — budget, data, and team readiness.",
    tags: ["Use Case Prioritization", "ROI Modeling", "Phased Roadmap"],
    image: "/images/service-guide.png",
  },
  {
    n: "04",
    title: "Build",
    headline: "Custom Implementations",
    desc: "Agents, automations, dashboards, and integrations designed for your specific operations. No generic templates. Built on resilient tools like n8n and Make.",
    tags: ["AI Agents", "Workflow Automation", "Integrations"],
    image: "/images/service-build.png",
  },
  {
    n: "05",
    title: "Enable",
    headline: "Adoption & Ongoing Support",
    desc: "SOPs, documentation, team training, and monthly advisory retainers. We don't disappear after handoff — we ensure AI usage sticks on day 90 and beyond.",
    tags: ["SOPs", "Documentation", "Monthly Retainer"],
    image: "/images/service-enable.png",
  },
];

function ServiceItem({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-16 md:py-20"
    >
      {/* Number */}
      <div className="md:col-span-1">
        <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-[color:var(--color-text-tertiary)]">
          {service.n}
        </span>
      </div>

      {/* Title + Headline */}
      <div className="md:col-span-4">
        <div className="text-[13px] font-medium tracking-[0.06em] uppercase text-[color:var(--color-text-tertiary)] mb-3">
          {service.title}
        </div>
        <h3 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] leading-[1.1] tracking-[-0.02em] text-[color:var(--color-text-primary)]">
          {service.headline}
        </h3>
      </div>

      {/* Description + Tags */}
      <div className="md:col-span-7">
        <p className="text-[16px] text-[color:var(--color-text-secondary)] leading-[1.65] mb-6">
          {service.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[12px] px-3.5 py-1.5 rounded-[90px] bg-[color:var(--color-text-primary)]/[0.06] text-[color:var(--color-text-secondary)] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="services" className="py-32 md:py-44 px-6 relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div ref={headerRef}>
          {/* Structural label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-[color:var(--color-text-tertiary)]">
              02 — What We Do
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-[color:var(--color-text-primary)] max-w-4xl mb-8"
          >
            From assessment to adoption — everything your team needs to make AI
            work.
          </motion.h2>
        </div>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <ServiceItem key={s.n} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
