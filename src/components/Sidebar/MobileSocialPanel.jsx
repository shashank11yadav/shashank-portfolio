import React from "react";
import { socialLinks } from '../../constants/socialLinks';

const MobileSocialPanel = () => {
  return (
    <div className="mobile-social-panel">
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

export default MobileSocialPanel;