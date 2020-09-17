import React from 'react';
import './collapsible.scss';

const Collapsible = (props) => (
  <ul className={`collapsible ${props.className}`} onClick={props.onClick}>
  </ul>
);
export default Collapsible;