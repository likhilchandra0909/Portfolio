"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "3+",  label: "Years Learning" },
  { value: "5+", label: "Projects Built" },
  { value: "6+",  label: "Certifications" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 flex flex-col items-center text-center">
      <style>{`
        @keyframes borderGlow {
          0%,100% { box-shadow: 0 0 20px rgba(99,102,241,0.15), 0 0 60px rgba(59,130,246,0.08); }
          50%      { box-shadow: 0 0 40px rgba(99,102,241,0.3),  0 0 80px rgba(59,130,246,0.15); }
        }
        .about-card { animation: borderGlow 4s ease-in-out infinite; }

        @keyframes countUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .stat-visible { animation: countUp 0.6s ease forwards; }
      `}</style>

      <div className="reveal eyebrow justify-center"><span>01</span><span>About Me</span></div>

      <h2 className="reveal font-display text-4xl font-bold mb-12 text-white/90">
        Who I Am
      </h2>

      {/* Main card */}
      <div className="reveal reveal-d1 group about-card relative max-w-3xl w-full p-8 rounded-2xl
        bg-white/5 backdrop-blur-md border border-white/10
        transition-all duration-500
        hover:border-blue-400/40 hover:bg-white/[0.04]">

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "radial-gradient(circle at top right, rgba(99,102,241,0.15), transparent 70%)" }} />

        <p className="text-gray-300 text-lg leading-8">
          I am a passionate{" "}
          <span className="text-blue-400 font-medium">DevOps Engineer</span>{" "}
          and{" "}
          <span className="text-purple-400 font-medium">Full Stack Developer</span>{" "}
          focused on building scalable applications and efficient infrastructure.
          I work with tools like{" "}
          <span className="text-blue-400">Docker</span>,{" "}
          <span className="text-blue-400">Kubernetes</span>, and{" "}
          <span className="text-blue-400">AWS</span>.
        </p>

        <p className="mt-6 text-gray-300 text-lg leading-8">
          Along with DevOps, I develop full-stack applications using modern
          technologies to deliver seamless user experiences. I enjoy automating
          workflows, optimizing deployment pipelines, and solving real-world
          problems through clean, maintainable code.
        </p>

        {/* Divider */}
        <div className="my-8 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(99,102,241,0.4), transparent)" }} />

        {/* Stats */}
        <div className="reveal reveal-d2 flex justify-center gap-12">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-4xl"
                style={{
                  background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                {value}
              </div>
              <div className="font-body text-[10px] tracking-[0.25em] uppercase text-white/35 mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}