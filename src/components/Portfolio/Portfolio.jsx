import React, { useState, useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";

import Sidebar from "../Sidebar/Sidebar";
import MobileHeader from "../Sidebar/MobileHeader";
import MobileSocialPanel from "../Sidebar/MobileSocialPanel";
import MobileNavigation from "../Sidebar/MobileNavigation";
import AboutSection from "../Sections/AboutSection";
import EducationSection from "../Sections/EducationSection";
import ExperienceSection from "../Sections/ExperienceSection";
import ProjectsSection from "../Sections/ProjectsSection";
import ContactSection from "../Sections/ContactSection";
import WavyResumeButton from "../Common/WavyResumeButton";

// Constants
import { navLinks } from "../../constants/navLinks";
import { projects } from "../../constants/projects";

import "./Portfolio.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const initialProjectCount = 4;
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

  const contentRef = useRef(null);
  const sectionRefs = {
    about: useRef(null),
    education: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 968;
      setIsMobile(isMobileView);
      if (!isMobileView) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSocialPanel = () => {
    setIsSocialOpen(!isSocialOpen);
  };

  useEffect(() => {
    // Initialize with first 4 projects
    setVisibleProjects(projects.slice(0, initialProjectCount));
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionRefs[sectionId] && sectionRefs[sectionId].current) {
      const yOffset = sectionRefs[sectionId].current.offsetTop;
      contentRef.current.scrollTo({
        top: yOffset,
        behavior: "smooth",
      });
    }
  };

  // Detect which section is currently visible
  const handleScroll = () => {
    const scrollPosition = contentRef.current.scrollTop;

    // Find which section is currently in view
    for (const section of navLinks) {
      const element = sectionRefs[section.id].current;
      if (!element) continue;

      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      // Check if the section is in the viewport
      if (
        scrollPosition >= offsetTop - 100 &&
        scrollPosition < offsetTop + offsetHeight - 100
      ) {
        setActiveSection(section.id);
        break;
      }
    }
  };

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      content.addEventListener("scroll", handleScroll);
      return () => content.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    const educationSection = sectionRefs.education.current;
    const projectsSection = sectionRefs.projects.current;
    const experienceSection = sectionRefs.experience.current;

    // Create one IntersectionObserver for all sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");

            // Handle education section animations
            if (entry.target === educationSection) {
              const educationItems =
                entry.target.querySelectorAll(".education-item");
              educationItems.forEach((item, index) => {
                item.setAttribute("data-index", index);
              });
            }

            // Handle projects section animations
            if (entry.target === projectsSection) {
              const projectCards =
                entry.target.querySelectorAll(".project-card");
              projectCards.forEach((card, index) => {
                card.setAttribute("style", `--project-index: ${index}`);
              });
            }

            // Handle experience section animations
            if (entry.target === experienceSection) {
              const jobCards = entry.target.querySelectorAll(".job-card");
              jobCards.forEach((card, index) => {
                card.setAttribute("style", `--job-index: ${index}`);
                setTimeout(() => {
                  card.classList.add("animate-in");
                }, 200);
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe the main sections
    if (educationSection) {
      observer.observe(educationSection);

      // Also observe individual education items
      const educationItems =
        educationSection.querySelectorAll(".education-item");
      educationItems.forEach((item, index) => {
        item.setAttribute("data-index", index);
        observer.observe(item);
      });
    }

    if (projectsSection) {
      observer.observe(projectsSection);
    }

    if (experienceSection) {
      observer.observe(experienceSection);
    }

    // Add scroll event listener
    if (content) {
      content.addEventListener("scroll", handleScroll);
    }

    // Cleanup function
    return () => {
      // Remove scroll event listener
      if (content) {
        content.removeEventListener("scroll", handleScroll);
      }

      // Clean up all observers
      if (educationSection) {
        observer.unobserve(educationSection);
        const educationItems =
          educationSection.querySelectorAll(".education-item");
        educationItems.forEach((item) => {
          observer.unobserve(item);
        });
      }

      if (projectsSection) {
        observer.unobserve(projectsSection);
      }

      if (experienceSection) {
        observer.unobserve(experienceSection);
      }
    };
  }, []);

  return (
    <div className="portfolio">
      {/* Fixed left sidebar */}
      {!isMobile && (
        <Sidebar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      )}

      {isMobile && (
        <MobileHeader
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          toggleSocialPanel={toggleSocialPanel}
        />
      )}

      {/* Mobile Social Panel */}
      {isMobile && isSocialOpen && <MobileSocialPanel />}

      {/* Mobile Navigation */}
      {isMobile && isMobileMenuOpen && (
        <MobileNavigation
          navLinks={navLinks}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          closeMobileMenu={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Resume button */}
      <WavyResumeButton resumeUrl="https://drive.google.com/file/d/1kUL4MU6jjOG5LcZR-9yWCXKUhe4-BcV3/view?usp=sharing" />

      {/* Scrollable content */}
      <div className="content" ref={contentRef}>
        {/* About Section */}
        <AboutSection ref={sectionRefs.about} />

        {/* Education Section */}
        <EducationSection ref={sectionRefs.education} />

        {/* Experience Section */}
        <ExperienceSection ref={sectionRefs.experience} />

        {/* Projects Section */}
        <ProjectsSection ref={sectionRefs.projects} />

        {/* Contact Section */}
        <ContactSection ref={sectionRefs.contact} />
      </div>
      <Toaster
        containerStyle={{
          top: "2rem",
          right: "2rem",
        }}
        toastOptions={{
          className: "custom-toast",
          success: {
            iconTheme: {
              primary: "#64ffda",
              secondary: "#0a192f",
            },
          },
        }}
      />
    </div>
  );
};

export default Portfolio;
