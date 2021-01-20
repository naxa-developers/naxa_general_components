import React from "react";
import "./breadcrumb.scss";

function Breadcrumb({ paths }) {
  return (
    <div className="breadcrumb">
      <ol>
        {paths.map((el) => {
          if (el.link != null) {
            return (
              <li>
                <a href={el.link}>{el.name}</a>
              </li>
            );
          } else {
            return <li class="current">{el.name}</li>;
          }
        })}
      </ol>
    </div>
  );
}
export default Breadcrumb;
