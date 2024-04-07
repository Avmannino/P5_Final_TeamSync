import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Sports from './Sports';
import Schedules from './Schedules';
import Pricing from './Pricing';
import Social from './Social';
import LandingPage from './LandingPage'; // Import LandingPage component
import ScrollButtons from './ScrollButtons'; // Import ScrollButtons


const App = () => {
  // Define an array of routes where the Navbar should not be rendered
  const noNavbarRoutes = ['/social', '/sports/baseball'];

  // Get the current pathname using window.location.pathname
  const currentPath = window.location.pathname;

  // Determine if the Navbar should be rendered based on the current route
  const shouldRenderNavbar = !noNavbarRoutes.includes(currentPath);

  return (
    <Router>
      <div className='app'>
        {/* Conditionally render Navbar based on the current route */}
        {shouldRenderNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Landing page route */}
          {/* Routes for other pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/sports/*" element={<Sports />} /> {/* Render Sports component */}
          {/* <Route path="/schedules" element={<Schedules />} /> */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/social" element={<Social />} />
        </Routes>
        <ScrollButtons />
      </div>
    </Router>
  );
};

export default App;