import React from 'react';
import PropTypes from 'prop-types';
import Logo from './../../img/logo/logo-white.png';
import './sidenav.scss';


class Sidenav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      togglesidenav: true,
      activeSubmenu: null,
      activeSubmenuItem: null,
    }
  }

  handleTogglesidenav = () => {
    this.setState(prevState => ({
      togglesidenav: !prevState.togglesidenav,
    }))
  }
  

  handleSubmenuActive = (submenuId) => {
    this.setState(prevState => ({
      activeSubmenu: prevState.activeSubmenu === submenuId ? null : submenuId,
      activeSubmenuItem: null,
    }))
  }

  handleSubmenuList = (menuId, submenuItemId) => {
    this.setState({
      activeSubmenu: menuId,
      activeSubmenuItem: submenuItemId
    })
  }

  render() {
    const {
      state: {togglesidenav, activeSubmenu, activeSubmenuItem },
      props: { navList, asideClass, mainClass },
      handleTogglesidenav,
      handleSubmenuActive,
      handleSubmenuList,
    } = this;
    return (
      <main className={togglesidenav ? `body-wrapper ${mainClass}`: `body-wrapper ${mainClass} sidenav-collapse`}>
        <aside className={`sidenav ${asideClass}`}
        >
          <header className="sidenav-header">
            <a  onClick={() => handleTogglesidenav()} href="#" className="close-nav"><i className="fas fa-times"></i></a>
            <a href="#" className="logo"><img src={Logo} /></a>
            {/* <a
            onClick={() => handleTogglesidenav()}
            href="#" className="toggle-sidebar sidenav-collapse ">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a> */}
          </header>
          <ul className="sidenav-body">
            <ul className="sidenav-menu">

              {
                navList && navList.map(menu => {
                  return menu.hasSubmenu ? (
                    <React.Fragment key={menu.id}>
                      <li className={activeSubmenu === menu.id ? "is-submenu active" : 'is-submenu'} >
                        <a href="#" onClick={() => {
                          handleSubmenuActive(menu.id)
                        }} className="menu-title"><i className="fas fa-university"></i><span>{menu.label}</span></a>
                        <ul className="submenu">
                          {
                            menu.submenu && menu.submenu.map(submenuItem => {
                              return (
                                <li
                                  style={{ cursor: 'pointer' }}
                                  onClick={() => handleSubmenuList(menu.id, submenuItem.id)}
                                  key={submenuItem.id}><a className="#/">{submenuItem.submenuLabel}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    </React.Fragment>
                  ) : (
                      <li onClick={() => handleSubmenuActive(menu.id)}><a href="#" className="menu-title "><i className="fas fa-fan"></i><span>{menu.label}</span></a></li>
                    )
                })
              }
            </ul>
          </ul>
        </aside>
        <section className="content">
          <h2>Sidenav content</h2>
        <h4>Active menu: <span>{activeSubmenu || 'None'}</span></h4>
        <h4>Active Submenu: <span>{activeSubmenuItem || 'None'}</span></h4>
        <div class="bars"><a 
        onClick={() => handleTogglesidenav()}
        href="#" class="open-nav"><i class="fas fa-bars"></i></a></div>
        </section>
      </main>

    )
  }
}

export default Sidenav;