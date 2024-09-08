import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css";

function AboutSection() {
  return (
    <section id="about" className="about-container">
      <h2 className="about-heading">&lt;about_me&gt;</h2>
      <p className="about-description">
      As a full-stack developer, I have extensive experience in microservices architecture, allowing me to develop applications that are modular and adaptable. Using Spring Boot, I create independent services that communicate through RESTful APIs, ensuring efficient and flexible data exchange. I leverage WebClient for smooth, non-blocking interactions between microservices, enabling optimal data flow throughout the system.


      </p>
      <div className="about-summary">
        <div className="about-left">
          <p>On the front-end side, I specialize in React JS, crafting dynamic, component-based architectures that are both modular and responsive. By using modern CSS frameworks like Bootstrap and Material-UI, I ensure that user interfaces are not only visually appealing but also perform efficiently across devices.

My expertise in databases includes MongoDB, which offers the flexibility to manage unstructured data efficiently. Whether it’s optimizing data handling or integrating MongoDB seamlessly with microservices, I ensure that the entire stack functions cohesively to support various application needs..</p>
        </div>
        <div className="divider"></div>
        <div className="about-right">
          <p>Currently, I work as a Senior Software Engineer at Capgemini Technology Services India, where I apply my full-stack skills to enhance application performance and user experience. I’ve utilized tools like New Relic APM for proactive monitoring, identifying and addressing performance bottlenecks, which has reduced downtime by 20% and ensured 99% SLA adherence. Additionally, I’ve led automation initiatives using UiPath, automating repetitive tasks to improve efficiency and reduce manual intervention, allowing the development team to focus on core functionality.</p>
        </div>
      </div>
      <Link to="pavithra086_portfolio/about1" className="read-more-link">Read More</Link>
    </section>
  );
}

export default AboutSection;
