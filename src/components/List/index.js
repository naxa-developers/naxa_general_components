import React from 'react';
import './list.scss';

const List = props => (
  <ul className={`list ${props.className}`} onClick={props.onClick}>
    {props.children}
  </ul>
);

export const ListItem = ({
  withLink = false,
  withImage = false,
  children,
  link,
  imageTag,
}) => {
  return (
    <li>
      {withLink ? (
        <>
          <i class='fas fa-angle-double-right'></i>
          <a href={link}>{children}</a>
        </>
      ) : withImage ? (
        imageTag
      ) : (
        <>
          <i class='fas fa-angle-double-right'></i>
          {children}
        </>
      )}
    </li>
  );
};

export default List;
