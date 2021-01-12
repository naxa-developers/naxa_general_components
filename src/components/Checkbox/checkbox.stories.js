import React from "react";
import Checkbox from "./index.js";
import "../../css/all.css";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
  array,
  select,
} from "@storybook/addon-knobs";

storiesOf("Checkbox", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Checkbox
      classname={select(
        "Type",
        {
          Checked: "checked",
          Indeterminate: "indeterminate",
          Default: "default",
        },
        "default"
      )}
      label={text("Label Text", "Label")}
      disabled={boolean("Disabled", false)}
    />
  ))
  .add("Indeterminate", () => (
    <Checkbox
      classname={select(
        "Type",
        {
          Checked: "checked",
          Indeterminate: "indeterminate",
          Default: "default",
        },
        "indeterminate"
      )}
      label={text("Label Text", "Label")}
      disabled={boolean("Disabled", false)}
    />
  ))
  .add("Checked", () => (
    <Checkbox
      classname={select(
        "Type",
        {
          Checked: "checked",
          Indeterminate: "indeterminate",
          Default: "default",
        },
        "Checked"
      )}
      label={text("Label Text", "Label")}
      disabled={boolean("Disabled", false)}
    />
  ))
  .add("Disabled", () => (
    <Checkbox
      classname={select(
        "Type",
        {
          Checked: "checked",
          Indeterminate: "indeterminate",
          Default: "default",
        },
        "Default"
      )}
      label={text("Label Text", "Label")}
      disabled={boolean("Disabled", true)}
    />
  ));
