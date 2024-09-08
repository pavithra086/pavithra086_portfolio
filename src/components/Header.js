import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link
 // Ensure the correct path to the image

// Header container with updated background color and padding
const HeaderWrapper = styled.div`
  background-color: #1e1e1e; /* Dark theme background */
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
  text-align: left;
  padding: 2rem;
`;

// Navigation menu with updated styling
const NavMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;

  a {
    color: #f5e347; /* Bright yellow color */
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 300;
  }

  a:hover {
    color: #03a9f4; /* Blue hover color */
  }
`;

// Content wrapper with centering and margin adjustments
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

// Typing text with updated color and styling
const TerminalText = styled.div`
  font-size: 3rem;
  color: #f39c12; /* Orange color */
  white-space: nowrap; /* Ensure text doesn’t wrap */
  margin-top: 10px;

  &::before {
    content: "{ \"";
    color: #fff;
  }

  &::after {
    content: "\" }";
    color: #fff;
  }

  .blinking-cursor {
    display: inline-block;
    width: 1ch;
    height: 1em;
    background-color: #fff;
    animation: blink 0.75s step-start infinite;
  }

  @keyframes blink {
    50% {
      background-color: transparent;
    }
  }
`;



const Header = () => {
  const [displayedText, setDisplayedText] = useState("");
  const text = "full stack developer";
  const speed = 150; // Typing speed in milliseconds

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const typeWriter = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        timeoutId = setTimeout(typeWriter, speed);
      } else {
        // Reset index and displayedText to start over
        index = -1;
        setDisplayedText(""); // Reset displayedText before starting over
        timeoutId = setTimeout(typeWriter, speed);
      }
    };

    typeWriter();

    // Cleanup function to clear timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <HeaderWrapper>
      <NavMenu>
        <a href="#home">_home</a>
        <Link to="/about1">_about</Link>
        <a href="https://github.com/pavithra086" target="_blank" rel="noopener noreferrer">_github</a>
        
        <a href="/pavithra086_portfolio/portfoliosection">_projects</a>
        <a href="\Pavithra.pdf" download className="resume-download">
        _resume
      </a>
        <a href="/pavithra086_portfolio/contact">_contact</a>
        <a href="https://pavithra086.github.io/" target="_blank" rel="noopener noreferrer">_blog</a>
      </NavMenu>
      <ContentWrapper>
        <div><h3> Hi, I'm Pavithra, a...</h3></div>
        <TerminalText>
          <span>{displayedText}</span>
          <span className="blinking-cursor">|</span>
        </TerminalText>
        
      </ContentWrapper>
      
    </HeaderWrapper>
    
  );
};

export default Header;
