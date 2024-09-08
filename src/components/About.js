import React from "react";
import "./About.css";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">
        &lt;about_me&gt;
      </h2>
      <p className="about-subtext">
        Hello! I'm a dedicated and passionate Software Engineer with expertise in Java, Spring Boot, MongoDB, and front-end technologies.
      </p>
      <div className="about-content">
        <div className="about-left">
          I have over <span>2.5 years</span> of experience in full-stack development, specializing in building robust, scalable applications with technologies like <span>Java, Spring Boot, MongoDB, and React</span>.
        </div>
        <div className="about-right">
          My journey in tech has led me to explore various aspects of software engineering, from automating processes using <span>UiPath</span> to leading innovation initiatives. I thrive on solving complex problems and delivering efficient solutions. Outside of work, I love diving into new tech trends and pushing the boundaries of what’s possible with code. I'm always open to learning, growing, and taking on new challenges.
        </div>
      </div>
      <button><Link to="/about1" className="read-more-button">{`{read_more}`}</Link></button>
    </section>
  );
};

export default About;
