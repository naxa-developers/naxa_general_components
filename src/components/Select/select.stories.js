import React from 'react';
import Select from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Select
      options={[
        { label: 'option1', value: 'option1' },
        { label: 'option2', value: 'option2' },
        { label: 'option3', value: 'option3' },
      ]}
      onChange={(selectedOption) => console.log(selectedOption)}
    />
  ));
