import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';


import { Nav } from 'rsuite';

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
    <Nav.Item icon={<MenuIcon />}>home</Nav.Item>
    <Nav.Item icon={<GithubAltIcon />}>sports</Nav.Item>
    <Nav.Item icon={<GrowthIcon />}>pricing</Nav.Item>
    <Nav.Item icon={<MessageIcon />}>social</Nav.Item>
    <Nav.Item icon={<MemberIcon />}>log-in</Nav.Item>
    <Nav.Menu title="more...">
      <Nav.Item icon={<PhoneFillIcon />}>contact us</Nav.Item>
    </Nav.Menu>
  </Nav>
);

export default TopDashNav;