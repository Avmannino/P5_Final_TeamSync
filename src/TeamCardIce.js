import React from 'react';
import { Panel } from 'rsuite';
import gullsLogo from './assets/gulls.png'; // Import the image
import './styles.css';

function TeamCardIce() {
  return (
    <Panel shaded bordered bodyFill className='ice-panel-card' style={{ display: 'inline-block', width: 335, height: 450, border:'1px solid #ffffff08', borderRadius: '20px', backgroundColor: '#35353550', fontSize:'25px', position:'absolute', left: '21vw', top:'24vh', display: 'flex', flexDirection: 'column', gap: '15vh' }}>
      <img src={gullsLogo} width="260" height="245" style={{position:'absolute', left: '35px', top:'15px'}} alt="Gulls Logo" />
      {/* <hr style={{width:'250px', position:'relative', top:'5px', left:'40px'}}></hr> */}
      <Panel style={{color: 'white', textAlign:'center', fontSize:'22px'}}>
        <p>
          <small style={{fontWeight:'bold', fontSize:'22px', position:'absolute', top:'260px', left: '3vw'}}>
           Galveston Gulls
          </small>
        </p>
        <p>
          <small style={{fontSize:'15px', fontWeight:'bold', position:'absolute', top:'290px', left: '3.6vw'}}>
          📍Galveston, TX
          </small>
        </p>
        <p>
          <small style={{fontSize:'16px', fontWeight:'lighter', color: '#ffffff88', position:'absolute', top:'315px', left: '5vw'}}>
            Est. 1985
          </small>
        </p>
        <p>
          <small style={{fontWeight:'normal', textDecoration: 'underline', fontSize:'23px', position:'absolute', top:'355px', left: '4.5vw'}}>
            Record:
          </small>
          <small style={{display: 'flex', flexDirection: 'column', color: '#ffffff98', position:'absolute', top:'395px', left: '3.5vw', fontSize:'20px' }}>
                         567-486 (.536)
          </small>
        </p>
      </Panel>
    </Panel>
  );
}

export default TeamCardIce;