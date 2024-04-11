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
  <Timeline className="custom-timeline">
    <Timeline.Item dot={<img src={Hawks} alt="Hawks" style={{borderRadius:35}} />}>
      <p>March 1, 10:20</p>
      <p>Your order starts processing</p>
    </Timeline.Item>
    <Timeline.Item dot={<img src={Buffalo} alt="Buffalo" style={{borderRadius:35}} />}>
      <p>March 1, 11:34</p>
      <p>The package really waits for the company to pick up the goods</p>
    </Timeline.Item>
    <Timeline.Item dot={<img src={Wolves} alt="Wolves" style={{borderRadius:35}}  />}>
      <p>March 1, 16:20</p>
      <p>[Packed]</p>
      <p>Beijing company has received the shipment</p>
    </Timeline.Item>
    <Timeline.Item dot={<img src={Vipers} alt="Vipers" style={{borderRadius:35}} />}>
      <p>March 2, 06:12</p>
      <p>[In transit]</p>
      <p>Order has been shipped from Beijing to Shanghai</p>
    </Timeline.Item>
    <Timeline.Item dot={<img src={Sharks} alt="Sharks" style={{borderRadius:35}} />}>
      <p>March 2, 09:20</p>
      <p>[In transit]</p>
      <p>Sended from the Shanghai Container Center to the distribution center</p>
    </Timeline.Item>
    <Timeline.Item dot={<img src={Dragons} alt="Dragons" style={{borderRadius:35}} />}>
      <p>March 3, 14:20</p>
      <p>[Delivery]</p>
      <p>Shanghai Hongkou District Company Deliverer: Mr. Li, currently sending you a shipment</p>
    </Timeline.Item>
    <Timeline.Item dot={<img src={Bears} alt="Bears" style={{ background: '#15b215', color: '#fff', borderRadius:35 }} />}>
      <p>March 3, 17:50</p>
      <p>[Received]</p>
      <p>Your courier has arrived and the signer is the front desk</p>
    </Timeline.Item>
  </Timeline>
);

export default DashTimeline;
