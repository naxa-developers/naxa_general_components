import React from 'react';
import './tabs.scss';
import './../List/list.scss';

const Tabs = (props) => (
    <div className={`custom-tab ${props.className}`} onClick={props.onClick}>
    </div>
  );
  export default Tabs;