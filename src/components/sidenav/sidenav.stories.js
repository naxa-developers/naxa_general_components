import React from 'react';
import Sidenav from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

const navListArray = [
  {
    'id': 1,
    'label': 'Menu 1',
    'hasSubmenu': true,
    'submenu': [
      {
        'id': 1,
        'submenuLabel': 'Submenu 1'
      },
      {
        'id': 2,
        'submenuLabel': 'Submenu 2'
      },
      {
        'id': 3,
        'submenuLabel': 'Submenu 3'
      }],
  },
  {
    'id': 2,
    'label': 'Menu 2',
    'hasSubmenu': false,
  },
  {
    'id': 3,
    'label': 'Menu 3',
    'hasSubmenu': true,
    'submenu': [
      {
        'id': 1,
        'submenuLabel': 'Submenu 4'
      },
      {
        'id': 2,
        'submenuLabel': 'Submenu 5'
      },
      {
        'id': 3,
        'submenuLabel': 'Submenu 6'
      }],
  },
  {
    'id': 4,
    'label': 'Menu 4',
    'hasSubmenu': false,
  },
  {
    'id': 5,
    'label': 'Menu 5',
    'hasSubmenu': false,
  },

]

storiesOf('Sidenav', module)
  .addDecorator(withKnobs)
  .add('With Sidenav-Push', () => ( 
    <Sidenav 
    asideClass=''
    mainClass= 'sidenav-push'
    navList={object("Navlist Array", navListArray)}
    />

  ))

  .add('With Sidenav-partial-push', () => ( 
    <Sidenav 
    asideClass=''
    mainClass= 'sidenav-partial-push'
    hasSubmenu={true}
    />
  ))

  // .add('With Overlay', () => ( 
  //   <main className="body-wrapper sidenav-overlay sidenav-collapse">
  //     <aside className="sidenav">
  //       <header className="sidenav-header ">
  //           <a href="#" class="close-nav"><i class="fas fa-times"></i></a>
  //       </header>
  //       <ul className="sidenav-body">
  //         <ul class="sidenav-menu">
  //             <li><a href="#" class="menu-title "><span>Submenu 1</span></a></li>
  //             <li><a href="#" class="menu-title"><span>Submenu 2</span></a></li>
  //             <li> <a href="#" class="menu-title"><span>Submenu 3</span></a> </li>
  //             <li><a href="#" class="menu-title "><span>Submenu 4</span></a></li>
  //         </ul>
  //       </ul>
  //     </aside>
  //     <section className="content">
  //       <h2>Sidenav content</h2>
  //       <p>Hello World!</p>
  //       <div class="bars"><a href="#" class="open-nav"><i class="fas fa-bars"></i></a></div>
  //       <p>
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //       </p>
        
  //     </section>
  //   </main>
  // ))

  