import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Link } from 'react-router-dom';


import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearIcon from '@rsuite/icons/legacy/Gear';

const lineOneStyles = {
  padding: '15px 20px',
  color: '#fff',
  background: '#161616',
  borderRight: "2px solid #008b8b"
};


const headerTeamStyles = {
  padding: 20,
  fontSize: 26,
  background: '#1a1d24',
  color: ' #fff',

};

const headerAdvancedStyles = {
  padding: 20,
  fontSize: 26,
  background: '#1a1d24',
  color: ' #fff',
  borderTop: "1px solid #008b8b"
};

const headerSettingsStyles = {
  padding: 20,
  fontSize: 26,
  background: '#1a1d24',
  color: ' #fff',
  borderTop: "1px solid #008b8b"

};

const dividerStyles = {
  color: '#007d9c',
  border: '2px solid #008b8b'
};

const brandStyles = {
  // borderRight: "2px solid #008b8b",
  borderTop: "2px solid #008b8b",
  borderBottom: "0.5px solid grey",
  fontSize: 20,
  textAlign: 'center',
  background: '#1a1d24',
}

const bodyStyles = {
  background: '#1a1d24',
  // borderRight:"2px solid #008b8b"
}


const Sidebar = () => (
  <div style={{ width: 240, position: 'relative', top: '8vh', background: '#161616' }}>
    <Sidenav defaultOpenKeys={['1', '2']}>
      <Sidenav.Header icon={<DashboardIcon />}>
        <div style={brandStyles}>------- At-A-Glance -------</div>
      </Sidenav.Header>
      <Sidenav.Body panel style={bodyStyles}>
        <Nav>
          <Nav.Menu eventKey="1" title="Roster" icon={<GroupIcon />} panel style={headerTeamStyles}>
            <Nav.Item divider line style={dividerStyles} />
            <Nav.Item eventKey="2-1" panel style={lineOneStyles}>Starting</Nav.Item>
            <Nav.Item eventKey="2-2" panel style={lineOneStyles}>
              <Link to="/sports/calendar" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                Calendar
              </Link>
            </Nav.Item>
            <Nav.Item eventKey="2-3" panel style={lineOneStyles}>Injuries</Nav.Item>
            <Nav.Item eventKey="2-4" panel style={lineOneStyles}>Game Reels</Nav.Item>
          </Nav.Menu>

          <Nav.Menu eventKey="2" title="League" icon={<MagicIcon />} panel style={headerAdvancedStyles}>
            <Nav.Item divider line style={dividerStyles} />
            <Nav.Item eventKey="2-1" panel style={lineOneStyles}>Announcements</Nav.Item>
            <Nav.Item eventKey="2-2" panel style={lineOneStyles}>Upcoming Games</Nav.Item>
            <Nav.Item eventKey="2-3" panel style={lineOneStyles}>Results</Nav.Item>
            <Nav.Item eventKey="2-4" panel style={lineOneStyles}>Season Standings</Nav.Item>
            <Nav.Item eventKey="2-5" panel style={lineOneStyles}>Tournaments</Nav.Item>

          </Nav.Menu>

          <Nav.Menu eventKey="3" title="Finances" icon={<MagicIcon />} panel style={headerAdvancedStyles}>
            <Nav.Item divider line style={dividerStyles} />
            <Nav.Item eventKey="3-1" panel style={lineOneStyles}>Revenue</Nav.Item>
            <Nav.Item eventKey="3-2" panel style={lineOneStyles}>Profit</Nav.Item>
            <Nav.Item eventKey="3-3" panel style={lineOneStyles}>Expenses</Nav.Item>
            <Nav.Item eventKey="3-4" panel style={lineOneStyles}>Growth</Nav.Item>
          </Nav.Menu>

          <Nav.Menu eventKey="4" title="Settings" icon={<GearIcon />} panel style={headerSettingsStyles}>
            <Nav.Item divider line style={dividerStyles} />
            <Nav.Item eventKey="4-1" panel style={lineOneStyles}>Applications</Nav.Item>
            <Nav.Item eventKey="4-2" panel style={lineOneStyles}>Add New Team</Nav.Item>
            <Nav.Item eventKey="4-3" panel style={lineOneStyles}>Add New Player</Nav.Item>
          </Nav.Menu>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
);
export default Sidebar;