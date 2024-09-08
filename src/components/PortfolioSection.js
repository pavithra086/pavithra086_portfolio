import React from 'react';
import '../components/Portfoliosection.css';
import { Link } from 'react-router-dom';
import presentation from './img/presentation.mp4'; // Ensure the correct path to your CSS file

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      {/* Introduction */}
      <div className="portfolio-intro">
        
        <h2>Here is a collection of my recent projects. I welcome you to explore them.</h2>
          
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {/* Portfolio Item 1 */}
        <div className="portfolio-item">
            
        <span className="portfolio-number">01</span>
          
          <img
            src="https://blog.darwinbox.com/hubfs/Onboarding.jpg"
                
            alt="Employee New Hire Onboarding Automation"
            
            />
               
          <h3>{'{Employee New Hire Onboarding Automation}'}</h3>
          <p>//...implementation of an automation process to streamline the onboarding of new hires</p>
          
          <a href="/pavithra086_portfolio/#/EmployeeNewHireOnboardingAutomation1" style={{ color: "white" }}>
           click here to Know More
           </a>
        </div>

        {/* Portfolio Item 2 */}
        <div className="portfolio-item">
          <span className="portfolio-number">02</span>
          
            
            
          <img
            src="https://c4.wallpaperflare.com/wallpaper/971/672/948/train-railroad-track-winter-landscape-wallpaper-preview.jpg"
            alt="Jane Blogger"
          />
          <h4>Project Demo</h4>
          <video width="320" height="240" controls>
          <source src={presentation} type="video/mp4" />
          </video>
          <p>This project is designed for the online reservation of railway tickets.</p>
          <a href="/pavithra086_portfolio/#/RailwayReservationSystem" style={{ color: "white" }}>
           click here to Know More
           </a>
        </div>

        {/* Portfolio Item 3 */}
        <div className="portfolio-item">
          <span className="portfolio-number">03</span>
          <img
            src="https://senseilms.com/wp-content/uploads/2023/04/image-19.png"
            
          />
          
          <h3>{`{ Learning Management system}`}</h3>
          <p>//...learning management portal</p>
          <a href="https://pavithra-n22.github.io/lms_reactjs/"  style={{ color: "white" }}> click here to Know More</a>
        </div>

        {/* Portfolio Item 4 */}
        <div className="portfolio-item">
          <span className="portfolio-number">04</span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9X4sdON7XkyqQivzTSsReizxuK9MxLV_EkA&s"
            alt="upcoming projects "
          />
          <h3>{`{ comming soon}`}</h3>
          <p>//...</p>
        </div>

        {/* Portfolio Item 5 */}
        <div className="portfolio-item">
          <span className="portfolio-number">05</span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9X4sdON7XkyqQivzTSsReizxuK9MxLV_EkA&s"
            alt="Aecer Fincorp"
          />
          <h3>{`{ comming soon }`}</h3>
          <p>//...</p>
        </div>

        {/* Portfolio Item 6 */}
        <div className="portfolio-item">
          <span className="portfolio-number">06</span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9X4sdON7XkyqQivzTSsReizxuK9MxLV_EkA&s"
            alt="Blockchain"
          />
          <h3>{`{ comming soon }`}</h3>
          <p>//...</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
