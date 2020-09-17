import React from 'react';
import './sidenav.scss';

const Sidenav= (props) => (
  <main className="body-wrap">
    <aside className={`sidenav ${props.className}`} onClick={props.onClick}>
    </aside>
    <section className="content">

    </section>
  </main>
  );
  export default Sidenav;