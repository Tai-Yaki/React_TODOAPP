import React from "react";
import PropTypes from "prop-types";
import styles from "./molecules.scss";
import Text from "../atoms/Text";

const styleGenerator = ({ height, width, bgColor }) => ({
  height,
  width,
  backgroundColor: bgColor,
});

const Button = (props) => {
  const {
    children, fontSize, color, fontWeight, br, onClick,
  } = props;

  return (
    <div>
      <button type="button" className={styles.Button} style={styleGenerator(props)} onClick={onClick}>
        <Text fontSize={fontSize} color={color} fontWeight={fontWeight} br={br}>{ children }</Text>
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  br: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: "",
  fontSize: 10,
  color: "",
  fontWeight: "",
  br: false,
  onClick: () => {},
};

export default Button;
