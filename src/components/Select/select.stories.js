import React from 'react';
import Select from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div class="custom-select">
        <p class="selected-item">
            <span>Choose your option</span>
        </p>
        <ul class="select-list left-dropdown">
            <li>
                <i class="fas fa-hand-point-right"></i>
                <span>Select 1</span>
            </li>
            <li>
                <i class="fas fa-hand-point-right"></i>
                <span>Select 2 </span>
            </li>
            <li>
                <i class="fas fa-hand-point-right"></i> 
                <span>Select 3 </span>
            </li>
            <li>
                <i class="fas fa-hand-point-right"></i>
                <span>Select 4 </span>
            </li>
        </ul>
    </div>
  ))