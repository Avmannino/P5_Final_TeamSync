import React from 'react';
import './Home.css';
import ScrollingBar from './ScrollingBar';
import Navbar from './Navbar';
import baseballStatic from './assets/baseball_static.png';
import Laptop from './assets/laptop_static.png';
import scheduleStatic from './assets/schedules_static.png';
import hockeyStatic from './assets/hockey_static.png';
import logo from './assets/black_logo.png';
import tsLogo from './assets/ts_logo.png';


const Home = () => {
    return (
        <div className='home-page'>
            <img src={logo} alt="small" className="logo" />
            <img src={tsLogo} alt="tsLogo" className="ts-logo" />
            <div className='home-container'>
                <h1>OUR CORE</h1>
                <img src={Laptop} alt="laptop" className="laptop-static" />
                <p className='our-core'>
                    TeamSync™️ is your all-in-one solution to automate and grow any facility, club, league, academy, camp or recreation organization. No matter what type of program you offer or dream of, TeamSync™️ will give you an edge over the competition. Get your team up and running faster with our stress-free UI and extensive features.
                </p>
                <img src={baseballStatic} alt="basketball" className="baseball-static" />
                <h2>PROVEN METRICS</h2>
                <p className='proven-metrics'>
                    TeamSync™️ enables your performance staff to analyse and report the wealth of data coming from your team's match-ups, efficiently with an industry-leading analysis software.
                    <p></p>Get full access to Player Metrics, Stats or specific Analytics from a given season or time-period.
                </p>
                <h3>TAKE YOUR SCHEDULES TO NEW HEIGHTS</h3>
                <img src={scheduleStatic} alt="schedule" className="schedules-static" />
                <p className='scheduling'>
                    Say goodbye to last-minute schedule conflicts or equipment shortages. Optimize the use of your physical resources and facility space with expert scheduling software. Easily consolidate and color-code all of your classes, clinics, and rentals in one centralized place.
                </p>
                <h4>ICY INSIGHTS</h4>
                <img src={hockeyStatic} alt="hockey-img" className="hockey-static" />
                <p className='hockey'>
                    While other apps may focus on The Big 3 (MLB, NFL, NBA) we pride ourselves on being one of the select few that offers comprehensive analytics for all teams and skaters in the National Hockey League (NHL). Track every second of every shift, everyday.
                </p>
                <div className='scroll-container'>
                    <ScrollingBar />
                </div>
            </div>
        </div>
    );
};

export default Home;
