import React from 'react';
import ReactDOM from 'react-dom';

import './Navside.css';

import { Sidenav, Nav, Toggle } from 'rsuite';
import EmailIcon from '@rsuite/icons/Email';
import CalendarIcon from '@rsuite/icons/Calendar';
import PeoplesIcon from '@rsuite/icons/Peoples';
import SpeakerIcon from '@rsuite/icons/Speaker';
import MemberIcon from '@rsuite/icons/Member';



const NavSide = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');
  return (
    <div className='Navside'>
      <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
      />
      <hr />
      <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<EmailIcon />}>
              Inbox
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<CalendarIcon />}>
              Calendar
            </Nav.Item>
            <Nav.Menu placement="rightStart" eventKey="3" title="Leagues" icon={<PeoplesIcon />}>
              <Nav.Item eventKey="3-1">Teams</Nav.Item>
              <Nav.Item eventKey="3-2">Players</Nav.Item>
              <Nav.Item eventKey="3-3">Staff</Nav.Item>
              <Nav.Item eventKey="3-4">Facilities</Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              placement="rightStart"
              eventKey="4"
              title="Announcements"
              icon={<SpeakerIcon />}
            >
              <Nav.Item eventKey="4-1">General Info</Nav.Item>
              <Nav.Item eventKey="4-2">Applications</Nav.Item>
              <Nav.Item eventKey="4-3">Policies</Nav.Item>
              
            <Nav.Menu placement="rightStart" eventKey="5" title="Contacts" icon={<MemberIcon />}>
              <Nav.Item eventKey="5-1">Player Contacts</Nav.Item>
              <Nav.Item eventKey="5-2">Staff Contacts</Nav.Item>
            </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
  );
};


export default NavSide;