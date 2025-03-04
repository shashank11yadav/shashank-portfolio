import React, { forwardRef } from 'react';
import { ExternalLink } from "lucide-react";
import { educations } from '../../constants/educations';

const EducationSection = forwardRef((props, ref) => {
  const renderTag = (tag) => (
    <span key={tag} className="tag">
      {tag}
    </span>
  );

  return (
    <div ref={ref} className="education-section section">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <div className="section-line"></div>
      </div>

      <div className="education-timeline">
        {educations.map((edu, index) => (
          <div
            key={edu.id}
            className="education-item"
            style={{ "--data-index": index }}
          >
            <div className="education-item-link">
              <div className="education-period">{edu.period}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-institution-container">
                <a
                  href={edu.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="education-institution"
                >
                  {edu.institution}
                  <span className="external-link">
                    <ExternalLink size={14} />
                  </span>
                </a>
                <span className="education-gpa">{edu.gpa}</span>
              </div>
              <p className="education-description">{edu.description}</p>
              <div className="tags-container">
                {edu.courses &&
                  edu.courses.map((course) => renderTag(course))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default EducationSection;