import React from 'react';
import List from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Duolingo from './../../img/tabs/Duolingo.png';
import Flurry from './../../img/tabs/Flurry.png';

storiesOf('Lists', module)
  .addDecorator(withKnobs)
  .add('Default', () => ( 
      <ul class="list is-icons">
        <li><i class="fas fa-angle-double-right"></i>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam perspiciatis unde omnis iste natus error  totam rem aperiam  perspiciatis unde omnis iste natus error </li>
        <li><i class="fas fa-angle-double-right"></i>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</li>
        <li><i class="fas fa-angle-double-right"></i>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia</li>
        <li><i class="fas fa-angle-double-right"></i>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</li>
      </ul>
  ))
  
  .add('With Links', () => ( 
    <ul class="list is-icons">
      <li><i class="fas fa-angle-double-right"></i><a href="#">Sed ut perspiciatis unde omnis iste</a> </li>
      <li><i class="fas fa-angle-double-right"></i><a href="#">omnis iste natus error </a></li>
      <li><i class="fas fa-angle-double-right"></i><a href="#">Et harum quidem rerum facilis</a></li>
      <li><i class="fas fa-angle-double-right"></i><a href="#">ut perspiciatis unde omnis</a></li>
    </ul>
))
  .add('With Image', () => ( 
    <ul class="list tab-list">
      <li>
          <a>
              <img src={Duolingo} alt="image"/>
          </a>
      </li>
      <li>
          <a>
              <img src={Flurry} alt="image"/>
          </a>
      </li>
      <li>
          <a>
              <img src={Duolingo} alt="image"/>
          </a>
      </li>
      <li>
          <a>
              <img src={Flurry} alt="image"/>
          </a>
      </li>
    </ul>
))