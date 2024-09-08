import React from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import About1 from "./components/About1";
import AboutSection from "./components/AboutSection";
import Home from "./components/Home";
import PortfolioSection from "./components/PortfolioSection";
import EmployeeNewHireOnboardingAutomation from "./components/NewHireOnboarding";
import Contact from "./components/Contact";
import RailwayReservationSystem from "./components/RailwayReservationSystem";

const App = () => {
  return (
    <Router>
      <ConditionalHeader />
      <Routes>
        <Route path="/pavithra086_portfolio/" element={<Home />} />
        <Route path="/pavithra086_portfolio/about1" element={<About1 />} />
        <Route path="/pavithra086_portfolio/portfoliosection" element={<PortfolioSection />} />
        <Route path="/pavithra086_portfolio/EmployeeNewHireOnboardingAutomation1" element={<EmployeeNewHireOnboardingAutomation />} />
        <Route path="/pavithra086_portfolio/RailwayReservationSystem" element={<RailwayReservationSystem />} />
        <Route path="/pavithra086_portfolio/aboutsection" element={<AboutSection />} />
        <Route path="/pavithra086_portfolio/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

// Conditional Header component based on the current route
const ConditionalHeader = () => {
  const location = useLocation();
  
  // Only render Header on specific routes
  if (
    location.pathname !== "/pavithra086_portfolio/about1" &&
    location.pathname !== "/pavithra086_portfolio/" &&
    location.pathname !== "/pavithra086_portfolio/portfoliosection" &&
    location.pathname !== "/pavithra086_portfolio/EmployeeNewHireOnboardingAutomation1" &&
    location.pathname !== "/pavithra086_portfolio/contact" &&
    location.pathname !== "/pavithra086_portfolio/RailwayReservationSystem"
  ) {
    return <Header />;
  }

  return null; // Don't render the Header on specific routes
};

export default App;
