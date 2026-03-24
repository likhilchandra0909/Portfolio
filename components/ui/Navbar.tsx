"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About",        href: "#about" },
  { label: "Education",    href: "#education" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50"
      style={{
        padding:    scrolled ? "14px 0" : "24px 0",
        background: scrolled ? "rgba(2,2,4,0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom:   scrolled ? "1px solid rgba(255,255,255,0.045)" : "none",
        transition: "padding 0.4s ease, background 0.4s ease, backdrop-filter 0.4s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#" className="font-display text-xl font-black tracking-wider select-none">
          <span className="text-white">L</span>
          <span style={{ color: "#818cf8" }}>C</span>
        </a>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative font-body text-[11px] tracking-[0.22em] uppercase text-white/35 hover:text-white/90 transition-colors duration-200 group"
            >
              {label}
              <span
                className="absolute -bottom-0.5 left-0 h-px bg-indigo-400 transition-all duration-300"
                style={{ width: 0 }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.width = "100%")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.width = "0")}
              />
              {/* simpler hover underline via group */}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "rgba(129,140,248,0.7)" }} />
            </a>
          ))}
        </div>

        {/* ── Hire Me ── */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-lg transition-all duration-300"
          style={{
            border:     "1px solid rgba(99,102,241,0.35)",
            color:      "rgba(165,180,252,0.85)",
            background: "rgba(99,102,241,0.05)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.14)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.6)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.05)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.35)";
          }}
        >
          Hire Me
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-6 bg-white/50 transition-all duration-300"
              style={{
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translateY(8px)"
                  : i === 2 ? "rotate(-45deg) translateY(-8px)"
                  : "scaleX(0)"
                  : undefined,
              }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="md:hidden px-8 pt-4 pb-6 flex flex-col gap-5 border-t border-white/5"
          style={{ background: "rgba(2,2,4,0.95)", backdropFilter: "blur(20px)" }}>
          {links.map(({ label, href }) => (
            <a key={label} href={href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm tracking-widest uppercase text-white/40 hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}