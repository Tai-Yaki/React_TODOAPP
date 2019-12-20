import React from "react";
import PropTypes from "prop-types";
import styles from "./atoms.scss";

const styleGenerator = ({
  fontSize, color, width, height,
}) => ({
  fontSize: fontSize || 16,
  color: color || "black",
  width,
  height,
});

const TextField = (props) => {
  const {
    name, placeholder, type, value, onChange, onKeyDown,
  } = props;

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      className={styles.TextField}
      style={styleGenerator(props)}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

TextField.defaultProps = {
  name: "",
  placeholder: "",
  type: "",
  value: "",
  onChange: () => {},
  onKeyDown: () => {},
};

export default TextField;
