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

const Header = (props) => (
         <header className={`site-header ${props.className}`}>
      <div class="container">
        <div className="header-in">
            {/* logo */}
            <a className="logo is-dark">
                <img class="logo-dark" src={LogoDark} alt="logo-dark" />
                <img class="logo-white" src={LogoWhite} alt="logo-dark" />
            </a>

            {/* navbar menu */}
            <div className="main-navigation">
              <ul class="menu-collapse">
                <li class="menu-item">
                  <a href="#">About</a>
                </li>
                <li class="menu-item is-submenu">
                  <a href="#">Services</a>
                  <ul class="submenu">
                      <li>
                          <a href="#">
                            <i class="fas fa-atom"></i>
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
                <li class="menu-item">
                  <a href="#">Team</a>
                </li>
                <li class="menu-item">
                  <a href="#">Media</a>
                </li>
              </ul>
            </div>

            {/* toggle button */}
            <div class="toggle-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

        </div>
      </div>  
    </header>    
);
export default Header;