import React from 'react';

import LogoDark from "./../../img/logo/logo-dark.png";
import LogoWhite from "./../../img/logo/logo-white.png";
import MenuImg from "./../../img/nav/agreement.png";
import Flag from "./../../img/logo/flag.jpg";

import './header.scss';
import './menu.scss';
import './../Dropdown/dropdown.scss';
import './../Select-language/lang.scss';
import './../../css/all.css';

const Header = ({tabClassName}) => {
  return(
    <header className={`site-header ${tabClassName}`}>
      <div className="container">
        <div className="header-in">
            {/* logo */}
            <a className={tabClassName==='is-dark' ? "logo is-light" :  "logo is-dark"}>
                <img className="logo-dark" src={LogoDark} alt="logo-dark" />
                <img className="logo-white" src={LogoWhite} alt="logo-dark" />
            </a>

            {/* navbar menu */}
            <div className={tabClassName==='is-dark' ? "main-navigation is-dark" :  "main-navigation"}>
              <ul className="menu-collapse">
                <li className="menu-item">
                  <a href="#">About</a>
                </li>
                <li className="menu-item is-submenu">
                  <a href="#">Services</a>
                  <ul className="submenu">
                      <li>
                          <a href="#">
                            <i className="fas fa-atom"></i>
                              Sublist 1
                          </a>
                      </li>
                      <li>
                          <a href="#">
                            <img src={MenuImg} alt="menu img" />Sublist 2
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              Sublist 3
                          </a>
                      </li>
                      <li>
                          <a href="#">Sublist 4</a>
                      </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#">Team</a>
                </li>
                <li className="menu-item">
                  <a href="#">Media</a>
                </li>
              </ul>
            </div>

               {/* form */}
              { tabClassName==='with-form' && <div className="right">
                <div className="search-option">
                    <a href="#/"><i className="fas fa-search"></i></a>
                </div>
                <button className="common-button is-bg is-icon is-sm is-mid-rounded">
                    <span>Login</span>
                    <i></i>
                </button> 
                <div className="lang-select custom-dropdown active">
                  <a href="#/" className="flag">
                      <img src={Flag} alt="nepal_flag"/>
                  </a>
                  <ul className="custom-dropdown-menu">
                      <li><a>Nepali</a></li>
                      <li><a>English</a></li>
                  </ul>
                </div>
            </div>
}
            {/* toggle button */}
            <div className="toggle-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

        </div>
      </div>  
    </header>    
)
}
export default Header;