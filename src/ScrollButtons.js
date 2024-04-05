import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import arrowDownPNG from './assets/arrow-down.png';
import arrowUpPNG from './assets/arrow-up.png';
import './ScrollButtons.css';

const ScrollButtons = () => {
  const location = useLocation();
  const scrollInterval = useRef(null);

  const handleScrollDown = () => {
    scrollInterval.current = setInterval(() => {
      window.scrollBy(0, 15); // Adjust the scroll speed as needed
    }, 1); // Adjust the scroll interval as needed
  };

  const handleScrollUp = () => {
    scrollInterval.current = setInterval(() => {
      window.scrollBy(0, -15); // Adjust the scroll speed as needed
    }, 1); // Adjust the scroll interval as needed
  };

  const handleMouseUp = () => {
    clearInterval(scrollInterval.current);
  };

  const showScrollButtons = () => {
    const forbiddenRoutes = ['/', '/landing'];
    return !forbiddenRoutes.includes(location.pathname);
  };

  return (
    <>
      {showScrollButtons() && (
        <>
          <div
            className="floating-arrow-up"
            onMouseDown={handleScrollUp}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img src={arrowUpPNG} alt="Arrow up" className="arrow-up-img" />
          </div>
          <div
            className="floating-arrow-down"
            onMouseDown={handleScrollDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img src={arrowDownPNG} alt="Arrow down" className="arrow-down-img" />
          </div>
        </>
      )}
    </>
  );
};

export default ScrollButtons;
