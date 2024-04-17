import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './Timeline.css';

import { Timeline } from 'rsuite';


// Import your image paths
import Mavs from './assets/mavericks.png';
import Vipers from './assets/vipers.png';
import Sharks from './assets/sharks.png';
import snowBirds from './assets/snow_birds.png';
import Guardians from './assets/guardians.png';
import Wolves from './assets/wolves.png';
import Buffalo from './assets/buffalo.png';

const DashTimeline = () => (
    <div>
        <Timeline className="custom-timeline">
            <h3 style={{fontSize:'35px'}}>Upcoming Games</h3>
            <Timeline.Item dot={<img src={Mavs} alt="Mavs" style={{ width: '110%', borderRadius: 50, position: 'relative', right: '3vw'}} />}>
                <li>vs. Mavericks</li>
                <li>04/19</li>
            </Timeline.Item>
            <Timeline.Item dot={<img src={Buffalo} alt="Buffalo" style={{ width: '110%', borderRadius: 50, position: 'relative', right: '3vw' }} />}>
                <li>vs. Buffalo</li>
                <li>04/23</li>
            </Timeline.Item>
            <Timeline.Item dot={<img src={Wolves} alt="Wolves" style={{ width: '110%', borderRadius: 50, position: 'relative', right: '3vw' }} />}>
                <li>@ Wolves</li>
                <li>04/29</li>
            </Timeline.Item>
            <Timeline.Item dot={<img src={Vipers} alt="Vipers" style={{ width: '110%', borderRadius: 50, position: 'relative', right: '3vw' }} />}>
                <li>@ Vipers</li>
                <li>05/04</li>
            </Timeline.Item>
            <Timeline.Item dot={<img src={Sharks} alt="Sharks" style={{ width: '110%', borderRadius: 50, position: 'relative', right: '3vw' }} />}>
                <li>@ Sharks</li>
                <li>05/12</li>
            </Timeline.Item>
            <Timeline.Item dot={<img src={snowBirds} alt="Birds" style={{ width: '110%', borderRadius: 50, position: 'relative', right: '3vw' }} />}>
                <li>vs. SnowBirds</li>
                <li>05/17</li>
            </Timeline.Item>
            <Timeline.Item dot={<img src={Guardians} alt="Guardians" style={{ width: '110%',  color: '#fff', borderRadius: 50, position: 'relative', right: '3vw' }} />}>
                <li>@ Guardians</li>
                <li>05/23</li>
            </Timeline.Item>
        </Timeline>
    </div>
);

export default DashTimeline;
