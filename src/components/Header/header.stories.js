import React from 'react';
import Header from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Header
      tabClassName={select(
        "Type",
        {
          default: "",
          withFixed: "is-fixed",
          withFixedOnScroll: "is-fixed scroll-header",
          withForm: "with-form",
          withLight: "is-light",
          withDark: "is-dark"
        },
        ""
      )}
    />
  ))

  .add('With fixed-header', () => (
    <Header
      tabClassName={select(
        "Type",
        {
          default: "",
          withFixed: "is-fixed",
          withFixedOnScroll: "is-fixed scroll-header",
          withForm: "with-form",
          withLight: "is-light",
          withDark: "is-dark"
        },
        "is-fixed"
      )}
    />
  ))


  .add('With fixed-header on scroll', () => (
    <Header
      tabClassName={select(
        "Type",
        {
          default: "",
          withFixed: "is-fixed",
          withFixedOnScroll: "is-fixed scroll-header",
          withForm: "with-form",
          withLight: "is-light",
          withDark: "is-dark"
        },
        "is-fixed scroll-header"
      )}
    />
  ))

  .add('With form', () => (
    <Header
      tabClassName={select(
        "Type",
        {
          default: "",
          withFixed: "is-fixed",
          withFixedOnScroll: "is-fixed scroll-header",
          withForm: "with-form",
          withLight: "is-light",
          withDark: "is-dark"
        },
        "with-form"
      )}
    />
  ))

  .add('With light', () => (
    <Header
      tabClassName={select(
        "Type",
        {
          default: "",
          withFixed: "is-fixed",
          withFixedOnScroll: "is-fixed scroll-header",
          withForm: "with-form",
          withLight: "is-light",
          withDark: "is-dark"
        },
        "is-light"
      )}
    />
  ))

  .add('With dark', () => (
    <>
      <Header
        tabClassName={select(
          "Type",
          {
            default: "",
            withFixed: "is-fixed",
            withFixedOnScroll: "is-fixed scroll-header",
            withForm: "with-form",
            withLight: "is-light",
            withDark: "is-dark"
          },
          "is-dark"
        )}
      />
  
    </>
  ))
