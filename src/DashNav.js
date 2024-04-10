import React from 'react';
import { Nav } from 'rsuite';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

import FacebookSquareIcon from '@rsuite/icons/legacy/FacebookSquare';
import GithubAltIcon from '@rsuite/icons/legacy/GithubAlt';
import CircleIcon from '@rsuite/icons/legacy/Circle';
import MenuIcon from '@rsuite/icons/Menu';
import MemberIcon from '@rsuite/icons/Member';
import MessageIcon from '@rsuite/icons/Message';
import GrowthIcon from '@rsuite/icons/Growth';
import PhoneFillIcon from '@rsuite/icons/PhoneFill';

const TopDashNav = () => (
  <Nav>
    <Nav.Item icon={<MenuIcon />}>
      <Link to="/">Home</Link>
    </Nav.Item>
    <Nav.Item icon={<GithubAltIcon />}>
      <Link to="/sports">Sports</Link>
    </Nav.Item>
    <Nav.Item icon={<GrowthIcon />}>
      <Link to="/pricing">Pricing</Link>
    </Nav.Item>
    <Nav.Item icon={<MessageIcon />}>
      <Link to="/social">Social</Link>
    </Nav.Item>
    <Nav.Item icon={<MemberIcon />}>
      <Link to="/login">Log In</Link>
    </Nav.Item>
    <Nav.Menu title="More...">
      <Nav.Item icon={<PhoneFillIcon />}>
        <Link to="/contact-us">Contact Us</Link>
      </Nav.Item>
    </Nav.Menu>
  </Nav>
);

export default TopDashNav;
