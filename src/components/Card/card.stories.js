import React from 'react';
import Card from './index.js';
import Button from '../Button/index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div class="row">
        <div class="grid-md-4">
            <div class="card">
                <div class="card-body">
                    <span>card</span>
                    <h2>Hello World</h2>
                </div>  
                <div class="card-footer">
                    <button class="common-button is-clear">Read more</button>
                </div>
            </div>
        </div>
    </div>
  ))
   .add('With Image', () => (
    <div class="row">
        <div class="grid-md-4">
            <div class="card">
                <figure></figure>
                <div class="card-body">
                    <span>span-title</span>
                    <h2>Hello World</h2>
                    <a  href="#/" class="common-link is-clear">Read more</a>
                </div>
            </div>
        </div>
    </div>
  ))
  .add('With horizontal', () => (
    <div class="row">
        <div class="grid-md-4">
            <div class="card card-horizontal">
                <figure></figure>
                <div class="card-body">
                    <span>span-title</span>
                    <h2>Hello World</h2>
                    <a  href="#/" class="common-link is-clear">Read more</a>
                </div>
            </div>
        </div>
    </div>
  ))
  .add('With reveal', () => (
    <div class="row">
        <div class="grid-md-4">
            <div class="card card-reveal">
                <figure></figure>
                <div class="card-body">
                    <span>span-title</span>
                    <h2>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </h2>
                </div>
                <div class="reveal-body">
                    <h2>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </h2>
                    <p>ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="#/" class="common-link is-clear">Read more</a>
                </div>
            </div>
        </div>
    </div>
  ))
   .add('With overlay', () => (
    <div class="row">
        <div class="grid-md-4">
            <div class="card card-overlay">
                <figure></figure>
                <div class="card-body overlay-body">
                    <h2>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </h2>
                    <div class="addr">
                        <time>20th Sep, 2019 at 10:30 AM - 12:00 PM</time>
                        <address>Birendra International Conference, New Baneshwor</address>
                    </div>
                    <p>ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="#/"  class="common-link is-clear">Read more</a>
                </div>
            </div>
        </div>
    </div>
  ))