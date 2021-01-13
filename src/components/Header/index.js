import React, {useState} from 'react';

import LogoDark from "./../../img/logo/logo-dark.png";
import LogoWhite from "./../../img/logo/logo-white.png";
import MenuImg from "./../../img/nav/agreement.png";
import NepalFlag from "./../../img/logo/flag.jpg";
import UsFlag from "./../../img/logo/united-states.svg";

import './header.scss';
import './menu.scss';
import './../Dropdown/dropdown.scss';
import './../Select-language/lang.scss';
import './../../css/all.css';

const Header = ({tabClassName}) => {
  const [toggleSidenav, setToggleSidenav] = useState(false);
  const [language, setLanguage] = useState(0);
  const [languageSelectActive, setLanguageSelectActive] = useState(false);
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
            <div className={tabClassName==='is-dark' ? "main-navigation is-dark" :  "main-navigation active"}>
              <ul className="menu-collapse open">
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
                {/* <div className="search-option">
                    <a href="#/"><i className="fas fa-search"></i></a>
                </div> */}
                <button className="common-button is-bg is-icon is-sm is-mid-rounded">
                    <span>Login</span>
                    <i></i>
                </button> 
                <div className={languageSelectActive ?  "lang-select custom-dropdown active" :  "lang-select custom-dropdown"}
                onClick={() => setLanguageSelectActive(!languageSelectActive)}
                >
                  <a href="#/" className="flag">
                      <img src={language===0 ?  NepalFlag : UsFlag} alt="nepal_flag"/>
                  </a>
                  <ul className="custom-dropdown-menu">
                      <li onClick={() => setLanguage(0)} ><a>Nepali</a></li>
                      <li onClick={() => setLanguage(1)}><a>English</a></li>
                  </ul>
                </div>
            </div>
}
            {/* toggle button */}
            <div className={toggleSidenav ? "toggle-button active" : "toggle-button"}
            onClick={() => setToggleSidenav(!toggleSidenav)}
            >
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