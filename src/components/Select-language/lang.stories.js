import React from 'react';
import LanguageSelect from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Flag from "./../../img/logo/flag.jpg";

storiesOf('LanguageSelect', module)
  .addDecorator(withKnobs)
  .add('with Flag', () => (
    <div className="lang-select custom-dropdown active">
        <a href="#/" className="flag">
            <img src={Flag} alt="nepal_flag"/>
        </a>
        <ul class="custom-dropdown-menu">
            <li><a>Nepali</a></li>
            <li><a>English</a></li>
        </ul>
    </div>
  ))

  .add('with Choice', () => (
    <div className="lang-select lang-choice">
        <a href="#/" class="">np</a>
        <a href="#/" class="active">en</a>
    </div>
  ))