import React from 'react';
import { Panel } from 'rsuite';
import llamasLogo from './assets/llamas_logo.png'; // Import the image
import { position } from '@chakra-ui/react';
import Bears from './assets/bears_two.png';

function UpNext() {
  return (
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 335, height: 320, border:'1px solid #ffffff08', borderRadius: '20px', backgroundColor: '#35353580', fontSize:'25px', position:'absolute', left: '25.8vw', top:'24vh' }}>
      <hr style={{width:'250px', position:'relative', top:'5px', left:'40px'}}></hr>
      <Panel style={{color: 'white', textAlign:'center', fontSize:'22px'}}>
        <p>
          <small style={{fontWeight:'bold', fontSize:'24px', position:'relative', top:'-55px', left:'-15px'}}>
           Next Game:
          </small>
          
          <img src={Bears} width="100" height="100" style={{position:'relative', left: '-65px', top:'35px'}} alt="Bears Logo" />
        </p>
        <p>
          <small style={{fontSize:'15px', fontWeight:'bold', position:'relative', top:'-40px'}}>

          </small>
        </p>
        <p>
          <small style={{fontSize:'19px', color: '#ffffff88',position:'relative', top:'25px'}}>
            @ Bradentown Bears
          </small>
        </p>
        <p>
          <small style={{fontSize:'21px', color: '#ffffff88',position:'relative', top:'25px'}}>
            04/19 @ 7pm
          </small>
          <small style={{display: 'flex', flexDirection: 'column', color: '#ffffff98', position:'relative', top:'-60px',left:'-2px', fontSize:'20px' }}>
                   
          </small>
        </p>
      </Panel>
    </Panel>
  );
}

export default UpNext;
