import React from 'react';
import { Panel } from 'rsuite';
import Dashboard from './Dashboard';
import Llamas from './assets/llamas_logo.png';
import './Baseball.css';
import LiveGames from './LiveGames';
import DashCal from './Calendar';
import TeamCard from './TeamCard';
import TimeDrawer from './Drawer';
import SidebarBaseball from './SidebarBase';
import BaseballCharts from './BaseballCharts';


// import BaseballField from './BaseballField';

export default function Baseball() {
  return (
    <>
      <div className='baseball-page'>
        {/* <Panel><BaseballField /></Panel> */}

        <div className='side-bar-baseball'>
          <SidebarBaseball />
        </div>

        <div className='baseball-charts'>
          <BaseballCharts />
        </div>
      

          <div className='panel-text'>
            <LiveGames />
          </div>

          <div className='team-card'>
            <TeamCard />
          </div>
          <div className='baseball-drawer'>
            <TimeDrawer />
          </div>

        </div>
        <Dashboard />
        <DashCal />

    </>
  );
}

function CustomPanelHeader() {
  return (
    <div className="panel-header">
      <img src={Llamas} alt="Llama" className="llama-img" />
    </div>
  );
}
