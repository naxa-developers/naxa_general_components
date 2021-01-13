import React from 'react';
import Fab from './index.js';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('FAB', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Fab />)

  .add('with Shadow', () => <Fab withShadow />)

  .add('Scroll to top', () => (
    <div style={{ height: '2000px' }}>
      <Fab scrollToTop />
    </div>
  ));
