import React from 'react';
import './range.scss';

const Range = (props) => (
    <div class={`range ${props.className}`}>
        {<span style={props.style}></span>}
    </div>
);
export default Range;