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
  ))
  .add('With Search', () => (
    <Select
      withSearch
      options={[
        { label: 'option1', value: 'option1' },
        { label: 'option2', value: 'option2' },
        { label: 'option3', value: 'option3' },
      ]}
      onChange={(selectedOption) => console.log(selectedOption)}
    />
  ))
  .add('With Nested Options', () => (
    <Select
      options={[
        {
          label: 'A',
          options: [
            { label: 'A1', value: 'A1' },
            { label: 'A2', value: 'A2' },
          ],
        },
        {
          label: 'B',
          options: [
            { label: 'B2', value: 'B2' },
            { label: 'B3', value: 'B3' },
          ],
        },
      ]}
      onChange={(selectedOption) => console.log(selectedOption)}
    />
  ));
