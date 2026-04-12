"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function SocialProof() {
  const { lang } = useLanguage();
  const credentials = translations.socialProof.credentials[lang];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="px-6 relative z-10">
      <div className="max-w-[1400px] mx-auto" ref={ref}>
        <div className="pt-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {credentials.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="py-6"
            >
              <div className="flex items-baseline gap-1.5 mb-2">
                <span
                  className="font-serif tracking-[-0.02em]"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--ink-900)" }}
                >
                  {item.value}
                </span>
                {item.unit && (
                  <span
                    className="font-sans font-medium text-[12px]"
                    style={{ color: "var(--ink-400)" }}
                  >
                    {item.unit}
                  </span>
                )}
              </div>
              <p
                className="font-sans font-light text-[13px] leading-snug"
                style={{ color: "var(--ink-400)" }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="pb-8" />
      </div>
    </section>
  );
}
