import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './Timeline.css';

import { Timeline } from 'rsuite';


// Import your image paths
import Hawks from './assets/hawks.png';
import Vipers from './assets/vipers.png';
import Sharks from './assets/sharks.png';
import Dragons from './assets/dragons.png';
import Bears from './assets/bears.png';
import Wolves from './assets/wolves.png';
import Buffalo from './assets/buffalo.png';

const DashTimeline = () => (
    <div>
        <Timeline className="custom-timeline">
            <h3 style={{fontSize:'35px'}}>Upcoming Series</h3>
            <Timeline.Item dot={<img src={Hawks} alt="Hawks" style={{ width: '175%', borderRadius: 50, position: 'relative', right: '3vw', fontSize:'10px' }} />}>
                <li>vs. Hicksville Hawks</li>
                <li>04/19 - 04/21</li>
                <li>Games: 4</li>
            </Timeline.Item>
            <Timeline.Item dot={<img src={Buffalo} alt="Buffalo" style={{ width: '175%', borderRadius: 50, position: 'relative', right: '3vw' }} />}>
                <li>vs. Bradentown Buffalo</li>
                <li>04/23 - 04/25</li>
                <li>Games: 3</li>
            </Timeline.Item>
            <Timeline.Item dot={<img src={Wolves} alt="Wolves" style={{ width: '175%', borderRadius: 50, position: 'relative', right: '3vw' }} />}>
                <li>@ Warren Wolves</li>
                <li>04/29 - 05/01</li>
                <li>Games: 3</li>
            </Timeline.Item>
            <Timeline.Item dot={<img src={Vipers} alt="Vipers" style={{ width: '175%', borderRadius: 50, position: 'relative', right: '3vw' }} />}>
                <li>@ Vienna Vipers</li>
                <li>05/04 - 05/07</li>
                <li>Games: 4</li>
            </Timeline.Item>
            <Timeline.Item dot={<img src={Sharks} alt="Sharks" style={{ width: '175%', borderRadius: 50, position: 'relative', right: '3vw' }} />}>
                <li>@ Simmsbury Sharks</li>
                <li>05/10 - 05/12</li>
                <li>Games: 3</li>
            </Timeline.Item>
            <Timeline.Item dot={<img src={Dragons} alt="Dragons" style={{ width: '175%', borderRadius: 50, position: 'relative', right: '3vw' }} />}>
                <li>vs. Dimmsdale Dragons</li>
                <li>05/15 - 05/17</li>
                <li>Games: 3</li>
            </Timeline.Item>
            <Timeline.Item dot={<img src={Bears} alt="Bears" style={{ width: '175%', background: '#15b215', color: '#fff', borderRadius: 50, position: 'relative', right: '3vw' }} />}>
                <li>@ Binghamton Bears</li>
                <li>05/21 - 05/23</li>
                <li>Games: 3</li>
            </Timeline.Item>
        </Timeline>
    </div>
);

export default DashTimeline;
