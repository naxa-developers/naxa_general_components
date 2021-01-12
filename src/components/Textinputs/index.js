import React from "react";
import PropTypes from "prop-types";
import "./form-control.scss";
import "./../../css/all.css";

export const TextInputs = ({
  type,
  className,
  placeholder,
  name,
  required,
  id,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={className}
      placeholder={placeholder}
      required={required}
    />
  );
};

const FormGroupWrapper = ({ className, children, border }) => {
  return (
    <div className={`form-group ${className}`}>
      {children}
      {border && <span className="border-span" />}
    </div>
  );
};

TextInputs.defaultProps = {
  type: "text",
  className: "",
  placeholder: "",
  name: "",
  id: "",
  required: false,
};

TextInputs.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};

FormGroupWrapper.defaultProps = {
  className: "",
  children: null,
  border: false,
};

FormGroupWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  border: PropTypes.bool,
};

export default FormGroupWrapper;
