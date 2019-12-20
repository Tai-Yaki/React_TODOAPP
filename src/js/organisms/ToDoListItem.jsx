import React from "react";
import PropTypes from "prop-types";
import Card from "../molecules/Card";

const ToDoListItem = ({
  title, description, close, closeFunc,
}) => (
  <Card
    title={title}
    description={description}
    close={close}
    closeFunc={closeFunc}
  />
);

ToDoListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  close: PropTypes.bool,
  closeFunc: PropTypes.func,
};

ToDoListItem.defaultProps = {
  close: false,
  closeFunc: () => {},
};

export default ToDoListItem;
