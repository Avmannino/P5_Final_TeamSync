import React from 'react';
import './BaseballField.css';
import BaseballDiag from './assets/baseball_field.png';

const BaseballField = () => {
  return (
    <div>
        <img src={BaseballDiag} alt="Field" className="field" />
      
    </div>
  )
}

export default BaseballField;
