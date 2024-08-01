import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
// import { Example } from "./Components/MyComponent";
// import { MultiDirectionSlide } from "./Components/MultiDirectionSlide";
const App: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <div className="max-w-4xl mx-auto p-4">
        {/* <MultiDirectionSlide /> */}

        <div className="my-20">{/* <Example /> */}</div>
        <div className="my-20">
          <Header />
        </div>
        <div className="my-20">
          <About />
        </div>
        <div className="my-20">
          <Experience />
        </div>
        <div className="my-20">
          <Education />
        </div>
        <div className="my-20">
          <Projects />
        </div>
        <div className="my-20">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default App;
