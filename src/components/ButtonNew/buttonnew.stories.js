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
  