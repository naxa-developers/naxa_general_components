import React from 'react';
import './buttonnew.scss';
import PropTypes from 'prop-types';

const ButtonNew = ({onClick,iconName,btnLabel,btnType,btnSize,isDisabled}) => {
  const btnTypes = ()=>{
    switch (btnType) {
      case 'Primary':
        return 'is-btn_primary';
      case 'Secondary':
        return 'is-btn_secondary';
    
      default:
        return 'is-btn_primary';
    }
  }
  const btnSizes = ()=>{
    switch (btnSize) {
      case 'Small':
        return 'is-btn_sm';
      case 'Full':
        return 'is-btn_full';
      case 'Auto':
        return 'is-btn_auto';
    
      default:
        return 'is-btn_sm';
    }
  }
  return (
  <button
    type="button"
    className={`is-btn ${iconName ?'is-btn_icon': ""} ${btnSizes()} ${btnTypes()} ${isDisabled ? '__disable':''} is-center`}
    modal-link="add-layer"
    onClick={onClick}
  >
    {iconName && <i className="material-icons">{iconName}</i>}
    <span>{btnLabel}</span>
  </button>
)};
ButtonNew.PropTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  iconName: PropTypes.string,
  btnLabel: PropTypes.string,
  btnType: PropTypes.string,
  btnSizes: PropTypes.string,
  
}
ButtonNew.defaultProps = {
  iconName: null,
  btnLabel: 'Add',
  btnType: null,
  btnSizes: 'Small',
  isDisabled: false
}

export default ButtonNew;
