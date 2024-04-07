import React from 'react';
import ReactDOM from 'react-dom';
import './navside.css';


import { Sidenav, Nav, Toggle } from 'rsuite';
import SendIcon from '@rsuite/icons/Send';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import CalendarIcon from '@rsuite/icons/Calendar';
import PeoplesIcon from '@rsuite/icons/Peoples';
import EmailFillIcon from '@rsuite/icons/EmailFill';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

const NavSide = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');
  return (
    <div className='navside' style={{ width: 260 }}>
      <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
      />
      <hr />
      <Sidenav expanded={expanded} defaultOpenKeys={[]}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Menu placement="rightStart" eventKey="1" title="My Teams" icon={<PeoplesIcon />}>
              <Nav.Item eventKey="1-1">Geo</Nav.Item>
              <Nav.Item eventKey="1-2">Devices</Nav.Item>
              <Nav.Item eventKey="1-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="1-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Item eventKey="2" icon={<EmailFillIcon />}>
              Inbox
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<CalendarIcon />}>
              Calendar
            </Nav.Item>
            <Nav.Item eventKey="4" icon={<SendIcon />}>
              Announcements
            </Nav.Item>
            <Nav.Menu
              placement="rightStart"
              eventKey="5"
              title="Settings"
              icon={<GearCircleIcon />}
            >
              <Nav.Item eventKey="5-1">Applications</Nav.Item>
              <Nav.Item eventKey="5-2">Channels</Nav.Item>
              <Nav.Item eventKey="5-3">Versions</Nav.Item>
              <Nav.Menu eventKey="5-5" title="Custom Action">
                <Nav.Item eventKey="5-6-1">Action Name</Nav.Item>
                <Nav.Item eventKey="5-6-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
  );
};

ReactDOM.render(<NavSide />, document.getElementById('root'));

export default NavSide;