import React from 'react';
import { Panel } from 'rsuite';
import llamasLogo from './assets/llamas_logo.png'; // Import the image
import { position } from '@chakra-ui/react';

function TeamCard() {
  return (
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 335, height: 450, border:'1px solid #ffffff48', borderRadius: '20px', backgroundColor: '#35353563', fontSize:'25px', position:'absolute', left: '43vw', top:'15vh' }}>
      <img src={llamasLogo} width="260" height="245" style={{position:'relative', left: '35px', top:'15px'}} alt="Llamas Logo" />
      <hr style={{width:'250px', position:'relative', top:'5px', left:'40px'}}></hr>
      <Panel style={{color: 'white', textAlign:'center', fontSize:'22px'}}>
        <p>
          <small style={{fontWeight:'bold', fontSize:'22px', position:'relative', top:'-25px'}}>
            The Las Vegas Llamas
          </small>
        </p>
        <p>
          <small style={{fontSize:'15px', fontWeight:'bold', position:'relative', top:'-47px'}}>
          📍Las Vegas, NV
          </small>
        </p>
        <p>
          <small style={{fontSize:'16px', fontWeight:'lighter', color: '#ffffff88',position:'relative', top:'-70px'}}>
            Est. 2020
          </small>
        </p>
        <p>
          <small style={{fontWeight:'normal', position:'relative', top:'-75px', textDecoration: 'underline', fontSize:'23px'}}>
            Record:
          </small>
          <small style={{display: 'flex', flexDirection: 'column', color: '#ffffff98', position:'relative', top:'-74px',left:'-2px', fontSize:'20px' }}>
                        155-100
          </small>
        </p>
      </Panel>
    </Panel>
  );
}

export default TeamCard;
