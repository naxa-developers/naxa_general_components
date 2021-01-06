import React from 'react';
import List, { ListItem } from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Duolingo from './../../img/tabs/Duolingo.png';
import Flurry from './../../img/tabs/Flurry.png';
import { list, listWithLinks } from './list.data';

storiesOf('Lists', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <List className='is-icons'>
      {list.map(item => (
        <ListItem>{item.title}</ListItem>
      ))}
    </List>
  ))

  .add('With Links', () => (
    <List className='list is-icons'>
      {listWithLinks.map(item => (
        <ListItem withLink link='#'>
          {item.title}
        </ListItem>
      ))}
    </List>
  ))
  .add('With Image', () => (
    <List class='list tab-list'>
      <ListItem
        withImage
        imageTag={
          <a>
            <img src={Duolingo} alt='image' />
          </a>
        }
      ></ListItem>
      <ListItem
        withImage
        imageTag={
          <a>
            <img src={Flurry} alt='image' />
          </a>
        }
      ></ListItem>
    </List>
  ));
