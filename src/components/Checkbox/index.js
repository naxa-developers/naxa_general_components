import React from "react";
import "./checkbox.scss";
import "../../css/all.css";
const Checkbox = (props) => (
  <div class="custom-checkbox">
    <input
      type="checkbox"
      id="checkbox_checked"
      class={props.classname}
      disabled={props.disabled}
    />
    <label for="checkbox_checked">{props.label}</label>
  </div>
);

export default Checkbox;
