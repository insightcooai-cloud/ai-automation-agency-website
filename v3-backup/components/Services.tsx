"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    n: "01",
    title: "Strategy & Audits",
    desc: "We evaluate your current data, workflows, and tech stack to understand where AI can deliver real returns — and where it can't yet. We build clear, actionable roadmaps instead of hype.",
    tags: ["Audit", "Gap Analysis", "Roadmap"],
    image: "/images/service-strategy.png",
  },
  {
    n: "02",
    title: "Workflow Automation",
    desc: "We identify high-ROI workflows and redesign them around AI — from customer intake to reporting to internal knowledge retrieval. Built on resilient tools like n8n and Make.",
    tags: ["Process Redesign", "n8n", "Integration"],
    image: "/images/service-automation.png",
  },
  {
    n: "03",
    title: "Custom AI Development",
    desc: "We build the agents, copilots, dashboards, and automations your team actually needs. Configured specifically for your operations, avoiding generic templates entirely.",
    tags: ["AI Agents", "Copilots", "Dashboards"],
    image: "/images/service-custom.png",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const isEven = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center py-24 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Text column */}
      <div className="w-full md:w-1/3 flex flex-col justify-center order-2 md:order-none">
        <span className="text-xs font-semibold tracking-widest text-[color:var(--color-text-tertiary)] tabular-nums block mb-6">
          {service.n}
        </span>
        <h3 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-[color:var(--color-text-primary)] mb-6">
          {service.title}
        </h3>
        <p className="text-[17px] text-[color:var(--color-text-secondary)] leading-[1.6] mb-8">
          {service.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[13px] px-4 py-2 rounded-[90px] bg-[color:var(--color-border-soft)] text-[color:var(--color-text-primary)] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image column */}
      <div className="w-full md:w-2/3 order-1 md:order-none">
        <div className="relative aspect-[16/10] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#e0ded6]">
          <motion.img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            animate={inView ? { scale: 1 } : { scale: 1.15 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="services" className="py-24 md:py-32 px-6 relative">
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-[color:var(--color-bg-subtle)]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 120px, black calc(100% - 120px), transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 120px, black calc(100% - 120px), transparent 100%)"
        }}
      />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div ref={headerRef} className="mb-10 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--color-text-tertiary)] mb-8"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-[color:var(--color-text-primary)] max-w-4xl"
          >
            Everything you need to make AI work in production.
          </motion.h2>
        </div>

        <div>
          {services.map((s, i) => (
            <ServiceCard key={s.n} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
