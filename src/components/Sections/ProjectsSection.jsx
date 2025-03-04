import React, { forwardRef, useState, useEffect } from 'react';
import { ExternalLink, Star, Download, ChevronDown } from "lucide-react";
import { projects } from '../../constants/projects';

const ProjectsSection = forwardRef((props, ref) => {
  const initialProjectCount = 4;
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    // Initialize with first 4 projects
    setVisibleProjects(projects.slice(0, initialProjectCount));
  }, []);

  const handleViewMoreProjects = () => {
    setShowAllProjects(true);
    setVisibleProjects(projects);
  };

  const renderTag = (tag) => (
    <span key={tag} className="tag">
      {tag}
    </span>
  );

  return (
    <div ref={ref} className="projects-section section">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-sub-section">
        {visibleProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-title-link"
              >
                <h3 className="project-title">
                  {project.title}
                  <span className="external-link">
                    <ExternalLink size={16} />
                  </span>
                </h3>
              </a>
              <p className="project-description">{project.description}</p>

              {project.stars && (
                <div className="project-meta">
                  <Star size={16} />
                  <span>{project.stars}</span>
                </div>
              )}

              {project.installs && (
                <div className="project-meta">
                  <Download size={16} />
                  <span>{project.installs} Installs</span>
                </div>
              )}

              <div className="tags-container">
                {project.tags.map((tag) => renderTag(tag))}
              </div>
            </div>
          </div>
        ))}

        {!showAllProjects && projects.length > initialProjectCount && (
          <button
            className="view-more-button"
            onClick={handleViewMoreProjects}
          >
            View More Projects
            <ChevronDown size={16} />
          </button>
        )}
      </div>
    </div>
  );
});

export default ProjectsSection;