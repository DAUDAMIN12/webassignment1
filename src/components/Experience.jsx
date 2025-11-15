import React from "react";

const Experience = () => {
  return (
    <section className="cv-section">
      <h2 className="section-title">Experience</h2>

      <div className="timeline-item">
        <div>
          <h4>Frontend Developer (Freelance)</h4>
          <p className="timeline-subtitle">Self-Employed</p>
          <p>
            Built responsive websites for small businesses using ReactJS,
            HTML/CSS and JavaScript. Focused on clean layouts and usability.
          </p>
        </div>
        <div className="timeline-year">2023 – Present</div>
      </div>

      <div className="timeline-item">
        <div>
          <h4>Web Design Intern</h4>
          <p className="timeline-subtitle">Creative Studio</p>
          <p>
            Assisted in designing landing pages, banners and UI elements.
            Collaborated with developers and graphic designers.
          </p>
        </div>
        <div className="timeline-year">Summer 2022</div>
      </div>
    </section>
  );
};

export default Experience;
