"use client";

import { useState } from "react";
import Background    from "@/components/ui/Background";
import Loader        from "@/components/ui/Loader";
import Navbar        from "@/components/ui/Navbar";
import Hero          from "@/components/ui/Hero";
import About         from "@/components/sections/About";
import Education     from "@/components/sections/Education";
import Skills        from "@/components/sections/Skills";
import Projects      from "@/components/sections/Projects";
import Certificates  from "@/components/sections/Certificates";
import Contact       from "@/components/sections/Contact";
import Footer        from "@/components/sections/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onFinish={() => setLoaded(true)} />
      <main
        className="text-white"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}
      >
        <Background />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}