import React from 'react';
import './Home.css';
import Header from "../components/Header";
import About from "../components/About";
import PortfolioSection from './PortfolioSection';
import AboutSection from './AboutSection';
import Contact from './Contact';


const Home = () => {
  return (
    <div>
        <Header />
        <AboutSection />
        <PortfolioSection />
        <Contact />
    </div>
  );
};

export default Home;
