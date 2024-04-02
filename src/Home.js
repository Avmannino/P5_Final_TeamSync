import React from 'react';
import './Home.css';
import ScrollingBar from './ScrollingBar';
import Navbar from './Navbar';
import basketballStatic from './assets/basketball_static.png';
import coreStatic from './assets/core_static.png';
import logo from './assets/ts_logo.png';

const Home = () => {
    return (
        <div className='home-page'>
            <img src={logo} alt="logo" className="ts-logo" />
            <div className='home-container'>
                <div className='about'>
                    <h1>OUR CORE</h1>
                    <img src={coreStatic} alt="core" className="core-static" />
                    <p className='our-core'>
                        We make life easier for coaches, parents and club/league administrators by bringing everything into an all-in-one team management solution. Get your team up and running faster with our stress-reducing and time-saving features.
                    </p>
                    <img src={basketballStatic} alt="basketball" className="basketball-static" />
                    <h2>PROVEN METRICS</h2>
                    <p className='proven-metrics'>
                        TeamSync enables your performance staff to analyse and report the wealth of data coming from your team's match-ups, efficiently with an industry-leading analysis software. Get full access to Player Metrics, Stats or specific Analytics from a given season or time-period.
                    </p>
                </div>
                <hr className="horizontal-line-two" />
                <div className='scroll-container'>
                    <ScrollingBar />
                </div>
            </div>
        </div>
    );
};

export default Home;
