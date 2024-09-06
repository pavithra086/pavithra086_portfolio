import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-section">
      <h2 className="resume-title">&lt;Resume&gt;</h2>
      <p className="resume-description">
        You can download my resume by clicking the link below:
      </p>
      <a href="/resume.pdf" download className="resume-download">
        _resume
      </a>
    </section>
  );
};

export default Resume;
