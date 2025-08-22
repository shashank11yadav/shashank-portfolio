import React from 'react';

const AboutSection = React.forwardRef((props, ref) => (
    <div ref={ref} className="about-section section">
    <div className="section-header">
      <h2 className="section-title">About</h2>
      <div className="section-line"></div>
    </div>

    <p className="about-paragraph">
      I'm a Software Development Engineer at ModelEarth, where I architect and build enterprise-grade AI platforms that bridge the gap between cutting-edge technology and real-world sustainability challenges. With a fresh Master's in Computer Science from UMass Boston and diverse experience across academia and industry, I specialize in creating scalable, intelligent systems that drive meaningful impact.
    </p>

    <p className="about-paragraph">
      At ModelEarth, I've engineered a comprehensive AI chat platform encompassing 1,700+ files across Node.js, React, Python, and Rust. My work involves integrating 25+ LLM providers, managing 9 vector databases, and building sophisticated document processing pipelines that handle everything from PDFs to audio and video content. I thrive on the complexity of modern distributed systems and the challenge of making AI accessible and practical for environmental analytics.
    </p>

    <p className="about-paragraph">
      My journey has taken me from enterprise banking systems at TCS, where I led zero-downtime migrations and managed multinational client support, to the academic world as a Graduate Teaching Assistant, mentoring 70+ students in circuit analysis. Each role has shaped my perspective on technology's potential to solve complex problems, whether it's optimizing database performance or making AI-driven sustainability insights accessible to global organizations.
    </p>

    <p className="about-paragraph">
      What drives me is the intersection of artificial intelligence, environmental sustainability, and scalable engineering. I believe technology should be a force for positive change, and I'm passionate about building systems that not only perform exceptionally but also contribute to a more sustainable future. When I'm not architecting microservices or debugging distributed systems, you'll find me exploring new AI research, contributing to open-source projects, or planning my next hiking adventure.
    </p>
  </div>
));

export default AboutSection;