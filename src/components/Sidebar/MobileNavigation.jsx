import React from "react";

const MobileNavigation = ({ navLinks, activeSection, scrollToSection, closeMobileMenu }) => {
  return (
    <nav className="mobile-nav">
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => {
                scrollToSection(link.id);
                closeMobileMenu();
              }}
              className={activeSection === link.id ? "active" : ""}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavigation;