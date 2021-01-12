import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import './tabs.scss';

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
