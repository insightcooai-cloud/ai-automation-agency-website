"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, cx: 0, cy: 0, dx: 0, dy: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    cursor.style.opacity = "1";
    dot.style.opacity = "1";

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };
    document.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      const p = pos.current;
      p.cx += (p.mx - p.cx) * 0.12;
      p.cy += (p.my - p.cy) * 0.12;
      p.dx += (p.mx - p.dx) * 0.6;
      p.dy += (p.my - p.dy) * 0.6;
      cursor.style.left = p.cx + "px";
      cursor.style.top  = p.cy + "px";
      dot.style.left    = p.dx + "px";
      dot.style.top     = p.dy + "px";
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    const addHover = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [role='button']"))
        cursor.classList.add("cursor--hover");
      else
        cursor.classList.remove("cursor--hover");
    };
    document.addEventListener("mouseover", addHover, { passive: true });

    return () => {
      cancelAnimationFrame(raf.current);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", addHover);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} id="cursor" />
      <div ref={dotRef}   id="cursor-dot" />
    </>
  );
}
