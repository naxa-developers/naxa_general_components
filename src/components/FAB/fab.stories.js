import React from 'react';
import Fab from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('FAB', module)
  .addDecorator(withKnobs)
  .add('Default', () => ( 
    <div className="fixed-action-btn">
        <a className="scroll-top open">
            <i class="fas fa-angle-up"></i>
        </a>
    </div>
  ))

  .add('with Shadow', () => ( 
    <div className="fixed-action-btn is-shadow">
        <a className="scroll-top open">
            <i class="fas fa-angle-up"></i>
        </a>
    </div>
    
  ))