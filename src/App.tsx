import React from "react";
import Header from "./pages/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { motion, useScroll, useSpring } from "framer-motion";

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-slate-50">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#1d1d1d] z-50"
        style={{ scaleX }}
      />

      <main className="max-w-4xl mx-auto p-4">
        <section id="header" className="my-24">
          <Header />
        </section>

        <section id="about" className="my-20">
          <About />
        </section>

        <section id="education" className="my-20">
          <Education />
        </section>

        <section id="experience" className="my-20">
          <Experience />
        </section>

        <section id="projects" className="my-28">
          <Projects />
        </section>

        <section id="skills" className="my-20">
          <Skills />
        </section>
      </main>
    </div>
  );
};

export default App;
