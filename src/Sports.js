// Sports.js
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SportTiles from './SportTiles';
import Baseball from './Baseball';
import Football from './Football';
import Soccer from './Soccer';
import IceHockey from './IceHockey';
import Basketball from './Basketball';
import Tennis from './Tennis';
import './Sports.css';
import Loader from './Loader';


const Sports = () => {
  const [isLoading, setIsLoading] = useState(true); // Initially set to true to show loader
  useEffect(() => {
    // Simulate loading delay (remove this in your actual code)
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false when loading is done
    }, 1000); // 2000 milliseconds (2 seconds) delay for demonstration

    return () => clearTimeout(timeout); // Cleanup function to clear timeout
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='sports-wrapper'>
          <h1 className='sports-header'>CHOOSE YOUR SPORT</h1>
          <SportTiles />
          <Routes>
            <Route path="baseball" element={<Baseball />} />
            <Route path="football" element={<Football />} />
            <Route path="soccer" element={<Soccer />} />
            <Route path="icehockey" element={<IceHockey />} />
            <Route path="basketball" element={<Basketball />} />
            <Route path="tennis" element={<Tennis />} />
          </Routes>
        </div>
      )};
    </>
  )
};

export default Sports;
