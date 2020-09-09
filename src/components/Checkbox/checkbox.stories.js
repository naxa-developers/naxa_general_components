import React from 'react';
import Checkbox from './index.js';
import "../../css/all.css";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div class="custom-checkbox">
        <input type="checkbox" id="checkbox_checked"/>
        <label for="checkbox_checked">Yes</label>
    </div>
  ))
  .add('checked', () => (
    <div class="custom-checkbox">
        <input type="checkbox" id="checkbox_checked" class="checked"/>
        <label for="checkbox_checked">Yes</label>
    </div>
  ))
  .add('filled-in-checked', () => (
    <div class="custom-checkbox">
        <input type="checkbox" id="checkbox_checked"/>
        <label for="checkbox_checked">Yes</label>
    </div>
  ))
  .add('Disabled', () => (
    <div class="custom-checkbox">
        <input disabled type="checkbox" id="checkbox_checked"/>
        <label for="checkbox_checked">Yes</label>
    </div>
  ))
  .add('Indeterminate', () => (
    <div class="custom-checkbox">
        <input type="checkbox" id="checkbox_checked" class="indeterminate"/>
        <label for="checkbox_checked">Yes</label>
    </div>
  ))