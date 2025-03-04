import React from "react";

const MobileHeader = ({ isMobileMenuOpen, toggleMobileMenu, toggleSocialPanel }) => {
  return (
    <div className="mobile-header">
      <div className="mobile-header-left">
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d={
                isMobileMenuOpen
                  ? "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  : "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              }
            />
          </svg>
        </button>
      </div>
      <h1>Shashank Yadav</h1>
      <div className="mobile-header-right">
        <button
          className="social-toggle"
          onClick={toggleSocialPanel}
          aria-label="Social links"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;