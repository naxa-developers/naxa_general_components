import React from 'react';
import Tabs from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Duolingo from './../../img/tabs/Duolingo.png';
import Flurry from './../../img/tabs/Flurry.png';

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div class="custom-tab">
      <ul class="tab-list is-bg">
          <li class=""><a href="#"  data-tab="tab1">Test 1</a></li>
          <li class=""><a href="#" data-tab="tab2">Test 2</a></li>
          <li class="current"><a href="#" data-tab="tab3">Test 3</a></li>
      </ul>
      <div class="custom-tab-content">
          <div class="tab-item" id="tab1">
              <ul class="tab-list">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          <div class="tab-item" id="tab2">
              <ul class="tab-list">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          <div class="tab-item current" id="tab2">
              <ul class="tab-list">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          
      </div>
  </div>
  ))

  .add('with border', () => (
    <div class="custom-tab">
      <ul class="tab-list is-border">
          <li class=""><a href="#"  data-tab="tab1">Test 1</a></li>
          <li class=""><a href="#" data-tab="tab2">Test 2</a></li>
          <li class="current"><a href="#" data-tab="tab3">Test 3</a></li>
      </ul>
      <div class="custom-tab-content">
          <div class="tab-item" id="tab1">
              <ul class="tab-list">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          <div class="tab-item" id="tab2">
              <ul class="tab-list">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          <div class="tab-item current" id="tab2">
              <ul class="tab-list">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          
      </div>
  </div>
  ))

  .add('with shadow', () => (
    <div class="custom-tab">
      <ul class="tab-list is-shadow">
          <li class=""><a href="#"  data-tab="tab1">Test 1</a></li>
          <li class=""><a href="#" data-tab="tab2">Test 2</a></li>
          <li class="current"><a href="#" data-tab="tab3">Test 3</a></li>
      </ul>
      <div class="custom-tab-content">
          <div class="tab-item" id="tab1">
              <ul class="tab-list">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          <div class="tab-item" id="tab2">
              <ul class="tab-list">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          <div class="tab-item current" id="tab2">
              <ul class="tab-list">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          
      </div>
  </div>
  ))

  .add('Is-Center', () => (
    <div class="custom-tab">
      <ul class="tab-list is-bg is-center">
          <li class=""><a href="#"  data-tab="tab1">Test 1</a></li>
          <li class=""><a href="#" data-tab="tab2">Test 2</a></li>
          <li class="current"><a href="#" data-tab="tab3">Test 3</a></li>
      </ul>
      <div class="custom-tab-content">
          <div class="tab-item" id="tab1">
              <ul class="tab-list is-center">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          <div class="tab-item" id="tab2">
              <ul class="tab-list is-center">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          <div class="tab-item current" id="tab2">
              <ul class="tab-list is-center">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          
      </div>
  </div>
  ))

  .add('Is-End', () => (
    <div class="custom-tab">
      <ul class="tab-list is-bg is-end">
          <li class=""><a href="#"  data-tab="tab1">Test 1</a></li>
          <li class=""><a href="#" data-tab="tab2">Test 2</a></li>
          <li class="current"><a href="#" data-tab="tab3">Test 3</a></li>
      </ul>
      <div class="custom-tab-content">
          <div class="tab-item" id="tab1">
              <ul class="tab-list is-end">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          <div class="tab-item" id="tab2">
              <ul class="tab-list is-end">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          <div class="tab-item current" id="tab2">
              <ul class="tab-list is-end">
                  <li>
                      <a href="#">
                          <img src={Duolingo} alt="client"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src={Flurry} alt="client"/>
                      </a>
                  </li>
              </ul>
          </div>
          
      </div>
  </div>
  ))