import React from 'react';
import './header.scss';
import './menu.scss';
import './../Dropdown/dropdown.scss';
import './../Select-language/lang.scss';
import './../../css/all.css';

const Header = (props) => (
    <Header className={`site-header ${props.className}`}>
    </Header> 
);
export default Header;