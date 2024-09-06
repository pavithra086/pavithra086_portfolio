import React from 'react';

function HeroSection() {
  return (
    <section id="home">
      <h1>// Hi, I'm Samantha, A...<br/><span className="highlight">{ "_full stack en_" }</span></h1>
      <img src={process.env.PUBLIC_URL + '/image.png'} alt="Hero image showcasing Samantha's portfolio" className="hero-image"/>
    </section>
  );
}

export default HeroSection;
