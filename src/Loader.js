import React from 'react';
import { Icon } from '@rsuite/icons';
import { FaSpinner } from 'react-icons/fa';

const Loader = () => (
  <div className="icon-example-list">
    <Icon as={FaSpinner} pulse size="2em" />
  </div>
);

export default Loader;
