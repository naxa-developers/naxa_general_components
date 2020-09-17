import React from 'react';
import Button from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
     <Button/>
  ))
  .add('is-bg', () => (
     <Button className="is-bg" />
  ))
  .add('is-border', () => (
   <Button className="is-border" />
))
.add('is-clear', () => (
   <Button className="is-clear" />
))
.add('no-border', () => (
   <Button className="no-border" />
))
.add('is-disable', () => (
   <Button className="is-disable" />
))
.add('is-icon', () => (
   <Button className="is-bg is-icon">
      <i></i>
     </Button>
))
.add('is-small', () => (
   <Button className="is-bg is-sm is-rounded"/>
))
.add('is-rounded', () => (
   <Button className="is-bg is-rounded"/>
))
.add('is-mid-rounded', () => (
   <Button className="is-bg is-mid-rounded"/>
))
.add('is-block', () => (
   <Button className="is-bg is-full-line"/>
))