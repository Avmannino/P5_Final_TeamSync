import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './LandingPage.css'; // Import the CSS file
import blackLogo from './assets/black_logo.png'; // Import your blackLogo image

import tsLogo from './assets/ts_logo.png';


function LandingPage({ onButtonClick }) {
  const handleButtonClick = () => {
    onButtonClick(); // Notify the parent component
  };

  return (
    <div className="landing-page">
      <img src={blackLogo} alt="Logo" className="logo" /> 
      <img src={tsLogo} about="Ts-Logo" className="ts-logo" />
      <h1 className='slid'>
        <span className='slider'>
          <span className='slider__word'>Stronger</span>
          <span className='slider__word'>Smarter</span>
          <span className='slider__word'>Harder</span>
          <span className='slider__word'>Better</span>
          <span className='slider__word'>Faster</span>
        Manage Smarter, Play
        </span>
      </h1>
        <Link to="/home" className="landing-button" onClick={handleButtonClick}>Get Started</Link>
      </div>
  );
}

export default LandingPage;