"use client";

import { useEffect, useRef } from "react";

const row1 = [
  { name: "C++",        icon: "devicon-cplusplus-plain colored" },
  { name: "Python",     icon: "devicon-python-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "HTML",       icon: "devicon-html5-plain colored" },
  { name: "CSS",        icon: "devicon-css3-plain colored" },
  { name: "Tailwind",   icon: "devicon-tailwindcss-plain colored" },
];

const row2 = [
  { name: "React",   icon: "devicon-react-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
];

const row3 = [
  { name: "Docker",     icon: "devicon-docker-plain colored" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
  { name: "AWS",        icon: "devicon-amazonwebservices-plain-wordmark colored" },
  { name: "Git",        icon: "devicon-git-plain colored" },
  { name: "Linux",      icon: "devicon-linux-plain colored" },
  { name: "Jenkins",    icon: "devicon-jenkins-line" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-20 text-center">

      <div className="reveal eyebrow justify-center"><span>03</span><span>Skills</span></div>

      <h2 className="reveal font-display text-4xl font-bold mb-16 text-white/90">
        Tools & Technologies
      </h2>

      {/* Row 1 */}
      <div className="reveal reveal-d1 flex justify-center gap-8 flex-wrap mb-8">
        {row1.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
      </div>

      {/* Row 2 */}
      <div className="reveal reveal-d2 flex justify-center gap-8 flex-wrap mb-8">
        {row2.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
      </div>

      {/* Row 3 — DevOps */}
      <div className="reveal reveal-d3 flex justify-center gap-8 flex-wrap">
        {row3.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
      </div>

    </section>
  );
}

function SkillCard({ skill }: { skill: { name: string; icon: string } }) {
  return (
    <div className="group flex flex-col items-center">
      <div className="w-[140px] h-[140px] flex items-center justify-center
        bg-white/5 backdrop-blur-md border border-white/10 rounded-xl
        transition-all duration-500
        group-hover:rounded-full group-hover:scale-110
        group-hover:border-blue-400/40
        group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
        <i className={`${skill.icon} text-5xl transition duration-300 group-hover:scale-110`} />
      </div>
      <p className="mt-4 text-gray-300 text-sm group-hover:text-white transition">
        {skill.name}
      </p>
    </div>
  );
}