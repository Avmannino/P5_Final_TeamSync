import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Sports from './Sports';
import Schedules from './Schedules';
import Pricing from './Pricing';
import Settings from './Settings';
import LandingPage from './LandingPage'; // Import LandingPage component

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
