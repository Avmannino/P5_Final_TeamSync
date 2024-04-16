import React from 'react';
import ReactDOM from 'react-dom';
import './HockeyLines.css';
import linesHeader from './assets/lines_header.png';
import forwards from './assets/forwards.png';
import defense from './assets/defense.png';
import goalies from './assets/goalies.png';


import { Tabs, Placeholder } from 'rsuite';

const HockeyLines = () => (
    <>
        <div className='lines-container'>
            <h4><img src={linesHeader} style={{ position: 'absolute', top: '10vh', left: '25vw' }} alt="lines-h1" /></h4>
            <Tabs defaultActiveKey="1" vertical appearance="subtle" style={{ position: 'absolute', top: '35vh', left: '33vw'}}>
                <Tabs.Tab eventKey="1" title="Forwards">
                    <img src={forwards} style={{ position: 'relative' }} className="forwards-image" />
                </Tabs.Tab>
                <Tabs.Tab eventKey="2" title="Defense">
                    <img src={defense} style={{ position: 'relative' }} className="def-image" />
                </Tabs.Tab>
                <Tabs.Tab eventKey="3" title="Goaltenders">
                    <img src={goalies} style={{ position: 'relative' }} className="goalie-image" />
                </Tabs.Tab>
            </Tabs>
        </div>
    </>
);

export default HockeyLines;