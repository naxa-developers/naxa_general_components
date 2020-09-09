import React from 'react';
import Range from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('Range', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div class="range">
        <input type="range" min="0" max="100" step="0.5" class=""/>
        <span class="thumb">
        <span class="value">5.5</span></span>
    </div>
  ))
  .add('cutom-range', () => (
    <div class="range custom">
        <span class="bar"><span class="fill" id="fill_2"></span></span>
        <input class="slider" id="rangeSlider" type="range" min="1" max="100" value="50"/>
    </div>
))
