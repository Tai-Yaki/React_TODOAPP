import React from "react";
import PropTypes from "prop-types";
import Text from "../atoms/Text";
import CloseButton from "../atoms/CloseButton";
import styles from "./molecules.scss";

const Card = ({
  title, description, close, closeFunc,
}) => (
  <div className={styles.Card}>
    {
      close && <CloseButton closeFunc={closeFunc} />
    }
    <div className={styles.Card__Header}>
      <Text fontSize={16} fontWeight="bold">{ title }</Text>
    </div>

    <div className={styles.Card__Footer}>
      <Text fontSize={12}>{ description }</Text>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  close: PropTypes.bool,
  closeFunc: PropTypes.func,
};

Card.defaultProps = {
  close: false,
  closeFunc: () => {},
};

export default Card;
