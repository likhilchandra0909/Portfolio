"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Education",    href: "#education" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact",      href: "#contact" },
];

const socials = [
  {
    icon: <Github size={18} />,
    href: "https://github.com/likhilchandra0909",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={18} />,
    href: "https://www.linkedin.com/in/likhil-chandra/",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={18} />,
    href: "mailto:likhilchandra6@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Gradient top accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
        style={{
          width: "60%",
          background: "linear-gradient(to right, transparent, rgba(99,102,241,0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <a href="#" className="font-display text-2xl font-black tracking-wider select-none">
            <span className="text-white">L</span>
            <span style={{ color: "#818cf8" }}>C</span>
          </a>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-body text-[11px] tracking-[0.18em] uppercase text-white/25 hover:text-white/70 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/30 hover:text-white/80 transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 h-px"
          style={{ background: "rgba(255,255,255,0.04)" }}
        />

        {/* Copyright */}
        <p className="font-body text-center text-[11px] tracking-widest uppercase text-white/18">
          © {new Date().getFullYear()} Likhil Chandra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}