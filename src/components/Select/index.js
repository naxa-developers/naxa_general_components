import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './select.scss';

class Select extends PureComponent {
  constructor(props) {
    super(props);
    const {
      props: { options },
    } = this;

    this.state = {
      showList: false,
      searchText: '',
      selectTitle: this.getSelectTitle(),
      masterOptions: options,
      filteredOptions: options,
      selectedOption: {},
    };
  }

  componentDidUpdate(prevProps) {
    this.updateStateHandler(prevProps);
  }

  getSelectTitle = () => {
    const {
      props: { defaultValue, options },
    } = this;

    if (defaultValue) {
      const selectedOption = options.find((opt) => opt.value === defaultValue);
      return selectedOption ? selectedOption.label : 'Select';
    }
    return 'Select';
  };

  updateStateHandler = (prevProps) => {
    const {
      props: { options, defaultValue },
      getSelectTitle,
    } = this;
    if (
      options !== prevProps.options ||
      JSON.stringify(options) !== JSON.stringify(prevProps.options)
    ) {
      this.setState({
        selectTitle: this.getSelectTitle(),
        filteredOptions: options,
        masterOptions: options,
        selectedOption: {},
      });
    }
    if (defaultValue !== prevProps.defaultValue) {
      this.setState({
        selectTitle: this.getSelectTitle(),
      });
    }
  };

  toggleListHandler = () => {
    this.setState((prevState) => {
      if (prevState.showList) {
        return {
          showList: !prevState.showList,
          filteredOptions: prevState.masterOptions,
          searchText: '',
        };
      }
      return { showList: !prevState.showList };
    });
  };

  closeListHandler = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      this.setState((prevState) => {
        return {
          showList: false,
          filteredOptions: prevState.masterOptions,
          searchText: '',
        };
      });
    }
  };

  searchHandler = (e) => {
    const {
      target: { value },
    } = e;
    const {
      state: { masterOptions },
    } = this;
    let opts;

    if (!value) {
      opts = masterOptions;
    } else {
      opts = masterOptions.filter((opt) =>
        opt.label
          .replace(/ /g, '')
          .toUpperCase()
          .includes(value.trim().replace(/ /g, '').toUpperCase())
      );
    }

    this.setState({
      searchText: value,
      filteredOptions: opts,
    });
  };

  onClickHandler = (opt) => {
    const {
      props: { onChange },
    } = this;
    this.setState(
      {
        searchText: '',
        showList: false,
        selectTitle: opt.label,
        selectedOption: opt,
      },
      () => {
        const {
          state: { selectedOption },
        } = this;
        onChange(selectedOption);
      }
    );
  };

  renderSearchBar = () => {
    const {
      state: { searchText },

      searchHandler,
    } = this;

    return (
      <div className="search-bar">
        <div className="search-wrap">
          <span className="span-group">
            <i className="material-icons">search</i>
          </span>
          <input
            className="form-control"
            name="searchText"
            value={searchText}
            autoComplete="off"
            onChange={(e) => searchHandler(e)}
            ref={(el) => {
              this.searchEl = el;
            }}
          />
        </div>
      </div>
    );
  };

  renderSearchBar = () => {
    const {
      state: { searchText },

      searchHandler,
    } = this;

    return (
      <div className="search-bar">
        <div className="search-wrap">
          <input
            className="form-control"
            name="searchText"
            value={searchText}
            autoComplete="off"
            placeholder="Search"
            onChange={(e) => searchHandler(e)}
            ref={(el) => {
              this.searchEl = el;
            }}
          />
        </div>
      </div>
    );
  };

  renderList = (options) => {
    // const {
    //   state: { filteredOptions },
    // } = this;

    if (options.length === 0) {
      return (
        <li>
          <label>No Options</label>
        </li>
      );
    }

    return options.map((opt) => {
      if (opt.options) {
        return (
          <div>
            <p>{opt.label}</p>
            <ul style={{ padding: '0.325rem 0' }} key={opt.label}>
              {this.renderList(opt.options)}
            </ul>
          </div>
        );
      }

      return (
        <li
          key={opt.value}
          onClick={() => this.onClickHandler(opt)}
          onKeyUp={() => this.onClickHandler(opt)}
          role="menuitem"
        >
          <i class="fas fa-hand-point-right"></i>
          <span>{opt.label}</span>
        </li>
      );
    });
  };

  render() {
    const {
      state: { showList, selectTitle, filteredOptions },
      props: { withSearch },

      toggleListHandler,
      closeListHandler,
    } = this;
    return (
      <div
        className="custom-select"
        role="button"
        tabIndex="0"
        onBlur={closeListHandler}
      >
        <p
          className="selected-item"
          role="button"
          tabIndex="0"
          onClick={toggleListHandler}
          onKeyUp={toggleListHandler}
        >
          <span>{selectTitle}</span>
        </p>
        <ul className="select-list left-dropdown">
          {/* {showList && this.renderList()}
           */}
          {showList && withSearch && this.renderSearchBar()}
          {showList && this.renderList(filteredOptions)}{' '}
        </ul>
      </div>
    );
  }
}

Select.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  withSearch: PropTypes.bool,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  defaultValue: null,
  withSearch: false,
};

export default Select;
