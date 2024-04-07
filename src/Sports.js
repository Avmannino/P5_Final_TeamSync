import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import SportTiles from './SportTiles';
import Baseball from './Baseball';
import Football from './Football';
import Soccer from './Soccer';
import IceHockey from './IceHockey';
import Basketball from './Basketball';
import Tennis from './Tennis';
import './Sports.css';

const Sports = () => {
  return (

    <Routes>
      <Route path="baseball" element={<Baseball />} />
      <Route path="football" element={<Football />} />
      <Route path="soccer" element={<Soccer />} />
      <Route path="icehockey" element={<IceHockey />} />
      <Route path="basketball" element={<Basketball />} />
      <Route path="tennis" element={<Tennis />} />
    </Routes>

  );
};

export default Sports;
