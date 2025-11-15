import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="section contact-section">
      <h2 className="section-title">
        <FaPaperPlane />
        Get In Touch
      </h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-subtitle">Let's Connect</h3>
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-content">
                <h4>Email</h4>
                <a href="mailto:daud.amin@umt.edu.pk">daud.amin@umt.edu.pk</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-content">
                <h4>Phone</h4>
                <a href="tel:+923001234567">+92 300 1234567</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-content">
                <h4>Location</h4>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <h4>Follow Me</h4>
            <div className="social-icons">
              <a
                href="https://linkedin.com/in/daudamin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/daudamin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/daudamin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
