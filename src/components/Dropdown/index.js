import React, { useState } from "react";
import "./dropdown.scss";
import "../Button/button.scss";
import PropTypes from "prop-types";

function Dropdown({ className, trigger, content }) {
  const [showContent, setShowContent] = useState(false);
  function toggleContent(e) {
    e.stopPropagation();
    setShowContent(!showContent);
  }

  function closeContent(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowContent(false);
    }
  }

  return (
    <div
      className={`custom-dropdown ${className} ${showContent ? "active" : ""}`}
      onBlur={closeContent}
      tabIndex="0"
      role="button"
    >
      {trigger(toggleContent)}
      <ul class={`custom-dropdown-menu`}>{content(showContent)}</ul>
    </div>
  );
}

Dropdown.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  className: "",
};

export default Dropdown;
