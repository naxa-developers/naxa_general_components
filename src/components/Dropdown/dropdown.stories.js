import React from "react";
import Dropdown from "./index.js";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

storiesOf("Dropdown", module)
  .addDecorator(withKnobs)
  .add("Click and hover", () => (
    <Dropdown
      trigger={(toggleContent) => (
        <button className="common-button is-bg" onClick={toggleContent}>
          <span>Dropdown</span>
          <i class="fas fa-caret-down"></i>
        </button>
      )}
      content={() => (
        <>
          <li>
            <a>List1</a>
          </li>
          <li>
            <a>List2</a>
          </li>
          <li>
            <a>List3</a>
          </li>
          <li>
            <a>List4</a>
          </li>
          <li>
            <a>List5</a>
          </li>
          <li>
            <a>List6</a>
          </li>
        </>
      )}
    />
  ))
  .add("Hover only", () => (
    <Dropdown
      trigger={(toggleContent) => (
        <button className="common-button is-bg" onClick={() => {}}>
          <span>Dropdown</span>
          <i class="fas fa-caret-down"></i>
        </button>
      )}
      content={() => (
        <>
          <li>
            <a>List1</a>
          </li>
          <li>
            <a>List2</a>
          </li>
          <li>
            <a>List3</a>
          </li>
          <li>
            <a>List4</a>
          </li>
          <li>
            <a>List5</a>
          </li>
          <li>
            <a>List6</a>
          </li>
        </>
      )}
    />
  ))
  .add("Click only", () => (
    <Dropdown
      trigger={(toggleContent) => (
        <button className="common-button is-bg" onClick={toggleContent}>
          <span>Dropdown</span>
        </button>
      )}
      content={(showContent) => {
        if (showContent) {
          return (
            <>
              <li>
                <a>
                  <i class="fas fa-fan"></i>List1
                </a>
              </li>
              <li>
                <a>
                  <i class="fas fa-tree"></i>List2
                </a>
              </li>
              <li>
                <a>
                  <i class="fab fa-pagelines"></i>List3
                </a>
              </li>
              <li>
                <a>
                  <i class="fas fa-home"></i>List4
                </a>
              </li>
              <li>
                <a>
                  <i class="fas fa-globe"></i>List5
                </a>
              </li>
              <li>
                <a>
                  <i class="fas fa-hand-holding-water"></i>List6
                </a>
              </li>
            </>
          );
        } else {
          return null;
        }
      }}
    />
  ));
