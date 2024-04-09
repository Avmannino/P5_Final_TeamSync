import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Panel, Placeholder } from 'rsuite';
import SportsTable from './SportsTable';
import './Card.css';

const Card = () => (
  <>
    <Panel className='card-one' header="Staring Roster" collapsible>
      <SportsTable />
    </Panel>

    <Panel className='card-two' header="ERA" collapsible>
      
    </Panel>

  </>
);

export default Card;