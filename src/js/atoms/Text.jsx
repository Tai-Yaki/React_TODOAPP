import React from "react";
import PropTypes from "prop-types";

const styleGenerator = ({ fontSize, color, fontWeight }) => ({
  fontSize: fontSize || 16,
  color: color || "black",
  fontWeight: fontWeight || "nomal",
});

const Text = (props) => {
  const { children, br } = props;

  return (
    <span style={styleGenerator(props)}>
      { children }
      { br && <br /> }
    </span>
  );
};

Text.propTypes = {
  children: PropTypes.string,
  br: PropTypes.bool,
};

Text.defaultProps = {
  children: "",
  br: false,
};

export default Text;
