import React from 'react';
import { Panel } from 'rsuite';
import Dashboard from './Dashboard';
import Llamas from './assets/llamas_logo.png';
import './Baseball.css';

export default function Baseball() {
  return (
    <div>
      <div className='team-card'>
        <Panel header={<CustomPanelHeader />}>
          <div className='panel-text'>
            The Las Vegas Llamas
            <p>Las Vegas, Nevada</p>
          </div>

        </Panel>
      </div>
      <Dashboard />
    </div>
  );
}

function CustomPanelHeader() {
  return (
    <div className="panel-header">
      <img src={Llamas} alt="Llama" className="llama-img" />
    </div>
  );
}
