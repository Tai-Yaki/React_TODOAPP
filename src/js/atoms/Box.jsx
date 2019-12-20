import React from "react";
import PropTypes from "prop-types";

const styleGenerator = ({
  display, flexDirection, flexWrap, justifyContent, alignItems, alignContent,
}) => ({
  display: display || "",
  flexDirection: flexDirection || "",
  flexWrap: flexWrap || "",
  justifyContent: justifyContent || "",
  alignItems: alignItems || "",
  alignContent: alignContent || "",
});

const Box = (props) => {
  const { children } = props;

  return (
    <div style={styleGenerator(props)}>
      { children }
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.element,
};

Box.defaultProps = {
  children: <div />,
};

export default Box;
