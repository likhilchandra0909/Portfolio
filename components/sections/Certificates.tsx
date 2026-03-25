"use client";

import { useEffect, useRef } from "react";

const certificates = [
  {
    title:  "Computer Communications Specialization",
    issuer: "University of Colorado System",
    desc:   "Networking fundamentals, protocols, and system design in modern communication systems.",
    link:   "https://coursera.org/share/e796c1989e51115281127c64ed8962ef",
    image:  "/network.png",
  },
  {
    title:  "Packet Switching Networks and Algorithms",
    issuer: "Coursera",
    desc:   "Routing algorithms, congestion control, and packet-level network behaviour.",
    link:   "https://coursera.org/share/945e5a70004a2f6f55feaa700b289983",
    image:  "/network2.png",
  },
  {
    title:  "Fundamentals of Network Communication",
    issuer: "Coursera",
    desc:   "Core networking concepts including layers, protocols, and data transmission.",
    link:   "https://coursera.org/share/e7b8c4d81c28f07e58bf150df3f3f2b6",
    image:  "/network3.png",
  },
  {
    title:  "The Bits and Bytes of Computer Networking",
    issuer: "Google (Coursera)",
    desc:   "How the internet works — TCP/IP, DNS, and network troubleshooting.",
    link:   "https://coursera.org/share/9c270297e4e5a01aaf8193d58eeab2f1",
    image:  "/network4.png",
  },
  {
    title:  "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    desc:   "Cloud concepts, Azure services, pricing models, and deployment strategies.",
    link:   "https://learn.microsoft.com/en-us/users/likhilchandra-4363/achievements",
    image:  "/microsoft.png",
  },
  {
    title:  "Mobile App Development using Flutter",
    issuer: "Training Program",
    desc:   "Cross-platform mobile apps using Flutter and Dart with modern UI design.",
    link:   "#",
    image:  "/flutter.png",
  },
];

export default function Certificates() {
  /** @type {React.MutableRefObject<HTMLElement|null>} */
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

  const delays = ["reveal-d1","reveal-d2","reveal-d3","reveal-d1","reveal-d2","reveal-d3"];

  return (
    <section id="certificates" ref={sectionRef} className="py-24">
      <style>{`
        .cert-card {
          position: relative;
          overflow: hidden;
        }
        .cert-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(99,102,241,0.10), transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 0;
        }
        .cert-card:hover::before { opacity: 1; }
        .cert-card > * { position: relative; z-index: 1; }

        .cert-shine {
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%);
          transition: left 0.6s ease;
          pointer-events: none;
          z-index: 2;
        }
        .cert-card:hover .cert-shine { left: 150%; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">

        <div className="reveal eyebrow justify-center"><span>05</span><span>Certificates</span></div>

        <h2 className="reveal font-display text-4xl font-bold mb-16 text-white/90">
          Credentials
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className={`reveal ${delays[i]} cert-card group flex flex-col h-[480px] rounded-2xl overflow-hidden
                bg-white/5 border border-white/10
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-[0_25px_60px_rgba(99,102,241,0.3)]
                hover:border-indigo-400/50`}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
                e.currentTarget.style.setProperty("--my", ((e.clientY - r.top)  / r.height * 100) + "%");
              }}
            >
              {/* Shine sweep */}
              <div className="cert-shine" />

              {/* Image */}
              <div className="relative h-[45%] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Issuer badge */}
                <div className="absolute top-3 left-3">
                  <span className="font-body text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-md"
                    style={{
                      background: "rgba(2,2,4,0.65)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(165,180,252,0.9)",
                      backdropFilter: "blur(8px)",
                    }}>
                    {cert.issuer}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[55%] text-left">
                <div>
                  <h3 className="font-display text-xl font-semibold leading-snug text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                >
                  <span>View Certificate</span>
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