import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import './App.css';
import { Button } from 'reactstrap';
import Navbar from './Navbar';
import ScrollButtons from './ScrollButtons'
import 'rsuite/dist/rsuite.min.css';




const App = () => {
  // Define an array of routes where the Navbar should not be rendered
  const noNavbarRoutes = ['/social'];

  // Get the current pathname using window.location.pathname
  const currentPath = window.location.pathname;

  // Determine if the Navbar should be rendered based on the current route
  const shouldRenderNavbar = !noNavbarRoutes.includes(currentPath);

  return (
    <>
      <div className="app">
        <Navbar />
        <ScrollButtons />
        <Outlet />
      </div>
    </>
  );
};

export default App;