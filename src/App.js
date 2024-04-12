import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom'
import './App.css';
import { Button } from 'reactstrap';
import Navbar from './Navbar';
import ScrollButtons from './ScrollButtons'
import 'rsuite/dist/rsuite.min.css';


const App = () => {
  // Get the current location using the useLocation hook from react-router-dom
  const location = useLocation();
  // Define an array of routes where the Navbar should not be rendered
  const noNavbarRoutes = ['/social'];

  // Determine if the Navbar should be rendered based on the current route
  const shouldRenderNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
      <div className="app">
        {shouldRenderNavbar && <Navbar />}
        <ScrollButtons />
        <Outlet />
      </div>
  );
};

export default App;
