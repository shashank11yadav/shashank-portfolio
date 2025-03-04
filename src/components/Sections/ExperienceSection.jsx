import React, { forwardRef } from 'react';
import { ExternalLink } from "lucide-react";
import { experiences } from '../../constants/experiences';

const ExperienceSection = forwardRef((props, ref) => {
  const renderTag = (tag) => (
    <span key={tag} className="tag">
      {tag}
    </span>
  );

  return (
    <div ref={ref} className="experience-section section">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
      </div>
      <div className="experience-sub-section">
        {experiences.map((job, index) => (
          <div
            key={job.id}
            className={`job-card ${index === 0 ? "first-job" : ""}`}
          >
            <div className="job-card-container">
              <div className="job-period">{job.period}</div>
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="job-title-link"
              >
                <h3 className="job-title">
                  {job.title} · {job.company}
                  <span className="external-link">
                    <ExternalLink size={16} />
                  </span>
                </h3>
              </a>
              <p className="job-description">{job.description}</p>

              <div className="tags-container">
                {job.skills && job.skills.map((skill) => renderTag(skill))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ExperienceSection;