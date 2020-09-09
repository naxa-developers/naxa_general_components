import React from 'react';
import './badge.scss';

const Badge = (props) => (
  <span className={`badge ${props.className}`} style={props.style}>3
    {props.label && <span>{props.label}</span>}
  </span>
);
export default Badge;