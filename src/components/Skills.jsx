import React from "react";

const Skills = () => {
  return (
    <section className="cv-section">
      <h2 className="section-title">Professional Skills</h2>

      <div className="skills-grid">
        <div>
          <h4>Web Design</h4>
          <p>Wireframing, Figma, responsive layouts, color and typography.</p>
        </div>
        <div>
          <h4>Frontend Development</h4>
          <p>ReactJS, HTML5, CSS3, JavaScript (ES6+).</p>
        </div>
        <div>
          <h4>UI Frameworks</h4>
          <p>Bootstrap, basic Tailwind CSS, simple animations.</p>
        </div>
        <div>
          <h4>Tools</h4>
          <p>Git &amp; GitHub, VS Code, Chrome DevTools.</p>
        </div>
      </div>

      <h3 className="sub-heading">Technical</h3>
      <div className="tech-row">
        <span>HTML5</span>
        <span>CSS3</span>
        <span>JavaScript</span>
        <span>ReactJS</span>
        <span>Bootstrap</span>
      </div>
    </section>
  );
};

export default Skills;
