import React from 'react';
import Header from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import LogoDark from "./../../img/logo/logo-dark.png";
import LogoWhite from "./../../img/logo/logo-white.png";
import MenuImg from "./../../img/nav/agreement.png";
import Flag from "./../../img/logo/flag.jpg";

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <header className="site-header">
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
  ))

  .add('With fixed-header', () => (
      <header className="site-header is-fixed">
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
  ))

  
  .add('With fixed-header on scroll', () => (
    <header className="site-header is-fixed scroll-header">
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
))

  .add('With form', () => (
    <header className="site-header is-bg">
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

            {/* form */}
            <div class="right">
                <div class="search-option">
                    <a href="#/"><i class="fas fa-search"></i></a>
                </div>
                <button class="common-button is-bg is-icon is-sm is-mid-rounded">
                    <span>Login</span>
                    <i></i>
                </button> 
                <div className="lang-select custom-dropdown active">
                  <a href="#/" className="flag">
                      <img src={Flag} alt="nepal_flag"/>
                  </a>
                  <ul class="custom-dropdown-menu">
                      <li><a>Nepali</a></li>
                      <li><a>English</a></li>
                  </ul>
                </div>
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
      <form action="" class="search-box">
        <input type="text" class="form-control search-input" placeholder="Type here to search..."/>
      </form>
    </header>    
    
  ))

  .add('With light', () => (
    <header className="site-header is-light">
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
  ))

  .add('With dark', () => (
    <header className="site-header is-dark">
      <div class="container">
        <div className="header-in">
            {/* logo */}
            <a className="logo is-light">
                <img class="logo-dark" src={LogoDark} alt="logo-dark" />
                <img class="logo-white" src={LogoWhite} alt="logo-dark" />
            </a>

            {/* navbar menu */}
            <div className="main-navigation is-dark">
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
  ))
  