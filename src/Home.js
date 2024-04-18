import './Home.css';
import React, { useState, useEffect } from 'react';
import ScrollingBar from './ScrollingBar';
import baseballStatic from './assets/baseball_static.png';
import Laptop from './assets/laptop_static.png';
import scheduleStatic from './assets/schedules_static.png';
import hockeyStatic from './assets/hockey_static.png';
import homeTiles from './assets/home_shapes.png';
import Loader from './Loader';
import tsHome from './assets/ts_home.png';
import blackLogo from './assets/black_logo.png';

const Home = () => {
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
                <div className='home-page'>
                    <div className='home-container'>
                        <img src={tsHome} alt="tsHome" className="ts-home" />
                        <img src={blackLogo} alt="black" className="black-logo" />
                        <hr style={{ position: 'absolute', width: '700px', top: '42.5vh', left: "12vw", border: '3px solid #b96900' }} />

                        <h1>OUR CORE</h1>
                        <img src={Laptop} alt="laptop" className="laptop-static" />

                        <p className='our-core'>
                            TeamSync™️ is your all-in-one solution to automate and grow any facility, club, league, academy, camp or recreation organization. No matter what type of program you offer or dream of, TeamSync™️ will give you an edge over the competition. Get your team up and running faster with our stress-free UI and extensive features.
                        </p>
                        <div className='tiles-bar'>
                            <span className='one'>Coaching</span><span className='two'>Data</span><span className='three'>Performance</span>
                            <img src={homeTiles} alt="Tiles" className="home-tiles" />
                        </div>
                        <img src={baseballStatic} alt="baseball" className="baseball-static" />

                        <h2>PROVEN METRICS</h2>
                        <p className='proven-metrics'>
                            TeamSync™️ enables your performance staff to analyse and report the wealth of data coming from your team's match-ups, efficiently with an industry-leading analysis software. Get full access to Player Metrics, Stats or specific Analytics from a given season or time-period.
                        </p>
                        <h3>ORGANIZATION, AT ITS PEAK</h3>
                        <img src={scheduleStatic} alt="schedule" className="schedules-static" />
                        <p className='scheduling'>
                            Say goodbye to last-minute schedule conflicts or equipment shortages. Optimize the use of your physical resources and facility space with expert scheduling software. Easily consolidate and color-code all of your classes, clinics, and rentals in one centralized place.
                        </p>
                        <h4>ICY INSIGHTS</h4>
                        <img src={hockeyStatic} alt="hockey" className="hockey-static" />
                        <p className='hockey'>
                            While other apps may focus on The Big 3 (MLB, NFL, NBA) we pride ourselves on being one of the select few that offers comprehensive analytics for all teams and skaters in the National Hockey League (NHL). Track every second of every shift, everyday.
                        </p>
                        <div className='scroll-container'>
                            <ScrollingBar />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
