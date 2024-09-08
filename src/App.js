import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
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
        <Route path="/pavithra086_portfolio" element={<Home />} />
        <Route path="/about1" element={<About1 />} />
        <Route path="/portfoliosection" element={<PortfolioSection />} />
        <Route path="/EmployeeNewHireOnboardingAutomation1" element={<EmployeeNewHireOnboardingAutomation />} />
        <Route path="/RailwayReservationSystem" element={<RailwayReservationSystem />} />
        <Route path="/aboutsection" element={<AboutSection />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

// This component conditionally renders the Header based on the route
const ConditionalHeader = () => {
  const location = useLocation();
  
  // Only render Header on specific routes
  if (location.pathname !== "/about1" && location.pathname !== "/" && location.pathname !== "/portfolio" && location.pathname !== "/EmployeeNewHireOnboardingAutomation1" && location.pathname !== "/contact" && location.pathname !== "/RailwayReservationSystem" && location.pathname !== "/pavithra086_portfolio") {
    return <Header />;
  }
  
  return null; // Don't render the Header on /about1
};

export default App;
