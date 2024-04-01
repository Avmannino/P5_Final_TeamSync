import React from 'react';
import './Home.css';
import ScrollingBar from './ScrollingBar';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='about'>
                <h1>Save Time With Our #1 Team Management App</h1>
                <p>We make life easier for coaches, parents and club/league administrators by bringing everything into an all-in-one team management solution. Get your team up and running faster with our stress-reducing and time-saving features.</p>
            </div>
            <div className='scroll-container'>
                <ScrollingBar />
            </div>
        </div>
    );
};

export default Home;
