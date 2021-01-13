import React, { useState } from 'react';
import Duolingo from './../../img/tabs/Duolingo.png';
import Flurry from './../../img/tabs/Flurry.png';
import './tabs.scss';

function Tabs({ tabClassName }) {
  const [tabState, setTabState] = useState(0);
  return (
    <div className="custom-tab">
      <ul
        className={
          tabClassName == 'tab-list is-center'
            ? 'tab-list is-bg is-center'
            : tabClassName
        }
      >
        <li
          className={tabState === 0 ? 'current' : ''}
          onClick={() => setTabState(0)}
        >
          <a data-tab="tab1">Test 1</a>
        </li>
        <li
          className={tabState === 1 ? 'current' : ''}
          onClick={() => setTabState(1)}
        >
          <a data-tab="tab2">Test 2</a>
        </li>
        <li
          className={tabState === 2 ? 'current' : ''}
          onClick={() => setTabState(2)}
        >
          <a data-tab="tab3">Test 3</a>
        </li>
      </ul>
      <div className="custom-tab-content">
        <div className="tab-item" id="tab1">
          <ul
            className={
              tabClassName == 'tab-list is-center'
                ? 'tab-list is-bg is-center'
                : 'tab-list'
            }
          >
            <li>
              <a href="#">
                <img src={Duolingo} alt="client" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Flurry} alt="client" />
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-item current" id="tab2">
          <ul
            className={
              tabClassName == 'tab-list is-center'
                ? 'tab-list is-bg is-center'
                : 'tab-list'
            }
          >
            <li>
              <a href="#">
                <img src={Duolingo} alt="client" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Flurry} alt="client" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
