import React from 'react';
import Dashboard from './Dashboard';
import './IceHockey.css';
import LiveGames from './LiveGames';
import IceCal from './IceCalendar';
import TeamCardIce from './TeamCardIce';
import SidebarHockey from './SidebarHockey';
import IceDash from './IceHighCharts';
import Navbar from './Navbar';
import BarRaceChart from './BarRace';


// import BaseballField from './BaseballField';

export default function IceHockey() {
  return (
    <>

      <div className='hockey-page'>
        <div className="ice-navbar-frame">
          <Navbar />
        </div>
        <div className='side-bar-hockey'>
          <SidebarHockey />
        </div>

        <div className='race-chart'>
          {/* <LiveGames /> */}
          <BarRaceChart />

        </div>

        <div className='team-card'>
          <TeamCardIce />
        </div>
        <IceDash />
        {/* <Dashboard /> */}
        <IceCal />
      </div>

    </>
  );
}
