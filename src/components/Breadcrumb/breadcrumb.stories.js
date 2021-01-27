import React from "react";
import Breadcrumb from "./index.js";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

const paths = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Current Item",
    link: null,
  },
];
storiesOf("Breadcrumb", module)
  .addDecorator(withKnobs)
  .add("Dynamic", () => <Breadcrumb paths={paths} />);
