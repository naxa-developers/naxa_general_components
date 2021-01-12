<<<<<<< HEAD
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
=======
import React, { useState } from 'react';
import Duolingo from './../../img/tabs/Duolingo.png';
import Flurry from './../../img/tabs/Flurry.png';
>>>>>>> a927914cb247d4067616864c033478c6d55be8e0
import './tabs.scss';

<<<<<<< HEAD
function Tab({ tab, children }) {
  return <div tab={tab}>{children}</div>;
}

class Tabs extends Component {
  constructor(props) {
    super(props);
    const {
      props: { children },
    } = this;
    this.state = {
      activeTab:
        children && Children.count(children) === 1
          ? children.props.tab
          : children[0].props.tab,
    };
  }

  onClickTabItem = (tab) => {
    const { getActiveTab } = this.props;
    this.setState({ activeTab: tab });
    getActiveTab(tab);
  };

  render() {
    const {
      onClickTabItem,
      props: { children, className },
      state: { activeTab },
    } = this;

    return (
      <div className="custom-tab">
        <ul className={`tab-list is-bg ${className}`}>
          {Children.map(children, (child) => {
            const { tab } = child.props;
            return (
              <li key={tab} className={activeTab === tab ? 'current' : ''}>
                {/* eslint-disable-next-line */}
                <a
                  onClick={() => onClickTabItem(tab)}
                  onKeyDown={() => onClickTabItem(tab)}
                  role="button"
                  tabIndex={0}
                  style={{ outline: 0 }}
                >
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="custom-tab-content">
          {Children.map(children, (child) => {
            if (child.props.tab !== activeTab) return null;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Tabs.defaultProps = {
  header: null,
  className: '',
  footer: null,
  getActiveTab: () => {},
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  header: PropTypes.node,
  getActiveTab: PropTypes.func,
  footer: PropTypes.node,
};

export { Tab };
export default Tabs;
=======
function Tabs({ tabClassName }) {
    const [tabState, setTabState] = useState(0);
    return (

        <div className="custom-tab">
            <ul className={tabClassName == 'tab-list is-center' ? "tab-list is-bg is-center" : tabClassName}>
                <li className={tabState === 0 ? "current" : ""} onClick={() => setTabState(0)}><a data-tab="tab1">Test 1</a></li>
                <li className={tabState === 1 ? "current" : ""} onClick={() => setTabState(1)}><a data-tab="tab2">Test 2</a></li>
                <li className={tabState === 2 ? "current" : ""} onClick={() => setTabState(2)}><a data-tab="tab3">Test 3</a></li>
            </ul>
            <div className="custom-tab-content">
                <div className="tab-item" id="tab1">
                    <ul className={tabClassName == 'tab-list is-center' ? "tab-list is-bg is-center" : "tab-list"}>

                        <li>
                            <a href="#">
                                <img src={Duolingo} alt="client" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Flurry} alt="client" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="tab-item current" id="tab2">
                    <ul className={tabClassName == 'tab-list is-center' ? "tab-list is-bg is-center" : "tab-list"}>
                        <li>
                            <a href="#">
                                <img src={Duolingo} alt="client" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Flurry} alt="client" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Tabs;
>>>>>>> a927914cb247d4067616864c033478c6d55be8e0
