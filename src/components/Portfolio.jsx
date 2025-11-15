import React from "react";

const Portfolio = () => {
  return (
    <section className="cv-section">
      <h2 className="section-title">Portfolio</h2>

      <div className="portfolio-grid">
        <div className="portfolio-item">
          <h4>FixiNow – Service Booking App</h4>
          <p>
            ReactJS single-page app where users can find and book local service
            providers (plumbers, electricians, etc.).
          </p>
          <a
            href="https://example.com/fixinow"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>

        <div className="portfolio-item">
          <h4>Wheels &amp; Wheels – Tyre Store</h4>
          <p>
            E-commerce style frontend for tyre &amp; rim shop with product
            cards, filters and modern design.
          </p>
          <a href="https://example.com/wheels" target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>

        <div className="portfolio-item">
          <h4>Personal Portfolio Website</h4>
          <p>
            Simple portfolio built in React with sections for projects and CV.
          </p>
          <a
            href="https://example.com/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
