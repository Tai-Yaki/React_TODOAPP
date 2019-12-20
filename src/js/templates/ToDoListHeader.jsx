import React from "react";
import PropTypes from "prop-types";
import Text from "../atoms/Text";
import TextField from "../atoms/TextField";
import Box from "../atoms/Box";
import Button from "../molecules/Button";
import styles from "./templates.scss";

const ToDoListHeader = (props) => {
  const {
    addToDoList, titleValue, setTitleValue, descriptionValue, setDescriptionValue,
  } = props;

  const submitToDoList = () => {
    addToDoList({ title: titleValue, description: descriptionValue });
  };

  const handleKeyPress = (e) => {
    const ENTER = 13;

    if (e.keyCode === ENTER) {
      submitToDoList();
    }
  };

  return (
    <Box className={styles.ToDoList__Header}>
      <Text color="white" br>TODO追加フォーム</Text>
      <Box display="flex" flexDirection="column">
        <TextField placeholder="タイトル" fontSize={20} name="title" value={titleValue} onKeyDown={handleKeyPress} onChange={(e) => { setTitleValue(e.target.value); }} />
        <TextField placeholder="内容" fontSize={20} name="description" value={descriptionValue} onKeyDown={handleKeyPress} onChange={(e) => { setDescriptionValue(e.target.value); }} />
      </Box>
      <Button fontSize={20} color="white" width="100%" onClick={() => { submitToDoList(); }}>追加</Button>
    </Box>
  );
};

ToDoListHeader.propTypes = {
  addToDoList: PropTypes.func,
  titleValue: PropTypes.string,
  setTitleValue: PropTypes.func,
  descriptionValue: PropTypes.string,
  setDescriptionValue: PropTypes.func,
};

ToDoListHeader.defaultProps = {
  addToDoList: () => {},
  titleValue: "",
  setTitleValue: () => {},
  descriptionValue: "",
  setDescriptionValue: () => {},
};

export default ToDoListHeader;
