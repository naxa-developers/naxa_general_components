import React from 'react';
import Tabs from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

storiesOf('Tabs', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Tabs
        tabClassName={select(
                "Type",
                {
                    default: "tab-list is-bg",
                    withBorder: "tab-list is-border",
                    withShadow: "tab-list is-shadow",
                    isCenter: "tab-list is-center"
                },
                "tab-list is-bg"
            )}
        />
    ))

    .add('with border', () => (
        <Tabs
        tabClassName={select(
            "Type",
            {
                default: "tab-list is-bg",
                withBorder: "tab-list is-border",
                withShadow: "tab-list is-shadow",
                isCenter: "tab-list is-center"
            },
            "tab-list is-border"
        )}
    />
       
    ))

    .add('with shadow', () => (
        <Tabs
        tabClassName={select(
            "Type",
            {
                default: "tab-list is-bg",
                withBorder: "tab-list is-border",
                withShadow: "tab-list is-shadow",
                isCenter: "tab-list is-center"
            },
            "tab-list is-shadow"
        )}
    />
    ))

    .add('Is-Center', () => (
        <Tabs
        tabClassName={select(
            "Type",
            {
                default: "tab-list is-bg",
                withBorder: "tab-list is-border",
                withShadow: "tab-list is-shadow",
                isCenter: "tab-list is-center"
            },
            "tab-list is-center"
        )}
    />
    ))

    .add('Is-End', () => (
        <Tabs
        tabClassName={select(
            "Type",
            {
                default: "tab-list is-bg",
                withBorder: "tab-list is-border",
                withShadow: "tab-list is-shadow",
                isCenter: "tab-list is-center"
            },
            "tab-list is-end"
        )}
    />
    ))