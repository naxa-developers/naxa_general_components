import React from "react";
import Collapsible from "./index.js";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

storiesOf("Collapsible", module)
  .addDecorator(withKnobs)
  .add("Accordian", () => (
    <Collapsible
      type="accordion"
      header="Hello world"
      body="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu"
    />
  ))
  .add("Popout", () => (
    <Collapsible
      type="popout"
      header="Hello world"
      body="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu"
    />
  ));
