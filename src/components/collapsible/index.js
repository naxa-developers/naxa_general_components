import React, { useState } from "react";
import "./collapsible.scss";

function Collapsible({ header, body, type }) {
  return (
    <ul className={`collapsible ${type}`}>
      <li>
        <div className="collapsible-header">{header}</div>
        <div className="collapsible-body">
          <div class="content">
            <p>{body}</p>
          </div>
        </div>
      </li>
    </ul>
  );
}
export default Collapsible;
