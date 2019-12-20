import React from "react";
import PropTypes from "prop-types";
import styles from "./atoms.scss";

const CloseButton = ({ closeFunc }) => (
  <div className={styles.CloseButtonWrap}>
    <button type="button" className={styles.CloseButton} aria-label="close" onClick={closeFunc}><span /></button>
  </div>
);

CloseButton.propTypes = {
  closeFunc: PropTypes.func,
};

CloseButton.defaultProps = {
  closeFunc: () => {},
};

export default CloseButton;
