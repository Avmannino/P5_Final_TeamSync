import React from 'react';
import Dashboard from './Dashboard';
import './IceHockey.css';
import LiveGames from './LiveGames';
import DashCal from './Calendar';
import TeamCardIce from './TeamCardIce';
import SidebarHockey from './SidebarHockey';


// import BaseballField from './BaseballField';

export default function IceHockey() {
  return (
    <>
    
        <div className='hockey-page'>
          <div className='team-card'>

        <div className='side-bar-hockey'>
            <SidebarHockey />
        </div>

            <div className='panel-text'>
              <LiveGames />
            
            </div>

            <div className='team-card'>
              <TeamCardIce />
            </div>


          </div>
          <Dashboard />
          <DashCal />
        </div>
    
    </>
  );
}
