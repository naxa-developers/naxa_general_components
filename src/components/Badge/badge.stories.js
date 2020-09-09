import React from 'react';
import Badge from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Badge/>
  ))
  .add('With bg', () => (
    <Badge className="is-bg"
    />
  ))
  .add('With label', () => (
    <Badge className="is-label"
      label="new"
    />
  ))
  

