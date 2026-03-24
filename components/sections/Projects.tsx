"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title:  "End-to-End DevOps Pipeline",
    desc:   "CI/CD pipeline from GitHub to Kubernetes deployment with automated testing, staging environments, and rollback strategies.",
    tech:   "Docker • Kubernetes • GitHub Actions",
    github: "https://github.com/likhilchandra0909/DevOps-Project",
    src:    "/project1.png",
  },
  {
    title:  "Food Ordering Website",
    desc:   "Full-stack food ordering platform with authentication, live cart system, and Stripe payments.",
    tech:   "React • Node.js • MongoDB",
    github: "https://github.com/likhilchandra0909/ISTHAFOOD",
    src:    "/project2.png",
  },
  {
    title:  "Calculator with Maven & JUnit",
    desc:   "Java-based calculator with full unit testing via Maven and JUnit, demonstrating TDD principles.",
    tech:   "Java • Maven • JUnit",
    github: "https://github.com/your-username/calculator",
    src:    "/project3.png",
  },
];

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );
    cardsRef.current.forEach((card) => { if (card) observer.observe(card); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">

        <div className="eyebrow justify-center mb-4"><span>04</span><span>Projects</span></div>

        <h2 className="font-display text-4xl font-bold mb-16 text-white/90">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group flex flex-col h-[480px] rounded-2xl overflow-hidden
                bg-white/5 border border-white/10
                transition-all duration-500
                opacity-0 translate-y-10
                hover:-translate-y-3
                hover:shadow-[0_25px_60px_rgba(59,130,246,0.35)]
                hover:border-blue-400/50"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[55%]">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[45%] text-left">
                <div>
                  <h3 className="font-display text-xl font-bold leading-snug text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  <p className="text-blue-400 text-sm mt-2 font-medium">
                    {project.tech}
                  </p>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 mt-2"
                >
                  <span>View on GitHub</span>
                  <span className="transition-transform duration-300 group-hover/link:translate-x-2 inline-block">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}