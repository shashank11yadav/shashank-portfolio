import React from 'react';

const AboutSection = React.forwardRef((props, ref) => (
    <div ref={ref} className="about-section section">
    <div className="section-header">
      <h2 className="section-title">About</h2>
      <div className="section-line"></div>
    </div>

    <p className="about-paragraph">
      I'm a passionate software engineer with a keen interest in building
      intelligent systems and optimizing digital experiences. With a
      strong foundation in computer science and hands-on experience in
      software development, I thrive at the intersection of engineering,
      problem-solving, and innovation.
    </p>

    <p className="about-paragraph">
      Currently, I'm a Teaching Assistant at the University of
      Massachusetts Boston, where I guide students through complex
      electrical engineering and computer science concepts. Previously, as
      a Systems Engineer at Tata Consultancy Services, I worked on
      large-scale enterprise applications, enhancing productivity through
      automation, data optimization, and system reliability improvements.
    </p>

    <p className="about-paragraph">
      Beyond my professional roles, I’ve built AI-driven projects like
      AccuScan (an OCR model with state-of-the-art accuracy) and
      GestureSign (a real-time sign language recognition system). My
      expertise spans Python, Java, React, Node.js, PyTorch, TensorFlow,
      and more. I am deeply invested in machine learning, full-stack
      development, and automation.
    </p>

    <p className="about-paragraph">
      When I’m not coding, you can find me experimenting with new
      technologies, optimizing algorithms, or exploring innovative AI
      solutions. Outside of tech, I enjoy hiking, playing badminton, and
      competing in coding competitions. Let’s connect and build something
      amazing!
    </p>
  </div>
));

export default AboutSection;