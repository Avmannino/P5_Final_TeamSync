import React from 'react';
import { Panel } from 'rsuite';
import Dashboard from './Dashboard';
import Llamas from './assets/llamas_logo.png';
import './Baseball.css';


// import BaseballField from './BaseballField';

export default function Baseball() {
  return (
    <>
    
        <div className='baseball-page'>
          {/* <Panel><BaseballField /></Panel> */}
          <div className='team-card'>

            <div className='panel-text'>
            
            </div>


          </div>
          <Dashboard />
        </div>
    
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
