import React, { useState } from 'react';
import { FileText } from 'lucide-react';

const WavyResumeButton = ({ resumeUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={resumeUrl}
      className="resume-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <span className="wavy-light"></span>}
      <FileText size={16} />
      Resume
    </a>
  );
};

export default WavyResumeButton;