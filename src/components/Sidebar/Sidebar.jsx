import React from 'react';
import { MapPin } from "lucide-react";
import { navLinks } from '../../constants/navLinks';
import { socialLinks } from '../../constants/socialLinks';
import TypedAnimation from '../Common/TypedAnimation';

const Sidebar = ({ activeSection, scrollToSection }) => {

  return (
    <div className="sidebar">
      <div className="header">
        <h1>
          <TypedAnimation text="Shashank Yadav" />
        </h1>
        <h2>Software Engineer</h2>
        <p>
          I craft intelligent systems and scalable solutions at the
          intersection of AI and engineering.
        </p>
        <div className="location">
          <MapPin size={16} />
          <span>San Jose, CA</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <ul>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={activeSection === link.id ? "active" : ""}
            >
              <button
                onClick={() => scrollToSection(link.id)}
                className={activeSection === link.id ? "active" : ""}
              >
                <div className="nav-line"></div>
                <span>{link.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social links */}
      <div className="social-links">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={social.id}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;