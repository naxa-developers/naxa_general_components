import React from 'react';
import './card.scss';
import '../Button/button.scss';

const Card = (props) => (
    <div class="card" style={props.style}>Hello
      {props.label && <span>{props.label}</span>}
    </div>
);
export default Card;