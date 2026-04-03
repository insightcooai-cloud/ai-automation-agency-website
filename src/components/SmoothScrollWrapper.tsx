"use client";

import { useEffect } from "react";

const sectionBgs: Record<string, string> = {
  hero:               "#FDFAF5",
  problem:            "#EEE4CC",
  services:           "#E8E0D0",
  "blueprint-method": "#F0EAE0",
  results:            "#EBE3D5",
  about:              "#F4EDE5",
  faq:                "#E9E2D8",
  contact:            "#1C1C1A",
};

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = (entry.target as HTMLElement).id;
          const bg = sectionBgs[id];
          if (!bg) return;
          document.body.style.backgroundColor = bg;
          if (id === "contact") {
            document.body.classList.add("body--dark");
          } else {
            document.body.classList.remove("body--dark");
          }
        });
      },
      { threshold: 0.25 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
