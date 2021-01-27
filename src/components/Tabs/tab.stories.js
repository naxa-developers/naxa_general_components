import React from 'react';
import Tabs from './index.js';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Tabs
      tabClassName={select(
        'Type',
        {
          default: 'tab-list is-bg',
          withBorder: 'tab-list is-border',
          withShadow: 'tab-list is-shadow',
          isCenter: 'tab-list is-center',
        },
        'tab-list is-bg'
      )}
    />
  ))
