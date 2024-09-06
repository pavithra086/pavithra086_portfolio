import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">&lt;Contact Me&gt;</h2>
      <div className="contact-info">
        <p className="contact-item">
          <strong>Email:</strong> <a href="mailto:pavithra0867n22@gmail.com">pavithra0867n22@gmail.com</a>
        </p>
        <p className="contact-item">
          <strong>Phone:</strong> <a href="tel:+918197490367">+91 8197490367</a>
        </p>
        <p className="contact-item">
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pavithra-n0867/" target="_blank" rel="noopener noreferrer">connect on linkdIn</a>
        </p>
        <p className="contact-item">
          <strong>GitHub:</strong> <a href="https://github.com/pavithra086" target="_blank" rel="noopener noreferrer">click to view my github profile</a>
        </p>
        <p className="contact-item">
          <strong>Blog:</strong> <a href="https://pavithra086.github.io/" target="_blank" rel="noopener noreferrer">check out my blogs</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
