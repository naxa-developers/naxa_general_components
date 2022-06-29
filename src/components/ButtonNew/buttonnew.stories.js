import React from 'react';
import Button from './index.js';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean,select } from '@storybook/addon-knobs';

storiesOf('Button New', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
     <Button btnType={select(
      "Type",
      {
        Primary: "Primary",
        Secondary: "Secondary",
      },
      "default"
    )}
    btnSize={select(
      "Button Size",
      {
        Small: "Small",
        Full: "Full",
        Auto: "Auto",
      },
      "default"
    )}
    btnLabel={text("Label Text", "Add")}
    isDisabled={boolean("Disabled", false)}/>
  ))
  .add('with Icons', () => (
   <Button btnType={select(
      "Button Type",
      {
        Primary: "Primary",
        Secondary: "Secondary",
      },
      "default"
    )}
    btnLabel={text("Label Text", "Add")}
    iconName={text("Material Icon Name", "add_circle_outline")}
    btnSize={select(
      "Button Size",
      {
        Small: "Small",
        Full: "Full",
        Auto: "Auto",
      },
      "default"
    )}
    isDisabled={boolean("Disabled", false)}/>
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