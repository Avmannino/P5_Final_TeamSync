import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import blackLogo from './assets/black_logo.png';
import tsLogo from './assets/ts_logo.png';
import googleScore from './assets/google_review.png';
import yelpScore from './assets/yelp_review.png';

function LandingPage({ onButtonClick }) {
  const handleButtonClick = () => {
    onButtonClick();
  };

  return (
    <div className="landing-page">
      <div className='landing-container'>
        <img src={blackLogo} alt="Logo" className="logo" />
        <img src={tsLogo} about="Ts-Logo" className="ts-logo" />
        <div className='under-logo'>
          <h1 className='slid'>
            <span className='slider'>
              <span className='slider__word'>Management,</span>
              <span className='slider__word'>Scheduling,</span>
              <span className='slider__word'>Analytics,</span>
              <span className='slider__word'>Rosters,</span>
              <span className='slider__word'>Sports,</span>
              <span className='slider__word'>Organization,</span>
            </span>
          </h1>
          <h2 className='motto'>
            Team
          </h2>
          <h2 className='motto-two'>
            Made Simple.
          </h2>
          <Link to="/home" className="landing-button" onClick={handleButtonClick}>Get Started</Link>
          <Link to="/pricing" className="price-landing-button" onClick={handleButtonClick}>Pricing</Link>
        </div>

        {/* New Section for Reviews */}
        <section className="landing-reviews">
          <h2>
          Julio Hill,
            04/18/2024
          </h2>
          <h3>
          ⭐️⭐️⭐️⭐️⭐️     5/5
          </h3>
          <p>
            "Great sports app that keeps you and your team connected. Simple enough for the laziest of team members to keep up with. Always adding new features. Excited to see what the future holds with this app!"
          </p>
          <img src={googleScore} alt="google-review" className="review-image" />
          <img src={yelpScore} alt="Yelp Review" className="review-image" />
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
