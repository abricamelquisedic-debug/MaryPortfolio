import React, { useState, useEffect } from "react";
import "./MaryGracePortfolio.css";
import profilePic from "./assets/profile.jpg";
import resumePreview from "./assets/resumePreview.png";
import resumePDF from "./assets/resume.pdf";

export default function MaryGracePortfolio() {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Copy helper
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    if (text.includes("@")) {
      setCopied("email");
    } else {
      setCopied("phone");
    }
    setTimeout(() => setCopied(null), 2000);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="branding">
            <div className="logo-img">
              <img src={profilePic} alt="Mary Grace" className="profile-pic" />
            </div>
            <div>
              <h1 className="name">Mary Grace B. Abrica</h1>
              <p className="role">
                Virtual Assistant • BPO Specialist • Team Lead
              </p>
            </div>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="hero-text">
            <h2>Reliable Virtual Assistant & BPO Professional</h2>
            <p>
              I help businesses streamline customer support, improve team
              performance, and manage day-to-day operations — with 6+ years of
              BPO experience in remote and high-volume environments.
            </p>

            <div className="hero-buttons">
              <button className="btn primary" onClick={() => setShowModal(true)}>
                Hire me
              </button>
              <a href="#services" className="btn secondary">
                My services
              </a>
            </div>

            <div className="info-grid">
              <div className="info-card">
                <p className="label">Location</p>
                <p className="value">Cebu City, Philippines</p>
              </div>
              <div className="info-card">
                <p className="label">Availability</p>
                <p className="value">Remote / Flexible</p>
              </div>
            </div>
          </div>
          <div className="portfolio-box">
            <p>Download my portfolio</p>
            <a
              href={resumePDF}
              download="MaryAbricaPortfolio.pdf"
              className="btn download"
            >
              Download
            </a>
            {/* Hover preview */}
            <img
              src={resumePreview}
              alt="Resume Preview"
              className="resume-preview"
            />
          </div>
        </section>

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Contact Me</h3>
              <p className="subtitle">(Click to copy!)</p>

              <div
                className={`copy-box ${copied === "email" ? "active" : ""}`}
                onClick={() => copyToClipboard("abricamary11@gmail.com")}
              >
                📧 Email: abricamary11@gmail.com
                {copied === "email" && <span className="copied-msg">Copied!</span>}
              </div>

              <div
                className={`copy-box ${copied === "phone" ? "active" : ""}`}
                onClick={() => copyToClipboard("+63 962 926 0312")}
              >
                📞 Phone: +63 962 926 0312
                {copied === "phone" && <span className="copied-msg">Copied!</span>}
              </div>

              <button
                onClick={closeModal}
                className="btn secondary"
                style={{ marginTop: "1rem" }}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* About */}
        <section id="about" className="card">
          <h3>About Me</h3>
          <p>
            I hold a Bachelor of Science in Development Communication and have
            extensive experience in customer service, publishing support, and
            team leadership. My strengths include communication, time
            management, attention to detail, and coaching teams to meet KPIs in
            fast-paced BPO environments.
          </p>
          <div className="contact-grid">
            <div>
              <h4>Email</h4>
              <p>abricamary11@gmail.com</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+63 962 926 0312</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="services">
          <div className="service-card">
            <h4>Customer Support</h4>
            <p>Inbound & outbound calls, email & chat support, order processing, and issue resolution.</p>
          </div>
          <div className="service-card">
            <h4>Admin & Data Tasks</h4>
            <p>Data entry, CRM updates, record management, and document preparation.</p>
          </div>
          <div className="service-card">
            <h4>Team Support</h4>
            <p>Coaching, QA auditing, KPI tracking, and performance reporting.</p>
          </div>
        </section>

      </main>
    </div>
  );
}
