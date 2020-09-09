import React from 'react';
import Breadcrumb from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('Breadcrumb', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div className="breadcrumb">
        <ol>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li class="current">Services</li>
        </ol>
    </div>
  ))