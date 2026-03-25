"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socials = [
  {
    icon:  <Mail size={20} />,
    label: "Email",
    value: "likhilchandra6@gmail.com",
    href:  "mailto:likhilchandra6@gmail.com",
    color: "#3b82f6",
  },
  {
    icon:  <Phone size={20} />,
    label: "Phone",
    value: "+91 7672084696",
    href:  "tel:+917672084696",
    color: "#22c55e",
  },
  {
    icon:  <Github size={20} />,
    label: "GitHub",
    value: "github.com/likhilchandra0909",
    href:  "https://github.com/likhilchandra0909",
    color: "rgba(255,255,255,0.6)",
  },
  {
    icon:  <Linkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/likhil-chandra/",
    href:  "https://www.linkedin.com/in/likhil-chandra/",
    color: "#3b82f6",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [form, setForm]   = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim())    errs.name    = "Name is required";
    if (!form.email.trim())   errs.email   = "Email is required";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setToast(true);
    setTimeout(() => setToast(false), 3500);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.85)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    outline: "none",
    transition: "border-color 0.25s",
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        <div className="reveal eyebrow"><span>06</span><span>Contact</span></div>

        <h2
          className="reveal font-display font-bold text-white/90 mb-4"
          style={{ fontSize: "clamp(2rem,3.5vw,3.5rem)" }}
        >
          Get In Touch
        </h2>
        <p className="reveal reveal-d1 font-body text-white/40 mb-16 max-w-md">
          Have a project, opportunity, or just want to talk? Reach out — I'd love to connect.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Left — contact cards ── */}
          <div className="reveal reveal-d1 space-y-4">
            {socials.map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-xl card-glass group"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}15`, color }}
                >
                  {icon}
                </div>
                <div>
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-white/30 mb-0.5">{label}</p>
                  <p className="font-body text-white/70 text-sm">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* ── Right — form ── */}
          <div className="reveal reveal-d2">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl card-glass space-y-5"
            >
              {/* Name */}
              <div>
                <input
                  type="text" name="name" value={form.name}
                  onChange={handleChange} placeholder="Your Name"
                  style={inputBase}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.5)")}
                  onBlur={(e)  => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
                {errors.name && <p className="font-body text-red-400/80 text-xs mt-1.5">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email" name="email" value={form.email}
                  onChange={handleChange} placeholder="Your Email"
                  style={inputBase}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.5)")}
                  onBlur={(e)  => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
                {errors.email && <p className="font-body text-red-400/80 text-xs mt-1.5">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text" name="subject" value={form.subject}
                  onChange={handleChange} placeholder="Subject"
                  style={inputBase}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.5)")}
                  onBlur={(e)  => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
                {errors.subject && <p className="font-body text-red-400/80 text-xs mt-1.5">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows={4} name="message" value={form.message}
                  onChange={handleChange} placeholder="Your Message"
                  style={{ ...inputBase, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.5)")}
                  onBlur={(e)  => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
                {errors.message && <p className="font-body text-red-400/80 text-xs mt-1.5">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-body text-sm tracking-widest uppercase font-medium transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                  color: "white",
                  letterSpacing: "0.15em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className="fixed bottom-8 right-8 z-50 font-body text-sm px-6 py-3.5 rounded-xl"
          style={{
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.4)",
            color: "rgba(165,180,252,0.9)",
            backdropFilter: "blur(16px)",
            animation: "fadeUp 0.4s ease",
          }}
        >
          ✓ Message sent — Likhil will be in touch shortly!
        </div>
      )}
    </section>
  );
}