import React from 'react';
import './button.scss';

const Button = (props) => (
  <button className={`common-button ${props.className}`}> 
    <span>Read more</span>
  </button>
);

export default Button;
