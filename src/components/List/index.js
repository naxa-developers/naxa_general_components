import React from 'react';
import './list.scss';

const List = (props) => (
    <ul className={`list ${props.className}`} onClick={props.onClick}>
    </ul>
  );
  export default List;