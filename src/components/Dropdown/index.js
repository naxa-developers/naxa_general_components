import React from 'react';
import './dropdown.scss';
import '../Button/button.scss';

const Dropdown = (props) => (
  <div class="dropdown" className={`common-button ${props.className}`} onClick={props.onClick}>
     {<span>{props.label}</span>}
  </div>
);
export default Dropdown;