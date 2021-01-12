import React from 'react';
import Tabs, { Tab } from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
<<<<<<< HEAD
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
// import Duolingo from './../../img/tabs/Duolingo.png';
// import Flurry from './../../img/tabs/Flurry.png';

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Tabs className="is-border">
      <Tab tab="tab1">
        <h1>tab1</h1>
      </Tab>
      <Tab tab="tab2">
        <h1>tab2</h1>
      </Tab>
    </Tabs>
  ));

//   .add('with border', () => (
//     <div class="custom-tab">
//       <ul class="tab-list is-border">
//           <li class=""><a href="#"  data-tab="tab1">Test 1</a></li>
//           <li class=""><a href="#" data-tab="tab2">Test 2</a></li>
//           <li class="current"><a href="#" data-tab="tab3">Test 3</a></li>
//       </ul>
//       <div class="custom-tab-content">
//           <div class="tab-item" id="tab1">
//               <ul class="tab-list">
//                   <li>
//                       <a href="#">
//                           <img src={Duolingo} alt="client"/>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="#">
//                           <img src={Flurry} alt="client"/>
//                       </a>
//                   </li>
//               </ul>
//           </div>
//           <div class="tab-item" id="tab2">
//               <ul class="tab-list">
//                   <li>
//                       <a href="#">
//                           <img src={Duolingo} alt="client"/>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="#">
//                           <img src={Flurry} alt="client"/>
//                       </a>
//                   </li>
//               </ul>
//           </div>
//           <div class="tab-item current" id="tab2">
//               <ul class="tab-list">
//                   <li>
//                       <a href="#">
//                           <img src={Duolingo} alt="client"/>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="#">
//                           <img src={Flurry} alt="client"/>
//                       </a>
//                   </li>
//               </ul>
//           </div>

//       </div>
//   </div>
//   ))

//   .add('with shadow', () => (
//     <div class="custom-tab">
//       <ul class="tab-list is-shadow">
//           <li class=""><a href="#"  data-tab="tab1">Test 1</a></li>
//           <li class=""><a href="#" data-tab="tab2">Test 2</a></li>
//           <li class="current"><a href="#" data-tab="tab3">Test 3</a></li>
//       </ul>
//       <div class="custom-tab-content">
//           <div class="tab-item" id="tab1">
//               <ul class="tab-list">
//                   <li>
//                       <a href="#">
//                           <img src={Duolingo} alt="client"/>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="#">
//                           <img src={Flurry} alt="client"/>
//                       </a>
//                   </li>
//               </ul>
//           </div>
//           <div class="tab-item" id="tab2">
//               <ul class="tab-list">
//                   <li>
//                       <a href="#">
//                           <img src={Duolingo} alt="client"/>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="#">
//                           <img src={Flurry} alt="client"/>
//                       </a>
//                   </li>
//               </ul>
//           </div>
//           <div class="tab-item current" id="tab2">
//               <ul class="tab-list">
//                   <li>
//                       <a href="#">
//                           <img src={Duolingo} alt="client"/>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="#">
//                           <img src={Flurry} alt="client"/>
//                       </a>
//                   </li>
//               </ul>
//           </div>

//       </div>
//   </div>
//   ))

//   .add('Is-Center', () => (
//     <div class="custom-tab">
//       <ul class="tab-list is-bg is-center">
//           <li class=""><a href="#"  data-tab="tab1">Test 1</a></li>
//           <li class=""><a href="#" data-tab="tab2">Test 2</a></li>
//           <li class="current"><a href="#" data-tab="tab3">Test 3</a></li>
//       </ul>
//       <div class="custom-tab-content">
//           <div class="tab-item" id="tab1">
//               <ul class="tab-list is-center">
//                   <li>
//                       <a href="#">
//                           <img src={Duolingo} alt="client"/>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="#">
//                           <img src={Flurry} alt="client"/>
//                       </a>
//                   </li>
//               </ul>
//           </div>
//           <div class="tab-item" id="tab2">
//               <ul class="tab-list is-center">
//                   <li>
//                       <a href="#">
//                           <img src={Duolingo} alt="client"/>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="#">
//                           <img src={Flurry} alt="client"/>
//                       </a>
//                   </li>
//               </ul>
//           </div>
//           <div class="tab-item current" id="tab2">
//               <ul class="tab-list is-center">
//                   <li>
//                       <a href="#">
//                           <img src={Duolingo} alt="client"/>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="#">
//                           <img src={Flurry} alt="client"/>
//                       </a>
//                   </li>
//               </ul>
//           </div>

//       </div>
//   </div>
//   ))

//   .add('Is-End', () => (
//     <div class="custom-tab">
//       <ul class="tab-list is-bg is-end">
//           <li class=""><a href="#"  data-tab="tab1">Test 1</a></li>
//           <li class=""><a href="#" data-tab="tab2">Test 2</a></li>
//           <li class="current"><a href="#" data-tab="tab3">Test 3</a></li>
//       </ul>
//       <div class="custom-tab-content">
//           <div class="tab-item" id="tab1">
//               <ul class="tab-list is-end">
//                   <li>
//                       <a href="#">
//                           <img src={Duolingo} alt="client"/>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="#">
//                           <img src={Flurry} alt="client"/>
//                       </a>
//                   </li>
//               </ul>
//           </div>
//           <div class="tab-item" id="tab2">
//               <ul class="tab-list is-end">
//                   <li>
//                       <a href="#">
//                           <img src={Duolingo} alt="client"/>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="#">
//                           <img src={Flurry} alt="client"/>
//                       </a>
//                   </li>
//               </ul>
//           </div>
//           <div class="tab-item current" id="tab2">
//               <ul class="tab-list is-end">
//                   <li>
//                       <a href="#">
//                           <img src={Duolingo} alt="client"/>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="#">
//                           <img src={Flurry} alt="client"/>
//                       </a>
//                   </li>
//               </ul>
//           </div>

//       </div>
//   </div>
//   ))
=======
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
>>>>>>> a927914cb247d4067616864c033478c6d55be8e0
