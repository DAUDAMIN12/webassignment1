import React from "react";

const Education = () => {
  return (
    <section className="cv-section">
      <h2 className="section-title">Education</h2>

      <div className="timeline-item">
        <div>
          <h4>Bachelor in Computer Science</h4>
          <p className="timeline-subtitle">UMT – Lahore, Pakistan</p>
          <p>
            Studied web development, software engineering, databases and
            computer networks.
          </p>
        </div>
        <div className="timeline-year">2022 – Present</div>
      </div>

      <div className="timeline-item">
        <div>
          <h4>Intermediate in ICS</h4>
          <p className="timeline-subtitle">
            Crescent College – Lahore, Pakistan
          </p>
          <p>Major subjects: Mathematics, Physics, Computer.</p>
        </div>
        <div className="timeline-year">2019 – 2021</div>
      </div>
    </section>
  );
};

export default Education;
