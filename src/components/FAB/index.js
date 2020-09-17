import React from 'react';
import './fab.scss';

const Fab = (props) => (
    <div className={`fixed-action-btn ${props.className}`} onClick={props.onClick}>

    </div>
  );
  export default Fab;