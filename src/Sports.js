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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); 
    }, 500); 

    return () => clearTimeout(timeout); 
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
