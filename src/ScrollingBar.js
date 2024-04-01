import React from 'react';
import './ScrollingBar.css';
import Fitbit from './assets/fitbit_logo.png';
import Hudl from './assets/hudl_logo.png';
import Telemetry from './assets/telemetry_logo.png';
import DataSports from './assets/datasports_logo.png';
import SportsIo from './assets/sportsio_logo.png';
import Nemmi from './assets/nemmi_logo.png';
import XHG from './assets/xhg_logo.png';
import Playpass from './assets/playpass_logo.png';
import Gemini from './assets/gemini_logo.png';
import SportsEngine from './assets/sportsengine_logo.png';

function ScrollingBar() {
  return (
    <div className="scroller-container">
      <div className="image-container">
        {/* Place your images here */}
        <img src={Fitbit} alt="Fitbit Logo" />
        <img src={Hudl} alt="Hudl Logo" />
        <img src={Telemetry} alt="Telemetry Logo" />
        <img src={DataSports} alt="Data Sports Logo" />
        <img src={SportsIo} alt="io Logo" />
        <img src={Nemmi} alt="Nemmi Logo" />
        <img src={XHG} alt="XHG Logo" />
        <img src={Playpass} alt="Playpass Logo" />
        <img src={Gemini} alt="Gemini Logo" />
        <img src={SportsEngine} alt="Engine Logo" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default ScrollingBar;

