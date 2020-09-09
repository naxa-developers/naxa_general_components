import React from 'react';
import './button.scss';

const Button = (props) => (
  <button className={`common-button ${props.className}`}>Read more</button>
);

export default Button;
