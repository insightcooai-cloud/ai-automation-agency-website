"use client";

import { useEffect, useRef } from "react";

export default function GrainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function generateGrain() {
      if (!canvas || !ctx) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
    }

    generateGrain();

    if (reducedMotion) return;

    let frameCount = 0;
    let rafId: number;

    function animateGrain() {
      frameCount++;
      if (frameCount % 3 === 0) generateGrain();
      rafId = requestAnimationFrame(animateGrain);
    }

    rafId = requestAnimationFrame(animateGrain);

    const onResize = () => generateGrain();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 999,
        opacity: 0.028,
        mixBlendMode: "multiply",
      }}
    />
  );
}
