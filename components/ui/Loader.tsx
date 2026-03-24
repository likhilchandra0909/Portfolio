"use client";

import { useEffect, useState } from "react";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 500);
    const t2 = setTimeout(() => setPhase("out"),  1800);
    const t3 = setTimeout(() => onFinish(),        2300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#020204] flex flex-col items-center justify-center"
      style={{
        opacity:        phase === "out" ? 0 : 1,
        pointerEvents:  phase === "out" ? "none" : "all",
        transition:     "opacity 0.5s ease",
      }}
    >
      {/* Monogram */}
      <div
        className="font-display text-8xl font-black tracking-tight select-none"
        style={{
          background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity:   phase === "in" ? 0 : 1,
          transform: phase === "in" ? "scale(0.75) translateY(16px)" : "scale(1) translateY(0)",
          transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        LC
      </div>

      {/* Expanding line */}
      <div
        style={{
          height: 1,
          marginTop: 20,
          background: "linear-gradient(to right, transparent, #6366f1, transparent)",
          width:      phase === "in" ? 0 : 100,
          transition: "width 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s",
        }}
      />

      {/* Label */}
      <p
        className="font-body mt-5 text-[10px] tracking-[0.45em] uppercase text-white/25"
        style={{
          opacity:    phase === "in" ? 0 : 1,
          transition: "opacity 0.6s ease 0.4s",
        }}
      >
        Portfolio
      </p>
    </div>
  );
}