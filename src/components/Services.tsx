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

function ServiceRow({
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
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
      className="group flex flex-col sm:flex-row gap-6 py-8 border-b border-[#E4E4E7] hover:border-[#A1A1AA] transition-colors duration-200 cursor-default"
    >
      <div className="sm:w-10 text-xs text-[#A1A1AA] pt-1 flex-shrink-0 tabular-nums">
        {service.n}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-xl md:text-2xl text-[#18181B] mb-2.5 group-hover:text-[#18181B] transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-[#71717A] text-base leading-relaxed max-w-2xl">
          {service.description}
        </p>
      </div>
      <div className="hidden sm:flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#A1A1AA] flex-shrink-0">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 10h12M10 4l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 md:py-40 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.15em] uppercase text-[#A1A1AA] mb-6"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-bold text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] tracking-tight text-[#18181B] max-w-xl mb-16"
            style={{ textWrap: "balance" }}
          >
            Everything you need to make AI work.
          </motion.h2>
        </div>

        {/* Service list */}
        <div className="border-t border-[#E4E4E7]">
          {services.map((s, i) => (
            <ServiceRow key={s.n} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
