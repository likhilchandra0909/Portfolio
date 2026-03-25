"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const education = [
  {
    degree:   "10th Standard",
    school:   "St. Joseph's High School",
    location: "Kothagudem, Telangana",
    period:   "2020 – 2021",
    logo:     "/SchoolLogo.png",
    accent:   "#3b82f6",
  },
  {
    degree:   "Intermediate",
    school:   "Krishnaveni Junior College",
    location: "Kothagudem, Telangana",
    period:   "2021 – 2023",
    logo:     "/School2.png",
    accent:   "#a855f7",
  },
  {
    degree:   "B.Tech CSE",
    school:   "Lovely Professional University",
    location: "Phagwara, Punjab",
    period:   "2023 – 2027",
    logo:     "/College.png",
    accent:   "#6366f1",
  },
];

const delays = ["reveal-d1", "reveal-d2", "reveal-d3"];

export default function Education() {
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
    <section id="education" ref={sectionRef} className="relative py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        <div className="reveal eyebrow"><span>02</span><span>Education</span></div>

        <h2
          className="reveal font-display font-bold text-white/90 mb-16"
          style={{ fontSize: "clamp(2rem,3.5vw,3.5rem)" }}
        >
          Academic Journey
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`reveal ${delays[i]} card-glass rounded-2xl p-8 group relative overflow-hidden`}
            >
              {/* Accent corner glow */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${edu.accent}30, transparent 70%)`, filter: "blur(20px)" }}
              />

              {/* Logo box */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${edu.accent}10`, border: `1px solid ${edu.accent}25` }}
              >
                <Image src={edu.logo} alt={edu.school} width={40} height={40} className="object-contain" />
              </div>

              {/* Period badge */}
              <span
                className="inline-block font-body text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-5"
                style={{
                  border: `1px solid ${edu.accent}35`,
                  color:  edu.accent,
                  background: `${edu.accent}0d`,
                }}
              >
                {edu.period}
              </span>

              <h3 className="font-display text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="font-body text-white/55">{edu.school}</p>
              <p className="font-body text-white/28 text-sm mt-1">{edu.location}</p>

              {/* Bottom slide-in accent line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(to right, ${edu.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}