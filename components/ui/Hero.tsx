"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleViewProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');

        .hero-font { font-family: 'Syne', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes lineExpand {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 0.85; }
        }

        .fade-up-1 { opacity: 0; animation: fadeUp 0.7s ease forwards; animation-delay: 0.1s; }
        .fade-up-2 { opacity: 0; animation: fadeUp 0.7s ease forwards; animation-delay: 0.3s; }
        .fade-up-3 { opacity: 0; animation: fadeUp 0.7s ease forwards; animation-delay: 0.5s; }
        .fade-up-4 { opacity: 0; animation: fadeUp 0.7s ease forwards; animation-delay: 0.7s; }
        .fade-up-5 { opacity: 0; animation: fadeUp 0.7s ease forwards; animation-delay: 0.9s; }

        /* ✅ FIXED: Separated into two classes so they don't override each other */
        .fade-in-img {
          opacity: 0;
          animation: fadeIn 1.2s ease forwards;
          animation-delay: 0.4s;
        }
        .float-img {
          animation: floatY 6s ease-in-out infinite;
        }

        .divider-line {
          height: 1px;
          background: linear-gradient(to right, #3b82f6, #a855f7, transparent);
          animation: lineExpand 1.2s ease forwards;
          animation-delay: 0.6s;
          width: 0;
        }

        .glow-dot { animation: glowPulse 3s ease-in-out infinite; }

        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #3b82f6, #7c3aed);
          transform: translateX(-100%);
          transition: transform 0.35s ease;
          z-index: 0;
        }
        .btn-primary:hover::before { transform: translateX(0); }
        .btn-primary:hover { color: white; }
        .btn-primary span { position: relative; z-index: 1; }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          font-size: 12px;
          letter-spacing: 0.08em;
          backdrop-filter: blur(8px);
          transition: border-color 0.2s, background 0.2s;
        }
        .badge:hover {
          border-color: rgba(99,102,241,0.5);
          background: rgba(99,102,241,0.1);
        }

        /* ✅ FIXED: Explicit dimensions so mask gradient works correctly */
        .hero-img {
          width: 340px;
          height: 520px;
          object-fit: cover;
          object-position: top;
          display: block;
          -webkit-mask-image: linear-gradient(to bottom, black 55%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 55%, transparent 100%);
          user-select: none;
          pointer-events: none;
        }

        @media (min-width: 1024px) {
          .hero-img { width: 420px; height: 580px; }
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        .scroll-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0;
          animation: fadeIn 1s ease forwards;
          animation-delay: 1.8s;
        }
        .scroll-bar {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, rgba(99,102,241,0.8), transparent);
          animation: floatY 2s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center overflow-hidden hero-font"
      >
        <div className="grid-lines" />
        <div className="noise-overlay" />

        {/* Mouse-parallax glow */}
        <div
          className="pointer-events-none absolute w-[500px] h-[500px] rounded-full blur-[180px] opacity-20 transition-transform duration-700 ease-out"
          style={{
            background: "radial-gradient(circle, #6366f1, #3b82f6)",
            left: "10%",
            top: "30%",
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen py-24">

          {/* ── LEFT CONTENT ── */}
          <div className="flex-1 max-w-xl">

            {/* Top label */}
            <div className="fade-up-1 flex items-center gap-3 mb-8">
              <span className="glow-dot w-2 h-2 rounded-full bg-blue-400" />
              <span className="body-font text-xs tracking-[0.3em] uppercase text-blue-400/80">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="fade-up-2 text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight mb-2">
              <span className="text-white/90">Likhil</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Chandra
              </span>
            </h1>

            {/* Divider */}
            <div className="divider-line my-6" />

            {/* Role */}
            <div className="fade-up-3 body-font">
              <p className="text-xl text-white/60 font-light leading-relaxed">
                DevOps Engineer — building scalable infrastructure,
                <br className="hidden md:block" />
                automating pipelines & shipping with confidence.
              </p>
            </div>

            {/* Tech badges */}
            <div className="fade-up-4 flex flex-wrap gap-2 mt-8 body-font">
              {["Kubernetes", "Docker", "Terraform", "CI/CD", "AWS"].map((tech) => (
                <span key={tech} className="badge text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70" />
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="fade-up-5 flex gap-4 mt-10">
              {/* View Projects — scrolls to #projects */}
              <button
                onClick={handleViewProjects}
                className="btn-primary px-7 py-3.5 rounded-lg border border-blue-500/60 text-blue-300 text-sm tracking-wide body-font cursor-pointer"
              >
                <span>View Projects</span>
              </button>

              {/* Download CV */}
              <a
                href="/LikhilChandra_Resum.pdf"
                download="LikhilChandra_Resume.pdf"
                className="body-font px-7 py-3.5 rounded-lg text-sm tracking-wide text-white/50 border border-white/10 hover:border-white/25 hover:text-white/80 transition-all duration-300 flex items-center gap-2"
              >
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </div>

            {/* Social links */}
            <div className="fade-up-5 flex items-center gap-5 mt-10">
              {[
                { label: "GitHub", href: "https://github.com/likhilchandra0909" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/likhil-chandra/" },
                { label: "Twitter", href: "https://x.com/LikhilC18491" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="body-font text-xs tracking-widest uppercase text-white/30 hover:text-blue-400 transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT — PHOTO ── */}
          <div className="flex-shrink-0 relative flex justify-center items-end w-full lg:w-auto">

            {/* Ambient glow behind image */}
            <div
              className="absolute bottom-0 left-1/2 w-[380px] h-[500px] rounded-full blur-[100px] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(99,102,241,0.35) 0%, rgba(59,130,246,0.2) 50%, transparent 80%)",
                transform: `translate(calc(-50% + ${mousePos.x * 0.6}px), ${mousePos.y * 0.3}px)`,
                transition: "transform 0.8s ease-out",
              }}
            />

            {/* Decorative rings */}
            <div
              className="absolute bottom-16 left-1/2 w-[320px] h-[320px] rounded-full border border-indigo-500/15 pointer-events-none"
              style={{ transform: "translateX(-50%)" }}
            />
            <div
              className="absolute bottom-8 left-1/2 w-[420px] h-[420px] rounded-full border border-blue-500/8 pointer-events-none"
              style={{ transform: "translateX(-50%)" }}
            />

            {/* ✅ FIXED: fade-in on outer div, float on inner div — no conflict */}
            <div className="fade-in-img relative z-10">
              <div className="float-img">
                <img
                  src="/likhil.png"
                  alt="Likhil Chandra"
                  className="hero-img"
                  draggable={false}
                />
              </div>
            </div>

            {/* Floating card — experience */}
            <div
              className="fade-in-img absolute top-12 -left-4 lg:-left-16 z-20 body-font"
              style={{ animationDelay: "0.9s" }}
            >
              <div
                className="px-4 py-3 rounded-xl border border-white/10 backdrop-blur-xl text-white/80 text-sm"
                style={{ background: "rgba(15,15,25,0.7)" }}
              >
                <div className="text-xs text-white/40 mb-1 tracking-wider"></div>
                <div className="font-bold text-lg hero-font">DevOps</div>
              </div>
            </div>

            {/* Floating card — projects */}
            <div
              className="fade-in-img absolute bottom-28 -right-4 lg:-right-12 z-20 body-font"
              style={{ animationDelay: "1.1s" }}
            >
              <div
                className="px-4 py-3 rounded-xl border border-white/10 backdrop-blur-xl text-white/80 text-sm"
                style={{ background: "rgba(15,15,25,0.7)" }}
              >
                <div className="font-bold text-lg hero-font">Full Stack</div>
                <div className="font-bold text-lg hero-font">Developer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2">
          <span className="body-font text-[10px] tracking-[0.3em] uppercase text-white/20">Scroll</span>
          <div className="scroll-bar mx-auto" />
        </div>
      </section>
    </>
  );
}