import React from 'react';
import { Link } from 'react-router-dom';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearIcon from '@rsuite/icons/legacy/Gear';
import './styles.css'; // Import your CSS file

const lineOneStyles = {
  padding: '15px 20px',
  color: '#fff',
  background: '#530302',
  borderRight: "2px solid #123e3e"
};

// Add hover style
const lineOneHoverStyles = {
  ...lineOneStyles,
  backgroundColor: '#731f1f',
};

const headerTeamStyles = {
  padding: 20,
  fontSize: 26,
  background: '#000000',
  color: ' #fff',

};

const headerAdvancedStyles = {
  padding: 20,
  fontSize: 26,
  background: '#000000',
  color: ' #fff',
  borderTop: "1px solid #123e3e"
};

const headerSettingsStyles = {
  padding: 20,
  fontSize: 26,
  background: '#000000',
  color: ' #fff',
  borderTop: "1px solid #0000001a"

};

const dividerStyles = {
  color: '#007d9c',
  border: '2px solid #0000001a'
};

const brandStyles = {
  borderRight: "2px solid white",
  fontSize: 20,
  textAlign: 'center',
  background: '#0000001a',
}

const bodyStyles = {
  background: '#040f12',
  borderRight:"5px solid white",
  borderBottom:"3px solid white"
}

const SidebarBaseball = () => (
  <div style={{ width: 240, position: 'relative', top: '15.7vh', background: '#040f12' }}>
    <Sidenav defaultOpenKeys={['1', '2', '4']}>
      <Sidenav.Header icon={<DashboardIcon />}>
        <div style={brandStyles}></div>
      </Sidenav.Header>
      <Sidenav.Body panel style={bodyStyles}>
        <Nav>
          <Nav.Menu eventKey="1" title="Roster" icon={<GroupIcon />} panel style={headerAdvancedStyles}>
            <Nav.Item divider line style={dividerStyles} />
            <Nav.Item eventKey="1-2" panel style={lineOneStyles}>
              <Link to="/sports/baseball/starting" style={{ color: 'inherit', textDecoration: 'inherit' }}>Lineup</Link>
            </Nav.Item>
            <Nav.Item eventKey="1-3" panel style={lineOneStyles}>
              <Link to="/sports/baseball/tactics" style={{ color: 'inherit', textDecoration: 'inherit' }}>Tactics</Link>
            </Nav.Item>
            <Nav.Item eventKey="1-4" panel style={lineOneStyles}>
              <Link to="/sports/baseball/injuries" style={{ color: 'inherit', textDecoration: 'inherit' }}>Injuries</Link>
            </Nav.Item>
            <Nav.Item eventKey="1-5" panel style={lineOneStyles}>Game Reels</Nav.Item>
          </Nav.Menu>

          <Nav.Menu eventKey="2" title="League" icon={<MagicIcon />} panel style={headerAdvancedStyles}>
            <Nav.Item divider line style={dividerStyles} />
            <Nav.Item eventKey="2-1" panel style={lineOneStyles}>Announcements</Nav.Item>
            <Nav.Item eventKey="2-2" panel style={lineOneStyles}>
              <Link to="/sports/baseball/calendar" style={{ color: 'inherit', textDecoration: 'inherit' }}>Calendar</Link>
            </Nav.Item>
          </Nav.Menu>

          <Nav.Menu eventKey="3" title="Finances" icon={<MagicIcon />} panel style={headerAdvancedStyles}>
            <Nav.Item divider line style={dividerStyles} />
            <Nav.Item eventKey="3-1" panel style={lineOneStyles}>Revenue</Nav.Item>
            <Nav.Item eventKey="3-2" panel style={lineOneStyles}>Profit</Nav.Item>
            <Nav.Item eventKey="3-3" panel style={lineOneStyles}>Expenses</Nav.Item>
            <Nav.Item eventKey="3-4" panel style={lineOneStyles}>Growth</Nav.Item>
          </Nav.Menu>

          <Nav.Menu eventKey="4" title="Settings" icon={<GearIcon />} panel style={headerAdvancedStyles}>
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

export default SidebarBaseball;