import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import portImg from './assets/port.png';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavClick = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="portfolio-navbar">
        <div className="portfolio-navbar-inner">
          <span className="portfolio-navbar-title ujin-logo">UJIN</span>
          <div className="portfolio-navbar-links">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="portfolio-container">
        <div className="about-education-card" id="about">
          <div className="about-columns">
            <div className="about-left">
              <div className="about-heading">
                <span className="about-whoami">Who Am I ?</span>
                <h2>About Me</h2>
              </div>
              <p>
                Hi! I’m Ujin S Thomas, a creative MERN Stack Developer from Kollam, Kerala. I love building web experiences that are fast, beautiful, and user-friendly. Whether it’s coding up a new project, learning the latest tech, or collaborating with others, I’m always excited to turn ideas into reality. When I’m not at my keyboard, you’ll find me exploring open-source, mentoring peers, or diving into new challenges. Let’s connect and create something amazing together!
              </p>
              <div className="about-socials">
                <a href="https://linkedin.com/in/ujin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg width="28" height="28" fill="#4f8cff" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                </a>
                <a href="https://github.com/UjinSThomas" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <svg width="28" height="28" fill="#4f8cff" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="mailto:ujinsthomas@gmail.com" aria-label="Email">
                  <svg width="28" height="28" fill="#4f8cff" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-8.713h23.97l-11.985 8.713zm-12-7.713v14h24v-14l-12 8.713-12-8.713z"/></svg>
                </a>
              </div>
            </div>
            <div className="about-right">
              <img src={portImg} alt="Ujin S Thomas" className="about-image" />
            </div>
          </div>
        </div>

        <div className="projects-education-row" id="projects">
          <div className="about-education-card" id="projects-card">
            <h2>Projects</h2>
            <div className="portfolio-project">
              <strong>EduMatrix — HTML CSS JS Python</strong>
              <p>Developed and implemented a streamlined process for the Smart Attendance System using Multi-face recognition that serves as a comprehensive classroom management solution. Integrates features such as attendance tracking, grade management, timetable organization, assignment submissions, and notice dissemination.</p>
            </div>
            <div className="portfolio-project">
              <strong>LibSmart — HTML CSS React JS</strong>
              <p>Designed and implemented a Library Management System that simplifies the management of library resources by automating tasks such as cataloging, tracking book loans, managing user records, and generating reports.</p>
            </div>
          </div>
          <div className="about-education-card" id="education">
            <h2>Education</h2>
            <div className="education-timeline">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-title">B.Tech</div>
                  <div className="timeline-year">2021 – 2025</div>
                  <div className="timeline-desc">Graduated with a B.Tech in Computer Science and Engineering from College of Engineering, Pathanapuram</div>
                </div>
              </div>
              <div className="timeline-item timeline-gap">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-title">Higher Secondary</div>
                  <div className="timeline-year">2020 – 2021</div>
                  <div className="timeline-desc">Completed Higher Secondary Education in Computer Science at St. Gregorios HSS, Kottarakkara (95%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <section className="portfolio-section" id="contact">
          <h2>Contact</h2>
          <div className="portfolio-contact-links">
            <a href="tel:+919656989180">
              <svg width="24" height="24" fill="#4f8cff" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
              +91-9656989180
            </a><br />
            <a href="mailto:ujinsthomas@gmail.com">
              <svg width="24" height="24" fill="#4f8cff" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-8.713h23.97l-11.985 8.713zm-12-7.713v14h24v-14l-12 8.713-12-8.713z"/></svg>
              ujinsthomas@gmail.com
            </a><br />
            <a href="https://linkedin.com/in/ujin" target="_blank" rel="noreferrer">
              <svg width="24" height="24" fill="#4f8cff" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              linkedin.com/in/ujin
            </a><br />
            <a href="https://github.com/UjinSThomas" target="_blank" rel="noreferrer">
              <svg width="24" height="24" fill="#4f8cff" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              github.com/UjinSThomas
            </a>
          </div>
        </section>

        <footer className="portfolio-footer">
          &copy; {new Date().getFullYear()} Ujin S Thomas. All rights reserved.
        </footer>
      </div>
    </>
  );
}
