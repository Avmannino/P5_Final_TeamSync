import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Sports from './Sports';
import Schedules from './Schedules';
import Pricing from './Pricing';
import Settings from './Settings';
import LandingPage from './LandingPage'; // Import LandingPage component
import ScrollButtons from './ScrollButtons'; // Import ScrollButtons component

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Landing page route */}
          {/* Routes for other pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/sports/*" element={<Sports />} /> {/* Render Sports component */}
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <ScrollButtons />
      </div>
    </Router>
  );
};

export default App;
