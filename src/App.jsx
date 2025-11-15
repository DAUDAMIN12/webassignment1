import React from "react";
import "./App.css";

import Intro from "./components/Intro";
import AboutMe from "./components/Aboutme";
import Objectives from "./components/Objectives";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="cv-page">
      <header className="cv-header">
        <div>
          <h1 className="cv-name">DAUD AMIN</h1>
          <p className="cv-title">WEB DESIGNER, FRONTEND DEVELOPER</p>
        </div>

        <div className="cv-header-right">
          <button className="btn-download">Download PDF</button>
          <p className="cv-email">daudamin151@gmail.com</p>
          <p className="cv-phone">(+92) 300-4583856</p>
        </div>
      </header>

      {/* MAIN TWO COLUMN LAYOUT */}
      <main className="cv-main">
        <section className="cv-left">
          <Intro />
          <AboutMe />
          <Objectives />
          <Skills />
          <Education />
          <Experience />
          <Portfolio />
        </section>

        <aside className="cv-right">
          <div className="profile-photo-wrapper">
            {/* Replace src with your own image */}
            <img
              src="/profilepic.png"
              alt="Profile"
              className="profile-photo"
            />
          </div>

          <div className="contact-box">
            <h3>Contact</h3>
            <p>Phone: (+92) 300-4583856</p>
            <p>Email: daudamin151@gmail.com</p>
            <p>Location: Lahore, Pakistan</p>
            <a
              target="blank"
              href="https://daud-amin-portfolio-0c551a.netlify.app/"
            >
              Portflio
            </a>
          </div>

          <div className="extra-box">
            <h3>Languages</h3>
            <p>English – Fluent</p>
            <p>Urdu – Native</p>
            <p>German(deutsch) – Begineer</p>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
