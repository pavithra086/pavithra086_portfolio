import React from 'react';
import './About234.css';
import pic3 from './img/pic3.png';
const About = () => {
  return (
    <section className="about-section">
      <div className="profile-container">
        <div className="profile-image-container">
          <img
            src={pic3}
            alt="Pavithra"
            className="profile-image"
          />
        </div>
        <div className="profile-details">



          
          
          {/* Basic Introduction */}
          <p className="profile-intro">
            <strong>Pavithra</strong><br />
            Bengaluru, Karnataka <br />
            pavithra0867n22@gmail.com | 8197490367
          </p>
          <p className="profile-description">
  I’m a Software Engineer specializing in full-stack development with a focus on building scalable and efficient applications. I excel in creating robust back-end systems using <strong>microservices architecture</strong> with <strong>Spring Boot</strong>, enabling modular, flexible, and highly scalable solutions. On the front-end, I craft dynamic, responsive interfaces with <strong>React JS</strong>, ensuring seamless user interactions. I thrive on finding solutions that drive business innovation, enhance efficiency, and deliver exceptional user experiences.
</p>

          {/* Experience Section */}
          <h2 className="profile-subtitle" style={{ color: 'black' }}>Experience</h2>
          <p className="profile-description">
            <strong>Capgemini Technology Services India | Senior Software Engineer</strong><br />
            Sept 2022 – Present | Bengaluru, Karnataka
          </p>
          <ul className="profile-list">
            <li>Reduced downtime by 20% and ensured 99% SLA adherence using <strong>New Relic APM</strong> for proactive monitoring and rapid bug resolution.</li>
            <li>Fixed critical bugs and enhanced the UI of web applications, improving overall user experience.</li>
            <li>Automated leave report processes using <strong>RPA-UiPath</strong>, increasing efficiency fivefold and saving 6 hours monthly.</li>
            <li>Developed an RPA bot for onboarding processes, automating manual tasks with 95% accuracy in data extraction.</li>
            <li>Led innovation initiatives as <strong>VI Champ</strong>, directing cross-functional collaboration and delivering strategic projects.</li>
          </ul>

          <p className="profile-description">
            <strong>Capgemini Technology Services India | Intern</strong><br />
            April 2022 – June 2022 | Remote
          </p>
          <ul className="profile-list">
            <li>Completed a 60-day internship focused on JEE Full Stack 2.0 with React and Spring Boot Microservices.</li>
            <li>Worked under the guidance of <strong>Kavita Arora</strong> and gained hands-on experience in full-stack development.</li>
          </ul>

          {/* Education Section */}
          <h2 className="profile-subtitle" style={{ color: 'black' }}>Education</h2>
          <p className="profile-description">
            <strong>Sahyadri College of Engineering and Management</strong><br />
            B.E. Computer Science | Jul 2018 – Aug 2022 | GPA: 8.5 / 10.0 | India
          </p>
          <p className="profile-description">
            <strong>Vidyodaya Pre-University</strong><br />
            Computer Science | Jun 2016 – Jun 2018 | India
          </p>

          {/* Skills Section */}
          <h2 className="profile-subtitle" style={{ color: 'black' }}>Skills</h2>
          <p className="profile-description">
            <strong>Full Stack:</strong> microservices architecture,Java 8, Spring Boot, Spring REST, React js, HTML, CSS, MongoDB,Eureka, swagger-ui<br />
            <strong>Tools:</strong> Git, Postman, IntelliJ IDEA, NetBeans, Visual Studio<br />
            <strong>Robotic Process Automation:</strong> UiPath<br />
            <strong>Additional Skills:</strong> Power BI, Excel, NewRelic.<br />
            <strong>Beginner Skills:</strong> AI models ,ML algorithms ,python language,selenium<br />

          </p>

          {/* Certifications Section */}
          <h2 className="profile-subtitle" style={{ color: 'black' }}>Certifications</h2>
          <p className="profile-description">
            <strong>RPA Automation Foundation</strong><br />
            <strong>AWS Cloud Practitioner</strong><br />
            <strong>Google Cloud Practitioner</strong>
          </p>

          {/* Hobbies Section */}
          <h2 className="profile-subtitle" style={{ color: 'black' }}>Hobbies and Intrests</h2>
          <p className="profile-list">
            In my free time, I enjoy learning about emerging technologies, sketching design ideas, and exploring data visualization techniques. These hobbies help me stay creative and continuously evolve my skills.
          </p>
          
          {/* Links Section */}
          <p className="profile-description">
            <strong>Portfolio:</strong> <a href="https://your-portfolio-link.com">View my work</a><br />
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pavithra-n0867/">Connect with me</a><br />
            <strong>GitHub:</strong> <a href="https://github.com/pavithra086">Check my repositories</a><br />
            <strong>Blog:</strong> <a href="https://pavithra086.github.io/">Read my blogs here</a>

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
